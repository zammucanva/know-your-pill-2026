/**
 * UNIFIED PASSWORD POLICY (Security Objective 3)
 *
 * ONE shared policy for every password-changing path:
 *   - signup          (src/app/api/auth/signup/route.ts)
 *   - password change (src/app/api/auth/password/change/route.ts)
 *   - password reset  (src/app/api/auth/password/reset/route.ts)
 *
 * Before this module existed, the three routes each inlined their own
 * length checks: signup enforced only a minimum of 8 (no maximum), while
 * change and reset duplicated local 8/128 constants. Numeric policy
 * constants must never drift across routes again — import them from here.
 *
 * Policy: 8–128 characters. The minimum protects against trivial
 * credentials; the maximum bounds bcrypt input (bcrypt silently truncates
 * beyond 72 bytes — an unbounded field invites length-confusion bugs and
 * cheap DoS via multi-megabyte bodies).
 *
 * This module is pure: no I/O, no clock, no environment — fully
 * deterministic and unit-testable.
 */

/** Minimum password length, enforced identically on every path. */
export const PASSWORD_MIN_LENGTH = 8;

/** Maximum password length, enforced identically on every path. */
export const PASSWORD_MAX_LENGTH = 128;

export interface PasswordPolicyOptions {
  /**
   * Word used in the human-facing error message, e.g. "Password" or
   * "New password". The subject keeps each route's existing message
   * strings stable while the policy itself stays shared.
   */
  subject?: string;
}

export type PasswordPolicyResult =
  | { ok: true }
  | { ok: false; code: "too-short" | "too-long"; message: string };

/**
 * Validate a candidate password against the unified policy.
 *
 * Accepts `unknown` so routes can pass untyped JSON body fields straight
 * in; anything that is not a string is rejected as too-short (a
 * non-string can never be a valid password, and no path needs to
 * distinguish "wrong type" from "too short" — both are 400s).
 */
export function validatePasswordPolicy(
  password: unknown,
  options: PasswordPolicyOptions = {}
): PasswordPolicyResult {
  const subject = options.subject ?? "Password";
  const length = typeof password === "string" ? password.length : 0;

  if (length < PASSWORD_MIN_LENGTH) {
    return {
      ok: false,
      code: "too-short",
      message: `${subject} must be at least ${PASSWORD_MIN_LENGTH} characters`,
    };
  }
  if (length > PASSWORD_MAX_LENGTH) {
    return {
      ok: false,
      code: "too-long",
      message: `${subject} must be at most ${PASSWORD_MAX_LENGTH} characters`,
    };
  }
  return { ok: true };
}
