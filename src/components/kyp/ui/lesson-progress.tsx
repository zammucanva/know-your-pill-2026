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

  const activeId = useScrollSpy(allSectionIds, 200);

  // Determine which lesson the active section belongs to
  const activeLesson = React.useMemo(() => {
    for (const lesson of lessons) {
      if (lesson.sectionIds.includes(activeId)) return lesson.number;
    }
    return 1;
  }, [activeId, lessons]);

  return (
    <div className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-2 overflow-x-auto kyp-scroll">
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
