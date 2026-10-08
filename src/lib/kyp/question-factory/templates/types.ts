/**
 * Template contracts.
 *
 * A template works in two steps so the planner can explore the question
 * space cheaply:
 *   1. enumerate(ctx)  -> Slot[]   : every concept this template could ask
 *                                    (no distractors, no wording yet)
 *   2. build(ctx, slot, rng)       : one full question for one slot
 *
 * A Slot is the unit of "meaningful uniqueness": it names the concept
 * (what is tested, about which entities, with which answer). Wording
 * variants, distractor sets and option orders do NOT create new slots.
 */

import type { Rng } from "@/lib/kyp/custom-test/rng";
import type { DrugNode, FactStore } from "../facts";
import type {
  ClaimLink,
  Fact,
  Polarity,
  QuestionKind,
  RejectReason,
  RelationId,
  TemplateFamily,
} from "../types";

export interface TemplateContext {
  store: FactStore;
  /** Drugs inside the requested scope: drug templates ask about THESE. */
  scopeDrugs: DrugNode[];
  scopeSlugs: Set<string>;
  /** Every drug, used for distractors and comparisons. */
  allDrugs: DrugNode[];
  /** True when the scope is broad enough to include non-drug topics
   *  (brain atlas, pathways, genes). */
  includeGlobal: boolean;
}

/** What a question tests, independent of wording, distractors and order. */
export interface ConceptKey {
  family: TemplateFamily;
  relations: RelationId[];
  subjectIds: string[];
  /** Entity (or composite) ids of the correct answer. */
  answerIds: string[];
  polarity: Polarity;
  /** Structural frame, e.g. "forward", "inverse", "pairing". */
  frame: string;
}

export interface Slot {
  slotId: string;
  concept: ConceptKey;
  /** Ids the template needs to rebuild the question (fact ids etc.). */
  payload: string[];
}

export interface BuiltOption {
  text: string;
  entityId?: string;
  correct: boolean;
  links: ClaimLink[];
}

export interface Candidate {
  /** Equivalent phrasings; one is chosen by the seeded rng. */
  stems: string[];
  /** Exactly one correct option and three distractors. */
  options: BuiltOption[];
  explanation: string;
  /** Every fact the question relies on (provenance). */
  facts: Fact[];
}

export type BuildResult =
  | { ok: true; candidate: Candidate }
  | { ok: false; reason: RejectReason };

export interface QuestionTemplate {
  id: string;
  version: string;
  family: TemplateFamily;
  kind: QuestionKind;
  /** Facts a solver must connect. */
  depth: 1 | 2 | 3;
  /** "drug" templates ask about in-scope drugs; "global" ones need a broad scope. */
  scopeKind: "drug" | "global";
  enumerate(ctx: TemplateContext): Slot[];
  build(ctx: TemplateContext, slot: Slot, rng: Rng): BuildResult;
}
