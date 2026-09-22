import { db } from "../src/lib/db";

/**
 * LEGACY DATABASE UPGRADE HELPER (Security Objective 9 companion).
 *
 * This script NO LONGER synchronises the schema — production schema changes
 * are applied exclusively by VERSIONED Prisma migrations
 * (`bunx prisma migrate deploy`, see prisma/migrations/). Its only remaining
 * responsibility is the one-time DATA migration for databases created by
 * the historical `db push` workflow: moving learner profile values out of
 * `User.role` into `User.learnerType` and normalising `role` to the
 * authorization vocabulary.
 *
 * Standard procedures:
 *   - FRESH database:            `bunx prisma migrate deploy`
 *   - LEGACY db-push database:   1. `bun scripts/prepare-database.ts` (this
 *                                  script — backfills learnerType)
 *                                2. `bunx prisma migrate resolve --applied
 *                                  20260922000000_init`  (baselines the
 *                                  schema that already exists)
 *                                3. `bunx prisma migrate deploy` (no-op
 *                                  thereafter; future migrations apply)
 *
 * The combined entry point `bun run db:prepare` runs step 1 of the legacy
 * path followed by migrate deploy — safe on fresh databases (the learner
 * checks are no-ops when the table is empty) and on already-baselined ones.
 */

async function main() {
  const tables = await db.$queryRawUnsafe<Array<{ name: string }>>(
    'SELECT name FROM sqlite_master WHERE type = "table" AND name = "User"'
  );

  if (tables.length === 0) {
    console.log("KYP database is new; versioned migrations will create the schema.");
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

  console.log("KYP legacy data upgrade (learnerType backfill) check complete.");
}

main()
  .catch((error) => {
    console.error(
      "KYP legacy database upgrade failed:",
      error instanceof Error ? error.name : "UnknownError"
    );
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
