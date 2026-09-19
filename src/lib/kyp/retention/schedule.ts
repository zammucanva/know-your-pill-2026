/**
 * Retention scheduling — the pure interval arithmetic behind the
 * Retention Engine (NEXT-X1).
 *
 * Deliberately simple, per the commissioning spec: interval-based
 * scheduling ONLY. No decay modelling, no ease factors, no adaptive
 * weights — a fixed, explainable ladder every learner can reason about:
 *
 *   answered incorrectly → interval resets to 1 day
 *   answered correctly   → interval advances one rung, capped at 30 days
 *
 * Pure functions over plain data — no storage, no React, no clock
 * reading inside (callers pass `now`), so every rule is unit-testable
 * and deterministic.
 */

/** The review-interval ladder in days (fixed, explainable). */
export const RETENTION_INTERVAL_LADDER = [1, 2, 4, 7, 14, 30] as const;

/** The interval an item falls back to after an incorrect answer. */
export const RETENTION_RESET_DAYS = 1;

/**
 * Advance one rung of the ladder from the current interval.
 * Already at the top → stays at the top (never grows unbounded).
 */
export function nextIntervalDays(currentIntervalDays: number): number {
  const ladder = RETENTION_INTERVAL_LADDER;
  for (const step of ladder) {
    if (currentIntervalDays < step) return step;
  }
  return ladder[ladder.length - 1];
}

/** The interval + due time an incorrect answer produces. */
export function resetInterval(now: number): { intervalDays: number; dueAt: number } {
  return {
    intervalDays: RETENTION_RESET_DAYS,
    dueAt: now + RETENTION_RESET_DAYS * 86_400_000,
  };
}

/** The interval + due time a correct answer produces. */
export function advanceInterval(
  currentIntervalDays: number,
  now: number
): { intervalDays: number; dueAt: number } {
  const intervalDays = nextIntervalDays(currentIntervalDays);
  return { intervalDays, dueAt: now + intervalDays * 86_400_000 };
}

/** Whether an item is due for review at `now`. */
export function isDue(dueAt: number, now: number): boolean {
  return dueAt <= now;
}
