/**
 * TEST-DATABASE SAFETY GUARD
 *
 * The test run DROPS the public schema of its target database, and Bun
 * auto-loads .env.local (which holds the production DATABASE_URL and
 * DIRECT_URL). The harness must therefore be incapable of targeting
 * anything but a local, disposable "test" database.
 */

import { describe, expect, test } from "bun:test";
import { assertDisposableTestDatabase, TEST_DB_URL } from "./helpers/server";

describe("test database guard", () => {
  test("1. accepts local databases named like a test database", () => {
    expect(() =>
      assertDisposableTestDatabase("postgresql://postgres:postgres@127.0.0.1:5432/kyp_test")
    ).not.toThrow();
    expect(() =>
      assertDisposableTestDatabase("postgresql://u:p@localhost:54329/kyp_test_run")
    ).not.toThrow();
  });

  test("2. rejects remote hosts, even with a test-like database name", () => {
    expect(() =>
      assertDisposableTestDatabase(
        "postgresql://postgres:x@db.example.supabase.co:5432/test"
      )
    ).toThrow(/Refusing/);
    expect(() =>
      assertDisposableTestDatabase(
        "postgresql://u:p@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres_test"
      )
    ).toThrow(/Refusing/);
  });

  test("3. rejects local databases whose name does not say test", () => {
    expect(() =>
      assertDisposableTestDatabase("postgresql://postgres:postgres@127.0.0.1:5432/postgres")
    ).toThrow(/Refusing/);
  });

  test("4. rejects non-Postgres and malformed URLs", () => {
    expect(() => assertDisposableTestDatabase("file:./db/test.db")).toThrow();
    expect(() => assertDisposableTestDatabase("not a url")).toThrow();
  });

  test("5. the harness overrides both Prisma variables with the test URL", () => {
    expect(process.env.DATABASE_URL).toBe(TEST_DB_URL);
    expect(process.env.DIRECT_URL).toBe(TEST_DB_URL);
  });
});
