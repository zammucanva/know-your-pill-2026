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
