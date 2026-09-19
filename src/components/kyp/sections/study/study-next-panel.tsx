"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookMarked,
  CheckCircle2,
  Timer,
} from "lucide-react";

import { drugs } from "@/lib/kyp/data";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  coursePercentComplete,
  type CourseProgress,
} from "@/lib/kyp/progress/progress-store";

/**
 * StudyNextPanel — Study Mode's "what should I do next" surface (NOW-N8).
 *
 * Composes, from existing/adjacent data ONLY:
 *   (1) a Continue Learning resume card — the most recent course with
 *       its REAL sections-done count, percent and saved section anchor;
 *   (2) unfinished courses — other in-progress courses, compact rows;
 *   (3) a "retest your mistakes" entry point — the Mistake Book count
 *       (renders only when at least one question to revisit exists);
 *   (4) saved test quick-launch chips (render only when presets exist).
 *
 * Honesty rules (same as the rest of Study Mode): no fabricated
 * numbers — every value derives from the real kyp:progress:v1 store.
 * When nothing exists yet, the panel shows the genuine start state
 * (Start Learning) — never padded placeholder content.
 *
 * Pre-hydration it renders nothing that depends on the store (the
 * server snapshot is null), then upgrades after hydration.
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

export function StudyNextPanel() {
  const data = useLocalProgress();

  const recent = React.useMemo(() => {
    if (!data) return [];
    return Object.values(data.courses).sort(
      (a, b) => b.lastVisitedAt - a.lastVisitedAt
    );
  }, [data]);

  /** Unfinished courses — visited, not yet completed. */
  const unfinished = React.useMemo(
    () => recent.filter((c) => !c.completedAt),
    [recent]
  );

  const mistakeCount = data
    ? Object.keys(data.mistakeBook).length
    : 0;
  const presets = data?.testPresets ?? [];

  /* ── No inputs at all (or pre-hydration) — genuine start state ── */
  if (!data || (recent.length === 0 && mistakeCount === 0 && presets.length === 0)) {
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

  const first = recent[0];
  const firstTotal = first ? COURSE_OUTLINES[first.slug]?.total ?? 0 : 0;
  const firstPercent = first ? coursePercentComplete(first, firstTotal) : 0;
  const firstIsComplete = Boolean(first?.completedAt);
  const firstSectionLabel = first?.currentSectionLabel ?? null;
  const otherUnfinished = unfinished.slice(1, 3);

  return (
    <div className="mt-10">
      {/* (1) Continue Learning — the resume card */}
      {first && (
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
                {firstIsComplete
                  ? `All ${firstTotal} sections complete · 100%`
                  : `${first.completedSections.length} / ${firstTotal} sections · ${firstPercent}% complete`}
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
            aria-valuenow={firstPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${first.title} course completion`}
          >
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-300 motion-reduce:transition-none"
              style={{ width: `${firstPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* (2)(3)(4) — the rest of "what's next", sparse and honest */}
      {(otherUnfinished.length > 0 || mistakeCount > 0 || presets.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-3">
          {/* (2) Unfinished courses — compact, real rows */}
          {otherUnfinished.map((course) => {
            const total = COURSE_OUTLINES[course.slug]?.total ?? 0;
            return (
              <Link
                key={course.slug}
                href={continueHref(course)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                {course.title}
                <span className="text-xs text-muted-foreground tabular-nums">
                  {course.completedSections.length}/{total} sections
                </span>
                <ArrowRight className="h-3.5 w-3.5 opacity-50" aria-hidden />
              </Link>
            );
          })}

          {/* (3) Mistakes — entry point to the Mistake Book */}
          {mistakeCount > 0 && (
            <Link
              href="/study/mistakes"
              className="inline-flex items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand/60"
            >
              <BookMarked className="h-4 w-4" aria-hidden />
              Questions to revisit
              <span className="text-xs font-normal opacity-70 tabular-nums">
                · {mistakeCount}
              </span>
            </Link>
          )}

          {/* (4) Saved tests — one-tap quick launch */}
          {presets.slice(0, 3).map((preset) => (
            <Link
              key={preset.id}
              href={`/quiz/custom?preset=${preset.id}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              {preset.timed && (
                <Timer className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
              )}
              {preset.name}
              <span className="text-xs text-muted-foreground tabular-nums">
                {preset.count}q
              </span>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-3">
        <Link
          href="#medications"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
        >
          <BookOpen className="h-4 w-4" />
          Study Medications
        </Link>
        {unfinished.length > 3 && (
          <p className="inline-flex items-center gap-1.5 px-1 py-3 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 opacity-40" aria-hidden />
            {unfinished.length} courses in progress
          </p>
        )}
      </div>
    </div>
  );
}
