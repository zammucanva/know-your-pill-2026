"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Patient Mode store.
 *
 * When `mode === "patient"`, drug page components render patient-friendly
 * language from the `patientMode` field of the Drug data object.
 * When `mode === "medical"`, they render the full clinical content.
 *
 * Persisted to localStorage so the choice survives navigation.
 */

export type LearningMode = "medical" | "patient";

interface PatientModeState {
  mode: LearningMode;
  setMode: (mode: LearningMode) => void;
  toggle: () => void;
}

export const usePatientMode = create<PatientModeState>()(
  persist(
    (set) => ({
      mode: "medical",
      setMode: (mode) => set({ mode }),
      toggle: () => set((s) => ({ mode: s.mode === "medical" ? "patient" : "medical" })),
    }),
    {
      name: "kyp-learning-mode",
      version: 1,
    }
  )
);
