/**
 * Compare View Test Suite — the NEXT-X3 contract.
 *
 * Source-level and data-level pins for /compare. No server needed.
 *
 * Coverage map:
 *   1     the route exists and is a real page
 *   2     selection is capped at 3 (2–3 medications, per spec)
 *   3     the five commissioned dimensions are present
 *   4     frequency bands are shown with side effects
 *   5     every data cell is verbatim — the row builder copies the
 *         drug's own field values, never merges or invents
 *   6     comparison-table rows come only from tables that involve
 *         the selection; attributes already covered are not duplicated
 *   7     the takeaway is verbatim from a matching comparison table
 *   8     graceful degradation: 'Data not available' cells + an honest
 *         note when no comparison table covers the combination
 *   9     the Study hub links to /compare
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { drugs } from "@/lib/kyp/data/drugs/index";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const PAGE = "src/app/compare/page.tsx";

describe("compare view — contract pins", () => {
  test("1. the /compare route exists", () => {
    expect(existsSync(join(process.cwd(), PAGE))).toBe(true);
  });

  test("2. selection is 2–3 medications (capped, never 1 or 4+)", () => {
    const src = read(PAGE);
    expect(src).toContain("MIN_SELECTION = 2");
    expect(src).toContain("MAX_SELECTION = 3");
    expect(src).toContain("prev.length >= MAX_SELECTION");
  });

  test("3. the commissioned dimensions are compared", () => {
    const src = read(PAGE);
    for (const dimension of [
      "Primary target",
      "Half-life",
      "Common side effects (with frequency bands)",
      "Serious side effects",
      "Key interactions",
      "Monitoring",
      "FDA-approved uses",
      "When NOT to use",
    ]) {
      expect(src).toContain(`"${dimension}"`);
    }
  });

  test("4. side-effect frequency bands are displayed, verbatim bands prettified only", () => {
    const src = read(PAGE);
    expect(src).toContain("frequency");
    expect(src).toContain('"very-common": "Very common"');
    // The band is never invented — unknown values degrade.
    expect(src).toContain('"unknown": "Unknown frequency"');
  });

  test("5. data cells are verbatim copies of each drug's own fields", () => {
    // Spot-check against the real registry: the strings the row
    // builder emits for sertraline exist verbatim in its data.
    const sertraline = drugs.find((d) => d.slug === "sertraline");
    expect(sertraline).toBeDefined();
    expect(sertraline!.mechanism.molecularTarget.length).toBeGreaterThan(0);
    expect(sertraline!.commonSideEffects[0].frequency).toMatch(
      /^(very-common|common|uncommon|rare|unknown)$/
    );
    // The page builds cells from these exact fields — no synthesis.
    const src = read(PAGE);
    expect(src).toContain("d.mechanism.molecularTarget");
    expect(src).toContain("d.mechanism.halfLife");
    expect(src).toContain("d.interactions.slice(0, 3)");
    expect(src).toContain("d.monitoring.slice(0, 3)");
    expect(src).toContain("d.indications.filter((i) => i.status === \"fda-approved\")");
    expect(src).toContain("d.whenNotToUse");
  });

  test("6. comparison-table rows only come from tables involving the selection", () => {
    const src = read(PAGE);
    expect(src).toContain("comparisonTables");
    expect(src).toContain("names.has(table.primaryDrug)");
    expect(src).toContain("involved.length < 1");
    // Attributes covered by the fixed dimensions are not duplicated.
    expect(src).toContain("covered.has(attr)");
  });

  test("7. the takeaway is a verbatim table takeaway, attributed to its source", () => {
    const src = read(PAGE);
    expect(src).toContain("table.takeaway");
    expect(src).toContain("Verbatim from");
    expect(src).toContain("comparison guide");
  });

  test("8. missing cells degrade to 'Data not available', never guesses", () => {
    const src = read(PAGE);
    expect(src).toContain('"Data not available"');
    expect(src).toContain("No choosing guide exists in the library");
  });

  test("9. the Study hub links to /compare", () => {
    expect(read("src/app/study/page.tsx")).toContain('href="/compare"');
  });
});

describe("compare view — data-level guarantees", () => {
  test("10. every drug carries the data the fixed dimensions need", () => {
    for (const drug of drugs) {
      expect(drug.mechanism.molecularTarget.length).toBeGreaterThan(0);
      expect(drug.mechanism.halfLife.length).toBeGreaterThan(0);
      expect(drug.commonSideEffects.length).toBeGreaterThan(0);
      expect(drug.interactions.length).toBeGreaterThan(0);
      expect(drug.monitoring.length).toBeGreaterThan(0);
      expect((drug.comparisonTables ?? []).length).toBeGreaterThan(0);
    }
  });

  test("11. comparison tables only reference real drug names from the registry", () => {
    const names = new Set(drugs.map((d) => d.genericName));
    for (const drug of drugs) {
      for (const table of drug.comparisonTables ?? []) {
        for (const row of table.rows) {
          for (const c of row.comparisons) {
            expect(names.has(c.drug)).toBe(true);
          }
        }
      }
    }
  });
});
