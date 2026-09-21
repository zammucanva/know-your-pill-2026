import { db } from "../src/lib/db";

async function main() {
  // Existing deployments may have the legacy role-only schema. Add the new
  // learnerType column first, then migrate legacy learner roles into it.
  try {
    await db.$queryRawUnsafe("SELECT learnerType FROM User LIMIT 1");
  } catch {
    await db.$executeRawUnsafe('ALTER TABLE "User" ADD COLUMN "learnerType" TEXT NOT NULL DEFAULT 'student'');
  }

  await db.$executeRawUnsafe(
    'UPDATE "User" SET "learnerType" = "role" WHERE "role" NOT IN ('user', 'admin', 'moderator')'
  );
  await db.$executeRawUnsafe(
    'UPDATE "User" SET "role" = 'user' WHERE "role" NOT IN ('admin', 'moderator')'
  );

  console.log("KYP database profile/authorization migration check complete.");
}

main()
  .catch((error) => {
    console.error("KYP database preparation failed:", error instanceof Error ? error.name : "UnknownError");
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
