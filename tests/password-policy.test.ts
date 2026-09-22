/**
 * UNIFIED PASSWORD POLICY REGRESSION (Security Objective 3)
 *
 * Before the shared module existed, the three password-changing paths
 * inlined their own checks and had drifted: signup enforced only a
 * minimum of 8 with NO maximum, while change and reset each carried
 * private 8/128 constants.
 *
 * The unified contract (src/lib/password-policy.ts):
 *   - ONE policy everywhere: 8–128 characters
 *   - 7 characters  -> rejected on signup, change, AND reset
 *   - 8 characters  -> accepted wherever the rest of the request is valid
 *   - 129 characters -> rejected on signup, change, AND reset
 *   - the numeric constants live in exactly one module
 */

import { describe, expect, test } from "bun:test";
import { createHash, randomBytes } from "crypto";
import {
  BASE_URL,
  createTestUser,
  ensureServer,
  loginAndGetJar,
  testDb,
  uniqueEmail,
  uniqueSource,
} from "./helpers/server";
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  validatePasswordPolicy,
} from "@/lib/password-policy";

const SEVEN = "a".repeat(7);
/** Exactly 8 characters, with a letter + a digit. */
const EIGHT = "a".repeat(7) + "1";
const ONE_TWENTY_NINE = "a".repeat(129);

