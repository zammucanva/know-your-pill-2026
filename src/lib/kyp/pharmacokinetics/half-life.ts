/**
 * Half-life parsing for the KYP Half-Life Visualizer.
 *
 * Purpose
 *   `drug.mechanism.halfLife` is a curated free-text string (e.g.
 *   "21–54 hours (mean about 30 hours)", "About 2.5 hours."). The
 *   visualizer needs a numeric range in hours to draw the accumulation
 *   and washout curves and to compute the classic "5 half-lives" facts
 *   (steady state, washout before switching).
 *
 * Rules
 *   - parse the FIRST number–unit pair in the string (with optional
 *     range "a–b"); convert days and minutes to hours;
 *   - sanity-bound the result (0.05–2400 h) — anything outside is
 *     treated as unparseable and the UI degrades to the verbatim text
 *     with the generic 5-half-lives rule (no curve, no invented numbers);
 *   - the verbatim string is ALWAYS displayed alongside any derived
 *     numbers; derived numbers are estimates for education, not dosing.
 */

export interface ParsedHalfLife {
  /** Conservative lower bound, hours. */
  minHours: number;
  /** Conservative upper bound, hours. */
  maxHours: number;
  /** Midpoint (or single value), hours — used for curve geometry. */
  representativeHours: number;
  /** The verbatim source string (re-displayed by the UI, always). */
  verbatim: string;
}

const UNIT_TO_HOURS: Record<string, number> = {
  hour: 1,
  hours: 1,
  hr: 1,
  hrs: 1,
  day: 24,
  days: 24,
  minute: 1 / 60,
  minutes: 1 / 60,
  min: 1 / 60,
  mins: 1 / 60,
};

const NUMBER = "\\d+(?:[.,]\\d+)?";
const RANGE = `(?:\\s*(?:–|—|-|to|to\\s)\\s*(?<max>${NUMBER}))?`;
const UNIT = "(?<unit>hours?|hrs?|days?|minutes?|mins?)";
const FIRST_PAIR = new RegExp(
  `(?<min>${NUMBER})${RANGE}\\s*${UNIT}`,
  "i"
);

/** Parse a numeric half-life from free text. Returns null when not confidently parseable. */
export function parseHalfLife(text: string): ParsedHalfLife | null {
  if (!text || typeof text !== "string") return null;

  // Unify dashes so "–" and "—" behave like "-".
  const normalized = text.replace(/[\u2013\u2014]/g, "-");
  const match = FIRST_PAIR.exec(normalized);
  if (!match?.groups) return null;

  const min = Number.parseFloat((match.groups.min ?? "").replace(",", "."));
  const maxRaw = match.groups.max
    ? Number.parseFloat(match.groups.max.replace(",", "."))
    : NaN;
  const unit = (match.groups.unit ?? "").toLowerCase();
  const factor = UNIT_TO_HOURS[unit];
  if (!Number.isFinite(min) || !Number.isFinite(factor)) return null;

  const max = Number.isFinite(maxRaw) ? maxRaw : min;
  const minHours = Math.min(min, max) * factor;
  const maxHours = Math.max(min, max) * factor;

  // Sanity bounds — anything outside is treated as unparseable.
  if (minHours <= 0 || maxHours <= 0) return null;
  if (minHours < 0.05 || maxHours > 2400) return null;

  return {
    minHours,
    maxHours,
    representativeHours: (minHours + maxHours) / 2,
    verbatim: text,
  };
}

/**
 * The classic clinical teaching values derived from a half-life:
 *   - steady state ≈ 5 × t½ (≈ 97% accumulated)
 *   - ~95% of steady state at ≈ 4.3 × t½
 *   - washout before switching (e.g., to an MAOI) ≈ 5 × t½
 *   - after stopping, plasma level falls ~50% per half-life
 */
export interface HalfLifeFacts {
  /** Hours to ≈ 95% of steady state (4.32 × t½). */
  ninetyFivePercentHours: number;
  /** Hours to ≈ steady state (5 × t½). */
  steadyStateHours: number;
  /** Hours after stopping for ≈ 97% washout (5 × t½). */
  washoutHours: number;
}

export function halfLifeFacts(parsed: ParsedHalfLife): HalfLifeFacts {
  const t = parsed.representativeHours;
  return {
    ninetyFivePercentHours: 4.32 * t,
    steadyStateHours: 5 * t,
    washoutHours: 5 * t,
  };
}

/** Humanise hours: "≈ 45 minutes", "≈ 26 hours", "≈ 5.4 days", "≈ 3.2 weeks". */
export function formatDuration(hours: number): string {
  if (hours < 1) return `≈ ${Math.round(hours * 60)} minutes`;
  if (hours < 48) {
    const rounded = hours >= 10 ? Math.round(hours) : Math.round(hours * 10) / 10;
    return `≈ ${rounded} hours`;
  }
  const days = hours / 24;
  if (days < 14) return `≈ ${Math.round(days * 10) / 10} days`;
  const weeks = days / 7;
  return `≈ ${Math.round(weeks * 10) / 10} weeks`;
}
