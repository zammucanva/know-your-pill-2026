import { NextResponse } from "next/server";

// This route must be dynamic — it reads/writes cookies.
export const dynamic = "force-dynamic";
import { clearSessionCookie, resolveSessionFromCookie, revokeSessionFromCookie } from "@/lib/session";

/**
 * GET /api/auth/session
 *
 * Resolves the current user from the SERVER-SIDE session — never from
 * client-controlled cookie contents. Any invalid, tampered, revoked, or
 * expired session yields { user: null }.
 *
 * Legacy cookies from the pre-hardening implementation (unsigned
 * base64-encoded JSON) fail signature validation and are rejected.
 */
export async function GET() {
  const resolved = await resolveSessionFromCookie();

  if (!resolved) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      id: resolved.user.id,
      name: resolved.user.name,
      email: resolved.user.email,
      role: resolved.user.role,
    },
  });
}

/**
 * DELETE /api/auth/session — logout.
 *
 * Revokes the session SERVER-SIDE FIRST (so the token cannot be replayed
 * even if the cookie clear fails or is raced), then clears the cookie.
 * Idempotent: an absent or invalid session still returns success without
 * revealing anything.
 */
export async function DELETE() {
  await revokeSessionFromCookie();
  await clearSessionCookie();
  return NextResponse.json({ success: true });
}
