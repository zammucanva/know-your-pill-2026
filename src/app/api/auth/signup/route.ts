import { logger } from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";

// This route must be dynamic — it reads/writes cookies and queries the database.
// Setting force-static breaks cookie modification (the route becomes a build-time
// artifact with no runtime). In GitHub Pages (static export) mode these routes
// are simply not included in the build, which is the correct behavior there.
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { createSessionForUser, setSessionCookie } from "@/lib/session";
import { isSessionSecretConfigured } from "@/lib/session-secret";

/**
 * POST /api/auth/signup
 *
 * Hardened signup flow:
 *   1. validate name/email/password shape
 *   2. hash password (bcrypt cost 12)
 *   3. create the user
 *   4. mint a FRESH random server-side session immediately (fixation
 *      resistance — no pre-authentication token is ever carried over)
 *
 * Fails closed with HTTP 500 when SESSION_SECRET is not configured.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!isSessionSecretConfigured()) {
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

    const { name, email, password } = (body ?? {}) as {
      name?: unknown;
      email?: unknown;
      password?: unknown;
    };

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" ||
        name.length === 0 || email.length === 0 || password.length === 0) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existing = await db.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const user = await db.user.create({
      data: {
        name,
        email: normalizedEmail,
        passwordHash,
        learnerType: "student",
        role: "user",
      },
    });

    // Fresh server-side session (opaque signed token, hash persisted)
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
    logger.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create account. Please try again." },
      { status: 500 }
    );
  }
}
