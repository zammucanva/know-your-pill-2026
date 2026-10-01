/**
 * Quick verification of the concerns data layer — run with bun.
 * Confirms: class derivation, matrix building, cell normalization,
 * coverage numbers match the Python audit, honest degradation.
 */
import {
  comparisonClasses,
  getComparisonClass,
  buildComparisonMatrix,
  normalizeConcernCell,
  defaultConcernsFor,
  sanitizeConcernIds,
  CONCERN_DEFINITIONS,
} from "../src/lib/kyp/concerns/index";
import { drugs } from "../src/lib/kyp/data/drugs/index";

console.log(`\n=== ${comparisonClasses.length} classes derived from ${drugs.length} drugs ===`);
for (const cls of comparisonClasses.slice(0, 12)) {
  console.log(
    `${String(cls.medications.length).padStart(3)}  ${cls.id.padEnd(30)} ${cls.label} — ${cls.fullName}`
  );
  if (cls.subgroups.length > 1) {
    console.log(
      `      subgroups: ${cls.subgroups.map((s) => `${s.label} (${s.count})`).join(" · ")}`
    );
  }
}
const multi = comparisonClasses.filter((c) => c.medications.length === 1).length;
console.log(`... ${multi} one-drug classes\n`);

// total membership must equal registry, no duplicates
const total = comparisonClasses.reduce((n, c) => n + c.medications.length, 0);
const uniqueSlugs = new Set(comparisonClasses.flatMap((c) => c.medications.map((m) => m.slug)));
console.log(`total members: ${total} (expect 143), unique: ${uniqueSlugs.size} (expect 143)`);

// coverage numbers vs Python audit
console.log(`\n=== coverage (all 143) ===`);
for (const def of CONCERN_DEFINITIONS) {
  const covered = drugs.filter((d) => normalizeConcernCell(d, def.id).available).length;
  console.log(`${def.id.padEnd(22)} ${String(covered).padStart(3)}/143  [${def.kind}]`);
}

// sample matrix: atypical antipsychotics, spec example concerns
const atyp = getComparisonClass("atypical-antipsychotic")!;
console.log(`\n=== atypical antipsychotics: ${atyp.medications.length} members ===`);
console.log("default concerns:", defaultConcernsFor(atyp.medications));
const matrix = buildComparisonMatrix(atyp, [
  "weight-metabolic",
  "sedation",
  "prolactin",
  "eps-akathisia",
]);
console.log(
  "header:",
  matrix.map((r) => r.drug.genericName.padEnd(14)).join("")
);
for (const row of matrix) {
  console.log(
    row.cells
      .map((c) =>
        (c.available ? c.headline : "—").slice(0, 14).padEnd(14)
      )
      .join(""),
    " ←", row.drug.genericName
  );
}

// spot check one cell in detail: olanzapine weight
const olzWeight = normalizeConcernCell(
  drugs.find((d) => d.slug === "olanzapine")!,
  "weight-metabolic"
);
console.log(`\n=== olanzapine × weight-metabolic ===`);
console.log("headline:", olzWeight.headline);
for (const e of olzWeight.entries) console.log(`  [${e.list}] ${e.name} (${e.frequency}/${e.severity})`);
console.log("prescriberNote:", olzWeight.prescriberNote);

// honest degradation: find a drug with no QT entry
const sertralineQT = normalizeConcernCell(drugs.find((d) => d.slug === "sertraline")!, "qt-cardiac");
console.log(`\n=== sertraline × qt-cardiac === available=${sertralineQT.available} headline="${sertralineQT.headline}" entries=${sertralineQT.entries.length}`);

// monitoring + interactions cells
const clozMon = normalizeConcernCell(drugs.find((d) => d.slug === "clozapine")!, "monitoring-burden");
console.log(`\nclozapine monitoring: ${clozMon.headline} → ${clozMon.monitoringItems?.map((m) => m.parameter).join(" | ")}`);
const clozInt = normalizeConcernCell(drugs.find((d) => d.slug === "clozapine")!, "interaction-burden");
console.log(`clozapine interactions: ${clozInt.headline}`);

// sanitize
console.log(`\nsanitize ["sedation","bogus","sedation","weight-metabolic"] →`, sanitizeConcernIds(["sedation", "bogus", "sedation", "weight-metabolic"]));

// one-drug class behavior
const oneDrug = comparisonClasses.find((c) => c.medications.length === 1)!;
console.log(`\none-drug class: ${oneDrug.id} (${oneDrug.label}) member: ${oneDrug.medications[0].genericName}`);
