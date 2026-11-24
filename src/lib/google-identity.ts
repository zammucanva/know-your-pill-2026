/**
 * Trust decision for a Firebase identity presented to /api/auth/google.
 *
 * A Firebase ID token proves the caller controls SOME Firebase account. The
 * Firebase API key is public, so anyone can create a Firebase account (for
 * example with the email/password provider) carrying an arbitrary, UNVERIFIED
 * email address. Logging that caller into the KYP account with the same email
 * would be an account takeover. We therefore accept an identity only when:
 *   1. the email is verified, and
 *   2. the account is linked to the Google provider (google.com).
 *
 * Pure function (no server-only import) so it can be unit tested directly.
 */
export const GOOGLE_PROVIDER_ID = "google.com";

export interface FirebaseIdentity {
  email: string | undefined;
  email_verified: boolean;
  /** providerId values from Identity Toolkit providerUserInfo */
  providers: readonly string[];
}

export function isTrustedGoogleIdentity(identity: FirebaseIdentity): boolean {
  if (!identity.email) return false;
  if (identity.email_verified !== true) return false;
  return identity.providers.includes(GOOGLE_PROVIDER_ID);
}
