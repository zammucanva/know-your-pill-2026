/**
 * KYP Privacy Test Suite — 22 checks.
 *
 * Verifies that user PII and credentials never leak through responses,
 * cookies, the database schema used for rate limiting, or server logs.
 * No sensitive VALUES are printed by these tests — only pass/fail results.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { readFileSync, existsSync } from "fs";
import { BASE_URL, SERVER_LOG_PATH, TEST_SESSION_SECRET, authed, createTestUser, ensureServer, loginAndGetJar, testDb, uniqueEmail } from "./helpers/server";

const SESSION_COOKIE = "kyp-session";

beforeAll(async () => {
  await ensureServer();
});

describe("privacy — responses never expose credentials", () => {
  test("1. login success response has no passwordHash field", async () => {
    const user = await createTestUser("priv", 1);
    const res = await loginAndGetJar(user.email, user.password, "10.201.0.1");
    const body = await res.res.text();
    expect(body.toLowerCase()).not.toContain("passwordhash");
    expect(body.toLowerCase()).not.toContain("password");
  });

  test("2. signup response has no passwordHash field", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Priv2", email: uniqueEmail("priv2"), password: "password123" }),
    });
    const body = await res.text();
    expect(body.toLowerCase()).not.toContain("passwordhash");
  });

  test("3. session response has no passwordHash field", async () => {
    const user = await createTestUser("priv", 3);
    const res = await fetch(`${BASE_URL}/api/auth/session`, { headers: authed(user.jar) });
    const body = await res.text();
    expect(body.toLowerCase()).not.toContain("passwordhash");
  });

  test("4. logged-out session response exposes no user data", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/session`);
    const body = await res.text();
    expect(body).not.toContain("@");
    expect(body).toBe(JSON.stringify({ user: null }));
  });
});

describe("privacy — account enumeration resistance", () => {
  test("5. login error is identical for unknown email vs wrong password", async () => {
    const unknown = await loginAndGetJar(uniqueEmail("priv5"), "wrong-password", "10.205.0.1");
    const real = await createTestUser("priv", 5);
    const wrong = await loginAndGetJar(real.email, "wrong-password", "10.205.0.1");
    expect(unknown.res.status).toBe(wrong.res.status);
    expect(await unknown.res.text()).toBe(await wrong.res.text());
  });

  test("6. signup duplicate-email response reveals no account details", async () => {
    const user = await createTestUser("priv", 6);
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Dup", email: user.email, password: "password123" }),
    });
    expect(res.status).toBe(409);
    const body = (await res.json()) as Record<string, unknown>;
    expect(Object.keys(body)).toEqual(["error"]);
  });
});

describe("privacy — cookie contains no PII", () => {
  async function tokenOf(email: string): Promise<string> {
    const user = await createTestUser("priv", 99);
    void email;
    return user.jar.get(SESSION_COOKIE)!;
  }

  test("7. cookie value contains no email address", async () => {
    const user = await createTestUser("priv", 7);
    const token = user.jar.get(SESSION_COOKIE)!;
    expect(token.toLowerCase()).not.toContain(user.email.split("@")[0].toLowerCase());
    expect(token).not.toContain("@");
  });

  test("8. cookie value contains no user name", async () => {
    const user = await createTestUser("priv", 8);
    const token = user.jar.get(SESSION_COOKIE)!;
    expect(token.toLowerCase()).not.toContain(user.name.toLowerCase().replace(" ", ""));
  });

  test("9. cookie value contains no user id", async () => {
    const user = await createTestUser("priv", 9);
    const token = user.jar.get(SESSION_COOKIE)!;
    expect(token).not.toContain(user.userId);
    // And it is not decodable into structured user data
    const decoded = Buffer.from(token.split(".")[0], "base64url").toString("latin1");
    expect(decoded).not.toContain("id");
  });

  test("10. cookie value contains no role or authorization claims", async () => {
    const token = await tokenOf("priv10@test.local");
    expect(token.toLowerCase()).not.toContain("role");
    expect(token.toLowerCase()).not.toContain("admin");
    expect(token.toLowerCase()).not.toContain("psychiatrist");
    expect(token.toLowerCase()).not.toContain("student");
  });
});

describe("privacy — database stores no unnecessary raw PII", () => {
  test("11. LoginAttempt identifier column stores hashes, never raw emails", async () => {
    const email = uniqueEmail("priv11");
    await loginAndGetJar(email, "wrong-password", "10.211.0.1");
    const rows = await testDb().loginAttempt.findMany();
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      expect(row.identifierHash).not.toContain(email.split("@")[0]);
      expect(row.identifierHash === "*" || /^[0-9a-f]{64}$/.test(row.identifierHash)).toBe(true);
    }
  });

  test("12. LoginAttempt source column stores hashes, never raw IPs", async () => {
    const source = "10.212.0.7";
    await loginAndGetJar(uniqueEmail("priv12"), "wrong-password", source);
    const rows = await testDb().loginAttempt.findMany();
    for (const row of rows) {
      expect(row.sourceHash).not.toContain(source);
      expect(row.sourceHash === "*" || /^[0-9a-f]{64}$/.test(row.sourceHash)).toBe(true);
    }
  });

  test("13. Session table stores hashed tokens, never raw cookie values", async () => {
    const user = await createTestUser("priv", 13);
    const token = user.jar.get(SESSION_COOKIE)!;
    const sessions = await testDb().session.findMany();
    expect(sessions.length).toBeGreaterThan(0);
    for (const s of sessions) {
      expect(s.tokenHash).not.toBe(token);
      expect(s.tokenHash).toHaveLength(64);
    }
  });

  test("14. Session table stores no PII columns beyond the user relation", async () => {
    const sessions = await testDb().session.findMany({ take: 1 });
    expect(sessions.length).toBeGreaterThan(0);
    const row = sessions[0] as unknown as Record<string, unknown>;
    for (const key of Object.keys(row)) {
      expect(key.toLowerCase()).not.toContain("email");
      expect(key.toLowerCase()).not.toContain("name");
      expect(key.toLowerCase()).not.toContain("password");
    }
  });
});

describe("privacy — server logs stay clean", () => {
  test("15. server log contains no user email addresses", async () => {
    const user = await createTestUser("priv", 15);
    await loginAndGetJar(user.email, user.password, "10.215.0.1");
    // give the log stream a moment to flush
    await Bun.sleep(500);
    const log = existsSync(SERVER_LOG_PATH) ? readFileSync(SERVER_LOG_PATH, "utf8") : "";
    expect(log).not.toContain(user.email);
    expect(log).not.toContain("@test.local");
  });

  test("16. server log contains no password material", async () => {
    const log = existsSync(SERVER_LOG_PATH) ? readFileSync(SERVER_LOG_PATH, "utf8") : "";
    expect(log).not.toContain("$2b$12$");
    expect(log).not.toContain("password");
    expect(log).not.toContain(TEST_SESSION_SECRET);
  });
});

describe("privacy — API data shapes exclude internal fields", () => {
  test("17. logged-out session response exposes no emailVerified state", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/session`);
    const body = await res.text();
    expect(body.toLowerCase()).not.toContain("emailverified");
  });

  test("18. bookmarks response contains no userId field", async () => {
    const user = await createTestUser("priv", 18);
    await fetch(`${BASE_URL}/api/bookmarks`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(user.jar) },
      body: JSON.stringify({ type: "drug", slug: "paroxetine", title: "Paroxetine" }),
    });
    const res = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(user.jar) });
    const body = await res.text();
    expect(body.toLowerCase()).not.toContain("userid");
  });

  test("19. progress response contains no userId field", async () => {
    const user = await createTestUser("priv", 19);
    await fetch(`${BASE_URL}/api/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(user.jar) },
      body: JSON.stringify({ type: "drug", slug: "citalopram", title: "Citalopram" }),
    });
    const res = await fetch(`${BASE_URL}/api/progress`, { headers: authed(user.jar) });
    const body = await res.text();
    expect(body.toLowerCase()).not.toContain("userid");
  });

  test("20. search-history response contains no userId field", async () => {
    const user = await createTestUser("priv", 20);
    await fetch(`${BASE_URL}/api/search-history`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(user.jar) },
      body: JSON.stringify({ query: "amitriptyline" }),
    });
    const res = await fetch(`${BASE_URL}/api/search-history`, { headers: authed(user.jar) });
    const body = await res.text();
    expect(body.toLowerCase()).not.toContain("userid");
  });

  test("21. learner profile update response returns only learnerType", async () => {
    const user = await createTestUser("priv", 21);
    const res = await fetch(`${BASE_URL}/api/auth/role`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(user.jar) },
      body: JSON.stringify({ learnerType: "patient" }),
    });
    const body = (await res.json()) as Record<string, unknown>;
    expect(Object.keys(body)).toEqual(["learnerType"]);
  });

  test("22. 429 rate-limit responses contain no account information", async () => {
    const email = uniqueEmail("priv22");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.222.0.1");
    }
    const blocked = await loginAndGetJar(email, "wrong-password", "10.222.0.1");
    expect(blocked.res.status).toBe(429);
    const body = (await blocked.res.json()) as Record<string, unknown>;
    expect(Object.keys(body)).toEqual(["error"]);
    expect(JSON.stringify(body)).not.toContain(email);
  });
});
