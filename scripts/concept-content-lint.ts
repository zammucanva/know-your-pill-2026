#!/usr/bin/env bun
/* ============================================================
   Concept-course content lint (declutter mission).

   Guards the concept template's RENDERED surface without ever
   touching the data files:

   1. PLACEHOLDER — no known placeholder/meta phrase may survive
      on the rendered surface (renderableCourse strips at render
      time; anything still matching afterwards is a failure —
      either the strip missed it or a new case needs explicit
      classification).
   2. DUPLICATES — near-identical (>80% shingle containment)
      rendered paragraphs fail unless allowlisted with a
      documented pedagogical rationale. examLens items and
      revision-card slices are excluded from the pool by design
      (they intentionally restate the lesson body at different
      depths — that is the product's teaching model).
   3. WALLS — no rendered paragraph over 120 words outside an
      intentional disclosure. Clamped sites (ConceptProse /
      clampSentences) and closed-disclosure homes (details,
      accordions, the print sheet) are exempt by design.

   The lint distinguishes:
   - source content (locked data files — read only, never edited)
   - presentation metadata (the strip map + clamps in the
     visibility lib)
   - legitimate clinical statements (everything that renders)
   - intentional repeated teaching content (the allowlist below)
   ============================================================ */

import { psychiatryCourses } from "../src/lib/kyp/data/psychiatry-courses";
import {
  renderableCourse,
  isConceptPlaceholderText,
} from "../src/lib/kyp/psychiatry-concept-visibility";
import type { PsychiatryCourse } from "../src/lib/kyp/data/psychiatry-courses/types";

const concept = psychiatryCourses.filter((c) => c.kind === "concept");

let failures = 0;
const fail = (msg: string) => {
  console.error(`  FAIL: ${msg}`);
  failures++;
};

/* ------------------------------------------------------------
   The rendered prose pool (per course) — the fields the concept
   template renders as prose blocks. `stripped` fields come from
   renderableCourse (post-strip); the rest render verbatim.
   examLens items + high-yield paragraphs are excluded from the
   DUPLICATE pool by design (see header).
   ------------------------------------------------------------ */

interface ProseItem {
  where: string;
  text: string;
  stripped: boolean;
  /** rendered fully visible without a clamp or disclosure? */
  unclamped: boolean;
}

