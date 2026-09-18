/**
 * Derivation of the effective requested question count for the Custom
 * Test setup screen.
 *
 * Crash regression (51a327a): typing "0" or a negative number into the
 * Custom question-count input let a zero/negative count reach
 * `buildTest`, which returned an empty `attempt.questions` array. The
 * Test phase then read `questions[index].source` on undefined and
 * crashed the page to a blank screen.
 *
 * Rules:
 *   - Empty (or whitespace-only) input falls back to the preset count.
 *   - A parsed value is clamped to a minimum of 1, so "0", "-5" and any
 *     other sub-1 request can never ask buildTest for zero questions.
 *   - Unparseable input stays NaN — the caller disables Start Test.
 */
export function deriveRequestedCount(
  customCount: string,
  presetCount: number
): number {
  if (customCount.trim() === "") return presetCount;
  const parsed = parseInt(customCount, 10);
  return Number.isFinite(parsed) ? Math.max(1, parsed) : NaN;
}
