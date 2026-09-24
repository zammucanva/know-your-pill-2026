/**
 * Phase 6 audit — extract question-worthy facts from every drug's
 * PrescriberGuide record, with canonical coordinates (zone + index)
 * so authored MCQs can reference facts losslessly.
 *
 * Usage: bun scripts/phase6/extract-facts.ts
 * Writes: /home/z/my-project/phase6-work/stahl-facts.json
 */
import { drugs } from "../../src/lib/kyp/data/drugs/index";
import type { Drug, PrescriberGuide } from "../../src/lib/kyp/data/types";
import { writeFileSync, mkdirSync } from "fs";

interface Fact {
  zone: string;
  index: number;
  subIndex?: number;
  text: string;
}

interface DrugFacts {
  slug: string;
  name: string;
  classId: string;
  classLabel: string;
  facts: Fact[];
}

const ZONE_ARRAYS: (keyof PrescriberGuide)[] = [
  "onsetTimeline",
  "ifItWorks",
  "ifItDoesNotWork",
  "augmentationCombos",
  "testsBeforeStarting",
  "sideEffectLogic",
  "sideEffectManagement",
  "sideEffectRescue",
  "dosingTips",
  "overdose",
  "howToStop",
  "pharmacokinetics",
  "doNotUse",
  "potentialAdvantages",
  "potentialDisadvantages",
  "primaryTargetSymptoms",
  "pearls",
];

function extractDrug(drug: Drug): DrugFacts {
  const pg = drug.prescriberGuide;
  const facts: Fact[] = [];
  if (!pg) {
    return { slug: drug.slug, name: drug.genericName, classId: drug.drugClass, classLabel: drug.drugClassLabel, facts };
  }

  for (const zone of ZONE_ARRAYS) {
    const arr = pg[zone] as string[] | undefined;
    if (!Array.isArray(arr)) continue;
    arr.forEach((text, index) => {
      if (typeof text === "string" && text.length > 0) facts.push({ zone: zone as string, index, text });
    });
  }

  // Scalar one-liners
  const scalars: [keyof PrescriberGuide, string][] = [
    ["weightGain", "weightGain"],
    ["sedation", "sedation"],
    ["longTermUse", "longTermUse"],
    ["habitForming", "habitForming"],
  ];
  for (const [key, zone] of scalars) {
    const v = pg[key] as string | undefined;
    if (typeof v === "string" && v.length > 0) facts.push({ zone, index: 0, text: v });
  }

  // Dosing rows (structured)
  (pg.dosing ?? []).forEach((row, index) => {
    facts.push({ zone: "dosing", index, subIndex: -1, text: `[${row.indication}] start ${row.starting} · target ${row.target} · max ${row.max} · titration: ${row.titration}` });
    (row.notes ?? []).forEach((note, subIndex) => {
      facts.push({ zone: "dosing", index, subIndex, text: `[${row.indication}] ${note}` });
    });
  });

  // Special populations
  (pg.specialPopulations ?? []).forEach((pop, index) => {
    pop.guidance.forEach((g, subIndex) => {
      facts.push({ zone: "specialPopulations", index, subIndex, text: `[${pop.population}] ${g}` });
    });
  });

  return { slug: drug.slug, name: drug.genericName, classId: drug.drugClass, classLabel: drug.drugClassLabel, facts };
}

const out = drugs.map(extractDrug);
const byClass = new Map<string, DrugFacts[]>();
for (const d of out) {
  const list = byClass.get(d.classLabel) ?? [];
  list.push(d);
  byClass.set(d.classLabel, list);
}

const summary = {
  drugs: out.length,
  withPrescriberGuide: out.filter((d) => d.facts.length > 0).length,
  totalFacts: out.reduce((t, d) => t + d.facts.length, 0),
  classes: [...byClass.keys()].sort(),
};

mkdirSync("/home/z/my-project/phase6-work", { recursive: true });
writeFileSync(
  "/home/z/my-project/phase6-work/stahl-facts.json",
  JSON.stringify({ summary, drugs: out }, null, 1)
);

console.log("=== PHASE 6 SOURCE AUDIT ===");
console.log(`Drugs: ${summary.drugs}, with prescriberGuide content: ${summary.withPrescriberGuide}`);
console.log(`Total extracted facts: ${summary.totalFacts}`);
console.log(`Classes: ${summary.classes.length}`);
console.log("\nFacts per class:");
for (const [cls, list] of [...byClass.entries()].sort((a, b) => b[1].length - a[1].length)) {
  const factCount = list.reduce((t, d) => t + d.facts.length, 0);
  console.log(`  ${cls}: ${list.length} drugs, ${factCount} facts`);
}
