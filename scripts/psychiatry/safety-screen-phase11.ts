/** Phase 11 — medical content safety screen (learner-facing presentation layer).
 * Scans all 109 courses' learner-facing copy (titles, taglines, summaries,
 * patient guides, quick facts, pearls) for overstatement/certainty patterns.
 * Read-only; flags for human review, does not rewrite anything. */
import { psychiatryCourses } from "../../src/lib/kyp/data/psychiatry-courses";

const PATTERNS: [string, RegExp, string][] = [
  ["cure", /\bcures?\b|\bcured\b|\bmiracle\b/i, "overstated cure language"],
  ["guarantee", /\bguarante?e[ds]?\b/i, "guarantee language"],
  ["always", /\balways (?:works|safe|successful)/i, "absolute outcome claim"],
  ["100%", /\b100%\s*(?:safe|effective|successful|cure)/i, "absolute percentage"],
  ["prevents entirely", /\bprevents (?:all|completely)\b/i, "absolute prevention"],
  ["never fails", /\bnever fails\b|\bcannot fail\b/i, "absolute efficacy"],
  ["proven definitively", /\bdefinitively proven\b/i, "overstated evidence"],
  ["safe in pregnancy all", /\bsafe (?:in|during) (?:all )?pregnancy\b/i, "pregnancy safety without qualifier"],
  ["no side effects", /\bno side effects\b/i, "absolute safety"],
  ["harmless", /\bharmless\b/i, "absolute safety"],
  ["self-diagnose", /\bself[- ]diagnos[ei]/i, "self-diagnosis framing"],
  ["you should take", /\byou should take\b/i, "direct medication instruction"],
  ["replace consultation", /\breplac(?:es|ing) (?:a )?(?:doctor|consultation|clinician)/i, "replacing clinical care"],
];

const flagged: { slug: string; pattern: string; where: string; text: string; why: string }[] = [];

for (const c of psychiatryCourses) {
  const surfaces: [string, string][] = [
    ["title", c.title],
    ["tagline", c.tagline],
    ["summary", c.summary],
    ["whatIsIt", c.patientGuide.whatIsIt],
    ["whatCausesIt", c.patientGuide.whatCausesIt],
    ["treatment", c.patientGuide.treatment],
    ...c.patientGuide.selfHelp.map((s) => ["selfHelp", s] as [string, string]),
    ...c.quickFacts.map((f) => ["quickFact", `${f.label}: ${f.value}`] as [string, string]),
    ...c.clinicalPearls.map((p) => ["pearl", p] as [string, string]),
  ];
  for (const [where, text] of surfaces) {
    for (const [name, re, why] of PATTERNS) {
      if (re.test(text)) {
        flagged.push({ slug: c.slug, pattern: name, where, text: text.slice(0, 140), why });
      }
    }
  }
}

if (flagged.length === 0) {
  console.log("PHASE 11 SAFETY SCREEN: 0 flags across 109 courses (13 pattern families).");
} else {
  console.log(`PHASE 11 SAFETY SCREEN: ${flagged.length} flags — review each (context matters):\n`);
  for (const f of flagged) {
    console.log(`[${f.pattern}] ${f.slug} (${f.where}): "${f.text}" — ${f.why}`);
  }
}

// Grade distribution sanity — uncertainty must be visible where claims live
const grades: Record<string, number> = {};
for (const c of psychiatryCourses) {
  for (const fact of c.evidenceMap) grades[fact.grade] = (grades[fact.grade] ?? 0) + 1;
}
console.log("\nEvidence grade distribution (all graded facts):", JSON.stringify(grades));
const total = Object.values(grades).reduce((a, b) => a + b, 0);
const uncertainShare = (grades.uncertain ?? 0) / total;
console.log(
  `uncertain share: ${(uncertainShare * 100).toFixed(1)}% (hypotheses presented as open, not settled)`
);
