import type { BlockKind, ModeId } from "./types";

/**
 * Mode contracts: what each block is for, which canonical facts it may draw on,
 * which learner interaction it offers, and which canonical slots it needs.
 *
 * These are educational contracts, not content. A slot that the registry cannot
 * fill is reported as a missing fact; nothing is generated to fill it.
 */

/** Coarse families of canonical fact, derived from where the fact lives. */
export type FactCategory =
  | "patient-guide"
  | "patient-summary"
  | "mechanism"
  | "clinical-use"
  | "safety"
  | "interactions"
  | "interaction-names"
  | "exam-mbbs"
  | "exam-neet"
  | "mcq"
  | "case"
  | "decision"
  | "pitfalls";

/** Which modes may present facts of each category. Shared categories are listed under several modes. */
export const CATEGORY_MODES: Record<FactCategory, readonly ModeId[]> = {
  "patient-guide": ["patient"],
  "patient-summary": ["patient"],
  mechanism: ["mbbs", "resident"],
  "clinical-use": ["mbbs"],
  safety: ["mbbs", "resident"],
  interactions: ["mbbs", "resident"],
  "interaction-names": ["patient", "mbbs", "resident"],
  "exam-mbbs": ["mbbs"],
  "exam-neet": ["neetPg"],
  mcq: ["neetPg"],
  case: ["resident"],
  decision: ["resident"],
  pitfalls: ["resident"],
};

