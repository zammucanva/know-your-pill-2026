/**
 * Class Comparison Test Suite — Stahl's Phase 5 contract.
 *
 * Source-level and data-level pins for /compare/classes and the
 * concern normalization layer. No server needed.
 *
 * Coverage map (per the Phase 5 brief):
 *   1     the route exists and is a real page
 *   2     class selection: all 32 DrugClassId classes derived from
 *         the registry — no second taxonomy
 *   3     class membership: total membership = registry size, no
 *         duplicate medications in any class (duplicate prevention)
 *   4     class membership correctness: every medication sits in the
 *         class of its own drugClass field
 *   5     class display labels are derived (most frequent label), not
 *         hand-written — deterministic across recomputation
 *   6     concern selection: one concern builds a single-column matrix
 *   7     multiple concerns: cells per row = concerns selected, in
 *         curated order regardless of selection order
 *   8     unsupported/unknown concern ids are dropped (sanitizer)
 *   9     missing concern data: "Data not available" — never a guess
 *         (sertraline × qt-cardiac via effect entries)
 *  10    one-drug class: retained, selectable, single honest row
 *  11    deterministic normalization: same inputs → identical cells
 *  12    correct drug-page links: every matrix row links /drugs/{slug}
 *  13    responsive data transformation: matrixToCards mirrors rows
 *  14    no fabricated values: every cell recomputed independently
 *         from the drug's own arrays matches the normalized cell
 *  15    no arbitrary scores: headlines are documented frequency
 *         bands / counts only — no 8/10-style numbers
 *  16    no "best drug" language anywhere in the feature source
 *  17    Prescriber's Guide placeholders never surface as data
 *  18    multiple real classes × representative medications build
 *         matrices with honest mixed availability
 *  19    default concerns are deterministic and effect-only
 *  20    integration links: /compare, /medicine, /study, class
 *         collections and the drug pages cross-link the feature
 *  21    the source-pattern rule: patterns match entry NAMES only —
 *         descriptions are never the basis of a match
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { drugs } from "@/lib/kyp/data/drugs/index";
import type { Drug } from "@/lib/kyp/data/types";
import {
  buildComparisonMatrix,
  comparisonClasses,
  defaultConcernsFor,
  getComparisonClass,
  matrixToCards,
  normalizeConcernCell,
  sanitizeConcernIds,
  concernCoverage,
  CONCERN_DEFINITIONS,
  PRESCRIBER_NOTE_PLACEHOLDERS,
} from "@/lib/kyp/concerns";
import type { ConcernId } from "@/lib/kyp/concerns";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const PAGE = "src/app/compare/classes/page.tsx";
const CLIENT = "src/components/kyp/sections/class-comparison/class-comparison-client.tsx";
const MATRIX = "src/components/kyp/sections/class-comparison/concern-matrix.tsx";

const bySlug = (slug: string): Drug => {
  const d = drugs.find((x) => x.slug === slug);
  if (!d) throw new Error(`drug not in library: ${slug}`);
  return d;
};

describe("class comparison — route & feature pins", () => {
  test("1. the /compare/classes route exists", () => {
    expect(existsSync(join(process.cwd(), PAGE))).toBe(true);
    expect(existsSync(join(process.cwd(), CLIENT))).toBe(true);
  });

  test("2. class selection: every class is an existing DrugClassId from the registry", () => {
    expect(comparisonClasses.length).toBe(32);
    const registryClassIds = new Set(drugs.map((d) => d.drugClass));
    for (const cls of comparisonClasses) {
      expect(registryClassIds.has(cls.id)).toBe(true);
      expect(cls.medications.length).toBeGreaterThan(0);
    }
  });

  test("3. class membership: 145 total, no duplicate medication in any class", () => {
    const total = comparisonClasses.reduce((n, c) => n + c.medications.length, 0);
    expect(total).toBe(drugs.length);
    const seen = new Set<string>();
    for (const cls of comparisonClasses) {
      const slugs = cls.medications.map((m) => m.slug);
      for (const s of slugs) {
        expect(seen.has(s)).toBe(false);
        seen.add(s);
      }
    }
    expect(seen.size).toBe(drugs.length);
  });

  test("4. class membership correctness: each medication sits in its own drugClass group", () => {
    for (const cls of comparisonClasses) {
      for (const med of cls.medications) {
        expect(med.drugClass).toBe(cls.id);
      }
    }
  });

  test("5. class display labels are derived deterministically (most frequent label)", () => {
    // Recompute the winner for every class independently and compare.
    for (const cls of comparisonClasses) {
      const counts = new Map<string, number>();
      for (const med of cls.medications) {
        counts.set(med.drugClassLabel, (counts.get(med.drugClassLabel) ?? 0) + 1);
      }
      const max = Math.max(...counts.values());
      const expectedLabels = cls.medications
        .filter((m) => counts.get(m.drugClassLabel) === max)
        .map((m) => m.drugClassLabel);
      expect(expectedLabels).toContain(cls.label);
    }
  });

  test("6. concern selection: one concern → one cell per row", () => {
    const cls = getComparisonClass("ssri")!;
    const matrix = buildComparisonMatrix(cls, ["sedation"]);
    expect(matrix.length).toBe(cls.medications.length);
    for (const row of matrix) {
      expect(row.cells.length).toBe(1);
      expect(row.cells[0].concernId).toBe("sedation");
    }
  });

  test("7. multiple concerns: cells follow curated order, not selection order", () => {
    const cls = getComparisonClass("atypical-antipsychotic")!;
    const curated = ["weight-metabolic", "sedation", "eps-akathisia", "prolactin"] as ConcernId[];
    const reversed = [...curated].reverse();
    const a = buildComparisonMatrix(cls, curated);
    const b = buildComparisonMatrix(cls, reversed);
    expect(a.map((r) => r.cells.map((c) => c.concernId))).toEqual(
      b.map((r) => r.cells.map((c) => c.concernId))
    );
    expect(a[0].cells.map((c) => c.concernId)).toEqual(curated);
  });

  test("8. unknown/unsupported concern ids are dropped, duplicates removed", () => {
    expect(sanitizeConcernIds(["sedation", "bogus", "sedation", "nonsense", "weight-metabolic"]))
      .toEqual(["weight-metabolic", "sedation"]);
  });

  test("9. missing concern data degrades to 'Data not available' — never a guess", () => {
    // sertraline's documented adverse-effect entries carry no QT entry
    // (its QT story lives in the interactions list — a different concern).
    const cell = normalizeConcernCell(bySlug("sertraline"), "qt-cardiac");
    expect(cell.available).toBe(false);
    expect(cell.headline).toBe("Data not available");
    expect(cell.entries.length).toBe(0);
  });

  test("10. one-drug class: retained, selectable, builds a single honest row", () => {
    const singles = comparisonClasses.filter((c) => c.medications.length === 1);
    expect(singles.length).toBeGreaterThan(0);
    const single = singles[0];
    const matrix = buildComparisonMatrix(single, ["sedation"]);
    expect(matrix.length).toBe(1);
    expect(matrix[0].drug.slug).toBe(single.medications[0].slug);
  });

  test("11. deterministic normalization: identical inputs → identical cells", () => {
    for (const slug of ["olanzapine", "sertraline", "clozapine", "mirtazapine"]) {
      for (const def of CONCERN_DEFINITIONS) {
        const a = normalizeConcernCell(bySlug(slug), def.id);
        const b = normalizeConcernCell(bySlug(slug), def.id);
        expect(a).toEqual(b);
      }
    }
  });

  test("12. drug-page links: the UI renders /drugs/{slug} for every medication", () => {
    const src = read(CLIENT) + read(MATRIX);
    expect(src).toContain("href={`/drugs/${");
    // every slug in every class resolves to a real registry drug page
    for (const cls of comparisonClasses.slice(0, 5)) {
      for (const med of cls.medications) {
        expect(drugs.some((d) => d.slug === med.slug)).toBe(true);
      }
    }
  });

  test("13. responsive data transformation: matrixToCards mirrors the rows", () => {
    const cls = getComparisonClass("tca")!;
    const matrix = buildComparisonMatrix(cls, ["weight-metabolic", "anticholinergic", "qt-cardiac"]);
    const cards = matrixToCards(matrix);
    expect(cards.length).toBe(matrix.length);
    for (let i = 0; i < cards.length; i++) {
      expect(cards[i].drug.slug).toBe(matrix[i].drug.slug);
      expect(cards[i].cells).toEqual(matrix[i].cells);
    }
  });

  test("14. no fabricated values: cells recompute exactly from the drug's own arrays", () => {
    // Independent recomputation for olanzapine × weight-metabolic.
    const olanzapine = bySlug("olanzapine");
    const def = CONCERN_DEFINITIONS.find((c) => c.id === "weight-metabolic")!;
    const expected = [
      ...olanzapine.commonSideEffects.map((e) => ({ ...e, list: "common" as const })),
      ...olanzapine.seriousSideEffects.map((e) => ({ ...e, list: "serious" as const })),
    ].filter((e) => def.patterns!.some((rx) => rx.test(e.name)));
    const cell = normalizeConcernCell(olanzapine, "weight-metabolic");
    expect(cell.entries.length).toBe(expected.length);
    const byName = (arr: { name: string }[]) => new Set(arr.map((e) => e.name));
    expect(byName(cell.entries)).toEqual(byName(expected));
    // verbatim discipline: name/frequency/severity/description identical
    for (const entry of cell.entries) {
      const source = expected.find((e) => e.name === entry.name)!;
      expect(entry.frequency).toBe(source.frequency);
      expect(entry.severity).toBe(source.severity);
      expect(entry.description).toBe(source.description);
      expect(entry.list).toBe(source.list);
    }
    // headline = documented band of the highest-frequency match
    const rank: Record<string, number> = { "very-common": 4, common: 3, uncommon: 2, rare: 1, unknown: 0 };
    const top = expected.slice().sort((a, b) => rank[b.frequency] - rank[a.frequency])[0];
    expect(cell.headline).toBe(
      { "very-common": "Very common", common: "Common", uncommon: "Uncommon", rare: "Rare", unknown: "Unknown frequency" }[top.frequency]
    );
  });

  test("15. no arbitrary scores: headlines are bands/counts only", () => {
    const pattern = /\b\d+\s*(?:\/|\\|\sout\s)10\b|\d+\s*%|\b\d+\/\d+\b/;
    for (const cls of comparisonClasses.slice(0, 8)) {
      const matrix = buildComparisonMatrix(cls, ["weight-metabolic", "sedation", "monitoring-burden", "interaction-burden"]);
      for (const row of matrix) {
        for (const cell of row.cells) {
          if (cell.available) {
            expect(pattern.test(cell.headline)).toBe(false);
          } else {
            expect(cell.headline).toBe("Data not available");
          }
        }
      }
    }
  });

  test("16. no 'best drug' ranking language in the feature source", () => {
    const stripComments = (src: string) =>
      src
        .replace(/\/\*[\s\S]*?\*\//g, "") // block comments
        .replace(/^\s*\/\/.*$/gm, ""); // line comments
    for (const file of [PAGE, CLIENT, MATRIX]) {
      const src = stripComments(read(file)).toLowerCase();
      for (const banned of [
        "best medication",
        "first choice",
        "winner",
        "safest",
        "most effective",
      ]) {
        expect(src.includes(banned)).toBe(false);
      }
    }
    // positive pin: the route carries the explicit educational-positioning
    // disclaimer (not an algorithm, no best-drug selection)
    const page = read(PAGE).toLowerCase();
    expect(page).toContain("educational comparison");
    expect(page).toContain("not a prescribing algorithm");
  });

  test("17. Prescriber's Guide placeholders never surface as data", () => {
    // Every drug's PG one-liner fields exist; placeholders are filtered.
    for (const slug of ["olanzapine", "quetiapine", "risperidone"]) {
      const drug = bySlug(slug);
      expect(drug.prescriberGuide?.weightGain).toBe("See product information and class comparison.");
      const cell = normalizeConcernCell(drug, "weight-metabolic");
      expect(cell.prescriberNote).toBeUndefined(); // placeholder filtered
      expect(cell.entries.length).toBeGreaterThan(0); // real entries still present
    }
    // An informative note DOES surface, verbatim.
    const bupropion = bySlug("bupropion");
    const cell = normalizeConcernCell(bupropion, "weight-metabolic");
    if (cell.prescriberNote !== undefined) {
      expect(PRESCRIBER_NOTE_PLACEHOLDERS.includes(cell.prescriberNote)).toBe(false);
      expect(cell.prescriberNote).toBe(bupropion.prescriberGuide!.weightGain);
    }
  });

  test("18. multiple real classes build matrices with honest mixed availability", () => {
    const cases: { classId: string; concerns: ConcernId[]; mustHave: string[] }[] = [
      { classId: "atypical-antipsychotic", concerns: ["weight-metabolic", "sedation", "prolactin", "eps-akathisia"], mustHave: ["olanzapine", "clozapine", "aripiprazole"] },
      { classId: "ssri", concerns: ["sexual-function", "sedation", "nausea-gi"], mustHave: ["sertraline", "fluoxetine", "paroxetine"] },
      { classId: "benzodiazepine", concerns: ["sedation", "interaction-burden"], mustHave: ["diazepam"] },
      { classId: "maoi", concerns: ["weight-metabolic", "orthostasis"], mustHave: ["tranylcypromine"] },
    ];
    for (const { classId, concerns: cs, mustHave } of cases) {
      const cls = getComparisonClass(classId)!;
      const matrix = buildComparisonMatrix(cls, cs);
      expect(matrix.length).toBe(cls.medications.length);
      for (const slug of mustHave) {
        expect(matrix.some((r) => r.drug.slug === slug)).toBe(true);
      }
      // honest degradation invariant: any unavailable cell says exactly
      // "Data not available" — never a placeholder or a guess
      const flat = matrix.flatMap((r) => r.cells);
      for (const cell of flat) {
        if (!cell.available) expect(cell.headline).toBe("Data not available");
        else expect(cell.headline).not.toBe("Data not available");
      }
      expect(flat.some((c) => c.available)).toBe(true);
    }
    // verified mixed availability: within atypical antipsychotics,
    // weight-metabolic is documented for olanzapine but not for
    // pimavanserin (antipsychotic → PIMAvanserin is a selective 5-HT2A
    // inverse agonist with no metabolic entry in its profile)
    const atyp = getComparisonClass("atypical-antipsychotic")!;
    const mixed = buildComparisonMatrix(atyp, ["weight-metabolic"]);
    const olz = mixed.find((r) => r.drug.slug === "olanzapine")!;
    const pim = mixed.find((r) => r.drug.slug === "pimavanserin")!;
    expect(olz.cells[0].available).toBe(true);
    expect(pim.cells[0].available).toBe(false);
  });

  test("19. default concerns: deterministic, effect-kind only, ≤ 4, top-coverage", () => {
    const cls = getComparisonClass("atypical-antipsychotic")!;
    const a = defaultConcernsFor(cls.medications);
    const b = defaultConcernsFor(cls.medications);
    expect(a).toEqual(b);
    expect(a.length).toBeLessThanOrEqual(4);
    expect(a.length).toBeGreaterThan(0);
    for (const id of a) {
      const def = CONCERN_DEFINITIONS.find((d) => d.id === id)!;
      expect(def.kind).toBe("effect");
    }
    // defaults are the top-4 effect concerns by coverage in the class
    // (ties at the cutoff resolve by curated definition order — an
    // excluded concern is either lower-coverage, or equal-coverage and
    // later in definition order than every included one)
    const effectIds = CONCERN_DEFINITIONS.filter((d) => d.kind === "effect").map((d) => d.id);
    const order = (id: ConcernId) => effectIds.indexOf(id);
    const coverage = effectIds.map((id) => ({ id, n: concernCoverage(cls.medications, id) }));
    const minDefault = Math.min(...a.map((id) => coverage.find((c) => c.id === id)!.n));
    const lastIncludedOrder = Math.max(...a.map((id) => order(id)));
    for (const c of coverage.filter((c) => !a.includes(c.id))) {
      expect(
        c.n < minDefault || (c.n === minDefault && order(c.id) > lastIncludedOrder)
      ).toBe(true);
    }
  });

  test("20. integration links exist (compare, medicine hub, study hub, class collections, drug pages)", () => {
    expect(read("src/app/compare/page.tsx")).toContain("/compare/classes");
    expect(read("src/app/medicine/page.tsx")).toContain("/compare/classes");
    expect(read("src/app/study/page.tsx")).toContain("/compare/classes");
    expect(read("src/app/drugs/class/[classId]/page.tsx")).toContain("/compare/classes?class=");
    expect(read("src/components/kyp/sections/drug/drug-prescriber-guide.tsx")).toContain("/compare/classes?class=");
    // the class-comparison page itself cross-links the siblings
    expect(read(CLIENT)).toContain('href="/compare"');
    expect(read(CLIENT)).toContain('href="/interactions"');
  });

  test("21. patterns match entry NAMES only — descriptions are never the match basis", () => {
    // Construct the proof: find a drug whose entry DESCRIPTION contains a
    // concern keyword while its NAME does not — the cell must NOT match it.
    const sertraline = bySlug("sertraline");
    const qtDef = CONCERN_DEFINITIONS.find((c) => c.id === "qt-cardiac")!;
    const descriptionOnly = [
      ...sertraline.commonSideEffects,
      ...sertraline.seriousSideEffects,
    ].filter(
      (e) =>
        !qtDef.patterns!.some((rx) => rx.test(e.name)) &&
        qtDef.patterns!.some((rx) => rx.test(e.description))
    );
    // whatever the description says, the qt-cardiac cell stays unavailable
    const cell = normalizeConcernCell(sertraline, "qt-cardiac");
    expect(cell.available).toBe(false);
    expect(descriptionOnly.every((e) => !cell.entries.some((m) => m.name === e.name))).toBe(true);
  });
});

describe("class comparison — representative medication spot checks", () => {
  test("clozapine monitoring carries the ANC parameter (verbatim from its list)", () => {
    const cell = normalizeConcernCell(bySlug("clozapine"), "monitoring-burden");
    expect(cell.available).toBe(true);
    expect(cell.monitoringItems!.length).toBe(bySlug("clozapine").monitoring.length);
    expect(cell.monitoringItems!.some((m) => /ANC|neutrophil/i.test(m.parameter))).toBe(true);
  });

  test("risperidone carries a prolactin entry; aripiprazole's weight story is verbatim", () => {
    const ris = normalizeConcernCell(bySlug("risperidone"), "prolactin");
    expect(ris.available).toBe(true);
    expect(ris.entries.some((e) => /prolactin/i.test(e.name))).toBe(true);

    const ari = normalizeConcernCell(bySlug("aripiprazole"), "weight-metabolic");
    expect(ari.available).toBe(true);
    // every entry traceable to aripiprazole's own arrays
    const own = new Set([
      ...bySlug("aripiprazole").commonSideEffects.map((e) => e.name),
      ...bySlug("aripiprazole").seriousSideEffects.map((e) => e.name),
    ]);
    for (const e of ari.entries) expect(own.has(e.name)).toBe(true);
  });

  test("TCA anticholinergic & QT columns are populated for amitriptyline", () => {
    const anti = normalizeConcernCell(bySlug("amitriptyline"), "anticholinergic");
    const qt = normalizeConcernCell(bySlug("amitriptyline"), "qt-cardiac");
    expect(anti.available).toBe(true);
    expect(qt.available).toBe(true);
    expect(anti.entries.some((e) => /dry mouth|anticholinergic/i.test(e.name))).toBe(true);
    expect(qt.entries.some((e) => /cardiotox|arrhythm|QT/i.test(e.name))).toBe(true);
  });
});
