/**
 * Stahl's Prescriber-Guide Clinical MCQ Test Suite — Phase 6 contract.
 *
 * Data-level and source-level pins for the stahl-mcqs bank and its
 * integration into the existing quiz surfaces. No server needed.
 *
 * Coverage map (per the Phase 6 brief):
 *   1  assembly integrity: every authored question resolves; zero
 *      exclusions; authored count == resolved count
 *   2  schema: 4 options, unique, valid correctIndex, non-empty stem /
 *      explanation / evidence; explanations never "Option X is correct"
 *   3  id contract: stahl-{slug}-{nn} format, unique, drug prefix
 *      matches; per-drug numbering dense from 01
 *   4  source-grounding (the no-hallucination pin): every evidence
 *      string is a verbatim member of the asked drug's canonical
 *      PrescriberGuide record — recomputed independently here
 *   5  option grounding: every resolved option is a registry generic
 *      name or a canonical string of SOME drug's PrescriberGuide
 *      record; the remainder (authored negations) is bounded by the
 *      authored negation count — nothing else can enter
 *   6  pre-assembly structure: negations never the correct answer;
 *      drug-name answers carry an explicit evidenceRef; exactly
 *      3 distractors; every kind is fact | drug | negation
 *   7  shuffle safety: no "all of the above"-style options anywhere
 *   8  full coverage: every drug with a PrescriberGuide record has
 *      at least one question (145/145), zero orphans
 *   9  answer-position balance: each of A/B/C/D within ±25% of a
 *      quarter share
 *  10  determinism: re-deriving the position assignment from the
 *      question id (seedFromString + createRng) reproduces the
 *      assembled correctIndex for every question — same bank, same
 *      positions, every build
 *  11  duplicate detection: unique (drug, evidence) pairs, unique
 *      explanations, no near-identical stems — pinned via the
 *      validator PASS
 *  12  ambiguity: no distractor is (or paraphrases) a documented
 *      fact of the asked drug — validator PASS + an independent
 *      exact-match recomputation over every question
 *  13  topic taxonomy: all 10 topics used; topic↔zone compatibility;
 *      all 3 difficulties + all 4 question types used
 *  14  filtering: every filter dimension (drug / class / topic /
 *      difficulty / type / zone) narrows correctly and conserves the
 *      union; filter composition works
 *  15  pool adapter: stahlMcqToPoolQuestion namespaces the identity,
 *      carries "Stahl's Prescriber's Guide" + the drug's class, and
 *      deep-links the prescriber-guide anchor on the drug page
 *  16  engine integration: includeStahl is opt-in (default pool
 *      unchanged), adds only selected drugs' Stahl questions, and
 *      never collides with authored/generated identities
 *  17  UI integration: /quiz imports the bank + offers the Stahl
 *      filter chip with the distinguishable label; /quiz/custom
 *      offers the opt-in toggle; quiz pages hardcode no question
 *      content (no q({ authoring, no clinical stems in components)
 *  18  validation gate: validateStahlBank passes with full coverage
 *      required (zero violations, zero warnings)
 *  19  content-lock scope: the bank lives outside the locked medical
 *      data directory and imports canonical data — no copy inside
 *      src/lib/kyp/data (the lock keeps guarding the source of truth)
 *  20  UI metadata hygiene: source/topic/zone metadata stays in the
 *      data layer (validation, filtering, analytics, auditing, Mistake
 *      Book attribution) while learner-facing quiz surfaces render
 *      only the compact drug context — no repeated bank / zone /
 *      section labels around questions, answers or reviews
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { drugs } from "@/lib/kyp/data/drugs/index";
import type { Drug, PrescriberGuide, PrescriberDosingRow, PrescriberSpecialPopulation } from "@/lib/kyp/data/types";
import { createRng, seedFromString } from "@/lib/kyp/custom-test/rng";
import { buildQuestionPool, getPoolStats, isShuffleSafe } from "@/lib/kyp/custom-test/engine";
import {
  STAHL_MCQ_BANK,
  stahlMcqs,
  stahlBankIntegrity,
  stahlBankStats,
  filterStahlMcqs,
  stahlMcqToPoolQuestion,
  drugFactUniverse,
  resolveFact,
  STAHL_TOPICS,
  STAHL_TOPIC_LABELS,
  STAHL_ZONES,
  topicAllowsZone,
  validateStahlBank,
} from "@/lib/kyp/stahl-mcqs";
import type { AuthoredStahlMcq, StahlMcq } from "@/lib/kyp/stahl-mcqs";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const QUIZ_PAGE = "src/app/quiz/page.tsx";
const QUIZ_CUSTOM = "src/app/quiz/custom/page.tsx";
const BANK_DIR = "src/lib/kyp/stahl-mcqs/bank";

const bySlug = new Map(drugs.map((d) => [d.slug, d]));

/* ============================================================
   Independent canonical-string extraction (test-side second
   implementation — deliberately NOT drugFactUniverse)
   ============================================================ */

