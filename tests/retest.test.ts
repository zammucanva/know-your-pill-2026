/**
 * Retest engine Test Suite — the NOW-N2 contract.
 *
 * Pins buildRetest():
 *   - regenerates the EXACT identity set (no substitutions, no extras)
 *   - a fixed seed reproduces an identical presentation
 *   - canonical medical content is preserved verbatim (options +
 *     correct answer) even when re-shuffled for presentation
 *   - position-dependent options ("All of the above"…) are never
 *     re-shuffled
 *   - identities that no longer exist are dropped and flagged — never
 *     replaced with lookalikes
 *   - disease-authored identities (from /quiz practice) retest too
 *   - empty input is a clean no-op
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import {
  buildQuestionPool,
  buildRetest,
  buildTest,
  isShuffleSafe,
} from "@/lib/kyp/custom-test/engine";
import { diseases } from "@/lib/kyp/data/diseases/index";

const ALL_SLUGS_POOL = buildQuestionPool([
  "sertraline",
  "fluoxetine",
  "bupropion",
  "mirtazapine",
]);

describe("retest — buildRetest", () => {
  test("1. empty identity list is a clean no-op", () => {
    const result = buildRetest([], 12345);
    expect(result.questions.length).toBe(0);
    expect(result.capped).toBe(false);
  });

  test("2. regenerates the EXACT identity set — no extras, no substitutions", () => {
    const seed = 987654;
    const run = buildTest(["sertraline", "fluoxetine", "bupropion", "mirtazapine"], 8, seed);
    expect(run.questions.length).toBeGreaterThan(0);

    // Take the identities of a finished run (any subset — simulate the
    // incorrect set) and retest them.
    const target = run.questions.slice(0, 5).map((q) => q.identity);
    const retest = buildRetest(target, seed + 1);

    expect(retest.questions.length).toBe(target.length);
    expect(new Set(retest.questions.map((q) => q.identity))).toEqual(new Set(target));
    expect(retest.capped).toBe(false);
  });

  test("3. retest questions carry the same canonical options and answers", () => {
    const identities = ALL_SLUGS_POOL.slice(0, 6).map((q) => q.identity);
    const byIdentity = new Map(ALL_SLUGS_POOL.map((q) => [q.identity, q]));
    const retest = buildRetest(identities, 42);

    for (const q of retest.questions) {
      const canonical = byIdentity.get(q.identity)!;
      expect(q.question).toBe(canonical.question);
      expect(q.explanation).toBe(canonical.explanation);
      // The presented options are a reordering of the canonical set, and
      // the presented correct answer is the canonical correct TEXT.
      expect([...q.attemptOptions].sort()).toEqual([...canonical.options].sort());
      expect(q.attemptOptions[q.attemptCorrectIndex]).toBe(
        canonical.options[canonical.correctIndex]
      );
    }
  });

  test("4. a fixed seed reproduces an identical retest presentation", () => {
    const identities = ALL_SLUGS_POOL.slice(0, 5).map((q) => q.identity);
    const a = buildRetest(identities, 777);
    const b = buildRetest(identities, 777);
    expect(a.questions.map((q) => q.identity)).toEqual(b.questions.map((q) => q.identity));
    expect(a.questions.map((q) => q.attemptOptions)).toEqual(
      b.questions.map((q) => q.attemptOptions)
    );
    expect(a.questions.map((q) => q.attemptCorrectIndex)).toEqual(
      b.questions.map((q) => q.attemptCorrectIndex)
    );
  });

  test("5. shuffleOrder=false keeps pool order stable", () => {
    const identities = ALL_SLUGS_POOL.slice(0, 6).map((q) => q.identity);
    const retest = buildRetest(identities, 999, { shuffleOrder: false });
    expect(retest.questions.map((q) => q.identity)).toEqual(identities);
  });

  test("6. unknown identities are dropped and flagged, never substituted", () => {
    const real = ALL_SLUGS_POOL.slice(0, 2).map((q) => q.identity);
    const ghost = ["paroxetine|this-fact-was-removed|drug-class|0"];
    const retest = buildRetest([...real, ...ghost], 5);
    expect(retest.questions.map((q) => q.identity).sort()).toEqual([...real].sort());
    expect(retest.capped).toBe(true);
  });

  test("7. position-dependent options are never re-shuffled", () => {
    const unshufflable = ALL_SLUGS_POOL.filter(
      (q) => !isShuffleSafe(q.options)
    );
    if (unshufflable.length > 0) {
      const identities = unshufflable.map((q) => q.identity);
      const retest = buildRetest(identities, 31);
      for (const q of retest.questions) {
        expect(q.attemptOptions).toEqual(q.options);
        expect(q.attemptCorrectIndex).toBe(q.correctIndex);
      }
    }
  });

  test("8. disease-authored identities retest through the same engine", () => {
    const mdd = diseases[0];
    expect(mdd.microQuizzes!.length).toBeGreaterThan(0);
    const diseaseIdentity = `${mdd.slug}|mcq:${mdd.microQuizzes![0].id}`;
    const retest = buildRetest([diseaseIdentity], 55);
    expect(retest.questions.length).toBe(1);
    expect(retest.questions[0].question).toBe(mdd.microQuizzes![0].question);
    expect(retest.questions[0].source.sourceSlug).toBe(mdd.slug);
    expect(retest.questions[0].source.sectionHref).toBe(`/diseases/${mdd.slug}`);
    expect(retest.capped).toBe(false);
  });

  test("9. authored MCQ deep links anchor to a real course section (NOW-N6)", () => {
    const authored = ALL_SLUGS_POOL.filter((q) => q.templateId === "authored");
    expect(authored.length).toBeGreaterThan(0);
    for (const q of authored) {
      // Every authored question links into the drug page with an anchor
      // that the course template actually renders (never a bare root).
      expect(q.source.sectionHref).toMatch(/^\/drugs\/[^/]+#[a-z-]+$/);
    }
  });

  test("10. every pool question carries a sourceClass for aggregation (NOW-N1)", () => {
    for (const q of ALL_SLUGS_POOL) {
      expect(q.source.sourceClass.length).toBeGreaterThan(0);
    }
    const classes = new Set(ALL_SLUGS_POOL.map((q) => q.source.sourceClass));
    expect(classes).toContain("SSRI");
    expect(classes).toContain("NDRI");
  });
});
