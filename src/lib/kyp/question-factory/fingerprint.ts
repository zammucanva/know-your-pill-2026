/**
 * Question fingerprints.
 *
 * SEMANTIC fingerprint: identifies WHAT is being asked. Built from the
 * concept (relations, subject entities, correct-answer entities, polarity
 * and structural frame), so these all collapse to one fingerprint:
 *
 *   "Which class does fluoxetine belong to?"
 *   "Fluoxetine is classified as which type of medication?"
 *   the same question with options in another order or other distractors
 *
 * while "What class is fluoxetine?" and "What is fluoxetine's mechanism?"
 * stay distinct (different relation). It is used for deduplication and for
 * the never-repeat history.
 *
 * STRUCTURE fingerprint: the semantic fingerprint plus the exact option
 * set. For analytics only; never used to decide duplication.
 *
 * TEXT fingerprint: for AUTHORED questions, which carry no structured
 * concept. Built from the stem's content words and the correct answer.
 */

import { FINGERPRINT_VERSION } from "./version";
import { contentTokens, hashString, normalizeText } from "./normalize";
import type { ConceptKey } from "./templates/types";

export function semanticFingerprint(concept: ConceptKey): string {
  return hashString(
    [
      `v${FINGERPRINT_VERSION}`,
      [...concept.relations].sort().join(","),
      [...concept.subjectIds].sort().join(","),
      [...concept.answerIds].sort().join(","),
      concept.polarity,
      concept.frame,
    ].join("|")
  );
}

export function structureFingerprint(semantic: string, optionKeys: string[]): string {
  return hashString([semantic, ...[...optionKeys].sort()].join("|"));
}

/** Order-independent fingerprint of a stem's content words + the answer. */
export function textFingerprint(stem: string, correctText: string): string {
  const words = [...contentTokens(stem)].sort().join(" ");
  return hashString(`${words}||${normalizeText(correctText)}`);
}
