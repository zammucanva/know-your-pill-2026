/**
 * Phase 6 — per-class compact digests for question authoring.
 * Usage: bun scripts/phase6/digest.ts
 * Writes: /home/z/my-project/phase6-work/digests/<class>.txt
 */
import { drugs } from "../../src/lib/kyp/data/drugs/index";
import type { Drug } from "../../src/lib/kyp/data/types";
import { writeFileSync, mkdirSync } from "fs";

function zone(pg: Drug["prescriberGuide"], key: string): string[] {
  if (!pg) return [];
  const v = (pg as unknown as Record<string, unknown>)[key];
  return Array.isArray(v) ? (v as string[]) : [];
}

function digest(drug: Drug): string {
  const pg = drug.prescriberGuide;
  if (!pg) return `${drug.genericName} (${drug.slug}) [${drug.drugClassLabel}]: NO DATA\n`;
  const L: string[] = [];
  L.push(`### ${drug.genericName} (${drug.slug}) — class: ${drug.drugClass} / ${drug.drugClassLabel}`);

  const add = (label: string, arr: string[], max = 99) => {
    if (!arr.length) return;
    L.push(`  ${label}:`);
    arr.slice(0, max).forEach((t, i) => L.push(`    [${i}] ${t}`));
  };

  add("PEARLS", pg.pearls);
  add("DOSING-TIPS", pg.dosingTips);
  add("HOW-TO-STOP", pg.howToStop);
  add("DO-NOT-USE", pg.doNotUse, 4);
  add("PK", pg.pharmacokinetics, 4);
  add("ADVANTAGES", pg.potentialAdvantages);
  add("DISADVANTAGES", pg.potentialDisadvantages);
  add("TESTS-BEFORE", pg.testsBeforeStarting, 3);
  add("SE-LOGIC", pg.sideEffectLogic, 2);
  add("SE-MANAGE", pg.sideEffectManagement, 2);
  add("SE-RESCUE", pg.sideEffectRescue, 2);
  add("ONSET", pg.onsetTimeline, 2);
  add("IF-WORKS", pg.ifItWorks, 2);
  add("IF-NOT", pg.ifItDoesNotWork, 2);
  add("AUGMENT", pg.augmentationCombos, 2);
  add("OVERDOSE", pg.overdose, 1);
  L.push(`  SCALARS: weightGain="${pg.weightGain}" | sedation="${pg.sedation}" | longTerm="${pg.longTermUse}" | habit="${pg.habitForming}"`);
  L.push("  DOSING-ROWS:");
  pg.dosing.forEach((r, i) => {
    L.push(`    [${i}] ${r.indication} :: start=${r.starting} target=${r.target} max=${r.max} titr=${r.titration}`);
  });
  L.push("  SPECIAL-POPS:");
  pg.specialPopulations.forEach((p, i) => {
    L.push(`    [${i}] ${p.population} :: ${p.guidance[0] ?? ""}${p.guidance.length > 1 ? ` (+${p.guidance.length - 1} more)` : ""}`);
  });
  return L.join("\n") + "\n";
}

const byClass = new Map<string, Drug[]>();
for (const d of drugs) {
  const list = byClass.get(d.drugClass) ?? [];
  list.push(d);
  byClass.set(d.drugClass, list);
}

const dir = "/home/z/my-project/phase6-work/digests";
mkdirSync(dir, { recursive: true });

for (const [classId, list] of byClass) {
  const body = list.map(digest).join("\n");
  writeFileSync(`${dir}/${classId}.txt`, body);
}

console.log(`Wrote ${byClass.size} class digests to ${dir}`);
console.log("Class IDs:", [...byClass.keys()].sort().join(", "));
