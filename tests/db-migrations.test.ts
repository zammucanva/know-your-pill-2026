/**
 * VERSIONED PRISMA MIGRATIONS REGRESSION (Security Objective 9)
 *
 * Production schema changes were previously applied via
 * `scripts/prepare-database.ts && prisma db push` — unversioned,
 * non-reviewable, and unsafe to re-run against evolving production data.
 *
 * The hardened contract:
 *   - prisma/migrations/ holds the versioned history (init migration +
 *     migration_lock.toml)
 *   - the production mechanism is `prisma migrate deploy` — `db push`
 *     appears in NO production-facing script
 *   - the test database itself is created by `migrate deploy` (the shared
 *     harness does this on every run), so every test in every file proves
 *     the clean-database migration path
 *   - the legacy data-upgrade helper (prepare-database.ts) is idempotent
 *     against an already-migrated database — it neither crashes nor
 *     mutates data
 */

import { describe, expect, test } from "bun:test";
import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { ensureServer, testDb } from "./helpers/server";

const MIGRATIONS_DIR = resolve(process.cwd(), "prisma/migrations");
const INIT_MIGRATION_DIR = resolve(MIGRATIONS_DIR, "20260922000000_init");
const INIT_MIGRATION_NAME = "20260922000000_init";

describe("versioned migration artifacts", () => {
  test("1. the migrations directory exists with a lock file", () => {
    expect(existsSync(MIGRATIONS_DIR)).toBe(true);
    const lock = readFileSync(resolve(MIGRATIONS_DIR, "migration_lock.toml"), "utf8");
    expect(lock).toContain('provider = "sqlite"');
  });

  test("2. the init migration covers every model in the schema", () => {
    const sql = readFileSync(resolve(INIT_MIGRATION_DIR, "migration.sql"), "utf8");
    for (const table of [
      "User",
      "Session",
      "PasswordResetToken",
      "LoginAttempt",
      "Progress",
      "Bookmark",
      "SearchHistory",
    ]) {
      expect(sql).toContain(`CREATE TABLE "${table}"`);
    }
    // Security-relevant constraints survive as migrations, not just schema:
    expect(sql).toContain('CREATE UNIQUE INDEX "User_email_key"');
    expect(sql).toContain('CREATE UNIQUE INDEX "Session_tokenHash_key"');
    expect(sql).toContain('CREATE UNIQUE INDEX "PasswordResetToken_tokenHash_key"');
  });

  test("3. no production-facing script uses prisma db push", () => {
    const pkg = JSON.parse(
      readFileSync(resolve(process.cwd(), "package.json"), "utf8")
    ) as { scripts: Record<string, string> };
    for (const [name, script] of Object.entries(pkg.scripts)) {
      if (name.startsWith("db:")) {
        expect(script).not.toContain("db push");
      }
    }
    // The production mechanisms:
    expect(pkg.scripts["db:deploy"]).toContain("migrate deploy");
    expect(pkg.scripts["db:prepare"]).toContain("migrate deploy");
    expect(pkg.scripts["db:prepare"]).toContain("prepare-database.ts");
  });
});

describe("the test database itself is migration-built", () => {
  test("4. _prisma_migrations records the applied init migration", async () => {
    await ensureServer();
    const applied = await testDb().$queryRawUnsafe<
      Array<{ migration_name: string; finished_at: Date | null }>
    >('SELECT migration_name, finished_at FROM "_prisma_migrations"');
    expect(applied.length).toBeGreaterThanOrEqual(1);
    const init = applied.find((row) => row.migration_name === INIT_MIGRATION_NAME);
    expect(init).toBeDefined();
    expect(init!.finished_at).not.toBeNull();
  });

  test("5. the migrated database serves the application (users + sessions work)", async () => {
    await ensureServer();
    // Sign a user up through the REAL API against this migration-built
    // database (self-contained — does not rely on other test files).
    const { createTestUser } = await import("./helpers/server");
    const user = await createTestUser("dbmig", 5);
    const users = await testDb().user.count({ where: { email: user.email } });
    expect(users).toBe(1);
    const sessions = await testDb().session.count({ where: { userId: user.userId } });
    expect(sessions).toBe(1);
  });
});

describe("legacy data-upgrade helper is idempotent on migrated databases", () => {
  test("6. prepare-database.ts exits cleanly and mutates nothing", async () => {
    await ensureServer();
    const before = await testDb().user.count();
    const beforeTypes = await testDb().user.groupBy({
      by: ["learnerType"],
      _count: { _all: true },
    });

    // Run the legacy helper against the (already migrated) test database.
    execSync("bun scripts/prepare-database.ts", {
      cwd: process.cwd(),
      env: { ...process.env, DATABASE_URL: `file:${resolve(process.cwd(), "db/test.db")}` },
      stdio: "pipe",
    });

    const after = await testDb().user.count();
    const afterTypes = await testDb().user.groupBy({
      by: ["learnerType"],
      _count: { _all: true },
    });
    expect(after).toBe(before);
    expect(afterTypes).toEqual(beforeTypes);
  });
});
