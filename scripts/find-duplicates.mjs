#!/usr/bin/env bun
/**
 * KYP duplicate-content detector (redesign E).
 *
 * Flags sentences/phrases of eight or more words repeated across
 * sections of the same page. Read-only: it NEVER edits, merges or
 * deletes content — the report exists so a human can review the
 * repetitions and decide.
 *
 * Usage:
 *   bun run scripts/find-duplicates.mjs <slug> [minWords]
 *   bun run scripts/find-duplicates.mjs psychiatric-phenomenology
 *
 * Output:
 *   reports/duplicates-<slug>.md
 */

import { getPsychiatryCourse } from "../src/lib/kyp/data/psychiatry-courses";
import { mkdirSync, writeFileSync } from "fs";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: bun run scripts/find-duplicates.mjs <slug> [minWords]");
  process.exit(1);
}
const MIN_WORDS = process.argv[3] ? parseInt(process.argv[3], 10) : 8;

const course = getPsychiatryCourse(slug);
if (!course) {
  console.error(`no psychiatry course found for slug "${slug}"`);
  process.exit(1);
}

/** Collect the learner-visible text of every section family. */
function sectionsOf(c) {
  const out = [];
  const add = (name, texts) => {
    const flat = (Array.isArray(texts) ? texts : [texts]).filter(Boolean);
    if (flat.length > 0) out.push({ name, texts: flat });
  };
  add("summary (hero)", [c.summary, c.tagline]);
  add("learning objectives", c.learningObjectives);
  add("quick facts", c.quickFacts.map((f) => `${f.label}: ${f.value}. ${f.detail ?? ""}`));
  add("mechanism summary", [c.mechanism.summary]);
  add("mechanism steps", c.mechanism.steps);
  add("brain regions", c.brainRegions.map((b) => `${b.name}: ${b.role}`));
  add("neurotransmitters", c.neurotransmitters.map((n) => `${n.name}: ${n.role}`));
  add("pathways", c.pathways.map((p) => [p.name, ...p.steps.map((s) => `${s.label} ${s.detail ?? ""}`), p.clinicalManifestation].join(". ")));
  add("timeline", c.timeline.map((t) => `${t.title}: ${t.description}`));
  add("epidemiology", c.epidemiology ? [c.epidemiology.globalPrevalence, c.epidemiology.indianPrevalence, c.epidemiology.lifetimeRisk, c.epidemiology.genderRatio, c.epidemiology.ageOfOnset, c.epidemiology.indianNotes] : []);
  add("etiology", (c.etiology ?? []).map((e) => `${e.factor}: ${e.details}`));
  add("symptom clusters", (c.symptomClusters ?? []).map((s) => `${s.category}: ${s.symptoms.join("; ")}`));
  add("diagnostic criteria", (c.diagnosticCriteria ?? []).map((d) => `${d.system}: ${d.criteria.join("; ")}`));
  add("differential", (c.differentialDiagnosis ?? []).map((d) => `${d.condition}: ${d.distinguishingFeatures} ${d.keyDifferentiator}`));
  add("management (applying the science)", (c.management ?? []).map((m) => `${m.name}: ${m.description} ${m.whenToUse} ${m.indianContext ?? ""}`));
  add("patient guide", [c.patientGuide.whatIsIt, c.patientGuide.whatCausesIt, c.patientGuide.symptoms, c.patientGuide.treatment, ...c.patientGuide.selfHelp]);
  add("indian practice", [
    c.indianPractice.indianGuidelines,
    c.indianPractice.systemContext,
    c.indianPractice.programmeContext,
    c.indianPractice.costConsiderations,
    c.indianPractice.culturalConsiderations,
    ...c.indianPractice.patientCounselling,
  ]);
  add("decision path", c.decisionPath ? c.decisionPath.nodes.map((n) => `${n.question} ${n.recommendation ?? ""} ${n.reasoning ?? ""}`) : []);
  add("common mistakes", (c.commonMistakes ?? []).map((m) => `${m.mistake} ${m.why} ${m.correction}`));
  add("exam lens", c.examLens ? [
    ...c.examLens.mbbs.viva, ...c.examLens.mbbs.practical, ...c.examLens.mbbs.longAnswer,
    ...c.examLens.neetPg.highYield, ...c.examLens.neetPg.pyqConcepts,
    ...c.examLens.inicet.clinicalReasoning, ...c.examLens.fmge.frequentlyTested,
    ...c.examLens.psychiatryResidency.advancedPearls,
  ] : []);
  add("clinical cases", (c.clinicalCases ?? []).map((k) => [k.title, k.presentation, k.initialPresentation ?? "", k.history, k.examination, k.diagnosis, k.management, k.outcome, ...k.teachingPoints].join(". ")));
  add("clinical pearls", c.clinicalPearls);
  add("high-yield summary (one-page revision)", c.highYieldSummary);
  add("active recall", c.activeRecallQuestions.map((q) => `${q.question} ${q.answer}`));
  add("faq", c.faqs.map((f) => `${f.question} ${f.answer}`));
  return out;
}

