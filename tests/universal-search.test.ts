/**
 * KYP Universal Search — engine + integration test suite.
 *
 * Covers the audit/universal-search mission contract:
 *   - the 8-tier ranking model on synthetic fixtures (unit)
 *   - normalization (case, whitespace, NFKC)
 *   - multi-word AND semantics
 *   - the display policy (SEARCH_DISPLAY_CAP, shown/total)
 *   - THE DEFINING REGRESSION: `de` performs broad global discovery over
 *     the REAL generated index — every title-prefix record is returned,
 *     subject only to the documented cap
 *   - the prefix probe suites (d/de/dep/del/dem/des, ser/clo/flu/esc/ven/dul,
 *     sch/dep/del/bip/obs/adh) against the real index
 *   - grouping never hides a returned type (D-1 guard, per result set)
 *   - keyboard navigation source pins (arrows, Home/End, Enter, Escape)
 *   - the hero → modal query handoff (kyp:search CustomEvent)
 *
 * No dev server required: everything imports the generated client-side
 * artifact directly — the exact array the production modal consumes.
 */

import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  SEARCH_DISPLAY_CAP,
  normalizeQuery,
  tokenizeQuery,
  rankToken,
  rankResult,
  searchUniversal,
} from "../src/lib/kyp/search";
import type { SearchableItem } from "../src/lib/kyp/data/types";
import { searchIndexGenerated as searchIndex } from "../src/lib/kyp/data/search-index-generated";
import { SEARCH_RESULT_GROUPS } from "../src/lib/kyp/search-groups";

const REPO = join(import.meta.dir, "..");
const read = (rel: string): string => readFileSync(join(REPO, rel), "utf8");

// ─────────────────────────────────────────────────────────────────────────────
// Fixtures — synthetic items isolating each tier
// ─────────────────────────────────────────────────────────────────────────────
const FIXTURE: SearchableItem[] = [
  {
    id: "fx-exact",
    title: "Delirium",
    type: "psychiatry-note",
    description: "fixture",
    href: "/fx/1",
    keywords: [],
  },
  {
    id: "fx-title-prefix",
    title: "Dementia with Lewy Bodies",
    type: "psychiatry-note",
    description: "fixture",
    href: "/fx/2",
    keywords: [],
  },
  {
    id: "fx-token-prefix",
    title: "Major Depressive Disorder",
    type: "disease",
    description: "fixture",
    href: "/fx/3",
    keywords: [],
  },
  {
    id: "fx-substring",
    title: "Codeine",
    type: "drug",
    description: "fixture",
    href: "/fx/4",
    keywords: [],
  },
  {
    id: "fx-kw-exact",
    title: "An Unrelated Title",
    type: "drug",
    description: "fixture",
    href: "/fx/5",
    keywords: ["delirium"],
  },
  {
    id: "fx-kw-prefix",
    title: "Another Unrelated Title",
    type: "drug",
    description: "fixture",
    href: "/fx/6",
    keywords: ["dependence potential"],
  },
  {
    id: "fx-kw-substring",
    title: "Third Unrelated Title",
    type: "drug",
    description: "fixture",
    href: "/fx/7",
    keywords: ["obstructive sleep apnoea"],
  },
  {
    id: "fx-description",
    title: "Fourth Unrelated Title",
    type: "patient-guide",
    description: "mentions delirium tremens in passing",
    href: "/fx/8",
    keywords: [],
  },
];

