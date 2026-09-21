/**
 * KYP OSV dependency audit.
 *
 * Queries OSV for the exact versions actually installed in node_modules,
 * covering BOTH direct and transitive dependencies. This is intentionally
 * broader than the package.json-only audit: a vulnerable transitive package
 * is still a supply-chain risk even when it is not a direct dependency.
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
};

interface InstalledPackage {
  name: string;
  version: string;
  directKind: "runtime" | "dev" | "transitive";
}

function readPackageManifest(path: string): { name?: string; version?: string } | null {
  try {
    return JSON.parse(readFileSync(path, "utf8")) as { name?: string; version?: string };
  } catch {
    return null;
  }
}

function collectFromNodeModules(dir: string, out: Map<string, InstalledPackage>): void {
  if (!existsSync(dir)) return;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === ".bin") continue;

    if (entry.name.startsWith("@")) {
      collectScope(join(dir, entry.name), out);
      continue;
    }

    const packageDir = join(dir, entry.name);
    const manifestPath = join(packageDir, "package.json");
    const manifest = existsSync(manifestPath) ? readPackageManifest(manifestPath) : null;

    if (manifest?.name && manifest.version) {
      const key = `${manifest.name}@${manifest.version}`;
      if (!out.has(key)) {
        out.set(key, {
          name: manifest.name,
          version: manifest.version,
          directKind:
            Object.prototype.hasOwnProperty.call(pkg.dependencies ?? {}, manifest.name)
              ? "runtime"
              : Object.prototype.hasOwnProperty.call(pkg.devDependencies ?? {}, manifest.name)
                ? "dev"
                : "transitive",
        });
      }
    }

    const nested = join(packageDir, "node_modules");
    if (existsSync(nested)) collectFromNodeModules(nested, out);
  }
}

function collectScope(scopeDir: string, out: Map<string, InstalledPackage>): void {
  if (!existsSync(scopeDir)) return;
  for (const entry of readdirSync(scopeDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const packageDir = join(scopeDir, entry.name);
    const manifestPath = join(packageDir, "package.json");
    const manifest = existsSync(manifestPath) ? readPackageManifest(manifestPath) : null;

    if (manifest?.name && manifest.version) {
      const key = `${manifest.name}@${manifest.version}`;
      if (!out.has(key)) {
        out.set(key, {
          name: manifest.name,
          version: manifest.version,
          directKind:
            Object.prototype.hasOwnProperty.call(pkg.dependencies ?? {}, manifest.name)
              ? "runtime"
              : Object.prototype.hasOwnProperty.call(pkg.devDependencies ?? {}, manifest.name)
                ? "dev"
                : "transitive",
        });
      }
    }

    const nested = join(packageDir, "node_modules");
    if (existsSync(nested)) collectFromNodeModules(nested, out);
  }
}

interface OsvVuln {
  id: string;
  aliases?: string[];
  severity?: { type: string; score?: string }[];
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
    results.set(`${item.name}@${item.version}`, data.results?.[index]?.vulns ?? []);
  });
  return results;
}

async function main() {
  const installed = new Map<string, InstalledPackage>();
  collectFromNodeModules(NODE_MODULES, installed);

  const packages = [...installed.values()].sort((a, b) =>
    `${a.name}@${a.version}`.localeCompare(`${b.name}@${b.version}`)
  );

  if (packages.length === 0) {
    throw new Error("node_modules is empty or unavailable; refusing to claim a clean audit");
  }

  console.log(
    `Auditing ${packages.length} installed dependency versions ` +
      `(${packages.filter((p) => p.directKind === "runtime").length} direct runtime, ` +
      `${packages.filter((p) => p.directKind === "dev").length} direct dev, ` +
      `${packages.filter((p) => p.directKind === "transitive").length} transitive)...`
  );

  const results = new Map<string, OsvVuln[]>();
  for (let i = 0; i < packages.length; i += 100) {
    const part = await queryOsv(packages.slice(i, i + 100));
    for (const [key, vulns] of part) results.set(key, vulns);
  }

  const vulnerable = packages.flatMap((item) => {
    const key = `${item.name}@${item.version}`;
    return (results.get(key) ?? []).map((v) => ({
      key,
      kind: item.directKind,
      id: v.id,
      aliases: v.aliases ?? [],
    }));
  });

  const counts = {
    runtime: vulnerable.filter((v) => v.kind === "runtime").length,
    dev: vulnerable.filter((v) => v.kind === "dev").length,
    transitive: vulnerable.filter((v) => v.kind === "transitive").length,
  };

  console.log("\n── Installed dependency advisories ──");
  if (vulnerable.length === 0) {
    console.log("NONE — 0 advisories across all installed direct/transitive packages");
  } else {
    for (const item of vulnerable) {
      const aliases = item.aliases.length ? ` [${item.aliases.join(", ")}]` : "";
      console.log(`  ${item.kind}: ${item.key} → ${item.id}${aliases}`);
    }
  }

  console.log(
    `\nOSV AUDIT RESULT: ${counts.runtime} direct runtime, ${counts.dev} direct dev, ${counts.transitive} transitive advisories`
  );

  process.exit(vulnerable.length > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(
    "OSV audit failed:",
    error instanceof Error ? error.name : "UnknownError"
  );
  process.exit(2);
});
