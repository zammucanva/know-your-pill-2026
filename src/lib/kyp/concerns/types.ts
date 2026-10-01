import type { Drug, DrugClassId } from "../data/types";

/* ============================================================
   Class Comparison / Choose by Concern — types (Phase 5)
   ------------------------------------------------------------
   Data-first architecture:

     Canonical Drug Data          (src/lib/kyp/data — locked)
           ↓
     Concern Normalization Layer  (this module — derive, never invent)
           ↓
     Class Comparison Dataset     (matrix.ts — group by existing DrugClassId)
           ↓
     Comparison UI                (/compare/classes — consumes normalized data)

   No medical fact is hardcoded in a React component. Every displayed
   value traces back to a canonical field on the Drug record; when the
   canonical data does not support a concern for a medication, the cell
   degrades to "Data not available" — never a guessed rating.
   ============================================================ */

/** Canonical frequency band (verbatim union from DrugSideEffectEntry). */
export type EffectFrequency = "very-common" | "common" | "uncommon" | "rare" | "unknown";

/** Canonical severity band (verbatim union from DrugSideEffectEntry). */
export type EffectSeverity = "mild" | "moderate" | "severe" | "life-threatening";

/** The kind of canonical data a concern derives from. */
export type ConcernKind =
  /** adverse-effect entries (commonSideEffects / seriousSideEffects) */
  | "effect"
  /** the medication's own monitoring list */
  | "monitoring"
  /** the medication's own interaction list */
  | "interactions";

/**
 * A concern definition — the deterministic contract for one comparison
 * dimension. `patterns` are matched against the NAMES of a medication's
 * documented adverse-effect entries; a medication "has" the concern
 * only when at least one documented entry (or, where wired, a
 * Prescriber's Guide one-line note) matches. Nothing is inferred.
 */
export interface ConcernDefinition {
  id: ConcernId;
  /** Short display label, e.g. "Weight & metabolic effects". */
  label: string;
  /** The choose-by-concern question this dimension answers. */
  question: string;
  /** One-line scope statement shown under the selector. */
  blurb: string;
  kind: ConcernKind;
  /** effect concerns: regex sources matched against entry names. */
  patterns?: RegExp[];
  /** effect concerns: optional Prescriber's Guide one-liner field shown verbatim. */
  prescriberNoteField?: "weightGain" | "sedation";
  /** Human-readable basis statement (source transparency). */
  basis: string;
}

/** All supported concern ids. Derived concerns only — see definitions.ts. */
export type ConcernId =
  | "weight-metabolic"
  | "sedation"
  | "sleep-activation"
  | "sexual-function"
  | "eps-akathisia"
  | "tardive-dyskinesia"
  | "prolactin"
  | "anticholinergic"
  | "qt-cardiac"
  | "orthostasis"
  | "nausea-gi"
  | "monitoring-burden"
  | "interaction-burden";

/** One documented adverse-effect entry that matched a concern (verbatim values). */
export interface ConcernMatchedEntry {
  /** Verbatim entry name, e.g. "Weight gain". */
  name: string;
  frequency: EffectFrequency;
  severity: EffectSeverity;
  /** Which canonical list the entry lives in. */
  list: "common" | "serious";
  /** Verbatim entry description. */
  description: string;
}

/** A normalized comparison cell for one (medication × concern) pair. */
export interface ConcernCell {
  concernId: ConcernId;
  /** Medication slug. */
  slug: string;
  /** False when the canonical data carries no basis — UI shows "Data not available". */
  available: boolean;
  /**
   * Transparent descriptor for the compact matrix cell:
   *   - effect concerns: the documented frequency band of the
   *     highest-frequency matched entry (e.g. "Very common");
   *   - monitoring: "N parameters";
   *   - interactions: severity tallies "2 contraindicated · 4 major".
   * Never a score — always a restatement of documented data.
   */
  headline: string;
  /** effect concerns: matched entries, deterministically ordered. */
  entries: ConcernMatchedEntry[];
  /** Prescriber's Guide one-line note, verbatim, when informative. */
  prescriberNote?: string;
  /** monitoring concern: the medication's own monitoring parameters. */
  monitoringItems?: { parameter: string; frequency: string; rationale: string }[];
  /** interactions concern: the medication's own interaction entries. */
  interactionItems?: { drug: string; severity: string; action: string }[];
  /** Per-concern basis statement (same string for every drug in a column). */
  basis: string;
}

/** One medication row of the comparison matrix. */
export interface ComparisonRow {
  drug: Drug;
  /** One cell per selected concern, in selection order. */
  cells: ConcernCell[];
}

/** A class available for comparison — derived from the canonical registry. */
export interface ComparisonClass {
  /** Existing taxonomy id (DrugClassId) — never a second taxonomy. */
  id: DrugClassId;
  /** Most frequent drugClassLabel among members (ties → registry order). */
  label: string;
  /** Most frequent drugClassFullName among members (ties → registry order). */
  fullName: string;
  /** Mechanism subgroups visible inside the class (distinct labels + counts). */
  subgroups: { label: string; count: number }[];
  /** Member medications — references into the canonical registry, registry order. */
  medications: Drug[];
}