/** All n-word shingles of a normalised text. */
function shingles(text, n) {
  const words = text
    .toLowerCase()
    .replace(/[""'']/g, "'")
    .replace(/[—–]/g, " ")
    .replace(/[^a-z0-9' ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = [];
  for (let i = 0; i + n <= words.length; i++) {
    out.push(words.slice(i, i + n).join(" "));
  }
  return out;
}

const sections = sectionsOf(course);

// shingle -> [section, occurrence text]
const index = new Map();
for (const section of sections) {
  for (const text of section.texts) {
    for (const sh of shingles(text, MIN_WORDS)) {
      if (!index.has(sh)) index.set(sh, []);
      index.get(sh).push({ section: section.name, text });
    }
  }
}

// Collapse overlapping shingles into maximal repeated phrases:
// group consecutive shingles that repeat between the same section pair.
const repeats = [];
for (const [sh, occ] of index) {
  // a real repetition: the same 8-gram appears in 2+ DIFFERENT sections
  const sectionNames = new Set(occ.map((o) => o.section));
  if (sectionNames.size >= 2) {
    repeats.push({ phrase: sh, sections: [...sectionNames], count: occ.length });
  }
}

// merge overlapping phrases into maximal blocks
repeats.sort((a, b) => a.phrase.localeCompare(b.phrase));
const merged = [];
for (const r of repeats) {
  const last = merged[merged.length - 1];
  if (last && r.phrase.startsWith(last.phrase.split(" ").slice(0, -1).join(" ") + " ") === false && r.phrase.split(" ").slice(1).join(" ") === last.phrase) {
    // consecutive overlap — extend
    last.phrase = r.phrase;
    last.sections = [...new Set([...last.sections, ...r.sections])];
  } else {
    merged.push({ ...r });
  }
}

// rank by phrase length
merged.sort((a, b) => b.phrase.split(" ").length - a.phrase.split(" ").length);
const top = merged.slice(0, 20);

// High-frequency shorter phrases (3+ words appearing 4+ times across
// sections) — catches known repetition patterns whose exact 8-word
// context varies (e.g. "portable skill / no equipment / every language").
const phraseCounts = new Map();
for (const [sh, occ] of index) {
  const sectionNames = [...new Set(occ.map((o) => o.section))];
  if (sectionNames.length >= 2) continue; // already reported above
}
for (let n = 3; n <= 7; n++) {
  const sub = new Map();
  for (const section of sections) {
    const seenInSection = new Set();
    for (const text of section.texts) {
      for (const sh of shingles(text, n)) {
        if (seenInSection.has(sh)) continue;
        seenInSection.add(sh);
        if (!sub.has(sh)) sub.set(sh, new Map());
        sub.get(sh).set(section.name, true);
      }
    }
  }
  for (const [sh, secs] of sub) {
    if (secs.size >= 4) {
      const key = [...secs.keys()].sort().join("|") + "::" + sh;
      phraseCounts.set(sh, { phrase: sh, sections: [...secs.keys()], nSections: secs.size });
    }
  }
}
// keep maximal phrases only (drop a phrase fully contained in a longer one)
const phraseList = [...phraseCounts.values()].sort((a, b) => b.nSections - a.nSections || b.phrase.length - a.phrase.length);
const maximalPhrases = [];
for (const cand of phraseList) {
  const dominated = maximalPhrases.some(
    (m) => m.phrase.includes(cand.phrase) && m.nSections >= cand.nSections
  );
  if (!dominated) maximalPhrases.push(cand);
}
const topPhrases = maximalPhrases.slice(0, 15);

const lines = [];
lines.push(`# Duplicate-content report — ${course.title} (\`${slug}\`)`);
lines.push("");
lines.push(`Generated by \`scripts/find-duplicates.mjs\` (redesign E). Phrases of ${MIN_WORDS}+ words that repeat across **different sections** of this lesson. Nothing is auto-deleted — every finding below awaits human review.`);
lines.push("");
lines.push(`Total cross-section repeated phrases detected: **${merged.length}**. Top ${top.length}:`);
lines.push("");
top.forEach((r, i) => {
  lines.push(`### ${i + 1}. “${r.phrase}”`);
  lines.push(`- Repeats across: ${r.sections.join(" ↔ ")}`);
  lines.push("");
});

if (topPhrases.length > 0) {
  lines.push("## High-frequency shorter phrases (3–7 words, 4+ sections)");
  lines.push("");
  lines.push("The 8-word rule above misses known repetition patterns whose exact wording varies around a shared core phrase. These shorter phrases repeat across four or more sections:");
  lines.push("");
  topPhrases.forEach((r, i) => {
    lines.push(`### ${i + 1}. “${r.phrase}”`);
    lines.push(`- Repeats across ${r.nSections} sections: ${r.sections.join(", ")}`);
    lines.push("");
  });
}

// Known-duplicate verification (redesign E spec): the phrase family
// "portable skill / no equipment / every language" must be reported
// when present.
const knownProbes = ["portable psychiatric skill", "no equipment", "every language"];
lines.push("## Known-duplicate verification (spec-mandated probes)");
lines.push("");
for (const probe of knownProbes) {
  const occ = [];
  let total = 0;
  for (const section of sections) {
    let n = 0;
    for (const text of section.texts) {
      n += text.toLowerCase().split(probe).length - 1;
    }
    if (n > 0) {
      occ.push(`${section.name} (${n})`);
      total += n;
    }
  }
  lines.push(`- **“${probe}”** — ${total} occurrences across ${occ.length} sections: ${occ.join(", ") || "not found"}`);
}
lines.push("");

lines.push("## Interpretation guidance");
lines.push("");
lines.push("- Repetition between `active recall` / `high-yield summary` and the teaching sections is partially intentional (revision restates the lesson), but where the wording is IDENTICAL the revision layer adds no new retrieval cue.");
lines.push("- Repetition between `patient guide` and clinical sections is expected to a degree (plain-language restatement), again less so when verbatim.");
lines.push("- Verbatim repeats inside ONE section are not reported (this detector compares across sections only).");

mkdirSync("reports", { recursive: true });
const outPath = `reports/duplicates-${slug}.md`;
writeFileSync(outPath, lines.join("\n"), "utf-8");
console.log(`wrote ${outPath}: ${merged.length} cross-section repeats (top ${top.length} listed)`);
for (const r of top) {
  console.log(`  - [${r.sections.join(" <-> ")}] ${r.phrase.slice(0, 80)}...`);
}
