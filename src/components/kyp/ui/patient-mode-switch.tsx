"use client";

import * as React from "react";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";

/**
 * PatientModeSwitch — renders either the patient variant or the
 * medical variant of a section depending on the current guided
 * learning mode.
 *
 * Both variants are passed as pre-rendered children from the server
 * page, so the medical content keeps its server rendering and the
 * patient content is a plain static tree — the switch itself is the
 * only client JavaScript involved (a store lookup).
 */
interface PatientModeSwitchProps {
  /** Rendered when guided learning mode is "patient". */
  patient: React.ReactNode;
  /** Rendered in every other mode (MBBS / NEET PG / Resident). */
  medical: React.ReactNode;
}

export function PatientModeSwitch({ patient, medical }: PatientModeSwitchProps) {
  const mode = useGuidedLearning((s) => s.mode);
  return <>{mode === "patient" ? patient : medical}</>;
}
