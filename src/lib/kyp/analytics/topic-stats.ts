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

/**
 * Mistake persistence per class (X5) — how often the same topic
 * reappears as wrong: identities missed MORE THAN ONCE (wrongCount ≥
 * 2 in the Mistake Book) plus the recent wrong-answer rate. Plain
 * numbers only — no judgement language.
 */
export interface TopicPersistence {
  /** Class label. */
  key: string;
  /** Questions missed more than once (repeat misses). */
  repeatedMisses: number;
  /** Currently open Mistake Book entries. */
  openMistakes: number;
  /** Wrong share of the class's recent answers, 0–100 (null = no data). */
  recentWrongRate: number | null;
}

export function mistakePersistence(
  mistakeBook: Record<string, { source: { sourceClass: string }; wrongCount: number }>,
  answers: Record<string, TopicStats & { topicClass: string }>,
  window = RECENT_WINDOW
): TopicPersistence[] {
  const repeated = new Map<string, number>();
  const open = new Map<string, number>();
  for (const entry of Object.values(mistakeBook)) {
    const cls = entry.source.sourceClass;
    open.set(cls, (open.get(cls) ?? 0) + 1);
    if (entry.wrongCount >= 2) {
      repeated.set(cls, (repeated.get(cls) ?? 0) + 1);
    }
  }
  const recentByClass = new Map<string, { correct: number; total: number }>();
  for (const stats of Object.values(answers)) {
    const bucket = recentByClass.get(stats.topicClass) ?? { correct: 0, total: 0 };
    for (const r of stats.recent.slice(-window)) {
      bucket.total += 1;
      if (r.correct) bucket.correct += 1;
    }
    recentByClass.set(stats.topicClass, bucket);
  }
  const keys = new Set([...repeated.keys(), ...open.keys(), ...recentByClass.keys()]);
  return [...keys]
    .map((key) => {
      const bucket = recentByClass.get(key);
      return {
        key,
        repeatedMisses: repeated.get(key) ?? 0,
        openMistakes: open.get(key) ?? 0,
        recentWrongRate:
          bucket && bucket.total > 0
            ? Math.round(((bucket.total - bucket.correct) / bucket.total) * 100)
            : null,
      };
    })
    .sort((a, b) => b.repeatedMisses - a.repeatedMisses || a.key.localeCompare(b.key));
}
