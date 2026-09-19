/**
 * Weak-Area selection (NEXT-X2) — choosing what to practise from
 * demonstrated weakness instead of manual topic picking.
 *
 * Aggregates the answer log (quiz + custom test history), the
 * Retention Engine's due queue and the Mistake Book into per-class
 * weakness rows, then selects the classes worth drilling:
 *
 *   - minimum volume first: a class is only flaggable after
 *     MIN_TOPIC_SAMPLE answers (8) — no noisy percentages, and no
 *     class is ever called "weak" on thin evidence;
 *   - weak = overall accuracy below WEAK_ACCURACY_THRESHOLD;
 *   - ranking weights demonstrated weakness (low accuracy) toward
 *     recency (recent-window accuracy) and repeated errors (open
 *     Mistake Book entries + retention items due);
 *   - every selection carries a plain-language reason assembled from
 *     the numbers themselves — nothing the data cannot justify.
 *
 * Pure functions over the progress snapshot — deterministic,
 * unit-testable, no storage or React.
 */

import type { KypProgressData } from "@/lib/kyp/progress/progress-store";
import {
  rollupByClass,
  recentAccuracy,
  MIN_TOPIC_SAMPLE,
  RECENT_WINDOW,
} from "@/lib/kyp/analytics/topic-stats";
import { drugs } from "@/lib/kyp/data/drugs/index";

/** Overall accuracy below which a class is worth drilling. */
export const WEAK_ACCURACY_THRESHOLD = 75;

/** One selected weak class with its plain-language justification. */
export interface WeakTopic {
  /** Class label, e.g. "SSRI". */
  classLabel: string;
  /** Overall accuracy 0–100 across the full sample. */
  accuracy: number;
  /** Lifetime answers behind that accuracy. */
  answered: number;
  /** Recent-window accuracy (the "last N answers" view), if any. */
  recent: { accuracy: number; answered: number } | null;
  /** Retention reviews due right now in this class. */
  dueCount: number;
  /** Open Mistake Book entries in this class. */
  mistakeCount: number;
  /** Plain-language explanation assembled from the numbers. */
  reason: string;
  /** The registry slugs of this class's member medications. */
  drugSlugs: string[];
}

export interface WeakAreaSelection {
  /** Weak classes, weakest first. */
  topics: WeakTopic[];
  /** False when no class clears the minimum volume yet. */
  enoughData: boolean;
}

/** Merge the recent windows of every member topic of a class. */
function classRecent(
  data: KypProgressData,
  slugs: string[]
): { accuracy: number; answered: number } | null {
  const merged = slugs
    .flatMap((slug) => data.answers[slug]?.recent ?? [])
    .sort((a, b) => a.at - b.at)
    .slice(-RECENT_WINDOW);
  if (merged.length === 0) return null;
  const correct = merged.filter((r) => r.correct).length;
  return {
    accuracy: Math.round((correct / merged.length) * 100),
    answered: merged.length,
  };
}

/** Count due retention reviews per class, from the topic→class map. */
function dueCountByClass(data: KypProgressData, now: number): Map<string, number> {
  const byClass = new Map<string, number>();
  for (const item of Object.values(data.retention)) {
    if (item.dueAt > now) continue;
    const cls = data.answers[item.topicSlug]?.topicClass;
    if (!cls) continue;
    byClass.set(cls, (byClass.get(cls) ?? 0) + 1);
  }
  return byClass;
}

/** Count open Mistake Book entries per class. */
function mistakesByClass(data: KypProgressData): Map<string, number> {
  const byClass = new Map<string, number>();
  for (const entry of Object.values(data.mistakeBook)) {
    const cls = entry.source.sourceClass;
    byClass.set(cls, (byClass.get(cls) ?? 0) + 1);
  }
  return byClass;
}

/**
 * Select the weak classes to drill. Drug classes only — the custom
 * test engine builds from medication data. (A weak "Diseases" topic
 * has no drug slugs; the caller surfaces it separately via
 * `weakDiseaseAccuracy`.)
 */
export function selectWeakTopics(
  data: KypProgressData,
  now = Date.now()
): WeakAreaSelection {
  const rows = rollupByClass(data.answers).filter((r) => r.key !== "Diseases");
  const due = dueCountByClass(data, now);
  const mistakes = mistakesByClass(data);
  const topics: WeakTopic[] = [];

  for (const row of rows) {
    // Minimum volume threshold — never flag a thin class.
    if (!row.enoughData || row.answered < MIN_TOPIC_SAMPLE) continue;
    if (row.accuracy >= WEAK_ACCURACY_THRESHOLD) continue;

    const recent = classRecent(data, row.slugs);
    const dueCount = due.get(row.key) ?? 0;
    const mistakeCount = mistakes.get(row.key) ?? 0;
    const drugSlugs = drugs
      .filter((d) => d.drugClassLabel === row.key)
      .map((d) => d.slug);
    if (drugSlugs.length === 0) continue;

    // Plain language, number by number — the task's example shape:
    // "8 due in opioid pharmacology, 62% accuracy over last 5 attempts".
    const parts: string[] = [];
    if (dueCount > 0) {
      parts.push(`${dueCount} due in ${row.key}`);
    }
    if (recent) {
      parts.push(`${recent.accuracy}% over the last ${recent.answered} answers`);
    } else {
      parts.push(`${row.accuracy}% accuracy over ${row.answered} answers`);
    }
    if (mistakeCount > 0) {
      parts.push(`${mistakeCount} to revisit`);
    }

    topics.push({
      classLabel: row.key,
      accuracy: row.accuracy,
      answered: row.answered,
      recent,
      dueCount,
      mistakeCount,
      reason: parts.join(", "),
      drugSlugs,
    });
  }

  // Weakest first: lower accuracy, then more due reviews, then label.
  topics.sort(
    (a, b) =>
      a.accuracy - b.accuracy ||
      b.dueCount - a.dueCount ||
      a.classLabel.localeCompare(b.classLabel)
  );

  return {
    topics,
    enoughData: rows.some((r) => r.answered >= MIN_TOPIC_SAMPLE),
  };
}

/** The union of drug slugs a weak-area test should draw from. */
export function weakAreaDrugSlugs(selection: WeakAreaSelection): string[] {
  return [...new Set(selection.topics.flatMap((t) => t.drugSlugs))];
}
