import type { McqCategory } from "./types";

/**
 * Authored quizzes carry `afterSectionId`: the page section the quiz appears after. Only ids that plainly
 * name a topic are used as a category (the label is the id written out, nothing more); ids that name a page
 * position (top, quick-facts, high-yield-summary, ...) are not topics, so those quizzes stay ungrouped.
 */
const QUIZ_SECTION_TOPICS: Record<string, string> = {
  mechanism: "Mechanism",
  timeline: "Timeline",
  "side-effects": "Side effects",
  monitoring: "Monitoring",
  contraindications: "Contraindications",
  interactions: "Interactions",
  "clinical-uses": "Clinical uses",
  "evidence-practice": "Evidence in practice",
};

export function quizSectionCategory(afterSectionId: unknown): McqCategory | null {
  if (typeof afterSectionId !== "string") return null;
  const label = QUIZ_SECTION_TOPICS[afterSectionId];
  return label ? { id: afterSectionId, label, basis: "quiz-section" } : null;
}
