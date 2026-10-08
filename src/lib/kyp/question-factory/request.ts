/**
 * Request validation and limits.
 *
 * Every field is validated here, and the same function is used by the UI
 * and by any future server route, so the rules cannot drift apart.
 *
 * Limits are PER REQUEST. They bound how much work one operation does, not
 * how many questions a learner can ever have: "Generate more" can be used
 * repeatedly until the meaningful question space is genuinely exhausted.
 */

import { drugsInScope } from "./syllabus";
import type { FactStore } from "./facts";
import type { DifficultySelection, FactoryRequest, KindSelection, Scope } from "./types";

/** Largest quantity accepted in one request. */
export const MAX_PER_REQUEST = 500;
/** Candidates attempted per batch. */
export const DEFAULT_BATCH_SIZE = 50;
/** Longest accepted syllabus string. */
const MAX_FIELD_LENGTH = 120;
const MAX_SEED = 2 ** 31 - 1;

const DIFFICULTIES: DifficultySelection[] = ["easy", "moderate", "hard", "mixed"];
const KINDS: KindSelection[] = ["standard", "conceptual", "clinical", "mixed"];

/**
 * Exam presets are CONFIGURATION POINTS, not rules. A preset may only
 * pre-select request fields; no exam-specific behaviour is built in, and
 * none is invented here. Register presets by adding entries.
 */
export interface ExamPreset {
  id: string;
  label: string;
  description: string;
  defaults?: Partial<Pick<FactoryRequest, "scope" | "difficulty" | "kind">>;
}

export const EXAM_PRESETS: ExamPreset[] = [
  {
    id: "none",
    label: "No preset",
    description: "Use the options as selected.",
  },
];

export type RequestResult =
  | { ok: true; request: FactoryRequest & { seed: number } }
  | { ok: false; errors: string[] };

function cleanScope(raw: unknown, errors: string[]): Scope {
  const scope: Scope = {};
  if (raw === undefined || raw === null) return scope;
  if (typeof raw !== "object") {
    errors.push("scope must be an object");
    return scope;
  }
  for (const key of ["subject", "chapter", "topic", "subtopic"] as const) {
    const value = (raw as Record<string, unknown>)[key];
    if (value === undefined || value === null || value === "") continue;
    if (typeof value !== "string" || value.length > MAX_FIELD_LENGTH) {
      errors.push(`scope.${key} must be a string of at most ${MAX_FIELD_LENGTH} characters`);
      continue;
    }
    scope[key] = value;
  }
  return scope;
}

export function validateRequest(
  raw: unknown,
  store: FactStore,
  randomSeed: () => number = () => Math.floor(Math.random() * MAX_SEED) + 1
): RequestResult {
  const errors: string[] = [];
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, errors: ["request must be an object"] };
  }
  const r = raw as Record<string, unknown>;

  const scope = cleanScope(r.scope, errors);

  const count = r.count;
  if (typeof count !== "number" || !Number.isInteger(count) || count < 1) {
    errors.push("count must be a whole number of at least 1");
  } else if (count > MAX_PER_REQUEST) {
    errors.push(
      `count must be at most ${MAX_PER_REQUEST} per request; use "Generate more" to continue`
    );
  }

  const difficulty = r.difficulty ?? "mixed";
  if (!DIFFICULTIES.includes(difficulty as DifficultySelection)) errors.push("difficulty is not recognised");
  const kind = r.kind ?? "mixed";
  if (!KINDS.includes(kind as KindSelection)) errors.push("kind is not recognised");

  const neverRepeat = r.neverRepeat === undefined ? false : r.neverRepeat;
  if (typeof neverRepeat !== "boolean") errors.push("neverRepeat must be true or false");

  const preset = r.preset === undefined ? "none" : r.preset;
  if (typeof preset !== "string" || !EXAM_PRESETS.some((p) => p.id === preset)) {
    errors.push("preset is not recognised");
  }

  let seed = r.seed;
  if (seed === undefined) seed = randomSeed();
  if (typeof seed !== "number" || !Number.isInteger(seed) || seed < 0 || seed > MAX_SEED) {
    errors.push("seed must be a whole number between 0 and 2147483647");
  }

  if (errors.length === 0 && drugsInScope(store, scope).length === 0) {
    errors.push("that part of the syllabus does not exist or contains no medications");
  }

  if (errors.length > 0) return { ok: false, errors };
  return {
    ok: true,
    request: {
      scope,
      count: count as number,
      difficulty: difficulty as DifficultySelection,
      kind: kind as KindSelection,
      neverRepeat: neverRepeat as boolean,
      preset: preset as string,
      seed: seed as number,
    },
  };
}
