/**
 * KYP Medical Data Snapshot — proves the actual medical DATA VALUES are
 * unchanged independently of file bytes (file hashes can change due to
 * engineering-only type fixes while values stay identical).
 *
 * Serializes the imported data objects (drugs, diseases, substancePages,
 * searchIndex, categories) to canonical JSON and hashes them.
 *
 * Usage:
 *   bun scripts/medical-data-snapshot.ts --save <file>   save snapshot
 *   bun scripts/medical-data-snapshot.ts --check <file>  compare snapshot
 */

import { createHash } from "crypto";
import { writeFileSync, readFileSync } from "fs";

async function collect() {
  const { drugs } = await import("../src/lib/kyp/data/drugs/index");
  const { diseases } = await import("../src/lib/kyp/data/diseases/index");
  const { substancePages } = await import("../src/lib/kyp/data/substances/index");
  const { searchIndex } = await import("../src/lib/kyp/data/search-index");
  const { categories } = await import("../src/lib/kyp/data/medications");
  return { drugs, diseases, substancePages, searchIndex, categories };
}

function canonical(obj: unknown): string {
  // Deterministic serialization: sorted object keys, no whitespace.
  const seen = new WeakSet();
  const sort = (v: unknown): unknown => {
    if (v === null || typeof v !== "object") {
      // Functions (icon components etc.) are not medical data — represent
      // them by name only.
      if (typeof v === "function") {
        return { __fn: (v as { name?: string }).name ?? "anonymous" };
      }
      return v;
    }
    if (seen.has(v as object)) return { __circular: true };
    seen.add(v as object);
    if (Array.isArray(v)) return v.map(sort);
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as Record<string, unknown>).sort()) {
      out[k] = sort((v as Record<string, unknown>)[k]);
    }
    return out;
  };
  return JSON.stringify(sort(obj));
}

async function main() {
  const mode = process.argv[2];
  const path = process.argv[3];
  if ((mode !== "--save" && mode !== "--check") || !path) {
    console.error("Usage: bun scripts/medical-data-snapshot.ts --save|--check <file>");
    process.exit(2);
  }
  const data = await collect();
  const hashes: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    hashes[key] = createHash("sha256").update(canonical(value)).digest("hex");
  }
  const summary = {
    counts: {
      drugs: data.drugs.length,
      diseases: data.diseases.length,
      substancePages: data.substancePages.length,
      searchIndex: data.searchIndex.length,
      categories: data.categories.length,
    },
    hashes,
  };

  if (mode === "--save") {
    writeFileSync(path, JSON.stringify(summary, null, 2) + "\n");
    console.log("Medical data snapshot saved:", path);
    console.log(JSON.stringify(summary.counts));
    for (const [k, h] of Object.entries(hashes)) console.log(`  ${k}: ${h.slice(0, 16)}...`);
    process.exit(0);
  }

  const prev = JSON.parse(readFileSync(path, "utf8"));
  let ok = true;
  for (const [k, h] of Object.entries(prev.hashes)) {
    if (hashes[k] !== h) {
      console.error(`MEDICAL DATA CHANGED: ${k}`);
      ok = false;
    }
  }
  for (const [k, h] of Object.entries(hashes)) {
    if (!(k in prev.hashes)) {
      console.error(`NEW DATA KEY: ${k}`);
      ok = false;
    }
  }
  if (JSON.stringify(prev.counts) !== JSON.stringify(summary.counts)) {
    console.error("COUNTS CHANGED");
    ok = false;
  }
  console.log(ok ? "MEDICAL DATA: UNCHANGED (all object hashes identical)" : "MEDICAL DATA: MISMATCH");
  process.exit(ok ? 0 : 1);
}

main();
