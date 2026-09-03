"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DrugMonitoringParameter } from "@/lib/kyp/data";

/**
 * MonitoringChecklist — interactive checklist for monitoring parameters.
 *
 * Each parameter is a checkbox the learner can tick off — making the
 * monitoring section feel actionable rather than passive.
 *
 * State is ephemeral (not persisted) — designed for active learning,
 * not as a clinical tool.
 *
 * Client Component — needs useState for checkbox interactions.
 */
interface MonitoringChecklistProps {
  parameters: DrugMonitoringParameter[];
}

export function MonitoringChecklist({ parameters }: MonitoringChecklistProps) {
  const [checked, setChecked] = React.useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const completedCount = checked.size;
  const totalCount = parameters.length;
  const allDone = completedCount === totalCount;

  return (
    <div>
      {/* Progress header */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-body-sm text-muted-foreground">
          {allDone ? (
            <span className="font-semibold text-success">All monitoring parameters reviewed ✓</span>
          ) : (
            <>Tick off each parameter as you review it · {completedCount}/{totalCount}</>
          )}
        </p>
      </div>

      <ul className="space-y-2">
        {parameters.map((p, i) => {
          const isChecked = checked.has(i);
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all",
                  isChecked
                    ? "border-success/40 bg-success-soft/30"
                    : "border-border/70 bg-card hover:border-brand/40"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                    isChecked
                      ? "border-success bg-success text-white"
                      : "border-border bg-background"
                  )}
                >
                  {isChecked && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className={cn("font-semibold", isChecked && "text-muted-foreground line-through")}>
                      {p.parameter}
                    </p>
                    <span className="rounded-md bg-brand-soft/60 px-2 py-0.5 text-[0.65rem] font-medium text-brand-ink">
                      {p.frequency}
                    </span>
                  </div>
                  <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                    {p.rationale}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
