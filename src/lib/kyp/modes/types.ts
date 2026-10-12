import type { GuidedLearningMode } from "@/lib/kyp/data";

/**
 * Four-mode presentation layer: types.
 *
 * The canonical drug registry (src/lib/kyp/data/drugs/<slug>.ts) stays the
 * single source of clinical facts. A ModeLens is a DERIVED view of those
 * facts shaped for one learning mode. Every piece of text carries the
 * canonical path it was read from (`source`), so a validator can prove a
 * lens never states anything the registry does not, and that the same fact
 * shown in two modes is the same string.
 *
 * Nothing here approves clinical content. All blocks are produced as
 * "pending-clinical-review"; an approval would have to come from a separate,
 * explicit review record (none exists yet).
 */

export type ModeId = GuidedLearningMode;

/** The only review state this layer can produce. */
export type ReviewState = "pending-clinical-review";

/** A string with the canonical location it was read from. */
export interface Sourced {
  text: string;
  /** Dotted/bracket path into the Drug (or PatientGuide / `stahl:<id>`). */
  source: string;
}

export interface BlockBase {
  review: ReviewState;
}

/* ---------- Patient ---------- */
export interface PlainSummaryBlock extends BlockBase {
  kind: "plain-summary";
  summary: Sourced;
}
export interface KeyPointsBlock extends BlockBase {
  kind: "key-points";
  points: Sourced[];
}
export interface UrgentHelpBlock extends BlockBase {
  kind: "urgent-help";
  intro: Sourced;
  signs: Sourced[];
  action: Sourced;
}
export interface PatientInteractionsBlock extends BlockBase {
  kind: "patient-interactions";
  /** The existing patient-facing wording, verbatim, with its origin. Null when the registry has none. */
  statement: { text: Sourced; origin: "authored-guide" | "authored-registry" | "template" } | null;
  /** Canonical interaction names (clinical terms), verbatim. Empty when none are recorded. */
  names: Sourced[];
}
/** Patient Guide how-to-take sections, verbatim. Guide-only: there is no registry fallback. */
export interface PatientHowToTakeBlock extends BlockBase {
  kind: "patient-how-to-take";
  usuallyTaken: Sourced | null;
  missedDose: Sourced | null;
  stopping: Sourced | null;
  monitoring: Sourced | null;
  timeline: Sourced | null;
}
/**
 * Patient side-effect learning. `guide`: the Patient Guide structured text (authored, 12 medicines).
 * `registry`: the registry single patient-wording string (all medicines), verbatim.
 */
export interface PatientSideEffectsBlock extends BlockBase {
  kind: "patient-side-effects";
  source: "guide" | "registry";
  intro: Sourced | null;
  common: Sourced[];
  note: Sourced | null;
  importantIntro: Sourced | null;
  important: { name: Sourced; whatItMeans: Sourced; whatToDo: Sourced }[];
  registryText: Sourced | null;
}
export interface TellDoctorBlock extends BlockBase {
  kind: "tell-your-doctor";
  items: Sourced[];
}

/* ---------- MBBS ---------- */
export interface MechanismWalkthroughBlock extends BlockBase {
  kind: "mechanism-walkthrough";
  target: Sourced;
  steps: Sourced[];
  effect: Sourced;
}
export interface PharmacologyCardBlock extends BlockBase {
  kind: "pharmacology-card";
  rows: { label: string; value: Sourced }[];
}
/**
 * One viva-list entry, classified by what the text actually is:
 *  - qa: a question whose answer is the trailing parenthesised group (revealable)
 *  - statement: a fact or note shown whole (no hidden answer is invented)
 *  - needs-review: malformed or ambiguous text, shown whole and failing the gate
 */
export type VivaItem =
  | { type: "qa"; full: Sourced; question: string; answer: string }
  | { type: "statement"; full: Sourced }
  | { type: "needs-review"; full: Sourced; reason: VivaReviewReason };

export type VivaReviewReason = "empty" | "unbalanced-parentheses" | "question-without-parsable-answer";

export interface VivaBlock extends BlockBase {
  kind: "viva";
  items: VivaItem[];
}

/** MBBS exam preparation: practical tasks and long-answer prompts, verbatim. No answer keys exist for these. */
export interface ExamPrepBlock extends BlockBase {
  kind: "exam-prep";
  practical: Sourced[];
  longAnswer: Sourced[];
}
export interface IndicationsBlock extends BlockBase {
  kind: "indications";
  items: {
    name: Sourced;
    status: "fda-approved" | "off-label" | "guideline";
    description: Sourced;
    ageGroup: Sourced | null;
  }[];
}
export interface AdverseEffect {
  name: Sourced;
  severity: "mild" | "moderate" | "severe" | "life-threatening";
  frequency: "very-common" | "common" | "uncommon" | "rare" | "unknown";
  description: Sourced;
  management: Sourced | null;
}
export interface AdverseEffectsBlock extends BlockBase {
  kind: "adverse-effects";
  serious: AdverseEffect[];
  common: AdverseEffect[];
}
export interface ContraindicationItem {
  name: Sourced;
  severity: "absolute" | "relative";
  rationale: Sourced;
}
export interface ContraindicationsBlock extends BlockBase {
  kind: "contraindications";
  items: ContraindicationItem[];
}

