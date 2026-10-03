#!/usr/bin/env node
/**
 * KYP medical-content firewall proof — punctuation-only diff.
 *
 * Compares the imported DATA OBJECTS (drugs, diseases, substancePages,
 * searchIndex, categories) between the pre-cleanup tree and the working
 * tree, and classifies every changed string as either:
 *
 *   PUNCTUATION-ONLY  — identical after stripping punctuation/whitespace/
 *                        case (the dash cleanup's permitted transform)
 *   SUBSTANTIVE       — anything else (MUST BE ZERO for this mission)
 *
 * The pre-cleanup tree is materialized via `git stash`-free read-only
 * extraction: git show HEAD:<file> is compared against the working tree
 * by importing both module trees (the old tree is checked out into a
 * temporary directory with git worktree).
 *
 * Usage: node scripts/medical-value-diff.mjs <path-to-old-tree>
 */

import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const OLD_ROOT = process.argv[2];
if (!OLD_ROOT || !existsSync(path.join(OLD_ROOT, "src/lib/kyp/data/drugs/index.ts"))) {
  console.error("usage: node scripts/medical-value-diff.mjs <old-tree-root>");
  process.exit(2);
}
const NEW_ROOT = process.cwd();

/* ---- walk objects, collect every string by path ---- */
function collect(obj, trail, out, seen) {
  if (obj === null || obj === undefined) return;
  if (typeof obj === "function") return;
  if (typeof obj === "string") { out.push({ trail, value: obj }); return; }
  if (typeof obj !== "object") return;
  if (seen.has(obj)) return;
  seen.add(obj);
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collect(v, `${trail}[${i}]`, out, seen));
  } else {
    for (const k of Object.keys(obj).sort()) collect(obj[k], `${trail}.${k}`, out, seen);
  }
}

const norm = (s) => s
  .replace(/[\u2014\u2013—–:;,().!?"'’‘“”\[\]]/g, " ")
  .replace(/[-]/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();

async function importData(root) {
  // Bun/Node ESM import by absolute path with cache-busting query
  const drugs = await import(`file://${root}/src/lib/kyp/data/drugs/index.ts`);
  const diseases = await import(`file://${root}/src/lib/kyp/data/diseases/index.ts`);
  const substances = await import(`file://${root}/src/lib/kyp/data/substances/index.ts`);
  const search = await import(`file://${root}/src/lib/kyp/data/search-index.ts`);
  const medications = await import(`file://${root}/src/lib/kyp/data/medications.ts`);
  return {
    drugs: drugs.drugs,
    diseases: diseases.diseases,
    substancePages: substances.substancePages,
    searchIndex: search.searchIndex,
    categories: medications.categories,
  };
}

const [oldData, newData] = await Promise.all([importData(OLD_ROOT), importData(NEW_ROOT)]);

let stringPairs = 0, changed = 0, punctuationOnly = 0;
const substantive = [];
const structural = [];

for (const key of Object.keys(oldData)) {
  const oldStrings = []; const newStrings = [];
  const seenOld = new WeakSet(); const seenNew = new WeakSet();
  collect(oldData[key], key, oldStrings, seenOld);
  collect(newData[key], key, newStrings, seenNew);
  stringPairs += oldStrings.length;

  // structural check: same string count per object
  if (oldStrings.length !== newStrings.length) {
    structural.push(`${key}: string count ${oldStrings.length} -> ${newStrings.length}`);
  }
  const newByTrail = new Map(newStrings.map((s) => [s.trail, s.value]));
  for (const s of oldStrings) {
    const nv = newByTrail.get(s.trail);
    if (nv === undefined) { substantive.push({ where: s.trail, old: s.value, status: "REMOVED" }); continue; }
    if (nv !== s.value) {
      changed++;
      if (norm(s.value) === norm(nv)) punctuationOnly++;
      else substantive.push({ where: s.trail, old: s.value.slice(0, 200), new: nv.slice(0, 200) });
    }
  }
  // new strings not in old (beyond trails)
  const oldByTrail = new Map(oldStrings.map((s) => [s.trail, s.value]));
  for (const s of newStrings) {
    if (!oldByTrail.has(s.trail)) substantive.push({ where: s.trail, new: s.value.slice(0, 200), status: "ADDED" });
  }
}

const oldHash = createHash("sha256").update(JSON.stringify(norm(JSON.stringify(oldData)))).digest("hex");
console.log("=== MEDICAL-VALUE SEMANTIC DIFF (dash-cleanup firewall) ===");
console.log(`strings compared: ${stringPairs}`);
console.log(`changed strings: ${changed}`);
console.log(`  punctuation-only (permitted): ${punctuationOnly}`);
console.log(`  SUBSTANTIVE (must be zero): ${substantive.length}`);
console.log(`structural count drift: ${structural.length}${structural.length ? " !! " + structural.join("; ") : ""}`);
if (substantive.length) {
  console.log("\nSUBSTANTIVE DIFFERENCES:");
  writeFileSync("reports/dash-substantive-diffs.json", JSON.stringify(substantive, null, 2)); console.log("full list: reports/dash-substantive-diffs.json");
  process.exit(1);
}
console.log("\nMEDICAL CONTENT: SEMANTICALLY UNCHANGED (punctuation-only edits)");