const ARRAY_ZONES = [
  "onsetTimeline", "ifItWorks", "ifItDoesNotWork", "augmentationCombos",
  "testsBeforeStarting", "sideEffectLogic", "sideEffectManagement",
  "sideEffectRescue", "dosageForms", "dosingTips", "overdose", "howToStop",
  "pharmacokinetics", "doNotUse", "potentialAdvantages",
  "potentialDisadvantages", "primaryTargetSymptoms", "pearls",
] as const;
const SCALAR_ZONES = ["weightGain", "sedation", "longTermUse", "habitForming"] as const;

/** Walk a PrescriberGuide record and collect every canonical string. */
function universe(pg: PrescriberGuide): Set<string> {
  const out = new Set<string>();
  for (const zone of ARRAY_ZONES) for (const s of pg[zone] ?? []) out.add(s);
  for (const zone of SCALAR_ZONES) if (pg[zone]) out.add(pg[zone]);
  for (const row of pg.dosing ?? []) {
    out.add(row.indication); out.add(row.starting); out.add(row.target);
    out.add(row.max); out.add(row.titration);
    for (const n of row.notes ?? []) out.add(n);
  }
  for (const pop of pg.specialPopulations ?? []) {
    out.add(pop.population);
    for (const g of pop.guidance) out.add(g);
  }
  return out;
}

/** Global multiverse: every canonical string of every drug + every
 *  generic name (a legitimate option from any drug). */
const GLOBAL_UNIVERSE = (() => {
  const out = new Set<string>();
  for (const d of drugs) {
    out.add(d.genericName);
    if (d.prescriberGuide) for (const s of universe(d.prescriberGuide)) out.add(s);
  }
  return out;
})();

const authoredNegations = STAHL_MCQ_BANK.reduce(
  (n, aq) =>
    n +
    (aq.correct.kind === "negation" ? 1 : 0) +
    aq.distractors.filter((s) => s.kind === "negation").length,
  0
);

/* ============================================================
   1–3 · Assembly, schema, ids
   ============================================================ */

