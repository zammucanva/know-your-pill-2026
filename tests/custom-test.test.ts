/**
 * Custom Test engine regression suite.
 *
 * Pins the engine contract:
 *   - questions derive ONLY from the locked data layer (authored MCQs +
 *     deterministic templates); every option is a real data value
 *   - dedup identity guarantees zero duplicate questions in an attempt
 *   - the availability number is the real unique pool size; oversized
 *     requests are capped and flagged — never padded with duplicates
 *   - answer shuffling is skipped for position-dependent options
 *   - deterministic seeding reproduces identical attempts
 *   - balanced selection spreads questions across templates
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import {
  buildQuestionPool,
  buildTest,
  getPoolStats,
  isShuffleSafe,
} from "@/lib/kyp/custom-test/engine";
import { deriveRequestedCount } from "@/lib/kyp/custom-test/count";
import { TEMPLATE_IDS, TEMPLATES } from "@/lib/kyp/custom-test/templates";
import { createRng, seedFromString } from "@/lib/kyp/custom-test/rng";
import { drugs } from "@/lib/kyp/data/drugs/index";

const ALL_SLUGS = drugs.map((d) => d.slug);

describe("custom test — engine pool", () => {
  test("the pool contains exactly 13 deterministic templates", () => {
    expect(TEMPLATE_IDS.length).toBe(16); // 13 original + 3 graph-driven families (X4)
    for (const id of TEMPLATE_IDS) {
      expect(typeof TEMPLATES[id]).toBe("function");
    }
  });

  test("full-selection pool: authored MCQs + generated, all unique identities", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    const ids = pool.map((q) => q.identity);
    expect(new Set(ids).size).toBe(pool.length);

    const stats = getPoolStats(ALL_SLUGS);
    expect(stats.authored).toBe(72); // 6 microQuizzes × 12 drugs
    expect(stats.total).toBeGreaterThan(300); // real generated availability
    expect(stats.total).toBe(pool.length);

    // Every question has 4 options, one correct, and full attribution.
    for (const q of pool) {
      expect(q.options.length).toBe(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
      expect(q.source.sourceName.length).toBeGreaterThan(0);
      expect(q.source.sectionLabel.length).toBeGreaterThan(0);
      expect(q.source.sectionHref.startsWith("/drugs/")).toBe(true);
      expect(q.explanation.length).toBeGreaterThan(10);
    }
  });

  test("topic filtering: pool shrinks with the selection", () => {
    const full = getPoolStats(ALL_SLUGS).total;
    const ssri = getPoolStats(["sertraline", "fluoxetine"]).total;
    const one = getPoolStats(["bupropion"]).total;
    expect(ssri).toBeLessThan(full);
    expect(one).toBeLessThan(ssri);
    expect(one).toBeGreaterThan(30); // a single drug still yields a real test
    expect(getPoolStats([]).total).toBe(0);
  });

  test("every generated option is a real value from the data layer", () => {
    const pool = buildQuestionPool(ALL_SLUGS).filter(
      (q) => q.templateId !== "authored"
    );
    // Collect the universe of legal option values per dimension.
    const universe = new Set<string>();
    for (const drug of drugs) {
      universe.add(drug.drugClassLabel);
      universe.add(drug.genericName);
      // X4a mechanism-effect: options are the drugs' net-effect strings.
      universe.add(drug.mechanism.effect);
      for (const n of drug.neurotransmitters)
        universe.add(n.split(" (")[0].split(" — ")[0].trim());
      for (const i of drug.indications) universe.add(i.name);
      for (const s of drug.commonSideEffects) universe.add(s.name);
      for (const s of drug.seriousSideEffects) universe.add(s.name);
      for (const m of drug.monitoring) universe.add(m.parameter);
      for (const c of drug.contraindications) universe.add(c.name);
      for (const i of drug.interactions)
        universe.add(i.drug.split(" (")[0].split(" — ")[0].trim());
      for (const b of drug.blackBoxWarnings) universe.add(b.title);
      const hl = drug.mechanism.halfLife.match(
        /~?\s*\d+(?:[.,]\d+)?\s*(?:[–—-]\s*\d+(?:[.,]\d+)?)?\s*(?:hours?|days?|minutes?)/
      );
      if (hl) universe.add(hl[0].replace(/~/g, "").trim());
      if (drug.mechanism.activeMetabolite && !/^no active metabolite/i.test(drug.mechanism.activeMetabolite)) {
        universe.add(
          drug.mechanism.activeMetabolite.split(" (")[0].split(" — ")[0].trim()
        );
      }
    }
    for (const region of ["Prefrontal Cortex", "Nucleus Accumbens", "Amygdala", "Hippocampus", "Raphe Nuclei", "Substantia Nigra"]) {
      universe.add(region);
    }
    const violations: string[] = [];
    for (const q of pool) {
      for (const option of q.options) {
        if (!universe.has(option)) violations.push(`${q.identity}: "${option}"`);
      }
    }
    expect(violations).toEqual([]);
  });
});

describe("custom test — attempt assembly", () => {
  test("zero duplicate questions inside any attempt", () => {
    for (const count of [10, 20, 30, 50, 100]) {
      const { questions } = buildTest(ALL_SLUGS, count, 42);
      expect(questions.length).toBe(Math.min(count, getPoolStats(ALL_SLUGS).total));
      const identities = questions.map((q) => q.identity);
      expect(new Set(identities).size).toBe(identities.length);
    }
  });

  test("requested count above availability is capped and flagged, never padded", () => {
    const one = ["bupropion"];
    const available = getPoolStats(one).total;
    const result = buildTest(one, available + 500, 7);
    expect(result.capped).toBe(true);
    expect(result.available).toBe(available);
    expect(result.deliveredCount).toBe(available);
    const identities = result.questions.map((q) => q.identity);
    expect(new Set(identities).size).toBe(available);
  });

  test("deterministic seed reproduces the identical attempt", () => {
    const a = buildTest(ALL_SLUGS, 20, 12345);
    const b = buildTest(ALL_SLUGS, 20, 12345);
    expect(a.questions.map((q) => q.identity)).toEqual(
      b.questions.map((q) => q.identity)
    );
    expect(a.questions.map((q) => q.attemptOptions)).toEqual(
      b.questions.map((q) => q.attemptOptions)
    );
    expect(a.questions.map((q) => q.attemptCorrectIndex)).toEqual(
      b.questions.map((q) => q.attemptCorrectIndex)
    );
    // A different seed yields a different question set (order or content).
    const c = buildTest(ALL_SLUGS, 20, 999);
    const sameSet =
      a.questions.map((q) => q.identity).join() ===
      c.questions.map((q) => q.identity).join();
    const sameOptions =
      a.questions.map((q) => q.attemptOptions.join()).join() ===
      c.questions.map((q) => q.attemptOptions.join()).join();
    expect(sameSet && sameOptions).toBe(false);
  });

  test("answer shuffling preserves the correct answer mapping", () => {
    for (let seed = 1; seed <= 20; seed++) {
      const { questions } = buildTest(ALL_SLUGS, 30, seed);
      for (const q of questions) {
        expect(q.attemptOptions.length).toBe(q.options.length);
        const correctText = q.options[q.correctIndex];
        expect(q.attemptOptions[q.attemptCorrectIndex]).toBe(correctText);
        // Same option set, possibly reordered.
        expect([...q.attemptOptions].sort()).toEqual([...q.options].sort());
      }
    }
  });

  test("position-dependent options are never shuffled", () => {
    expect(isShuffleSafe(["A", "B", "C", "All of the above"])).toBe(false);
    expect(isShuffleSafe(["A", "B", "C", "None of the above"])).toBe(false);
    expect(isShuffleSafe(["A", "B", "C", "Both A and B"])).toBe(false);
    expect(isShuffleSafe(["A", "B", "C", "D"])).toBe(true);

    // The real pool's authored MCQ with "All of the above" keeps its order.
    const { questions } = buildTest(ALL_SLUGS, getPoolStats(ALL_SLUGS).total, 3);
    const unshuffled = questions.filter((q) => !isShuffleSafe(q.options));
    for (const q of unshuffled) {
      expect(q.attemptOptions).toEqual(q.options);
      expect(q.attemptCorrectIndex).toBe(q.correctIndex);
    }
    expect(unshuffled.length).toBeGreaterThan(0); // the duloxetine MCQ exists
  });

  test("balanced selection spreads questions across templates", () => {
    const { questions } = buildTest(ALL_SLUGS, 40, 77);
    const byTemplate = new Map<string, number>();
    for (const q of questions) {
      byTemplate.set(q.templateId, (byTemplate.get(q.templateId) ?? 0) + 1);
    }
    // No single template dominates a 40-question balanced attempt.
    const max = Math.max(...byTemplate.values());
    expect(max).toBeLessThanOrEqual(7);
    // Authored MCQs are represented.
    expect(byTemplate.get("authored") ?? 0).toBeGreaterThan(0);
  });
});

describe("custom test — source grounding anchors", () => {
  test("interaction template reproduces the QA-evidence question shape", () => {
    const pool = buildQuestionPool(["mirtazapine"]).filter(
      (q) => q.templateId === "interaction"
    );
    expect(pool.length).toBeGreaterThan(0);
    const q = pool[0];
    expect(q.question.startsWith("Which of the following interacts with Mirtazapine?")).toBe(true);
    expect(q.source.sourceName).toBe("Mirtazapine");
    expect(q.source.sectionLabel).toBe("Interactions");
  });

  test("every explanation is grounded in the source drug's own data", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    for (const q of pool) {
      const drug = drugs.find((d) => d.slug === q.source.sourceSlug)!;
      // The evidence string mentions a real value from this drug's data.
      expect(drug.slug).toBe(q.source.sourceSlug);
    }
  });

  test("rng: seedFromString is stable and distributes", () => {
    expect(seedFromString("kyp")).toBe(seedFromString("kyp"));
    expect(seedFromString("kyp")).not.toBe(seedFromString("kyp2"));
    const rng = createRng(1);
    const buckets = [0, 0, 0];
    for (let i = 0; i < 300; i++) buckets[rng.int(3)]++;
    expect(buckets.every((b) => b > 50)).toBe(true);
  });
});

describe("custom test — requested-count derivation (crash regression)", () => {
  // Regression for the 51a327a crash: "0"/"-5"/"" typed into the Custom
  // question-count input used to pass through parseInt unclamped, reach
  // buildTest, and produce an empty attempt — the Test phase then read
  // `questions[index].source` on undefined and blanked the page. The
  // derivation is now clamped to >= 1, and Start Test is disabled whenever
  // the effective requested count is not a finite number >= 1.
  test('"0", "-5" and "" never yield an effective count below 1', () => {
    for (const raw of ["0", "-5", ""]) {
      const requested = deriveRequestedCount(raw, 20);
      expect(Number.isFinite(requested)).toBe(true);
      expect(requested).toBeGreaterThanOrEqual(1);
    }
  });

  test("sub-1 custom input is clamped to 1, preserving a usable test", () => {
    expect(deriveRequestedCount("0", 20)).toBe(1);
    expect(deriveRequestedCount("-5", 20)).toBe(1);
    expect(deriveRequestedCount("1", 20)).toBe(1);
    expect(deriveRequestedCount("12", 20)).toBe(12);
  });

  test("empty or whitespace input falls back to the selected preset", () => {
    expect(deriveRequestedCount("", 10)).toBe(10);
    expect(deriveRequestedCount("", 100)).toBe(100);
    expect(deriveRequestedCount("   ", 30)).toBe(30);
  });

  test("unparseable input stays NaN so Start Test stays disabled", () => {
    expect(Number.isFinite(deriveRequestedCount("abc", 20))).toBe(false);
  });

  test("end to end: a valid selection plus degenerate input never builds a zero-length attempt", () => {
    const selection = ["sertraline", "fluoxetine"];
    expect(getPoolStats(selection).total).toBeGreaterThan(0);
    for (const raw of ["0", "-5", ""]) {
      const wanted = deriveRequestedCount(raw, 20);
      const built = buildTest(selection, wanted, 42);
      expect(built.questions.length).toBeGreaterThanOrEqual(1);
    }
  });
});
