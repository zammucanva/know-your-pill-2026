"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * useScrollSpy — tracks which section is currently in view.
 *
 * Returns the ID of the section closest to the top of the viewport.
 * Also tracks which sections the user has scrolled past (for progress).
 *
 * Used by the StickyLearningNav component.
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = React.useState<string>(sectionIds[0] ?? "");
  const [completedIds, setCompletedIds] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to the top that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActiveId(id);
          // Mark all sections above this one as completed
          setCompletedIds((prev) => {
            const next = new Set(prev);
            const idx = sectionIds.indexOf(id);
            for (let i = 0; i < idx; i++) {
              next.add(sectionIds[i]);
            }
            return next;
          });
        }
      },
      {
        // Top offset accounts for the sticky navbar
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return { activeId, completedIds };
}

/**
 * useReadingProgress — returns 0-100 scroll percentage of the page.
 */
export function useReadingProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/**
 * Convenience hook to format the section list for the navigator.
 */
export interface NavItem {
  id: string;
  label: string;
  /** Group label for visual grouping (e.g. "Foundations", "Clinical", "Learning") */
  group?: string;
}

export function useStickyNav(items: NavItem[]) {
  const { activeId, completedIds } = useScrollSpy(items.map((i) => i.id));
  const progress = useReadingProgress();

  const completedCount = completedIds.size;
  const totalCount = items.length;
  const remainingCount = totalCount - completedCount;

  return {
    activeId,
    completedIds,
    progress,
    completedCount,
    totalCount,
    remainingCount,
  };
}

/** Helper to smooth-scroll to a section by ID. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Utility to merge class names with the active/completed state. */
export function navItemClassName(
  isActive: boolean,
  isCompleted: boolean
): string {
  return cn(
    "flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
    isActive
      ? "bg-brand-soft/60 text-brand-ink"
      : isCompleted
        ? "text-foreground/70 hover:bg-accent/50"
        : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
  );
}
