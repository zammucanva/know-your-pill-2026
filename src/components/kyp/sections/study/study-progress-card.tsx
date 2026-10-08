"use client";

import * as React from "react";
import { Target } from "lucide-react";

import { ModuleCard, ModuleHeader } from "@/components/kyp/dashboard/modules-hero";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";

/**
 * StudyProgressCard: the dashboard-style frame around the Study Mode
 * progress widgets (reviews due, Mistake Book, topic accuracy, practice
 * history). Each widget still renders only real data; this card only
 * decides whether there is anything to frame yet.
 *
 * Before any practice exists it shows a short honest hint instead of an
 * empty box, and it renders nothing before hydration.
 */
export function StudyProgressCard({ children }: { children: React.ReactNode }) {
  const data = useLocalProgress();
  if (!data) return null;

  const hasAnything =
    Object.keys(data.mistakeBook).length > 0 ||
    Object.keys(data.answers ?? {}).length > 0 ||
    data.practice.attempts > 0 ||
    data.customTest.attempts > 0 ||
    Object.keys(data.retention ?? {}).length > 0;

  return (
    <ModuleCard id="progress">
      <ModuleHeader icon={Target} title="Your progress" aside="Kept on this device" />
      <div className="px-5 pb-5">
        {hasAnything ? (
          children
        ) : (
          <p className="pt-5 text-sm leading-relaxed text-muted-foreground">
            Nothing to show yet. Reviews due, questions to revisit, topic accuracy and practice
            history appear here once you start practising.
          </p>
        )}
      </div>
    </ModuleCard>
  );
}