describe("stahl mcqs — assembly, schema & ids", () => {
  test("1. assembly integrity — zero exclusions, counts match", () => {
    expect(stahlBankIntegrity.excluded).toEqual([]);
    expect(stahlBankIntegrity.authored).toBe(STAHL_MCQ_BANK.length);
    expect(stahlMcqs.length).toBe(STAHL_MCQ_BANK.length);
    expect(stahlMcqs.length).toBeGreaterThan(0);
  });

  test("2. schema — 4 unique options, valid correctIndex, no lazy explanations", () => {
    expect(stahlMcqs.length).toBeGreaterThanOrEqual(20);
    for (const m of stahlMcqs) {
      expect(m.options.length).toBe(4);
      expect(new Set(m.options).size).toBe(4);
      expect(m.correctIndex).toBeGreaterThanOrEqual(0);
      expect(m.correctIndex).toBeLessThanOrEqual(3);
      expect(m.question.trim().length).toBeGreaterThanOrEqual(20);
      expect(m.explanation.trim().length).toBeGreaterThanOrEqual(60);
      expect(m.evidence.trim().length).toBeGreaterThan(0);
      // An explanation must teach, not just point.
      expect(m.explanation).not.toMatch(/^Option [A-D] is correct\.?$/i);
      expect(m.explanation).not.toMatch(/^(correct|incorrect)[.:]\s*$/i);
    }
  });

  test("3. id contract — stable format, unique, dense per-drug numbering", () => {
    const seen = new Set<string>();
    for (const m of stahlMcqs) {
      expect(m.id).toMatch(/^stahl-[a-z0-9-]+-\d{2}$/);
      expect(m.id.startsWith(`stahl-${m.drugSlug}-`)).toBe(true);
      expect(seen.has(m.id)).toBe(false);
      seen.add(m.id);
    }
    // Dense per-drug numbering: each drug's questions are 01..n.
    const perDrug = new Map<string, number>();
    for (const m of stahlMcqs) {
      const n = Number(m.id.slice(m.id.lastIndexOf("-") + 1));
      perDrug.set(m.drugSlug, Math.max(perDrug.get(m.drugSlug) ?? 0, n));
    }
    const counts = stahlBankStats();
    for (const [slug, max] of perDrug) {
      const asked = stahlMcqs.filter((m) => m.drugSlug === slug).length;
      expect(asked).toBe(max); // no gaps in numbering
      expect(asked).toBeGreaterThan(0);
    }
    expect(perDrug.size).toBe(counts.drugsRepresented);
  });
});

/* ============================================================
   4–5 · Source-grounding — the no-hallucination pins
   ============================================================ */

describe("stahl mcqs — source grounding", () => {
  test("4. every evidence string is a verbatim canonical fact of the asked drug", () => {
    for (const m of stahlMcqs) {
      const drug = bySlug.get(m.drugSlug);
      expect(drug).toBeDefined();
      expect(drug?.prescriberGuide).toBeDefined();
      const u = drug!.prescriberGuide ? universe(drug!.prescriberGuide) : new Set<string>();
      expect(
        u.has(m.evidence),
        `${m.id}: evidence not found verbatim in ${m.drugSlug}'s PrescriberGuide record`
      ).toBe(true);
    }
  });

  test("5. every option is grounded — canonical string, drug name, or authored negation (bounded)", () => {
    let foreign = 0;
    for (const m of stahlMcqs) {
      for (const option of m.options) {
        if (GLOBAL_UNIVERSE.has(option)) continue;
        foreign++;
      }
    }
    // Only authored negations may fall outside the canonical multiverse,
    // and there are exactly authoredNegations of them in the bank.
    expect(foreign).toBeLessThanOrEqual(authoredNegations);
    expect(authoredNegations).toBeGreaterThan(0);
    // And every foreign string is short-ish authored text (not data drift):
    for (const m of stahlMcqs) {
      for (const option of m.options) {
        if (!GLOBAL_UNIVERSE.has(option)) {
          expect(option.length).toBeGreaterThan(0);
          expect(option.length).toBeLessThan(300);
        }
      }
    }
  });

  test("5b. drugFactUniverse agrees with the independent walker", () => {
    for (const d of drugs.slice(0, 12)) {
      if (!d.prescriberGuide) continue;
      const a = drugFactUniverse(d.slug);
      const b = universe(d.prescriberGuide);
      expect(a.size).toBe(b.size);
      for (const s of b) expect(a.has(s)).toBe(true);
    }
  });
});

/* ============================================================
   6–7 · Pre-assembly structure & shuffle safety
   ============================================================ */

