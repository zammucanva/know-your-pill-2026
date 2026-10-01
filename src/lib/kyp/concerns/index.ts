/* ============================================================
   Class Comparison / Choose by Concern — public API (Phase 5)
   ------------------------------------------------------------
   Import surface for the comparison UI and tests. Everything the
   UI renders comes through here — React components never touch
   the canonical drug files directly for concern data.
   ============================================================ */

export type {
  ConcernCell,
  ConcernDefinition,
  ConcernId,
  ConcernKind,
  ConcernMatchedEntry,
  ComparisonClass,
  ComparisonRow,
  EffectFrequency,
  EffectSeverity,
} from "./types";
export type { ComparisonCard } from "./matrix";

export {
  CONCERN_DEFINITIONS,
  CONCERN_ORDER,
  EFFECT_CONCERN_IDS,
  PRESCRIBER_NOTE_PLACEHOLDERS,
  getConcernDefinition,
} from "./definitions";

export {
  FREQUENCY_LABEL,
  SEVERITY_LABEL,
  concernCoverage,
  defaultConcernsFor,
  normalizeConcernCell,
} from "./normalize";

export {
  buildComparisonMatrix,
  comparisonClasses,
  getComparisonClass,
  getComparisonClassIds,
  matrixToCards,
  sanitizeConcernIds,
} from "./matrix";
