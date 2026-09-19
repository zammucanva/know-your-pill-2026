/**
 * Daily Plan v1 (NEXT-X8) — a fixed, explainable heuristic.
 *
 * Composes "Today's plan" from real state in a FIXED order the
 * learner can reason about:
 *
 *   1. clear due reviews first   (the Retention Engine queue, X1)
 *   2. one weak-area drill       (the X2 selection)
 *   3. resume an unfinished course, or start something new
 *
 * Deliberately heuristic — no adaptivity, no ML, no scoring model.
 * Never nagging and never guilt-based: no streaks, no "you missed X
 * days", no judgements — each step carries one plain factual line
 * about where its number comes from. The plan is fully dismissible
 * for the rest of the day (see dismissDailyPlan in the store).
 *
 * Pure function over the progress snapshot — deterministic and
 * unit-testable.
 */

import type { KypProgressData } from "@/lib/kyp/progress/progress-store";
import { selectWeakTopics } from "@/lib/kyp/custom-test/weak-area";
import { drugs } from "@/lib/kyp/data/drugs/index";

/** One numbered step of the plan. */
export interface DailyPlanStep {
  id: "reviews" | "weak-drill" | "continue" | "start";
  title: string;
  /** One plain, factual line — where the number comes from. */
  detail: string;
  href: string;
}

/** Course outline sizes, derived from the canonical registry. */
const COURSE_OUTLINES: Record<string, { total: number }> = Object.fromEntries(
  drugs.map((d) => [
    d.slug,
    { total: new Set((d.lessonGroups ?? []).flatMap((l) => l.sectionIds)).size },
  ])
);

export function buildDailyPlan(data: KypProgressData, now = Date.now()): DailyPlanStep[] {
  const steps: DailyPlanStep[] = [];

  /* 1 ── clear due reviews first */
  let dueCount = 0;
  for (const item of Object.values(data.retention)) {
    if (item.dueAt <= now) dueCount += 1;
  }
  if (dueCount > 0) {
    steps.push({
      id: "reviews",
      title: `Clear ${dueCount} due ${dueCount === 1 ? "review" : "reviews"}`,
      detail: "Questions you missed before, back on their review schedule.",
      href: "/study/review",
    });
  }

  /* 2 ── one weak-area drill */
  const weak = selectWeakTopics(data, now);
  if (weak.topics.length > 0) {
    const weakest = weak.topics[0];
    steps.push({
      id: "weak-drill",
      title: `Drill your weakest class — ${weakest.classLabel}`,
      detail: `${weakest.reason}.`,
      href: "/quiz/custom?weak=1",
    });
  }

  /* 3 ── resume an unfinished course, or start something new */
  const recent = Object.values(data.courses).sort((a, b) => b.lastVisitedAt - a.lastVisitedAt);
  const unfinished = recent.find((c) => !c.completedAt);
  if (unfinished) {
    const total = COURSE_OUTLINES[unfinished.slug]?.total ?? 0;
    steps.push({
      id: "continue",
      title: `Continue ${unfinished.title}`,
      detail: `${unfinished.completedSections.length} of ${total} sections read — picks up where you stopped.`,
      href:
        unfinished.currentSectionId && unfinished.completedSections.length > 0
          ? `/drugs/${unfinished.slug}#${unfinished.currentSectionId}`
          : `/drugs/${unfinished.slug}`,
    });
  } else {
    steps.push({
      id: "start",
      title: "Start a new medication",
      detail: `${drugs.length} courses in the library, each a structured read.`,
      href: "/study#medications",
    });
  }

  return steps;
}
