/**
 * KYP Password Reset / Change Test Suite.
 *
 * Covers the full §19 password-reset workflow:
 *   - /api/auth/password/forgot  (request; anti-enumeration; rate limit)
 *   - /api/auth/password/reset   (single-use token; expiry; session revoke)
 *   - /api/auth/password/change  (authenticated change; session revoke)
 *
 * Runs against the standalone production build using the ISOLATED test
 * database (db/test.db). The production database is never touched.
 * No PII, tokens, or credentials are printed on success or failure.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { createHash, randomBytes } from "crypto";
import {
  BASE_URL,
  CookieJar,
  authed,
  createTestUser,
  ensureServer,
  loginAndGetJar,
  testDb,
  uniqueEmail,
} from "./helpers/server";

const FORGOT_URL = `${BASE_URL}/api/auth/password/forgot`;
const RESET_URL = `${BASE_URL}/api/auth/password/reset`;
const CHANGE_URL = `${BASE_URL}/api/auth/password/change`;

/** Distinct client sources so rate-limit dimensions stay isolated per group. */
const SRC_FORGOT = "10.90.0.1";
const SRC_FORGOT_RL = "10.94.0.1";
const SRC_RESET_INVALID = "10.92.0.1";
const SRC_RESET_BRUTE = "10.91.0.1";
const SRC_CHANGE = "10.93.0.1";

function sha256hex(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

interface ResetTokenRow {
  raw: string;
  userId: string;
}

/** Insert a reset token directly into the isolated test DB (state setup). */
async function insertResetToken(
  userId: string,
  overrides: { expiresAt?: Date } = {}
): Promise<ResetTokenRow> {
  const raw = randomBytes(32).toString("base64url");
  await testDb().passwordResetToken.create({
    data: {
      tokenHash: sha256hex(raw),
      userId,
      expiresAt: overrides.expiresAt ?? new Date(Date.now() + 30 * 60 * 1000),
    },
  });
  return { raw, userId };
}

async function postJson(
  url: string,
  body: unknown,
  headers: Record<string, string> = {}
): Promise<{ res: Response; text: string }> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
  return { res, text: await res.text() };
}

