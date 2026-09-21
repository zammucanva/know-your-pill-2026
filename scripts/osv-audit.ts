/**
 * KYP OSV dependency audit.
 *
 * Scans exact versions installed in node_modules and builds dependency reachability
 * from package.json runtime/dev roots. This distinguishes production-reachable
 * transitive dependencies from build/test tooling instead of treating every
 * installed package as runtime.
 *
 * Usage: bun scripts/osv-audit.ts
 */
import { existsSync, readdirSync, readFileSync } from "fs";
import { dirname, join, resolve } from "path";

const ROOT = resolve(dirname(process.argv[1] ?? "."), "..");
const NODE_MODULES = resolve(ROOT, "node_modules");
const pkg = JSON.parse(readFileSync(resolve(ROOT, "package.json"), "utf8")) as {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
};

interface PackageManifest {
  name?: string;
  version?: string;
  dependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

interface InstalledPackage {
  key: string;
  name: string;
  version: string;
  manifestPath: string;
  directKind: "runtime" | "dev" | "transitive-runtime" | "transitive-dev" | "unclassified";
  sources: Set<"runtime" | "dev">;
}

function readManifest(path: string): PackageManifest | null {
  try {
    return JSON.parse(readFileSync(path, "utf8")) as PackageManifest;
  } catch {
    return null;
  }
}

function addInstalled(
  path: string,
  kind: InstalledPackage["directKind"],
  out: Map<string, InstalledPackage>
): InstalledPackage | null {
  const manifest = readManifest(path);
  if (!manifest?.name || !manifest.version) return null;
  const key = `${manifest.name}@${manifest.version}`;
  const existing = out.get(key);
  if (existing) return existing;

  const directRuntime =
    Object.prototype.hasOwnProperty.call(pkg.dependencies ?? {}, manifest.name) ||
    Object.prototype.hasOwnProperty.call(pkg.optionalDependencies ?? {}, manifest.name);
  const directDev = Object.prototype.hasOwnProperty.call(pkg.devDependencies ?? {}, manifest.name);

  const record: InstalledPackage = {
    key,
    name: manifest.name,
    version: manifest.version,
    manifestPath: path,
    directKind: directRuntime ? "runtime" : directDev ? "dev" : kind,
    sources: new Set(),
  };
  out.set(key, record);
  return record;
}

function collectInstalledPackages(dir: string, out: Map<string, InstalledPackage>): void {
  if (!existsSync(dir)) return;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === ".bin") continue;

    if (entry.name.startsWith("@")) {
      collectScope(join(dir, entry.name), out);
      continue;
    }

    const packageDir = join(dir, entry.name);
    const manifestPath = join(packageDir, "package.json");
    if (existsSync(manifestPath)) addInstalled(manifestPath, "unclassified", out);

    const nested = join(packageDir, "node_modules");
    if (existsSync(nested)) collectInstalledPackages(nested, out);
  }
}

function collectScope(scopeDir: string, out: Map<string, InstalledPackage>): void {
  if (!existsSync(scopeDir)) return;
  for (const entry of readdirSync(scopeDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const packageDir = join(scopeDir, entry.name);
    const manifestPath = join(packageDir, "package.json");
    if (existsSync(manifestPath)) addInstalled(manifestPath, "unclassified", out);

    const nested = join(packageDir, "node_modules");
    if (existsSync(nested)) collectInstalledPackages(nested, out);
  }
}

function resolveDependencyManifest(fromManifestPath: string, dependencyName: string): string | null {
  let current = dirname(fromManifestPath);
  while (current.startsWith(ROOT)) {
    const candidate = join(current, "node_modules", dependencyName, "package.json");
    if (existsSync(candidate)) return candidate;
    if (current === ROOT) break;
    current = dirname(current);
  }

  const fallback = join(NODE_MODULES, dependencyName, "package.json");
  return existsSync(fallback) ? fallback : null;
}

function dependencyNames(manifest: PackageManifest): string[] {
  return [
    ...Object.keys(manifest.dependencies ?? {}),
    ...Object.keys(manifest.optionalDependencies ?? {}),
    ...Object.keys(manifest.peerDependencies ?? {}),
  ];
}

function markReachable(
  roots: string[],
  source: "runtime" | "dev",
  installed: Map<string, InstalledPackage>
): void {
  const queue: string[] = [];
  const seenManifests = new Set<string>();

  for (const root of roots) {
    const manifestPath = resolveDependencyManifest(join(ROOT, "package.json"), root);
    if (manifestPath) queue.push(manifestPath);
    else console.warn(`WARN: ${source} dependency not installed: ${root}`);
  }

  while (queue.length) {
    const manifestPath = queue.shift()!;
    if (seenManifests.has(manifestPath)) continue;
    seenManifests.add(manifestPath);

    const manifest = readManifest(manifestPath);
    if (!manifest?.name || !manifest.version) continue;

    const key = `${manifest.name}@${manifest.version}`;
    const item = installed.get(key);
    if (item) item.sources.add(source);

    for (const dependency of dependencyNames(manifest)) {
      const next = resolveDependencyManifest(manifestPath, dependency);
      if (next) queue.push(next);
    }
  }
}

interface OsvVuln {
  id: string;
  aliases?: string[];
}

async function queryOsv(batch: InstalledPackage[]): Promise<Map<string, OsvVuln[]>> {
  const response = await fetch("https://api.osv.dev/v1/querybatch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      queries: batch.map((item) => ({
        package: { name: item.name, ecosystem: "npm" },
        version: item.version,
      })),
    }),
  });

  if (!response.ok) throw new Error(`OSV API error: ${response.status}`);

  const data = (await response.json()) as {
    results?: { vulns?: OsvVuln[] }[];
  };

  const results = new Map<string, OsvVuln[]>();
  batch.forEach((item, index) => {
    results.set(item.key, data.results?.[index]?.vulns ?? []);
  });
  return results;
}

