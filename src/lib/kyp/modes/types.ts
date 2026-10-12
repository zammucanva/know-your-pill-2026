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
export interface McqDrillBlock extends BlockBase {
  kind: "mcq-drill";
  questions: {
    id: string;
    source: string;
    stem: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

/* ---------- Resident ---------- */
export interface PrescribingChecksBlock extends BlockBase {
  kind: "prescribing-checks";
  /** The same canonical contraindications MBBS shows, ordered absolute-first for a pre-prescribing check. */
  items: ContraindicationItem[];
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
  | MechanismWalkthroughBlock
  | PharmacologyCardBlock
  | IndicationsBlock
  | AdverseEffectsBlock
  | ContraindicationsBlock
  | PrescribingChecksBlock
  | MonitoringPlanBlock
  | VivaBlock
  | HighYieldRecallBlock
  | PyqConceptsBlock
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