function prosePool(course: PsychiatryCourse): ProseItem[] {
  const rc = renderableCourse(course);
  const items: ProseItem[] = [];
  const add = (where: string, text: string | undefined, stripped: boolean, unclamped: boolean) => {
    if (text && text.trim()) items.push({ where, text, stripped, unclamped });
  };
  // hero (unclamped, verbatim)
  add("summary", course.summary, false, true);
  add("tagline", course.tagline, false, true);
  course.lessonGroups.forEach((g, i) => add(`lessonGroups[${i}].description`, g.description, false, true));
  // lesson 1
  rc.quickFacts.forEach((f, i) => {
    add(`quickFacts[${i}].value`, f.value, false, true);
    add(`quickFacts[${i}].detail`, f.detail, true, false);
  });
  // lesson 2
  add("mechanism.summary", course.mechanism.summary, false, false); // behind "Read the full narrative"
  rc.etiology?.forEach((f, i) => add(`etiology[${i}].details`, f.details, true, false));
  // lesson 3
  if (rc.epidemiology) {
    add("epi.global", rc.epidemiology.globalPrevalence, true, false);
    add("epi.india", rc.epidemiology.indianPrevalence, true, false);
    add("epi.gender", rc.epidemiology.genderRatio, true, false);
    add("epi.age", rc.epidemiology.ageOfOnset, true, false);
  }
  rc.symptomClusters?.forEach((s, i) =>
    s.symptoms.forEach((sym, j) => add(`symptomClusters[${i}][${j}]`, sym, false, true))
  );
  rc.diagnosticCriteria?.forEach((d, i) => {
    d.criteria.forEach((c, j) => add(`diagnosticCriteria[${i}].criteria[${j}]`, c, false, true));
    add(`diagnosticCriteria[${i}].indianNote`, d.indianNote, true, false);
  });
  rc.differentialDiagnosis?.forEach((d, i) => {
    add(`differential[${i}].features`, d.distinguishingFeatures, false, true); // line-clamped table cells
    add(`differential[${i}].key`, d.keyDifferentiator, false, true);
  });
  rc.management?.forEach((m, i) => {
    add(`management[${i}].description`, m.description, true, false);
    add(`management[${i}].whenToUse`, m.whenToUse, true, false);
    add(`management[${i}].indianContext`, m.indianContext, true, false);
  });
  // patient guide
  add("pg.whatIsIt", rc.patientGuide.whatIsIt, true, false);
  add("pg.whatCausesIt", rc.patientGuide.whatCausesIt, true, false);
  add("pg.symptoms", rc.patientGuide.symptoms, true, false);
  add("pg.treatment", rc.patientGuide.treatment, true, false);
  rc.patientGuide.selfHelp.forEach((s, i) => add(`pg.selfHelp[${i}]`, s, false, true));
  rc.patientGuide.whenToSeekHelp.forEach((s, i) => add(`pg.whenToSeekHelp[${i}]`, s, false, true));
  // lesson 4
  add("ip.systemContext", rc.indianPractice.systemContext, true, false);
  add("ip.indianGuidelines", rc.indianPractice.indianGuidelines, true, false);
  add("ip.programmeContext", rc.indianPractice.programmeContext, true, false);
  add("ip.costConsiderations", rc.indianPractice.costConsiderations, true, false);
  add("ip.culturalConsiderations", rc.indianPractice.culturalConsiderations, true, false);
  rc.indianPractice.patientCounselling.forEach((p, i) => add(`ip.counselling[${i}]`, p, false, true));
  rc.commonMistakes?.forEach((m, i) => {
    add(`commonMistakes[${i}].why`, m.why, false, false); // accordion content
    add(`commonMistakes[${i}].correction`, m.correction, false, false);
  });
  // lesson 5 — clinical cases live inside accordions (disclosure)
  rc.clinicalCases?.forEach((k, i) => {
    add(`clinicalCases[${i}].presentation`, k.presentation, false, false);
    add(`clinicalCases[${i}].history`, k.history, false, false);
  });
  return items;
}

/* ------------------------------------------------------------
   CHECK 1 — placeholder phrases never render.
   The rendered surface is the renderableCourse output (stripped
   families) PLUS the verbatim families the template renders raw
   (hero, quick-fact values, criteria, symptoms, guide lists,
   counselling, cases — none of which matched the corpus scan).
   ------------------------------------------------------------ */
console.log("== 1. placeholder phrases must never render ==");
let placeholderHits = 0;
for (const course of concept) {
  const pool = prosePool(course);
  for (const item of pool) {
    if (isConceptPlaceholderText(item.text)) {
      // a stripped field still matching means the strip missed a clause;
      // a verbatim field matching means a new case needs classification
      fail(`${course.slug}.${item.where}: placeholder text renders: "${item.text.slice(0, 80)}…"`);
      placeholderHits++;
    }
  }
}
console.log(`  placeholder survivors on the rendered surface: ${placeholderHits}`);

/* ------------------------------------------------------------
   CHECK 2 — duplicate presentation paragraphs (>80% shingle
   containment). Judgment call #2: every allowlist entry needs a
   documented pedagogical rationale; an allowlist may never be
   created merely because a previous report mentioned a pair.
   ------------------------------------------------------------ */
console.log("== 2. duplicate rendered paragraphs (>80% containment) ==");

function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function shingles(words: string[]): Set<string> {
  const out = new Set<string>();
  for (let i = 0; i + 7 < words.length; i++) {
    out.add(words.slice(i, i + 8).join(" "));
  }
  return out;
}

/** containment of the smaller shingle set in the larger */
function containment(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  const [small, big] = a.size <= b.size ? [a, b] : [b, a];
  let hit = 0;
  for (const s of small) if (big.has(s)) hit++;
  return hit / small.size;
}

interface DupPair {
  a: string;
  b: string;
  similarity: number;
}