/** Category of a canonical path (a `stahl:<id>` source is an authored MCQ). */
export function categoryOfSource(source: string): FactCategory {
  if (source.startsWith("stahl:")) return "mcq";
  if (source.startsWith("patientGuide.")) return "patient-guide";
  if (source === "patientExplanation" || source.startsWith("patientEducationPoints")) return "patient-summary";
  if (source.startsWith("mechanism.")) return "mechanism";
  if (source.startsWith("indications[")) return "clinical-use";
  if (/^interactions\[\d+\]\.drug$/.test(source)) return "interaction-names";
  if (source.startsWith("interactions[")) return "interactions";
  if (source.startsWith("patientMode.")) return "patient-summary";
  if (/^(contraindications|seriousSideEffects|commonSideEffects|monitoring|blackBoxWarnings)\[/.test(source)) return "safety";
  if (source.startsWith("examLens.mbbs")) return "exam-mbbs";
  if (source.startsWith("examLens.neetPg")) return "exam-neet";
  if (source.startsWith("clinicalCases")) return "case";
  if (source.startsWith("clinicalDecisionPath")) return "decision";
  if (source.startsWith("commonMistakes") || source.startsWith("whenNotToUse")) return "pitfalls";
  throw new Error(`no fact category for source "${source}"`);
}

/** What the learner does with a block. Interactive kinds change state; the others are read-only. */
export type InteractionKind =
  | "act-first" // ordered so the learner sees what to act on first
  | "read"
  | "reference"
  | "checklist" // learner ticks items to remember
  | "stepper" // learner advances through ordered steps
  | "reveal" // learner attempts, then reveals
  | "recall"
  | "commit-answer" // learner commits to one answer, then sees the explanation
  | "staged-reveal" // case unfolds stage by stage
  | "branching" // learner follows decision branches
  | "audit-checklist" // learner ticks each pre-prescribing check as done
  | "filter" // learner narrows a list by severity or search
  | "personal-list"; // learner marks which listed items apply to them

export const INTERACTIVE_KINDS: ReadonlySet<InteractionKind> = new Set([
  "checklist",
  "stepper",
  "reveal",
  "commit-answer",
  "staged-reveal",
  "branching",
  "audit-checklist",
  "filter",
  "personal-list",
]);

/** A canonical slot a block needs. `anyOf` lists acceptable paths; the first is the expected one. */
export interface Slot {
  label: string;
  anyOf: readonly string[];
  /** Optional slots only count towards `minOptional`. */
  optional?: boolean;
}

export interface BlockContract {
  kind: BlockKind;
  mode: ModeId;
  interaction: InteractionKind;
  /** One line: the pedagogy this block adds on top of the shared facts. */
  pedagogy: string;
  slots: readonly Slot[];
  /** At least this many optional slots must be filled (default 0). */
  minOptional?: number;
}

const g = "patientGuide.";
export const BLOCK_CONTRACTS: Record<BlockKind, BlockContract> = {
  "plain-summary": {
    kind: "plain-summary",
    mode: "patient",
    interaction: "read",
    pedagogy: "Plain-language explanation of what the medicine is.",
    slots: [{ label: "plain summary", anyOf: [`${g}whatIsThis`, "patientExplanation"] }],
  },
  "key-points": {
    kind: "key-points",
    mode: "patient",
    interaction: "read",
    pedagogy: "Practical use and safety reminders.",
    slots: [{ label: "key points", anyOf: [`${g}keyReminders[0]`, "patientEducationPoints[0]"] }],
  },
  "urgent-help": {
    kind: "urgent-help",
    mode: "patient",
    interaction: "act-first",
    pedagogy: "When to seek help, shown before the explanation.",
    slots: [
      { label: "urgent-help intro", anyOf: [`${g}urgentHelp.intro`] },
      { label: "urgent-help signs", anyOf: [`${g}urgentHelp.signs[0]`] },
      { label: "urgent-help action", anyOf: [`${g}urgentHelp.action`] },
    ],
  },
  "patient-interactions": {
    kind: "patient-interactions",
    mode: "patient",
    interaction: "personal-list",
    pedagogy: "Existing patient wording about other medicines, labelled by origin, plus the guide's own interaction names to tick and show a pharmacist. It never checks the patient's medicines.",
    slots: [
      { label: "patient interaction wording", anyOf: ["patientGuide.interactions", "patientMode.interactions"] },
      { label: "interaction names", anyOf: ["interactions[0].drug"] },
    ],
  },
  "tell-your-doctor": {
    kind: "tell-your-doctor",
    mode: "patient",
    interaction: "checklist",
    pedagogy: "Things to mention to a prescriber or pharmacist, tickable as a personal reminder.",
    slots: [{ label: "tell-your-doctor list", anyOf: [`${g}tellYourDoctor[0]`] }],
  },
  "mechanism-walkthrough": {
    kind: "mechanism-walkthrough",
    mode: "mbbs",
    interaction: "stepper",
    pedagogy: "Target-to-effect reasoning, one step at a time.",
    slots: [
      { label: "molecular target", anyOf: ["mechanism.molecularTarget"] },
      { label: "net effect", anyOf: ["mechanism.effect"] },
      { label: "mechanism steps", anyOf: ["mechanism.steps[0]"] },
    ],
  },
  "pharmacology-card": {
    kind: "pharmacology-card",
    mode: "mbbs",
    interaction: "reference",
    pedagogy: "Pharmacokinetic reference facts.",
    slots: [
      { label: "molecular target", anyOf: ["mechanism.molecularTarget"], optional: true },
      { label: "half-life", anyOf: ["mechanism.halfLife"], optional: true },
      { label: "active metabolite", anyOf: ["mechanism.activeMetabolite"], optional: true },
      { label: "metabolism", anyOf: ["mechanism.metabolism"], optional: true },
      { label: "excretion", anyOf: ["mechanism.excretion"], optional: true },
    ],
    minOptional: 3,
  },
  indications: {
    kind: "indications",
    mode: "mbbs",
    interaction: "read",
    pedagogy: "Indications with approval status (FDA-approved, off-label, guideline).",
    slots: [{ label: "indications", anyOf: ["indications[0].name"] }],
  },
  "adverse-effects": {
    kind: "adverse-effects",
    mode: "mbbs",
    interaction: "read",
    pedagogy: "Serious and common adverse effects with severity and frequency.",
    slots: [{ label: "serious adverse effects", anyOf: ["seriousSideEffects[0].name"] }],
  },
  contraindications: {
    kind: "contraindications",
    mode: "mbbs",
    interaction: "read",
    pedagogy: "Contraindications with their rationale.",
    slots: [{ label: "contraindications", anyOf: ["contraindications[0].name"] }],
  },
  "prescribing-checks": {
    kind: "prescribing-checks",
    mode: "resident",
    interaction: "audit-checklist",
    pedagogy: "The same contraindications, ordered absolute-first, as checks to clear before prescribing.",
    slots: [{ label: "contraindications", anyOf: ["contraindications[0].name"] }],
  },
  interactions: {
    kind: "interactions",
    mode: "resident",
    interaction: "filter",
    pedagogy: "Recorded drug interactions with canonical severity, mechanism and action; filter by severity or search by drug.",
    slots: [{ label: "interaction records", anyOf: ["interactions[0].drug"] }],
  },
  "monitoring-plan": {
    kind: "monitoring-plan",
    mode: "resident",
    interaction: "read",
    pedagogy: "What to monitor, how often and why, with the boxed warnings.",
    slots: [{ label: "monitoring parameters", anyOf: ["monitoring[0].parameter"] }],
  },
  viva: {
    kind: "viva",
    mode: "mbbs",
    interaction: "reveal",
    pedagogy: "Viva prompts: attempt first, then reveal; statements are shown whole as key facts.",
    slots: [{ label: "viva items", anyOf: ["examLens.mbbs.viva[0]"] }],
  },
  "high-yield-recall": {
    kind: "high-yield-recall",
    mode: "neetPg",
    interaction: "recall",
    pedagogy: "High-yield facts for recall.",
    slots: [{ label: "high-yield list", anyOf: ["examLens.neetPg.highYield[0]"] }],
  },
  "pyq-concepts": {
    kind: "pyq-concepts",
    mode: "neetPg",
    interaction: "read",
    pedagogy: "Exam concepts the guide notes.",
    slots: [{ label: "exam concepts", anyOf: ["examLens.neetPg.pyqConcepts[0]"] }],
  },
  "mcq-drill": {
    kind: "mcq-drill",
    mode: "neetPg",
    interaction: "commit-answer",
    pedagogy: "Commit to an answer, then read the authored explanation.",
    slots: [{ label: "authored MCQs", anyOf: ["stahl:mcq"] }],
  },
  "case-reasoner": {
    kind: "case-reasoner",
    mode: "resident",
    interaction: "staged-reveal",
    pedagogy: "A patient case that unfolds; the diagnosis is withheld until revealed.",
    slots: ["title", "presentation", "history", "examination", "diagnosis", "rationale", "management"].map((f) => ({
      label: `case ${f}`,
      anyOf: [`clinicalCases[0].${f}`],
    })),
  },
  "decision-path": {
    kind: "decision-path",
    mode: "resident",
    interaction: "branching",
    pedagogy: "Walk the decision pathway branch by branch.",
    slots: [
      { label: "decision path title", anyOf: ["clinicalDecisionPath.title"] },
      { label: "decision path nodes", anyOf: ["clinicalDecisionPath.nodes[0].question"] },
    ],
  },
  pitfalls: {
    kind: "pitfalls",
    mode: "resident",
    interaction: "read",
    pedagogy: "Common clinical errors and when not to use the medicine.",
    slots: [{ label: "errors or contraindicated scenarios", anyOf: ["commonMistakes[0].mistake", "whenNotToUse[0].scenario"] }],
  },
};

/**
 * Interactive kinds a mode offers that no other mode offers. A mode is only
 * "genuinely distinct" in interaction if it has at least one.
 */
export function distinctiveInteractions(builtKindsByMode: Record<ModeId, readonly BlockKind[]>): Record<ModeId, InteractionKind[]> {
  const modes = Object.keys(builtKindsByMode) as ModeId[];
  const kindsOf = (m: ModeId) => new Set(builtKindsByMode[m].map((k) => BLOCK_CONTRACTS[k].interaction));
  const out = {} as Record<ModeId, InteractionKind[]>;
  for (const m of modes) {
    const others = new Set<InteractionKind>();
    for (const o of modes) if (o !== m) kindsOf(o).forEach((k) => others.add(k));
    out[m] = [...kindsOf(m)].filter((k) => INTERACTIVE_KINDS.has(k) && !others.has(k));
  }
  return out;
}
