"use client";

import * as React from "react";
import { History } from "lucide-react";

import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";

/**
 * PracticeStatsLine — one honest line of real practice history inside
 * the Study Mode Practice section.
 *
 * Reads the EXISTING progress namespaces (never merges them):
 *   - practice   → /quiz aggregate run history
 *   - customTest → /quiz/custom aggregate history (isolated namespace)
 *
 * Renders nothing until at least one completed run exists — no
 * fabricated numbers, no zero-state padding.
 */
export function PracticeStatsLine() {
  const data = useLocalProgress();
  if (!data) return null;

  const practice = data.practice;
  const custom = data.customTest;
  if (practice.attempts === 0 && custom.attempts === 0) return null;

  const parts: string[] = [];
  if (practice.attempts > 0) {
    const runs = `${practice.attempts} completed ${
      practice.attempts === 1 ? "run" : "runs"
    }`;
    const best =
      practice.bestScore !== null ? ` · best ${practice.bestScore}%` : "";
    parts.push(`Quick MCQs: ${runs}${best}`);
  }
  if (custom.attempts > 0) {
    const runs = `${custom.attempts} completed ${
      custom.attempts === 1 ? "test" : "tests"
    }`;
    const best =
      custom.bestScore !== null ? ` · best ${custom.bestScore}%` : "";
    parts.push(`Custom Test: ${runs}${best}`);
  }

  return (
    <p className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <History className="h-3.5 w-3.5" aria-hidden />
      <span className="tabular-nums">{parts.join("  ·  ")}</span>
      <span className="text-muted-foreground/50">
        — kept on this device only.
      </span>
    </p>
  );
}
