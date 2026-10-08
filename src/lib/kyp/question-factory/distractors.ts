/**
 * Distractor engine.
 *
 * A distractor must be:
 *   - SOURCE-BACKED: an entity that exists in the fact store (never a
 *     made-up value),
 *   - RELEVANT: drawn from the closest proximity tier available (same
 *     class first, then same chapter, then anywhere),
 *   - UNAMBIGUOUSLY WRONG: not documented for the subject, and not a
 *     near-synonym of the correct answer or of anything documented for
 *     the subject (so two options can never both be defensible).
 *
 * Selection is seeded, so the same question seed always yields the same
 * distractors, while different seeds explore different valid sets.
 */

import { contentTokens, jaccard, normalizeText, overlapCoefficient, stemTokens } from "./normalize";

/** A label whose stems are at least this contained in a guarded label is
 *  treated as the same thing (a near-synonym), not a distinct distractor. */
const CONTAINMENT_THRESHOLD = 0.75;
import type { Rng } from "@/lib/kyp/custom-test/rng";
import type { EntityRef } from "./types";

export interface DistractorRequest {
  /** Candidate entities in proximity order: tiers[0] is the closest. */
  tiers: EntityRef[][];
  /** Entity ids that must never be offered (correct answer, anything
   *  documented for the subject). */
  excludeIds: Set<string>;
  /** Labels that no distractor may closely resemble (the correct answer
   *  and everything documented for the subject). */
  guardLabels: string[];
  count: number;
  rng: Rng;
  /** Token-set similarity at or above which a candidate is rejected. */
  similarityThreshold?: number;
  /**
   * Extra per-candidate test, evaluated LAZILY (after shuffling, only until
   * enough distractors are found). Put expensive checks here instead of
   * pre-filtering a whole pool.
   */
  accept?: (entity: EntityRef) => boolean;
}

/** Why a candidate label is too close to a guarded label. */
export function isTooSimilar(
  label: string,
  guardTokens: Array<{ norm: string; tokens: Set<string> }>,
  threshold: number
): boolean {
  const norm = normalizeText(label);
  if (!norm) return true;
  const tokens = contentTokens(label);
  const stems = stemTokens(label);
  for (const guard of guardTokens) {
    if (guard.norm === norm) return true;
    // one label contained in the other ("Hyponatraemia" vs "Hyponatraemia (SIADH)")
    if (
      norm.length >= 4 &&
      guard.norm.length >= 4 &&
      (norm.includes(guard.norm) || guard.norm.includes(norm))
    ) {
      return true;
    }
    if (jaccard(tokens, guard.tokens) >= threshold) return true;
    // inflections of one root ("depressive" / "depression"), and a short
    // label that is mostly contained in a longer one
    const guardStems = stemTokens(guard.norm);
    if (jaccard(stems, guardStems) >= threshold) return true;
    if (overlapCoefficient(stems, guardStems) >= CONTAINMENT_THRESHOLD) return true;
  }
  return false;
}

/**
 * Pick `count` distractors, or null when the pool cannot supply enough
 * safe ones. Returning null (never padding with weak options) is what
 * lets the caller report NOT_ENOUGH_DISTRACTORS instead of lowering
 * quality to hit a number.
 */
export function pickDistractors(req: DistractorRequest): EntityRef[] | null {
  const threshold = req.similarityThreshold ?? 0.5;
  const guards = req.guardLabels.map((label) => ({
    norm: normalizeText(label),
    tokens: contentTokens(label),
  }));

  const chosen: EntityRef[] = [];
  const chosenGuards: Array<{ norm: string; tokens: Set<string> }> = [];
  const seenIds = new Set<string>();

  for (const tier of req.tiers) {
    // unique by id, then shuffle with the question's own seeded rng
    const unique: EntityRef[] = [];
    for (const entity of tier) {
      if (seenIds.has(entity.id)) continue;
      seenIds.add(entity.id);
      unique.push(entity);
    }
    req.rng.shuffle(unique);

    for (const entity of unique) {
      if (chosen.length >= req.count) return chosen;
      if (req.excludeIds.has(entity.id)) continue;
      if (req.accept && !req.accept(entity)) continue;
      // Distinct drugs are distinct answers even when their names overlap
      // ("zopiclone" / "eszopiclone"); only identical names clash.
      const isDrug = entity.type === "drug";
      const norm = normalizeText(entity.label);
      if (isDrug) {
        if (chosenGuards.some((g) => g.norm === norm)) continue;
      } else {
        if (isTooSimilar(entity.label, guards, threshold)) continue;
        // distractors must also differ clearly from each other
        if (isTooSimilar(entity.label, chosenGuards, threshold)) continue;
      }
      chosen.push(entity);
      chosenGuards.push({ norm, tokens: contentTokens(entity.label) });
    }
    if (chosen.length >= req.count) return chosen;
  }
  return chosen.length >= req.count ? chosen : null;
}
