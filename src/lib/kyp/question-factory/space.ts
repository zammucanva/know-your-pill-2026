/**
 * Question-space estimation.
 *
 * "How many meaningfully different questions exist for this selection?"
 *
 * The unit is the CONCEPT: a distinct (relationship, entities, answer)
 * combination. Re-wording a question, swapping its distractors or
 * reordering its options does NOT create a new concept (it would be a
 * duplicate by the deduplication rules), so those are reported separately
 * as variants and never added to the total.
 *
 * This is an estimate, not a promise: a concept can still be rejected at
 * build time when no safe distractors exist, and the authored-bank overlap
 * is only known after a question is built.
 */

import { buildPlan } from "./planner";
import { TEMPLATES } from "./templates";
import type { SeenView } from "./dedupe";
import type { QuestionTemplate, TemplateContext } from "./templates/types";
import type { DifficultySelection, KindSelection } from "./types";

export interface SpaceEstimate {
  /** Distinct meaningful concepts for the selection. */
  total: number;
  /** Of those, how many the learner has already seen. */
  seen: number;
  /** Concepts not yet seen. */
  remaining: number;
  perFamily: Record<string, number>;
  perTemplate: Record<string, number>;
  /** What this number is, and is not. */
  note: string;
}

export const SPACE_NOTE =
  "An estimate of distinct concepts, not a promise: re-worded or re-ordered " +
  "versions of the same concept are duplicates and are not counted, and some " +
  "concepts may be skipped when no safe wrong answers exist.";

export function estimateSpace(
  ctx: TemplateContext,
  kind: KindSelection,
  difficulty: DifficultySelection,
  history: SeenView | null,
  templates: QuestionTemplate[] = TEMPLATES
): SpaceEstimate {
  const plan = buildPlan({
    ctx,
    templates,
    kind,
    difficulty,
    seed: 1,
    blocked: () => false,
    seen: (fp) => history?.has(fp) ?? false,
    allowSeenReuse: true,
  });
  return {
    total: plan.total,
    seen: plan.total - plan.unseen,
    remaining: plan.unseen,
    perFamily: plan.perFamily,
    perTemplate: plan.perTemplate,
    note: SPACE_NOTE,
  };
}
