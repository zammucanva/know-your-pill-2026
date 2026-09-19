"use client";

import * as React from "react";
import Link from "next/link";
import { Target } from "lucide-react";

import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  rollupByClass,
  MIN_TOPIC_SAMPLE,
  type TopicAccuracy,
} from "@/lib/kyp/analytics/topic-stats";
import { drugClassIdFromLabel } from "@/lib/kyp/data/drug-taxonomy";

/**
 * TopicAccuracyChips — per-topic accuracy in the Study Mode hub
 * (NEXT-N9).
 *
 * Renders one tappable chip per medication class the learner has
 * practiced, showing real accuracy from the answer log (quiz + custom
 * test history combined). Honesty rules:
 *
 *   - a percentage is ONLY shown after MIN_TOPIC_SAMPLE answers —
 *     below the threshold the chip shows the neutral
 *     "not enough data yet" instead of a noisy number;
 *   - chips sort weakest-first (the useful order for a learner);
 *   - tapping a class chip opens Custom Test pre-filtered to that
 *     class (the weak-area test arrives with X2); the Diseases chip
 *     opens the disease-filtered Quick MCQ set.
 *
 * Pre-hydration and with zero practice history it renders nothing —
 * no placeholder chips, no fabricated numbers.
 */

/** Where a topic chip routes. */
function chipHref(topic: TopicAccuracy): string {
  if (topic.key === "Diseases") return "/quiz?filter=disease";
  return `/quiz/custom?class=${drugClassIdFromLabel(topic.key)}`;
}

export function TopicAccuracyChips() {
  const data = useLocalProgress();

  const topics = React.useMemo(
    () => rollupByClass(data?.answers ?? {}),
    [data]
  );

  // Zero history (or pre-hydration) — render nothing at all.
  if (!data || topics.length === 0) return null;

  const withData = topics.filter((t) => t.enoughData);
  const notEnough = topics.filter((t) => !t.enoughData);

  // Weakest first — the chip list is a "where to practice" list.
  withData.sort((a, b) => a.accuracy - b.accuracy || a.label.localeCompare(b.label));

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-overline text-muted-foreground">Topic accuracy</p>
        <p className="text-xs text-muted-foreground/60">
          From your practice history · {MIN_TOPIC_SAMPLE}+ answers per topic
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Per-topic accuracy">
        {withData.map((topic) => (
          <Link
            key={topic.key}
            href={chipHref(topic)}
            role="listitem"
            aria-label={`Practice ${topic.label}: ${topic.accuracy}% accuracy over ${topic.answered} answers`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand kyp-focus-ring"
          >
            {topic.label}
            <span className="font-normal text-muted-foreground tabular-nums">
              — {topic.accuracy}%
            </span>
            <span className="font-normal text-muted-foreground/50 tabular-nums">
              · {topic.answered}
            </span>
          </Link>
        ))}
        {notEnough.map((topic) => (
          <Link
            key={topic.key}
            href={chipHref(topic)}
            role="listitem"
            aria-label={`Practice ${topic.label}: not enough data yet`}
            className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-transparent px-3 py-1.5 text-xs text-muted-foreground/70 transition-colors hover:border-brand/30 hover:text-foreground kyp-focus-ring"
          >
            {topic.label}
            <span className="font-normal italic opacity-70">
              — not enough data yet
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground/60">
        <Target className="h-3 w-3" aria-hidden />
        Tap a topic to practice it. Percentages need {MIN_TOPIC_SAMPLE}+
        answers on that class.
      </p>
    </div>
  );
}
