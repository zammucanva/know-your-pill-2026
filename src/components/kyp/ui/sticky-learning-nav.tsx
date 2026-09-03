"use client";

import * as React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Check, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ============================================================
   Manual completion store — persists per-drug to localStorage.
   Keyed by drug slug so progress is tracked per page.
   ============================================================ */
interface CompletionState {
  /** Map of drugSlug → Set of section IDs marked complete */
  completed: Record<string, string[]>;
  toggleComplete: (drugSlug: string, sectionId: string) => void;
  isComplete: (drugSlug: string, sectionId: string) => boolean;
  resetDrug: (drugSlug: string) => void;
}

const useCompletionStore = create<CompletionState>()(
  persist(
    (set, get) => ({
      completed: {},
      toggleComplete: (drugSlug, sectionId) =>
        set((s) => {
          const current = s.completed[drugSlug] ?? [];
          const next = current.includes(sectionId)
            ? current.filter((id) => id !== sectionId)
            : [...current, sectionId];
          return { completed: { ...s.completed, [drugSlug]: next } };
        }),
      isComplete: (drugSlug, sectionId) =>
        (get().completed[drugSlug] ?? []).includes(sectionId),
      resetDrug: (drugSlug) =>
        set((s) => {
          const next = { ...s.completed };
          delete next[drugSlug];
          return { completed: next };
        }),
    }),
    { name: "kyp-section-completion", version: 1 }
  )
);

/* ============================================================
   Scrollspy hook (unchanged from before)
   ============================================================ */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = React.useState<string>(sectionIds[0] ?? "");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}

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

export interface NavItem {
  id: string;
  label: string;
  group?: string;
}

/**
 * useStickyNav — combines scrollspy + manual completion + reading progress.
 * Manual completion is persisted per-drug.
 */
// Stable empty array reference — avoids infinite re-renders with Zustand
// when the selector falls back to `[]`.
const EMPTY_ARRAY: string[] = [];

