"use client";

import { usePatientMode } from "./patient-mode-store";
import type { Drug, PatientModeContent } from "@/lib/kyp/data";

/**
 * Hook that returns the right content based on the current learning mode.
 *
 * Usage:
 *   const { mode, content } = usePatientModeContent(drug);
 *   // content.summary → patientMode.summary if mode === "patient", else drug.summary
 */
export function usePatientModeContent(drug: Drug) {
  const mode = usePatientMode((s) => s.mode);

  const patient = drug.patientMode;

  const content: PatientModeContent & {
    /** Always fall back to medical content if patient version is missing */
    tagline: string;
    summary: string;
    mechanism: string;
    sideEffects: string;
    monitoring: string;
    contraindications: string;
    interactions: string;
  } = {
    tagline: mode === "patient" ? patient.tagline : drug.tagline,
    summary: mode === "patient" ? patient.summary : drug.summary,
    mechanism: mode === "patient" ? patient.mechanism : drug.mechanism.summary,
    sideEffects: mode === "patient" ? patient.sideEffects : "See full side effect list below.",
    monitoring: mode === "patient" ? patient.monitoring : "See full monitoring schedule below.",
    contraindications: mode === "patient" ? patient.contraindications : "See full contraindications below.",
    interactions: mode === "patient" ? patient.interactions : "See full interaction list below.",
  };

  return { mode, content };
}
