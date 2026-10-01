/**
 * Half-Life Visualizer Test Suite — Phase 4 contract.
 *
 * Source-level and data-level pins for the parser, the derived
 * clinical teaching values, and the wiring. No server needed.
 *
 * Coverage map:
 *   1     single value:   "About 2.5 hours." → 2.5 h
 *   2     leading number: "Approximately 26 hours (range 22–36 hours)." → 26 h
 *   3     range:          "25–33 hours" → 25–33 h (midpoint 29)
 *   4     unit conversion: days → hours
 *   5     unparseable: unknowns, "weeks"-only, bare "h" strings → null
 *         (graceful degradation, never invented numbers)
 *   6     real-data invariant: parse rate across all 145 drugs ≥ 85%
 *   7     real-data invariant: every parsed value inside sanity bounds
 *   8     facts follow the classic 5-half-lives rule (4.32× / 5× / 5×)
 *   9     formatDuration humanises hours correctly
 *   10    the visualizer component exists and degrades honestly
 *   11    the visualizer is wired into the Prescriber's Guide (Zone 3c)
 *   12    the component never hides the verbatim string
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { drugs } from "@/lib/kyp/data/drugs/index";
import {
  formatDuration,
  halfLifeFacts,
  parseHalfLife,
} from "@/lib/kyp/pharmacokinetics/half-life";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

describe("half-life parser — unit pins", () => {
  test("1. single value: 'About 2.5 hours.' → 2.5 h", () => {
    const p = parseHalfLife("About 2.5 hours.");
    expect(p).not.toBeNull();
    expect(p!.minHours).toBe(2.5);
    expect(p!.maxHours).toBe(2.5);
    expect(p!.representativeHours).toBe(2.5);
  });

  test("2. leading number wins: 'Approximately 26 hours (range 22–36 hours.' → 26 h", () => {
    const p = parseHalfLife("Approximately 26 hours (range 22–36 hours).");
    expect(p).not.toBeNull();
    expect(p!.representativeHours).toBe(26);
  });

  test("3. range: '25–33 hours alone; …' → 25–33 h, midpoint 29", () => {
    const p = parseHalfLife("25–33 hours alone; ~14 hours with inducers; ~70 hours with valproate.");
    expect(p).not.toBeNull();
    expect(p!.minHours).toBe(25);
    expect(p!.maxHours).toBe(33);
    expect(p!.representativeHours).toBe(29);
  });

  test("4. unit conversion: days → hours", () => {
    const p = parseHalfLife("2–4 days for the parent compound.");
    expect(p).not.toBeNull();
    expect(p!.minHours).toBe(48);
    expect(p!.maxHours).toBe(96);
  });

  test("5. unparseable strings degrade to null (never invented numbers)", () => {
    expect(parseHalfLife("Unknown (water-soluble vitamin kinetics).")).toBeNull();
    // Irreversible MAOI — the plasma half-life would dangerously mislead.
    expect(
      parseHalfLife("Short plasma (~1-2 h) but MAO inhibition lasts ~2 weeks after stopping (irreversible).")
    ).toBeNull();
    // Bare "h" strings are deliberately not parsed (metabolite ambiguity).
    expect(parseHalfLife("Cariprazine 1–3 h BUT active metabolites 21–77 h — effective coverage 1–4 weeks.")).toBeNull();
    expect(parseHalfLife("")).toBeNull();
  });
});

describe("half-life parser — real-data invariants (145 drugs)", () => {
  test("6. parse rate ≥ 85% across the library", () => {
    const parsed = drugs.filter((d) => parseHalfLife(d.mechanism?.halfLife ?? ""));
    const rate = parsed.length / drugs.length;
    expect(rate).toBeGreaterThanOrEqual(0.85);
  });

  test("7. every parsed value is inside sanity bounds (0.05–2400 h)", () => {
    for (const d of drugs) {
      const p = parseHalfLife(d.mechanism?.halfLife ?? "");
      if (!p) continue;
      expect(p.minHours).toBeGreaterThanOrEqual(0.05);
      expect(p.maxHours).toBeLessThanOrEqual(2400);
      expect(p.minHours).toBeLessThanOrEqual(p.maxHours);
    }
  });
});

describe("half-life facts & formatting", () => {
  test("8. the classic rule: 95% at ≈ 4.32×, steady state & washout at ≈ 5×", () => {
    const p = parseHalfLife("24 hours.");
    expect(p).not.toBeNull();
    const f = halfLifeFacts(p!);
    expect(f.ninetyFivePercentHours).toBeCloseTo(4.32 * 24, 5);
    expect(f.steadyStateHours).toBeCloseTo(5 * 24, 5);
    expect(f.washoutHours).toBeCloseTo(5 * 24, 5);
  });

  test("9. formatDuration humanises hours", () => {
    expect(formatDuration(0.5)).toBe("≈ 30 minutes");
    expect(formatDuration(26)).toBe("≈ 26 hours");
    expect(formatDuration(72)).toBe("≈ 3 days");
    expect(formatDuration(24 * 21)).toBe("≈ 3 weeks");
  });
});

describe("half-life visualizer — wiring pins", () => {
  test("10. the component exists and degrades honestly", () => {
    const COMPONENT = "src/components/kyp/ui/half-life-visualizer.tsx";
    expect(existsSync(join(process.cwd(), COMPONENT))).toBe(true);
    const src = read(COMPONENT);
    // Honest degradation branch for unparseable half-lives.
    expect(src).toContain("not a single clean number");
    // Curve only renders when parsed.
    expect(src).toContain("parsed && facts && curves");
  });

  test("11. the visualizer is wired into the Prescriber's Guide (Zone 3c)", () => {
    const src = read("src/components/kyp/sections/drug/drug-prescriber-guide.tsx");
    expect(src).toContain("HalfLifeVisualizer");
    expect(src).toContain("Zone 3c: Half-life visualizer");
  });

  test("12. the verbatim half-life string is always displayed", () => {
    const src = read("src/components/kyp/ui/half-life-visualizer.tsx");
    expect(src).toContain("Stated half-life");
    expect(src).toContain("{halfLifeText");
  });
});
