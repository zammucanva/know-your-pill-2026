"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck, X } from "lucide-react";

import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  buildDailyPlan,
  type DailyPlanStep,
} from "@/lib/kyp/study/daily-plan";
import { dismissDailyPlan, isDailyPlanDismissed } from "@/lib/kyp/progress/progress-store";

/**
 * DailyPlan — "Today's plan" on the Study Mode hub (NEXT-X8).
 *
 * A fixed, explainable ordering (reviews → one weak drill → resume
 * or start), composed by the pure buildDailyPlan heuristic — no
 * adaptivity, no scoring model. Fully dismissible for the rest of
 * the day: one tap hides it until tomorrow, and the copy never nags
 * or guilt-trips (no streaks, no "you missed" language).
 *
 * Renders nothing pre-hydration and nothing once dismissed today.
 */
export function DailyPlan() {
  const data = useLocalProgress();
  const [dismissed, setDismissed] = React.useState(true);

  React.useEffect(() => {
    if (!data) return;
    setDismissed(isDailyPlanDismissed());
  }, [data]);

  if (!data || dismissed) return null;

  const steps = buildDailyPlan(data);

  const handleDismiss = () => {
    dismissDailyPlan();
    setDismissed(true);
  };

  return (
    <div className="mt-10 max-w-xl rounded-xl border border-brand/30 bg-brand-soft/10 p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="flex items-center gap-2 text-overline text-brand">
          <CalendarCheck className="h-3.5 w-3.5" aria-hidden />
          Today&apos;s plan
        </p>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Hide today's plan for the rest of the day"
          className="rounded p-1 text-muted-foreground/40 transition-colors hover:text-muted-foreground kyp-focus-ring"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <ol className="mt-4 space-y-1">
        {steps.map((step, i) => (
          <PlanStep key={step.id} step={step} index={i} />
        ))}
      </ol>

      <p className="mt-4 text-xs text-muted-foreground/60 leading-relaxed">
        A fixed order: clear reviews, then one weak drill, then continue
        where you left off. Hide it for today whenever you like.
      </p>
    </div>
  );
}

function PlanStep({ step, index }: { step: DailyPlanStep; index: number }) {
  return (
    <li>
      <Link
        href={step.href}
        className="group flex items-start gap-4 rounded-lg px-2 py-2.5 transition-colors hover:bg-brand-soft/30 kyp-focus-ring"
      >
        <span className="w-5 shrink-0 pt-0.5 font-mono text-xs text-brand/70">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-foreground">
            {step.title}
          </span>
          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
            {step.detail}
          </span>
        </span>
        <ArrowRight
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-brand"
          aria-hidden
        />
      </Link>
    </li>
  );
}
