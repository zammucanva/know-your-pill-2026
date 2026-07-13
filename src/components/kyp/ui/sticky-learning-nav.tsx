"use client";

import * as React from "react";
import { Check, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useStickyNav,
  scrollToSection,
  navItemClassName,
  type NavItem,
} from "@/lib/kyp/use-scroll-spy";

/**
 * StickyLearningNav — the canonical section navigator for drug pages.
 *
 * Features:
 *   - Sticky on the left side of the page (desktop only, lg+)
 *   - Scrollspy highlights the current section
 *   - Completed sections get a checkmark (Duolingo-style)
 *   - Progress bar at top shows reading completion %
 *   - "X of Y sections completed" counter
 *   - Click any item to smooth-scroll to that section
 *   - Collapsible on mobile via a floating pill button
 *
 * The progress widget (<LearningProgress />) can also be used standalone
 * in the hero or at the end of the page.
 */
interface StickyLearningNavProps {
  items: NavItem[];
}

export function StickyLearningNav({ items }: StickyLearningNavProps) {
  const { activeId, completedIds, progress, completedCount, totalCount, remainingCount } =
    useStickyNav(items);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Group items by their `group` field (if provided)
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
      {/* Desktop: sticky left rail (lg+) */}
      <aside className="hidden lg:block fixed left-4 top-24 z-30 w-56 xl:w-60">
        <div className="kyp-glass rounded-2xl p-3 shadow-[var(--shadow-soft)]">
          {/* Progress header */}
          <div className="px-2 pb-2 pt-1">
            <div className="flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
              <span>Progress</span>
              <span>{completedCount}/{totalCount}</span>
            </div>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-neural transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            {remainingCount > 0 && completedCount > 0 ? (
              <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
                {remainingCount} section{remainingCount > 1 ? "s" : ""} remaining
              </p>
            ) : completedCount === totalCount ? (
              <p className="mt-1.5 text-[0.7rem] font-semibold text-success">
                Page complete
              </p>
            ) : (
              <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
                Start scrolling to track progress
              </p>
            )}
          </div>

          {/* Section list */}
          <nav className="kyp-scroll mt-1 max-h-[60vh] overflow-y-auto pr-1">
            {groups.map(([groupName, groupItems]) => (
              <div key={groupName} className="mb-2">
                {groups.length > 1 && (
                  <p className="px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
                    {groupName}
                  </p>
                )}
                {groupItems.map((item) => {
                  const isActive = activeId === item.id;
                  const isCompleted = completedIds.has(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={cn("w-full text-left", navItemClassName(isActive, isCompleted))}
                    >
                      <span
                        className={cn(
                          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                          isCompleted
                            ? "border-success bg-success text-white"
                            : isActive
                              ? "border-brand"
                              : "border-border"
                        )}
                      >
                        {isCompleted && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile: floating pill that opens a sheet */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full border border-border/70 bg-card/90 backdrop-blur-xl px-4 py-2.5 shadow-[var(--shadow-lift)]"
        aria-label="Open section navigator"
      >
        <div className="relative h-5 w-5">
          <svg viewBox="0 0 20 20" className="h-5 w-5 -rotate-90">
            <circle cx="10" cy="10" r="8" fill="none" stroke="var(--muted)" strokeWidth="2" />
            <circle
              cx="10" cy="10" r="8" fill="none"
              stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 8}`}
              strokeDashoffset={`${2 * Math.PI * 8 * (1 - progress / 100)}`}
            />
          </svg>
        </div>
        <span className="text-xs font-semibold">{completedCount}/{totalCount}</span>
      </button>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-full rounded-t-3xl border-t border-border bg-card p-4 pb-6 max-h-[70vh] overflow-y-auto kyp-scroll">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-overline text-muted-foreground">Section Navigator</p>
                <p className="font-serif text-lg font-semibold">{completedCount} of {totalCount} completed</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-muted mb-4">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-neural"
                style={{ width: `${progress}%` }}
              />
            </div>
            <nav className="grid gap-1">
              {items.map((item) => {
                const isActive = activeId === item.id;
                const isCompleted = completedIds.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileOpen(false);
                    }}
                    className={cn("w-full text-left", navItemClassName(isActive, isCompleted))}
                  >
                    <span
                      className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                        isCompleted
                          ? "border-success bg-success text-white"
                          : isActive
                            ? "border-brand"
                            : "border-border"
                      )}
                    >
                      {isCompleted && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                    </span>
                    <span className="flex-1 truncate">{item.label}</span>
                    <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground" />
                  </button>
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
 * Standalone progress widget — Duolingo-style "You've completed X, Y remaining".
 * Can be placed at the top or bottom of the page.
 */
export function LearningProgress({ items }: StickyLearningNavProps) {
  const { completedCount, totalCount, remainingCount } = useStickyNav(items);

  if (completedCount === 0) return null;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-brand/20 bg-brand-soft/40 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground">
        <Check className="h-4 w-4" strokeWidth={3} />
      </div>
      <div className="flex-1 text-body-sm">
        <p className="font-semibold text-foreground">
          {completedCount === totalCount
            ? "You've completed all sections!"
            : `You've completed ${completedCount} of ${totalCount} sections`}
        </p>
        {remainingCount > 0 && (
          <p className="text-xs text-muted-foreground">
            {remainingCount} section{remainingCount > 1 ? "s" : ""} remaining
          </p>
        )}
      </div>
    </div>
  );
}