async function main() {
  const installed = new Map<string, InstalledPackage>();
  collectInstalledPackages(NODE_MODULES, installed);

  const runtimeRoots = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.optionalDependencies ?? {}),
  ];
  const devRoots = Object.keys(pkg.devDependencies ?? {});

  markReachable(runtimeRoots, "runtime", installed);
  markReachable(devRoots, "dev", installed);

  for (const item of installed.values()) {
    if (item.sources.has("runtime")) {
      item.directKind =
        Object.prototype.hasOwnProperty.call(pkg.dependencies ?? {}, item.name) ||
        Object.prototype.hasOwnProperty.call(pkg.optionalDependencies ?? {}, item.name)
          ? "runtime"
          : "transitive-runtime";
    } else if (item.sources.has("dev")) {
      item.directKind =
        Object.prototype.hasOwnProperty.call(pkg.devDependencies ?? {}, item.name)
          ? "dev"
          : "transitive-dev";
    }
  }

  const packages = [...installed.values()].sort((a, b) => a.key.localeCompare(b.key));
  if (packages.length === 0) {
    throw new Error("node_modules is empty or unavailable; refusing to claim a clean audit");
  }

  console.log(
    `Auditing ${packages.length} installed dependency versions ` +
      `(${packages.filter((p) => p.directKind === "runtime" || p.directKind === "transitive-runtime").length} production-reachable, ` +
      `${packages.filter((p) => p.directKind === "dev" || p.directKind === "transitive-dev").length} development-reachable, ` +
      `${packages.filter((p) => p.directKind === "unclassified").length} unclassified)...`
  );

  const results = new Map<string, OsvVuln[]>();
  for (let i = 0; i < packages.length; i += 100) {
    const part = await queryOsv(packages.slice(i, i + 100));
    for (const [key, vulns] of part) results.set(key, vulns);
  }

  const vulnerable = packages.flatMap((item) =>
    (results.get(item.key) ?? []).map((vuln) => ({
      key: item.key,
      kind: item.directKind,
      id: vuln.id,
      aliases: vuln.aliases ?? [],
    }))
  );

  const productionHits = vulnerable.filter(
    (item) => item.kind === "runtime" || item.kind === "transitive-runtime"
  );
  const developmentHits = vulnerable.filter(
    (item) => item.kind === "dev" || item.kind === "transitive-dev"
  );
  const unclassifiedHits = vulnerable.filter((item) => item.kind === "unclassified");

  console.log("\n── Production-reachable advisories ──");
  if (!productionHits.length) console.log("NONE — 0 production-reachable advisories");
  else for (const item of productionHits) console.log(`  ${item.key} → ${item.id}`);

  console.log("\n── Development-reachable advisories ──");
  if (!developmentHits.length) console.log("NONE — 0 development advisories");
  else for (const item of developmentHits) console.log(`  ${item.key} → ${item.id}`);

  console.log("\n── Unclassified installed advisories ──");
  if (!unclassifiedHits.length) console.log("NONE — 0 unclassified advisories");
  else for (const item of unclassifiedHits) console.log(`  ${item.key} → ${item.id}`);

  console.log(
    `\nOSV AUDIT RESULT: ${productionHits.length} production, ${developmentHits.length} development, ${unclassifiedHits.length} unclassified advisories`
  );

  // CI blocks on production-reachable vulnerabilities. Development advisories
  // remain visible so they can be triaged without making build tooling an
  // accidental production blocker.
  process.exit(productionHits.length > 0 || unclassifiedHits.length > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(
    "OSV audit failed:",
    error instanceof Error ? error.name : "UnknownError"
  );
  process.exit(2);
});