const DUPLICATE_ALLOWLIST: Array<{ pair: [string, string]; rationale: string }> = [
  // Every entry below was discovered by RUNNING this detector against the
  // reconstructed implementation, then both passages were inspected and
  // the duplication judged pedagogically intentional (Judgment call #2:
  // the lost implementation's allowlist did not survive and is NOT
  // recreated from memory — only from evidence). All pairs are
  // source-authored data repeats: the LOCKED course files carry the
  // same passage in two fields, each field rendering exactly once in
  // its own teaching context. The presentation layer never duplicates.
  {
    pair: ["recovered-memories.ip.counselling[1]", "recovered-memories.commonMistakes[4].correction"],
    rationale:
      "The expert-role framing ('memory-science educator — reconstructive memory, the corroboration " +
      "standard — never the memory's confirmer') is authored into BOTH the Indian-practice counselling " +
      "list (Lesson 4 context: families facing an accusation) and the common-mistakes correction for " +
      "the confirmer role. Same teaching, two learner contexts (counselling vs mistake correction).",
  },
  {
    pair: [
      "personality-disorder-treatment.diagnosticCriteria[0].criteria[0]",
      "personality-disorder-treatment.commonMistakes[1].why",
    ],
    rationale:
      "The ≥1-year treatment + ≥1-year follow-up duration rule is authored both as a working criterion " +
      "and as the trial-logic explanation of the 'gains too early' mistake. Criterion vs mistake-why " +
      "are different teaching acts on the same source rule.",
  },
  {
    pair: ["dynamic-psychotherapy.epi.india", "dynamic-psychotherapy.ip.systemContext"],
    rationale:
      "The therapist-scarcity description ('trained dynamic psychotherapists in India number in the low " +
      "hundreds…') is authored verbatim in both the epidemiology-India field and the Indian-practice " +
      "system context — it is the framing statistic for both lenses (who is affected / how the system " +
      "meets them).",
  },
  {
    pair: ["therapeutic-communities.epi.global", "therapeutic-communities.symptomClusters[0][0]"],
    rationale:
      "The 'severe personality disorder above all — the treatment of last resort' sentence is authored " +
      "inside the epidemiology passage AND re-surfaced as the first signal of the course's symptom " +
      "cluster (who the TC is for). Epidemiology context vs clinical-signal context.",
  },
  {
    pair: ["therapeutic-communities.pg.selfHelp[4]", "therapeutic-communities.ip.counselling[2]"],
    rationale:
      "The selection-honesty statement ('not for everyone and not for every week — the mania treated " +
      "first, the dependence detoxified first') is authored for both the patient-guide self-help card " +
      "(patient-facing) and the Indian-practice counselling point (clinician-facing).",
  },
  {
    pair: ["personality-assessment.differential[1].key", "personality-assessment.commonMistakes[1].correction"],
    rationale:
      "The inflexibility criterion ('disorder is the loss of the adaptive range… extremity alone is not " +
      "the diagnosis') is authored as both the differential's key assessment point and the correction " +
      "of the 'extremity = disorder' mistake — the same rule taught as a discriminator and as a fix.",
  },
  {
    pair: ["primary-care-psychiatry.quickFacts[2].detail", "primary-care-psychiatry.symptomClusters[0][0]"],
    rationale:
      "The Indian presenting-complaints quotations ('gas problem, saab' … 'my head becomes blank') are " +
      "authored in the quick-fact detail (the presentation lesson) and re-surfaced as the first " +
      "symptom-cluster signal (what the doctor hears).",
  },
  {
    pair: ["primary-care-psychiatry.mechanism.summary", "primary-care-psychiatry.diagnosticCriteria[0].criteria[0]"],
    rationale:
      "The trigger rule (repeated/unexplained physical complaint with a normal examination…) appears " +
      "inside the mechanism narrative and as the first working criterion — the mechanism explains WHY " +
      "the trigger exists, the criterion operationalises it.",
  },
  {
    pair: ["mh-services.quickFacts[4].detail", "mh-services.management[0].description"],
    rationale:
      "The capacity arithmetic ('last year's assessment count plus 20% allocated…') is authored in the " +
      "quick fact and inside the assessment-service management description — planning rule taught as " +
      "a fact and in its service context.",
  },
  {
    pair: ["refugee-mental-health.quickFacts[4].detail", "refugee-mental-health.mechanism.summary"],
    rationale:
      "The trauma-exposure list (material deprivation; war-like conditions; … witnessing violence) is " +
      "authored in the quick-fact detail and inside the mechanism's five-chamber narrative.",
  },
  {
    pair: ["refugee-mental-health.quickFacts[4].detail", "refugee-mental-health.etiology[0].details"],
    rationale:
      "The same trauma-exposure list is authored as the first etiology factor (what precedes the " +
      "outcome) and as the quick fact — etiology context vs fact context.",
  },
  {
    pair: ["voluntary-sector.epi.india", "voluntary-sector.ip.programmeContext"],
    rationale:
      "The family-founded schizophrenia-care societies description (the ARDSI-parallel tradition) is " +
      "authored in both the epidemiology-India field and the Indian-practice programme context — " +
      "the sector's size and its programme architecture share the same authored passage.",
  },
  {
    pair: ["voluntary-sector.management[3].indianContext", "voluntary-sector.ip.culturalConsiderations"],
    rationale:
      "The sector's vigilance-functions passage (Erwadi-type scandals, human-rights reports, PIL " +
      "tradition) is authored in the advocacy management's Indian context and inside the cultural " +
      "considerations — the watchdog role taught in both its action and its cultural frame.",
  },
];

