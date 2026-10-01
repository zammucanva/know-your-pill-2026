/**
 * Concept visibility + revision-split validation against the real corpus.
 * Run: bun run scripts/test-concept-visibility.ts
 */
import { getConceptSectionVisibility, splitRevisionParagraph, verifyRevisionCard, capQuickFacts, objectiveOneLiner } from "../src/lib/kyp/psychiatry-concept-visibility";
import { psychiatryCourses } from "../src/lib/kyp/data/psychiatry-courses";

let pass = 0;
let fail = 0;
const check = (name: string, ok: boolean, detail = "") => {
  if (ok) { pass++; console.log(`  ✓ ${name}`); }
  else { fail++; console.log(`  ✗ ${name}${detail ? ` — ${detail}` : ""}`); }
};

const concept = psychiatryCourses.filter((c) => c.kind === "concept");
console.log(`concept courses: ${concept.length}`);

// 1. Visibility matrix matches the audit expectations
//    (hidden = no epidemiology data OR placeholder — 14 placeholder + 3 absent)
const epiHidden = concept.filter((c) => !getConceptSectionVisibility(c).epidemiology);
const epiPlaceholder = epiHidden.filter((c) => c.epidemiology !== undefined);
const etShown = concept.filter((c) => getConceptSectionVisibility(c).etiology);
const pgShown = concept.filter((c) => getConceptSectionVisibility(c).patientGuide);
check("epidemiology hidden for 17 courses (14 placeholder + 3 absent)", epiHidden.length === 17, `got ${epiHidden.length}`);
check("of which 14 carry placeholder data", epiPlaceholder.length === 14, `got ${epiPlaceholder.length}`);
check("etiology renders for 32 courses", etShown.length === 32, `got ${etShown.length}`);
check("patient guide renders for all 35", pgShown.length === 35, `got ${pgShown.length}`);

// phenomenology specifically
const phen = concept.find((c) => c.slug === "psychiatric-phenomenology")!;
const phenVis = getConceptSectionVisibility(phen);
check("phenomenology epidemiology hidden", phenVis.epidemiology === false);
check("phenomenology etiology renders", phenVis.etiology === true);
check("phenomenology patient guide renders", phenVis.patientGuide === true);
check("phenomenology explanatory layer renders", phenVis.explanatoryLayer === true);

// sleep-basics has real epidemiology
const sleep = concept.find((c) => c.slug === "sleep-basics")!;
check("sleep-basics epidemiology renders", getConceptSectionVisibility(sleep).epidemiology === true);

// 2. Revision split: content preservation across ALL concept courses
let totalParas = 0;
let verified = 0;
let titlesFound = 0;
let degraded = 0;
let maxBullets = 0;
for (const course of concept) {
  for (const para of course.highYieldSummary) {
    totalParas++;
    const card = splitRevisionParagraph(para);
    if (verifyRevisionCard(card, para)) verified++;
    else {
      console.log(`    !! content-preservation FAILED for ${course.slug}: ${para.slice(0, 60)}`);
    }
    if (card.title) titlesFound++;
    if (card.bullets.length === 1 && card.bullets[0] === para) degraded++;
    maxBullets = Math.max(maxBullets, card.bullets.length);
  }
}
check("every revision card preserves the source text", verified === totalParas, `${verified}/${totalParas}`);
console.log(`  (titles: ${titlesFound}/${totalParas}; degraded single-bullet: ${degraded}; max bullets: ${maxBullets})`);

// 3. Quick facts cap
const qf = capQuickFacts(phen.quickFacts);
check("quick facts capped at 5", qf.visible.length === 5 && qf.rest.length === phen.quickFacts.length - 5);

// 4. Objective one-liners
const o1 = objectiveOneLiner(phen.learningObjectives[0]);
check("objective one-liner is shorter than the full text", o1.length < phen.learningObjectives[0].length, o1.slice(0, 60));

// 5. Phenomenology card titles sample
console.log("\nPhenomenology revision cards:");
for (const para of phen.highYieldSummary) {
  const card = splitRevisionParagraph(para);
  console.log(`  [${card.title ?? "(no label)"}] ${card.bullets.length} bullets, ${para.split(/\s+/).length} words`);
}

console.log(`\n${pass} pass / ${fail} fail`);
process.exit(fail > 0 ? 1 : 0);
