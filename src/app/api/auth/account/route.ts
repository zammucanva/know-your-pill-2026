import { logger } from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import {
  claimLoginAttempt,
  getClientSource,
  recordLoginFailure,
} from "@/lib/rate-limit";
import { rejectCrossOrigin } from "@/lib/same-origin";
import { clearSessionCookie, resolveSessionFromCookie } from "@/lib/session";

// Dynamic route: reads cookies and writes to the database.
export const dynamic = "force-dynamic";

/**
 * DELETE /api/auth/account
 *
 * Permanently deletes the signed-in user's account and all personal data
 * (App Store 5.1.1(v) / Google Play account-deletion requirement).
 *
 *   body: { confirm: "DELETE", password?: string }
 *
 * - Requires a valid server-side session (401 otherwise).
 * - The user is taken from the session, never from the request body.
 * - Accounts with a password must supply it (a stolen cookie alone cannot
 *   delete the account). Google-only accounts have no password; for them the
 *   active session plus the typed confirmation is the proof.
 * - Wrong-password attempts are throttled through the same DB lockout
 *   machinery as password change (namespaced under "delete:").
 * - Cascading relations in the schema remove sessions, progress, bookmarks,
 *   search history and reset tokens with the user row.
 */
export async function DELETE(req: NextRequest) {
  const crossOrigin = rejectCrossOrigin(req);
  if (crossOrigin) return crossOrigin;
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
    const { confirm, password } = (body ?? {}) as { confirm?: unknown; password?: unknown };
    if (confirm !== "DELETE") {
      return NextResponse.json(
        { error: 'Type "DELETE" to confirm account deletion' },
        { status: 400 }
      );
    }

    const source = getClientSource(req);
    const limitKey = `delete:${session.userId}`;
    const decision = await claimLoginAttempt(limitKey, source);
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
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (user.passwordHash !== "") {
      const valid =
        typeof password === "string" &&
        password.length > 0 &&
        password.length <= 128 &&
        (await bcrypt.compare(password, user.passwordHash));
      if (!valid) {
        await recordLoginFailure(limitKey, source, { sourceOnly: true });
        return NextResponse.json({ error: "Password is incorrect" }, { status: 401 });
      }
    }

    await db.user.delete({ where: { id: session.userId } });
    await clearSessionCookie();

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Account deletion error", error);
    return NextResponse.json(
      { error: "Failed to delete account. Please try again." },
      { status: 500 }
    );
  }
}
