/**
 * Integration with the existing quiz system.
 *
 * Generated questions are presented through the SAME runner as authored
 * and legacy template questions by mapping them onto the existing
 * TestQuestion shape. The factory therefore needs no quiz engine of its
 * own: option selection, scoring, explanations, progress, results and
 * review all continue to work unchanged.
 *
 * Identities are namespaced ("qf|<fingerprint>") so a generated question
 * can never collide with an authored one in progress records or the
 * Mistake Book, and the sourceType stays visible.
 */

import type { DifficultyTier } from "@/lib/kyp/custom-test/difficulty";
import type { PoolQuestion, TestQuestion } from "@/lib/kyp/custom-test/types";
import type { Difficulty, GeneratedQuestion } from "./types";

export const FACTORY_IDENTITY_PREFIX = "qf|";

const TIER: Record<Difficulty, DifficultyTier> = {
  easy: "foundation",
  moderate: "clinical",
  hard: "advanced",
};

export function isFactoryIdentity(identity: string): boolean {
  return identity.startsWith(FACTORY_IDENTITY_PREFIX);
}

/** Where a question with no drug page links to instead. */
const FALLBACK_HREF = "/medicine";

export function toPoolQuestion(q: GeneratedQuestion): PoolQuestion {
  const source = q.provenance.sources[0];
  return {
    identity: `${FACTORY_IDENTITY_PREFIX}${q.fingerprint}`,
    question: q.stem,
    options: q.options.map((o) => o.text),
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    evidence: q.explanation,
    source: {
      sourceName: source?.name ?? "KYP",
      sourceSlug: source?.slug ?? "",
      sectionLabel: source?.sectionLabel ?? "Overview",
      sectionHref: source?.sectionHref ?? FALLBACK_HREF,
      sourceClass: source?.classLabel ?? "",
    },
    templateId: `qf:${q.provenance.templateId}`,
    difficulty: TIER[q.difficulty],
  };
}

/** The options are already in their final (balanced, seeded) order. */
export function toTestQuestion(q: GeneratedQuestion): TestQuestion {
  const pool = toPoolQuestion(q);
  return { ...pool, attemptOptions: pool.options, attemptCorrectIndex: pool.correctIndex };
}
