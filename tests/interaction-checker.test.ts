/**
 * Interaction Checker Test Suite — Phase 4 contract.
 *
 * Source-level and data-level pins for /interactions. No server needed.
 *
 * Coverage map:
 *   1     the route exists and is a real page
 *   2     selection is 2–6 medications (capped)
 *   3     the page carries the safety disclaimer prominently
 *   4     the page reports unmatched pairs honestly (never "safe")
 *   5     engine: SSRI × MAOI is contraindicated, both directions,
 *         verbatim from the profiles
 *   6     engine: sertraline × pimozide is contraindicated by name
 *   7     engine: valproate × lamotrigine is major (the classic pair)
 *   8     engine: benzodiazepine × Z-drug matches via "CNS depressants"
 *         class token (diazepam × zolpidem)
 *   9     engine: no cross-name false positives — "diazepam" must never
 *         match "clonazepam" (word-boundary discipline)
 *   10    engine: pairs with nothing listed land in unmatchedPairs
 *   11    engine: findings sorted worst-severity first; pairs summary
 *         consistent with findings
 *   12    engine: every finding's source is one of the selected drugs
 *         (no leakage from unselected profiles)
 *   13    navbar links to /interactions
 *   14    /medicine links to /interactions
 *   15    /compare cross-links to /interactions
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { drugs } from "@/lib/kyp/data/drugs/index";
import {
  checkInteractions,
  identityTokens,
  severityRank,
} from "@/lib/kyp/interactions/engine";
import type { Drug } from "@/lib/kyp/data/types";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const PAGE = "src/app/interactions/page.tsx";

const bySlug = (slug: string): Drug => {
  const d = drugs.find((x) => x.slug === slug);
  if (!d) throw new Error(`drug not in library: ${slug}`);
  return d;
};

describe("interaction checker — contract pins", () => {
  test("1. the /interactions route exists", () => {
    expect(existsSync(join(process.cwd(), PAGE))).toBe(true);
  });

  test("2. selection is 2–6 medications (capped, never 1 or 7+)", () => {
    const src = read(PAGE);
    expect(src).toContain("MIN_SELECTION = 2");
    expect(src).toContain("MAX_SELECTION = 6");
    expect(src).toContain("prev.length >= MAX_SELECTION");
  });

  test("3. the safety disclaimer is prominent and explicit", () => {
    const src = read(PAGE);
    expect(src).toContain("educational reference, not a");
    expect(src).toContain("complete interaction database");
    expect(src).toContain("confirm with your doctor or pharmacist");
  });

  test("4. unmatched pairs are reported honestly — never as safe", () => {
    const src = read(PAGE);
    expect(src).toContain("Nothing listed between these pairs");
    expect(src).toContain("not\n                        &ldquo;safe&rdquo;");
  });
});

describe("interaction engine — data pins", () => {
  test("5. SSRI × MAOI is contraindicated in BOTH directions, verbatim", () => {
    const result = checkInteractions([bySlug("sertraline"), bySlug("tranylcypromine")]);
    expect(result.findings.length).toBeGreaterThanOrEqual(2);
    expect(result.findings.every((f) => f.severity === "contraindicated")).toBe(true);
    // One direction comes from sertraline's MAOI entry, the reverse from
    // tranylcypromine's serotonergic-antidepressant entry.
    const sources = new Set(result.findings.map((f) => f.sourceSlug));
    expect(sources.has("sertraline")).toBe(true);
    expect(sources.has("tranylcypromine")).toBe(true);
    // Verbatim discipline: mechanism/action match the source arrays exactly.
    for (const f of result.findings) {
      const source = bySlug(f.sourceSlug);
      const entry = source.interactions.find((i) => i.drug === f.listedAs);
      expect(entry).toBeDefined();
      expect(entry!.mechanism).toBe(f.mechanism);
      expect(entry!.action).toBe(f.action);
      expect(entry!.severity).toBe(f.severity);
    }
  });

  test("6. sertraline × pimozide is contraindicated by generic name", () => {
    const result = checkInteractions([bySlug("sertraline"), bySlug("pimozide")]);
    expect(
      result.findings.some(
        (f) => f.severity === "contraindicated" && f.matchedVia === "generic-name"
      )
    ).toBe(true);
  });

  test("7. valproate × lamotrigine is the classic major interaction", () => {
    const result = checkInteractions([bySlug("valproate"), bySlug("lamotrigine")]);
    expect(result.findings.length).toBeGreaterThanOrEqual(1);
    expect(result.findings.some((f) => f.severity === "major")).toBe(true);
  });

  test("8. benzodiazepine × Z-drug matches via the CNS-depressant class token", () => {
    const result = checkInteractions([bySlug("diazepam"), bySlug("zolpidem")]);
    expect(result.findings.length).toBeGreaterThanOrEqual(1);
    expect(
      result.findings.some(
        (f) => f.matchedVia === "drug-class" && f.listedAs.toLowerCase().includes("cns depressant")
      )
    ).toBe(true);
  });

  test("9. word-boundary discipline: diazepam never matches clonazepam", () => {
    const diazepamTokens = identityTokens(bySlug("diazepam")).filter(
      (t) => t.via === "generic-name" || t.via === "brand-name"
    );
    // None of diazepam's name tokens may appear inside "clonazepam" text.
    for (const { token } of diazepamTokens) {
      // "diazepam" as a whole word is absent from "clonazepam";
      // simulate an entry that mentions clonazepam only.
      const clonazepamEntry = "Clonazepam (a different benzodiazepine)";
      const pattern = new RegExp(
        `\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[-\s]+/g, "[-\\s]?")}(?:es|s)?\\b`,
        "i"
      );
      expect(pattern.test(clonazepamEntry)).toBe(false);
    }
  });

  test("10. pairs with nothing listed land in unmatchedPairs (not 'safe')", () => {
    // Two SSRIs: the library carries no entry between them.
    const result = checkInteractions([bySlug("sertraline"), bySlug("escitalopram")]);
    expect(result.findings.length).toBe(0);
    expect(result.unmatchedPairs.length).toBe(1);
    expect(result.unmatchedPairs[0].worstSeverity).toBeNull();
  });

  test("11. findings sorted worst-severity first; summary consistent", () => {
    const result = checkInteractions([
      bySlug("sertraline"),
      bySlug("tranylcypromine"),
      bySlug("pimozide"),
      bySlug("lamotrigine"),
    ]);
    expect(result.findings.length).toBeGreaterThan(0);
    for (let i = 1; i < result.findings.length; i++) {
      expect(
        severityRank(result.findings[i - 1].severity)
      ).toBeGreaterThanOrEqual(severityRank(result.findings[i].severity));
    }
    // Pair summary counts every finding exactly once.
    const summarised = result.pairs.reduce((n, p) => n + p.findingCount, 0);
    expect(summarised).toBe(result.findings.length);
    // Unmatched + matched = every unordered pair of 4 drugs = 6.
    expect(result.pairs.length + result.unmatchedPairs.length).toBe(6);
  });

  test("12. every finding comes from a selected drug's profile", () => {
    const selected = [bySlug("sertraline"), bySlug("clonazepam"), bySlug("valproate")];
    const result = checkInteractions(selected);
    const slugs = new Set(selected.map((d) => d.slug));
    for (const f of result.findings) {
      expect(slugs.has(f.sourceSlug)).toBe(true);
      expect(slugs.has(f.aSlug)).toBe(true);
      expect(slugs.has(f.bSlug)).toBe(true);
    }
  });
});

describe("interaction checker — navigation pins", () => {
  test("13. navbar links to /interactions", () => {
    const src = read("src/components/kyp/sections/navbar.tsx");
    expect(src).toContain('href: "/interactions"');
  });

  test("14. /medicine links to /interactions", () => {
    const src = read("src/app/medicine/page.tsx");
    expect(src).toContain('href="/interactions"');
  });

  test("15. /compare cross-links to /interactions", () => {
    const src = read("src/app/compare/page.tsx");
    expect(src).toContain('href="/interactions"');
  });
});
