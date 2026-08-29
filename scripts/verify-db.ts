import { db } from "../src/lib/db";
async function main() {
  // Count total users
  const count = await db.user.count();
  console.log(`Total users in DB: ${count}`);
  
  // Show the role-test user
  const roleTest = await db.user.findFirst({
    where: { email: { startsWith: "role-test-" } },
    orderBy: { createdAt: "desc" },
    select: { email: true, role: true, name: true, createdAt: true },
  });
  console.log("Most recent role-test user:", roleTest);
  
  await db.$disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
