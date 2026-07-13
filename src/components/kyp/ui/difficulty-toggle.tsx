"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, GraduationCap, Stethoscope, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DifficultyLevel } from "@/lib/kyp/data";

/**
 * Difficulty store — replaces PatientMode store.
 *
 * 4 levels: patient / medical / resident / clinician
 * Persists to localStorage so the choice survives navigation.
 */
interface DifficultyState {
  level: DifficultyLevel;
  setLevel: (level: DifficultyLevel) => void;
}

export const useDifficulty = create<DifficultyState>()(
  persist(
    (set) => ({
      level: "medical",
      setLevel: (level) => set({ level }),
    }),
    {
      name: "kyp-difficulty-level",
      version: 1,
    }
  )
);

const levelMeta: { id: DifficultyLevel; label: string; icon: typeof User }[] = [
  { id: "patient", label: "Patient", icon: User },
  { id: "medical", label: "Student", icon: GraduationCap },
  { id: "resident", label: "Resident", icon: Stethoscope },
  { id: "clinician", label: "Clinician", icon: Award },
];

/**
 * DifficultyToggle — 4-level segmented control.
 *
 * Replaces the old PatientModeToggle. Controls which sections are visible
 * (via progressive disclosure) and which content variant is shown.
 *
 * Place in the navbar of every drug page.
 */
interface DifficultyToggleProps {
  className?: string;
}

export function DifficultyToggle({ className }: DifficultyToggleProps) {
  const level = useDifficulty((s) => s.level);
  const setLevel = useDifficulty((s) => s.setLevel);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-card/80 p-0.5 backdrop-blur",
        className
      )}
      role="group"
      aria-label="Switch difficulty level"
    >
      {levelMeta.map(({ id, label, icon: Icon }) => {
        const isActive = level === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setLevel(id)}
            aria-pressed={isActive}
            title={label}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors",
              isActive
                ? "bg-brand text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-3 w-3" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
