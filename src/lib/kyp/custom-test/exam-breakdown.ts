/**
 * Exam breakdown (NEXT-X6) — the per-section result summary.
 *
 * Pure grouping of a completed attempt's questions by their class
 * (the "section" dimension), producing the honest per-section rows
 * the exam results screen shows instead of a bare raw score:
 *
 *   section label · correct / total · unanswered
 *
 * No scoring judgements, no grades, no pass/fail language — the same
 * neutral, factual framing as every other results surface.
 */

import type { TestQuestion } from "./types";

/** One section row of an exam breakdown. */
export interface ExamSectionBreakdown {
  /** Section label — the question's source class. */
  label: string;
  /** Correctly answered questions in this section. */
  correct: number;
  /** Questions in this section. */
  total: number;
  /** Selected-but-never-submitted or skipped questions (time up). */
  unanswered: number;
}

/**
 * Group a completed attempt by source class, in first-appearance
 * order. `answers[i]` is the selected option index or null.
 */
export function breakDownBySection(
  questions: TestQuestion[],
  answers: (number | null)[]
): ExamSectionBreakdown[] {
  const order: string[] = [];
  const map = new Map<string, ExamSectionBreakdown>();
  questions.forEach((q, i) => {
    const label = q.source.sourceClass || "General";
    let section = map.get(label);
    if (!section) {
      section = { label, correct: 0, total: 0, unanswered: 0 };
      map.set(label, section);
      order.push(label);
    }
    section.total += 1;
    const selected = answers[i];
    if (selected === null || selected === undefined) {
      section.unanswered += 1;
    } else if (selected === q.attemptCorrectIndex) {
      section.correct += 1;
    }
  });
  return order.map((label) => map.get(label)!);
}
