import "server-only";

import { resolveSessionFromCookie } from "@/lib/session";

/**
 * getSessionUser — shared helper for API routes.
 *
 * Resolves the authenticated user from the SERVER-SIDE session:
 *   cookie token -> HMAC validation -> hash lookup -> revocation check ->
 *   expiry check -> fresh user record from the database.
 *
 * The cookie contains only an opaque signed token — no user id, email,
 * name, role, or any other authorization data. The user is always resolved
 * from the database, so role changes and deletions take effect on the next
 * request without re-issuing cookies.
 *
 * Returns null if:
 *   - no cookie present
 *   - cookie malformed / signature invalid (tampered, spliced, or legacy
 *     unsigned base64-JSON cookies from the pre-hardening implementation)
 *   - session unknown to the database
 *   - session revoked (e.g. logged out elsewhere)
 *   - session expired
 *   - user no longer exists in the database
 *
 * Throws only when SESSION_SECRET is not configured (fail-closed) — route
 * handlers translate that into HTTP 500.
 */
export async function getSessionUser() {
  const resolved = await resolveSessionFromCookie();
  if (!resolved) return null;
  return resolved.user;
}
