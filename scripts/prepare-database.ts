import { db } from "../src/lib/db";

/**
 * LEGACY DATABASE UPGRADE HELPER (Security Objective 9 companion).
 *
 * This script NO LONGER synchronises the schema via `db push` — production
 * schema changes are applied exclusively by VERSIONED Prisma migrations
 * (`bunx prisma migrate deploy`, see prisma/migrations/). Its responsibility
 * is the one-time upgrade of databases created by the historical
 * `db push` workflow (tables: User/Progress/Bookmark/SearchHistory only,
 * `User.role` holding learner-profile vocabulary):
 *
 *   1. DATA migration — adds `User.learnerType`, backfills it from the
 *      legacy `User.role` values, and normalises `role` to the
 *      authorization vocabulary (user/admin/moderator).
 *   2. SCHEMA completion — creates the security-era tables and indices
 *      the legacy database never had (Session, PasswordResetToken,
 *      LoginAttempt, plus the User_email unique index), using the exact
 *      DDL of the init migration so the resulting schema is identical to
 *      a fresh `migrate deploy`.
 *
 * Every statement is idempotent: the script is safe to re-run on fresh,
 * already-migrated, and partially-upgraded databases.
 *
 * Standard procedures:
 *   - FRESH database:            `bunx prisma migrate deploy`
 *   - LEGACY db-push database:   1. `bun scripts/prepare-database.ts` (this
 *                                  script — data + schema completion)
 *                                2. `bunx prisma migrate resolve --applied
 *                                  20260922000000_init`  (baseline — now
 *                                  truthful, because the schema matches)
 *                                3. `bunx prisma migrate deploy` (no-op
 *                                  thereafter; future migrations apply)
 *
 * The combined entry point `bun run db:prepare` runs this script followed
 * by migrate deploy — safe on fresh databases (no-ops) and on
 * already-baselined ones.
 *
 * VERIFIED against a copy of the real legacy production database
 * (db/custom.db, 35 users, 2026-09-22): data preserved (all User /
 * Progress / Bookmark / SearchHistory rows intact), roles normalised,
 * missing tables created, and the upgraded database serves the current
 * application. The historical probe this file replaced (a
 * `SELECT "learnerType" ...` existence check) never failed on SQLite —
 * double-quoted unknown identifiers degrade to string literals — which
 * is why the legacy path previously crashed with
 * `no such column: learnerType`.
 */

/** PRAGMA-based column probe — immune to SQLite's double-quote fallback. */
async function userTableColumns(): Promise<string[]> {
  const rows = await db.$queryRawUnsafe<Array<{ name: string }>>(
    'PRAGMA table_info("User")'
  );
  return rows.map((row) => row.name);
}

async function tableExists(name: string): Promise<boolean> {
  const tables = await db.$queryRawUnsafe<Array<{ name: string }>>(
    'SELECT name FROM sqlite_master WHERE type = "table" AND name = $1',
    name
  );
  return tables.length > 0;
}

/**
 * DDL mirrors prisma/migrations/20260922000000_init/migration.sql exactly
 * (with IF NOT EXISTS so re-runs and partial upgrades converge). If the
 * init migration ever changes, this block must change with it — the
 * legacy upgrade has to land on the same schema `migrate deploy` builds.
 */
const MISSING_TABLE_DDL = [
  // -- CreateTable: Session
  `CREATE TABLE IF NOT EXISTS "Session" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "tokenHash" TEXT NOT NULL,
      "userId" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "expiresAt" DATETIME NOT NULL,
      "revokedAt" DATETIME,
      "lastUsedAt" DATETIME,
      CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "Session_tokenHash_key" ON "Session"("tokenHash")`,
  `CREATE INDEX IF NOT EXISTS "Session_userId_expiresAt_idx" ON "Session"("userId", "expiresAt")`,
  // -- CreateTable: PasswordResetToken
  `CREATE TABLE IF NOT EXISTS "PasswordResetToken" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "tokenHash" TEXT NOT NULL,
      "userId" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "expiresAt" DATETIME NOT NULL,
      "usedAt" DATETIME,
      "sourceHash" TEXT,
      CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "PasswordResetToken_tokenHash_key" ON "PasswordResetToken"("tokenHash")`,
  `CREATE INDEX IF NOT EXISTS "PasswordResetToken_userId_createdAt_idx" ON "PasswordResetToken"("userId", "createdAt")`,
  // -- CreateTable: LoginAttempt
  `CREATE TABLE IF NOT EXISTS "LoginAttempt" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "identifierHash" TEXT NOT NULL,
      "sourceHash" TEXT NOT NULL,
      "failureCount" INTEGER NOT NULL DEFAULT 0,
      "windowStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "lastFailureAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "lockoutUntil" DATETIME,
      "escalationLevel" INTEGER NOT NULL DEFAULT 0,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE INDEX IF NOT EXISTS "LoginAttempt_identifierHash_lastFailureAt_idx" ON "LoginAttempt"("identifierHash", "lastFailureAt")`,
  `CREATE INDEX IF NOT EXISTS "LoginAttempt_sourceHash_lastFailureAt_idx" ON "LoginAttempt"("sourceHash", "lastFailureAt")`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "LoginAttempt_identifierHash_sourceHash_key" ON "LoginAttempt"("identifierHash", "sourceHash")`,
  // -- User indices (legacy databases rely on an implicit autoindex)
  `CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email")`,
];

async function main() {
  const hasUserTable = await tableExists("User");

  if (!hasUserTable) {
    console.log("KYP database is new; versioned migrations will create the schema.");
    return;
  }

  // ── 1. DATA migration: learnerType column + role normalisation ──
  const columns = await userTableColumns();
  if (!columns.includes("learnerType")) {
    await db.$executeRawUnsafe(
      "ALTER TABLE \"User\" ADD COLUMN \"learnerType\" TEXT NOT NULL DEFAULT 'student'"
    );
  }

  await db.$executeRawUnsafe(
    'UPDATE "User" SET "learnerType" = "role" WHERE "role" NOT IN (\'user\', \'admin\', \'moderator\')'
  );
  await db.$executeRawUnsafe(
    'UPDATE "User" SET "role" = \'user\' WHERE "role" NOT IN (\'admin\', \'moderator\')'
  );

  // ── 2. SCHEMA completion: security-era tables and indices ──
  for (const ddl of MISSING_TABLE_DDL) {
    await db.$executeRawUnsafe(ddl);
  }

  console.log(
    "KYP legacy database upgrade complete (learnerType backfill + schema completion)."
  );
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
