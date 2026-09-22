/**
 * Question difficulty — the deterministic three-tier model
 * (Phase 5 · Question Depth V1).
 *
 * ─── What this module is ───────────────────────────────────────────
 * Pure metadata over the EXISTING question architecture: it classifies
 * questions into reasoning tiers and maps learner types to a default
 * tier. It never edits a question, never rewrites an answer key, and
 * never becomes part of a question's identity — so every existing
 * question id, progress record, and Mistake Book entry stays valid.
 *
 * Tiers (harder reasoning, never harder vocabulary):
 *   FOUNDATION — recognition and core understanding.
 *   CLINICAL   — interpretation, application, mechanism→clinical
 *                reasoning, close distinctions.
 *   ADVANCED   — multi-step reasoning, plausible competing choices,
 *                prioritization, adverse-effect and interaction
 *                reasoning, nuanced comparisons.
 *
 * Determinism: every classifier below is a pure function of the
 * question text (authored MCQs) or the template id (stamped
 * questions). The same question always lands in the same tier —
 * pinned by tests/question-depth.test.ts across the whole pool.
 *
 * ─── Separation of concerns (5B, non-negotiable) ──────────────────
 * learnerType is PERSONALISATION (this module's only input).
 * role is AUTHORISATION (server-side, Prisma-backed) and is never
 * read here. The two are never merged: no field, parameter, or
 * return value of this module touches role or any auth surface.
 */

import type { PoolQuestion } from "./types";

export type DifficultyTier = "foundation" | "clinical" | "advanced";

/** A learner-facing difficulty selection ("all" = no filtering). */
export type DifficultySelection = DifficultyTier | "all";

export const DIFFICULTY_TIERS: readonly DifficultyTier[] = [
  "foundation",
  "clinical",
  "advanced",
] as const;

const TIER_LABELS: Record<DifficultyTier, string> = {
  foundation: "Foundation",
  clinical: "Clinical",
  advanced: "Advanced",
};

const TIER_DESCRIPTIONS: Record<DifficultyTier, string> = {
  foundation: "Recognition and core understanding",
  clinical: "Interpretation, application, and mechanism-to-clinical reasoning",
  advanced:
    "Multi-step reasoning, comparisons, prioritization, and interaction reasoning",
};

export function tierLabel(tier: DifficultyTier): string {
  return TIER_LABELS[tier];
}

export function tierDescription(tier: DifficultyTier): string {
  return TIER_DESCRIPTIONS[tier];
}

/* ============================================================
   Template-inherent tiers
   ============================================================ */

/**
 * Each stamp's reasoning depth is a fixed property of the template
 * itself (what the question asks the learner to DO), so it lives
 * here as configuration — not in the stamping logic.
 */
export const TEMPLATE_TIER: Readonly<Record<string, DifficultyTier>> = {
  /* recognition of a documented fact */
  "drug-class": "foundation",
  "class-member": "foundation",
  neurotransmitter: "foundation",
  "brain-region": "foundation",
  indication: "foundation",
  "common-side-effect": "foundation",
  "serious-side-effect": "foundation",
  "monitoring-parameter": "foundation",
  contraindication: "foundation",
  interaction: "foundation",
  "half-life": "foundation",
  "black-box-warning": "foundation",
  "active-metabolite": "foundation",
  /* one inferential step over documented facts */
  "mechanism-effect": "clinical",
  "shared-target": "clinical",
  "side-effect-association": "clinical",
  "primary-target": "clinical",
  /* multi-step differential reasoning over documented facts */
  "interaction-mechanism": "advanced",
  "class-vs-drug-effect": "advanced",
};

/* ============================================================
   Authored-MCQ classification (deterministic signal rules)
   ============================================================ */

/**
 * ADVANCED — comparative, differential, or prioritising asks
 * ("preferred over", "differs from", "…but only…", ", and why",
 * paradoxical dose comparisons, best-first-choice).
 */
const ADVANCED_PATTERNS: readonly RegExp[] = [
  /\b(preferred|preferable|favourite|favorite) over\b/i,
  /\bdiffer(s|ence|ences|ent)? (from|between)\b/i,
  /\bcompared (to|with)\b/i,
  /\bversus\b/i,
  /\bmore sedating than\b/i,
  /\b(less|more|fewer|worse|better|higher|safer)\s+[a-z-]+\s+than\b/i,
  /\bbut only\b/i,
  /,\s+and why\b/i,
  /\bbest first choice\b/i,
];

