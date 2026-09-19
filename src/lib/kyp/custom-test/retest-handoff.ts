/**
 * Retest request handoff (NOW-N2) — the bridge between a list of
 * questions-to-revisit and the Custom Test runner.
 *
 * The Mistake Book (/study/mistakes) and the per-test Review Incorrect
 * screen both need to hand an EXACT set of question identities to
 * /quiz/custom. The request is staged in sessionStorage (never
 * localStorage — a retest is a one-shot intent, not learning state)
 * and consumed exactly once by the runner on mount.
 */

export const RETEST_REQUEST_KEY = "kyp:retest-request:v1";

/** What gets staged when the learner asks to be retested. */
export interface RetestRequest {
  /** Exact question identities to re-present. */
  identities: string[];
  /** Honest label, e.g. "Your Mistake Book" or "This test's incorrect answers". */
  label: string;
  /** identity → the option text chosen last time (for before/after
   *  comparison in the results and review screens). */
  previousChosen: Record<string, string>;
  /** When the request was staged (diagnostic only). */
  at: number;
}

/** Stage a retest (best-effort; storage failures are silent — the
 *  CTA simply falls back to a normal navigation). */
export function stageRetestRequest(request: Omit<RetestRequest, "at">): boolean {
  try {
    if (typeof window === "undefined" || !window.sessionStorage) return false;
    window.sessionStorage.setItem(
      RETEST_REQUEST_KEY,
      JSON.stringify({ ...request, at: Date.now() })
    );
    return true;
  } catch {
    return false;
  }
}

/** Consume the staged retest (returns null when none is pending). */
export function takeRetestRequest(): RetestRequest | null {
  try {
    if (typeof window === "undefined" || !window.sessionStorage) return null;
    const raw = window.sessionStorage.getItem(RETEST_REQUEST_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(RETEST_REQUEST_KEY);
    const parsed = JSON.parse(raw) as RetestRequest;
    if (!Array.isArray(parsed.identities) || parsed.identities.length === 0) {
      return null;
    }
    return {
      identities: parsed.identities.filter((id) => typeof id === "string"),
      label: typeof parsed.label === "string" ? parsed.label : "Retest",
      previousChosen:
        parsed.previousChosen && typeof parsed.previousChosen === "object"
          ? parsed.previousChosen
          : {},
      at: typeof parsed.at === "number" ? parsed.at : Date.now(),
    };
  } catch {
    return null;
  }
}
