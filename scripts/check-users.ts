import { db } from "../src/lib/db";
async function main() {
  const users = await db.user.findMany({ select: { id: true, name: true, email: true, role: true, emailVerified: true, createdAt: true } });
  console.log(JSON.stringify(users, null, 2));
  await db.$disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
