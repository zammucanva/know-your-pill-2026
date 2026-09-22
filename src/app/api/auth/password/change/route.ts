import { logger } from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";

// Dynamic route — reads/writes cookies and queries the database.
export const dynamic = "force-dynamic";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { validatePasswordPolicy } from "@/lib/password-policy";
import {
  checkLoginAllowed,
  getClientSource,
  recordLoginFailure,
} from "@/lib/rate-limit";
import {
  createSessionForUser,
  resolveSessionFromCookie,
  revokeAllSessionsForUser,
  setSessionCookie,
} from "@/lib/session";

/**
 * POST /api/auth/password/change
 *
 * Authenticated password change: { currentPassword, newPassword }.
 *
 * Security properties:
 *   - Requires a valid server-side session (401 otherwise).
 *   - Verifies the CURRENT password before accepting the change (an attacker
 *     with a stolen cookie still cannot rotate the victim's password).
 *   - Rate limited per user+source through the DB-backed lockout machinery
 *     (namespaced under "change:") — repeated wrong current passwords lock
 *     the change dimension without touching the account's login counters.
 *   - SESSION INVALIDATION: on success ALL of the user's sessions are
 *     revoked, then a brand-new fresh session is minted for the CURRENT
 *     client only — every other device stays logged out.
 *   - Password policy is the shared 8–128 policy (src/lib/password-policy.ts)
 *     — identical to signup and reset; plus the new password must differ
 *     from the current one.
 *
 * Fails closed when SESSION_SECRET is not configured — session resolution
 * (signature validation) cannot succeed without it, so the route always
 * returns 401 before any password work.
 */

export async function POST(req: NextRequest) {
  const session = await resolveSessionFromCookie();
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { currentPassword, newPassword } = (body ?? {}) as {
      currentPassword?: unknown;
      newPassword?: unknown;
    };
    if (typeof currentPassword !== "string" || typeof newPassword !== "string" ||
        currentPassword.length === 0 || newPassword.length === 0) {
      return NextResponse.json(
        { error: "Current password and new password are required" },
        { status: 400 }
      );
    }

    const source = getClientSource(req);
    const limitKey = `change:${session.userId}`;
    const decision = await checkLoginAllowed(limitKey, source);
    if (!decision.allowed) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(decision.retryAfterSeconds) },
        }
      );
    }

    const user = await db.user.findUnique({
      where: { id: session.userId },
      select: { passwordHash: true },
    });
    if (!user) {
      // Session resolved but user vanished — treat as unauthenticated.
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) {
      await recordLoginFailure(limitKey, source);
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 401 }
      );
    }

    // Only validate the replacement password after proving control of the
    // current password. This prevents an unauthenticated/wrong-credential
    // request from learning replacement-password policy details.
    const policy = validatePasswordPolicy(newPassword, { subject: "New password" });
    if (!policy.ok) {
      return NextResponse.json({ error: policy.message }, { status: 400 });
    }
    if (newPassword === currentPassword) {
      return NextResponse.json(
        { error: "New password must be different from the current password" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);
    await db.user.update({
      where: { id: session.userId },
      data: { passwordHash },
    });

    // Revoke ALL sessions (including this one), then mint a fresh session
    // for the current client only — every other device is logged out.
    await revokeAllSessionsForUser(session.userId);
    const fresh = await createSessionForUser(session.userId);
    await setSessionCookie(fresh.token, fresh.expiresAt);

    return NextResponse.json({
      message: "Password updated. Other devices have been logged out.",
    });
  } catch (error) {
    // Log the error CLASS only — never credentials or identifiers.
    logger.error("Password change error", error);
    return NextResponse.json(
      { error: "Failed to change password. Please try again." },
      { status: 500 }
    );
  }
}
