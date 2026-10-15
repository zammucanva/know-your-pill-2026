import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "fs";
import { checkToolchain, drift, pinnedVersions, workflowBunVersions } from "../scripts/check-toolchain";

describe("toolchain drift check", () => {
  const lock = `"eslint": ["eslint@9.39.2", "", {}], "eslint-plugin-react-hooks": ["eslint-plugin-react-hooks@7.0.1", "", {}], "@prisma/client": ["@prisma/client@6.19.2", "", {}]`;
  test("it reads pinned versions, including scoped packages", () => {
    expect(pinnedVersions(lock, ["eslint", "eslint-plugin-react-hooks", "@prisma/client", "missing"])).toEqual({ eslint: "9.39.2", "eslint-plugin-react-hooks": "7.0.1", "@prisma/client": "6.19.2", missing: null });
  });
  test("it reports a drifted or missing package and ignores matching ones", () => {
    const inst: Record<string, string> = { eslint: "9.39.2", "eslint-plugin-react-hooks": "7.1.1" };
    expect(drift(lock, (n) => inst[n] ?? null, ["eslint", "eslint-plugin-react-hooks", "@prisma/client"])).toEqual([
      { name: "eslint-plugin-react-hooks", pinned: "7.0.1", installed: "7.1.1" },
      { name: "@prisma/client", pinned: "6.19.2", installed: null },
    ]);
  });
  test("every direct dependency is checked, and Bun and Node versions are compared with what CI pins", () => {
    const r = checkToolchain({
      packageJson: { dependencies: { "@prisma/client": "^6" }, devDependencies: { eslint: "^9" } },
      lockText: lock,
      workflowTexts: ["bun-version: 1.3.4", 'bun-version: "1.3.4"'],
      installed: (n) => ({ eslint: "9.39.2", "@prisma/client": "6.19.2" })[n] ?? null,
      bunVersion: "1.3.5",
      nodeVersion: "v18.20.0",
    });
    expect(r.dependencyDrift).toEqual([]);
    expect(r.bun).toEqual({ running: "1.3.5", ci: ["1.3.4"], ok: false });
    expect(r.node.ok).toBe(false);
  });
  test("two workflows pinning different Bun versions is itself a failure", () => {
    expect(workflowBunVersions(["bun-version: 1.3.4", "bun-version: 1.3.5"]).length).toBe(2);
  });
  test("the real repository: workflows agree on one Bun version, and the lockfile pins every direct dependency", () => {
    const wf = readdirSync(".github/workflows").filter((f) => /\.ya?ml$/.test(f)).map((f) => readFileSync(`.github/workflows/${f}`, "utf8"));
    expect(workflowBunVersions(wf)).toEqual(["1.3.4"]);
    const pkg = JSON.parse(readFileSync("package.json", "utf8")) as { dependencies: Record<string, string>; devDependencies: Record<string, string> };
    const names = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)];
    const pins = pinnedVersions(readFileSync("bun.lock", "utf8"), names);
    expect(names.filter((n) => !pins[n])).toEqual([]);
  });
  test("the script reads no environment or secret file", () => {
    const s = readFileSync("scripts/check-toolchain.ts", "utf8");
    expect(s).not.toMatch(/\.env|process\.env|DATABASE_URL|DIRECT_URL/);
  });
});

describe("package-manager configuration names one authority", () => {
  test("package.json declares the same Bun version the workflows pin, and CI installs from the frozen bun.lock", () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8")) as { packageManager?: string };
    expect(pkg.packageManager).toBe("bun@1.3.4");
    for (const f of readdirSync(".github/workflows").filter((x) => /\.ya?ml$/.test(x))) {
      const t = readFileSync(`.github/workflows/${f}`, "utf8");
      if (/bun install/.test(t)) expect(t).toContain("bun install --frozen-lockfile");
      expect(t).not.toMatch(/\bnpm (install|ci)\b/);
    }
  });
  test("the release procedure installs from the frozen lockfile and runs the toolchain check", () => {
    const d = readFileSync("docs/release-candidate.md", "utf8");
    expect(d).toContain("bun install --frozen-lockfile");
    expect(d).toContain("bun scripts/check-toolchain.ts");
    expect(d).toMatch(/package-lock\.json[^.]*disagrees/);
  });
});
