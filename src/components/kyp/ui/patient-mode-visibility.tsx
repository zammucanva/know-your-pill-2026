"use client";

import * as React from "react";
import { useDifficulty } from "@/components/kyp/ui/difficulty-toggle";
import { hiddenInPatientMode } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * PatientModeVisibility — wraps a section to hide it in Patient mode.
 *
 * Usage:
 *   <PatientModeVisibility sectionId="exam-pearls">
 *     <DrugExamPearls drug={drug} />
 *   </PatientModeVisibility>
 *
 * In Patient mode, the wrapped section is not rendered at all.
 * In Medical/Resident/Clinician modes, it renders normally.
 *
 * Client Component — reads difficulty from Zustand store.
 */
interface PatientModeVisibilityProps {
  sectionId: string;
  children: React.ReactNode;
}

export function PatientModeVisibility({ sectionId, children }: PatientModeVisibilityProps) {
  const level = useDifficulty((s) => s.level);

  // In Patient mode, hide sections that are in the hidden list
  if (level === "patient" && hiddenInPatientMode.includes(sectionId)) {
    return null;
  }

  return <>{children}</>;
}
