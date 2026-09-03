"use client";

import { Stethoscope, User } from "lucide-react";
import { usePatientMode } from "@/lib/kyp/patient-mode-store";
import { cn } from "@/lib/utils";

/**
 * PatientModeToggle — switches between Medical and Patient vocabulary.
 *
 * Renders as a segmented control with two buttons. Persists to localStorage
 * via the Zustand store so the choice survives navigation.
 *
 * Place in the navbar of every drug page.
 */
interface PatientModeToggleProps {
  className?: string;
}

export function PatientModeToggle({ className }: PatientModeToggleProps) {
  const mode = usePatientMode((s) => s.mode);
  const setMode = usePatientMode((s) => s.setMode);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border border-border/70 bg-card p-0.5",
        className
      )}
      role="group"
      aria-label="Switch learning mode"
    >
      <button
        type="button"
        onClick={() => setMode("medical")}
        aria-pressed={mode === "medical"}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
          mode === "medical"
            ? "bg-brand text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Stethoscope className="h-3 w-3" />
        Medical
      </button>
      <button
        type="button"
        onClick={() => setMode("patient")}
        aria-pressed={mode === "patient"}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
          mode === "patient"
            ? "bg-brand text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <User className="h-3 w-3" />
        Patient
      </button>
    </div>
  );
}