async function sessionUser(jar: CookieJar): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/api/auth/session`, {
    headers: authed(jar),
  });
  const body = (await res.json()) as { user: unknown };
  return body.user;
}

beforeAll(async () => {
  await ensureServer();
});

// ─── Reset requests (forgot) ────────────────────────────────────────────────

describe("password reset requests", () => {
  test("1. unknown email returns the generic 200 response", async () => {
    const { res, text } = await postJson(
      FORGOT_URL,
      { email: uniqueEmail("nobody") },
      { "x-forwarded-for": SRC_FORGOT }
    );
    expect(res.status).toBe(200);
    expect(text).toContain("If an account exists");
    expect(text).not.toContain("@");
  });

  test("2. known email returns a byte-identical response (anti-enumeration)", async () => {
    const user = await createTestUser("forgot", 2);
    const known = await postJson(
      FORGOT_URL,
      { email: user.email },
      { "x-forwarded-for": SRC_FORGOT }
    );
    const unknown = await postJson(
      FORGOT_URL,
      { email: uniqueEmail("nobody") },
      { "x-forwarded-for": SRC_FORGOT }
    );
    expect(known.res.status).toBe(unknown.res.status);
    expect(known.text).toBe(unknown.text);
  });

  test("3. missing email returns 400", async () => {
    const { res } = await postJson(FORGOT_URL, {}, { "x-forwarded-for": SRC_FORGOT });
    expect(res.status).toBe(400);
  });

  test("4. malformed JSON returns 400", async () => {
    const { res } = await postJson(FORGOT_URL, "{not-json", {
      "x-forwarded-for": SRC_FORGOT,
    });
    expect(res.status).toBe(400);
  });

  test("5. invalid email format returns 400", async () => {
    const { res } = await postJson(
      FORGOT_URL,
      { email: "not-an-email" },
      { "x-forwarded-for": SRC_FORGOT }
    );
    expect(res.status).toBe(400);
  });

  test("6. a token row is created (hash-only, never the raw token)", async () => {
    const user = await createTestUser("forgot", 6);
    await postJson(FORGOT_URL, { email: user.email }, { "x-forwarded-for": SRC_FORGOT });
    const rows = await testDb().passwordResetToken.findMany({
      where: { userId: user.userId },
    });
    expect(rows.length).toBe(1);
    // Stored value is a sha256 hex digest of the raw token — 64 hex chars,
    // never the raw token itself.
    expect(rows[0].tokenHash).toMatch(/^[0-9a-f]{64}$/);
    expect(rows[0].usedAt).toBeNull();
    expect(rows[0].expiresAt.getTime()).toBeGreaterThan(Date.now());
  });

  test("7. a second request invalidates the previous token", async () => {
    const user = await createTestUser("forgot", 7);
    await postJson(FORGOT_URL, { email: user.email }, { "x-forwarded-for": SRC_FORGOT });
    await postJson(FORGOT_URL, { email: user.email }, { "x-forwarded-for": SRC_FORGOT });
    const outstanding = await testDb().passwordResetToken.findMany({
      where: { userId: user.userId, usedAt: null },
    });
    expect(outstanding.length).toBe(1);
  });

  test("8. repeated requests are rate limited identically for known and unknown emails", async () => {
    const created = await createTestUser("forgot", 8);
    const unknownEmail = uniqueEmail("unknown-rl");
    const knownStatuses: number[] = [];
    const unknownStatuses: number[] = [];
    // 6 requests each: threshold 5 → the 6th must be 429 for both.
    for (let i = 0; i < 6; i++) {
      const a = await postJson(FORGOT_URL, { email: created.email }, { "x-forwarded-for": SRC_FORGOT_RL });
      knownStatuses.push(a.res.status);
      const b = await postJson(FORGOT_URL, { email: unknownEmail }, { "x-forwarded-for": SRC_FORGOT_RL });
      unknownStatuses.push(b.res.status);
    }
    expect(knownStatuses).toEqual(unknownStatuses);
    expect(knownStatuses[0]).toBe(200);
    expect(knownStatuses[5]).toBe(429);
  });
});

// ─── Token consumption (reset) ──────────────────────────────────────────────

describe("password reset completion", () => {
  test("9. valid token resets the password; old fails, new works", async () => {
    const user = await createTestUser("reset", 9);
    const token = await insertResetToken(user.userId);
    const { res } = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "brand-new-password-9",
    });
    expect(res.status).toBe(200);
    const oldLogin = await loginAndGetJar(user.email, user.password);
    expect(oldLogin.res.status).toBe(401);
    const newLogin = await loginAndGetJar(user.email, "brand-new-password-9");
    expect(newLogin.res.status).toBe(200);
  });

  test("10. a completed reset revokes ALL existing sessions", async () => {
    const user = await createTestUser("reset", 10);
    // Session A: signup session. Session B: separate login (second device).
    const { jar: jarB } = await loginAndGetJar(user.email, user.password);
    expect(await sessionUser(user.jar)).not.toBeNull();
    expect(await sessionUser(jarB)).not.toBeNull();
    const token = await insertResetToken(user.userId);
    await postJson(RESET_URL, { token: token.raw, newPassword: "brand-new-password-10" });
    expect(await sessionUser(user.jar)).toBeNull();
    expect(await sessionUser(jarB)).toBeNull();
  });

  test("11. tokens are strictly single-use", async () => {
    const user = await createTestUser("reset", 11);
    const token = await insertResetToken(user.userId);
    const first = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "first-password-11",
    });
    expect(first.res.status).toBe(200);
    const second = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "second-password-11",
    });
    expect(second.res.status).toBe(400);
    // The first password change is the one that stuck.
    const login = await loginAndGetJar(user.email, "first-password-11");
    expect(login.res.status).toBe(200);
  });

  test("12. expired tokens are rejected with the generic error", async () => {
    const user = await createTestUser("reset", 12);
    const token = await insertResetToken(user.userId, {
      expiresAt: new Date(Date.now() - 1000),
    });
    const { res, text } = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "should-not-work-12",
    });
    expect(res.status).toBe(400);
    expect(text).toContain("Invalid or expired reset token");
  });

  test("13. unknown, used, and expired tokens return IDENTICAL errors", async () => {
    const unknown = await postJson(RESET_URL, {
      token: randomBytes(32).toString("base64url"),
      newPassword: "irrelevant-13",
    }, { "x-forwarded-for": SRC_RESET_INVALID });
    const user = await createTestUser("reset", 13);
    const usedToken = await insertResetToken(user.userId);
    await postJson(RESET_URL, {
      token: usedToken.raw,
      newPassword: "used-pass-13",
    });
    const used = await postJson(RESET_URL, {
      token: usedToken.raw,
      newPassword: "used-again-13",
    }, { "x-forwarded-for": SRC_RESET_INVALID });
    const expiredToken = await insertResetToken(user.userId, {
      expiresAt: new Date(Date.now() - 1000),
    });
    const expired = await postJson(RESET_URL, {
      token: expiredToken.raw,
      newPassword: "expired-13",
    }, { "x-forwarded-for": SRC_RESET_INVALID });
    expect(unknown.res.status).toBe(400);
    expect(used.res.status).toBe(400);
    expect(expired.res.status).toBe(400);
    expect(unknown.text).toBe(used.text);
    expect(used.text).toBe(expired.text);
  });

  test("14. weak new password is rejected", async () => {
    const user = await createTestUser("reset", 14);
    const token = await insertResetToken(user.userId);
    const { res } = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "123",
    });
    expect(res.status).toBe(400);
    // Token is NOT consumed by a rejected attempt — still usable.
    const retry = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "strong-enough-14",
    });
    expect(retry.res.status).toBe(200);
  });

  test("15. absurdly large password is rejected", async () => {
    const user = await createTestUser("reset", 15);
    const token = await insertResetToken(user.userId);
    const { res } = await postJson(RESET_URL, {
      token: token.raw,
      newPassword: "x".repeat(10_000),
    });
    expect(res.status).toBe(400);
  });

  test("16. malformed body is rejected", async () => {
    const { res } = await postJson(RESET_URL, { nope: true });
    expect(res.status).toBe(400);
  });

  test("17. a successful reset does not mint a new session (no Set-Cookie)", async () => {
    const user = await createTestUser("reset", 17);
    const token = await insertResetToken(user.userId);
    const res = await fetch(RESET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token.raw, newPassword: "fresh-login-17" }),
    });
    expect(res.status).toBe(200);
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ??
      [];
    expect(setCookies.length).toBe(0);
  });

  test("18. brute-forcing tokens from one source gets throttled", async () => {
    let saw429 = false;
    // Source-wide threshold is 20 — the 21st distinct invalid guess must 429.
    for (let i = 0; i < 21; i++) {
      const { res } = await postJson(RESET_URL, {
        token: `guess-${i}-${randomBytes(8).toString("hex")}`,
        newPassword: "irrelevant-18",
      }, { "x-forwarded-for": SRC_RESET_BRUTE });
      if (res.status === 429) {
        saw429 = true;
        break;
      }
    }
    expect(saw429).toBe(true);
  });
});

// ─── Authenticated password change ─────────────────────────────────────────

describe("password change", () => {
  test("19. correct current password changes it; other devices logged out", async () => {
    const user = await createTestUser("change", 19);
    const { jar: jarB } = await loginAndGetJar(user.email, user.password);
    expect(await sessionUser(jarB)).not.toBeNull();

    const res = await fetch(CHANGE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(user.jar) },
      body: JSON.stringify({
        currentPassword: user.password,
        newPassword: "changed-password-19",
      }),
    });
    expect(res.status).toBe(200);

    // The OTHER device's session is revoked...
    expect(await sessionUser(jarB)).toBeNull();
    // ...while the current client received a fresh session cookie.
    const jarA2 = new CookieJar();
    jarA2.capture(res);
    expect(await sessionUser(jarA2)).not.toBeNull();

    // Login semantics updated.
    expect((await loginAndGetJar(user.email, user.password)).res.status).toBe(401);
    expect((await loginAndGetJar(user.email, "changed-password-19")).res.status).toBe(200);
  });

  test("20. wrong current password is rejected", async () => {
    const user = await createTestUser("change", 20);
    const { res } = await postJson(
      CHANGE_URL,
      { currentPassword: "totally-wrong", newPassword: "new-20" },
      { ...authed(user.jar), "x-forwarded-for": SRC_CHANGE }
    );
    expect(res.status).toBe(401);
    // Password unchanged — old password still works.
    expect((await loginAndGetJar(user.email, user.password)).res.status).toBe(200);
  });

  test("21. unauthenticated change attempts are rejected", async () => {
    const { res } = await postJson(
      CHANGE_URL,
      { currentPassword: "whatever", newPassword: "whatever2" },
      { "x-forwarded-for": SRC_CHANGE }
    );
    expect(res.status).toBe(401);
  });

  test("22. new password identical to current is rejected", async () => {
    const user = await createTestUser("change", 22);
    const { res } = await postJson(
      CHANGE_URL,
      { currentPassword: user.password, newPassword: user.password },
      authed(user.jar)
    );
    expect(res.status).toBe(400);
  });

  test("23. weak new password is rejected", async () => {
    const user = await createTestUser("change", 23);
    const { res } = await postJson(
      CHANGE_URL,
      { currentPassword: user.password, newPassword: "123" },
      authed(user.jar)
    );
    expect(res.status).toBe(400);
  });

  test("24. repeated wrong current passwords are rate limited", async () => {
    const user = await createTestUser("change", 24);
    const statuses: number[] = [];
    // Threshold 5 on the per-user change dimension → 6th attempt is 429.
    for (let i = 0; i < 6; i++) {
      const { res } = await postJson(
        CHANGE_URL,
        { currentPassword: `wrong-${i}`, newPassword: "new-24" },
        { ...authed(user.jar), "x-forwarded-for": SRC_CHANGE }
      );
      statuses.push(res.status);
    }
    expect(statuses[0]).toBe(401);
    expect(statuses[5]).toBe(429);
  });

  test("25. malformed change body is rejected", async () => {
    const user = await createTestUser("change", 25);
    const { res } = await postJson(CHANGE_URL, { foo: "bar" }, authed(user.jar));
    expect(res.status).toBe(400);
  });
});
