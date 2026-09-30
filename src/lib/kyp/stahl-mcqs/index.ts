/**
 * Stahl's Prescriber-Guide Clinical MCQ system — public API (Phase 6).
 *
 * Source-grounded educational question bank built from the canonical
 * PrescriberGuide data of all 145 medications. Every option is a
 * verbatim canonical string addressed by FactRef coordinates, a real
 * drug name from the registry, or an explicit logical negation —
 * nothing else can enter a question.
 *
 * Consumers:
 *   - /quiz            (Stahl's filter chip)
 *   - /quiz/custom     (opt-in Stahl's inclusion in the pool)
 *   - tests + validation scripts
 *
 * Re-exports the data-first layers: facts (zone registry +
 * resolution), assemble (deterministic, position-balanced bank).
 */

export * from "./types";
export {
  STAHL_ZONES,
  STAHL_TOPICS,
  STAHL_TOPIC_LABELS,
  topicAllowsZone,
  stahlDrug,
  resolveFact,
  drugFactUniverse,
} from "./facts";
export { STAHL_MCQ_BANK } from "./bank/index";
export {
  stahlMcqs,
  stahlBankIntegrity,
  filterStahlMcqs,
  stahlBankStats,
} from "./assemble";
export type { BankIntegrity } from "./assemble";
export { validateStahlBank } from "./validate";
export type { StahlValidationResult } from "./validate";

import type { PoolQuestion } from "@/lib/kyp/custom-test/types";
import type { StahlMcq } from "./types";

/**
 * Adapter: a resolved Stahl MCQ as a Custom Test engine pool
 * question. Identity is namespaced (`{slug}|stahl:{id}`) so Stahl
 * questions can never collide with microQuizzes or generated
 * templates, and Mistake Book records self-identify on both sides.
 */
export function stahlMcqToPoolQuestion(mcq: StahlMcq): PoolQuestion {
  return {
    identity: `${mcq.drugSlug}|stahl:${mcq.id}`,
    question: mcq.question,
    options: mcq.options,
    correctIndex: mcq.correctIndex,
    explanation: mcq.explanation,
    evidence: mcq.evidence,
    source: {
      sourceName: mcq.drugName,
      sourceSlug: mcq.drugSlug,
      // Bank attribution — INTERNAL metadata. The zone (exact
      // PrescriberGuide section) rides along for validation,
      // source-grounding tests, auditing and Mistake Book
      // attribution; learner-facing quiz surfaces do not repeat
      // it per question (Phase 6 UI cleanup).
      sectionLabel: `Stahl's Prescriber's Guide · ${mcq.zoneLabel}`,
      sectionHref: mcq.sourceHref,
      sourceClass: mcq.drugClassLabel,
    },
    templateId: "stahl",
  };
}