/* ---------- NEET PG ---------- */
export interface HighYieldRecallBlock extends BlockBase {
  kind: "high-yield-recall";
  items: Sourced[];
}
export interface PyqConceptsBlock extends BlockBase {
  kind: "pyq-concepts";
  items: Sourced[];
}
/** Where an authored question comes from. Never generated here. */
export type McqOrigin = "authored-quiz" | "stahl-bank";
/**
 * A topic taken from the question's own authored metadata, never inferred from its wording.
 * `stahl-topic`: the Stahl bank's `topic` field. `quiz-section`: the page section an authored quiz is placed
 * after (only where that section id names a topic).
 */
export interface McqCategory {
  id: string;
  label: string;
  basis: "stahl-topic" | "quiz-section";
}
export interface McqQuestion {
  id: string;
  /** Path to the stem for a quiz (`microQuizzes[i].question`), or `stahl:<id>`. */
  source: string;
  origin: McqOrigin;
  stem: string;
  options: string[];
  correctIndex: number;
  /** The authored rationale, or null when none is recorded (never invented). */
  explanation: string | null;
  /** Authored topic, or null when the question carries no reliable one (it is then not grouped). */
  category: McqCategory | null;
}
export interface McqDrillBlock extends BlockBase {
  kind: "mcq-drill";
  questions: McqQuestion[];
  /** Authored questions skipped because they were malformed (reported, never repaired). */
  skipped: number;
}

/* ---------- Resident ---------- */
export interface PrescribingChecksBlock extends BlockBase {
  kind: "prescribing-checks";
  /** The same canonical contraindications MBBS shows, ordered absolute-first for a pre-prescribing check. */
  items: ContraindicationItem[];
}
export type InteractionSeverity = "contraindicated" | "major" | "moderate" | "minor";
export interface InteractionRecord {
  drug: Sourced;
  /** Canonical severity enum, shown as recorded. Never inferred. */
  severity: InteractionSeverity;
  mechanism: Sourced;
  action: Sourced;
}
/**
 * `listed`: one or more complete records. `empty`: the registry holds an explicit empty
 * list (recorded as none listed, which is NOT a claim that no interactions exist).
 * An absent field is not a state here: it is an UnavailableBlock.
 */
export type InteractionsState = "listed" | "empty";
export interface InteractionsBlock extends BlockBase {
  kind: "interactions";
  state: InteractionsState;
  items: InteractionRecord[];
  /** Canonical records skipped because a required field was blank (reported, not repaired). */
  incomplete: number;
}
/** What the registry holds for each clinical-reasoning input. States are explicit; counts are derived, never inferred. */
export type DataState = "listed" | "empty" | "absent";
export interface ClinicalSummaryBlock extends BlockBase {
  kind: "clinical-summary";
  contraindications: { state: DataState; count: number; absolute: number };
  interactions: { state: DataState; count: number; contraindicated: number };
  monitoring: { state: DataState; count: number };
  boxedWarnings: { state: DataState; count: number };
  decisionPath: { state: "present" | "absent" };
  pitfalls: { state: "present" | "absent" };
  /** Canonical paths the counts were derived from. */
  derivedFrom: string[];
}
export interface MonitoringPlanBlock extends BlockBase {
  kind: "monitoring-plan";
  monitoring: { parameter: Sourced; frequency: Sourced; rationale: Sourced }[];
  boxedWarnings: { title: Sourced; text: Sourced }[];
}
export interface CaseReasonerBlock extends BlockBase {
  kind: "case-reasoner";
  title: Sourced;
  presentation: Sourced;
  history: Sourced;
  examination: Sourced;
  diagnosis: Sourced;
  rationale: Sourced;
  management: Sourced;
}
export interface DecisionPathBlock extends BlockBase {
  kind: "decision-path";
  title: Sourced;
  startNodeId: string;
  nodes: {
    id: string;
    question: Sourced;
    branches: { label: string; next: string }[];
    recommendation: Sourced | null;
    reasoning: Sourced | null;
  }[];
}
export interface PitfallsBlock extends BlockBase {
  kind: "pitfalls";
  mistakes: { mistake: Sourced; why: Sourced; correction: Sourced }[];
  whenNotToUse: { scenario: Sourced; reason: Sourced; alternative: Sourced | null }[];
}

export type LensBlock =
  | PlainSummaryBlock
  | KeyPointsBlock
  | UrgentHelpBlock
  | TellDoctorBlock
  | PatientInteractionsBlock
  | MechanismWalkthroughBlock
  | PharmacologyCardBlock
  | IndicationsBlock
  | AdverseEffectsBlock
  | ContraindicationsBlock
  | PrescribingChecksBlock
  | InteractionsBlock
  | MonitoringPlanBlock
  | VivaBlock
  | HighYieldRecallBlock
  | PyqConceptsBlock
  | ExamPrepBlock
  | PatientHowToTakeBlock
  | PatientSideEffectsBlock
  | ClinicalSummaryBlock
  | McqDrillBlock
  | CaseReasonerBlock
  | DecisionPathBlock
  | PitfallsBlock;

export type BlockKind = LensBlock["kind"];

/** A block the registry could not fill. Shown honestly, never invented. */
export interface UnavailableBlock {
  kind: BlockKind;
  reason: string;
}

export interface ModeLens {
  mode: ModeId;
  blocks: LensBlock[];
  unavailable: UnavailableBlock[];
}

export type ModeLensSet = Record<ModeId, ModeLens>;

export interface ModeSpec {
  mode: ModeId;
  label: string;
  audience: string;
  objective: string;
  /** Ordered block kinds this mode's layout is made of. */
  blocks: readonly BlockKind[];
  /** The learner interaction that is specific to this mode. */
  interaction: string;
}
