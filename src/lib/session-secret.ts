import "server-only";

/**
 * SESSION_SECRET resolution — fail-closed.
 *
 * The application REQUIRES a SESSION_SECRET of at least 32 characters for
 * session token signing. If it is missing or too short, every operation
 * that needs it throws SessionSecretError. Auth routes translate this into
 * HTTP 500 ("fail closed") rather than silently degrading to unsigned
 * sessions.
 *
 * Production requirements:
 *   - cryptographically random, at least 32 random bytes
 *   - configured through the production environment/secrets manager
 *   - never committed, never placed in Git, never printed,
 *     never exposed to client code
 */

export class SessionSecretError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SessionSecretError";
  }
}

export const SESSION_SECRET_MIN_LENGTH = 32;

let cached: Buffer | null = null;

export function getSessionSecret(): Buffer {
  if (cached !== null) return cached;
  const raw = process.env.SESSION_SECRET;
  if (typeof raw !== "string" || raw.length < SESSION_SECRET_MIN_LENGTH) {
    throw new SessionSecretError(
      "SESSION_SECRET is not configured (or shorter than 32 characters). " +
        "Configure it in the environment before enabling authentication."
    );
  }
  cached = Buffer.from(raw, "utf8");
  return cached;
}

/** Cheap check that does not throw — used by route-level guards. */
export function isSessionSecretConfigured(): boolean {
  const raw = process.env.SESSION_SECRET;
  return typeof raw === "string" && raw.length >= SESSION_SECRET_MIN_LENGTH;
}

/** Test helper — clears the cached secret so a new one takes effect. */
export function resetSessionSecretCache(): void {
  cached = null;
}
