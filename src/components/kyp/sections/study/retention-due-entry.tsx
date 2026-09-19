"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import { getRetentionDueCount } from "@/lib/kyp/progress/progress-store";

/**
 * RetentionDueEntry — the "what's due" row inside the Study Mode
 * Practice section (NEXT-X1), rendered ONLY when at least one
 * scheduled review is due right now (real data only, no placeholder
 * padding). Links to the review-session page.
 */
export function RetentionDueEntry() {
  const data = useLocalProgress();
  const [due, setDue] = React.useState<number | null>(null);

  // The due count depends on the wall clock, not just the store —
  // compute it after hydration only (pre-hydration renders nothing).
  React.useEffect(() => {
    if (!data) return;
    setDue(getRetentionDueCount());
  }, [data]);

  if (!data || due === null || due === 0) return null;

  return (
    <div className="flex items-start gap-6 border-b border-border/15 py-5 last:border-0">
      <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} aria-hidden />
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          Reviews due
        </h3>
        <p className="mt-1 max-w-3xl text-body-sm text-muted-foreground/80 leading-relaxed">
          {due} {due === 1 ? "question" : "questions"} scheduled for spaced
          review — questions you missed before, brought back at growing
          intervals as you get them right.
        </p>
      </div>
      <Link
        href="/study/review"
        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand/60"
      >
        Start reviewing
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
