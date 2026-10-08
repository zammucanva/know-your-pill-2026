/**
 * Hand a finished factory quiz to the existing quiz runner.
 *
 * Same pattern as the Mistake Book retest handoff: the quiz is staged in
 * sessionStorage (a one-shot intent, never durable learning state) and
 * consumed exactly once by /quiz/custom on arrival. Questions are already
 * in the runner's own TestQuestion shape, so the runner needs no
 * knowledge of how they were made.
 */

import type { TestQuestion } from "@/lib/kyp/custom-test/types";
import { StoredHistory, type StorageLike } from "./history";

export const FACTORY_QUIZ_KEY = "kyp:factory-quiz:v1";
/** Query parameter that tells /quiz/custom to look for a staged quiz. */
export const FACTORY_QUIZ_PARAM = "factory";

export interface FactoryQuizRequest {
  questions: TestQuestion[];
  /** Honest label for the run, e.g. "Question Factory: SSRIs". */
  label: string;
  at: number;
}

function session(): StorageLike | null {
  try {
    return typeof window !== "undefined" && window.sessionStorage ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

export function stageFactoryQuiz(
  questions: TestQuestion[],
  label: string,
  storage: StorageLike | null = session()
): boolean {
  if (!storage || questions.length === 0) return false;
  try {
    const payload: FactoryQuizRequest = { questions, label, at: Date.now() };
    storage.setItem(FACTORY_QUIZ_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

/** Consume the staged quiz (returns null when none is pending or it is invalid). */
export function takeFactoryQuiz(storage: StorageLike | null = session()): FactoryQuizRequest | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(FACTORY_QUIZ_KEY);
    if (!raw) return null;
    storage.removeItem(FACTORY_QUIZ_KEY);
    const parsed = JSON.parse(raw) as Partial<FactoryQuizRequest>;
    if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) return null;
    const questions = parsed.questions.filter(
      (q): q is TestQuestion =>
        !!q &&
        typeof q.question === "string" &&
        Array.isArray(q.attemptOptions) &&
        q.attemptOptions.length === 4 &&
        Number.isInteger(q.attemptCorrectIndex) &&
        q.attemptCorrectIndex >= 0 &&
        q.attemptCorrectIndex < 4 &&
        typeof q.identity === "string"
    );
    if (questions.length === 0) return null;
    return {
      questions,
      label: typeof parsed.label === "string" ? parsed.label : "Question Factory",
      at: typeof parsed.at === "number" ? parsed.at : Date.now(),
    };
  } catch {
    return null;
  }
}

/** Mark quiz questions as seen for never-repeat (call when the quiz starts). */
export function markQuizSeen(fingerprints: string[], history: StoredHistory): number {
  return history.add(fingerprints);
}
