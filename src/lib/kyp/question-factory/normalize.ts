/**
 * Text normalisation and hashing shared by facts, distractors,
 * fingerprints and deduplication. Pure functions, no dependencies.
 */

/** "Serotonin (5-HT)" -> "Serotonin"; "MAOIs (phenelzine ...)" -> "MAOIs". */
export function stripParens(text: string): string {
  return text.split(" (")[0].split(" — ")[0].trim();
}

/**
 * Memoise a pure string function. Labels repeat constantly (the same side
 * effect names appear on hundreds of drugs), so caching their normalised
 * forms removes most of the generation cost. The cache is bounded so a
 * long session cannot grow it without limit.
 */
function memoise<T>(fn: (text: string) => T, limit = 20000): (text: string) => T {
  const cache = new Map<string, T>();
  return (text) => {
    const hit = cache.get(text);
    if (hit !== undefined) return hit;
    const value = fn(text);
    if (cache.size >= limit) cache.clear();
    cache.set(text, value);
    return value;
  };
}

/** Lower-case, accent-free, punctuation-free, single-spaced. */
export const normalizeText = memoise((text: string): string =>
  text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9α-ω]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
);

/** URL/id-safe slug of a label. */
export function toId(text: string): string {
  return normalizeText(text).replace(/ /g, "-");
}

/** Words that carry no concept, used when comparing stems for paraphrase. */
const STOPWORDS = new Set([
  "a", "an", "the", "of", "to", "in", "on", "for", "and", "or", "is", "are",
  "was", "were", "be", "been", "as", "by", "with", "which", "what", "that",
  "this", "these", "those", "following", "does", "do", "did", "it", "its",
  "under", "from", "at", "than", "most", "also", "among", "into",
]);

/** Content words of a text, for paraphrase comparison. */
export const contentTokens = memoise((text: string): Set<string> => {
  const out = new Set<string>();
  for (const word of normalizeText(text).split(" ")) {
    if (word && !STOPWORDS.has(word)) out.add(word);
  }
  return out;
});

/** Content words cut to their first five letters, so inflections of one
 *  root ("depressive", "depression") compare as the same word. Words with
 *  digits (gene codes, doses, "5-HT2A") are identifiers, not inflections,
 *  so they stay whole. */
export const stemTokens = memoise((text: string): Set<string> => {
  const out = new Set<string>();
  for (const word of contentTokens(text)) {
    out.add(/\d/.test(word) ? word : word.slice(0, 5));
  }
  return out;
});

/**
 * Learner-facing form of a data label: the verbatim text before an
 * editorial " — " annotation ("Seasonal Affective Disorder (SAD) —
 * prevention" -> "Seasonal Affective Disorder (SAD)"). Always a verbatim
 * prefix, never reworded; the full string stays in the fact's evidence.
 */
export function displayLabel(text: string): string {
  const head = text.split(" — ")[0].trim();
  return head.length > 0 ? head : text.trim();
}

/** Token-set Jaccard similarity in [0, 1]. Two empty sets are not similar. */
export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const t of a) if (b.has(t)) shared++;
  return shared / (a.size + b.size - shared);
}

/**
 * Share of the SMALLER set found in the other. Catches a short label
 * contained in a longer one ("Depression" inside "Major Depressive
 * Disorder"), which Jaccard under-rates because the union is large.
 */
export function overlapCoefficient(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const t of a) if (b.has(t)) shared++;
  return shared / Math.min(a.size, b.size);
}

/**
 * cyrb53: a fast, well-distributed 53-bit string hash (public domain).
 * 53 bits keeps accidental collisions across hundreds of thousands of
 * fingerprints negligible while staying a safe JS integer.
 */
export function hash53(text: string, seed = 0): number {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

/** Short stable fingerprint string (base 36). */
export function hashString(text: string): string {
  return hash53(text).toString(36);
}
