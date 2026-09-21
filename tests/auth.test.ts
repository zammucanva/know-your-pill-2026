/**
 * KYP Auth Security Test Suite — 34 tests.
 *
 * Sections:
 *   Sessions            (tests 1-14)
 *   Rate limiting       (tests 15-26)
 *   Implementation-spec (tests 27-34)
 *
 * Runs against the standalone production build using the ISOLATED test
 * database (db/test.db). The production database is never touched.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { createHash, createHmac } from "crypto";
import {
  BASE_URL,
  CookieJar,
  TEST_SESSION_SECRET,
  authed,
  createTestUser,
  ensureServer,
  loginAndGetJar,
  testDb,
  uniqueEmail,
} from "./helpers/server";

const SESSION_COOKIE = "kyp-session";

function sha256hex(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

function b64url(buf: Buffer): string {
  return buf.toString("base64url");
}

function hmacFor(raw: string): string {
  return b64url(
    createHmac("sha256", TEST_SESSION_SECRET).update(raw, "utf8").digest()
  );
}

function cookieFromJar(jar: CookieJar): string {
  const value = jar.get(SESSION_COOKIE);
  if (!value) throw new Error("no session cookie in jar");
  return value;
}

async function getSetCookies(res: Response): Promise<string[]> {
  return (
    (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ??
    []
  );
}

async function resolveSession(jar: CookieJar): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/api/auth/session`, {
    headers: authed(jar),
  });
  return res.json();
}

beforeAll(async () => {
  await ensureServer();
});

// ─── Sessions (1-14) ────────────────────────────────────────────────────────

describe("auth sessions", () => {
  test("1. valid session resolves the authenticated user", async () => {
    const user = await createTestUser("sess", 1);
    const body = (await resolveSession(user.jar)) as {
      user: { id: string; email: string } | null;
    };
    expect(body.user).not.toBeNull();
    expect(body.user?.id).toBe(user.userId);
    expect(body.user?.email).toBe(user.email);
  });

  test("2. malformed session cookie is rejected", async () => {
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, "this-is-not-a-valid-token");
    const body = (await resolveSession(jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("3. modified token body is rejected", async () => {
    const user = await createTestUser("sess", 3);
    const token = cookieFromJar(user.jar);
    const [raw, sig] = token.split(".");
    // Flip the first character of the raw part (stays plausible base64url)
    const flipped = raw.startsWith("A") ? "B" + raw.slice(1) : "A" + raw.slice(1);
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, `${flipped}.${sig}`);
    const body = (await resolveSession(jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("4. modified signature is rejected", async () => {
    const user = await createTestUser("sess", 4);
    const token = cookieFromJar(user.jar);
    const [raw, sig] = token.split(".");
    const forgedSig = (sig.startsWith("A") ? "B" : "A") + sig.slice(1);
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, `${raw}.${forgedSig}`);
    const body = (await resolveSession(jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("5. spliced token (A body + B signature) is rejected", async () => {
    const userA = await createTestUser("sess", 5);
    const userB = await createTestUser("sess", 6);
    const [rawA] = cookieFromJar(userA.jar).split(".");
    const [, sigB] = cookieFromJar(userB.jar).split(".");
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, `${rawA}.${sigB}`);
    const body = (await resolveSession(jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("6. expired session is rejected", async () => {
    const user = await createTestUser("sess", 7);
    const tokenHash = sha256hex(cookieFromJar(user.jar));
    await testDb().session.update({
      where: { tokenHash },
      data: { expiresAt: new Date(Date.now() - 1000) },
    });
    const body = (await resolveSession(user.jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("7. revoked session is rejected", async () => {
    const user = await createTestUser("sess", 8);
    const tokenHash = sha256hex(cookieFromJar(user.jar));
    await testDb().session.update({
      where: { tokenHash },
      data: { revokedAt: new Date() },
    });
    const body = (await resolveSession(user.jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("8. logout invalidates the session (replay fails)", async () => {
    const user = await createTestUser("sess", 9);
    const token = cookieFromJar(user.jar);
    const res = await fetch(`${BASE_URL}/api/auth/session`, {
      method: "DELETE",
      headers: authed(user.jar),
    });
    expect(res.status).toBe(200);
    // Replay the SAME token value even though the client jar was cleared:
    const replayJar = new CookieJar();
    replayJar.set(SESSION_COOKIE, token);
    const body = (await resolveSession(replayJar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("9. every login issues a fresh session token", async () => {
    const user = await createTestUser("sess", 10);
    const first = cookieFromJar(user.jar);
    const secondLogin = await loginAndGetJar(user.email, user.password, "10.9.1.10");
    expect(secondLogin.res.status).toBe(200);
    const second = cookieFromJar(secondLogin.jar);
    expect(second).not.toBe(first);
  });

  test("10. legacy unsigned base64-JSON cookie is rejected", async () => {
    const user = await createTestUser("sess", 11);
    // Forge the PRE-hardening cookie format: base64(JSON with user data)
    const legacy = Buffer.from(
      JSON.stringify({ id: user.userId, email: user.email, name: user.name, role: "student" })
    ).toString("base64");
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, legacy);
    const body = (await resolveSession(jar)) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("11. cookie contains no PII (opaque token)", async () => {
    const user = await createTestUser("sess", 12);
    const token = cookieFromJar(user.jar);
    const lower = token.toLowerCase();
    expect(lower).not.toContain(user.email.toLowerCase());
    expect(lower).not.toContain(user.userId.toLowerCase());
    expect(lower).not.toContain(user.name.toLowerCase().split(" ")[0]);
    expect(lower).not.toContain("role");
    expect(lower).not.toContain("password");
    // Opaque structure: exactly two base64url segments
    const [raw, sig] = token.split(".");
    expect(raw.length).toBe(43);
    expect(sig.length).toBe(43);
  });

  test("12. cookie security attributes are set", async () => {
    const email = uniqueEmail("cookieflags");
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Flag Check", email, password: "password123" }),
    });
    const setCookies = await getSetCookies(res);
    const sessionCookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(sessionCookie).toBeDefined();
    const cookieLower = sessionCookie!.toLowerCase();
    expect(cookieLower).toContain("httponly");
    expect(cookieLower).toContain("samesite=lax");
    expect(cookieLower).toContain("path=/");
    expect(cookieLower).toMatch(/max-age=\d+/);
    // Secure flag is set in production builds (NODE_ENV=production)
    expect(cookieLower).toContain("secure");
    // Host-only cookie — no Domain attribute
    expect(cookieLower).not.toContain("domain=");
  });

  test("13. session secret is not disclosed by any auth endpoint", async () => {
    const endpoints = [
      `${BASE_URL}/api/auth/session`,
      `${BASE_URL}/api/auth/login`,
      `${BASE_URL}/api/auth/signup`,
    ];
    const bodies: string[] = [];
    const sessionRes = await fetch(endpoints[0]);
    bodies.push(await sessionRes.text());
    const loginRes = await fetch(endpoints[1], {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.9.1.13" },
      body: JSON.stringify({ email: uniqueEmail("secret"), password: "wrong-pass" }),
    });
    bodies.push(await loginRes.text());
    const signupRes = await fetch(endpoints[2], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "S", email: uniqueEmail("secret"), password: "password123" }),
    });
    bodies.push(await signupRes.text());
    for (const body of bodies) {
      expect(body).not.toContain(TEST_SESSION_SECRET);
      expect(body.toLowerCase()).not.toContain("sessionsecret");
      expect(body.toLowerCase()).not.toContain("session_secret");
    }
  });

  test("14. session fixation resistance (pre-set cookie is replaced)", async () => {
    const email = uniqueEmail("fixation");
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, "attacker-preset-fixed-value.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: jar.header() },
      body: JSON.stringify({ name: "Fixation", email, password: "password123" }),
    });
    expect(res.status).toBe(200);
    jar.capture(res);
    const token = cookieFromJar(jar);
    expect(token).not.toContain("attacker-preset-fixed-value");
    // And the new token actually authenticates:
    const body = (await resolveSession(jar)) as { user: { email: string } | null };
    expect(body.user?.email).toBe(email);
  });
});

// ─── Rate limiting / lockout (15-26) ────────────────────────────────────────

describe("login rate limiting", () => {
  test("15. first failures return normal 401 (no lockout yet)", async () => {
    const email = uniqueEmail("rl15");
    for (let i = 0; i < 4; i++) {
      const { res } = await loginAndGetJar(email, "wrong-password", "10.15.0.1");
      expect(res.status).toBe(401);
    }
  });

  test("16. repeated failures trigger temporary lockout (429)", async () => {
    const email = uniqueEmail("rl16");
    // The 5th failure crosses the threshold and arms the lockout (still 401);
    // every attempt AFTER it is blocked with 429.
    for (let i = 0; i < 5; i++) {
      const { res } = await loginAndGetJar(email, "wrong-password", "10.16.0.1");
      expect(res.status).toBe(401);
    }
    const sixth = await loginAndGetJar(email, "wrong-password", "10.16.0.1");
    expect(sixth.res.status).toBe(429);
    expect(sixth.res.headers.get("retry-after")).not.toBeNull();
    const body = (await sixth.res.json()) as { error: string };
    expect(body.error).toContain("Too many");
  });

  test("17. lockout escalates with continued failures", async () => {
    const email = uniqueEmail("rl17");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.17.0.1");
    }
    const first = await loginAndGetJar(email, "wrong-password", "10.17.0.1");
    expect(first.res.status).toBe(429);
    const firstRetry = Number(first.res.headers.get("retry-after"));

    // Expire the lockout in the DB, then keep failing — the next lockout
    // must be LONGER (bounded escalation).
    const identifierHash = sha256hex(email);
    await testDb().loginAttempt.updateMany({
      where: { identifierHash },
      data: { lockoutUntil: new Date(Date.now() - 1000) },
    });
    // The first failure after expiry re-arms the lockout at a higher level (401),
    // and the attempt after THAT is blocked with a longer Retry-After.
    const rearmed = await loginAndGetJar(email, "wrong-password", "10.17.0.1");
    expect(rearmed.res.status).toBe(401);
    const next = await loginAndGetJar(email, "wrong-password", "10.17.0.1");
    expect(next.res.status).toBe(429);
    const secondRetry = Number(next.res.headers.get("retry-after"));
    expect(secondRetry).toBeGreaterThan(firstRetry);
  });

  test("18. lockout expires automatically", async () => {
    const email = uniqueEmail("rl18");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.18.0.1");
    }
    const locked = await loginAndGetJar(email, "wrong-password", "10.18.0.1");
    expect(locked.res.status).toBe(429);
    // Simulate time passing: expire the lockout
    const identifierHash = sha256hex(email);
    await testDb().loginAttempt.updateMany({
      where: { identifierHash },
      data: { lockoutUntil: new Date(Date.now() - 1000) },
    });
    const after = await loginAndGetJar(email, "wrong-password", "10.18.0.1");
    expect(after.res.status).toBe(401); // normal rejection, not 429
  });

  test("19. successful login resets the account's counters", async () => {
    const email = uniqueEmail("rl19");
    // Register the account so a successful login is possible
    const reg = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "RL19", email, password: "password123" }),
    });
    expect(reg.status).toBe(200);
    // 4 failures (below threshold)
    for (let i = 0; i < 4; i++) {
      await loginAndGetJar(email, "wrong-password", "10.19.0.1");
    }
    // Successful login resets
    const success = await loginAndGetJar(email, "password123", "10.19.0.1");
    expect(success.res.status).toBe(200);
    // 4 more failures — still below threshold because counters were reset
    for (let i = 0; i < 4; i++) {
      const { res } = await loginAndGetJar(email, "wrong-password", "10.19.0.1");
      expect(res.status).toBe(401);
    }
  });

  test("20. malformed requests cannot bypass or reset protection", async () => {
    const email = uniqueEmail("rl20");
    for (let i = 0; i < 4; i++) {
      await loginAndGetJar(email, "wrong-password", "10.20.0.1");
    }
    // Malformed bodies while not yet locked → 400, counters untouched
    for (let i = 0; i < 2; i++) {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-forwarded-for": "10.20.0.1" },
        body: JSON.stringify({ email: email }),
      });
      expect(res.status).toBe(400);
    }
    // 5th real failure crosses the threshold (still returns 401) and arms
    // the lockout — counters were untouched by the malformed requests
    const fifth = await loginAndGetJar(email, "wrong-password", "10.20.0.1");
    expect(fifth.res.status).toBe(401);
    // Malformed body while LOCKED → 400 (never 200), and lock persists
    const malformed = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.20.0.1" },
      body: "not json at all",
    });
    expect(malformed.status).toBe(400);
    const stillLocked = await loginAndGetJar(email, "wrong-password", "10.20.0.1");
    expect(stillLocked.res.status).toBe(429);
  });

  test("21. no account enumeration under lockout", async () => {
    const known = uniqueEmail("rl21a");
    const unknown = uniqueEmail("rl21b");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(known, "wrong-password", "10.21.0.1");
    }
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(unknown, "wrong-password", "10.21.0.2");
    }
    const knownRes = await loginAndGetJar(known, "wrong-password", "10.21.0.1");
    const unknownRes = await loginAndGetJar(unknown, "wrong-password", "10.21.0.2");
    expect(knownRes.res.status).toBe(429);
    expect(unknownRes.res.status).toBe(429);
    const knownBody = await knownRes.res.text();
    const unknownBody = await unknownRes.res.text();
    expect(knownBody).toBe(unknownBody);
  });

  test("22. source-based rate limiting across many accounts", async () => {
    const source = "10.22.0.9";
    // 20 failures across DIFFERENT accounts from the SAME source
    for (let i = 0; i < 20; i++) {
      await loginAndGetJar(uniqueEmail(`rl22-${i}`), "wrong-password", source);
    }
    // A brand-new account from that source is now blocked
    const fresh = await loginAndGetJar(uniqueEmail("rl22-new"), "wrong-password", source);
    expect(fresh.res.status).toBe(429);
    // ...while a different source is unaffected
    const elsewhere = await loginAndGetJar(uniqueEmail("rl22-other"), "wrong-password", "10.22.0.8");
    expect(elsewhere.res.status).toBe(401);
  }, 60000);

  test("23. account-based rate limiting across rotating sources", async () => {
    const email = uniqueEmail("rl23");
    // 5 failures, each from a DIFFERENT source — the account-wide counter
    // must accumulate and lock the account regardless of source
    for (let i = 1; i <= 5; i++) {
      const { res } = await loginAndGetJar(email, "wrong-password", `10.23.0.${i}`);
      expect(res.status).toBe(401); // 5th failure sets the lock (returns 401)
    }
    const sixth = await loginAndGetJar(email, "wrong-password", "10.23.0.99");
    expect(sixth.res.status).toBe(429);
  });

  test("24. no permanent lockout (durations are finite and bounded)", async () => {
    const email = uniqueEmail("rl24");
    let lastRetry = 0;
    for (let round = 0; round < 4; round++) {
      for (let i = 0; i < 5; i++) {
        await loginAndGetJar(email, "wrong-password", `10.24.0.${round + 1}`);
      }
      const locked = await loginAndGetJar(email, "wrong-password", `10.24.0.${round + 1}`);
      expect(locked.res.status).toBe(429);
      lastRetry = Number(locked.res.headers.get("retry-after"));
      expect(lastRetry).toBeLessThanOrEqual(30 * 60); // bounded at 30 minutes
      expect(lastRetry).toBeGreaterThan(0);
      // Expire this lockout to force the next escalation round
      const identifierHash = sha256hex(email);
      await testDb().loginAttempt.updateMany({
        where: { identifierHash },
        data: { lockoutUntil: new Date(Date.now() - 1000) },
      });
    }
    // After 4 lockout rounds the duration reached the cap — still finite
    expect(lastRetry).toBeLessThanOrEqual(30 * 60);
  });

  test("25. the client cannot reset the limiter", async () => {
    const email = uniqueEmail("rl25");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.25.0.1");
    }
    // Attempt "resets" via other endpoints and even the CORRECT password
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.25.0.1" },
      body: JSON.stringify({ email, password: "password123" }),
    });
    expect(res.status).toBe(429); // lockout enforced BEFORE bcrypt
    await fetch(`${BASE_URL}/api/auth/session`, { method: "DELETE" });
    const still = await loginAndGetJar(email, "wrong-password", "10.25.0.1");
    expect(still.res.status).toBe(429);
  });

  test("26. legitimate login succeeds after lockout expiry", async () => {
    const email = uniqueEmail("rl26");
    // Register the account first
    const reg = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "RL26", email, password: "password123" }),
    });
    expect(reg.status).toBe(200);
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.26.0.1");
    }
    const locked = await loginAndGetJar(email, "password123", "10.26.0.1");
    expect(locked.res.status).toBe(429);
    // Expire the lockout — the legitimate user can now log in
    const identifierHash = sha256hex(email);
    await testDb().loginAttempt.updateMany({
      where: { identifierHash },
      data: { lockoutUntil: new Date(Date.now() - 1000) },
    });
    const ok = await loginAndGetJar(email, "password123", "10.26.0.1");
    expect(ok.res.status).toBe(200);
  });
});

// ─── Implementation-specific (27-34) ────────────────────────────────────────

describe("auth implementation specifics", () => {
  test("27. database stores the token hash, never the raw token", async () => {
    const user = await createTestUser("impl", 27);
    const token = cookieFromJar(user.jar);
    const tokenHash = sha256hex(token);
    const row = await testDb().session.findUnique({ where: { tokenHash } });
    expect(row).not.toBeNull();
    expect(row?.tokenHash).not.toBe(token);
    expect(row?.tokenHash).toHaveLength(64); // sha256 hex
    // No session row anywhere contains the raw cookie value
    const all = await testDb().session.findMany();
    for (const s of all) {
      expect(s.tokenHash).not.toBe(token);
    }
  });

  test("28. LoginAttempt rows store hashes only (no raw emails/IPs)", async () => {
    const email = uniqueEmail("impl28");
    const source = "10.28.0.1";
    await loginAndGetJar(email, "wrong-password", source);
    const rows = await testDb().loginAttempt.findMany();
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      expect(row.identifierHash).not.toContain(email);
      expect(row.sourceHash).not.toContain(source);
      // Hash dimensions: 64 hex chars or the "*" sentinel
      expect(
        row.identifierHash === "*" || /^[0-9a-f]{64}$/.test(row.identifierHash)
      ).toBe(true);
      expect(
        row.sourceHash === "*" || /^[0-9a-f]{64}$/.test(row.sourceHash)
      ).toBe(true);
    }
  });

  test("29. multiple concurrent sessions coexist", async () => {
    const user = await createTestUser("impl", 29);
    const deviceA = user.jar;
    const deviceB = await loginAndGetJar(user.email, user.password, "10.29.0.2");
    expect(deviceB.res.status).toBe(200);
    const bodyA = (await resolveSession(deviceA)) as { user: unknown };
    const bodyB = (await resolveSession(deviceB.jar)) as { user: unknown };
    expect(bodyA.user).not.toBeNull();
    expect(bodyB.user).not.toBeNull();
  });

  test("30. role changes take effect immediately (no cookie re-issue)", async () => {
    const user = await createTestUser("impl", 30);
    const cookieBefore = cookieFromJar(user.jar);
    const res = await fetch(`${BASE_URL}/api/auth/role`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(user.jar) },
      body: JSON.stringify({ learnerType: "medical_student" }),
    });
    expect(res.status).toBe(200);
    const setCookies = await getSetCookies(res);
    expect(setCookies.length).toBe(0); // no cookie re-issue needed
    const body = (await resolveSession(user.jar)) as { user: { learnerType: string } };
    expect(body.user?.learnerType).toBe("medical_student");
    expect(cookieFromJar(user.jar)).toBe(cookieBefore);
  });

  test("31. logout is idempotent", async () => {
    const user = await createTestUser("impl", 31);
    const first = await fetch(`${BASE_URL}/api/auth/session`, {
      method: "DELETE",
      headers: authed(user.jar),
    });
    expect(first.status).toBe(200);
    const second = await fetch(`${BASE_URL}/api/auth/session`, {
      method: "DELETE",
    });
    expect(second.status).toBe(200);
    const body = (await second.json()) as { success: boolean };
    expect(body.success).toBe(true);
  });

  test("32. signup issues a fresh session even with a pre-set cookie", async () => {
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, "preset-garbage-value");
    const email = uniqueEmail("impl32");
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: jar.header() },
      body: JSON.stringify({ name: "Impl32", email, password: "password123" }),
    });
    expect(res.status).toBe(200);
    jar.capture(res);
    const token = cookieFromJar(jar);
    expect(token).not.toBe("preset-garbage-value");
    const body = (await resolveSession(jar)) as { user: unknown };
    expect(body.user).not.toBeNull();
  });

  test("33. login rejects non-JSON bodies cleanly (no 500)", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "text/plain", "x-forwarded-for": "10.33.0.1" },
      body: "this is not json",
    });
    expect(res.status).toBe(400);
    const body = (await res.json()) as { error: string };
    expect(typeof body.error).toBe("string");
  });

  test("34. login responses never include password material", async () => {
    const user = await createTestUser("impl", 34);
    const ok = await loginAndGetJar(user.email, user.password, "10.34.0.1");
    const okBody = await ok.res.text();
    expect(okBody.toLowerCase()).not.toContain("passwordhash");
    expect(okBody.toLowerCase()).not.toContain("password");
    const bad = await loginAndGetJar(user.email, "wrong-password", "10.34.0.1");
    const badBody = await bad.res.text();
    expect(badBody.toLowerCase()).not.toContain("passwordhash");
  });
});
