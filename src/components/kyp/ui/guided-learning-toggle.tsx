"use client";

import * as React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, GraduationCap, Award, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GuidedLearningMode } from "@/lib/kyp/data";

/**
 * Guided Learning Mode store.
 *
 * Replaces the old difficulty store. Now the user selects a learning path
 * (Patient 5min / MBBS 20min / NEET PG 35min / Resident 45min) which
 * controls which sections are visible AND the time commitment.
 *
 * The mode persists to localStorage so it survives navigation.
 */
interface GuidedLearningState {
  mode: GuidedLearningMode;
  setMode: (mode: GuidedLearningMode) => void;
}

export const useGuidedLearning = create<GuidedLearningState>()(
  persist(
    (set) => ({
      mode: "neetPg",
      setMode: (mode) => set({ mode }),
    }),
    { name: "kyp-guided-learning-mode", version: 2 }
  )
);

const modeMeta: { id: GuidedLearningMode; label: string; shortLabel: string; time: string; icon: typeof User }[] = [
  { id: "patient", label: "Patient", shortLabel: "Patient", time: "5 min", icon: User },
  { id: "mbbs", label: "MBBS Student", shortLabel: "MBBS", time: "20 min", icon: GraduationCap },
  { id: "neetPg", label: "NEET PG / INICET", shortLabel: "NEET PG", time: "35 min", icon: Award },
  { id: "resident", label: "Resident / Clinician", shortLabel: "Resident", time: "45 min", icon: Stethoscope },
];

/**
 * GuidedLearningToggle — 4-mode segmented control with time estimates.
 *
 * Collapses to a single pill showing the selected mode and expands into the
 * full segmented control on hover or keyboard focus. The expand/collapse is
 * animated with max-width + opacity + padding transitions (CSS cannot
 * animate to/from width: auto, so each option's content is capped by
 * max-w-[10rem] and clipped by overflow-hidden while it slides in).
 *
 * Accessibility contract:
 * - Collapsed: only the selected pill is tabbable. Sibling options are
 *   removed from the tab order and the accessibility tree (tabIndex -1,
 *   aria-hidden, pointer-events-none), so the control is one Tab stop.
 * - Focus entering the control expands it and restores the siblings, so
 *   keyboard users can reach every mode — nothing is ever trapped.
 * - Escape collapses back to the selected pill; focus is moved onto it
 *   first so it never rests on a hidden element.
 *
 * Mode selection is consumed app-wide through the useGuidedLearning store
 * (see GuidedLearningVisibility) — the store interface is unchanged.
 * Place in the navbar area of every drug page.
 */
interface GuidedLearningToggleProps {
  className?: string;
}

export function GuidedLearningToggle({ className }: GuidedLearningToggleProps) {
  const mode = useGuidedLearning((s) => s.mode);
  const setMode = useGuidedLearning((s) => s.setMode);
  const [expanded, setExpanded] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const selectedRef = React.useRef<HTMLButtonElement | null>(null);

  // Collapse on pointer leave, but never while the control is in keyboard
  // use (focus inside that matches :focus-visible) — otherwise the focused
  // option could become hidden mid-use. Focus left by a mouse click does
  // not match :focus-visible, and a clicked option is always the newly
  // selected (always-visible) pill, so collapsing is safe in that case.
  const handleMouseLeave = React.useCallback(() => {
    const root = rootRef.current;
    const active = document.activeElement;
    if (
      root &&
      active instanceof Element &&
      root.contains(active) &&
      active.matches(":focus-visible")
    ) {
      return;
    }
    setExpanded(false);
  }, []);

  // Collapse only when focus leaves the control entirely, not when it
  // simply moves between options inside it.
  const handleBlurCapture = React.useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    const next = event.relatedTarget as Node | null;
    if (!event.currentTarget.contains(next)) setExpanded(false);
  }, []);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Escape" || !expanded) return;
      // Move focus to the always-visible pill before collapsing so focus
      // never rests on a hidden element.
      selectedRef.current?.focus();
      setExpanded(false);
    },
    [expanded]
  );

  return (
    <div
      ref={rootRef}
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-card/80 p-0.5 backdrop-blur transition-[gap] duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
        expanded ? "gap-0.5" : "gap-0",
        className
      )}
      role="group"
      aria-label="Select learning mode"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={() => setExpanded(true)}
      onBlurCapture={handleBlurCapture}
      onKeyDown={handleKeyDown}
    >
      {modeMeta.map(({ id, shortLabel, time, icon: Icon }) => {
        const isActive = mode === id;
        const isHidden = !isActive && !expanded;
        return (
          <button
            key={id}
            ref={isActive ? selectedRef : undefined}
            type="button"
            onClick={() => setMode(id)}
            aria-pressed={isActive}
            aria-hidden={isHidden || undefined}
            tabIndex={isHidden ? -1 : undefined}
            title={`${shortLabel} — ${time}`}
            className={cn(
              "inline-flex cursor-pointer items-center gap-1 overflow-hidden whitespace-nowrap rounded-full py-1.5 text-xs font-semibold transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
              isActive
                ? "max-w-[10rem] bg-brand px-2.5 text-primary-foreground opacity-100"
                : expanded
                  ? "max-w-[10rem] px-2.5 text-muted-foreground opacity-100 hover:text-foreground"
                  : "max-w-0 px-0 text-muted-foreground opacity-0 pointer-events-none"
            )}
          >
            <Icon className="h-3 w-3 shrink-0" />
            <span className="hidden shrink-0 sm:inline">{shortLabel}</span>
            <span
              className={cn(
                "shrink-0 text-[0.6rem] font-normal",
                isActive
                  ? "hidden text-primary-foreground/70 sm:inline"
                  : "hidden text-muted-foreground/60 lg:inline"
              )}
            >
              {time}
            </span>
          </button>
        );
      })}
    </div>
  );
}
