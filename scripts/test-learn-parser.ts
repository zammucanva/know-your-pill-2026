/**
 * Learn view-model contract test (runnable standalone):
 *   bun run scripts/test-learn-parser.ts
 *
 * Validates the presentation-layer mapping (no note text is rewritten):
 *  - phase assignment for disorder (16-section) and concept (8-section)
 *    notes covers every section except Learning objectives (hero layer)
 *  - priorities map to learner-facing language (Core/Supporting/Reference)
 *  - audience lenses exist for all three audiences
 *  - related notes come from the same index group
 *  - course slugs use the shared progress namespace
 */
import {
  AUDIENCE_LENSES,
  buildLessonPhases,
  courseSlug,
  PHASE_ORDER,
  priorityMeta,
  sectionPhase,
} from "../src/lib/oxford/learn";
import { relatedNotes } from "../src/lib/oxford/curriculum";
import { loadCorpus } from "../src/lib/oxford/loader";

let pass = 0;
let fail = 0;
function check(name: string, ok: boolean, detail = "") {
  if (ok) {
    pass++;
    console.log(`  ✓ ${name}`);
  } else {
    fail++;
    console.log(`  ✗ ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

console.log("KYP learn view-model contract:");

const corpus = loadCorpus();

// Every note: phases cover all non-objective sections exactly once
let coverageOk = true;
let phaseOrderOk = true;
for (const note of corpus.notes) {
  const lesson = buildLessonPhases(note);
  const covered: number[] = [];
  const inPhases = new Set<string>();
  for (const phase of lesson.phases) {
    for (const section of phase.sections) {
      covered.push(section.number);
      inPhases.add(`${phase.meta.key}:${section.id}`);
      if (phase.meta.key === "practice" && note.mcqs.length === 0) {
        // practice phase needs MCQs to render
        coverageOk = false;
      }
    }
  }
  const expected = note.sections.filter((s) => s.number !== 2).map((s) => s.number);
  if (JSON.stringify([...covered].sort((a, b) => a - b)) !== JSON.stringify(expected)) {
    coverageOk = false;
    console.log(`    coverage mismatch: ${note.frontmatter.slug}`);
  }
  // phase order follows PHASE_ORDER
  const order = lesson.phases.map((p) => PHASE_ORDER.indexOf(p.meta.key));
  if (order.some((v, i) => i > 0 && v <= order[i - 1])) phaseOrderOk = false;
  // objectives always section 2
  if (lesson.objectives?.number !== 2) coverageOk = false;
}
check("phases cover every non-objective section exactly once (all 109 notes)", coverageOk);
check("phases render in canonical order (understand → ... → sources)", phaseOrderOk);

// Disorder note mapping specifics (schizophrenia)
const schizophrenia = corpus.bySlug.get("schizophrenia")!;
const szLesson = buildLessonPhases(schizophrenia);
const szPhases = szLesson.phases.map((p) => p.meta.key);
check(
  "schizophrenia: india phase holds section 10 (Indian practice)",
  szPhases.includes("india") &&
    szLesson.phases.find((p) => p.meta.key === "india")!.sections.some((s) => s.number === 10)
);
check(
  "schizophrenia: think phase holds diagnosis (8), management (9), cases (11)",
  ["s8", "s9", "s11"].every((id) =>
    szLesson.phases.find((p) => p.meta.key === "think")!.sections.some((s) => s.id === id)
  )
);
check(
  "schizophrenia: sources phase holds evidence (15)",
  szLesson.phases.find((p) => p.meta.key === "sources")!.sections.some((s) => s.number === 15)
);

// Concept note mapping (couples-therapy: 8 sections)
const couples = corpus.bySlug.get("couples-therapy")!;
const ctLesson = buildLessonPhases(couples);
check(
  "couples-therapy: india phase holds section 6 (India lens)",
  ctLesson.phases.find((p) => p.meta.key === "india")!.sections.some((s) => s.number === 6)
);

// Priorities
check(
  "priority language: P1→Core, P2→Supporting, P3→Reference",
  priorityMeta("P1").label === "Core" &&
    priorityMeta("P2").label === "Supporting" &&
    priorityMeta("P3").label === "Reference"
);

// Audiences
check(
  "three audience lenses (patient/student/clinician)",
  AUDIENCE_LENSES.length === 3 &&
    ["patient", "student", "clinician"].every((k) => AUDIENCE_LENSES.some((l) => l.key === k))
);

// Related notes: same group
const related = relatedNotes(schizophrenia, 6);
const szGroup = corpus.groupBySlug.get("schizophrenia")!;
check(
  "related notes come from the same index group (never the note itself)",
  related.every((r) => szGroup.noteSlugs.includes(r.frontmatter.slug)) &&
    related.every((r) => r.frontmatter.slug !== "schizophrenia")
);

// Progress namespace
check(
  "course slugs share the single progress store namespace",
  courseSlug("schizophrenia") === "psychiatry/schizophrenia"
);

// sectionPhase: objectives excluded from phases
check(
  "section 2 (learning objectives) is excluded from phases (hero layer)",
  sectionPhase(schizophrenia, schizophrenia.sections[1]) === null
);

console.log(`\n${pass} pass / ${fail} fail`);
if (fail > 0) process.exit(1);
