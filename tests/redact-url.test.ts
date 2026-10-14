import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { redactDatabaseUrl } from "@/lib/kyp/redact-url";

describe("diagnostics never echo a connection string with its credentials", () => {
  test("host, port and database stay; user, password and query are dropped", () => {
    const out = redactDatabaseUrl("postgresql://someuser:s3cr3t-Pa55word@db.example.com:5432/postgres?sslmode=require");
    expect(out).toBe("postgresql://db.example.com:5432/postgres (credentials hidden)");
    expect(out).not.toMatch(/someuser|s3cr3t|sslmode/);
  });
  test("encoded passwords, odd characters and unparseable input are never echoed", () => {
    expect(redactDatabaseUrl("postgres://u:%3Fabc-%40xyz@h:1/d")).not.toMatch(/abc|xyz|%3F|%40/);
    expect(redactDatabaseUrl("not a url with p@ssw0rd inside")).toBe("<unparseable database URL, hidden>");
    expect(redactDatabaseUrl(undefined)).toBe("<no database URL set>");
    expect(redactDatabaseUrl("file:/tmp/x.db?mode=ro")).toBe("file:/tmp/x.db");
  });
  test("scripts that mention a database URL in a message go through the redactor", () => {
    const s = readFileSync("scripts/create-password-reset.ts", "utf8");
    expect(s).toContain("redactDatabaseUrl(dbUrl)");
    expect(s).not.toMatch(/\$\{dbUrl\}/);
  });
});

import { redactSecretsInText } from "@/lib/kyp/redact-url";
describe("free text such as a thrown error never carries a credential", () => {
  test("connection URLs, key=value secrets, bearer tokens and JWTs are replaced", () => {
    const err = new Error("connect ECONNREFUSED postgresql://role:Pa55w0rd-value@db.example.com:5432/app?sslmode=require; password=hunter2-value; Authorization: Bearer abcdef0123456789abcdef; token: 'tok-12345678'; jwt eyJhbGciOiJIUzI1.eyJzdWIiOiIxMjM0NTY3.SflKxwRJSMeKKF2QT4fw");
    const out = redactSecretsInText(err.message);
    for (const secret of ["Pa55w0rd-value", "role:", "hunter2-value", "abcdef0123456789abcdef", "tok-12345678", "eyJhbGciOiJIUzI1", "SflKxwRJSMeKKF2QT4fw"]) expect(out).not.toContain(secret);
    expect(out).toContain("ECONNREFUSED");
    expect(out).toContain("<credentials hidden>");
  });
  test("URL-encoded and unusual credentials are covered, and ordinary text is left alone", () => {
    expect(redactSecretsInText("postgres://u:%3Fp%40ss@h:1/d failed")).not.toMatch(/%3F|%40|p%40ss/);
    expect(redactSecretsInText("The test database is local and named kyp_test.")).toBe("The test database is local and named kyp_test.");
    expect(redactSecretsInText("https://example.com/path")).toBe("https://example.com/path");
  });
  test("the test harness routes database-reset failures through the redactor", () => {
    const h = readFileSync("tests/helpers/server.ts", "utf8");
    expect(h).toContain("redactSecretsInText(");
    expect(h).toMatch(/Test database reset failed/);
  });
});
