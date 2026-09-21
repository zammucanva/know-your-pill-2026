import { db } from "../src/lib/db";

async function main() {
  const tables = await db.$queryRawUnsafe<Array<{ name: string }>>(
    'SELECT name FROM sqlite_master WHERE type = "table" AND name = "User"'
  );

  if (tables.length === 0) {
    console.log("KYP database is new; Prisma will create the schema.");
    return;
  }

  try {
    await db.$queryRawUnsafe('SELECT "learnerType" FROM "User" LIMIT 1');
  } catch {
    await db.$executeRawUnsafe(
      'ALTER TABLE "User" ADD COLUMN "learnerType" TEXT NOT NULL DEFAULT "student"'
    );
  }

  await db.$executeRawUnsafe(
    'UPDATE "User" SET "learnerType" = "role" WHERE "role" NOT IN ("user", "admin", "moderator")'
  );
  await db.$executeRawUnsafe(
    'UPDATE "User" SET "role" = "user" WHERE "role" NOT IN ("admin", "moderator")'
  );

  console.log("KYP database profile/authorization migration check complete.");
}

main()
  .catch((error) => {
    console.error(
      "KYP database preparation failed:",
      error instanceof Error ? error.name : "UnknownError"
    );
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