describe("universal search — 8-tier ranking model (unit)", () => {
  test("tier 1: exact title", () => {
    expect(rankToken(FIXTURE[0], "delirium")).toBe(1);
  });
  test("tier 2: title starts with query", () => {
    expect(rankToken(FIXTURE[1], "dement")).toBe(2);
  });
  test("tier 3: a title WORD starts with query (token prefix, word boundary)", () => {
    expect(rankToken(FIXTURE[2], "depress")).toBe(3);
  });
  test("tier 4: title contains query (mid-word substring)", () => {
    expect(rankToken(FIXTURE[3], "de")).toBe(4); // Co-de-ine
  });
  test("tier 5: keyword equals query", () => {
    expect(rankToken(FIXTURE[4], "delirium")).toBe(5);
  });
  test("tier 6: keyword starts with query", () => {
    expect(rankToken(FIXTURE[5], "depend")).toBe(6);
  });
  test("tier 7: keyword contains query", () => {
    expect(rankToken(FIXTURE[6], "sleep")).toBe(7);
  });
  test("tier 8: description contains query", () => {
    expect(rankToken(FIXTURE[7], "tremens")).toBe(8);
  });
  test("no match → 0", () => {
    expect(rankToken(FIXTURE[0], "zzzz")).toBe(0);
  });

  test("tier precedence: token-prefix (3) outranks substring (4)", () => {
    // Both match "de": Major Depressive Disorder at a word boundary,
    // Codeine only mid-word — the word-boundary match must rank first.
    const { items } = searchUniversal(FIXTURE, "de");
    const i1 = items.findIndex((i) => i.id === "fx-token-prefix");
    const i2 = items.findIndex((i) => i.id === "fx-substring");
    expect(i1).toBeGreaterThan(-1);
    expect(i2).toBeGreaterThan(-1);
    expect(i1).toBeLessThan(i2);
  });

  test("tokenization splits titles at non-alphanumeric boundaries", () => {
    // "Suicide & Deliberate Self-Harm" → tokens suicide/deliberate/self/harm
    const item: SearchableItem = {
      id: "fx-split",
      title: "Suicide & Deliberate Self-Harm",
      type: "psychiatry-note",
      description: "x",
      href: "/fx/9",
      keywords: [],
    };
    expect(rankToken(item, "deliber")).toBe(3);
    expect(rankToken(item, "harm")).toBe(3);
    expect(rankToken(item, "self")).toBe(3);
  });
});

describe("universal search — normalization (unit)", () => {
  test("lowercase + trim + whitespace collapse", () => {
    expect(normalizeQuery("  DeLiRiUm  ")).toBe("delirium");
    expect(normalizeQuery("major\t\tdepression")).toBe("major depression");
    expect(normalizeQuery("  major   depression  ")).toBe("major depression");
  });
  test("NFKC folds full-width and compatibility forms", () => {
    expect(normalizeQuery("ｄｅ")).toBe("de"); // full-width latin
    expect(normalizeQuery("dｅ")).toBe("de");
  });
  test("tokenizeQuery removes empty tokens", () => {
    expect(tokenizeQuery("   ")).toEqual([]);
    expect(tokenizeQuery("  major   depression ")).toEqual(["major", "depression"]);
  });
  test("case-insensitive search over the real index", () => {
    const a = searchUniversal(searchIndex, "SeRtRaLiNe").items[0];
    const b = searchUniversal(searchIndex, "sertRALINE").items[0];
    expect(a?.title).toBe("Sertraline");
    expect(b?.id).toBe(a?.id);
  });
  test("whitespace-padded query equals trimmed query over the real index", () => {
    expect(searchUniversal(searchIndex, "  de  ").total).toBe(searchUniversal(searchIndex, "de").total);
    expect(searchUniversal(searchIndex, "\tde\n").items.map((i) => i.id)).toEqual(
      searchUniversal(searchIndex, "de").items.map((i) => i.id)
    );
  });
});

describe("universal search — multi-word AND semantics (unit)", () => {
  test("every token must match, else the item is excluded", () => {
    expect(rankResult(FIXTURE[2], "major depression")).toBe(0); // "depression" matches nothing on that item
    expect(rankResult(FIXTURE[2], "major depressive")).toBeGreaterThan(0); // 2 + 3
  });
  test("rank is the sum of token tiers (strong beats weak-and-weak)", () => {
    // Both tokens title-prefix (2+2) beats exact+description (1+8)
    const strong = rankResult(FIXTURE[1], "dementia lewy"); // 2 + 3 = 5
    const weak = rankResult(FIXTURE[7], "fourth tremens"); // 2 + 8 = 10
    expect(strong).toBeLessThan(weak);
    expect(strong).toBe(5);
    expect(weak).toBe(10);
  });
  test("real index: 'major depression' ranks Major Depressive Disorder first", () => {
    const { items } = searchUniversal(searchIndex, "major depression");
    expect(items[0]?.title).toBe("Major Depressive Disorder");
  });
  test("real index: 'sertraline anxiety' keeps Sertraline first (AND)", () => {
    const { items } = searchUniversal(searchIndex, "sertraline anxiety");
    expect(items[0]?.title).toBe("Sertraline");
  });
});