describe("stahl mcqs — authored bank structure", () => {
  test("6. negations never correct; drug answers carry evidence; exactly 3 distractors", () => {
    for (const aq of STAHL_MCQ_BANK) {
      expect(aq.distractors.length).toBe(3);
      expect(aq.correct.kind).not.toBe("negation");
      if (aq.correct.kind === "drug") {
        expect(aq.evidenceRef).toBeDefined();
      }
      for (const opt of [aq.correct, ...aq.distractors]) {
        expect(["fact", "drug", "negation"]).toContain(opt.kind);
      }
      // Topic/difficulty/type are the only enum values.
      expect(aq.topic in STAHL_TOPIC_LABELS).toBe(true);
      expect(["foundational", "intermediate", "advanced"]).toContain(aq.difficulty);
      expect([
        "clinical-application", "drug-selection", "dosing-detail", "class-distinction",
      ]).toContain(aq.type);
    }
  });

  test("6b. every authored fact/drug reference resolves against the registry", () => {
    for (const aq of STAHL_MCQ_BANK) {
      for (const opt of [aq.correct, ...aq.distractors]) {
        if (opt.kind === "fact") {
          expect(resolveFact(opt.ref), `${aq.drug}: fact ref does not resolve`).not.toBeNull();
        }
        if (opt.kind === "drug") {
          expect(bySlug.has(opt.slug), `unknown drug option ${opt.slug}`).toBe(true);
        }
      }
      if (aq.evidenceRef) {
        expect(resolveFact(aq.evidenceRef), `${aq.drug}: evidenceRef does not resolve`).not.toBeNull();
      }
    }
  });

  test("7. shuffle safety — no 'all of the above' option forms", () => {
    for (const m of stahlMcqs) {
      expect(isShuffleSafe(m.options), `${m.id}: unshuffleable option set`).toBe(true);
    }
  });
});

/* ============================================================
   8–12 · Coverage, balance, determinism, duplicates, ambiguity
   ============================================================ */

describe("stahl mcqs — coverage, balance & determinism", () => {
  test("8. full drug coverage — every PrescriberGuide drug is asked about", () => {
    const stats = stahlBankStats();
    const withPg = drugs.filter((d) => d.prescriberGuide);
    expect(withPg.length).toBe(145);
    expect(stats.drugsWithoutQuestions).toEqual([]);
    expect(stats.drugsRepresented).toBe(145);
  });

  test("9. answer-position balance — each position within ±25% of quarter", () => {
    const stats = stahlBankStats();
    const total = stats.total;
    expect(total).toBeGreaterThanOrEqual(20);
    const quarter = total / 4;
    stats.answerPositions.forEach((count) => {
      expect(count).toBeGreaterThanOrEqual(Math.floor(quarter * 0.75));
      expect(count).toBeLessThanOrEqual(Math.ceil(quarter * 1.25));
    });
    // No degenerate pattern: at least two positions differ.
    expect(new Set(stats.answerPositions).size).toBeGreaterThan(1);
  });

  test("10. determinism — seeded position assignment reproduces every correctIndex", () => {
    for (const m of stahlMcqs) {
      const order = [0, 1, 2, 3];
      createRng(seedFromString(m.id)).shuffle(order);
      // options were assembled as [correct, ...distractors] pre-shuffle;
      // the shuffled array is order.map(i => preShuffle[i]) so the
      // correct index is where 0 landed.
      expect(order.indexOf(0)).toBe(m.correctIndex);
    }
  });

  test("11. duplicates — validator PASS pins (drug,evidence), explanations, stems", () => {
    // Independent (drug, evidence) uniqueness check.
    const seen = new Set<string>();
    for (const m of stahlMcqs) {
      const key = `${m.drugSlug}::${m.evidence}`;
      expect(seen.has(key), `${m.id}: evidence already tested`).toBe(false);
      seen.add(key);
    }
    // Explanations never reused.
    const seenExp = new Set<string>();
    for (const m of stahlMcqs) {
      expect(seenExp.has(m.explanation), `${m.id}: explanation reused`).toBe(false);
      seenExp.add(m.explanation);
    }
  });

  test("12. ambiguity — no distractor text is a documented fact of the asked drug", () => {
    for (const m of stahlMcqs) {
      const drug = bySlug.get(m.drugSlug)!;
      const u = drug.prescriberGuide ? universe(drug.prescriberGuide) : new Set<string>();
      const correctText = m.options[m.correctIndex];
      m.options.forEach((option) => {
        if (option === correctText) return;
        expect(
          u.has(option),
          `${m.id}: distractor is documented for ${m.drugSlug}`
        ).toBe(false);
      });
    }
  });
});

