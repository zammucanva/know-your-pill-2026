/**
 * Four-mode coverage audit (READ-ONLY).
 *
 * For every medication in the registry, checks what authored content backs
 * each learning mode (patient / mbbs / neetPg / resident) and what the mode
 * switcher actually shows. It never edits content.
 *
 *   bun scripts/audit-four-mode-coverage.ts
 *
 * Output (reports/medication-audit/four-mode/): coverage.csv, summary.json,
 * lens-validation.csv, lens-summary.json
 *
 * Two parts, one command:
 *   1. content depth per mode (size/uniqueness indicators, below)
 *   2. lens contract validation per medication (src/lib/kyp/modes): mechanical,
 *      quality and clinical layers kept SEPARATE; see validateDrug().
 *
 *   bun scripts/audit-four-mode-coverage.ts --check
 * exits 1 only for structural defects (invalid fact references, text that differs
 * from its canonical source, facts shown in a mode the contract forbids, lossy
 * viva splits). Missing content, duplicates and review states are reported, not failed.
 *
 * Status per (medication, mode):
 *   dedicated  >= 60% of the mode's indicators are substantive and not shared boilerplate
 *   partial    at least one substantive indicator
 *   missing    none
 * "substantive" is a SIZE and UNIQUENESS test only (text length and not
 * reused verbatim on >= SHARED_MIN medications). It says nothing about
 * clinical quality; every row still needs qualified clinical review.
 */

