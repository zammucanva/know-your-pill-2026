import { logger } from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";

// Dynamic route — database access (and the response must never be cached).
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import {
  checkLoginAllowed,
  getClientSource,
  recordLoginFailure,
} from "@/lib/rate-limit";
import { createPasswordResetToken, invalidatePasswordResetToken } from "@/lib/password-reset";
import { sendPasswordResetEmail } from "@/lib/email";

/**
 * POST /api/auth/password/forgot
 *
 * Requests a password reset for an email address.
 *
 * Security properties:
 *   - ANTI-ENUMERATION: the response is IDENTICAL whether or not the email
 *     belongs to an account (same status, same body, same message). The rate
 *     check also runs before any user lookup. A token is created silently
 *     only when the account exists.
 *   - RATE LIMITED: requests are counted per (reset-namespace identifier,
 *     source) through the same DB-backed lockout machinery as login. Locked
 *     out responses (429) are also identical for known and unknown emails.
 *   - The raw reset token is NEVER included in any response and never logged.
 *     Delivery of the token happens through the configured email provider
 *     (production) or the verified operator process (until email delivery
 *     is configured) — see scripts/create-password-reset.ts.
 *   - A new request invalidates all previous outstanding tokens for the
 *     account (only the latest can be used).
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GENERIC_RESPONSE = {
  message:
    "If an account exists for this email, a password reset has been initiated.",
};

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { email } = (body ?? {}) as { email?: unknown };
    if (typeof email !== "string" || email.length === 0) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    if (!EMAIL_REGEX.test(normalizedEmail) || normalizedEmail.length > 254) {
      // Shape errors carry no account information.
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const source = getClientSource(req);
    // Rate-limit BEFORE any user lookup so locked-out behavior cannot be used
    // to distinguish existing accounts. Namespace the identifier under
    // "reset:" so reset spam does not lock the account's LOGIN counters.
    const decision = await checkLoginAllowed(`reset:${normalizedEmail}`, source);
    if (!decision.allowed) {
      return NextResponse.json(
        { error: "Too many reset requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(decision.retryAfterSeconds) },
        }
      );
    }
    // Count the request (identically for known and unknown emails).
    await recordLoginFailure(`reset:${normalizedEmail}`, source);

    // Silent token creation — the response never differs.
    const user = await db.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true, email: true, name: true },
    });
    if (user) {
      const reset = await createPasswordResetToken(user.id, source);
      try {
        await sendPasswordResetEmail({ to: user.email, name: user.name, token: reset.raw, expiresAt: reset.expiresAt });
      } catch (error) {
        await invalidatePasswordResetToken(reset.raw);
        logger.error("Password reset email delivery failed", error);
      }
    }

    return NextResponse.json(GENERIC_RESPONSE);
  } catch (error) {
    // Log the error CLASS only — no emails, no tokens, no identifiers.
    logger.error("Password reset request error:", error);
    return NextResponse.json(
      { error: "Failed to request password reset. Please try again." },
      { status: 500 }
    );
  }
}
