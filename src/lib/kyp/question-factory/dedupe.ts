/**
 * Duplicate detection.
 *
 * A generated question is rejected when it duplicates:
 *   1. an AUTHORED question        (exact or paraphrased: same answer and a
 *                                   near-identical stem)
 *   2. one already accepted in this job / batch  (same semantic fingerprint)
 *   3. one the learner has seen    (only when never-repeat is on)
 *
 * Authored questions are free text, so they are matched by normalised
 * correct answer + stem-word overlap rather than by concept. Questions that
 * test a genuinely different concept are never treated as duplicates:
 * "What class is X?" and "What is X's mechanism?" differ in relation and
 * therefore in fingerprint.
 */

import { jaccard, normalizeText, stemTokens } from "./normalize";
import { textFingerprint } from "./fingerprint";
import type { RejectReason } from "./types";

/** Paraphrase threshold: stem content-word overlap at or above this, with
 *  the same answer, counts as the same question. */
export const PARAPHRASE_THRESHOLD = 0.8;

export interface AuthoredLike {
  stem: string;
  options: string[];
  correctIndex: number;
}

/** Read-only view of a learner's seen fingerprints. */
export interface SeenView {
  has(fingerprint: string): boolean;
}

export class AuthoredIndex {
  private readonly exact = new Set<string>();
  private readonly byAnswer = new Map<string, Array<Set<string>>>();

  constructor(items: Iterable<AuthoredLike>) {
    for (const item of items) {
      const correct = item.options[item.correctIndex];
      if (!correct) continue;
      this.exact.add(textFingerprint(item.stem, correct));
      const key = normalizeText(correct);
      const list = this.byAnswer.get(key) ?? [];
      list.push(stemTokens(item.stem));
      this.byAnswer.set(key, list);
    }
  }

  get size(): number {
    return this.exact.size;
  }

  /** True when an authored question asks the same thing with the same answer. */
  matches(stem: string, correctText: string): boolean {
    if (this.exact.has(textFingerprint(stem, correctText))) return true;
    const candidates = this.byAnswer.get(normalizeText(correctText));
    if (!candidates) return false;
    const tokens = stemTokens(stem);
    return candidates.some((c) => jaccard(tokens, c) >= PARAPHRASE_THRESHOLD);
  }
}

export interface DeduperOptions {
  authored?: AuthoredIndex;
  history?: SeenView;
  /** When true a seen fingerprint is a hard rejection; otherwise unseen
   *  questions are merely preferred by the planner. */
  neverRepeat: boolean;
  /** Fingerprints already accepted (resumed jobs). */
  accepted?: Iterable<string>;
}

export class Deduper {
  private readonly accepted: Set<string>;

  constructor(private readonly opts: DeduperOptions) {
    this.accepted = new Set(opts.accepted ?? []);
  }

  /** Cheap, concept-level check before any question is built. */
  blockedBeforeBuild(fingerprint: string): RejectReason | null {
    if (this.accepted.has(fingerprint)) return "DUPLICATE_IN_BATCH";
    if (this.opts.neverRepeat && this.opts.history?.has(fingerprint)) return "ALREADY_SEEN";
    return null;
  }

  /** Full check once the stem and answer text exist. */
  check(fingerprint: string, stem: string, correctText: string): RejectReason | null {
    const early = this.blockedBeforeBuild(fingerprint);
    if (early) return early;
    if (this.opts.authored?.matches(stem, correctText)) return "DUPLICATE_AUTHORED";
    return null;
  }

  accept(fingerprint: string): void {
    this.accepted.add(fingerprint);
  }

  get acceptedCount(): number {
    return this.accepted.size;
  }
}
