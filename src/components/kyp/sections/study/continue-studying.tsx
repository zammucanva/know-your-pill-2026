"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  RotateCcw,
  X,
} from "lucide-react";

import { ModuleCard, ModuleHeader } from "@/components/kyp/dashboard/modules-hero";
import { FIRST_COURSE_SLUG } from "@/lib/kyp/study/course-stats-generated";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  clearProgress,
  coursePercentComplete,
} from "@/lib/kyp/progress/progress-store";
import {
  studyCourseTotal,
  continueHref,
} from "@/lib/kyp/study/course-catalog";

/**
 * ContinueStudying — Study Mode's memory, driven entirely by the
 * local learning-progress layer (kyp:progress:v1). No server API,
 * no authentication — the loop works signed-out on static hosting.
 *
 * Course totals + routes come from the shared study course catalog
 * (drug lessons AND psychiatry courses both resolve honestly).
 *
 * Honesty rules (from the product audit):
 *   - No fabricated percentages — every number comes from the
 *     learner's real section completions.
 *   - No fake routes — every link goes to the real course page and
 *     the real saved section anchor.
 *
 * States (after hydration; renders nothing on the server):
 *   - No progress yet → a genuine "Start learning" state pointing
 *     at course 01 of the registry.
 *   - Progress       → "Continue studying" list: most recent course
 *                      first, with real completion, current section,
 *                      quiz best score and time-since-studied.
 *   - Course complete → a genuine completed/review state on its row.
 *
 * Also owns the ONLY reset affordance for local progress: a
 * deliberate two-step confirmation that cannot be triggered by a
 * stray tap.
 */

function timeAgo(ms: number): string {
  const diffMin = Math.floor((Date.now() - ms) / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return new Date(ms).toLocaleDateString();
}

export function ContinueStudying() {
  const data = useLocalProgress();
  const [confirming, setConfirming] = React.useState(false);
  const [resetDone, setResetDone] = React.useState(false);

  // Recent courses, most recent first (real data only).
  const recent = React.useMemo(() => {
    if (!data) return [];
    return Object.values(data.courses)
      .sort((a, b) => b.lastVisitedAt - a.lastVisitedAt)
      .slice(0, 3);
  }, [data]);

  const hasProgress = recent.length > 0;
  const first = recent[0];
  const firstTotal = first ? studyCourseTotal(first.slug) : 0;
  const firstPercent = first ? coursePercentComplete(first, firstTotal) : 0;
  const firstIsComplete = Boolean(first?.completedAt);
  const firstSectionLabel = first?.currentSectionLabel ?? null;
  const hasOthers = recent.length > 1;
  const courseCount = data ? Object.keys(data.courses).length : 0;

  const handleReset = () => {
    clearProgress();
    setConfirming(false);
    setResetDone(true);
  };

  /* ── Pre-hydration: render nothing (matches the server markup) ── */
  if (!data) return null;

  /* ── GENUINE START STATE ─────────────────────────────────────── */
  if (!hasProgress) {
    // The hub's resume panel already offers the start state; this card only
    // adds the "progress cleared" confirmation.
    if (!resetDone) return null;
    const start = { slug: FIRST_COURSE_SLUG };
    return (
      <ModuleCard>
        <ModuleHeader
          icon={BookOpen}
          title={resetDone ? "Fresh start" : "Start learning"}
          aside={resetDone ? "Progress cleared" : undefined}
        />
        <div className="flex flex-wrap items-center justify-between gap-6 p-5">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {resetDone
              ? "Your local study progress has been cleared. Begin again with any course below."
              : "Every course is a complete lesson plan: objectives, checkpoints, active recall. Begin with course 01 and your progress will be remembered on this device."}
          </p>
          <Link
            href={`/drugs/${start.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
          >
            {resetDone ? "Start again" : "Start learning"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ModuleCard>
    );
  }

  /* ── GENUINE CONTINUE STATE ──────────────────────────────────── */
  return (
    <ModuleCard
      id="continue"
      className={hasOthers ? undefined : "border-0 bg-transparent shadow-none"}
    >
      {/* With earlier courses this folds away behind a header; with only
          one course it is just the footer line (the summary is hidden and
          the details stay open). */}
      <details className="group/recent" open={hasOthers ? undefined : true}>
        <summary
          className={
            hasOthers
              ? "flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 kyp-focus-ring"
              : "hidden"
          }
        >
          <span className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
            <BookOpen className="h-4 w-4 text-brand" aria-hidden />
            Recent courses
          </span>
          <span className="flex items-center gap-3 text-xs text-muted-foreground">
            {recent.length - 1} earlier {recent.length - 1 === 1 ? "course" : "courses"}
            <span className="grid h-7 w-7 place-items-center rounded-md border border-border/60 bg-background/60">
              <ChevronDown
                className="h-4 w-4 transition-transform group-open/recent:rotate-180"
                aria-hidden
              />
            </span>
          </span>
        </summary>
      <div className={hasOthers ? "border-t border-border/50 p-5" : "px-1"}>
        <div className="space-y-px">
          {/* The most recent course is the resume card above; this card
              lists the courses before it and owns the reset control. */}

          {/* Older courses — compact rows */}
          {recent.slice(1).map((course, i) => {
            const total = studyCourseTotal(course.slug);
            const isComplete = Boolean(course.completedAt);
            return (
              <React.Fragment key={course.slug}>
                <Link
                  href={continueHref(course)}
                  className="group flex items-center gap-6 border-b border-border/15 py-4 transition-all last:border-0 hover:pl-2"
                >
                  <span className="w-6 shrink-0 font-mono text-xs text-muted-foreground/30">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {course.title}
                      {isComplete && (
                        <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-success">
                          <CheckCircle2 className="h-3 w-3" aria-hidden />
                          Completed
                        </span>
                      )}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground/50">
                      {isComplete
                        ? `All ${total} sections · studied ${timeAgo(course.lastVisitedAt)}`
                        : `${course.completedSections.length}/${total} sections · studied ${timeAgo(course.lastVisitedAt)}`}
                      {course.quiz.bestScore !== null && ` · quiz best ${course.quiz.bestScore}%`}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                </Link>
              </React.Fragment>
            );
          })}
        </div>

        {/* Local-storage honesty + deliberate two-step reset */}
          <div
            className={
              hasOthers
                ? "mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/30 pt-6"
                : "flex flex-wrap items-center justify-between gap-4"
            }
          >
            <p className="flex items-center gap-2 text-xs text-muted-foreground/60">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              {courseCount} {courseCount === 1 ? "course" : "courses"} remembered on
              this device: no account needed.
            </p>

            {confirming ? (
              <div
                role="group"
                aria-label="Confirm progress reset"
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-xs font-medium text-foreground" aria-live="polite">
                  Clear all local progress?
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emergency px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-emergency/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emergency motion-reduce:transition-none"
                >
                  Yes, reset
                </button>
                <button
                  type="button"
                  onClick={() => setConfirming(false)}
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <X className="h-3 w-3" aria-hidden />
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirming(true)}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <RotateCcw className="h-3 w-3" aria-hidden />
                Reset study progress
              </button>
            )}
          </div>
      </div>
      </details>
    </ModuleCard>
  );
}