const allowKey = (a: string, b: string) => [a, b].sort().join(" <-> ");
const allowlistKeys = new Set(DUPLICATE_ALLOWLIST.map((e) => allowKey(e.pair[0], e.pair[1])));

let dupCount = 0;
const unallowlisted: DupPair[] = [];
for (const course of concept) {
  const pool = prosePool(course).filter((p) => p.text.split(/\s+/).length >= 12);
  const sigs = pool.map((p) => ({ ...p, sh: shingles(normalize(p.text)) }));
  for (let i = 0; i < sigs.length; i++) {
    for (let j = i + 1; j < sigs.length; j++) {
      const sim = containment(sigs[i].sh, sigs[j].sh);
      if (sim > 0.8) {
        const key = allowKey(`${course.slug}.${sigs[i].where}`, `${course.slug}.${sigs[j].where}`);
        dupCount++;
        if (allowlistKeys.has(key)) {
          console.log(`  allowlisted: ${key} (${Math.round(sim * 100)}%)`);
        } else {
          unallowlisted.push({
            a: `${course.slug}.${sigs[i].where}`,
            b: `${course.slug}.${sigs[j].where}`,
            similarity: sim,
          });
        }
      }
    }
  }
}
for (const p of unallowlisted) {
  fail(`duplicate pair not allowlisted: ${p.a} <-> ${p.b} (${Math.round(p.similarity * 100)}%)`);
}
console.log(`  duplicate pairs found: ${dupCount} (allowlisted: ${dupCount - unallowlisted.length}, unallowlisted: ${unallowlisted.length})`);

/* ------------------------------------------------------------
   CHECK 3 — no >120-word rendered paragraphs outside
   intentional disclosures. `unclamped` items render fully
   visible with no clamp and no disclosure around them.
   ------------------------------------------------------------ */
console.log("== 3. >120-word walls outside intentional disclosures ==");
let wallCount = 0;
for (const course of concept) {
  for (const item of prosePool(course)) {
    if (!item.unclamped) continue;
    const words = item.text.trim().split(/\s+/).filter(Boolean).length;
    if (words > 120) {
      fail(`${course.slug}.${item.where}: ${words}-word wall renders fully visible`);
      wallCount++;
    }
  }
}
console.log(`  walls found: ${wallCount}`);

/* ------------------------------------------------------------
   Verdict
   ------------------------------------------------------------ */
if (failures > 0) {
  console.error(`\nCONTENT LINT: FAIL (${failures} problem${failures === 1 ? "" : "s"})`);
  process.exit(1);
}
console.log("\nCONTENT LINT: PASS");
console.log(`  courses checked: ${concept.length}`);
console.log(`  placeholder survivors: 0`);
console.log(`  duplicate pairs: ${dupCount} (all allowlisted with documented rationale)`);
console.log(`  walls: 0`);
