"use client";

import * as React from "react";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import type { NavItem } from "@/lib/kyp/use-scroll-spy";
import { useCourseProgress } from "@/lib/kyp/progress/use-local-progress";
import { coursePercentComplete } from "@/lib/kyp/progress/progress-store";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import { PATIENT_VISIBLE_SECTIONS } from "@/lib/kyp/patient/labels";

/**
 * ResumeBanner — the "continue where you left off" affordance on a
 * medication course page.
 *
 * Renders NOTHING on the server and before hydration (the course
 * progress hook returns null), so there is never a hydration
 * mismatch or a flash of incorrect progress.
 *
 * States (all genuine, driven by the local progress store):
 *   - No saved position yet  → nothing (fresh course, hero does the job)
 *   - Position saved         → slim strip: resume the saved section,
 *                              X/N complete, jump straight back in
 *   - Course completed       → quiet "course completed — review"
 *                              strip instead of a resume prompt
 *
 * Visual language: clinical, restrained, editorial — one border, one
 * line, no cards, no motion beyond a respect-reduced colour change.
 */
interface ResumeBannerProps {
  drugSlug: string;
  items: NavItem[];
}

export function ResumeBanner({ drugSlug, items }: ResumeBannerProps) {
  const course = useCourseProgress(drugSlug);
  const [navigated, setNavigated] = React.useState(false);
  const mode = useGuidedLearning((s) => s.mode);

  // Patient mode: only patient-reachable sections count toward the
  // banner (a patient cannot re-open a hidden exam section, so the
  // banner falls back to the next unread patient section instead).
  const visibleItems = React.useMemo(
    () =>
      mode === "patient"
        ? items.filter((i) => (PATIENT_VISIBLE_SECTIONS as readonly string[]).includes(i.id))
        : items,
    [items, mode]
  );

  const total = visibleItems.length;
  const completed = visibleItems.filter(
    (i) => course?.completedSections.includes(i.id)
  ).length;
  const percent = course ? coursePercentComplete(course, total) : 0;
  const isComplete = Boolean(course?.completedAt);

  // Where the learner was — the saved section if it still exists in
  // the outline, else the first uncompleted section.
  const resumeItem = React.useMemo(() => {
    if (!course || isComplete || visibleItems.length === 0) return null;
    const current = visibleItems.find((i) => i.id === course.currentSectionId);
    if (current) return current;
    const nextUp = visibleItems.find(
      (i) => !course.completedSections.includes(i.id)
    );
    return nextUp ?? null;
  }, [course, isComplete, visibleItems]);

  if (!course || course.visitCount < 2) return null;
  if (navigated) return null;

  if (isComplete) {
    return (
      <div className="border-b border-success/20 bg-success-soft/20">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-success" strokeWidth={2} />
          <p className="min-w-0 flex-1 truncate text-xs text-foreground/80">
            You have completed this {mode === "patient" ? "guide" : "course"} — {total} of {total}{" "}
            {total === 1 ? "section" : "sections"}. Review any {mode === "patient" ? "part of it" : "section"} below.
          </p>
        </div>
      </div>
    );
  }

  if (!resumeItem || completed === 0) return null;

  const label =
    course.currentSectionId === resumeItem.id && course.currentSectionLabel
      ? course.currentSectionLabel
      : resumeItem.label;

  const handleResume = () => {
    setNavigated(true);
    const el = document.getElementById(resumeItem.id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      role="region"
      aria-label={mode === "patient" ? "Resume guide" : "Resume course"}
      className="border-b border-brand/20 bg-brand-soft/30"
    >
      {/* sm:pr-40 — reserves the full footprint of the fixed
          GuidedLearning toggle (right-4: 16px gap + ≈126px collapsed
          pill + breathing room) so the Continue button can never sit
          underneath it. main has no right padding, so the container's
          right edge is the viewport edge and the reservation is
          measured from there. Below sm the toggle is hidden, so no
          reservation is needed there. */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2 sm:pl-6 sm:pr-40 lg:pl-8">
        <BookOpen className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} aria-hidden />
        <p className="min-w-0 flex-1 text-xs text-foreground/80">
          <span className="font-semibold text-foreground">
            Continue where you left off
          </span>
          <span className="text-muted-foreground" aria-hidden> · </span>
          {label}
          <span className="text-muted-foreground" aria-hidden> · </span>
          <span className="tabular-nums">
            {completed}/{total} sections
          </span>
        </p>
        <button
          type="button"
          onClick={handleResume}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand/30 bg-card px-3 py-1 text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none"
        >
          Continue
          <ArrowRight className="h-3 w-3" aria-hidden />
        </button>
      </div>

      {/* Screen-reader summary of overall completion */}
      <p className="sr-only" aria-live="polite">
        {percent} percent of this {mode === "patient" ? "guide" : "course"} complete.
      </p>
    </div>
  );
}
