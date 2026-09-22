/**
 * KYP Psychiatry — learning view model.
 *
 * Presentation-layer logic ONLY. The note text is never rewritten; this
 * module maps the canonical sections onto the KYP learning phases
 * (UNDERSTAND / LEARN / INDIA / THINK / REMEMBER / PRACTICE / SOURCES)
 * and derives learner-facing metadata (priority labels, audience lenses,
 * related notes, curriculum positioning).
 */
import type {
  LearningPhase,
  NoteSection,
  PsychiatryGroup,
  PsychiatryNote,
} from "./types";

export type { LearningPhase } from "./types";

/* ─── Phase contract ────────────────────────────────────────────────── */

export const PHASE_ORDER: LearningPhase[] = [
  "understand",
  "learn",
  "india",
  "think",
  "remember",
  "practice",
  "sources",
];

export interface PhaseMeta {
  key: LearningPhase;
  label: string;
  /** Short learner-facing description of the phase intent. */
  intent: string;
}

export const PHASE_META: Record<LearningPhase, PhaseMeta> = {
  understand: {
    key: "understand",
    label: "Understand",
    intent: "Core concepts — what it is and what happens in the body and brain.",
  },
  learn: {
    key: "learn",
    label: "Learn",
    intent: "Detailed clinical content — epidemiology, causes and risk factors.",
  },
  india: {
    key: "india",
    label: "India in Practice",
    intent: "India-specific epidemiology, services, costs and counselling realities.",
  },
  think: {
    key: "think",
    label: "Think",
    intent: "Clinical reasoning — diagnosis, management and cases.",
  },
  remember: {
    key: "remember",
    label: "Remember",
    intent: "Active recall, FAQ and exam traps.",
  },
  practice: {
    key: "practice",
    label: "Practice",
    intent: "Self-test MCQs — check yourself before you move on.",
  },
  sources: {
    key: "sources",
    label: "Sources & References",
    intent: "Evidence sources and provenance for this lesson.",
  },
};

/** Disorder note (16 sections) → phase mapping by section number. */
const DISORDER_PHASE: Record<number, LearningPhase> = {
  1: "understand", // In one line + overview
  3: "understand", // Knowledge map
  4: "learn", // Epidemiology
  5: "learn", // Causes & risk factors
  6: "understand", // What happens in the body/brain
  7: "understand", // Symptoms
  8: "think", // Diagnosis
  9: "think", // Management
  10: "india", // Indian practice
  11: "think", // Clinical cases
  12: "remember", // Active recall
  13: "remember", // FAQ
  14: "remember", // Exam & student lens
  15: "sources", // Evidence sources
  16: "practice", // Self-test MCQs
};

/** Concept note (8 sections) → phase mapping by section number. */
const CONCEPT_PHASE: Record<number, LearningPhase> = {
  1: "understand", // In one line + overview
  3: "understand", // Knowledge map
  4: "learn", // Core ideas
  5: "think", // Why it matters clinically
  6: "india", // India lens
  7: "remember", // Active recall + FAQ
  // Section 8 is SHARED (evidence sources + self-test): its evidence
  // content renders inside the Sources & References disclosure; its
  // questions render in the Practice phase from the parsed MCQs.
  8: "sources",
};

/** Section 2 (Learning objectives) is rendered in the lesson header. */
export function sectionPhase(note: PsychiatryNote, section: NoteSection): LearningPhase | null {
  if (section.number === 2) return null; // objectives — hero layer
  const map = note.kind === "disorder" ? DISORDER_PHASE : CONCEPT_PHASE;
  return map[section.number] ?? null;
}

export interface LessonPhases {
  /** Ordered phases with their sections (empty phases omitted). */
  phases: Array<{ meta: PhaseMeta; sections: NoteSection[] }>;
  /** Learning objectives (section 2) if present. */
  objectives: NoteSection | null;
}

export function buildLessonPhases(note: PsychiatryNote): LessonPhases {
  const byPhase = new Map<LearningPhase, NoteSection[]>();
  let objectives: NoteSection | null = null;

  for (const section of note.sections) {
    if (section.number === 2) {
      objectives = section;
      continue;
    }
    const phase = sectionPhase(note, section);
    if (!phase) continue;
    const list = byPhase.get(phase) ?? [];
    list.push(section);
    byPhase.set(phase, list);
  }

  const phases = PHASE_ORDER.filter(
    (p) => (byPhase.get(p) ?? []).length > 0 || (p === "practice" && note.mcqs.length > 0)
  ).map((p) => ({
    meta: PHASE_META[p],
    sections: byPhase.get(p) ?? [],
  }));

  return { phases, objectives };
}

/* ─── Priority (learner-facing language, not internal codes) ─────────── */

export interface PriorityMeta {
  label: string;
  /** Learner-facing meaning. */
  hint: string;
}

export const PRIORITY_META: Record<string, PriorityMeta> = {
  P1: { label: "Core", hint: "Core clinical topic — the heart of the curriculum." },
  P2: { label: "Supporting", hint: "Supporting topic — deepens the core." },
  P3: { label: "Reference", hint: "Reference topic — optional context." },
};

export function priorityMeta(priority: string): PriorityMeta {
  return PRIORITY_META[priority] ?? PRIORITY_META.P2;
}

/* ─── Audience lenses (presentation-only personalisation) ───────────── */

export type AudienceLens = "patient" | "student" | "clinician";

export interface AudienceLensMeta {
  key: AudienceLens;
  label: string;
  /** Which phases the lens leads with. */
  entryPhases: LearningPhase[];
  blurb: string;
}

export const AUDIENCE_LENSES: AudienceLensMeta[] = [
  {
    key: "patient",
    label: "Patients & Families",
    entryPhases: ["understand", "india", "remember"],
    blurb: "Plain-language overview, what it means day to day, and answers to the questions families actually ask.",
  },
  {
    key: "student",
    label: "Medical Students",
    entryPhases: ["understand", "learn", "remember", "practice"],
    blurb: "Knowledge map, epidemiology, exam lens and self-testing — built for passing and for retaining.",
  },
  {
    key: "clinician",
    label: "Residents & Clinicians",
    entryPhases: ["think", "learn", "india"],
    blurb: "Clinical reasoning, management decisions, cases and high-yield distinctions.",
  },
];

/** Stable sort key: group letter then index order. */

/* ─── Progress keys (shared store, new course namespace) ─────────────── */

/**
 * Course slug used with the EXISTING progress store (progress-store.ts)
 * — not a second system: `psychiatry/<note-slug>` keys a CourseProgress
 * record in the same `kyp:progress:v1` namespace.
 */
export function courseSlug(noteSlug: string): string {
  return `psychiatry/${noteSlug}`;
}
