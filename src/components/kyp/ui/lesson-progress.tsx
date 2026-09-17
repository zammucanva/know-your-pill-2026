"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/lib/kyp/use-scroll-spy";
import type { LessonGroup } from "@/lib/kyp/data";

/**
 * LessonProgress — sticky lesson tracker shown above the page content.
 *
 * Shows which lesson the user is currently in and their progress through
 * the lessons. Renders as a horizontal strip of numbered lesson markers.
 *
 * Client Component — uses scrollspy to track current lesson.
 */
interface LessonProgressProps {
  lessons: LessonGroup[];
}

export function LessonProgress({ lessons }: LessonProgressProps) {
  // Collect all section IDs across all lessons for scrollspy
  const allSectionIds = React.useMemo(() =>
    lessons.flatMap((l) => l.sectionIds),
    [lessons]
  );

  const { activeId } = useScrollSpy(allSectionIds, 200);

  // Determine which lesson the active section belongs to
  const activeLesson = React.useMemo(() => {
    for (const lesson of lessons) {
      if (lesson.sectionIds.includes(activeId)) return lesson.number;
    }
    return 1;
  }, [activeId, lessons]);

  // Chip refs — so the active lesson can scroll itself into view inside
  // the horizontally-scrollable strip (mobile learners can't otherwise
  // reach later lessons; the active chip can sit off-screen).
  const chipRefs = React.useRef(new Map<number, HTMLButtonElement>());

  React.useEffect(() => {
    const chip = chipRefs.current.get(activeLesson);
    if (!chip) return;
    // Scroll ONLY the strip's own scrollport — never scrollIntoView().
    // The document has scroll-behavior: smooth, so a chip.scrollIntoView()
    // here would fight (and keep restarting) any in-flight page scroll,
    // e.g. an in-page anchor jump, making anchor navigation crawl.
    const strip = chip.closest("[data-lesson-strip]") as HTMLElement | null;
    if (!strip) return;
    const stripRect = strip.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    const delta =
      chipRect.left + chipRect.width / 2 -
      (stripRect.left + stripRect.width / 2);
    const reduceMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    strip.scrollTo({
      left: Math.max(0, strip.scrollLeft + delta),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeLesson]);

  return (
    <div className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
      {/* sm:pr-40 — keeps the horizontally-scrollable chip row clear
          of the fixed GuidedLearning toggle (right-4, full footprint
          ≈ 142px + gap; main has no right padding) on fresh visits
          when the banner is absent and this strip sits in the toggle's
          band. The scrollport ends before the toggle's footprint, so
          even a fully right-scrolled chip never slides underneath it. */}
      <div className="mx-auto max-w-7xl px-4 sm:pl-6 sm:pr-40 lg:pl-8">
        <div data-lesson-strip className="flex items-center gap-2 py-2 overflow-x-auto kyp-scroll">
          {lessons.map((lesson) => {
            const isCurrent = lesson.number === activeLesson;
            const isPast = lesson.number < activeLesson;

            return (
              <React.Fragment key={lesson.number}>
                {lesson.number > 1 && (
                  <div className={cn(
                    "h-px w-6 shrink-0",
                    isPast ? "bg-brand" : "bg-border"
                  )} />
                )}
                <button
                  ref={(el) => {
                    if (el) chipRefs.current.set(lesson.number, el);
                    else chipRefs.current.delete(lesson.number);
                  }}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(lesson.sectionIds[0]);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                    isCurrent && "bg-brand-soft/40 text-brand-ink",
                    isPast && "text-brand/60",
                    !isCurrent && !isPast && "text-muted-foreground"
                  )}
                >
                  <span className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] font-bold",
                    isCurrent && "bg-brand text-primary-foreground",
                    isPast && "bg-brand/20 text-brand",
                    !isCurrent && !isPast && "bg-muted text-muted-foreground"
                  )}>
                    {isPast ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : lesson.number}
                  </span>
                  <span className="hidden sm:inline">{lesson.title}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
