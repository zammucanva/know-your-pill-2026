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
          sectionLabel: "In-course quiz",
          sectionHref: `/drugs/${drug.slug}`,
        },
        templateId: "authored",
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

  const push = (q: Omit<PoolQuestion, "identity">, variant: string) => {
    const identity = `${q.source.sourceSlug}|${q.evidence}|${q.templateId}|${variant}`;
    if (seen.has(identity)) return;
    seen.add(identity);
    pool.push({ ...q, identity });
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
}

/** Real availability for the setup screen. */
export function getPoolStats(drugSlugs: string[]): PoolStats {
  const pool = buildQuestionPool(drugSlugs);
  const perTemplate: Record<string, number> = {};
  let authored = 0;
  for (const q of pool) {
    perTemplate[q.templateId] = (perTemplate[q.templateId] ?? 0) + 1;
    if (q.templateId === "authored") authored++;
  }
  return {
    authored,
    generated: pool.length - authored,
    total: pool.length,
    perTemplate,
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

/**
 * Assemble an attempt: unique questions, balanced across templates,
 * question order shuffled, answer choices shuffled where safe.
 */
export function buildTest(
  drugSlugs: string[],
  requestedCount: number,
  seed: number
): BuildTestResult {
  const pool = buildQuestionPool(drugSlugs);
  const rng = createRng(seed);
  const available = pool.length;
  const capped = requestedCount > available;
  const count = Math.max(0, Math.min(requestedCount, available));

  const selected = selectBalanced(pool, count, rng);
  rng.shuffle(selected);

  const questions: TestQuestion[] = selected.map((q) => {
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
  });

  return { questions, deliveredCount: questions.length, capped, available };
}
