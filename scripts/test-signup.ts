// End-to-end test of signup → session → role → logout flow
const BASE = "http://localhost:3000";

async function test() {
  console.log("=== 1. Check session (should be null) ===");
  let r = await fetch(`${BASE}/api/auth/session`);
  let d = await r.json();
  console.log("Session:", JSON.stringify(d));

  console.log("\n=== 2. Signup a new test user ===");
  const testEmail = `test-${Date.now()}@kyp-test.com`;
  r = await fetch(`${BASE}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Test User", email: testEmail, password: "test123" }),
  });
  d = await r.json();
  console.log("Signup response:", r.status, JSON.stringify(d));
  const setCookie = r.headers.get("set-cookie");
  console.log("Set-Cookie present:", !!setCookie);

  // Extract cookie
  const cookie = setCookie?.split(";")[0] || "";

  console.log("\n=== 3. Check session with cookie (should show user) ===");
  r = await fetch(`${BASE}/api/auth/session`, {
    headers: { Cookie: cookie },
  });
  d = await r.json();
  console.log("Session:", JSON.stringify(d));

  console.log("\n=== 4. Update role ===");
  r = await fetch(`${BASE}/api/auth/role`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({ role: "medical_student" }),
  });
  d = await r.json();
  console.log("Role update:", r.status, JSON.stringify(d));

  console.log("\n=== 5. Check session again (should show new role) ===");
  r = await fetch(`${BASE}/api/auth/session`, {
    headers: { Cookie: cookie },
  });
  d = await r.json();
  console.log("Session:", JSON.stringify(d));

  console.log("\n=== 6. Logout ===");
  r = await fetch(`${BASE}/api/auth/session`, {
    method: "DELETE",
    headers: { Cookie: cookie },
  });
  d = await r.json();
  console.log("Logout:", r.status, JSON.stringify(d));

  console.log("\n=== 7. Try login with the test user ===");
  r = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: testEmail, password: "test123" }),
  });
  d = await r.json();
  console.log("Login:", r.status, JSON.stringify(d));
  const loginCookie = r.headers.get("set-cookie")?.split(";")[0] || "";

  console.log("\n=== 8. Verify login session ===");
  r = await fetch(`${BASE}/api/auth/session`, {
    headers: { Cookie: loginCookie },
  });
  d = await r.json();
  console.log("Session:", JSON.stringify(d));

  console.log("\n=== 9. Try login with wrong password ===");
  r = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: testEmail, password: "wrongpassword" }),
  });
  d = await r.json();
  console.log("Login (wrong pw):", r.status, JSON.stringify(d));
}

test().catch(e => { console.error(e); process.exit(1); });
