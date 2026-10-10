/**
 * Readiness preview for the four-mode lens (READ-ONLY; enables nothing).
 *
 *   bun scripts/four-mode-readiness.ts <slug>
 *
 * Reports, for one medication, which lens blocks can be built from existing
 * canonical data, which cannot (and why), validator issues, viva items shown
 * without a reveal, and every displayed statement that mentions addiction,
 * dependence, withdrawal or stopping, so a qualified reviewer can read each one.
 * Prints three separate statuses (mechanical, clinical review, release). Exit code
 * reflects the MECHANICAL gate only (docs/four-mode-rollout-gate.md, section A);
 * a pass is never an authorisation to enable a medication.
 */

import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { LENS_ENABLED_SLUGS, MODE_ORDER, buildModeLenses, splitViva, validateLensSet } from "@/lib/kyp/modes";

const slug = process.argv[2];
const drug = drugs.find((d) => d.slug === slug);
if (!drug) {
  console.error(`usage: bun scripts/four-mode-readiness.ts <slug>  (unknown slug: ${slug})`);
  process.exit(2);
}

const patientGuide = getPatientGuide(slug);
const mcqs = stahlMcqs.filter((q) => q.drugSlug === slug);
const lenses = buildModeLenses({ drug, patientGuide, mcqs });
const issues = validateLensSet(lenses, drug, patientGuide);

const SENSITIVE = /addict|habit|withdraw|dependen|discontinu|abrupt|taper|craving|misuse|tolerance/i;
const flagged: string[] = [];
const walk = (v: unknown, mode: string) => {
  if (Array.isArray(v)) v.forEach((x) => walk(x, mode));
  else if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    if (typeof o.text === "string" && typeof o.source === "string") {
      if (SENSITIVE.test(o.text)) flagged.push(`${mode} | ${o.source} | ${o.text.slice(0, 160)}`);
    } else Object.values(o).forEach((x) => walk(x, mode));
  }
};
for (const m of MODE_ORDER) walk(lenses[m].blocks, m);

const viva = drug.examLens?.mbbs?.viva ?? [];
const vivaNoReveal = viva.filter((v) => splitViva(v).answer === null);

console.log(`# ${drug.genericName} (${slug})  Patient Guide: ${patientGuide ? "yes" : "no"}  Stahl MCQs: ${mcqs.length}`);
for (const m of MODE_ORDER) {
  console.log(`\n## ${m}: built ${lenses[m].blocks.map((b) => b.kind).join(", ") || "(none)"}`);
  for (const u of lenses[m].unavailable) console.log(`   UNAVAILABLE ${u.kind}: ${u.reason}`);
}
console.log(`\nviva items: ${viva.length}, shown without a reveal: ${vivaNoReveal.length}`);
for (const v of vivaNoReveal) console.log(`   - ${v.slice(0, 120)}`);
console.log(`\nvalidator issues: ${issues.length}`);
for (const i of issues) console.log(`   ${i.severity} ${i.code} ${i.detail}`);
console.log(`\nstatements for clinical review (addiction/dependence/withdrawal/stopping): ${flagged.length}`);
for (const f of flagged) console.log(`   ${f}`);

const unavailable = MODE_ORDER.reduce((n, m) => n + lenses[m].unavailable.length, 0);
const mechanical = unavailable === 0 && issues.length === 0 && vivaNoReveal.length === 0;
const enabled = LENS_ENABLED_SLUGS.includes(slug);
console.log("\n== STATUS (three separate gates) ==");
console.log(`MECHANICAL:       ${mechanical ? "MET" : "NOT MET"} (unavailable blocks=${unavailable}, validator issues=${issues.length}, viva without reveal=${vivaNoReveal.length})`);
console.log("CLINICAL REVIEW:  NOT ASSESSED by this tool (a recorded qualified reviewer is required; see docs/four-mode-readiness-checklist.md)");
console.log(`RELEASE:          NOT AUTHORISED by this tool (currently ${enabled ? "ENABLED in LENS_ENABLED_SLUGS" : "not enabled"}; this script never enables anything)`);
// Exit code reports the mechanical gate only. It is NOT an authorisation to enable.
process.exit(mechanical ? 0 : 1);