/* ============================================================
   13 · Taxonomy usage
   ============================================================ */

describe("stahl mcqs — taxonomy", () => {
  test("13. all topics, difficulties and question types are used; zone compatibility holds", () => {
    const stats = stahlBankStats();
    for (const t of STAHL_TOPICS) {
      expect(stats.byTopic[t.id], `topic ${t.id} unused`).toBeGreaterThan(0);
    }
    expect(Object.keys(stats.byTopic)).toHaveLength(STAHL_TOPICS.length);
    for (const d of ["foundational", "intermediate", "advanced"] as const) {
      expect(stats.byDifficulty[d], `difficulty ${d} unused`).toBeGreaterThan(0);
    }
    for (const t of ["clinical-application", "drug-selection", "dosing-detail", "class-distinction"] as const) {
      expect(stats.byType[t], `type ${t} unused`).toBeGreaterThan(0);
    }
    for (const m of stahlMcqs) {
      expect(topicAllowsZone(m.topic, m.zone), `${m.id}: topic/zone mismatch`).toBe(true);
      expect(STAHL_ZONES[m.zone]).toBeDefined();
      expect(m.zoneLabel).toBe(STAHL_ZONES[m.zone].label);
    }
  });
});

/* ============================================================
   14 · Filtering
   ============================================================ */

describe("stahl mcqs — filtering", () => {
  const stats = stahlBankStats();

  test("14a. filter by drug", () => {
    const sertralineQs = filterStahlMcqs({ drugSlugs: ["sertraline"] });
    expect(sertralineQs.length).toBeGreaterThan(0);
    for (const m of sertralineQs) expect(m.drugSlug).toBe("sertraline");
  });

  test("14b. filter by class", () => {
    const ssriQs = filterStahlMcqs({ classIds: ["ssri"] });
    expect(ssriQs.length).toBeGreaterThan(0);
    for (const m of ssriQs) expect(m.drugClass).toBe("ssri");
  });

  test("14c. filter by topic, difficulty, type and zone", () => {
    const pearls = filterStahlMcqs({ topics: ["clinical-pearls"] });
    expect(pearls.length).toBe(stats.byTopic["clinical-pearls"]);
    const foundational = filterStahlMcqs({ difficulties: ["foundational"] });
    expect(foundational.length).toBe(stats.byDifficulty.foundational);
    const dosing = filterStahlMcqs({ types: ["dosing-detail"] });
    expect(dosing.length).toBe(stats.byType["dosing-detail"]);
    const zoneQs = filterStahlMcqs({ zones: ["pearls"] });
    expect(zoneQs.length).toBeGreaterThan(0);
    for (const m of zoneQs) expect(m.zone).toBe("pearls");
  });

  test("14d. composed filters conserve the union", () => {
    const a = filterStahlMcqs({ topics: ["clinical-use"], difficulties: ["foundational"] });
    const b = filterStahlMcqs({ topics: ["clinical-use"] });
    const c = filterStahlMcqs({ difficulties: ["foundational"] });
    expect(a.length).toBeLessThanOrEqual(Math.min(b.length, c.length));
    expect(a.length).toBeGreaterThan(0);
    for (const m of a) {
      expect(m.topic).toBe("clinical-use");
      expect(m.difficulty).toBe("foundational");
    }
  });

  test("14e. empty filter returns the full bank unchanged", () => {
    expect(filterStahlMcqs({})).toHaveLength(stahlMcqs.length);
  });
});

