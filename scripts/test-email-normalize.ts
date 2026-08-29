const BASE = "http://localhost:3000";
async function test() {
  // Signup with mixed case email
  const email = `CaseTest-${Date.now()}@EXAMPLE.COM`;
  console.log(`1. Signup with: ${email}`);
  let r = await fetch(`${BASE}/api/auth/signup`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Case Test", email, password: "test123" }),
  });
  const d = await r.json();
  console.log(`   Response email: ${d.email} (should be lowercase)`);

  // Login with lowercase version
  const lowerEmail = email.toLowerCase();
  console.log(`2. Login with: ${lowerEmail}`);
  r = await fetch(`${BASE}/api/auth/login`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: lowerEmail, password: "test123" }),
  });
  console.log(`   Login status: ${r.status} (should be 200)`);

  // Login with original mixed case
  console.log(`3. Login with: ${email} (mixed case)`);
  r = await fetch(`${BASE}/api/auth/login`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password: "test123" }),
  });
  console.log(`   Login status: ${r.status} (should be 200 — case-insensitive)`);
}
test().catch(console.error);