describe("universal search — display policy", () => {
  test("SEARCH_DISPLAY_CAP is exported and documented at 50", () => {
    expect(SEARCH_DISPLAY_CAP).toBe(50);
  });
  test("default limit is the cap; total reports pre-cap matches", () => {
    const { items, total } = searchUniversal(searchIndex, "de");
    expect(items.length).toBe(Math.min(total, SEARCH_DISPLAY_CAP));
    expect(total).toBeGreaterThan(items.length); // truncation is real for 'de'
  });
  test("custom limit clamps to [1, 50]", () => {
    expect(searchUniversal(searchIndex, "de", { limit: 999 }).items.length).toBe(50);
    expect(searchUniversal(searchIndex, "de", { limit: 0 }).items.length).toBe(1);
    expect(searchUniversal(searchIndex, "de", { limit: 5 }).items.length).toBe(5);
  });
  test("empty query returns the curated head of the index (modal shows the first 8)", () => {
    const { items, total } = searchUniversal(searchIndex, "");
    expect(items.length).toBe(Math.min(searchIndex.length, SEARCH_DISPLAY_CAP));
    expect(total).toBe(items.length);
    expect(items).toEqual(searchIndex.slice(0, SEARCH_DISPLAY_CAP));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// THE DEFINING REGRESSION + probe suites — over the REAL generated index
// (the exact array the production modal imports)
// ─────────────────────────────────────────────────────────────────────────────
describe("universal search — THE DEFINING TEST: 'de' broad global discovery", () => {
  const { items, total } = searchUniversal(searchIndex, "de");

  test("'de' discovers a broad global pool (not one exact result)", () => {
    expect(total).toBeGreaterThan(200);
    expect(items.length).toBe(50);
    const types = new Set(items.map((i) => i.type));
    expect(types.size).toBeGreaterThanOrEqual(5);
  });

  test("'de' returns EVERY title-prefix record in the real index (documented cap only)", () => {
    const prefixTitles = searchIndex
      .filter((i) => i.title.toLowerCase().startsWith("de"))
      .map((i) => i.title);
    expect(prefixTitles.length).toBeGreaterThanOrEqual(10); // a real family, not a coincidence
    for (const title of prefixTitles) {
      expect(items.some((i) => i.title === title)).toBe(true);
    }
  });

  test("'de' surfaces the Depression / Delirium families the mission named", () => {
    // Real-index equivalents of the mission's example entities
    const titles = items.map((i) => i.title);
    expect(titles).toContain("Delirium");
    expect(titles).toContain("Delirium in the Elderly");
    expect(titles).toContain("Depressive Disorders");
    expect(titles).toContain("Desipramine");
    expect(titles).toContain("Desvenlafaxine");
    expect(titles).toContain("Dementia with Lewy Bodies");
  });

  test("'de' ranks all title-prefix matches above substring-only matches", () => {
    const tierOf = (t: string) => rankResult(searchIndex.find((i) => i.title === t)!, "de");
    expect(tierOf("Delirium")).toBe(2);
    const prefixIdx = items.findIndex((i) => i.title === "Desvenlafaxine");
    expect(prefixIdx).toBeGreaterThan(-1);
    // Every SHOWN title-prefix match must precede every SHOWN substring-only
    // match; substring-only matches may be crowded out entirely (stronger
    // matches own the 50 slots) — that is the documented ranking contract.
    const shownPrefixPositions = items
      .map((i, idx) => ({ idx, i }))
      .filter(({ i }) => i.title.toLowerCase().startsWith("de"))
      .map(({ idx }) => idx);
    const shownSubstringPositions = items
      .map((i, idx) => ({ idx, i }))
      .filter(({ i }) => rankResult(i, "de") >= 4)
      .map(({ idx }) => idx);
    expect(shownPrefixPositions.length).toBeGreaterThanOrEqual(10);
    if (shownSubstringPositions.length > 0) {
      expect(Math.max(...shownPrefixPositions)).toBeLessThan(Math.min(...shownSubstringPositions));
    }
  });

  test("'de' result ordering is tier-monotone (strongest first)", () => {
    const tiers = items.map((i) => rankResult(i, "de"));
    for (let i = 1; i < tiers.length; i++) expect(tiers[i]).toBeGreaterThanOrEqual(tiers[i - 1]);
  });
});

describe("universal search — prefix probe suite (real index)", () => {
  const probes: { q: string; minTotal: number; anchors: [string, number][] }[] = [
    // q, minimum total matches, [title, max position] anchors
    { q: "d", minTotal: 300, anchors: [["Delirium", 0], ["Desipramine", 12]] },
    { q: "dep", minTotal: 90, anchors: [["Depressive Disorders", 1], ["Major Depressive Disorder", 5], ["Nicotine Dependence", 6]] },
    { q: "del", minTotal: 15, anchors: [["Delirium", 0], ["Persistent Delusional Disorder", 2], ["Suicide & Deliberate Self-Harm", 3]] },
    { q: "dem", minTotal: 25, anchors: [["Dementia with Lewy Bodies", 1], ["Vascular Dementia", 6], ["Managing Dementia", 6]] },
    { q: "des", minTotal: 50, anchors: [["Descriptive Phenomenology", 0], ["Desipramine", 2], ["Desvenlafaxine", 2]] },
    { q: "ser", minTotal: 90, anchors: [["Serotonin (5-HT)", 0], ["Sertraline", 3], ["Serotonin Syndrome", 1]] },
    { q: "clo", minTotal: 35, anchors: [["Clomipramine", 0], ["Clozapine", 4], ["Clonazepam", 1]] },
    { q: "flu", minTotal: 20, anchors: [["Flumazenil", 0], ["Fluoxetine", 2], ["Fluvoxamine", 6]] },
    { q: "esc", minTotal: 20, anchors: [["Escitalopram", 0]] },
    { q: "ven", minTotal: 40, anchors: [["Venlafaxine", 0], ["Desvenlafaxine", 1]] },
    { q: "dul", minTotal: 15, anchors: [["Duloxetine", 0]] },
    { q: "sch", minTotal: 40, anchors: [["Schizophrenia", 1], ["Schizoaffective & Schizotypal Disorders", 0]] },
    { q: "bip", minTotal: 20, anchors: [["Bipolar Disorders", 0], ["Carbamazepine", 5]] },
    { q: "obs", minTotal: 10, anchors: [["Obsessive-Compulsive Disorder (OCD)", 0], ["Sertraline", 10]] },
    { q: "adh", minTotal: 15, anchors: [["ADHD", 0], ["ADHD Medications", 1], ["Methylphenidate (d,l)", 10]] },
  ];

  for (const { q, minTotal, anchors } of probes) {
    test(`probe "${q}" — broad discovery, monotone ranking, anchors rise`, () => {
      const { items, total } = searchUniversal(searchIndex, q);
      expect(total).toBeGreaterThanOrEqual(minTotal);
      expect(items.length).toBeGreaterThan(0);
      // tier-monotone ordering
      const tiers = items.map((i) => rankResult(i, q));
      for (let i = 1; i < tiers.length; i++)
        expect(tiers[i]).toBeGreaterThanOrEqual(tiers[i - 1]);
      // anchor entities present and rising to their expected position
      for (const [title, maxPos] of anchors) {
        const pos = items.findIndex((i) => i.title === title);
        if (pos === -1) throw new Error(`anchor "${title}" missing for "${q}"`);
        expect(pos).toBeLessThanOrEqual(maxPos);
      }
    });
  }

  test("mixed result types: probes return multiple entity categories", () => {
    for (const q of ["dep", "ser", "sch", "adh"]) {
      const types = new Set(searchUniversal(searchIndex, q).items.map((i) => i.type));
      expect(types.size).toBeGreaterThanOrEqual(3);
    }
  });

  test("exact query: 'sertraline' tier-1 first", () => {
    const { items } = searchUniversal(searchIndex, "sertraline");
    expect(items[0]?.title).toBe("Sertraline");
    expect(rankResult(items[0], "sertraline")).toBe(1);
  });

  test("substring query: 'lafax' finds both -lafaxine drugs by title substring", () => {
    const { items, total } = searchUniversal(searchIndex, "lafax");
    expect(total).toBeGreaterThanOrEqual(2);
    const titles = items.map((i) => i.title);
    expect(titles).toContain("Venlafaxine");
    expect(titles).toContain("Desvenlafaxine");
  });
});

describe("universal search — grouping never hides results (D-1, per result set)", () => {
  test("every type returned for any probe belongs to exactly one rendered group", () => {
    const groupedTypes = SEARCH_RESULT_GROUPS.flatMap((g) => g.types);
    for (const q of ["de", "dep", "del", "ser", "sch", "d", "lafax", "sertraline"]) {
      for (const item of searchUniversal(searchIndex, q).items) {
        expect(groupedTypes.filter((t) => t === item.type)).toHaveLength(1);
      }
    }
  });

  test("the flat ranked order is preserved inside the grouped presentation", () => {
    // The grouped UI assigns data-idx = position in the flat results
    // array; the group filter must therefore be a permutation, not a
    // re-ranking. Simulate the GroupedResults projection for 'de'.
    const items = searchUniversal(searchIndex, "de").items;
    const projected = SEARCH_RESULT_GROUPS.flatMap((group) =>
      items.filter((item) => group.types.includes(item.type))
    );
    expect(projected.length).toBe(items.length);
    expect(new Set(projected).size).toBe(items.length); // no result duplicated or dropped
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Source pins — the production UI consumes this engine correctly
// ─────────────────────────────────────────────────────────────────────────────
describe("universal search — modal source pins", () => {
  const modal = read("src/components/kyp/ui/search-modal.tsx");
  const floating = read("src/components/kyp/ui/floating-search.tsx");
  const hero = read("src/components/kyp/sections/home-hero.tsx");

  test("the modal consumes the canonical engine + generated artifact", () => {
    expect(modal).toContain('from "@/lib/kyp/search"');
    expect(modal).toContain('from "@/lib/kyp/data/search-index-generated"');
    expect(modal).toContain("SEARCH_DISPLAY_CAP");
    expect(modal).not.toContain("function rankToken("); // no inline engine copy
  });

  test("keyboard: arrows, Home, End, Enter all navigate the flat ranked list", () => {
    expect(modal).toContain('e.key === "ArrowDown"');
    expect(modal).toContain('e.key === "ArrowUp"');
    expect(modal).toContain('e.key === "Home"');
    expect(modal).toContain('e.key === "End"');
    expect(modal).toContain("results[activeIndex]"); // Enter → flat index, grouping cannot corrupt it
  });

  test("the footer documents the display cap (shown of total)", () => {
    expect(modal).toContain("${results.length} of ${totalMatches} matches");
    expect(modal).toContain("${searchIndex.length} entries indexed");
  });

  test("hero form hands the typed query to the modal (no query loss, no hard-coded routes)", () => {
    expect(hero).toContain('new CustomEvent("kyp:search"');
    expect(hero).not.toContain('new KeyboardEvent("keydown"'); // old discard-query fallback removed
    expect(hero).not.toContain('q === "depression"'); // hard-coded route removed
    expect(hero).not.toContain("diseaseSlugs");
  });

  test("FloatingSearch seeds the modal with the handed-off query, one-shot", () => {
    expect(floating).toContain('"kyp:search"');
    expect(floating).toContain("setSeedQuery");
    expect(floating).toContain('initialQuery={seedQuery}');
    expect(floating).toContain("if (!open) setSeedQuery(null)");
    // first-registered-instance guard (two triggers mount on most pages)
    expect(floating).toContain("stopImmediatePropagation");
  });
});
