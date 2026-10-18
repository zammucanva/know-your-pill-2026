/**
 * Is this machine's toolchain the one CI uses? It compares, without reading any secret or environment file:
 *   - every direct dependency in package.json: the version installed in node_modules against the version bun.lock pins;
 *   - the Bun runtime version against the `bun-version` the CI workflows pin;
 *   - the Node major version against Next.js's minimum (20).
 * CI installs from the frozen lockfile, so CI always matches. A local node_modules that has drifted can give different
 * lint results (for example a newer eslint-plugin-react-hooks adds errors the pinned one does not).
 * package-lock.json is also tracked but is not what CI installs from; bun.lock is authoritative.
 *
 *   bun scripts/check-toolchain.ts        exit 1, with the fix, when anything differs
 */
import { existsSync, readFileSync, readdirSync } from "fs";

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

export function drift(lockText: string, installed: (name: string) => string | null, names: readonly string[]) {
  const pins = pinnedVersions(lockText, names);
  return names.flatMap((n) => (pins[n] && installed(n) !== pins[n] ? [{ name: n, pinned: pins[n]!, installed: installed(n) }] : []));
}

/** The Bun versions the workflows pin (all must agree). */
export function workflowBunVersions(workflowTexts: readonly string[]): string[] {
  return [...new Set(workflowTexts.flatMap((t) => [...t.matchAll(/bun-version:\s*"?([\d.]+)"?/g)].map((m) => m[1])))];
}

export interface ToolchainReport {
  dependencyDrift: { name: string; pinned: string; installed: string | null }[];
  bun: { running: string; ci: string[]; ok: boolean };
  node: { running: string; ok: boolean };
}

export function checkToolchain(input: { packageJson: { dependencies?: Record<string, string>; devDependencies?: Record<string, string> }; lockText: string; workflowTexts: string[]; installed: (n: string) => string | null; bunVersion: string; nodeVersion: string }): ToolchainReport {
  const direct = [...Object.keys(input.packageJson.dependencies ?? {}), ...Object.keys(input.packageJson.devDependencies ?? {})];
  const ci = workflowBunVersions(input.workflowTexts);
  return {
    dependencyDrift: drift(input.lockText, input.installed, direct),
    bun: { running: input.bunVersion, ci, ok: ci.length === 1 && ci[0] === input.bunVersion },
    node: { running: input.nodeVersion, ok: Number(input.nodeVersion.replace(/^v/, "").split(".")[0]) >= 20 },
  };
}

if (import.meta.main) {
  const installed = (n: string) => (existsSync(`node_modules/${n}/package.json`) ? (JSON.parse(readFileSync(`node_modules/${n}/package.json`, "utf8")).version as string) : null);
  const workflows = readdirSync(".github/workflows").filter((f) => /\.ya?ml$/.test(f)).map((f) => readFileSync(`.github/workflows/${f}`, "utf8"));
  const r = checkToolchain({ packageJson: JSON.parse(readFileSync("package.json", "utf8")), lockText: readFileSync("bun.lock", "utf8"), workflowTexts: workflows, installed, bunVersion: Bun.version, nodeVersion: process.version });
  let bad = false;
  if (r.dependencyDrift.length) {
    bad = true;
    console.error("node_modules differs from bun.lock (results may differ from CI):");
    for (const x of r.dependencyDrift) console.error(`  ${x.name}: lockfile ${x.pinned}, installed ${x.installed ?? "missing"}`);
    console.error("  Fix: bun install --frozen-lockfile");
  }
  if (!r.bun.ok) {
    bad = true;
    console.error(`Bun ${r.bun.running} is running; CI pins ${r.bun.ci.join(" / ") || "nothing"}. Use the pinned Bun version.`);
  }
  if (!r.node.ok) {
    bad = true;
    console.error(`Node ${r.node.running} is older than Next.js needs (20 or later).`);
  }
  if (bad) process.exit(1);
  console.log(`Toolchain matches CI: every direct dependency matches bun.lock, Bun ${r.bun.running}, Node ${r.node.running}.`);
}
