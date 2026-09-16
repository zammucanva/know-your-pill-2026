"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  X,
} from "lucide-react";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { drugs } from "@/lib/kyp/data";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  clearProgress,
  coursePercentComplete,
  type CourseProgress,
} from "@/lib/kyp/progress/progress-store";

/**
 * ContinueStudying — Study Mode's memory, driven entirely by the
 * local learning-progress layer (kyp:progress:v1). No server API,
 * no authentication — the loop works signed-out on static hosting.
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

/** Course outline sizes, derived from the canonical registry. */
const COURSE_OUTLINES: Record<string, { total: number }> = Object.fromEntries(
  drugs.map((d) => [
    d.slug,
    { total: new Set((d.lessonGroups ?? []).flatMap((l) => l.sectionIds)).size },
  ])
);

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

/** The real section anchor to continue at, if the page has it. */
function continueHref(course: CourseProgress): string {
  const base = `/drugs/${course.slug}`;
  if (course.currentSectionId && course.completedSections.length > 0) {
    return `${base}#${course.currentSectionId}`;
  }
  return `${base}`;
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
  const firstOutline = first ? COURSE_OUTLINES[first.slug] : undefined;
  const firstTotal = firstOutline?.total ?? 0;
  const firstPercent = first ? coursePercentComplete(first, firstTotal) : 0;
  const firstIsComplete = Boolean(first?.completedAt);
  const firstSectionLabel = first?.currentSectionLabel ?? null;
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
    const start = drugs[0];
    return (
      <Section spacing="relaxed" className="border-t border-border/30 bg-muted/10">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-overline text-muted-foreground mb-2">
                  {resetDone ? "Progress cleared" : "Start learning"}
                </p>
                <h2
                  className="font-serif font-semibold tracking-[-0.02em] text-foreground"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                >
                  {resetDone ? "Fresh start" : "You haven&apos;t started a course yet"}
                </h2>
                <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                  {resetDone
                    ? "Your local study progress has been cleared. Begin again with any course below."
                    : "Every course is a complete lesson plan — objectives, checkpoints, active recall. Begin with course 01 and your progress will be remembered on this device."}
                </p>
              </div>
              <Link
                href={`/drugs/${start.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
              >
                {resetDone ? "Start again" : "Start learning"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    );
  }

  /* ── GENUINE CONTINUE STATE ──────────────────────────────────── */
  return (
    <Section
      id="continue"
      spacing="relaxed"
      className="border-t border-border/30 bg-muted/10"
    >
      <Container>
        <Reveal>
          <p className="text-overline text-muted-foreground mb-3">
            Where you left off
          </p>
          <h2
            className="mb-10 font-serif font-semibold tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Continue studying
          </h2>
        </Reveal>

        <div className="space-y-px">
          {/* Most recent course — the hero continue row */}
          {first && (
            <Reveal>
              <Link
                href={continueHref(first)}
                className="group flex items-center gap-6 border-b border-border/15 py-5 transition-all last:border-0 hover:pl-2"
              >
                <span className="hidden w-6 shrink-0 font-mono text-xs text-muted-foreground/30 sm:block">
                  01
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {first.title}
                    {firstIsComplete && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-success">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                        Completed
                      </span>
                    )}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground/60">
                    {firstIsComplete
                      ? `All ${firstTotal} sections complete · studied ${timeAgo(first.lastVisitedAt)}`
                      : firstSectionLabel
                        ? `Continue: ${firstSectionLabel} · studied ${timeAgo(first.lastVisitedAt)}`
                        : `studied ${timeAgo(first.lastVisitedAt)}`}
                  </p>
                  {/* Real progress bar — reflects genuinely read sections */}
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      className="h-1 max-w-xs flex-1 overflow-hidden rounded-full bg-muted"
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
                    <span className="text-xs font-medium tabular-nums text-foreground/70">
                      {firstPercent}% complete
                    </span>
                  </div>
                </div>
                <div className="hidden shrink-0 items-center gap-1.5 text-xs text-muted-foreground/60 sm:flex">
                  {first.quiz.bestScore !== null && (
                    <span>Quiz best {first.quiz.bestScore}%</span>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}

          {/* Older courses — compact rows */}
          {recent.slice(1).map((course, i) => {
            const outline = COURSE_OUTLINES[course.slug];
            const total = outline?.total ?? 0;
            const percent = coursePercentComplete(course, total);
            const isComplete = Boolean(course.completedAt);
            return (
              <Reveal key={course.slug} delay={(i + 1) * 0.05}>
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
              </Reveal>
            );
          })}
        </div>

        {/* Local-storage honesty + deliberate two-step reset */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/30 pt-6">
            <p className="flex items-center gap-2 text-xs text-muted-foreground/60">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              {courseCount} {courseCount === 1 ? "course" : "courses"} remembered on
              this device — no account needed.
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
        </Reveal>
      </Container>
    </Section>
  );
}
