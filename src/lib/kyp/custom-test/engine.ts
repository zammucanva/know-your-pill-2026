/**
 * Custom Test engine — pool building, deduplication, real availability
 * calculation, balanced selection and shuffle-safe attempt assembly.
 *
 * Guarantees (pinned by tests/custom-test.test.ts):
 *   - Pool questions are unique by identity (source | fact | template |
 *     variant) — an attempt NEVER contains duplicates.
 *   - The availability number shown on the setup screen is the REAL
 *     unique pool size for the current selection. Requesting more than
 *     available is capped with an explicit message — never silently
 *     padded by duplicating questions.
 *   - Answer-choice shuffling is skipped for any question whose options
 *     contain position-dependent text ("All of the above", "None of the
 *     above", "Both A and B") — the medical meaning of the option set is
 *     never altered.
 *   - Selection is balanced across template ids, so a run never
 *     degenerates into 20 near-identical side-effect questions.
 */

import { drugs } from "@/lib/kyp/data/drugs/index";
import { diseases } from "@/lib/kyp/data/diseases/index";
import { anchoredDrugHref } from "@/lib/kyp/drug-course-sections";
import {
  filterByDifficulty,
  resolveQuestionTier,
  type DifficultySelection,
} from "./difficulty";
import { createRng } from "./rng";
import { TEMPLATES, TEMPLATE_IDS } from "./templates";
import type { Rng } from "./rng";
import type { PoolQuestion, TestQuestion } from "./types";

/* ============================================================
   Authored MCQ ingestion
   ============================================================ */

/** Options whose positions are meaningful — never reshuffle these. */
const UNSHUFFLABLE = [
  "all of the above",
  "none of the above",
  "both a and b",
  "all of these",
  "none of these",
];

export function isShuffleSafe(options: string[]): boolean {
  const lower = options.map((o) => o.toLowerCase().trim());
  return !lower.some((o) => UNSHUFFLABLE.some((u) => o.includes(u)));
}

function authoredQuestions(drugSlugs: Set<string>): PoolQuestion[] {
  const out: PoolQuestion[] = [];
  for (const drug of drugs) {
    if (!drugSlugs.has(drug.slug)) continue;
    if (!drug.microQuizzes) continue;
    for (const quiz of drug.microQuizzes) {
      out.push({
        identity: `${drug.slug}|mcq:${quiz.id}`,
        question: quiz.question,
        options: quiz.options,
        correctIndex: quiz.correctIndex,
        explanation: quiz.explanation,
        evidence: quiz.explanation,
        source: {
          sourceName: drug.genericName,
          sourceSlug: drug.slug,
          // NOW-N6: deep-link to the exact anchored section the quiz
          // follows on the drug page (verified against the course
          // template) instead of the bare page root.
          sectionLabel: "In-course quiz",
          sectionHref: anchoredDrugHref(drug.slug, quiz.afterSectionId),
          sourceClass: drug.drugClassLabel,
        },
        templateId: "authored",
        difficulty: resolveQuestionTier({
          templateId: "authored",
          question: quiz.question,
        }),
      });
    }
  }
  return out;
}

/* ============================================================
   Pool building
   ============================================================ */

/** Build the full unique question pool for a topic selection. */
export function buildQuestionPool(drugSlugs: string[]): PoolQuestion[] {
  const selected = new Set(drugSlugs);
  if (selected.size === 0) return [];
  const selectedDrugs = drugs.filter((d) => selected.has(d.slug));
  const allDrugs = drugs;

  const pool: PoolQuestion[] = [];
  const seen = new Set<string>();

  const push = (
    q: Omit<PoolQuestion, "identity" | "difficulty">,
    variant: string
  ) => {
    const identity = `${q.source.sourceSlug}|${q.evidence}|${q.templateId}|${variant}`;
    if (seen.has(identity)) return;
    seen.add(identity);
    pool.push({
      ...q,
      identity,
      difficulty: resolveQuestionTier(q),
    });
  };

  // Authored MCQs first (highest-value, human-written).
  for (const q of authoredQuestions(selected)) {
    seen.add(q.identity);
    pool.push(q);
  }

  // Template-stamped questions.
  for (const drug of selectedDrugs) {
    for (const templateId of TEMPLATE_IDS) {
      const template = TEMPLATES[templateId];
      const { questions } = template({ drug, allDrugs });
      questions.forEach((q, i) => push(q, String(i)));
    }
  }

  return pool;
}

export interface PoolStats {
  authored: number;
  generated: number;
  total: number;
  perTemplate: Record<string, number>;
  /** Question counts per reasoning tier (Phase 5). */
  perDifficulty: Record<string, number>;
}

/** Real availability for the setup screen — optionally tier-filtered. */
export function getPoolStats(
  drugSlugs: string[],
  difficulty: DifficultySelection = "all"
): PoolStats {
  const pool = filterByDifficulty(buildQuestionPool(drugSlugs), difficulty);
  const perTemplate: Record<string, number> = {};
  const perDifficulty: Record<string, number> = {};
  let authored = 0;
  for (const q of pool) {
    perTemplate[q.templateId] = (perTemplate[q.templateId] ?? 0) + 1;
    perDifficulty[q.difficulty] = (perDifficulty[q.difficulty] ?? 0) + 1;
    if (q.templateId === "authored") authored++;
  }
  return {
    authored,
    generated: pool.length - authored,
    total: pool.length,
    perTemplate,
    perDifficulty,
  };
}

/* ============================================================
   Attempt assembly
   ============================================================ */

/**
 * Balanced selection across templates: round-robin one question per
 * template id per round, seeded within each round, until the requested
 * count is met or the pool is exhausted.
 */
