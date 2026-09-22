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
import { existsSync, readFileSync, rmSync } from "fs";
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

describe("legacy db-push database upgrade path (real legacy shape)", () => {
  /**
   * Rebuilds the historical `db push` database shape: User (role holding
   * learner vocabulary, NO learnerType), Progress, Bookmark,
   * SearchHistory — and NO Session/PasswordResetToken/LoginAttempt tables
   * or migration history. Data rows are inserted so preservation can be
   * asserted after the upgrade.
   */
  function createLegacyFixture(dbPath: string): void {
    const { Database } = require("bun:sqlite");
    rmSync(dbPath, { force: true });
    const sqlite = new Database(dbPath);
    sqlite.exec(`
      CREATE TABLE "User" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "name" TEXT NOT NULL,
          "email" TEXT NOT NULL,
          "passwordHash" TEXT NOT NULL,
          "emailVerified" BOOLEAN NOT NULL DEFAULT false,
          "role" TEXT NOT NULL DEFAULT 'student',
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      );
      CREATE TABLE "Progress" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "userId" TEXT NOT NULL,
          "type" TEXT NOT NULL,
          "slug" TEXT NOT NULL,
          "title" TEXT NOT NULL,
          "lastVisitedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "visitCount" INTEGER NOT NULL DEFAULT 1,
          CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
      CREATE TABLE "Bookmark" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "userId" TEXT NOT NULL,
          "type" TEXT NOT NULL,
          "slug" TEXT NOT NULL,
          "title" TEXT NOT NULL,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
      CREATE TABLE "SearchHistory" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "userId" TEXT NOT NULL,
          "query" TEXT NOT NULL,
          "resultType" TEXT,
          "resultSlug" TEXT,
          "resultTitle" TEXT,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "SearchHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
    `);
    const insert = sqlite.prepare(
      `INSERT INTO "User" ("id","name","email","passwordHash","role","updatedAt")
       VALUES (?,?,?,?,?,datetime('now'))`
    );
    insert.run("legacy-1", "Legacy One", "legacy1@example.test", "hash1", "mbbs_student");
    insert.run("legacy-2", "Legacy Two", "legacy2@example.test", "hash2", "medical_student");
    insert.run("legacy-3", "Legacy Three", "legacy3@example.test", "hash3", "admin");
    sqlite
      .prepare(
        `INSERT INTO "Progress" ("id","userId","type","slug","title") VALUES ('p1','legacy-1','drug','sertraline','Sertraline')`
      )
      .run();
    sqlite
      .prepare(
        `INSERT INTO "Bookmark" ("id","userId","type","slug","title") VALUES ('b1','legacy-2','disease','major-depressive-disorder','MDD')`
      )
      .run();
    sqlite
      .prepare(
        `INSERT INTO "SearchHistory" ("id","userId","query") VALUES ('s1','legacy-3','ssri')`
      )
      .run();
    sqlite.close();
  }

  test("7. the documented upgrade path preserves data and completes the schema", async () => {
    const dbPath = resolve(process.cwd(), "db/legacy-fixture.db");
    createLegacyFixture(dbPath);
    const fixtureUrl = `file:${dbPath}`;
    const { PrismaClient } = require("@prisma/client");

    try {
      // ── The documented legacy path, in order ──
      execSync("bun scripts/prepare-database.ts", {
        cwd: process.cwd(),
        env: { ...process.env, DATABASE_URL: fixtureUrl },
        stdio: "pipe",
      });
      execSync("bunx prisma migrate resolve --applied 20260922000000_init", {
        cwd: process.cwd(),
        env: { ...process.env, DATABASE_URL: fixtureUrl },
        stdio: "pipe",
      });
      execSync("bunx prisma migrate deploy", {
        cwd: process.cwd(),
        env: { ...process.env, DATABASE_URL: fixtureUrl },
        stdio: "pipe",
      });

      const legacy = new PrismaClient({
        datasources: { db: { url: fixtureUrl } },
      });
      try {
        // Data preserved — all rows survive the upgrade.
        expect(await legacy.user.count()).toBe(3);
        expect(await legacy.progress.count()).toBe(1);
        expect(await legacy.bookmark.count()).toBe(1);
        expect(await legacy.searchHistory.count()).toBe(1);

        // Roles normalised to the authorization vocabulary; learner
        // values preserved in learnerType.
        const roles = await legacy.user.groupBy({ by: ["role"], _count: { _all: true } });
        expect(roles).toEqual([{ role: "admin", _count: { _all: 1 } }, { role: "user", _count: { _all: 2 } }]);
        // learnerType: backfilled from the legacy learner-vocabulary roles;
        // the admin user keeps the column default ('student') because
        // "admin" belongs to the authorization vocabulary.
        const types = (await legacy.user.groupBy({ by: ["learnerType"], _count: { _all: true } })).sort(
          (a: { learnerType: string }, b: { learnerType: string }) =>
            a.learnerType.localeCompare(b.learnerType)
        );
        expect(types).toEqual([
          { learnerType: "mbbs_student", _count: { _all: 1 } },
          { learnerType: "medical_student", _count: { _all: 1 } },
          { learnerType: "student", _count: { _all: 1 } },
        ]);

        // Security-era tables exist and serve the current application.
        const session = await legacy.session.create({
          data: {
            tokenHash: "legacy-upgrade-probe",
            userId: "legacy-1",
            expiresAt: new Date(Date.now() + 60_000),
          },
        });
        const resolved = await legacy.session.findUnique({
          where: { tokenHash: "legacy-upgrade-probe" },
          include: { user: true },
        });
        expect(resolved?.user.id).toBe("legacy-1");
        await legacy.session.delete({ where: { id: session.id } });
        const attempt = await legacy.loginAttempt.create({
          data: { identifierHash: "probe-id", sourceHash: "probe-src" },
        });
        expect(attempt.failureCount).toBe(0);
        await legacy.loginAttempt.delete({ where: { id: attempt.id } });
        await legacy.passwordResetToken.create({
          data: {
            tokenHash: "probe-reset",
            userId: "legacy-1",
            expiresAt: new Date(Date.now() + 60_000),
          },
        });
        await legacy.passwordResetToken.deleteMany({ where: { tokenHash: "probe-reset" } });

        // Migration history baselined: deploy again is a no-op.
        const secondDeploy = execSync("bunx prisma migrate deploy", {
          cwd: process.cwd(),
          env: { ...process.env, DATABASE_URL: fixtureUrl },
          stdio: "pipe",
        }).toString();
        expect(secondDeploy).toContain("No pending migrations");

        // Re-running the whole path changes no data (idempotence).
        execSync("bun scripts/prepare-database.ts", {
          cwd: process.cwd(),
          env: { ...process.env, DATABASE_URL: fixtureUrl },
          stdio: "pipe",
        });
        expect(await legacy.user.count()).toBe(3);
        expect(await legacy.progress.count()).toBe(1);
      } finally {
        await legacy.$disconnect();
      }
    } finally {
      rmSync(dbPath, { force: true });
      rmSync(dbPath + "-journal", { force: true });
    }
  }, 60000);
});
