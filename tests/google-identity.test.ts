import { describe, expect, test } from "bun:test";
import { isTrustedGoogleIdentity } from "../src/lib/google-identity";

describe("isTrustedGoogleIdentity (account-takeover guard)", () => {
  test("accepts a verified email linked to google.com", () => {
    expect(
      isTrustedGoogleIdentity({ email: "a@b.co", email_verified: true, providers: ["google.com"] })
    ).toBe(true);
  });

  test("rejects an unverified email even with the google provider", () => {
    expect(
      isTrustedGoogleIdentity({ email: "a@b.co", email_verified: false, providers: ["google.com"] })
    ).toBe(false);
  });

  test("rejects a Firebase password account carrying a victim's email", () => {
    expect(
      isTrustedGoogleIdentity({ email: "victim@b.co", email_verified: true, providers: ["password"] })
    ).toBe(false);
  });

  test("rejects a missing email or empty provider list", () => {
    expect(isTrustedGoogleIdentity({ email: undefined, email_verified: true, providers: ["google.com"] })).toBe(false);
    expect(isTrustedGoogleIdentity({ email: "a@b.co", email_verified: true, providers: [] })).toBe(false);
  });
});
