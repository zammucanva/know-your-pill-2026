/**
 * SIGNUP ACCOUNT-ENUMERATION REGRESSION (Security Objective 2)
 *
 * Before this contract existed, POST /api/auth/signup answered a
 * registered email with 409 "An account with this email already exists" —
 * letting any unauthenticated caller harvest the registered-email list.
 *
 * The hardened contract:
 *   - IDENTICAL status code (200) for known and unknown emails
 *   - IDENTICAL response body shape (same key set; only values the
 *     requester submitted plus constants a new signup would receive)
 *   - NO leak vocabulary ("exists", "already", "registered", "409")
 *   - IDENTICAL Set-Cookie shape: a kyp-session cookie with the same
 *     attributes and the same 43.43-char value format. For existing
 *     emails the value is a decoy that can NEVER authenticate.
 *   - The existing account is untouched: no duplicate row, no password
 *     change, original credentials still work.
 *   - Concurrent signups racing on one email cannot create duplicates
 *     and both receive the uniform response.
 *   - Both paths perform the same bcrypt work (timing floor).
 */

import { describe, expect, test } from "bun:test";
import {
  BASE_URL,
  CookieJar,
  createTestUser,
  ensureServer,
  loginAndGetJar,
  testDb,
  uniqueEmail,
} from "./helpers/server";

const SESSION_COOKIE = "kyp-session";
const TOKEN_SHAPE = /^[A-Za-z0-9_-]{43}\.[A-Za-z0-9_-]{43}$/;

interface SignupResponse {
  res: Response;
  text: string;
  setCookies: string[];
  durationMs: number;
}

