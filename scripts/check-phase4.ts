/**
 * Phase 4 sanity checker — dev utility.
 *
 *   1. Half-life parser: parse rate + failures across every drug.
 *   2. Interaction engine: sample combos, inspect for false positives.
 *
 * Run: bun scripts/check-phase4.ts   (from repo root)
 */

import { drugs } from "../src/lib/kyp/data/drugs/index";
import { checkInteractions } from "../src/lib/kyp/interactions/engine";
import { parseHalfLife } from "../src/lib/kyp/pharmacokinetics/half-life";

const bySlug = new Map(drugs.map((d) => [d.slug, d]));

/* ---------- 1. Half-life parse rate ---------- */
let parsed = 0;
const failures: string[] = [];
const outliers: string[] = [];

for (const d of drugs) {
  const text = d.mechanism?.halfLife ?? "";
  const p = parseHalfLife(text);
  if (!p) {
    failures.push(`${d.slug}: "${text}"`);
  } else {
    parsed++;
    if (p.representativeHours > 24 * 14 || p.representativeHours < 0.1) {
      outliers.push(`${d.slug}: ${p.representativeHours.toFixed(1)}h from "${text}"`);
    }
  }
}

console.log("=== HALF-LIFE PARSER ===");
console.log(`Parsed ${parsed}/${drugs.length} (${((parsed / drugs.length) * 100).toFixed(1)}%)`);
if (failures.length) {
  console.log(`\nUnparseable (${failures.length}):`);
  for (const f of failures) console.log("  " + f);
}
if (outliers.length) {
  console.log(`\nOutliers (${outliers.length}):`);
  for (const o of outliers) console.log("  " + o);
}

/* ---------- 2. Interaction engine samples ---------- */
console.log("\n=== INTERACTION ENGINE — sample combos ===");

const combos: string[][] = [
  ["sertraline", "tranylcypromine"],
  ["fluoxetine", "tranylcypromine"],
  ["sertraline", "pimozide"],
  ["sertraline", "tramadol" in bySlug ? "tramadol" : "escitalopram"],
  ["quetiapine", "haloperidol"],
  ["diazepam", "zolpidem"],
  ["lithium", "haloperidol"],
  ["valproate", "lamotrigine"],
  ["clozapine", "fluvoxamine"],
  ["methylphenidate", "fluoxetine"],
  ["escitalopram", "sertraline"],
  ["mirtazapine", "tranylcypromine"],
];

for (const combo of combos) {
  const selected = combo.map((s) => bySlug.get(s)).filter((d): d is NonNullable<typeof d> => Boolean(d));
  if (selected.length < 2) {
    console.log(`\n--- ${combo.join(" + ")} — SLUG MISSING`);
    continue;
  }
  const result = checkInteractions(selected);
  console.log(`\n--- ${combo.join(" + ")} — ${result.findings.length} finding(s), ${result.unmatchedPairs.length} unmatched`);
  for (const f of result.findings) {
    console.log(`  [${f.severity}] ${f.aName} × ${f.bName} (via ${f.matchedVia}, from ${f.sourceName}): "${f.listedAs.slice(0, 70)}"`);
  }
  for (const u of result.unmatchedPairs) {
    console.log(`  [none listed] ${u.aName} × ${u.bName}`);
  }
}

/* ---------- 3. False-positive sweep: every pair among a high-risk sample ---------- */
console.log("\n=== FALSE-POSITIVE SWEEP (12-drug ward round) ===");
const ward = [
  "sertraline", "mirtazapine", "quetiapine", "olanzapine", "risperidone",
  "lithium", "valproate", "lamotrigine", "clonazepam", "zolpidem",
  "tranylcypromine", "haloperidol",
].map((s) => bySlug.get(s)).filter((d): d is NonNullable<typeof d> => Boolean(d));

const sweep = checkInteractions(ward);
console.log(`${sweep.findings.length} findings across ${sweep.pairs.length} matched pairs / ${sweep.unmatchedPairs.length} unmatched`);
console.log("Unmatched pairs (should be clinically plausible 'nothing listed'):");
for (const u of sweep.unmatchedPairs) console.log(`  ${u.aName} × ${u.bName}`);
