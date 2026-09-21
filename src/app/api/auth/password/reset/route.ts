import { logger } from "@/lib/logger";\nimport { NextRequest, NextResponse } from "next/server";

// Dynamic route — database access (and the response must never be cached).
export const dynamic = "force-dynamic";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import {
  checkLoginAllowed,
  getClientSource,
  recordLoginFailure,
} from "@/lib/rate-limit";
import { consumePasswordResetToken } from "@/lib/password-reset";
import { revokeAllSessionsForUser } from "@/lib/session";

/**
 * POST /api/auth/password/reset
 *
 * Completes a password reset using a single-use token:
 *   { token: string, newPassword: string }
 *
 * Security properties:
 *   - SINGLE-USE: consuming the token is one atomic conditional update —
 *     a token can never be used twice, even under concurrent requests.
 *   - SHORT EXPIRY: tokens older than 30 minutes are rejected.
 *   - GENERIC FAILURES: unknown, already-used, and expired tokens return the
 *     IDENTICAL 400 response — no way to distinguish the three cases.
 *   - SESSION INVALIDATION: a successful reset revokes ALL of the user's
 *     server-side sessions (any stolen cookie from before the reset dies).
 *     The user must log in again with the new password; no session is
 *     minted here.
 *   - RATE LIMITED: invalid token attempts are counted per (sha256(token),
 *     source) through the DB-backed lockout machinery. Each distinct wrong
 *     guess gets its own counter, while the shared source dimension
 *     accumulates — brute-forcing tokens from one source locks that source
 *     out without locking out other users.
 *   - Password policy matches signup (minimum 8 characters) plus a maximum
 *     length guard against absurd input.
 */

const GENERIC_TOKEN_ERROR = "Invalid or expired reset token";
const MAX_PASSWORD_LENGTH = 128;

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { token, newPassword } = (body ?? {}) as {
      token?: unknown;
      newPassword?: unknown;
    };
    if (typeof token !== "string" || typeof newPassword !== "string" ||
        token.length === 0 || newPassword.length === 0) {
      return NextResponse.json(
        { error: "Reset token and new password are required" },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }
    if (newPassword.length > MAX_PASSWORD_LENGTH) {
      return NextResponse.json(
        { error: "Password must be at most 128 characters" },
        { status: 400 }
      );
    }
    // Bound token input size so absurd strings cannot abuse hashing/lookup.
    if (token.length > 256) {
      return NextResponse.json({ error: GENERIC_TOKEN_ERROR }, { status: 400 });
    }

    const source = getClientSource(req);
    // Throttle token guessing: per-guess account dimension (unique per guess,
    // therefore inert) + shared source dimension (accumulates and locks).
    const guessKey = `reset-token:${token}`;
    const decision = await checkLoginAllowed(guessKey, source);
    if (!decision.allowed) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(decision.retryAfterSeconds) },
        }
      );
    }

    const userId = await consumePasswordResetToken(token);
    if (!userId) {
      await recordLoginFailure(guessKey, source);
      return NextResponse.json({ error: GENERIC_TOKEN_ERROR }, { status: 400 });
    }

    // Update the password hash (same bcrypt cost as signup/login).
    const passwordHash = await bcrypt.hash(newPassword, 12);
    await db.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    // Invalidate every existing session for this account.
    await revokeAllSessionsForUser(userId);

    return NextResponse.json({
      message: "Password has been reset. Please log in with your new password.",
    });
  } catch (error) {
    // Log the error CLASS only — never tokens or identifiers.
    logger.error("Password reset error:", error);
    return NextResponse.json(
      { error: "Failed to reset password. Please try again." },
      { status: 500 }
    );
  }
}