export function useStickyNav(items: NavItem[], drugSlug: string) {
  const activeId = useScrollSpy(items.map((i) => i.id));
  const progress = useReadingProgress();
  // Select with a stable fallback — Zustand uses Object.is to compare,
  // so returning the same EMPTY_ARRAY reference prevents infinite loops.
  const completedArr = useCompletionStore((s) => s.completed[drugSlug] ?? EMPTY_ARRAY);
  const toggleComplete = useCompletionStore((s) => s.toggleComplete);

  const completedSet = React.useMemo(() => new Set(completedArr), [completedArr]);
  const completedCount = completedSet.size;
  const totalCount = items.length;
  const remainingCount = totalCount - completedCount;

  const handleToggle = React.useCallback(
    (sectionId: string) => toggleComplete(drugSlug, sectionId),
    [drugSlug, toggleComplete]
  );

  return {
    activeId,
    completedIds: completedSet,
    progress,
    completedCount,
    totalCount,
    remainingCount,
    toggleComplete: handleToggle,
  };
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================================================
   StickyLearningNav — with manual completion + scrollspy
   ============================================================ */
interface StickyLearningNavProps {
  items: NavItem[];
  drugSlug: string;
}

export function StickyLearningNav({ items, drugSlug }: StickyLearningNavProps) {
  const { activeId, completedIds, progress, completedCount, totalCount, remainingCount, toggleComplete } =
    useStickyNav(items, drugSlug);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const groups = React.useMemo(() => {
    const map = new Map<string, NavItem[]>();
    for (const item of items) {
      const g = item.group ?? "Sections";
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(item);
    }
    return Array.from(map.entries());
  }, [items]);

  return (
    <>
      {/* Desktop: sticky left rail — VS Code Explorer style (narrow, subtle) */}
      <aside className="hidden lg:block fixed left-0 top-16 z-30 w-48 xl:w-52 border-r border-border/40 bg-card/95">
        <div className="px-3 py-3">
          {/* Progress header — compact */}
          <div className="flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground/80">
            <span>Progress</span>
            <span className="tabular-nums">{completedCount}/{totalCount}</span>
          </div>
          <div className="mt-1 h-0.5 w-full overflow-hidden rounded-md bg-muted">
            <div
              className="h-full rounded-md bg-brand transition-all duration-300"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>

          {/* Section list — VS Code file-tree feel */}
          <nav className="kyp-scroll mt-3 max-h-[calc(100vh-12rem)] overflow-y-auto">
            {groups.map(([groupName, groupItems]) => (
              <div key={groupName} className="mb-1.5">
                {groups.length > 1 && (
                  <p className="px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">
                    {groupName}
                  </p>
                )}
                {groupItems.map((item) => {
                  const isActive = activeId === item.id;
                  const isCompleted = completedIds.has(item.id);
                  return (
                    <div key={item.id} className="group flex items-center gap-0.5">
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "flex flex-1 items-center gap-1.5 rounded px-2 py-1 text-[0.72rem] font-normal leading-tight transition-colors text-left truncate",
                          isActive
                            ? "bg-brand/10 text-brand-ink font-medium"
                            : isCompleted
                              ? "text-foreground/50 hover:bg-accent/40"
                              : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                        )}
                      >
                        <span className="truncate">{item.label}</span>
                      </button>
                      {/* Manual completion checkbox — minimal */}
                      <button
                        type="button"
                        onClick={() => toggleComplete(item.id)}
                        aria-label={isCompleted ? `Mark ${item.label} as not complete` : `Mark ${item.label} as complete`}
                        className={cn(
                          "flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition-colors opacity-0 group-hover:opacity-100",
                          isCompleted
                            ? "border-success bg-success text-white opacity-100"
                            : "border-border text-transparent hover:border-brand"
                        )}
                      >
                        {isCompleted && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile: floating pill */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-md border border-border/70 bg-card/95 px-4 py-2.5 shadow-[var(--shadow-card)]"
        aria-label="Open section navigator"
      >
        <div className="relative h-5 w-5">
          <svg viewBox="0 0 20 20" className="h-5 w-5 -rotate-90">
            <circle cx="10" cy="10" r="8" fill="none" stroke="var(--muted)" strokeWidth="2" />
            <circle
              cx="10" cy="10" r="8" fill="none"
              stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 8}`}
              strokeDashoffset={`${2 * Math.PI * 8 * (1 - (completedCount / totalCount))}`}
            />
          </svg>
        </div>
        <span className="text-xs font-semibold">{completedCount}/{totalCount}</span>
      </button>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-background/60" onClick={() => setMobileOpen(false)} />
          <div className="relative w-full rounded-t-3xl border-t border-border bg-card p-4 pb-6 max-h-[70vh] overflow-y-auto kyp-scroll">
            <div className="mx-auto mb-3 h-1 w-10 rounded-md bg-border" />
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-overline text-muted-foreground">Section Navigator</p>
                <p className="font-sans text-lg font-semibold">{completedCount} of {totalCount} completed</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-md bg-muted mb-4">
              <div className="h-full rounded-md bg-gradient-to-r from-brand to-neural" style={{ width: `${(completedCount / totalCount) * 100}%` }} />
            </div>
            <nav className="grid gap-1">
              {items.map((item) => {
                const isActive = activeId === item.id;
                const isCompleted = completedIds.has(item.id);
                return (
                  <div key={item.id} className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => { scrollToSection(item.id); setMobileOpen(false); }}
                      className={cn(
                        "flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-left",
                        isActive ? "bg-brand-soft/60 text-brand-ink" : isCompleted ? "text-foreground/70" : "text-muted-foreground"
                      )}
                    >
                      <span className="flex-1 truncate">{item.label}</span>
                      {isActive && <ChevronRight className="h-3 w-3 shrink-0" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleComplete(item.id)}
                      aria-label={isCompleted ? `Mark ${item.label} as not complete` : `Mark ${item.label} as complete`}
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                        isCompleted ? "border-success bg-success text-white" : "border-border"
                      )}
                    >
                      {isCompleted && <Check className="h-3 w-3" strokeWidth={3} />}
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Standalone progress widget — end-of-page Duolingo-style summary.
 */
export function LearningProgress({ items, drugSlug }: StickyLearningNavProps) {
  const { completedCount, totalCount, remainingCount } = useStickyNav(items, drugSlug);
  if (completedCount === 0) return null;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-brand/20 bg-brand-soft/40 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground">
        <Check className="h-4 w-4" strokeWidth={3} />
      </div>
      <div className="flex-1 text-body-sm">
        <p className="font-semibold text-foreground">
          {completedCount === totalCount ? "You've completed all sections!" : `You've completed ${completedCount} of ${totalCount} sections`}
        </p>
        {remainingCount > 0 && (
          <p className="text-xs text-muted-foreground">{remainingCount} section{remainingCount > 1 ? "s" : ""} remaining</p>
        )}
      </div>
    </div>
  );
}