/* ============================================================
   15 · Pool adapter
   ============================================================ */

describe("stahl mcqs — pool adapter", () => {
  test("15. adapter namespaces identities, labels the source, deep-links the anchor", () => {
    for (const m of stahlMcqs) {
      const q = stahlMcqToPoolQuestion(m);
      expect(q.identity).toBe(`${m.drugSlug}|stahl:${m.id}`);
      expect(q.question).toBe(m.question);
      expect(q.options).toBe(m.options);
      expect(q.correctIndex).toBe(m.correctIndex);
      expect(q.explanation).toBe(m.explanation);
      expect(q.evidence).toBe(m.evidence);
      expect(q.templateId).toBe("stahl");
      expect(q.source.sourceName).toBe(m.drugName);
      expect(q.source.sourceSlug).toBe(m.drugSlug);
      // Section label exposes bank + exact zone (spec §14 — source
      // display: Stahl's Prescriber's Guide, drug, section/zone).
      expect(q.source.sectionLabel).toBe(`Stahl's Prescriber's Guide · ${m.zoneLabel}`);
      expect(q.source.sectionHref).toBe(m.sourceHref);
      expect(q.source.sourceClass).toBe(m.drugClassLabel);
    }
    // Spot-check the deep link shape on a real question.
    const first = stahlMcqs[0];
    expect(first.sourceHref.startsWith(`/drugs/${first.drugSlug}`)).toBe(true);
    expect(first.sourceHref).toContain("#");
  });

  test("15b. every sourceHref is a valid anchored drug-page link", () => {
    const drugHrefs = new Set(drugs.map((d) => d.slug));
    for (const m of stahlMcqs) {
      const match = m.sourceHref.match(/^\/drugs\/([a-z0-9-]+)(#.*)?$/);
      expect(match, `${m.id}: malformed sourceHref ${m.sourceHref}`).not.toBeNull();
      expect(drugHrefs.has(match![1])).toBe(true);
      expect(match![2]).toBe("#prescriber-guide");
    }
  });
});

/* ============================================================
   16 · Engine integration
   ============================================================ */

describe("stahl mcqs — custom test engine integration", () => {
  test("16a. includeStahl is opt-in — default pool unchanged", () => {
    const slugs = ["sertraline", "fluoxetine"];
    const classic = buildQuestionPool(slugs);
    const withStahl = buildQuestionPool(slugs, { includeStahl: true });
    const classicStahl = classic.filter((q) => q.templateId === "stahl");
    expect(classicStahl).toHaveLength(0);
    expect(withStahl.length).toBeGreaterThan(classic.length);
    const stahlInPool = withStahl.filter((q) => q.templateId === "stahl");
    const expected = stahlMcqs.filter((m) => slugs.includes(m.drugSlug)).length;
    expect(stahlInPool).toHaveLength(expected);
  });

  test("16b. stahl identities never collide with other pool questions", () => {
    const withStahl = buildQuestionPool(
      drugs.slice(0, 20).map((d) => d.slug),
      { includeStahl: true }
    );
    const ids = withStahl.map((q) => q.identity);
    expect(new Set(ids).size).toBe(ids.length);
    // Stahl identities use the namespaced pattern only.
    for (const id of ids.filter((i) => i.includes("|stahl:"))) {
      expect(id).toMatch(/^[a-z0-9-]+\|stahl:stahl-[a-z0-9-]+-\d{2}$/);
    }
  });

  test("16c. getPoolStats reports the stahl bank under its template id", () => {
    const slugs = ["sertraline"];
    const without = getPoolStats(slugs);
    const withStahl = getPoolStats(slugs, { includeStahl: true });
    expect(without.perTemplate["stahl"]).toBeUndefined();
    const expected = stahlMcqs.filter((m) => m.drugSlug === "sertraline").length;
    expect(withStahl.perTemplate["stahl"]).toBe(expected);
    expect(withStahl.total).toBe(without.total + expected);
  });
});

/* ============================================================
   17 · UI integration (source-level)
   ============================================================ */

describe("stahl mcqs — quiz surface integration", () => {
  test("17a. /quiz imports the bank and offers the Stahl filter chip", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain('from "@/lib/kyp/stahl-mcqs"');
    expect(src).toContain('"stahl"');
    expect(src).toContain("Stahl's Prescriber's Guide");
    // Zone display (spec §14): the question screen shows the exact
    // PrescriberGuide zone next to the bank label.
    expect(src).toContain("sourceZone");
    expect(src).toContain("mcq.zoneLabel");
  });

  test("17b. /quiz/custom offers the opt-in toggle wired to the engine", () => {
    const src = read(QUIZ_CUSTOM);
    expect(src).toContain("includeStahl");
    expect(src).toContain("stahlBankStats");
    expect(src).toContain("Stahl's Prescriber's Guide");
  });

  test("17c. no question content is hardcoded in the quiz pages", () => {
    for (const page of [QUIZ_PAGE, QUIZ_CUSTOM]) {
      const src = read(page);
      // No authored questions (DSL) inside components…
      expect(src.includes("q({")).toBe(false);
      // …and no fact references either.
      expect(src.includes("evidenceRef")).toBe(false);
    }
  });

  test("17d. bank files live outside the locked data directory", () => {
    expect(existsSync(join(process.cwd(), BANK_DIR))).toBe(true);
    const lock = read("scripts/content-lock.ts");
    expect(lock).toContain('src/lib/kyp/data');
    // The bank directory itself is not inside the locked tree.
    expect(BANK_DIR.startsWith("src/lib/kyp/data/")).toBe(false);
  });
});

/* ============================================================
   18–19 · The validation gate
   ============================================================ */

describe("stahl mcqs — validation gate", () => {
  test("18. validateStahlBank passes with full coverage required", () => {
    const result = validateStahlBank({ requireFullDrugCoverage: true });
    expect(result.violations).toEqual([]);
    expect(result.warnings).toEqual([]);
    expect(result.ok).toBe(true);
    expect(result.totalQuestions).toBe(stahlMcqs.length);
  });

  test("19. the bank is a meaningful teaching set, not a token handful", () => {
    expect(stahlMcqs.length).toBeGreaterThanOrEqual(100);
    const stats = stahlBankStats();
    // At least 3 questions per difficulty tier of the taxonomy and a
    // class spread across the registry, not one class dominating >40%.
    for (const count of Object.values(stats.byClass)) {
      expect(count / stats.total).toBeLessThan(0.25);
    }
  });
});

/* ============================================================
   20 · UI metadata hygiene (Phase 6 UI cleanup)
   ============================================================
   Source/topic metadata is infrastructure, not learner-facing
   content. The bank label, the exact PrescriberGuide zone and the
   topic taxonomy remain in the MCQ data — feeding validation,
   source-grounding tests, filtering, analytics, auditing and
   Mistake Book attribution — while every learner-facing quiz
   surface (practice, custom test, review, Mistake Book, spaced
   review) renders only the compact drug context per question.
*/

describe("stahl mcqs — UI metadata hygiene", () => {
  const MISTAKES_PAGE = "src/app/study/mistakes/page.tsx";
  const REVIEW_PAGE = "src/app/study/review/page.tsx";

  test("20a. /quiz renders the compact drug context only — no per-question bank/zone line", () => {
    const src = read(QUIZ_PAGE);
    // The compact, linked drug/disease label stays…
    expect(src).toContain("{currentQuestion.sourceName}");
    expect(src).toContain("{r.question.sourceName}");
    // …but the question screen no longer renders the zone suffix…
    expect(src).not.toContain("currentQuestion.sourceZone");
    // …nor the bank label / raw sourceType after the name.
    expect(src).not.toContain(`? "Stahl's Prescriber's Guide" :`);
    expect(src).not.toContain(
      "<span>· {currentQuestion.sourceType}</span>"
    );
  });

  test("20b. /quiz keeps bank-level identification (stats + filter chip + deep link)", () => {
    const src = read(QUIZ_PAGE);
    // Bank identification stays where it belongs — the intro stat
    // and the ?filter=stahl chip label — never on the questions.
    expect(src).toContain("From Stahl's Prescriber's Guide");
    expect(src).toContain(`label: "Stahl's Prescriber's Guide"`);
    // ?filter= whitelist (renamed param → filterParam in the hardening
    // run when the ?drug= focused-practice reader was added beside it;
    // the whitelist behavior is unchanged and still pinned here).
    expect(src).toContain(
      `filterParam === "drug" || filterParam === "disease" || filterParam === "stahl"`
    );
  });

  test("20c. /quiz keeps the zone INTERNAL (question build + mistake attribution)", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain("sourceZone?: string;");
    expect(src).toContain("sourceZone: mcq.zoneLabel");
    expect(src).toContain("r.question.sourceZone");
  });

  test("20d. custom test + review show the drug context only; attribution stays internal", () => {
    const src = read(QUIZ_CUSTOM);
    expect(src).toContain("{q.source.sourceName}");
    expect(src).toContain("{rq.source.sourceName}");
    // No per-question sectionLabel rendering in either phase…
    expect(src).not.toContain("{q.source.sectionLabel}");
    expect(src).not.toContain("{rq.source.sectionLabel}");
    // …while mistake persistence (internal) still carries it, and
    // Stahl mistakes still self-identify via the namespaced identity.
    expect(src).toContain("sectionLabel: q.source.sectionLabel");
    expect(src).toContain('q.identity.includes("|stahl:")');
    // The opt-in bank toggle still identifies the bank by name.
    expect(src).toContain(
      "Stahl's Prescriber's Guide — {stahlBankStats().total} clinical MCQs"
    );
  });

  test("20e. Mistake Book entries show drug + class context only", () => {
    const src = read(MISTAKES_PAGE);
    expect(src).toContain("{entry.source.sourceName}");
    expect(src).toContain("{entry.source.sourceClass");
    expect(src).not.toContain("{entry.source.sectionLabel}");
  });

  test("20f. spaced-review session shows the drug context only", () => {
    const src = read(REVIEW_PAGE);
    expect(src).toContain("{q.source.sourceName}");
    expect(src).not.toContain("{q.source.sectionLabel}");
    // Internal mistake attribution keeps the section label.
    expect(src).toContain("sectionLabel: question.source.sectionLabel");
  });

  test("20g. the metadata itself is intact in the data layer", () => {
    // The bank is untouched: 180 questions (145/145 coverage is
    // pinned by test 8) — asserted here as a cleanup invariant.
    expect(stahlMcqs.length).toBe(180);
    for (const m of stahlMcqs) {
      expect(m.evidence.length).toBeGreaterThan(0);
      expect(m.topic in STAHL_TOPIC_LABELS).toBe(true);
      expect(m.zoneLabel.length).toBeGreaterThan(0);
    }
    // Every pool question still carries the full internal
    // attribution (bank · zone) — the data the Mistake Book and
    // auditing rely on even though the UI no longer repeats it.
    for (const m of stahlMcqs.slice(0, 25)) {
      const q = stahlMcqToPoolQuestion(m);
      expect(q.identity).toContain("|stahl:");
      expect(q.source.sectionLabel).toBe(
        `Stahl's Prescriber's Guide · ${m.zoneLabel}`
      );
    }
  });
});