async function postSignup(
  body: Record<string, unknown>
): Promise<SignupResponse> {
  const started = Date.now();
  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const durationMs = Date.now() - started;
  const setCookies =
    (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ??
    [];
  return { res, text: await res.text(), setCookies, durationMs };
}

function cookieAttributes(setCookie: string | undefined): string[] {
  if (!setCookie) return [];
  return setCookie
    .split(";")
    .slice(1)
    .map((part) => part.trim().toLowerCase().split("=")[0]!)
    .sort();
}

function cookieValue(setCookie: string | undefined): string | undefined {
  if (!setCookie) return undefined;
  const pair = setCookie.split(";")[0]!;
  const eq = pair.indexOf("=");
  return pair.slice(eq + 1);
}

async function sessionUserOf(jar: CookieJar): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/api/auth/session`, {
    headers: { Cookie: jar.header() },
  });
  return ((await res.json()) as { user: unknown }).user;
}

describe("Signup anti-enumeration (Security Objective 2)", () => {
  test("1. known and unknown emails receive the SAME status code", async () => {
    await ensureServer();
    const user = await createTestUser("enum1", 1);

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    const unknown = await postSignup({
      name: "Attacker",
      email: uniqueEmail("enum1-unknown"),
      password: "attacker-password-123",
    });

    expect(known.res.status).toBe(200);
    expect(unknown.res.status).toBe(200);
    expect(known.res.status).toBe(unknown.res.status);
  });

  test("2. known and unknown emails receive the SAME body key set", async () => {
    await ensureServer();
    const user = await createTestUser("enum2", 2);

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    const unknown = await postSignup({
      name: "Attacker",
      email: uniqueEmail("enum2-unknown"),
      password: "attacker-password-123",
    });

    const knownBody = JSON.parse(known.text) as Record<string, unknown>;
    const unknownBody = JSON.parse(unknown.text) as Record<string, unknown>;
    expect(Object.keys(knownBody).sort()).toEqual(Object.keys(unknownBody).sort());
    // The uniform shape: no user id, no verification state, no error text.
    expect(Object.keys(knownBody).sort()).toEqual([
      "email",
      "emailVerified",
      "learnerType",
      "name",
    ]);
    expect("id" in knownBody).toBe(false);
  });

  test("3. no enumeration vocabulary appears in any signup response", async () => {
    await ensureServer();
    const user = await createTestUser("enum3", 3);

    for (const email of [user.email, uniqueEmail("enum3-unknown")]) {
      const res = await postSignup({
        name: "Attacker",
        email,
        password: "attacker-password-123",
      });
      const lower = res.text.toLowerCase();
      expect(lower).not.toContain("exists");
      expect(lower).not.toContain("already");
      expect(lower).not.toContain("registered");
      expect(lower).not.toContain("taken");
      expect(res.res.status).not.toBe(409);
    }
  });

  test("4. both paths set a shape-identical kyp-session cookie", async () => {
    await ensureServer();
    const user = await createTestUser("enum4", 4);

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    const unknown = await postSignup({
      name: "Attacker",
      email: uniqueEmail("enum4-unknown"),
      password: "attacker-password-123",
    });

    const knownCookie = known.setCookies.find((c) =>
      c.startsWith(`${SESSION_COOKIE}=`)
    );
    const unknownCookie = unknown.setCookies.find((c) =>
      c.startsWith(`${SESSION_COOKIE}=`)
    );
    expect(knownCookie).toBeDefined();
    expect(unknownCookie).toBeDefined();

    // Same value format (43 . 43 base64url chars).
    expect(TOKEN_SHAPE.test(cookieValue(knownCookie)!)).toBe(true);
    expect(TOKEN_SHAPE.test(cookieValue(unknownCookie)!)).toBe(true);

    // Same attribute set (order-insensitive).
    expect(cookieAttributes(knownCookie)).toEqual(cookieAttributes(unknownCookie));
    const attrs = cookieAttributes(knownCookie);
    expect(attrs).toContain("httponly");
    expect(attrs).toContain("samesite");
    expect(attrs).toContain("path");
    expect(attrs).toContain("secure");
    expect(attrs).toContain("max-age");
  });

  test("5. the existing-email decoy cookie can NEVER authenticate", async () => {
    await ensureServer();
    const user = await createTestUser("enum5", 5);

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    const jar = new CookieJar();
    jar.capture(known.res);
    expect(jar.get(SESSION_COOKIE)).toBeDefined();

    const sessionUser = await sessionUserOf(jar);
    expect(sessionUser).toBeNull();

    // Control: a fresh signup's cookie DOES authenticate.
    const fresh = await postSignup({
      name: "Fresh",
      email: uniqueEmail("enum5-fresh"),
      password: "fresh-password-123",
    });
    const freshJar = new CookieJar();
    freshJar.capture(fresh.res);
    const freshUser = (await sessionUserOf(freshJar)) as { email?: string };
    expect(freshUser).not.toBeNull();
  });

  test("6. existing-email signup does not create a duplicate row or take over the account", async () => {
    await ensureServer();
    const user = await createTestUser("enum6", 6);

    const before = await testDb().user.findUnique({ where: { email: user.email } });

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    expect(known.res.status).toBe(200);

    const count = await testDb().user.count({ where: { email: user.email } });
    expect(count).toBe(1);

    const after = await testDb().user.findUnique({ where: { email: user.email } });
    // No password overwrite: hash unchanged, account not taken over.
    expect(after?.passwordHash).toBe(before?.passwordHash);

    // The ORIGINAL credentials still work.
    const relogin = await loginAndGetJar(user.email, user.password);
    expect(relogin.res.status).toBe(200);
  });

  test("7. concurrent signups racing on one email cannot create duplicates", async () => {
    await ensureServer();
    const email = uniqueEmail("enum7-race");
    const payloads = [0, 1, 2].map((i) =>
      postSignup({
        name: `Racer ${i}`,
        email,
        password: "racer-password-123",
      })
    );
    const results = await Promise.all(payloads);

    for (const r of results) {
      expect(r.res.status).toBe(200);
    }
    const count = await testDb().user.count({ where: { email } });
    expect(count).toBe(1);
  });

  test("8. both paths perform equivalent bcrypt work (timing floor)", async () => {
    await ensureServer();
    const user = await createTestUser("enum8", 8);

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    const unknown = await postSignup({
      name: "Attacker",
      email: uniqueEmail("enum8-unknown"),
      password: "attacker-password-123",
    });

    // bcrypt cost 12 costs ~100ms+; a path that skipped it drops to ~5ms.
    // The floor (not a ratio) keeps this deterministic on slow CI runners.
    expect(known.durationMs).toBeGreaterThanOrEqual(40);
    expect(unknown.durationMs).toBeGreaterThanOrEqual(40);
  });

  test("9. an existing-email signup does not mint a real session row", async () => {
    await ensureServer();
    const user = await createTestUser("enum9", 9);

    const sessionsBefore = await testDb().session.count({
      where: { userId: user.userId },
    });

    const known = await postSignup({
      name: "Attacker",
      email: user.email,
      password: "attacker-password-123",
    });
    expect(known.res.status).toBe(200);

    const sessionsAfter = await testDb().session.count({
      where: { userId: user.userId },
    });
    expect(sessionsAfter).toBe(sessionsBefore);
  });

  test("10. uniform response survives email case normalisation", async () => {
    await ensureServer();
    const user = await createTestUser("enum10", 10);

    // The SAME account addressed with mixed case (the route lowercases
    // after format validation). Note: leading/trailing whitespace is
    // rejected by email FORMAT validation before normalisation — that is
    // pre-existing behaviour, identical for known and unknown emails.
    const variant = user.email.replace("test.local", "TEST.local");
    const known = await postSignup({
      name: "Attacker",
      email: variant,
      password: "attacker-password-123",
    });
    expect(known.res.status).toBe(200);
    const count = await testDb().user.count({ where: { email: user.email } });
    expect(count).toBe(1);
  });
});
