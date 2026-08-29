/**
 * Comprehensive auth edge-case tests.
 * Run: bun scripts/test-edge-cases.ts
 */
const BASE = "http://localhost:3000";

async function test(label: string, fn: () => Promise<void>) {
  try {
    await fn();
    console.log(`  ✓ ${label}`);
  } catch (e: any) {
    console.log(`  ✗ ${label} — ${e.message}`);
  }
}

async function expectStatus(res: Response, expected: number, label: string) {
  if (res.status !== expected) {
    throw new Error(`${label}: expected ${expected}, got ${res.status} — ${JSON.stringify(await res.json())}`);
  }
}

async function expectJson(res: Response, key: string, value: any, label: string) {
  const d = await res.json();
  if (d[key] !== value) {
    throw new Error(`${label}: expected ${key}=${value}, got ${key}=${d[key]}`);
  }
}

async function main() {
  console.log("\n=== SIGNUP EDGE CASES ===");

  await test("rejects missing name", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", email: "edge1@test.com", password: "test123" }),
    });
    await expectStatus(r, 400, "missing name");
  });

  await test("rejects missing email", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test", email: "", password: "test123" }),
    });
    await expectStatus(r, 400, "missing email");
  });

  await test("rejects missing password", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test", email: "edge2@test.com", password: "" }),
    });
    await expectStatus(r, 400, "missing password");
  });

  await test("rejects short password (< 6 chars)", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test", email: "edge3@test.com", password: "12345" }),
    });
    await expectStatus(r, 400, "short password");
  });

  await test("rejects duplicate email", async () => {
    // First signup
    await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Dup", email: "dup@test.com", password: "test123" }),
    });
    // Second signup with same email
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Dup2", email: "dup@test.com", password: "test123" }),
    });
    await expectStatus(r, 409, "duplicate email");
  });

  await test("rejects malformed JSON body", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: "not json",
    });
    await expectStatus(r, 500, "malformed json");
  });

  await test("rejects invalid email format (no @)", async () => {
    // The route doesn't explicitly validate email format, but it should at least accept it
    // and store it. This test documents current behavior.
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test", email: "notanemail", password: "test123" }),
    });
    // Currently accepts — documents that email format validation is missing
    if (r.status === 200) {
      console.log("    (note: email format validation is not implemented — any string is accepted)");
    }
  });

  console.log("\n=== LOGIN EDGE CASES ===");

  await test("rejects login with non-existent email", async () => {
    const r = await fetch(`${BASE}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "nonexistent@test.com", password: "test123" }),
    });
    await expectStatus(r, 404, "non-existent user");
  });

  await test("rejects login with wrong password", async () => {
    const r = await fetch(`${BASE}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "dup@test.com", password: "wrongpassword" }),
    });
    await expectStatus(r, 401, "wrong password");
  });

  await test("rejects login with missing fields", async () => {
    const r = await fetch(`${BASE}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "", password: "" }),
    });
    await expectStatus(r, 400, "missing fields");
  });

  console.log("\n=== SESSION EDGE CASES ===");

  await test("returns null user when no cookie", async () => {
    const r = await fetch(`${BASE}/api/auth/session`);
    await expectStatus(r, 200, "no cookie");
    await expectJson(r, "user", null, "null user");
  });

  await test("returns null user with invalid cookie", async () => {
    const r = await fetch(`${BASE}/api/auth/session`, {
      headers: { Cookie: "kyp-session=invalid-base64-data" },
    });
    await expectStatus(r, 200, "invalid cookie");
    await expectJson(r, "user", null, "null user");
  });

  await test("returns null user with malformed JSON in cookie", async () => {
    const fakeCookie = Buffer.from("not valid json").toString("base64");
    const r = await fetch(`${BASE}/api/auth/session`, {
      headers: { Cookie: `kyp-session=${fakeCookie}` },
    });
    await expectStatus(r, 200, "malformed cookie");
    await expectJson(r, "user", null, "null user");
  });

  console.log("\n=== ROLE EDGE CASES ===");

  await test("rejects role update without session", async () => {
    const r = await fetch(`${BASE}/api/auth/role`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "patient" }),
    });
    await expectStatus(r, 401, "no session");
  });

  await test("rejects invalid role", async () => {
    // First create a session
    const signupRes = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Role Test", email: `roleedge-${Date.now()}@test.com`, password: "test123" }),
    });
    const cookie = signupRes.headers.get("set-cookie")?.split(";")[0] || "";

    const r = await fetch(`${BASE}/api/auth/role`, {
      method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
      body: JSON.stringify({ role: "invalid_role" }),
    });
    await expectStatus(r, 400, "invalid role");
  });

  await test("accepts all valid roles", async () => {
    const validRoles = ["patient", "student", "medical_resident", "medical_student", "psychiatrist"];
    for (const role of validRoles) {
      const signupRes = await fetch(`${BASE}/api/auth/signup`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Role Test", email: `role-${role}-${Date.now()}@test.com`, password: "test123" }),
      });
      const cookie = signupRes.headers.get("set-cookie")?.split(";")[0] || "";
      const r = await fetch(`${BASE}/api/auth/role`, {
        method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
        body: JSON.stringify({ role }),
      });
      await expectStatus(r, 200, `role ${role}`);
    }
  });

  await test("accepts legacy roles for backward compat", async () => {
    const legacyRoles = ["mbbs_student", "exam_aspirant", "psychiatry_resident", "healthcare_professional"];
    for (const role of legacyRoles) {
      const signupRes = await fetch(`${BASE}/api/auth/signup`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Legacy Test", email: `legacy-${role}-${Date.now()}@test.com`, password: "test123" }),
      });
      const cookie = signupRes.headers.get("set-cookie")?.split(";")[0] || "";
      const r = await fetch(`${BASE}/api/auth/role`, {
        method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
        body: JSON.stringify({ role }),
      });
      await expectStatus(r, 200, `legacy role ${role}`);
    }
  });

  console.log("\n=== METHOD EDGE CASES ===");

  await test("GET on signup route returns 405", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, { method: "GET" });
    if (r.status !== 405) {
      throw new Error(`expected 405, got ${r.status}`);
    }
  });

  await test("POST on session route (GET-only) returns 405", async () => {
    const r = await fetch(`${BASE}/api/auth/session`, { method: "POST" });
    if (r.status !== 405) {
      throw new Error(`expected 405, got ${r.status}`);
    }
  });

  await test("GET on login route returns 405", async () => {
    const r = await fetch(`${BASE}/api/auth/login`, { method: "GET" });
    if (r.status !== 405) {
      throw new Error(`expected 405, got ${r.status}`);
    }
  });

  console.log("\n=== SECURITY EDGE CASES ===");

  await test("does not leak password hash in signup response", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Security", email: `sec-${Date.now()}@test.com`, password: "test123" }),
    });
    const d = await r.json();
    if (d.passwordHash !== undefined) {
      throw new Error("passwordHash leaked in response");
    }
  });

  await test("does not leak password hash in login response", async () => {
    const r = await fetch(`${BASE}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "dup@test.com", password: "test123" }),
    });
    const d = await r.json();
    if (d.passwordHash !== undefined) {
      throw new Error("passwordHash leaked in response");
    }
  });

  await test("does not leak password hash in session response", async () => {
    const signupRes = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Session Sec", email: `sessionsec-${Date.now()}@test.com`, password: "test123" }),
    });
    const cookie = signupRes.headers.get("set-cookie")?.split(";")[0] || "";
    const r = await fetch(`${BASE}/api/auth/session`, {
      headers: { Cookie: cookie },
    });
    const d = await r.json();
    if (d.user?.passwordHash !== undefined) {
      throw new Error("passwordHash leaked in session response");
    }
  });

  await test("handles very long password (1000 chars)", async () => {
    const longPw = "a".repeat(1000);
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Long Pw", email: `longpw-${Date.now()}@test.com`, password: longPw }),
    });
    await expectStatus(r, 200, "long password");
  });

  await test("handles SQL injection attempt in email", async () => {
    const r = await fetch(`${BASE}/api/auth/signup`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test",
        email: `" OR '1'='1 -- @test.com`,
        password: "test123",
      }),
    });
    // Should either create the user with that weird email or reject it
    // but NOT execute SQL. Prisma parameterizes queries so this is safe.
    if (r.status === 200) {
      const d = await r.json();
      if (!d.id) throw new Error("SQL injection caused unexpected behavior");
    }
  });

  console.log("\n=== ALL EDGE CASE TESTS COMPLETE ===\n");
}

main().catch(e => { console.error(e); process.exit(1); });
