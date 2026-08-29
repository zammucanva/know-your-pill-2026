// Test that role update properly updates the session cookie
const BASE = "http://localhost:3000";

async function test() {
  const testEmail = `role-test-${Date.now()}@kyp-test.com`;
  
  // Signup
  let r = await fetch(`${BASE}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Role Test", email: testEmail, password: "test123" }),
  });
  const signupCookie = r.headers.get("set-cookie")?.split(";")[0] || "";
  console.log("1. Signup:", (await r.json()).role);

  // Update role — capture the NEW cookie from the response
  r = await fetch(`${BASE}/api/auth/role`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: signupCookie },
    body: JSON.stringify({ role: "psychiatrist" }),
  });
  const roleUpdateCookie = r.headers.get("set-cookie")?.split(";")[0] || "";
  console.log("2. Role update response:", await r.json());
  console.log("   Cookie changed:", signupCookie !== roleUpdateCookie);

  // Check session with the NEW cookie
  r = await fetch(`${BASE}/api/auth/session`, {
    headers: { Cookie: roleUpdateCookie },
  });
  const session = await r.json();
  console.log("3. Session with new cookie:", session.user?.role);

  // Also verify the DB was updated
  console.log("\n4. Verify in DB directly:");
}
test().catch(e => { console.error(e); process.exit(1); });
