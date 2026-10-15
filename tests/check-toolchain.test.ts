import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { drift, pinnedVersions } from "../scripts/check-toolchain";

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
  test("the real lockfile pins the lint tooling the check looks for", () => {
    const pins = pinnedVersions(readFileSync("bun.lock", "utf8"), ["eslint", "eslint-plugin-react-hooks", "eslint-config-next", "typescript"]);
    for (const v of Object.values(pins)) expect(v).toMatch(/^\d+\.\d+\.\d+/);
  });
});
