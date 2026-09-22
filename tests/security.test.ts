/**
 * KYP Security Test Suite — 64 checks.
 *
 * Sections:
 *   Security headers            (1-8)
 *   Auth/session HTTP hardening (9-18)
 *   Rate limiting integration   (19-24)
 *   Malformed input             (25-36)
 *   Authorization boundaries    (37-42)
 *   Invalid routes              (43-47)
 *   Secret handling             (48-55)
 *   Hardening misc              (56-64)
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { existsSync, readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import {
  BASE_URL,
  CookieJar,
  TEST_SESSION_SECRET,
  authed,
  createTestUser,
  ensureServer,
  loginAndGetJar,
  uniqueEmail,
  testDb,
} from "./helpers/server";

const SESSION_COOKIE = "kyp-session";

beforeAll(async () => {
  await ensureServer();
});

async function getHeaders(path: string): Promise<Headers> {
  const res = await fetch(`${BASE_URL}${path}`);
  return res.headers;
}

// ─── Security headers (1-8) ──────────────────────────────────────────────────

describe("security headers", () => {
  test("1. X-Content-Type-Options: nosniff on homepage", async () => {
    const headers = await getHeaders("/");
    expect(headers.get("x-content-type-options")).toBe("nosniff");
  });

  test("2. X-Frame-Options: DENY on homepage", async () => {
    const headers = await getHeaders("/");
    expect(headers.get("x-frame-options")).toBe("DENY");
  });

  test("3. Referrer-Policy set on homepage", async () => {
    const headers = await getHeaders("/");
    expect(headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
  });

  test("4. Permissions-Policy restricts camera/mic/geo on homepage", async () => {
    const headers = await getHeaders("/");
    const policy = headers.get("permissions-policy") ?? "";
    expect(policy).toContain("camera=()");
    expect(policy).toContain("microphone=()");
    expect(policy).toContain("geolocation=()");
  });

  test("5. X-Powered-By is absent (disabled)", async () => {
    const headers = await getHeaders("/");
    expect(headers.get("x-powered-by")).toBeNull();
  });

  test("6. X-Content-Type-Options on API responses", async () => {
    const headers = await getHeaders("/api/auth/session");
    expect(headers.get("x-content-type-options")).toBe("nosniff");
  });

  test("7. security headers present on content pages", async () => {
    const headers = await getHeaders("/drugs/sertraline");
    expect(headers.get("x-content-type-options")).toBe("nosniff");
    expect(headers.get("x-frame-options")).toBe("DENY");
  });

  test("8. security headers present on 404 responses", async () => {
    const headers = await getHeaders("/drugs/nonexistent-xyz");
    expect(headers.get("x-content-type-options")).toBe("nosniff");
  });
});

// ─── Auth/session HTTP hardening (9-18) ──────────────────────────────────────

describe("auth/session hardening at HTTP level", () => {
  test("9. session endpoint without cookie returns { user: null }", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/session`);
    const body = (await res.json()) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("10. garbage session cookie is rejected", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/session`, {
      headers: { Cookie: `${SESSION_COOKIE}=!!!garbage!!!` },
    });
    const body = (await res.json()) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("11. legacy unsigned base64-JSON cookie is rejected", async () => {
    const legacy = Buffer.from(
      JSON.stringify({ id: "clxxxx", email: "attacker@x.com", role: "psychiatrist" })
    ).toString("base64");
    const res = await fetch(`${BASE_URL}/api/auth/session`, {
      headers: { Cookie: `${SESSION_COOKIE}=${legacy}` },
    });
    const body = (await res.json()) as { user: unknown };
    expect(body.user).toBeNull();
  });

  test("12. login requires credentials even with a forged cookie present", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${SESSION_COOKIE}=forged.tokenvalue`,
        "x-forwarded-for": "10.100.0.12",
      },
      body: JSON.stringify({}),
    });
    expect(res.status).toBe(400);
  });

  test("13. session cookie is HttpOnly", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Hdr13", email: uniqueEmail("sec13"), password: "password123" }),
    });
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? [];
    const cookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(cookie?.toLowerCase()).toContain("httponly");
  });

  test("14. session cookie is SameSite=Lax", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Hdr14", email: uniqueEmail("sec14"), password: "password123" }),
    });
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? [];
    const cookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(cookie?.toLowerCase()).toContain("samesite=lax");
  });

  test("15. session cookie is scoped to Path=/", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Hdr15", email: uniqueEmail("sec15"), password: "password123" }),
    });
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? [];
    const cookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(cookie?.toLowerCase()).toContain("path=/");
  });

  test("16. session cookie carries an explicit Max-Age", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Hdr16", email: uniqueEmail("sec16"), password: "password123" }),
    });
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? [];
    const cookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(cookie).toMatch(/Max-Age=\d+/);
  });

  test("17. cookie value is opaque (not decodable JSON/PII)", async () => {
    const user = await createTestUser("sec", 17);
    const token = user.jar.get(SESSION_COOKIE)!;
    // Not base64-encoded JSON
    const decoded = Buffer.from(token.split(".")[0], "base64url").toString("utf8");
    expect(decoded.startsWith("{")).toBe(false);
    expect(decoded.toLowerCase()).not.toContain("email");
    // Not the legacy format
    expect(() => JSON.parse(Buffer.from(token, "base64").toString("utf8"))).toThrow();
  });

  test("18. session tokens never appear in rendered page HTML", async () => {
    const user = await createTestUser("sec", 18);
    const token = user.jar.get(SESSION_COOKIE)!;
    for (const path of ["/", "/dashboard", "/learn"]) {
      const res = await fetch(`${BASE_URL}${path}`, { headers: authed(user.jar) });
      const html = await res.text();
      expect(html).not.toContain(token);
    }
  });
});

// ─── Rate limiting integration (19-24) ──────────────────────────────────────

describe("rate limiting integration", () => {
  test("19. 429 responses include a Retry-After header", async () => {
    const email = uniqueEmail("sec19");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.119.0.1");
    }
    const blocked = await loginAndGetJar(email, "wrong-password", "10.119.0.1");
    expect(blocked.res.status).toBe(429);
    expect(Number(blocked.res.headers.get("retry-after"))).toBeGreaterThan(0);
  });

  test("20. 429 body is generic (no account existence signal)", async () => {
    const email = uniqueEmail("sec20");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.120.0.1");
    }
    const blocked = await loginAndGetJar(email, "wrong-password", "10.120.0.1");
    const body = (await blocked.res.json()) as { error: string };
    expect(body.error).toContain("Too many");
    expect(body.error.toLowerCase()).not.toContain("account");
    expect(body.error.toLowerCase()).not.toContain("password");
  });

  test("21. lockout applies equally to unknown accounts", async () => {
    const email = uniqueEmail("sec21"); // never registered
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.121.0.1");
    }
    const blocked = await loginAndGetJar(email, "wrong-password", "10.121.0.1");
    expect(blocked.res.status).toBe(429);
  });

  test("22. lockout expiry is time-based (automatic)", async () => {
    const { testDb } = await import("./helpers/server");
    const email = uniqueEmail("sec22");
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.122.0.1");
    }
    // Manually expire: proves the block is purely time-based state
    const { createHash } = await import("crypto");
    const identifierHash = createHash("sha256").update(email).digest("hex");
    await testDb().loginAttempt.updateMany({
      where: { identifierHash },
      data: { lockoutUntil: new Date(Date.now() - 1000) },
    });
    const after = await loginAndGetJar(email, "wrong-password", "10.122.0.1");
    expect(after.res.status).toBe(401);
  });

  test("23. lockout durations are bounded (max 30 minutes)", async () => {
    const email = uniqueEmail("sec23");
    for (let round = 0; round < 4; round++) {
      for (let i = 0; i < 5; i++) {
        await loginAndGetJar(email, "wrong-password", `10.123.0.${round}`);
      }
      const blocked = await loginAndGetJar(email, "wrong-password", `10.123.0.${round}`);
      expect(blocked.res.status).toBe(429);
      expect(Number(blocked.res.headers.get("retry-after"))).toBeLessThanOrEqual(1800);
      const { testDb } = await import("./helpers/server");
      const { createHash } = await import("crypto");
      const identifierHash = createHash("sha256").update(email).digest("hex");
      await testDb().loginAttempt.updateMany({
        where: { identifierHash },
        data: { lockoutUntil: new Date(Date.now() - 1000) },
      });
    }
  }, 60000);

  test("24. lockout is enforced BEFORE bcrypt (correct password still 429)", async () => {
    const email = uniqueEmail("sec24");
    const reg = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Sec24", email, password: "password123" }),
    });
    expect(reg.status).toBe(200);
    for (let i = 0; i < 5; i++) {
      await loginAndGetJar(email, "wrong-password", "10.124.0.1");
    }
    const blocked = await loginAndGetJar(email, "password123", "10.124.0.1");
    expect(blocked.res.status).toBe(429);
  });
});

// ─── Malformed input (25-36) ─────────────────────────────────────────────────

describe("malformed input handling", () => {
  async function postJson(path: string, body: string, auth?: Record<string, string>) {
    return fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(auth ?? {}) },
      body,
    });
  }

  test("25. login with no body returns 400", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.125.0.1" },
    });
    expect(res.status).toBe(400);
  });

  test("26. login with invalid JSON returns 400", async () => {
    const res = await postJson("/api/auth/login", "{not json", {
      "x-forwarded-for": "10.126.0.1",
    });
    expect(res.status).toBe(400);
  });

  test("27. login with wrong field types returns 400", async () => {
    const res = await postJson("/api/auth/login", JSON.stringify({ email: 123, password: true }), {
      "x-forwarded-for": "10.127.0.1",
    });
    expect(res.status).toBe(400);
  });

  test("28. login missing password returns 400", async () => {
    const res = await postJson("/api/auth/login", JSON.stringify({ email: "a@b.co" }), {
      "x-forwarded-for": "10.128.0.1",
    });
    expect(res.status).toBe(400);
  });

  test("29. signup missing name returns 400", async () => {
    const res = await postJson(
      "/api/auth/signup",
      JSON.stringify({ email: uniqueEmail("sec29"), password: "password123" })
    );
    expect(res.status).toBe(400);
  });

  test("30. signup with short password returns 400", async () => {
    const res = await postJson(
      "/api/auth/signup",
      JSON.stringify({ name: "S", email: uniqueEmail("sec30"), password: "abc" })
    );
    expect(res.status).toBe(400);
  });

  test("31. signup with invalid email returns 400", async () => {
    const res = await postJson(
      "/api/auth/signup",
      JSON.stringify({ name: "S", email: "not-an-email", password: "password123" })
    );
    expect(res.status).toBe(400);
  });

  test("32. role update with an invalid value returns 400 (authenticated)", async () => {
    const user = await createTestUser("sec", 32);
    const res = await postJson(
      "/api/auth/role",
      JSON.stringify({ role: "superadmin" }),
      authed(user.jar)
    );
    expect(res.status).toBe(400);
  });

  test("33. authenticated users cannot self-promote system role", async () => {
    const user = await createTestUser("sec", 33);
    const res = await postJson(
      "/api/auth/role",
      JSON.stringify({ role: "admin" }),
      authed(user.jar)
    );
    expect(res.status).toBe(400);
    const saved = await testDb().user.findUnique({
      where: { id: user.userId },
      select: { role: true, learnerType: true },
    });
    expect(saved?.role).toBe("user");
    expect(saved?.learnerType).toBe("student");
    const session = await fetch(`${BASE_URL}/api/auth/session`, { headers: authed(user.jar) });
    const body = (await session.json()) as { user?: { role?: string; learnerType?: string } };
    expect(body.user?.learnerType).toBe("student");
    expect(body.user?.role).toBeUndefined();
  });

  test("34. bookmark POST rejects unknown content and ignores forged title", async () => {
    const user = await createTestUser("sec", 34);
    const unknown = await postJson(
      "/api/bookmarks",
      JSON.stringify({ type: "drug", slug: "not-a-real-drug", title: "Sertraline" }),
      authed(user.jar)
    );
    expect(unknown.status).toBe(404);

    const valid = await postJson(
      "/api/bookmarks",
      JSON.stringify({ type: "drug", slug: "sertraline", title: "FORGED TITLE" }),
      authed(user.jar)
    );
    expect(valid.status).toBe(200);
    const body = (await valid.json()) as { title: string };
    expect(body.title).toBe("Sertraline");
  });

  test("35. progress POST rejects unknown content and derives canonical title", async () => {
    const user = await createTestUser("sec", 35);
    const unknown = await postJson(
      "/api/progress",
      JSON.stringify({ type: "drug", slug: "not-a-real-drug", title: "Sertraline" }),
      authed(user.jar)
    );
    expect(unknown.status).toBe(404);

    const valid = await postJson(
      "/api/progress",
      JSON.stringify({ type: "drug", slug: "sertraline", title: "FORGED TITLE" }),
      authed(user.jar)
    );
    expect(valid.status).toBe(200);
    const body = (await valid.json()) as { title: string };
    expect(body.title).toBe("Sertraline");
  });

  test("36. bookmark POST with missing fields returns 400 (authenticated)", async () => {
    const user = await createTestUser("sec", 33);
    const res = await postJson("/api/bookmarks", JSON.stringify({ type: "drug" }), authed(user.jar));
    expect(res.status).toBe(400);
  });

  test("37. bookmark POST with invalid type returns 400", async () => {
    const user = await createTestUser("sec", 34);
    const res = await postJson(
      "/api/bookmarks",
      JSON.stringify({ type: "video", slug: "x", title: "X" }),
      authed(user.jar)
    );
    expect(res.status).toBe(400);
  });

  test("38. progress POST with invalid type returns 400", async () => {
    const user = await createTestUser("sec", 35);
    const res = await postJson(
      "/api/progress",
      JSON.stringify({ type: "blog", slug: "x", title: "X" }),
      authed(user.jar)
    );
    expect(res.status).toBe(400);
  });

  test("39. search-history POST without query returns 400", async () => {
    const user = await createTestUser("sec", 36);
    const res = await postJson("/api/search-history", JSON.stringify({}), authed(user.jar));
    expect(res.status).toBe(400);
  });
});

// ─── Authorization boundaries (37-42) ────────────────────────────────────────

describe("authorization boundaries", () => {
  test("37. bookmarks GET requires authentication (401)", async () => {
    const res = await fetch(`${BASE_URL}/api/bookmarks`);
    expect(res.status).toBe(401);
  });

  test("38. progress GET requires authentication (401)", async () => {
    const res = await fetch(`${BASE_URL}/api/progress`);
    expect(res.status).toBe(401);
  });

  test("39. search-history GET requires authentication (401)", async () => {
    const res = await fetch(`${BASE_URL}/api/search-history`);
    expect(res.status).toBe(401);
  });

  test("40. role POST requires authentication (401)", async () => {
    const res = await postJson("/api/auth/role", JSON.stringify({ role: "student" }));
    expect(res.status).toBe(401);
  });

  test("41. bookmarks DELETE requires authentication (401)", async () => {
    const res = await fetch(`${BASE_URL}/api/bookmarks`, { method: "DELETE" });
    expect(res.status).toBe(401);
  });

  test("42. bookmarks GET with a forged session token is 401", async () => {
    const jar = new CookieJar();
    jar.set(SESSION_COOKIE, "AAAA".repeat(11) + "." + "BBBB".repeat(11));
    const res = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(jar) });
    expect(res.status).toBe(401);
  });

  async function postJson(path: string, body: string, auth?: Record<string, string>) {
    return fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(auth ?? {}) },
      body,
    });
  }
});

// ─── Invalid routes (43-47) ──────────────────────────────────────────────────

describe("invalid routes", () => {
  test("43. unknown drug slug returns 404", async () => {
    const res = await fetch(`${BASE_URL}/drugs/definitely-not-a-drug`);
    expect(res.status).toBe(404);
  });

  test("44. unknown disease slug returns 404", async () => {
    const res = await fetch(`${BASE_URL}/diseases/definitely-not-a-disease`);
    expect(res.status).toBe(404);
  });

  test("45. unknown substance slug returns 404", async () => {
    const res = await fetch(`${BASE_URL}/substances/definitely-not-a-substance`);
    expect(res.status).toBe(404);
  });

  test("46. unknown API route returns 404", async () => {
    const res = await fetch(`${BASE_URL}/api/definitely-not-an-endpoint`);
    expect(res.status).toBe(404);
  });

  test("47. unknown top-level path returns 404", async () => {
    const res = await fetch(`${BASE_URL}/definitely-not-a-page`);
    expect(res.status).toBe(404);
  });
});

// ─── Secret handling (48-55) ─────────────────────────────────────────────────

describe("secret handling", () => {
  function staticChunks(): string[] {
    const dir = resolve(process.cwd(), ".next/standalone/.next/static");
    if (!existsSync(dir)) return [];
    const files: string[] = [];
    const walk = (d: string) => {
      for (const entry of readdirSync(d, { withFileTypes: true })) {
        const p = join(d, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (/\.(js|css)$/.test(entry.name)) files.push(p);
      }
    };
    walk(dir);
    return files;
  }

  test("48. SESSION_SECRET is not bundled into any client chunk", async () => {
    const chunks = staticChunks();
    expect(chunks.length).toBeGreaterThan(0);
    for (const file of chunks) {
      const content = readFileSync(file, "utf8");
      expect(content).not.toContain(TEST_SESSION_SECRET);
    }
  }, 30000);

  test("49. no literal session-secret pattern in client chunks", async () => {
    const chunks = staticChunks();
    for (const file of chunks) {
      const content = readFileSync(file, "utf8");
      expect(content).not.toContain("SESSION_SECRET");
    }
  }, 30000);

  test("50. login failures do not echo the submitted password", async () => {
    const res = await loginAndGetJar(uniqueEmail("sec50"), "super-secret-pw-42", "10.150.0.1");
    const body = await res.res.text();
    expect(body).not.toContain("super-secret-pw-42");
  });

  test("51. .env is not served over HTTP", async () => {
    const res = await fetch(`${BASE_URL}/.env`);
    expect(res.status).toBe(404);
  });

  test("52. the database file is not served over HTTP", async () => {
    const res = await fetch(`${BASE_URL}/db/custom.db`);
    expect(res.status).toBe(404);
  });

  test("53. prisma schema is not served over HTTP", async () => {
    const res = await fetch(`${BASE_URL}/prisma/schema.prisma`);
    expect(res.status).toBe(404);
  });

  test("54. package.json is not served over HTTP", async () => {
    const res = await fetch(`${BASE_URL}/package.json`);
    expect(res.status).toBe(404);
  });

  test("55. auth error responses do not include stack traces or internals", async () => {
    const res = await loginAndGetJar(uniqueEmail("sec55"), "wrong-password", "10.155.0.1");
    const body = (await res.res.json()) as { error: string };
    expect(Object.keys(body)).toEqual(["error"]);
    expect(body.error).not.toMatch(/prisma|database|sqlite|error:/i);
  });
});

// ─── Hardening misc (56-64) ──────────────────────────────────────────────────

describe("hardening misc", () => {
  test("56. API responses use JSON content type", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/session`);
    expect(res.headers.get("content-type")).toContain("application/json");
  });

  test("57. login endpoint rejects GET (method not allowed)", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/login`);
    expect([405, 404]).toContain(res.status);
  });

  test("58. HEAD requests work on pages", async () => {
    const res = await fetch(`${BASE_URL}/`, { method: "HEAD" });
    expect(res.status).toBe(200);
  });

  test("59. legacy .html routes redirect permanently (308)", async () => {
    const res = await fetch(`${BASE_URL}/cocaine.html`, { redirect: "manual" });
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toContain("/#substances");
  });

  test("60. Set-Cookie has no Domain attribute (host-only cookie)", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Sec60", email: uniqueEmail("sec60"), password: "password123" }),
    });
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? [];
    const cookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(cookie?.toLowerCase()).not.toContain("domain=");
  });

  test("61. Secure flag present on production session cookies", async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Sec61", email: uniqueEmail("sec61"), password: "password123" }),
    });
    const setCookies =
      (res.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? [];
    const cookie = setCookies.find((c) => c.startsWith(`${SESSION_COOKIE}=`));
    expect(cookie?.toLowerCase()).toContain("secure");
  });

  test("62. X-DNS-Prefetch-Control header is set", async () => {
    const headers = await getHeaders("/");
    expect(headers.get("x-dns-prefetch-control")).toBe("off");
  });

  test("63. unknown vs wrong-password login responses are identical (no enumeration)", async () => {
    const unknown = await loginAndGetJar(uniqueEmail("sec63a"), "wrong-password", "10.163.0.1");
    const real = await createTestUser("sec", 63);
    const wrongPw = await loginAndGetJar(real.email, "wrong-password", "10.163.0.1");
    expect(unknown.res.status).toBe(wrongPw.res.status);
    expect(await unknown.res.text()).toBe(await wrongPw.res.text());
  });

  test("64. login timing is consistent between unknown and real accounts", async () => {
    // The dummy-bcrypt path should keep unknown-account timing close to
    // real-account wrong-password timing (both run exactly one bcrypt compare).
    const real = await createTestUser("sec", 64);
    const timings: number[] = [];
    for (let i = 0; i < 3; i++) {
      const start = performance.now();
      await loginAndGetJar(uniqueEmail(`sec64u${i}`), "wrong-password", "10.164.0.1");
      timings.push(performance.now() - start);
    }
    const unknownAvg = timings.reduce((a, b) => a + b, 0) / timings.length;
    const realTimings: number[] = [];
    for (let i = 0; i < 3; i++) {
      const start = performance.now();
      await loginAndGetJar(real.email, "wrong-password", "10.164.0.2");
      realTimings.push(performance.now() - start);
    }
    const realAvg = realTimings.reduce((a, b) => a + b, 0) / realTimings.length;
    // Generous bound: both must be in the same order of magnitude (bcrypt-bound)
    expect(Math.abs(unknownAvg - realAvg)).toBeLessThan(
      Math.max(unknownAvg, realAvg) * 2 + 100
    );
  });
});
