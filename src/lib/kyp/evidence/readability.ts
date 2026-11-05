/**
 * A defined, automated readability check for patient wording. It is a screening heuristic (Flesch-Kincaid
 * grade with a syllable estimate, plus sentence length), NOT a comprehension test and not a substitute for
 * review with real readers. A low grade can still be wrong or unclear; a high grade can be unavoidable
 * (medicine names, clinical terms that must be kept).
 */
export interface Readability {
  words: number;
  sentences: number;
  avgWordsPerSentence: number;
  /** Approximate Flesch-Kincaid grade level. */
  grade: number;
  /** Sentences longer than 30 words. */
  longSentences: number;
}

function syllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const groups = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups ? groups.length : 1);
}

export function readability(text: string): Readability {
  const sentences = text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  const words = text.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  const nS = Math.max(1, sentences.length);
  const nW = Math.max(1, words.length);
  const grade = 0.39 * (nW / nS) + 11.8 * (syl / nW) - 15.59;
  return {
    words: words.length,
    sentences: sentences.length,
    avgWordsPerSentence: Math.round((nW / nS) * 10) / 10,
    grade: Math.round(grade * 10) / 10,
    longSentences: sentences.filter((s) => s.split(/\s+/).length > 30).length,
  };
}
