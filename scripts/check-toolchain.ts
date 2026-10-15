/**
 * Compares the versions of the lint/type/test tooling installed in node_modules with the versions bun.lock pins.
 * CI installs from the frozen lockfile, so CI always matches. A local node_modules that has drifted can give different
 * lint results (for example a newer eslint-plugin-react-hooks adds errors the pinned one does not).
 *
 *   bun scripts/check-toolchain.ts        exit 1 and the fix when something has drifted
 */
import { existsSync, readFileSync } from "fs";

export const TOOLS = ["eslint", "eslint-plugin-react-hooks", "eslint-config-next", "@next/eslint-plugin-next", "typescript", "typescript-eslint", "next", "prisma", "@prisma/client", "bun-types"];

export function pinnedVersions(lockText: string, names: readonly string[]): Record<string, string | null> {
  const out: Record<string, string | null> = {};
  for (const n of names) {
    // bun.lock lists a package as:  "name": ["name@1.2.3", ...
    const key = '"' + n + '": ["' + n + '@';
    const at = lockText.indexOf(key);
    out[n] = at < 0 ? null : lockText.slice(at + key.length, lockText.indexOf('"', at + key.length));
  }
  return out;
}

export function drift(lockText: string, installed: (name: string) => string | null, names: readonly string[] = TOOLS) {
  const pins = pinnedVersions(lockText, names);
  return names.flatMap((n) => (pins[n] && installed(n) !== pins[n] ? [{ name: n, pinned: pins[n]!, installed: installed(n) }] : []));
}

if (import.meta.main) {
  const installed = (n: string) => (existsSync(`node_modules/${n}/package.json`) ? (JSON.parse(readFileSync(`node_modules/${n}/package.json`, "utf8")).version as string) : null);
  const d = drift(readFileSync("bun.lock", "utf8"), installed);
  if (!d.length) console.log("Tooling in node_modules matches bun.lock.");
  else {
    console.error("node_modules differs from bun.lock (results may differ from CI):");
    for (const x of d) console.error(`  ${x.name}: lockfile ${x.pinned}, installed ${x.installed ?? "missing"}`);
    console.error("Fix: bun install --frozen-lockfile");
    process.exit(1);
  }
}
