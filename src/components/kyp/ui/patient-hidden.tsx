"use client";

import * as React from "react";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";

/**
 * PatientHidden — renders its children in every learning mode EXCEPT
 * Patient. Used to keep exam-oriented chrome (checkpoints, lesson
 * strips, study-time metadata) out of the patient experience without
 * touching the underlying sections.
 */
interface PatientHiddenProps {
  children: React.ReactNode;
}

export function PatientHidden({ children }: PatientHiddenProps) {
  const mode = useGuidedLearning((s) => s.mode);
  if (mode === "patient") return null;
  return <>{children}</>;
}

/**
 * PatientOnly — the inverse: renders its children only in Patient mode.
 */
interface PatientOnlyProps {
  children: React.ReactNode;
}

export function PatientOnly({ children }: PatientOnlyProps) {
  const mode = useGuidedLearning((s) => s.mode);
  if (mode !== "patient") return null;
  return <>{children}</>;
}
