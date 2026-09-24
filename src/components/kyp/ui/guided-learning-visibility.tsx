"use client";

import * as React from "react";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import type { Drug, LearningPath } from "@/lib/kyp/data";

/**
 * GuidedLearningVisibility — wraps a section to show/hide it based on
 * the current guided learning mode.
 *
 * Usage (drug course):
 *   <GuidedLearningVisibility drug={drug} sectionId="neural-pathways">
 *     <DrugNeuralPathways drug={drug} />
 *   </GuidedLearningVisibility>
 *
 * Usage (psychiatry course — passes the learning paths directly):
 *   <GuidedLearningVisibility paths={course.learningPaths} sectionId="mechanism">
 *     <CourseMechanism course={course} />
 *   </GuidedLearningVisibility>
 *
 * The component checks if the sectionId is in the current learning path's
 * visibleSections list. If not, it hides the section.
 *
 * Client Component — reads guided learning mode from Zustand store.
 */
interface GuidedLearningVisibilityProps {
  drug?: Drug;
  /** Direct learning paths (psychiatry course registry) — takes
   *  precedence over the drug prop when provided. */
  paths?: LearningPath[];
  sectionId: string;
  children: React.ReactNode;
}

export function GuidedLearningVisibility({ drug, paths, sectionId, children }: GuidedLearningVisibilityProps) {
  const mode = useGuidedLearning((s) => s.mode);

  // Get the current learning path's visible sections
  const learningPaths = paths ?? drug?.learningPaths;
  const path = learningPaths?.find((p) => p.mode === mode);

  // If no learning paths defined, show everything (backward compat)
  if (!path) return <>{children}</>;

  // Check if this section is visible in the current mode
  const isVisible = path.visibleSections.includes(sectionId);

  if (!isVisible) return null;

  return <>{children}</>;
}
