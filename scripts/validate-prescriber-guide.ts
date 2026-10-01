/**
 * Prescriber's Guide layer validation.
 *
 * Loads every registered drug and verifies that drug.prescriberGuide
 * matches the PrescriberGuide contract: required keys present, correct
 * value types, dosing rows complete, and the "prescriber-guide" section
 * registered in the MBBS / NEET-PG / Resident learning paths (and NOT
 * in the patient path).
 *
 * Usage: bun run scripts/validate-prescriber-guide.ts
 * Exit 0 = all checks pass.
 */
import { drugs } from "../src/lib/kyp/data/drugs/index";

const PG_STRING_ARRAYS = [
  "onsetTimeline", "ifItWorks", "ifItDoesNotWork", "augmentationCombos",
  "testsBeforeStarting", "sideEffectLogic", "sideEffectManagement",
  "sideEffectRescue", "dosageForms", "dosingTips", "overdose", "howToStop",
  "pharmacokinetics", "doNotUse", "potentialAdvantages",
  "potentialDisadvantages", "primaryTargetSymptoms", "pearls",
] as const;

const PG_STRINGS = ["sourceEdition", "weightGain", "sedation", "longTermUse", "habitForming"] as const;

let errors = 0;
let checked = 0;

for (const drug of drugs) {
  const pg = (drug as { prescriberGuide?: unknown }).prescriberGuide;
  if (!pg) {
    console.log(`${drug.genericName}: no prescriberGuide (optional - skipped)`);
    continue;
  }
  checked++;
  const p = pg as Record<string, unknown>;
  const name = drug.genericName;

  for (const key of PG_STRINGS) {
    if (typeof p[key] !== "string" || (p[key] as string).length === 0) {
      console.error(`  ✗ ${name}.${key} missing or not a non-empty string`);
      errors++;
    }
  }
  for (const key of PG_STRING_ARRAYS) {
    const v = p[key];
    if (!Array.isArray(v) || v.length === 0 || !v.every((x) => typeof x === "string")) {
      console.error(`  ✗ ${name}.${key} missing, empty, or not string[]`);
      errors++;
    }
  }

  // dosing rows
  const dosing = p.dosing as Array<Record<string, unknown>> | undefined;
  if (!Array.isArray(dosing) || dosing.length === 0) {
    console.error(`  ✗ ${name}.dosing missing or empty`);
    errors++;
  } else {
    for (const row of dosing) {
      for (const key of ["indication", "starting", "titration", "target", "max"]) {
        if (typeof row[key] !== "string" || (row[key] as string).length === 0) {
          console.error(`  ✗ ${name}.dosing[${row.indication ?? "?"}].${key} missing`);
          errors++;
        }
      }
      if (row.notes !== undefined && (!Array.isArray(row.notes) || !row.notes.every((n) => typeof n === "string"))) {
        console.error(`  ✗ ${name}.dosing[${row.indication ?? "?"}].notes must be string[]`);
        errors++;
      }
    }
  }

  // special populations
  const pops = p.specialPopulations as Array<Record<string, unknown>> | undefined;
  if (!Array.isArray(pops) || pops.length === 0) {
    console.error(`  ✗ ${name}.specialPopulations missing or empty`);
    errors++;
  } else {
    for (const pop of pops) {
      if (typeof pop.population !== "string" || !Array.isArray(pop.guidance) || pop.guidance.length === 0) {
        console.error(`  ✗ ${name}.specialPopulations[${pop.population ?? "?"}] malformed`);
        errors++;
      }
    }
  }

  // learning path registration
  const paths = (drug as { learningPaths?: Array<{ mode: string; visibleSections: string[] }> }).learningPaths ?? [];
  for (const path of paths) {
    const has = path.visibleSections.includes("prescriber-guide");
    if (path.mode === "patient" && has) {
      console.error(`  ✗ ${name}: prescriber-guide must NOT be in the patient learning path`);
      errors++;
    }
    if ((path.mode === "mbbs" || path.mode === "neetPg" || path.mode === "resident") && !has) {
      console.error(`  ✗ ${name}: prescriber-guide missing from ${path.mode} learning path`);
      errors++;
    }
  }
}

console.log(`\nChecked ${checked} drugs with prescriberGuide. ${errors === 0 ? "ALL PASS ✓" : errors + " ERRORS"}`);
process.exit(errors === 0 ? 0 : 1);
