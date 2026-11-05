import type { Drug } from "@/lib/kyp/data";
import { MODE_ORDER } from "./specs";
import type { ModeId, ModeLensSet } from "./types";
import { sourcedIn } from "./validate";

/**
 * Cross-mode consistency: does any mode-specific statement about a SHARED
 * canonical quantity disagree with the canonical value?
 *
 * Currently checks one quantity with a clear canonical home: the drug's own
 * half-life (`mechanism.halfLife`). It is a deliberately conservative heuristic:
 * it only reads sentences that name this drug and no other drug, and never
 * judges text about metabolites. A hit is a "possible contradiction" for a
 * human to look at, not a verdict.
 */

export interface Contradiction {
  quantity: "half-life";
  mode: ModeId;
  source: string;
  canonical: string;
  mentioned: string;
  sentence: string;
}

const HOURS: Record<string, number> = { h: 1, hr: 1, hrs: 1, hour: 1, hours: 1, d: 24, day: 24, days: 24 };
const RANGE = /(\d+(?:\.\d+)?)(?:\s*[–-]\s*(\d+(?:\.\d+)?))?\s*(hours?|hrs?|h|days?|d)\b/gi;

/** All numeric ranges in a string, converted to hours. */
export function hoursRanges(text: string): [number, number][] {
  const out: [number, number][] = [];
  for (const m of text.matchAll(RANGE)) {
    const unit = HOURS[m[3].toLowerCase()];
    const a = parseFloat(m[1]) * unit;
    const b = (m[2] ? parseFloat(m[2]) : parseFloat(m[1])) * unit;
    out.push([Math.min(a, b), Math.max(a, b)]);
  }
  return out;
}

const overlaps = (a: [number, number], b: [number, number], tol = 0.25) =>
  a[0] <= b[1] * (1 + tol) && b[0] <= a[1] * (1 + tol);

export function findContradictions(lenses: ModeLensSet, drug: Drug, otherDrugNames: readonly string[]): Contradiction[] {
  const canonicalText = drug.mechanism?.halfLife;
  if (!canonicalText) return [];
  const canonical = hoursRanges(canonicalText);
  if (!canonical.length) return [];
  const lo = Math.min(...canonical.map((r) => r[0]));
  const hi = Math.max(...canonical.map((r) => r[1]));
  const own = drug.genericName.toLowerCase();
  const others = otherDrugNames.map((n) => n.toLowerCase()).filter((n) => n !== own && n.length > 3);
  const found: Contradiction[] = [];

  for (const mode of MODE_ORDER) {
    for (const block of lenses[mode].blocks) {
      for (const s of sourcedIn(block)) {
        if (s.source === "mechanism.halfLife") continue;
        for (const sentence of s.text.split(/(?<=[.;!?])\s+|\n/)) {
          const low = sentence.toLowerCase();
          if (!/half[- ]?life/.test(low) || !low.includes(own)) continue;
          if (others.some((n) => low.includes(n))) continue;
          if (/metabolite|desmethyl|nor[a-z]+ine\b/.test(low)) continue;
          const after = low.slice(low.search(/half[- ]?life/));
          for (const r of hoursRanges(after.slice(0, 35))) {
            if (!overlaps(r, [lo, hi])) {
              found.push({
                quantity: "half-life", mode, source: s.source, canonical: canonicalText,
                mentioned: `${r[0]}-${r[1]} h`, sentence: sentence.trim().slice(0, 200),
              });
            }
          }
        }
      }
    }
  }
  return found;
}
