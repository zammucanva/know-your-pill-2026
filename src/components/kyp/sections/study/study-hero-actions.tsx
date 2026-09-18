"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { drugs } from "@/lib/kyp/data";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  coursePercentComplete,
  type CourseProgress,
} from "@/lib/kyp/progress/progress-store";

/**
 * StudyHeroActions — the progress-aware CTA block in the Study Mode hero.
 *
 * One learning journey, two stages:
 *   - progress exists → "Continue where you left off" row showing the
 *     most recent course with its REAL sections-done count and percent,
 *     plus a primary [Continue] CTA and a secondary [Study Medications]
 *   - no progress yet  → honest start state: [Start Learning] (course 01)
 *     with [Browse Medications]
 *
 * Honesty rules (same as ContinueStudying): no fabricated numbers — every
 * value derives from the learner's real section completions in
 * kyp:progress:v1. Pre-hydration the start state renders (the server
 * snapshot is null), then upgrades after hydration. Practice is never
 * gated behind course completion — it stays one scroll away.
 */

/** Course outline sizes, derived from the canonical registry. */
const COURSE_OUTLINES: Record<string, { total: number }> = Object.fromEntries(
  drugs.map((d) => [
    d.slug,
    { total: new Set((d.lessonGroups ?? []).flatMap((l) => l.sectionIds)).size },
  ])
);

/** The real section anchor to continue at, if the page has it. */
function continueHref(course: CourseProgress): string {
  const base = `/drugs/${course.slug}`;
  if (course.currentSectionId && course.completedSections.length > 0) {
    return `${base}#${course.currentSectionId}`;
  }
  return base;
}

export function StudyHeroActions() {
  const data = useLocalProgress();

  // Most recent course (real data only), most-recent-first.
  const first = React.useMemo(() => {
    if (!data) return null;
    return Object.values(data.courses).sort(
      (a, b) => b.lastVisitedAt - a.lastVisitedAt
    )[0];
  }, [data]);

  /* ── No progress yet (or pre-hydration) — genuine start state ── */
  if (!first) {
    const start = drugs[0];
    return (
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={`/drugs/${start.slug}`}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
        >
          Start Learning
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="#medications"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
        >
          <BookOpen className="h-4 w-4" />
          Browse Medications
        </Link>
      </div>
    );
  }

  /* ── Progress exists — continue state with real numbers ── */
  const total = COURSE_OUTLINES[first.slug]?.total ?? 0;
  const done = first.completedSections.length;
  const percent = coursePercentComplete(first, total);
  const isComplete = Boolean(first.completedAt);

  return (
    <div className="mt-10">
      <div className="max-w-xl rounded-xl border border-border/60 bg-card/50 p-5">
        <p className="text-overline text-muted-foreground mb-2">
          Continue where you left off
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-serif text-lg font-semibold text-foreground">
              {first.title}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {isComplete
                ? `All ${total} sections complete · 100%`
                : `${done} / ${total} sections · ${percent}% complete`}
            </p>
          </div>
          <Link
            href={continueHref(first)}
            aria-label={`Continue ${first.title}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {/* Real progress bar — reflects genuinely read sections */}
        <div
          className="mt-4 h-1 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${first.title} course completion`}
        >
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-300 motion-reduce:transition-none"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <Link
          href="#medications"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
        >
          <BookOpen className="h-4 w-4" />
          Study Medications
        </Link>
      </div>
    </div>
  );
}
