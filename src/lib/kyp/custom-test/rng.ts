/**
 * Seeded RNG — deterministic shuffling for the Custom Test engine.
 *
 * mulberry32: tiny, fast, well-distributed. A fixed seed reproduces an
 * exact question set + option order (what the regression suite pins);
 * the UI passes Date.now() so real attempts differ.
 */

export interface Rng {
  /** Float in [0, 1). */
  next(): number;
  /** Integer in [0, maxExclusive). */
  int(maxExclusive: number): number;
  /** In-place Fisher–Yates shuffle. Returns the same array. */
  shuffle<T>(items: T[]): T[];
  /** Random pick (removing) n items from a copy of the pool. */
  sample<T>(items: T[], n: number): T[];
}

export function createRng(seed: number): Rng {
  let state = seed >>> 0 || 1;
  const next = (): number => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const int = (maxExclusive: number): number =>
    Math.floor(next() * maxExclusive);
  const shuffle = <T,>(items: T[]): T[] => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = int(i + 1);
      const tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
    }
    return items;
  };
  const sample = <T,>(items: T[], n: number): T[] =>
    shuffle([...items]).slice(0, Math.min(n, items.length));
  return { next, int, shuffle, sample };
}

/** Deterministic string seed → number seed (FNV-1a). */
export function seedFromString(text: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