function sha256hex(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

/** Insert a reset token directly into the isolated test DB (state setup). */
async function insertResetToken(userId: string): Promise<string> {
  const raw = randomBytes(32).toString("base64url");
  await testDb().passwordResetToken.create({
    data: {
      tokenHash: sha256hex(raw),
      userId,
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    },
  });
  return raw;
}

async function postJson(
  url: string,
  body: unknown,
  headers: Record<string, string> = {}
): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

describe("password policy module (unit)", () => {
  test("1. the policy constants are 8 and 128 exactly", () => {
    expect(PASSWORD_MIN_LENGTH).toBe(8);
    expect(PASSWORD_MAX_LENGTH).toBe(128);
  });

  test("2. boundary behaviour is deterministic", () => {
    expect(validatePasswordPolicy("a".repeat(7)).ok).toBe(false);
    expect(validatePasswordPolicy("a".repeat(8)).ok).toBe(true);
    expect(validatePasswordPolicy("a".repeat(128)).ok).toBe(true);
    expect(validatePasswordPolicy("a".repeat(129)).ok).toBe(false);
  });

  test("3. non-string input is rejected, never crashes", () => {
    expect(validatePasswordPolicy(undefined).ok).toBe(false);
    expect(validatePasswordPolicy(null).ok).toBe(false);
    expect(validatePasswordPolicy(12345678).ok).toBe(false);
    expect(validatePasswordPolicy({ length: 40 }).ok).toBe(false);
  });

  test("4. the subject customises the message without changing the policy", () => {
    const tooShort = validatePasswordPolicy("a".repeat(7), {
      subject: "New password",
    });
    expect(tooShort.ok).toBe(false);
    if (!tooShort.ok) {
      expect(tooShort.message).toBe(
        "New password must be at least 8 characters"
      );
      expect(tooShort.code).toBe("too-short");
    }
    const tooLong = validatePasswordPolicy("a".repeat(129));
    expect(tooLong.ok).toBe(false);
    if (!tooLong.ok) {
      expect(tooLong.message).toBe(
        "Password must be at most 128 characters"
      );
      expect(tooLong.code).toBe("too-long");
    }
  });
});

describe("signup enforces the unified policy", () => {
  test("5. signup rejects 7 characters", async () => {
    await ensureServer();
    const res = await postJson(`${BASE_URL}/api/auth/signup`, {
      name: "Policy Signup",
      email: uniqueEmail("pw-signup-7"),
      password: SEVEN,
    });
    expect(res.status).toBe(400);
  });

  test("6. signup accepts 8 characters", async () => {
    await ensureServer();
    const res = await postJson(`${BASE_URL}/api/auth/signup`, {
      name: "Policy Signup",
      email: uniqueEmail("pw-signup-8"),
      password: EIGHT,
    }, { "x-forwarded-for": uniqueSource() });
    expect(res.status).toBe(200);
  });

  test("7. signup rejects 129 characters (previously unbounded)", async () => {
    await ensureServer();
    const res = await postJson(`${BASE_URL}/api/auth/signup`, {
      name: "Policy Signup",
      email: uniqueEmail("pw-signup-129"),
      password: ONE_TWENTY_NINE,
    });
    expect(res.status).toBe(400);
    expect((await res.json()).error).toContain("at most 128");
  });
});

describe("authenticated password change enforces the unified policy", () => {
  test("8. change rejects 7 characters", async () => {
    await ensureServer();
    const user = await createTestUser("pwchange7", 8);
    const res = await postJson(
      `${BASE_URL}/api/auth/password/change`,
      { currentPassword: user.password, newPassword: SEVEN },
      { Cookie: user.jar.header() }
    );
    expect(res.status).toBe(400);
  });

  test("9. change rejects 129 characters", async () => {
    await ensureServer();
    const user = await createTestUser("pwchange129", 9);
    const res = await postJson(
      `${BASE_URL}/api/auth/password/change`,
      { currentPassword: user.password, newPassword: ONE_TWENTY_NINE },
      { Cookie: user.jar.header() }
    );
    expect(res.status).toBe(400);
  });

  test("10. change accepts 8 characters and rotates the password", async () => {
    await ensureServer();
    const user = await createTestUser("pwchange8", 10);
    const res = await postJson(
      `${BASE_URL}/api/auth/password/change`,
      { currentPassword: user.password, newPassword: EIGHT },
      { Cookie: user.jar.header() }
    );
    expect(res.status).toBe(200);
    // The new 8-char password now authenticates.
    const relogin = await loginAndGetJar(user.email, EIGHT);
    expect(relogin.res.status).toBe(200);
  });
});

describe("password reset enforces the unified policy", () => {
  test("11. reset rejects 7 characters", async () => {
    await ensureServer();
    const user = await createTestUser("pwreset7", 11);
    const token = await insertResetToken(user.userId);
    const res = await postJson(`${BASE_URL}/api/auth/password/reset`, {
      token,
      newPassword: SEVEN,
    });
    expect(res.status).toBe(400);
    // Token NOT consumed by a policy-rejected attempt.
    const retry = await postJson(`${BASE_URL}/api/auth/password/reset`, {
      token,
      newPassword: EIGHT,
    });
    expect(retry.status).toBe(200);
  });

  test("12. reset rejects 129 characters", async () => {
    await ensureServer();
    const user = await createTestUser("pwreset129", 12);
    const token = await insertResetToken(user.userId);
    const res = await postJson(`${BASE_URL}/api/auth/password/reset`, {
      token,
      newPassword: ONE_TWENTY_NINE,
    });
    expect(res.status).toBe(400);
    expect((await res.json()).error).toContain("at most 128");
  });

  test("13. reset accepts 8 characters", async () => {
    await ensureServer();
    const user = await createTestUser("pwreset8", 13);
    const token = await insertResetToken(user.userId);
    const res = await postJson(`${BASE_URL}/api/auth/password/reset`, {
      token,
      newPassword: EIGHT,
    });
    expect(res.status).toBe(200);
    const relogin = await loginAndGetJar(user.email, EIGHT);
    expect(relogin.res.status).toBe(200);
  });
});

describe("the policy constants exist in exactly one place", () => {
  test("14. no password length constant is inlined in any auth route", async () => {
    const { readFileSync } = await import("fs");
    const { resolve } = await import("path");
    const routes = [
      "src/app/api/auth/signup/route.ts",
      "src/app/api/auth/password/change/route.ts",
      "src/app/api/auth/password/reset/route.ts",
    ];
    for (const route of routes) {
      const source = readFileSync(resolve(process.cwd(), route), "utf8");
      expect(source).toContain("validatePasswordPolicy");
      // Numeric length literals must not reappear in route bodies.
      expect(source).not.toMatch(/length\s*[<>]=?\s*(6|7|8|128|129)\b/);
      expect(source).not.toMatch(/(?:MIN|MAX)_PASSWORD_LENGTH\s*=\s*\d+/);
    }
  });
});
