/**
 * KYP OSV dependency audit — queries the OSV API (api.osv.dev) for advisories
 * against the ACTUAL INSTALLED versions of:
 *   1. direct runtime dependencies (package.json "dependencies")
 *   2. direct dev dependencies (package.json "devDependencies")
 *
 * Reports separately:
 *   - direct runtime advisories (target: 0)
 *   - direct dev/build advisories
 * Transitive advisories are NOT scanned by this script; any transitive
 * dev/build-only exposure is documented separately if relevant.
 *
 * Usage: bun scripts/osv-audit.ts
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";

const ROOT = resolve(dirname(process.argv[1] ?? "."), "..");
const pkg = JSON.parse(readFileSync(resolve(ROOT, "package.json"), "utf8"));

interface InstalledVersion {
  name: string;
  version: string;
  kind: "runtime" | "dev";
}

function installedVersion(name: string): string | null {
  const manifest = resolve(ROOT, "node_modules", name, "package.json");
  if (!existsSync(manifest)) return null;
  try {
    return JSON.parse(readFileSync(manifest, "utf8")).version ?? null;
  } catch {
    return null;
  }
}

const deps: InstalledVersion[] = [];
for (const name of Object.keys(pkg.dependencies ?? {})) {
  const v = installedVersion(name);
  if (v) deps.push({ name, version: v, kind: "runtime" });
  else console.warn(`WARN: runtime dep not installed: ${name}`);
}
for (const name of Object.keys(pkg.devDependencies ?? {})) {
  const v = installedVersion(name);
  if (v) deps.push({ name, version: v, kind: "dev" });
  else console.warn(`WARN: dev dep not installed: ${name}`);
}

console.log(
  `Auditing ${deps.length} direct dependencies (${deps.filter((d) => d.kind === "runtime").length} runtime, ${deps.filter((d) => d.kind === "dev").length} dev) against OSV...`
);

// OSV querybatch — batches of 100
async function queryOsv(
  batch: InstalledVersion[]
): Promise<Record<string, { id: string; aliases: string[]; }[]>> {
  const queries = batch.map((d) => ({
    package: { name: d.name, ecosystem: "npm" },
    version: d.version,
  }));
  const res = await fetch("https://api.osv.dev/v1/querybatch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ queries }),
  });
  if (!res.ok) throw new Error(`OSV API error: ${res.status}`);
  const data = (await res.json()) as {
    results: { vulns?: { id: string; aliases?: string[] }[] }[];
  };
  const out: Record<string, { id: string; aliases: string[] }[]> = {};
  batch.forEach((d, i) => {
    out[`${d.name}@${d.version}`] =
      data.results[i]?.vulns?.map((v) => ({
        id: v.id,
        aliases: v.aliases ?? [],
      })) ?? [];
  });
  return out;
}

async function main() {
  const runtime = deps.filter((d) => d.kind === "runtime");
  const dev = deps.filter((d) => d.kind === "dev");
  const results: Record<string, { id: string; aliases: string[] }[]> = {};
  for (const chunk of [runtime, dev]) {
    for (let i = 0; i < chunk.length; i += 100) {
      const part = await queryOsv(chunk.slice(i, i + 100));
      Object.assign(results, part);
    }
  }

  const runtimeHits: string[] = [];
  const devHits: string[] = [];
  for (const [key, vulns] of Object.entries(results)) {
    if (vulns.length === 0) continue;
    const ids = vulns.map((v) => v.id).join(", ");
    const isRuntime = runtime.some(
      (d) => `${d.name}@${d.version}` === key
    );
    (isRuntime ? runtimeHits : devHits).push(`${key}: ${ids}`);
  }

  console.log("\n── Direct RUNTIME dependency advisories ──");
  if (runtimeHits.length === 0) console.log("NONE — 0 direct runtime advisories");
  else for (const h of runtimeHits) console.log(`  ${h}`);

  console.log("\n── Direct DEV/BUILD dependency advisories ──");
  if (devHits.length === 0) console.log("NONE — 0 direct dev advisories");
  else for (const h of devHits) console.log(`  ${h}`);

  console.log(
    `\nOSV AUDIT RESULT: ${runtimeHits.length} direct runtime advisories, ${devHits.length} direct dev advisories (transitive not scanned by this script)`
  );
  process.exit(runtimeHits.length > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error("OSV audit failed:", e);
  process.exit(2);
});