import { mkdirSync, writeFileSync } from "fs";
import { drugs } from "@/lib/kyp/data";
import { patientGuides } from "@/lib/kyp/patient";
import { STAHL_MCQ_BANK, stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { validateDrug, type DrugValidation } from "@/lib/kyp/modes";
import type { Drug, GuidedLearningMode } from "@/lib/kyp/data";

const OUT = "reports/medication-audit/four-mode";
const SHARED_MIN = 10;
const MODES: GuidedLearningMode[] = ["patient", "mbbs", "neetPg", "resident"];

type Indicator = { id: string; get: (d: Drug) => string[] };
const L = (v: unknown): string[] =>
  Array.isArray(v) ? v.flatMap((x) => (typeof x === "string" ? [x] : [])) : typeof v === "string" ? [v] : [];
const json = (v: unknown): string[] => (v == null ? [] : [JSON.stringify(v)]);

const mcqCount = new Map<string, number>();
// The source bank (DSL form) names the medication in `drug`.
for (const q of STAHL_MCQ_BANK as unknown as { drug: string }[]) mcqCount.set(q.drug, (mcqCount.get(q.drug) ?? 0) + 1);

const INDICATORS: Record<GuidedLearningMode, Indicator[]> = {
  patient: [
    { id: "patientGuide", get: (d) => (patientGuides[d.slug] ? [`patient guide present for ${d.slug}`.padEnd(40, ".")] : []) },
    { id: "patientExplanation", get: (d) => L(d.patientExplanation) },
    { id: "patientEducationPoints", get: (d) => L(d.patientEducationPoints) },
    { id: "patientMode", get: (d) => json(d.patientMode) },
  ],
  mbbs: [
    { id: "examLens.mbbs.viva", get: (d) => L(d.examLens?.mbbs?.viva) },
    { id: "examLens.mbbs.practical", get: (d) => L(d.examLens?.mbbs?.practical) },
    { id: "examLens.mbbs.longAnswer", get: (d) => L(d.examLens?.mbbs?.longAnswer) },
    { id: "mechanism.pharmacokinetics+prescriberGuide", get: (d) => [...L(d.mechanism?.pharmacokinetics), ...L(d.prescriberGuide?.pharmacokinetics)] },
    { id: "cbmeMapping", get: (d) => json(d.cbmeMapping) },
    { id: "mechanism", get: (d) => json(d.mechanism) },
  ],
  neetPg: [
    { id: "examPearls", get: (d) => L(d.examPearls) },
    { id: "examLens.neetPg.highYield", get: (d) => L(d.examLens?.neetPg?.highYield) },
    { id: "examLens.neetPg.pyqConcepts", get: (d) => L(d.examLens?.neetPg?.pyqConcepts) },
    { id: "memoryTricks", get: (d) => json(d.memoryTricks) },
    { id: "microQuizzes", get: (d) => json(d.microQuizzes) },
    { id: "activeRecallQuestions", get: (d) => json(d.activeRecallQuestions) },
    { id: "stahlMcqBank>=3", get: (d) => ((mcqCount.get(d.slug) ?? 0) >= 3 ? [`${mcqCount.get(d.slug)} mcqs`.padEnd(40, "x")] : []) },
  ],
  resident: [
    { id: "examLens.inicet.clinicalReasoning", get: (d) => L(d.examLens?.inicet?.clinicalReasoning) },
    { id: "wardPearls.residentExpects", get: (d) => L(d.wardPearls?.residentExpects) },
    { id: "clinicalCases", get: (d) => json(d.clinicalCases) },
    { id: "clinicalDecisionPath", get: (d) => json(d.clinicalDecisionPath) },
    { id: "commonMistakes", get: (d) => json(d.commonMistakes) },
    { id: "whenNotToUse", get: (d) => json(d.whenNotToUse) },
    { id: "prescriberGuide", get: (d) => json(d.prescriberGuide) },
    { id: "guidelineComparisons", get: (d) => json(d.guidelineComparisons) },
  ],
};

// How many medications reuse each exact string, per indicator.
const reuse = new Map<string, number>();
for (const d of drugs) {
  const seen = new Set<string>();
  for (const m of MODES) for (const ind of INDICATORS[m]) for (const s of ind.get(d)) {
    const k = `${ind.id}::${s.trim()}`;
    if (!seen.has(k)) { seen.add(k); reuse.set(k, (reuse.get(k) ?? 0) + 1); }
  }
}

const MIN = 40; // characters
function substantive(ind: Indicator, d: Drug): "yes" | "shared" | "thin" | "none" {
  const items = ind.get(d).map((s) => s.trim()).filter(Boolean);
  if (!items.length) return "none";
  const total = items.reduce((n, s) => n + s.length, 0);
  if (total < MIN) return "thin";
  const sharedAll = items.every((s) => (reuse.get(`${ind.id}::${s}`) ?? 0) >= SHARED_MIN);
  return sharedAll ? "shared" : "yes";
}

const rows: string[][] = [];
const modeStats: Record<string, { dedicated: number; partial: number; missing: number; slugs: Record<string, string[]> }> = {};
for (const m of MODES) modeStats[m] = { dedicated: 0, partial: 0, missing: 0, slugs: { dedicated: [], partial: [], missing: [] } };
const indicatorStats: Record<string, Record<string, number>> = {};
const pathSets: Record<string, Map<string, number>> = {};
for (const m of MODES) pathSets[m] = new Map();

for (const d of drugs) {
  const row: string[] = [d.slug, d.genericName, d.drugClassLabel];
  for (const m of MODES) {
    const res = INDICATORS[m].map((i) => ({ id: i.id, v: substantive(i, d) }));
    for (const r of res) (indicatorStats[`${m}.${r.id}`] ??= { yes: 0, shared: 0, thin: 0, none: 0 })[r.v]++;
    const yes = res.filter((r) => r.v === "yes").length;
    const status = yes >= Math.ceil(INDICATORS[m].length * 0.6) ? "dedicated" : yes >= 1 ? "partial" : "missing";
    modeStats[m][status]++;
    modeStats[m].slugs[status].push(d.slug);
    const path = d.learningPaths?.find((p) => p.mode === m);
    const sections = path ? [...path.visibleSections].sort().join("|") : "(no learning path: shows everything)";
    pathSets[m].set(sections, (pathSets[m].get(sections) ?? 0) + 1);
    row.push(status, `${yes}/${res.length}`, res.filter((r) => r.v !== "yes").map((r) => `${r.id}:${r.v}`).join(" "), String(path?.visibleSections.length ?? "all"));
  }
  row.push(patientGuides[d.slug] ? "yes" : "no", String(mcqCount.get(d.slug) ?? 0));
  rows.push(row);
}

mkdirSync(OUT, { recursive: true });
const head = ["slug", "medication", "class"];
for (const m of MODES) head.push(`${m}_status`, `${m}_substantive`, `${m}_gaps`, `${m}_visible_sections`);
head.push("has_patient_guide", "stahl_mcq_count");
const csv = (v: string) => `"${v.replace(/"/g, '""')}"`;
writeFileSync(`${OUT}/coverage.csv`, [head, ...rows].map((r) => r.map(csv).join(",")).join("\n") + "\n");

// Visibility analysis: how different are the four modes actually?
const allSections = new Set<string>();
for (const d of drugs) for (const p of d.learningPaths ?? []) p.visibleSections.forEach((s) => allSections.add(s));
const setOf = (d: Drug, m: GuidedLearningMode) => new Set(d.learningPaths?.find((p) => p.mode === m)?.visibleSections ?? []);
const subsetPairs: Record<string, number> = {};
for (const d of drugs) for (const a of MODES) for (const b of MODES) {
  if (a === b) continue;
  const A = setOf(d, a), B = setOf(d, b);
  if (A.size && [...A].every((s) => B.has(s)) && A.size < B.size) subsetPairs[`${a} ⊂ ${b}`] = (subsetPairs[`${a} ⊂ ${b}`] ?? 0) + 1;
}
const distinct = Object.fromEntries(MODES.map((m) => [m, pathSets[m].size]));
const noPath = drugs.filter((d) => !d.learningPaths?.length).map((d) => d.slug);

const summary = {
  generatedFrom: "scripts/audit-four-mode-coverage.ts",
  medications: drugs.length,
  patientGuides: Object.keys(patientGuides).length,
  stahlMcqs: STAHL_MCQ_BANK.length,
  medicationsWithStahlMcqs: mcqCount.size,
  distinctVisibleSectionSetsPerMode: distinct,
  medicationsWithoutLearningPaths: noPath.length,
  subsetRelationsAcrossMedications: subsetPairs,
  modes: Object.fromEntries(MODES.map((m) => [m, { dedicated: modeStats[m].dedicated, partial: modeStats[m].partial, missing: modeStats[m].missing, missingSlugs: modeStats[m].slugs.missing }])),
  indicators: indicatorStats,
  note: "Indicator status is a size/uniqueness test, not a quality or clinical-accuracy judgement.",
};
writeFileSync(`${OUT}/summary.json`, JSON.stringify(summary, null, 2) + "\n");
console.log(JSON.stringify({ ...summary, indicators: undefined, modes: Object.fromEntries(MODES.map((m) => [m, { d: modeStats[m].dedicated, p: modeStats[m].partial, x: modeStats[m].missing }])) }, null, 1));

/* ---------------- Part 2: lens contract validation (all medications) ---------------- */
const names = drugs.map((d) => d.genericName);
const validations: DrugValidation[] = drugs.map((d) => {
  const mcqs = stahlMcqs.filter((q) => q.drugSlug === d.slug);
  return validateDrug(d, patientGuides[d.slug], mcqs.map((q) => q.id), mcqs, names);
});
const STRUCTURAL = new Set(["source-missing", "text-differs-from-source", "fact-not-allowed-in-mode", "conflicting-text-for-source", "wrong-mode", "viva-split-lossy", "kind-unaccounted", "kind-both-built-and-unavailable", "unreviewed-state-missing", "mcq-differs-from-source", "mcq-invalid"]);
const structural = validations.flatMap((v) => v.issues.filter((i) => STRUCTURAL.has(i.code)).map((i) => `${v.slug}:${i.code}:${i.detail}`));

const lensHead = ["slug", "blocks_built", "blocks_expected", "unavailable_blocks", "missing_facts", "invalid_refs", "modes_without_distinctive_interaction", "mechanical_ok", "duplicate_across_fields", "possible_contradictions", "viva_statements", "viva_needs_review", "shared_facts_across_modes", "facts_review_required", "facts_flagged", "facts_approved"];
const lensRows = validations.map((v) => [
  v.slug, v.mechanical.blocksBuilt, v.mechanical.blocksExpected, v.mechanical.unavailableBlocks, v.mechanical.missingFacts, v.mechanical.invalidReferences,
  v.mechanical.modesWithoutDistinctiveInteraction.join("|"), v.mechanical.ok, v.quality.duplicateAcrossFields, v.quality.possibleContradictions.length,
  v.quality.vivaStatements, v.quality.vivaNeedsReview, v.quality.sharedFactsAcrossModes, v.clinical.factsReviewRequired, v.clinical.factsFlagged, v.clinical.factsApproved,
].map(String));
writeFileSync(`${OUT}/lens-validation.csv`, [lensHead, ...lensRows].map((r) => r.map(csv).join(",")).join("\n") + "\n");

const count = (f: (v: DrugValidation) => boolean) => validations.filter(f).length;
const lensSummary = {
  generatedFrom: "scripts/audit-four-mode-coverage.ts (lens contract validation)",
  medications: validations.length,
  layers: {
    mechanical: {
      note: "Contract blocks built, references valid, a distinctive interaction per mode. NOT content quality and NOT clinical approval.",
      allBlocksBuilt: count((v) => v.mechanical.unavailableBlocks === 0),
      mechanicalOk: count((v) => v.mechanical.ok),
      structuralDefects: structural.length,
      modesWithoutDistinctiveInteraction: Object.fromEntries(
        (["patient", "mbbs", "neetPg", "resident"] as const).map((m) => [m, count((v) => v.mechanical.modesWithoutDistinctiveInteraction.includes(m))])
      ),
      unavailableBlocksByKind: validations.flatMap((v) => Object.values(v.modes).flatMap((m) => m.unavailable.map((u) => u.kind))).reduce<Record<string, number>>((a, k) => ((a[k] = (a[k] ?? 0) + 1), a), {}),
    },
    quality: {
      note: "Signals only: duplicated sentences, heuristic contradictions, viva items needing review. Absence of a signal is not proof of quality.",
      withDuplicateAcrossFields: count((v) => v.quality.duplicateAcrossFields > 0),
      withPossibleContradictions: count((v) => v.quality.possibleContradictions.length > 0),
      possibleContradictions: validations.flatMap((v) => v.quality.possibleContradictions.map((c) => ({ slug: v.slug, ...c }))),
      vivaNeedsReview: validations.reduce((n, v) => n + v.quality.vivaNeedsReview, 0),
      medicationsWithSharedFactsAcrossModes: count((v) => v.quality.sharedFactsAcrossModes > 0),
    },
    clinical: {
      note: "Approval exists only through a recorded review (REVIEW_RECORDS). Everything else is unreviewed.",
      factsApproved: validations.reduce((n, v) => n + v.clinical.factsApproved, 0),
      factsFlagged: validations.reduce((n, v) => n + v.clinical.factsFlagged, 0),
      factsReviewRequired: validations.reduce((n, v) => n + v.clinical.factsReviewRequired, 0),
      factsUnverified: validations.reduce((n, v) => n + v.clinical.factsUnverified, 0),
      medicationsWithReviewRequiredFacts: count((v) => v.clinical.factsReviewRequired > 0),
    },
  },
  interactions: {
    note: "Resident interactions block. 'absent' (field missing) is reported separately from 'empty' (explicit empty list); neither means the medicine has no interactions.",
    states: validations.reduce<Record<string, number>>((m, v) => ((m[v.interactions.state] = (m[v.interactions.state] ?? 0) + 1), m), {}),
    records: validations.reduce((n, v) => n + v.interactions.records, 0),
    incompleteRecords: validations.reduce((n, v) => n + v.interactions.incomplete, 0),
    bySeverity: validations.reduce<Record<string, number>>((m, v) => {
      for (const [k, n] of Object.entries(v.interactions.bySeverity)) m[k] = (m[k] ?? 0) + n;
      return m;
    }, {}),
    recordsPerMedication: {
      min: Math.min(...validations.map((v) => v.interactions.records)),
      max: Math.max(...validations.map((v) => v.interactions.records)),
    },
  },
  patientInteractions: {
    note: "Patient wording is existing registry/Patient Guide text shown verbatim. 'template' = the shared lead-in plus a fixed general alcohol sentence (review-required). Nothing is paraphrased or inferred.",
    origins: validations.reduce<Record<string, number>>((m, v) => ((m[v.patientInteractions.origin] = (m[v.patientInteractions.origin] ?? 0) + 1), m), {}),
    medicationsWithNames: validations.filter((v) => v.patientInteractions.names > 0).length,
    medicationsWithoutPatientWording: validations.filter((v) => v.patientInteractions.origin === "missing").length,
  },
  patientExplanation: {
    note: "Separate measures. Rendering the Patient explanation slot is not content completeness, and content completeness is not clinical approval.",
    patientUiSlot: { medications: validations.length },
    byLevel: validations.reduce<Record<string, number>>((m, v) => ((m[v.explanation.level] = (m[v.explanation.level] ?? 0) + 1), m), {}),
    source: validations.reduce<Record<string, number>>((m, v) => ((m[v.explanation.source] = (m[v.explanation.source] ?? 0) + 1), m), {}),
    documentedUses: validations.reduce<Record<string, number>>((m, v) => ((m[v.explanation.uses] = (m[v.explanation.uses] ?? 0) + 1), m), {}),
    sentenceOrigins: validations.reduce<Record<string, number>>((m, v) => {
      for (const [k, n] of Object.entries(v.explanation.sentences)) m[k] = (m[k] ?? 0) + n;
      return m;
    }, {}),
    standardPurposeSentence: validations.reduce<Record<string, number>>((m, v) => ((m[v.explanation.standardPurposeSentence] = (m[v.explanation.standardPurposeSentence] ?? 0) + 1), m), {}),
    clinicallyReviewed: 0,
  },
  flows: {
    note: "What each learning flow has to work with. Counts of authored material only: not a measure of quality or of clinical completeness.",
    questions: {
      total: validations.reduce((n, v) => n + v.flows.questions.total, 0),
      authoredQuiz: validations.reduce((n, v) => n + v.flows.questions.quiz, 0),
      stahlBank: validations.reduce((n, v) => n + v.flows.questions.stahl, 0),
      skippedMalformed: validations.reduce((n, v) => n + v.flows.questions.skipped, 0),
      withoutRationale: validations.reduce((n, v) => n + v.flows.questions.withoutRationale, 0),
      perMedication: {
        min: Math.min(...validations.map((v) => v.flows.questions.total)),
        max: Math.max(...validations.map((v) => v.flows.questions.total)),
      },
    },
    mbbsExamPrep: {
      medications: validations.filter((v) => v.flows.examPrep.practical + v.flows.examPrep.longAnswer > 0).length,
      practicalTasks: validations.reduce((n, v) => n + v.flows.examPrep.practical, 0),
      longAnswerPrompts: validations.reduce((n, v) => n + v.flows.examPrep.longAnswer, 0),
    },
    resident: {
      withDecisionPath: validations.filter((v) => v.flows.resident.decisionPath).length,
      withCommonErrors: validations.filter((v) => v.flows.resident.pitfalls).length,
      boxedWarnings: validations.reduce<Record<string, number>>((m, v) => ((m[v.flows.resident.boxedWarnings] = (m[v.flows.resident.boxedWarnings] ?? 0) + 1), m), {}),
    },
    patient: {
      howToTakeFromGuide: validations.filter((v) => v.flows.patient.howToTake).length,
      sideEffects: validations.reduce<Record<string, number>>((m, v) => ((m[v.flows.patient.sideEffects] = (m[v.flows.patient.sideEffects] ?? 0) + 1), m), {}),
    },
  },
  structuralDefectList: structural,
};
// Gaps for the content owner / clinical reviewer: nothing here is written for them, only listed.
const gapHead = ["slug", "explanationLevel", "source", "documentedUses", "authoredGuideSentences", "registrySpecificSentences", "classSharedSentences", "templateSentences", "needsContentOwner"];
const gapRows = validations.map((v) => [
  v.slug,
  v.explanation.level,
  v.explanation.source,
  v.explanation.uses,
  v.explanation.sentences["authored-guide"],
  v.explanation.sentences["registry-specific"],
  v.explanation.sentences["class-shared"],
  v.explanation.sentences.template,
  v.explanation.level === "template-only" ? "needs a medicine-specific patient explanation" : v.explanation.level === "missing" ? "needs any patient explanation" : v.explanation.level === "registry-specific" ? "needs clinical review before reliance" : "needs clinical review before reliance",
]);
writeFileSync(`${OUT}/patient-explanation-gaps.csv`, [gapHead, ...gapRows].map((r) => r.map((c) => csv(String(c))).join(",")).join("\n") + "\n");
writeFileSync(`${OUT}/lens-summary.json`, JSON.stringify(lensSummary, null, 2) + "\n");
console.log("\n== lens contract validation ==\n" + JSON.stringify({ ...lensSummary, layers: { ...lensSummary.layers, quality: { ...lensSummary.layers.quality, possibleContradictions: lensSummary.layers.quality.possibleContradictions.length } } }, null, 1));
if (process.argv.includes("--check") && structural.length) {
  console.error(`\n--check FAILED: ${structural.length} structural defect(s)`);
  process.exit(1);
}
