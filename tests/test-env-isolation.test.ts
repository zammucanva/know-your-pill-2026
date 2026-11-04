import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

/**
 * Bun loads .env.local automatically, and that file holds the production database settings. A test that touches the
 * database must therefore go through tests/helpers/server.ts, which overrides both connection variables with a local
 * test database BEFORE any Prisma client exists and refuses anything that is not local and named like a test database.
 */
const TESTS = "tests";
const files = readdirSync(TESTS).filter((f) => f.endsWith(".ts")).map((f) => [f, readFileSync(join(TESTS, f), "utf8")] as const);

describe("tests cannot reach the production database by accident", () => {
  test("every test file that touches Prisma or the app's database module imports the guarded harness", () => {
    const offenders: string[] = [];
    for (const [f, text] of files) {
      if (f === "test-env-isolation.test.ts") continue;
      const usesDb = /(?:from|import|require\()\s*["']@prisma\/client["']|from ["']@\/lib\/db|["']@\/lib\/prisma|new PrismaClient|\bprisma\.(?:user|session|\$)/.test(text);
      const guarded = /from ["'](?:\.\/)?helpers\/server["']|import\(["']\.\/helpers\/server["']\)/.test(text);
      if (usesDb && !guarded) offenders.push(f);
    }
    expect(offenders).toEqual([]);
  });
  test("no test reads .env.local or a production connection variable directly", () => {
    const offenders: string[] = [];
    for (const [f, text] of files) {
      if (["test-env-isolation.test.ts", "no-secrets.test.ts", "test-db-guard.test.ts"].includes(f)) continue; // the guards themselves read these names to assert on them
      if (/\.env\.local|process\.env\.(?:DIRECT_URL|DATABASE_URL)\b(?!\s*=)/.test(text.replace(/process\.env\.(?:DIRECT_URL|DATABASE_URL)\s*=/g, ""))) offenders.push(f);
    }
    expect(offenders).toEqual([]);
  });
  test("the harness never falls back to the process environment's database URL", () => {
    const h = readFileSync("tests/helpers/server.ts", "utf8");
    expect(h).toContain("process.env.KYP_TEST_DATABASE_URL ?? DEFAULT_TEST_DB_URL");
    expect(h).toContain("assertDisposableTestDatabase(TEST_DB_URL)");
    expect(h).not.toMatch(/TEST_DB_URL\s*=\s*process\.env\.(DATABASE_URL|DIRECT_URL)/);
    expect(h).toMatch(/process\.env\.DATABASE_URL = TEST_DB_URL/);
    expect(h).toMatch(/process\.env\.DIRECT_URL = TEST_DB_URL/);
  });
  test("the CI workflow's database settings are local test values only", () => {
    const ci = readFileSync(".github/workflows/ci.yml", "utf8");
    for (const m of ci.matchAll(/(?:DATABASE_URL|DIRECT_URL):\s*(\S+)/g)) expect(m[1]).toMatch(/@(?:127\.0\.0\.1|localhost):5432\/\w*test\w*$/);
  });
});

describe("the harness cannot test a stale or foreign server", () => {
  test("it refuses a busy test port with an explicit message and never kills processes by name", () => {
    const h = readFileSync("tests/helpers/server.ts", "utf8");
    expect(h).toContain("await assertPortFree(TEST_PORT)");
    expect(h).toMatch(/port \$\{port\} is already in use/);
    expect(h).not.toMatch(/pkill|taskkill|killall/);
  });
});
