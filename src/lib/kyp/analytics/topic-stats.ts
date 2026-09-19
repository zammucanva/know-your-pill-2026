/**
 * Topic statistics — the pure aggregation layer over the answer log
 * (NEXT-N9 / X2 / X5).
 *
 * The store records one small event per answered question (see
 * `recordAnswerEvents` in progress-store.ts). This module turns that
 * log into the numbers the product is allowed to show:
 *
 *   - per-topic accuracy (a topic = one medication or disease page)
 *   - per-class rollups (SSRIs, SNRIs, … — the chip dimension)
 *   - recent-window accuracy (recency-weighted view for X2)
 *
 * Honesty rules (same family as the rest of KYP):
 *   - Every displayed statistic carries its sample size.
 *   - `MIN_TOPIC_SAMPLE` answers must exist before a percentage may be
 *     shown — callers must render the neutral "not enough data yet"
 *     state below the threshold instead of a noisy number.
 *   - No topic is ever called "weak" below the threshold.
 *
 * Pure functions over plain data — deterministic and unit-testable.
 */

import type { TopicStats } from "@/lib/kyp/progress/progress-store";

/** Minimum answered questions before any accuracy percentage is shown. */
export const MIN_TOPIC_SAMPLE = 8;

/** Size of the recency window used for recent-accuracy (X2). */
export const RECENT_WINDOW = 10;

/** One aggregated accuracy row. */
export interface TopicAccuracy {
  /** Aggregation key — a class label ("SSRI") or a page slug. */
  key: string;
  /** Display label. */
  label: string;
  /** Answers in the sample. */
  answered: number;
  /** Correct answers in the sample. */
  correct: number;
  /** Accuracy 0–100 — only meaningful when `answered >= minSample`. */
  accuracy: number;
  /** Whether the sample clears the minimum for display. */
  enoughData: boolean;
  /** The most recent answer timestamp (0 when never answered). */
  lastSeenAt: number;
  /** Member page slugs (per-class rollups; empty for page rows). */
  slugs: string[];
}

function toRow(
  key: string,
  label: string,
  statsList: Array<{ slug: string; stats: TopicStats }>
): TopicAccuracy {
  let answered = 0;
  let correct = 0;
  let lastSeenAt = 0;
  for (const { stats } of statsList) {
    answered += stats.answered;
    correct += stats.correct;
    if (stats.lastSeenAt > lastSeenAt) lastSeenAt = stats.lastSeenAt;
  }
  return {
    key,
    label,
    answered,
    correct,
    accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    enoughData: answered >= MIN_TOPIC_SAMPLE,
    lastSeenAt,
    slugs: statsList.map((s) => s.slug),
  };
}

/**
 * Per-class rollup — the N9 chip dimension. Each answer event carries
 * its source class (the drug's class label, or "Diseases"); this sums
 * every page of the same class into one row.
 */
export function rollupByClass(
  answers: Record<string, TopicStats & { topicName: string; topicClass: string }>
): TopicAccuracy[] {
  const byClass = new Map<
    string,
    Array<{ slug: string; stats: TopicStats & { topicName: string; topicClass: string } }>
  >();
  for (const [slug, stats] of Object.entries(answers)) {
    const list = byClass.get(stats.topicClass) ?? [];
    list.push({ slug, stats });
    byClass.set(stats.topicClass, list);
  }
  const rows: TopicAccuracy[] = [];
  for (const [classLabel, list] of byClass) {
    // Class display label: pluralise is the taxonomy's job; here we
    // reuse the class label verbatim (it is the locked dimension).
    rows.push(toRow(classLabel, classLabel, list));
  }
  return rows.sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * Recent-window accuracy for one topic — the "62% over the last 5
 * attempts" number used by X2's plain-language explanations. Returns
 * null when the window has no answers (callers show honest fallbacks).
 */
export function recentAccuracy(stats: TopicStats, window = RECENT_WINDOW): {
  accuracy: number;
  answered: number;
} | null {
  const recent = stats.recent.slice(-window);
  if (recent.length === 0) return null;
  const correct = recent.filter((r) => r.correct).length;
  return {
    accuracy: Math.round((correct / recent.length) * 100),
    answered: recent.length,
  };
}

/**
 * Trend points for one topic — chronological correct/incorrect flags
 * for the analytics view (X5). Oldest → newest.
 */
export function trendSeries(stats: TopicStats): Array<{ at: number; correct: boolean }> {
  return stats.recent.map((r) => ({ at: r.at, correct: r.correct }));
}
