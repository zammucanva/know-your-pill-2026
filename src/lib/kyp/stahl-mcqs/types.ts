/**
 * Stahl's Prescriber-Guide Clinical MCQ system — schema (Phase 6).
 *
 * SOURCE CHAIN (non-negotiable):
 *   Stahl's Prescriber's Guide (paraphrased, locked in drug data)
 *     → canonical PrescriberGuide record (src/lib/kyp/data/drugs/*)
 *       → FactRef coordinates (drug · zone · index)
 *         → authored question (stem + explanation + distractor refs)
 *           → resolved MCQ (options are verbatim canonical strings)
 *
 * An option may only be:
 *   - "fact"     — a verbatim string resolved from a canonical
 *                  PrescriberGuide record by coordinates. The text can
 *                  never drift from the source.
 *   - "drug"     — a real drug's genericName from the registry.
 *   - "negation" — an authored statement that is the logical inverse of
 *                  the correct answer's evidence. Never the correct
 *                  answer. Used sparingly for "which action" stems.
 *
 * Nothing else can enter a question. No doses, half-lives, frequencies
 * or mechanisms may be typed into this bank directly — if a fact is not
 * in the canonical data, the question does not exist.
 */

import type { DrugClassId } from "@/lib/kyp/data/types";

/* ============================================================
   Zones — the PrescriberGuide record's own structure
   ============================================================ */

/** Every PrescriberGuide field a fact can be referenced from. */
export type StahlZoneId =
  // Zone 1 — Therapeutics
  | "onsetTimeline"
  | "ifItWorks"
  | "ifItDoesNotWork"
  | "augmentationCombos"
  | "testsBeforeStarting"
  // Zone 2 — Side effects
  | "sideEffectLogic"
  | "sideEffectManagement"
  | "sideEffectRescue"
  | "weightGain"
  | "sedation"
  // Zone 3 — Dosing & use
  | "dosing"
  | "dosageForms"
  | "dosingTips"
  | "overdose"
  | "longTermUse"
  | "habitForming"
  | "howToStop"
  | "pharmacokinetics"
  | "doNotUse"
  // Zone 4 — Special populations
  | "specialPopulations"
  // Zone 5 — The art of psychopharmacology
  | "potentialAdvantages"
  | "potentialDisadvantages"
  | "primaryTargetSymptoms"
  | "pearls";

/** Zone metadata: display label + the drug-page anchor it lives under. */
export interface StahlZoneMeta {
  id: StahlZoneId;
  label: string;
  /** Anchor id on the drug course page (verified by drug-course-sections). */
  anchor: string;
}

/* ============================================================
   Topics — the filter taxonomy (only data-supported categories)
   ============================================================ */

export type StahlTopicId =
  | "clinical-use"
  | "dosing-titration"
  | "adverse-effects"
  | "pharmacokinetics"
  | "interactions"
  | "monitoring"
  | "discontinuation"
  | "special-populations"
  | "contraindications"
  | "clinical-pearls";

export interface StahlTopicMeta {
  id: StahlTopicId;
  label: string;
  /** Which zones may feed questions with this topic (validated). */
  zones: StahlZoneId[];
}

/* ============================================================
   Difficulty + question type
   ============================================================ */

export type StahlDifficulty = "foundational" | "intermediate" | "advanced";

/** The asking shape of a question — the "question type" filter. */
export type StahlQuestionType =
  /** Clinical vignette → pick the documented consideration. */
  | "clinical-application"
  /** Patient profile → pick the drug the guide documents for it. */
  | "drug-selection"
  /** Structured dosing/titration fact (start / target / max / taper). */
  | "dosing-detail"
  /** Documented class-level or receptor-level distinction. */
  | "class-distinction";

/* ============================================================
   Fact references — lossless coordinates into canonical data
   ============================================================ */

export interface FactRef {
  /** Drug slug — must exist in the registry. */
  slug: string;
  zone: StahlZoneId;
  /** Index into the zone array / dosing row / special population. */
  index: number;
  /** dosing rows only: which field of the row. */
  field?: "indication" | "starting" | "target" | "max" | "titration";
  /** specialPopulations: guidance bullet index. dosing: note index. */
  subIndex?: number;
}

/* ============================================================
   Authored (pre-assembly) question
   ============================================================ */

export type OptionSpec =
  | { kind: "fact"; ref: FactRef }
  | { kind: "drug"; slug: string }
  | { kind: "negation"; text: string };

export interface AuthoredStahlMcq {
  /** Asked-about drug slug (the question's subject + source drug). */
  drug: string;
  topic: StahlTopicId;
  difficulty: StahlDifficulty;
  type: StahlQuestionType;
  /** Question stem (authored, clinically framed). */
  stem: string;
  /** The correct answer (position assigned at assembly). */
  correct: OptionSpec;
  /** Exactly 3 distractors. */
  distractors: [OptionSpec, OptionSpec, OptionSpec];
  /**
   * The canonical fact that justifies the answer. Defaults to the
   * correct option's own fact. REQUIRED (explicit) when the correct
   * option is a drug name — the evidence is the pearl that names it.
   */
  evidenceRef?: FactRef;
  /** Educational explanation — why the answer is correct, Stahl concept. */
  explanation: string;
  /** Optional free-form tags for future filtering. */
  tags?: string[];
}

/* ============================================================
   Resolved (post-assembly) MCQ — what engines consume
   ============================================================ */

export interface StahlMcq {
  /** Stable id: stahl-{drugSlug}-{nn}. */
  id: string;
  drugSlug: string;
  drugName: string;
  drugClass: DrugClassId;
  drugClassLabel: string;
  topic: StahlTopicId;
  difficulty: StahlDifficulty;
  type: StahlQuestionType;
  question: string;
  /** 4 options; all shuffle-safe (no "all of the above" forms). */
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Verbatim canonical fact justifying the answer (source display). */
  evidence: string;
  zone: StahlZoneId;
  /** Zone display label, e.g. "Clinical Pearls". */
  zoneLabel: string;
  /** Deep link to the drug-page section the fact lives in. */
  sourceHref: string;
  tags: string[];
}

/* ============================================================
   Filter + stats shapes
   ============================================================ */

export interface StahlMcqFilter {
  drugSlugs?: string[];
  classIds?: string[];
  topics?: StahlTopicId[];
  difficulties?: StahlDifficulty[];
  types?: StahlQuestionType[];
  zones?: StahlZoneId[];
}

export interface StahlBankStats {
  total: number;
  drugsRepresented: number;
  classesRepresented: number;
  byTopic: Record<StahlTopicId, number>;
  byDifficulty: Record<StahlDifficulty, number>;
  byType: Record<StahlQuestionType, number>;
  byClass: Record<string, number>;
  /** Position distribution across A/B/C/D. */
  answerPositions: [number, number, number, number];
  /** Drugs with a PrescriberGuide record but no authored question. */
  drugsWithoutQuestions: string[];
}
