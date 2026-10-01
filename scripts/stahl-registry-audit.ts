/**
 * Stahl integration — registry + patient-mode audit.
 *
 * "145 means exactly 145": independently derives the canonical registry
 * state and verifies imports, registrations, slugs, generic names, orphan
 * files, missing files, duplicates, and the patient-mode field contract.
 */
import { readdirSync, readFileSync, existsSync } from "fs";
import { drugs, getAllDrugSlugs, getDrugBySlug } from "../src/lib/kyp/data/drugs/index";
import { patientGuides, getPatientGuide } from "../src/lib/kyp/patient";
import type { Drug } from "../src/lib/kyp/data/types";

let failures = 0;
const fail = (msg: string) => { failures++; console.error(`  FAIL: ${msg}`); };
const ok = (msg: string) => console.log(`  OK:   ${msg}`);

/* ── 1. Registry file/dir state ─────────────────────────────────────── */
const DRUGS_DIR = "src/lib/kyp/data/drugs";
const files = readdirSync(DRUGS_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
const indexSrc = readFileSync(`${DRUGS_DIR}/index.ts`, "utf8");

console.log("REGISTRY AUDIT");
ok(`monograph files on disk: ${files.length} (expect 145)`);
if (files.length !== 145) fail(`monograph files = ${files.length}, expected 145`);

/* ── 2. Index imports & array entries ────────────────────────────────── */
const importMatches = [...indexSrc.matchAll(/^import \{ ([a-zA-Z0-9_]+) \} from "\.\/([a-z0-9-]+)";$/gm)];
const arrayEntries = [...indexSrc.matchAll(/^\s{2,4}([a-z][a-zA-Z0-9]*),$/gm)];
ok(`registry imports: ${importMatches.length} (expect 145)`);
ok(`array registrations: ${arrayEntries.length} (expect 145)`);
if (importMatches.length !== 145) fail(`imports = ${importMatches.length}`);
if (arrayEntries.length !== 145) fail(`array entries = ${arrayEntries.length}`);

/* ── 3. Uniqueness: imports, entries, slugs, generic names ──────────── */
const importNames = importMatches.map((m) => m[1]);
const importPaths = importMatches.map((m) => m[2]);
const entryNames = arrayEntries.map((m) => m[1]);
const slugs = drugs.map((d) => d.slug);
const generics = drugs.map((d) => d.genericName);
const dup = <T>(xs: T[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
const dupImports = dup(importNames), dupPaths = dup(importPaths), dupEntries = dup(entryNames);
const dupSlugs = dup(slugs), dupGenerics = dup(generics);
ok(`unique import identifiers: ${new Set(importNames).size} (dup: ${dupImports.length})`);
ok(`unique import file paths:  ${new Set(importPaths).size} (dup: ${dupPaths.length})`);
ok(`unique array entries:      ${new Set(entryNames).size} (dup: ${dupEntries.length})`);
ok(`unique slugs:              ${new Set(slugs).size} (dup: ${dupSlugs.length})`);
ok(`unique generic names:      ${new Set(generics).size} (dup: ${dupGenerics.length})`);
if (dupImports.length) fail(`duplicate imports: ${dupImports}`);
if (dupPaths.length) fail(`duplicate import paths: ${dupPaths}`);
if (dupEntries.length) fail(`duplicate array entries: ${dupEntries}`);
if (dupSlugs.length) fail(`duplicate slugs: ${dupSlugs}`);
if (dupGenerics.length) fail(`duplicate generic names: ${dupGenerics}`);

/* ── 4. Orphans & missing files ────────────────────────────────────── */
const registeredPaths = new Set(importPaths);
const orphanFiles = files.map((f) => f.replace(/\.ts$/, "")).filter((s) => !registeredPaths.has(s));
const missingFiles = [...registeredPaths].filter((s) => !files.includes(`${s}.ts`));
ok(`orphan monograph files (not imported):  ${orphanFiles.length}`);
ok(`registry imports missing a file:         ${missingFiles.length}`);
if (orphanFiles.length) fail(`orphan files: ${orphanFiles}`);
if (missingFiles.length) fail(`missing files: ${missingFiles}`);

/* ── 5. Registry invariants ────────────────────────────────────────── */
ok(`drugs.length:             ${drugs.length} (expect 145)`);
ok(`getAllDrugSlugs().length:  ${getAllDrugSlugs().length} (expect 145)`);
if (drugs.length !== 145) fail("drugs.length !== 145");
if (getAllDrugSlugs().length !== 145) fail("getAllDrugSlugs().length !== 145");
const lookupWorks = slugs.every((s) => getDrugBySlug(s)?.slug === s);
ok(`getDrugBySlug resolves every slug: ${lookupWorks}`);
if (!lookupWorks) fail("getDrugBySlug lookup broken");

/* ── 6. Patient-mode canonical contract (145/145) ───────────────────── */
console.log("\nPATIENT-MODE AUDIT");
const patientField = (d: Drug, f: "patientMode" | "patientExplanation") => {
  const v = (d as unknown as Record<string, unknown>)[f];
  return v && typeof v === "object" && Object.keys(v).length > 0;
};
const withMode = drugs.filter((d) => patientField(d, "patientMode")).length;
const withExpl = drugs.filter((d) => typeof d.patientExplanation === "string" && d.patientExplanation.length > 20).length;
const withPoints = drugs.filter((d) => Array.isArray(d.patientEducationPoints) && d.patientEducationPoints.length > 0).length;
ok(`patientMode present:        ${withMode}/145`);
ok(`patientExplanation present: ${withExpl}/145`);
ok(`patientEducationPoints:     ${withPoints}/145`);
if (withMode !== 145) fail(`patientMode ${withMode}/145`);
if (withExpl !== 145) fail(`patientExplanation ${withExpl}/145`);
if (withPoints !== 145) fail(`patientEducationPoints ${withPoints}/145`);

/* ── 7. Deep guides: exactly 12 ─────────────────────────────────────── */
const deepGuides = Object.keys(patientGuides);
ok(`deep PatientGuide count:    ${deepGuides.length} (expect 12)`);
if (deepGuides.length !== 12) fail(`deep guides = ${deepGuides.length}, expected 12`);
const fallbackDrugs = drugs.filter((d) => !getPatientGuide(d.slug));
ok(`fallback drugs (no guide):   ${fallbackDrugs.length} (expect 133)`);
if (fallbackDrugs.length !== 133) fail(`fallback drugs = ${fallbackDrugs.length}, expected 133`);
const deepInRegistry = deepGuides.every((s) => slugs.includes(s));
ok(`every deep guide slug is a registry drug: ${deepInRegistry}`);
if (!deepInRegistry) fail("orphan deep guide");

/* ── 8. Fallback content sanity: no empty primary explanation ──────── */
const emptyFallback = drugs.filter(
  (d) => !getPatientGuide(d.slug) && (!d.patientExplanation || d.patientExplanation.trim().length < 20)
);
ok(`fallback drugs with real patientExplanation: ${145 - 12 - emptyFallback.length}/133`);
if (emptyFallback.length) fail(`fallback drugs with no usable explanation: ${emptyFallback.map((d) => d.slug)}`);

console.log(`\nREGISTRY+PATIENT AUDIT: ${failures === 0 ? "PASS" : `FAIL (${failures})`}`);
process.exit(failures === 0 ? 0 : 1);
