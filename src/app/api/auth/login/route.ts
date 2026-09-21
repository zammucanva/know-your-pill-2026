import { NextRequest, NextResponse } from "next/server";

// This route must be dynamic — it reads/writes cookies and queries the database.
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import {
  checkLoginAllowed,
  getClientSource,
  recordLoginFailure,
  recordLoginSuccess,
} from "@/lib/rate-limit";
import { createSessionForUser, setSessionCookie } from "@/lib/session";
import { isSessionSecretConfigured } from "@/lib/session-secret";

/**
 * POST /api/auth/login
 *
 * Hardened login flow:
 *   1. validate request shape
 *   2. derive source server-side (never client-supplied)
 *   3. rate-limit check BEFORE expensive bcrypt verification
 *   4. user lookup + password verification
 *      - unknown email and wrong password return the IDENTICAL response
 *        (same status, same message) to prevent account enumeration
 *      - a dummy bcrypt comparison runs for unknown accounts so response
 *        timing does not reveal account existence
 *   5. on success: reset the account's rate-limit counters, mint a fresh
 *      random server-side session, set the HttpOnly cookie
 *
 * Fails closed with HTTP 500 when SESSION_SECRET is not configured.
 */

const GENERIC_LOGIN_ERROR = "Invalid email or password";

// Dummy hash used to equalize timing for unknown accounts (hash of a
// throwaway random string, bcrypt cost 12 — same cost as real passwords).
const DUMMY_BCRYPT_HASH =
  "$2b$12$6Qw/vvDS/r.1h76sjDs0j.i20uFJ.9SnBf4enrV6C48yBCktW2l2a";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!isSessionSecretConfigured()) {
    // Fail closed — authentication cannot operate without the session secret.
    return NextResponse.json(
      { error: "Authentication is temporarily unavailable" },
      { status: 500 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { email, password } = (body ?? {}) as { email?: unknown; password?: unknown };
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.length === 0 ||
      password.length === 0
    ) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Normalize email to lowercase for lookup (server-side only)
    const normalizedEmail = email.toLowerCase().trim();
    const source = getClientSource(req);

    // ── Rate limit BEFORE the expensive bcrypt work ──
    const decision = await checkLoginAllowed(normalizedEmail, source);
    if (!decision.allowed) {
      return NextResponse.json(
        { error: "Too many login attempts. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(decision.retryAfterSeconds) },
        }
      );
    }

    const user = await db.user.findUnique({ where: { email: normalizedEmail } });

    if (!user) {
      // Unknown account: record the failure (throttles probing) and run a
      // dummy bcrypt compare so timing matches the wrong-password path.
      await recordLoginFailure(normalizedEmail, source);
      await bcrypt.compare(password, DUMMY_BCRYPT_HASH);
      return NextResponse.json({ error: GENERIC_LOGIN_ERROR }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      await recordLoginFailure(normalizedEmail, source);
      return NextResponse.json({ error: GENERIC_LOGIN_ERROR }, { status: 401 });
    }

    // ── Success: reset counters, mint a fresh session ──
    await recordLoginSuccess(normalizedEmail, source);
    const session = await createSessionForUser(user.id);
    await setSessionCookie(session.token, session.expiresAt);

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      learnerType: user.learnerType,
      emailVerified: user.emailVerified,
    });
  } catch (error) {
    // Log the error CLASS only — never credentials or user identifiers.
    console.error("Login error:", (error as Error)?.name ?? "UnknownError");
    return NextResponse.json(
      { error: "Failed to log in. Please try again." },
      { status: 500 }
    );
  }
}
