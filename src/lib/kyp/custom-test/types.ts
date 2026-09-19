/**
 * Custom Test types — the question model and selection shape.
 *
 * Questions come from exactly two grounded sources:
 *   1. Authored MCQs — the microQuizzes embedded in the locked drug data.
 *   2. Deterministic templates — questions stamped from structured facts
 *      that already exist in the drug data (class, targets, indications,
 *      side effects, monitoring, interactions, kinetics, warnings).
 *
 * Nothing else may produce a question. No AI generation, no invented
 * distractors — every option is a real value from the data layer.
 */

import type { Drug } from "@/lib/kyp/data/types";
import { anchoredDrugHref } from "@/lib/kyp/drug-course-sections";

/** Source attribution shown in the runner and review screens. */
export interface QuestionSource {
  /** e.g. "Mirtazapine" — the drug page the fact lives on. */
  sourceName: string;
  sourceSlug: string;
  /** e.g. "Interactions" — the drug-page section the fact lives in. */
  sectionLabel: string;
  /** The drug-page anchor for the section — verified to exist on the
   *  course template (NOW-N6) so review links never dead-end. */
  sectionHref: string;
  /** Class label (e.g. "NaSSA") — the aggregation/filter dimension
   *  for the Mistake Book (NOW-N1). Always from the registry. */
  sourceClass: string;
}

/** A question in the reusable pool (options not yet shuffled). */
export interface PoolQuestion {
  /** Dedup identity: source | fact | template | variant. */
  identity: string;
  question: string;
  options: string[];
  /** Index into options BEFORE answer shuffling. */
  correctIndex: number;
  explanation: string;
  /** Verbatim fact the question was stamped from — never paraphrased. */
  evidence: string;
  source: QuestionSource;
  /** Template id ("authored" for microQuizzes) — for balancing. */
  templateId: string;
}

/** A question inside a running attempt — options shuffled where safe. */
export interface TestQuestion extends PoolQuestion {
  /** Shuffled option list (equals options when shuffling was unsafe). */
  attemptOptions: string[];
  /** Index into attemptOptions. */
  attemptCorrectIndex: number;
}

/** Topic selection coming from the setup screen. */
export interface CustomTestSelection {
  drugSlugs: string[];
}

/** One answered question in a completed attempt. */
export interface AttemptAnswer {
  question: TestQuestion;
  selected: number | null;
  correct: boolean;
}

export type { Drug };
