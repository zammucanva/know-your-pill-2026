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
 * Replaces DifficultyToggle. Controls section visibility via the
 * GuidedLearningVisibility wrapper component.
 *
 * Place in the navbar area of every drug page.
 */
interface GuidedLearningToggleProps {
  className?: string;
}

export function GuidedLearningToggle({ className }: GuidedLearningToggleProps) {
  const mode = useGuidedLearning((s) => s.mode);
  const setMode = useGuidedLearning((s) => s.setMode);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border border-border/70 bg-card p-0.5",
        className
      )}
      role="group"
      aria-label="Select learning mode"
    >
      {modeMeta.map(({ id, shortLabel, time, icon: Icon }) => {
        const isActive = mode === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            aria-pressed={isActive}
            title={`${shortLabel} — ${time}`}
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors",
              isActive
                ? "bg-brand text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-3 w-3" />
            <span className="hidden sm:inline">{shortLabel}</span>
            <span className={cn("hidden lg:inline text-[0.6rem] font-normal", isActive ? "text-primary-foreground/70" : "text-muted-foreground/60")}>
              {time}
            </span>
          </button>
        );
      })}
    </div>
  );
}
