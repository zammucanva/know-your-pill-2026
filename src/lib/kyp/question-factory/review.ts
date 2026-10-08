/**
 * Review workflow: the lifecycle of a generated question.
 *
 *   GENERATED -> VALIDATED -> PUBLISHED -> ARCHIVED
 *        \          \             \
 *         +----------+-------------+--> REJECTED  (may be reinstated or archived)
 *
 * Publication is distinct from generation: only PUBLISHED questions may
 * appear in a quiz. A REJECTED question can never be played.
 *
 * KYP has no admin or editor interface today (User.role is only an
 * authorization flag), so this module is the rules and data model that a
 * future review screen will drive. It is pure and fully tested now.
 */

import type { GeneratedQuestion, QuestionStatus } from "./types";

const TRANSITIONS: Record<QuestionStatus, QuestionStatus[]> = {
  GENERATED: ["VALIDATED", "REJECTED"],
  VALIDATED: ["PUBLISHED", "REJECTED"],
  PUBLISHED: ["ARCHIVED", "REJECTED"],
  REJECTED: ["VALIDATED", "ARCHIVED"],
  ARCHIVED: [],
};

export function canTransition(from: QuestionStatus, to: QuestionStatus): boolean {
  return TRANSITIONS[from].includes(to);
}

export class InvalidTransitionError extends Error {
  constructor(from: QuestionStatus, to: QuestionStatus) {
    super(`A ${from} question cannot become ${to}`);
    this.name = "InvalidTransitionError";
  }
}

/** Returns the question in its new status, or throws on an illegal move. */
export function transition(q: GeneratedQuestion, to: QuestionStatus): GeneratedQuestion {
  if (!canTransition(q.status, to)) throw new InvalidTransitionError(q.status, to);
  return { ...q, status: to };
}

/** A human reviewer accepted the question: it is no longer "unreviewed". */
export function markReviewed(q: GeneratedQuestion): GeneratedQuestion {
  return { ...q, unreviewed: false };
}

/** Whether a question may be shown in a public quiz. */
export function isPlayable(q: GeneratedQuestion): boolean {
  return q.status === "PUBLISHED";
}

export function selectPlayable(questions: GeneratedQuestion[]): GeneratedQuestion[] {
  return questions.filter(isPlayable);
}