function selectBalanced(pool: PoolQuestion[], count: number, rng: Rng): PoolQuestion[] {
  const byTemplate = new Map<string, PoolQuestion[]>();
  for (const q of pool) {
    const list = byTemplate.get(q.templateId) ?? [];
    list.push(q);
    byTemplate.set(q.templateId, list);
  }
  for (const list of byTemplate.values()) rng.shuffle(list);

  const templateOrder = rng.shuffle([...byTemplate.keys()]);
  const chosen: PoolQuestion[] = [];
  let round = 0;
  let progressed = true;
  while (chosen.length < count && progressed) {
    progressed = false;
    for (const templateId of templateOrder) {
      if (chosen.length >= count) break;
      const list = byTemplate.get(templateId)!;
      const q = list[round];
      if (q) {
        chosen.push(q);
        progressed = true;
      }
    }
    round++;
  }
  return chosen;
}

export interface BuildTestResult {
  /** The assembled attempt questions (shuffled). */
  questions: TestQuestion[];
  /** The count actually delivered (≤ requested; = availability if capped). */
  deliveredCount: number;
  /** True when the request exceeded the real pool and was capped. */
  capped: boolean;
  /** Real availability for this selection. */
  available: number;
}

/** Present one pool question as an attempt question, re-shuffling
 *  options where (and only where) it is medically safe. */
function toTestQuestion(q: PoolQuestion, rng: Rng): TestQuestion {
  if (!isShuffleSafe(q.options)) {
    return {
      ...q,
      attemptOptions: q.options,
      attemptCorrectIndex: q.correctIndex,
    };
  }
  const order = q.options.map((option, i) => ({ option, i }));
  rng.shuffle(order);
  const attemptOptions = order.map((o) => o.option);
  const attemptCorrectIndex = order.findIndex((o) => o.i === q.correctIndex);
  return { ...q, attemptOptions, attemptCorrectIndex };
}

/**
 * Assemble an attempt: unique questions, balanced across templates,
 * question order shuffled, answer choices shuffled where safe.
 *
 * `opts.difficulty` (Phase 5) filters the pool to one reasoning tier
 * BEFORE selection — "all" (the default) keeps the previous
 * behaviour exactly. Tier filtering never touches identities, so
 * attempts and Mistake Book entries remain cross-tier compatible.
 */
export function buildTest(
  drugSlugs: string[],
  requestedCount: number,
  seed: number,
  opts: { difficulty?: DifficultySelection } = {}
): BuildTestResult {
  const difficulty = opts.difficulty ?? "all";
  const pool = filterByDifficulty(buildQuestionPool(drugSlugs), difficulty);
  const rng = createRng(seed);
  const available = pool.length;
  const capped = requestedCount > available;
  const count = Math.max(0, Math.min(requestedCount, available));

  const selected = selectBalanced(pool, count, rng);
  rng.shuffle(selected);

  const questions: TestQuestion[] = selected.map((q) => toTestQuestion(q, rng));

  return { questions, deliveredCount: questions.length, capped, available };
}

/* ============================================================
   Retest assembly (NOW-N2)
   ============================================================ */

/** Source slug encoded at the head of every question identity. */
function sourceSlugOfIdentity(identity: string): string {
  return identity.split("|")[0];
}

/**
 * Build a retest from an EXACT set of question identities — the
 * per-test "Retest me on these" action and the Mistake Book's
 * cross-test retest both route through here.
 *
 * The exact questions are regenerated via the existing deterministic
 * generator: the pool is rebuilt from the identities' source slugs,
 * filtered to the requested identities, and re-presented with a fresh
 * seed (option order re-shuffled where safe; question order optionally
 * shuffled). No new questions can enter a retest, and every question
 * keeps its canonical medical content.
 *
 * Identities that no longer exist in the data layer (content changed
 * since the attempt) are dropped and reported via `capped` — a retest
 * NEVER substitutes lookalike questions.
 */
export function buildRetest(
  identities: string[],
  seed: number,
  opts: { shuffleOrder?: boolean } = {}
): BuildTestResult {
  const wanted = new Set(identities);
  if (wanted.size === 0) {
    return { questions: [], deliveredCount: 0, capped: false, available: 0 };
  }
  const slugs = [...new Set(identities.map(sourceSlugOfIdentity))];
  const pool = buildQuestionPool(slugs).filter((q) => wanted.has(q.identity));

  // Disease-authored questions (recorded from /quiz practice) share the
  // same identity scheme — pull them in so a retest of "the exact set"
  // never silently drops a question the Mistake Book holds.
  const stillWanted = new Set(
    identities.filter((id) => !pool.some((q) => q.identity === id))
  );
  if (stillWanted.size > 0) {
    for (const disease of diseases) {
      if (!disease.microQuizzes) continue;
      for (const quiz of disease.microQuizzes) {
        const identity = `${disease.slug}|mcq:${quiz.id}`;
        if (!stillWanted.has(identity)) continue;
        pool.push({
          identity,
          question: quiz.question,
          options: quiz.options,
          correctIndex: quiz.correctIndex,
          explanation: quiz.explanation,
          evidence: quiz.explanation,
          source: {
            sourceName: disease.name,
            sourceSlug: disease.slug,
            sectionLabel: "In-course quiz",
            sectionHref: `/diseases/${disease.slug}`,
            sourceClass: disease.category,
          },
          templateId: "authored",
          difficulty: resolveQuestionTier({
            templateId: "authored",
            question: quiz.question,
          }),
        });
      }
    }
  }

  const rng = createRng(seed);

  const selected = [...pool];
  if (opts.shuffleOrder !== false) rng.shuffle(selected);

  const questions: TestQuestion[] = selected.map((q) => toTestQuestion(q, rng));

  return {
    questions,
    deliveredCount: questions.length,
    capped: wanted.size > questions.length,
    available: questions.length,
  };
}
