import { describe, expect, test } from "bun:test";
import { execFileSync } from "child_process";
import { readFileSync } from "fs";

/**
 * A guard against committing credentials. It reads only files git tracks or would track (never .env.local, which is
 * ignored) and reports FILE NAMES and the pattern name, never the matched text.
 */
const list = (args: string[]) => execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).split("\n").filter(Boolean);
const files = [...new Set([...list(["ls-files"]), ...list(["ls-files", "--others", "--exclude-standard"])])].filter((f) => !/\.(png|jpe?g|webp|ico|woff2?|pdf|zip|lock|svg|mp4|gif)$/i.test(f));

const PATTERNS: Record<string, RegExp> = {
  "database URL with a password for a non-local host": /postgres(?:ql)?:\/\/[^:/\s'"]+:[^@\s'"]{4,}@(?!127\.0\.0\.1|localhost|\[::1\]|[^\s'"/]*\.?example\.(?:com|org|net)|h:1\/)[^\s'"/]+/,
  "JSON web token": /eyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{10,}/,
  "Google API key": /AIza[0-9A-Za-z_-]{35}/,
  "Stripe or GitHub token": /\b(?:sk_(?:live|test)_[0-9A-Za-z]{16,}|gh[pousr]_[0-9A-Za-z]{30,})/,
  "assigned long secret value": /(?:SERVICE_ROLE_KEY|SESSION_SECRET|OIDC_TOKEN|API_KEY|PASSWORD)\s*[=:]\s*["']?(?![^\s"']*(?:test-only|ci-only|-ci-|dummy|example|fake))[A-Za-z0-9+/_=-]{24,}/,
};

/** Names of the patterns a text matches. Only names are ever reported, never the matched text. */
const scan = (text: string): string[] => Object.entries(PATTERNS).filter(([, re]) => re.test(text)).map(([name]) => name);

describe("the scanner catches credential-shaped values (samples are assembled at run time so this file holds none)", () => {
  const j = (...p: string[]) => p.join("");
  test("it flags a remote database URL with a password, a JWT, a Google key and an assigned long secret", () => {
    expect(scan(j("postgresql://", "someone:", "Zq81-notARealPass", "@db.remote-host.net:5432/app"))).toContain("database URL with a password for a non-local host");
    expect(scan(j("eyJ", "hbGciOiJIUzI1NiIsInR5", ".", "eyJzdWIiOiIxMjM0NTY3ODkwIiwi", ".", "SflKxwRJSMeKKF2QT4fwpM"))).toContain("JSON web token");
    expect(scan(j("AI", "za", "Sy", "A".repeat(35)))).toContain("Google API key");
    expect(scan(j("SESSION_", "SECRET = ", "q".repeat(40)))).toContain("assigned long secret value");
  });
  test("it lets local test databases, example hosts and marked test fixtures through", () => {
    expect(scan("postgresql://postgres:postgres@127.0.0.1:5432/kyp_test")).toEqual([]);
    expect(scan(j("postgres://u:", "p4ssword", "@db.example.com/d"))).toEqual([]);
    expect(scan(j("SESSION_", "SECRET = ", "kyp-test-only-session-secret-", "0".repeat(30)))).toEqual([]);
  });
  test("a failing scan reports file names and pattern names only", () => {
    const body = readFileSync("tests/no-secrets.test.ts", "utf8");
    expect(body).toContain("hits.push(`${f}: ${name}`)");
    expect(body).not.toMatch(/hits\.push\([^)]*(?:match|\[0\])/);
  });
});

describe("no credentials in tracked or trackable files", () => {
  test("no file matches a secret pattern (fixed fixtures are marked test-only, ci-only, dummy, example or fake)", () => {
    const hits: string[] = [];
    for (const f of files) {
      let text = "";
      try {
        text = readFileSync(f, "utf8");
      } catch {
        continue;
      }
      for (const [name, re] of Object.entries(PATTERNS)) if (re.test(text)) hits.push(`${f}: ${name}`);
    }
    expect(hits).toEqual([]);
  });
  test("env files are ignored by git and none is tracked", () => {
    expect(list(["ls-files"]).filter((f) => /(^|\/)\.env(\.|$)/.test(f) && !/\.example$|\.sample$/.test(f))).toEqual([]);
    const ignored = execFileSync("git", ["check-ignore", ".env.local"], { encoding: "utf8" }).trim();
    expect(ignored).toBe(".env.local");
  });
  test("no PostgreSQL binaries, clusters or database archives are tracked", () => {
    const bad = list(["ls-files"]).filter((f) => /(^|\/)(pgdata|postgresql\.conf|pg_hba\.conf|PG_VERSION)$|\.(dump|sql\.gz|bak)$/i.test(f) || /\/pgsql\/bin\//.test(f));
    expect(bad).toEqual([]);
  });
});
