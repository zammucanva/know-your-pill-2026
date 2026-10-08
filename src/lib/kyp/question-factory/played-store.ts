/**
 * Remembers the generated questions a learner has been shown, so that
 * "Retest these" and the Mistake Book can bring a generated question back.
 *
 * Authored and legacy questions are rebuilt from the content layer by
 * identity. Generated questions are not part of that pool, so the runner
 * asks this store to resolve their "qf|..." identities.
 *
 * Bounded (oldest dropped): the Mistake Book itself is capped, so the
 * store only needs to cover recent play. An identity that is no longer
 * stored resolves to null and the existing retest logic reports it as no
 * longer available, exactly as it does for changed authored content.
 */

import type { PoolQuestion } from "@/lib/kyp/custom-test/types";
import type { StorageLike } from "./history";
import { isFactoryIdentity } from "./integration";

export const PLAYED_STORAGE_KEY = "kyp:factory:played:v1";
export const PLAYED_CAP = 600;

interface Persisted {
  v: 1;
  order: string[];
  q: Record<string, PoolQuestion>;
}

function local(): StorageLike | null {
  try {
    return typeof window !== "undefined" && window.localStorage ? window.localStorage : null;
  } catch {
    return null;
  }
}

function read(storage: StorageLike | null): Persisted {
  const empty: Persisted = { v: 1, order: [], q: {} };
  if (!storage) return empty;
  try {
    const raw = storage.getItem(PLAYED_STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    if (parsed.v !== 1 || !Array.isArray(parsed.order) || !parsed.q || typeof parsed.q !== "object") {
      return empty;
    }
    return { v: 1, order: parsed.order.filter((s) => typeof s === "string"), q: parsed.q };
  } catch {
    return empty;
  }
}

export function rememberPlayed(
  questions: PoolQuestion[],
  storage: StorageLike | null = local()
): void {
  if (!storage || questions.length === 0) return;
  const data = read(storage);
  for (const q of questions) {
    if (!isFactoryIdentity(q.identity)) continue;
    if (!(q.identity in data.q)) data.order.push(q.identity);
    data.q[q.identity] = q;
  }
  while (data.order.length > PLAYED_CAP) {
    const dropped = data.order.shift()!;
    delete data.q[dropped];
  }
  try {
    storage.setItem(PLAYED_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage full or blocked: retry of these questions is simply unavailable
  }
}

/** Resolver handed to the legacy engine's retest path. */
export function resolveFactoryQuestion(
  identity: string,
  storage: StorageLike | null = local()
): PoolQuestion | null {
  if (!isFactoryIdentity(identity)) return null;
  return read(storage).q[identity] ?? null;
}
