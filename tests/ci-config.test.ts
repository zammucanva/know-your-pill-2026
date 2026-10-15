import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "fs";

/**
 * The CI workflow is configuration that decides whether the database tests mean anything. These checks are local and
 * static: they say the workflow is written the way the docs and the test harness expect. They are NOT a hosted CI run.
 */
const read = (p: string) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const ci = read(".github/workflows/ci.yml");
const workflows = readdirSync(".github/workflows").filter((f) => /\.ya?ml$/.test(f)).map((f) => [f, read(`.github/workflows/${f}`)] as const);
const pkg = JSON.parse(read("package.json")) as { scripts: Record<string, string> };

describe("CI configuration is pinned, isolated and matches the documented checks", () => {
  test("every third-party action is pinned to a full commit SHA with its version in a comment", () => {
    for (const [f, text] of workflows) {
      const uses = [...text.matchAll(/uses:\s*(\S+)(.*)/g)];
      expect(uses.length).toBeGreaterThan(0);
      for (const m of uses) {
        expect(m[1], `${f}: ${m[1]}`).toMatch(/^[\w.-]+\/[\w.-]+@[0-9a-f]{40}$/);
        expect(m[2], `${f}: ${m[1]} version comment`).toMatch(/#\s*v\d+\.\d+\.\d+/);
      }
    }
  });
  test("the database service is an exact PostgreSQL version with a digest, on localhost, with a test-named database", () => {
    expect(ci).toMatch(/image:\s*postgres:\d+\.\d+@sha256:[0-9a-f]{64}/);
    expect(ci).toMatch(/POSTGRES_DB:\s*\w*test\w*/);
    for (const m of ci.matchAll(/(?:DATABASE_URL|DIRECT_URL):\s*(\S+)/g)) expect(m[1]).toMatch(/^postgresql:\/\/postgres:postgres@127\.0\.0\.1:5432\/\w*test\w*$/);
    expect(ci).toMatch(/pg_isready/);
  });
  test("the workflow has least-privilege permissions and no secret references", () => {
    expect(ci).toMatch(/^permissions:\n\s+contents: read/m);
    expect(ci).not.toMatch(/\$\{\{\s*secrets\./);
  });
  test("it runs, in order: install, typecheck, content lock, dash lint, four-mode audit, build, then the tests", () => {
    const order = ["bun install --frozen-lockfile", "bun run typecheck", "bun run test:content-lock", "bun run lint:dashes", "bun run audit:four-mode", "bun run build", "bun test tests/"].map((s) => ci.indexOf(s));
    expect(order.every((i) => i >= 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
  });
  test("every 'bun run X' in the workflow is a real package script", () => {
    for (const m of ci.matchAll(/bun run ([\w:-]+)/g)) expect(Object.keys(pkg.scripts)).toContain(m[1]);
  });
  test("the bun version in CI and deploy is the one the project was verified with", () => {
    for (const [, text] of workflows) for (const m of text.matchAll(/bun-version:\s*"?([\d.]+)"?/g)) expect(m[1]).toBe("1.3.4");
  });
  test("the documented PostgreSQL version and the workflow agree", () => {
    const wf = /image:\s*postgres:(\d+\.\d+)@/.exec(ci)![1];
    expect(read("docs/release-candidate.md")).toContain(`postgres:${wf}`);
  });
  test("the harness default and the workflow use the same local test database name", () => {
    const h = read("tests/helpers/server.ts");
    const hv = /DEFAULT_TEST_DB_URL = "([^"]+)"/.exec(h)![1];
    const cv = /DATABASE_URL:\s*(\S+)/.exec(ci)![1];
    expect(hv).toBe(cv);
  });
  test("a missing database fails loudly and is never skipped or counted as a pass", () => {
    const h = read("tests/helpers/server.ts");
    expect(h).toContain("TEST PREREQUISITE MISSING");
    expect(h).toMatch(/throw new Error\(\s*`TEST PREREQUISITE MISSING/);
    for (const f of readdirSync("tests").filter((x) => x.endsWith(".ts"))) {
      const t = read(`tests/${f}`);
      if (/helpers\/server/.test(t)) expect(t, f).not.toMatch(/\b(?:test|describe|it)\.(?:skip|skipIf|todo)\b/);
    }
  });
});

describe("the build script is portable", () => {
  test("it uses no shell cp, so `bun run build` works on Windows as well as in CI", () => {
    expect(pkg.scripts.build).toBe("next build --webpack && node scripts/copy-standalone-assets.mjs");
    expect(pkg.scripts.build).not.toMatch(/\bcp\b/);
    const script = read("scripts/copy-standalone-assets.mjs");
    expect(script).toContain("cpSync(\".next/static\", \".next/standalone/.next/static\"");
    expect(script).toContain("cpSync(\"public\", \".next/standalone/public\"");
  });
});