/**
 * CLINICAL — mechanism reasoning ("Why…", "How does…"), clinical
 * scenario application ("A 72-year-old…", "presents with…"),
 * management interpretation ("next step", "most likely"), close
 * single-class distinctions ("the ONLY SSRI…", "unique…"), and
 * two-part asks that add an interpretive step to a recall stem.
 */
const CLINICAL_PATTERNS: readonly RegExp[] = [
  /^why\b/i,
  /^how (does|do|should|can)\b/i,
  /\ba \d+[- ]year[- ]old\b/i,
  /\ba patient\b/i,
  /\ban elderly\b/i,
  /\bpresents (with|unconscious)\b/i,
  /\bdevelops\b/i,
  /\breports\b/i,
  /\bis (started|prescribed|switched)\b/i,
  /\bmost likely\b/i,
  /\bnext step\b/i,
  /\bwhat should you\b/i,
  /\bwhat is the (concern|risk|role)\b/i,
  /\bonly\b[^.?!]*\b(fda|effective|ssri|tca|antidepressant)\b/i,
  /\bunique\b/i,
  /\bbest explain\b/i,
  /,\s+and (which|what|how)\b/i,
  /\braises [a-z ]+levels\b/i,
];

/**
 * Classify an authored MCQ into its reasoning tier — a pure function
 * of the question text. Recognition stems ("Which…", "What is…",
 * "How many…") fall through to FOUNDATION.
 */
export function classifyAuthoredQuestion(question: string): DifficultyTier {
  for (const pattern of ADVANCED_PATTERNS) {
    if (pattern.test(question)) return "advanced";
  }
  for (const pattern of CLINICAL_PATTERNS) {
    if (pattern.test(question)) return "clinical";
  }
  return "foundation";
}

/** The tier of a pool question — template tier for stamps, signal
 *  classification for authored MCQs. Pure and total. */
export function resolveQuestionTier(
  question: Pick<PoolQuestion, "templateId" | "question">
): DifficultyTier {
  const templateTier =
    question.templateId === "authored"
      ? undefined
      : TEMPLATE_TIER[question.templateId];
  return templateTier ?? classifyAuthoredQuestion(question.question);
}

/* ============================================================
   Learner-type personalisation defaults (5B)
   ============================================================ */

/**
 * The nine educational learner types the auth layer whitelists
 * (/api/auth/role). Personalisation only — never authorisation.
 */
export type LearnerType =
  | "patient"
  | "student"
  | "medical_resident"
  | "medical_student"
  | "psychiatrist"
  | "mbbs_student"
  | "exam_aspirant"
  | "psychiatry_resident"
  | "healthcare_professional";

/**
 * Default difficulty tier per learner type:
 *
 *   Patient / General Learner                      → foundation
 *   Student / Medical Student / Student Doctor
 *   (mbbs_student) / Healthcare Professional       → clinical
 *   Medical Resident / Psychiatry Resident /
 *   Practicing Psychiatrist                        → advanced
 *
 * exam_aspirant (postgraduate-entrance preparation) defaults to
 * clinical — the same tier as medical students — because the tier
 * model is about reasoning depth, not exam intensity; aspirants can
 * raise it explicitly at any time.
 */
export const DEFAULT_DIFFICULTY_BY_LEARNER_TYPE: Readonly<
  Record<LearnerType, DifficultyTier>
> = {
  patient: "foundation",
  student: "clinical",
  medical_student: "clinical",
  mbbs_student: "clinical",
  healthcare_professional: "clinical",
  exam_aspirant: "clinical",
  medical_resident: "advanced",
  psychiatry_resident: "advanced",
  psychiatrist: "advanced",
};

/**
 * The personalisation default for a learner type. Unknown or absent
 * values (signed-out visitors) get "all" — personalisation is never
 * forced on someone who has not identified themselves.
 */
export function defaultDifficultyForLearnerType(
  learnerType: string | null | undefined
): DifficultySelection {
  if (learnerType && learnerType in DEFAULT_DIFFICULTY_BY_LEARNER_TYPE) {
    return DEFAULT_DIFFICULTY_BY_LEARNER_TYPE[
      learnerType as LearnerType
    ];
  }
  return "all";
}

/* ============================================================
   Tier filtering
   ============================================================ */

/** Filter a question pool by the selected tier ("all" keeps everything). */
export function filterByDifficulty<T extends { difficulty: DifficultyTier }>(
  pool: readonly T[],
  selection: DifficultySelection
): T[] {
  if (selection === "all") return [...pool];
  return pool.filter((q) => q.difficulty === selection);
}
