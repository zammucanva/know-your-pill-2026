/**
 * Graph-Driven Question Templates Test Suite — the NEXT-X4 contract.
 *
 * Pins the three new deterministic template families stamped from
 * existing Knowledge-Graph-shaped data edges:
 *   (a) mechanism-effect   — mechanism → expected net effect
 *   (b) shared-target      — shared transporter across two drugs
 *   (d) side-effect-association — a common side effect of two drugs
 * ((c) drug → class membership already exists as the "drug-class"
 *  and "class-member" templates — deliberately not duplicated.)
 *
 * Guarantees (mirroring tests/custom-test.test.ts):
 *   - correct option is always the asked-about drug's OWN value
 *   - distractors are real values of the same dimension from OTHER
 *     drugs' data — never invented, never reworded
 *   - deterministic: same data + same template → identical question
 *   - dedup: identities are unique; the pool never duplicates
 *   - availability is data-driven: drugs without the edge produce
 *     no question
 */

import { describe, expect, test } from "bun:test";
import {
  buildQuestionPool,
  buildTest,
} from "@/lib/kyp/custom-test/engine";
import { TEMPLATES, TEMPLATE_IDS } from "@/lib/kyp/custom-test/templates";
import { drugs } from "@/lib/kyp/data/drugs/index";

const ALL_SLUGS = drugs.map((d) => d.slug);

const byTemplate = (id: string) =>
  buildQuestionPool(ALL_SLUGS).filter((q) => q.templateId === id);

describe("graph templates — presence and determinism", () => {
  test("1. the graph families are registered (19 templates total)", () => {
    expect(TEMPLATE_IDS).toContain("mechanism-effect");
    expect(TEMPLATE_IDS).toContain("shared-target");
    expect(TEMPLATE_IDS).toContain("side-effect-association");
    // Phase 5 depth families — reasoning-heavy stamps over the same
    // locked data (primary-target reuses the Phase 3 semantics).
    expect(TEMPLATE_IDS).toContain("primary-target");
    expect(TEMPLATE_IDS).toContain("interaction-mechanism");
    expect(TEMPLATE_IDS).toContain("class-vs-drug-effect");
    expect(TEMPLATE_IDS.length).toBe(19);
  });

  test("2. every family produces questions from the real data", () => {
    for (const id of ["mechanism-effect", "shared-target", "side-effect-association"]) {
      expect(byTemplate(id).length).toBeGreaterThan(0);
    }
  });

  test("3. deterministic: the same template call returns identical questions", () => {
    for (const id of ["mechanism-effect", "shared-target", "side-effect-association"]) {
      const sertraline = drugs.find((d) => d.slug === "sertraline")!;
      const a = TEMPLATES[id]({ drug: sertraline, allDrugs: drugs });
      const b = TEMPLATES[id]({ drug: sertraline, allDrugs: drugs });
      expect(a).toEqual(b);
    }
  });

  test("4. no duplicated identities in the whole pool", () => {
    const pool = buildQuestionPool(ALL_SLUGS);
    const identities = pool.map((q) => q.identity);
    expect(new Set(identities).size).toBe(identities.length);
  });
});

describe("graph templates — medical safety rules", () => {
  test("5. mechanism-effect: correct option is the drug's OWN net effect, distractors are other drugs' effects", () => {
    const questions = byTemplate("mechanism-effect");
    const effects = new Set(drugs.map((d) => d.mechanism.effect));
    for (const q of questions) {
      expect(q.options.length).toBe(4);
      const [correct, ...distractors] = q.options;
      // Correct = a real effect string, and the explanation quotes the
      // asked-about drug's own effect verbatim.
      expect(effects.has(correct)).toBe(true);
      const drugName = q.source.sourceName;
      const drug = drugs.find((d) => d.genericName === drugName)!;
      expect(correct).toBe(drug.mechanism.effect);
      expect(q.explanation).toContain(drug.mechanism.effect);
      for (const d of distractors) {
        expect(effects.has(d)).toBe(true);
        expect(d).not.toBe(correct);
      }
    }
  });

  test("6. shared-target: both the asked drug and the correct answer name the token in their own target strings", () => {
    const questions = byTemplate("shared-target");
    const names = new Map(drugs.map((d) => [d.genericName, d]));
    for (const q of questions) {
      expect(q.options.length).toBe(4);
      const [correct, ...distractors] = q.options;
      const asked = names.get(q.source.sourceName)!;
      const partner = names.get(correct)!;
      // Extract the asked token from the question text itself.
      const tokenMatch = q.question.match(/targets include (SERT|NET|DAT)\./);
      expect(tokenMatch).not.toBeNull();
      const token = tokenMatch![1];
      // Both the asked drug and the correct answer name it verbatim
      // in their own target strings.
      expect(asked.mechanism.molecularTarget.includes(token)).toBe(true);
      expect(partner.mechanism.molecularTarget.includes(token)).toBe(true);
      // Distractors are real drugs that do NOT name the asked token.
      for (const d of distractors) {
        const other = names.get(d)!;
        expect(other).toBeDefined();
        expect(other.mechanism.molecularTarget.includes(token)).toBe(false);
      }
    }
  });

  test("7. side-effect-association: both drugs really list the shared side effect as common", () => {
    const questions = byTemplate("side-effect-association");
    const names = new Map(drugs.map((d) => [d.genericName, d]));
    for (const q of questions) {
      expect(q.options.length).toBe(4);
      const [correct, ...distractors] = q.options;
      const asked = names.get(q.source.sourceName)!;
      const partner = names.get(correct)!;
      // Extract the side-effect name from the question and verify it.
      const match = q.question.match(/list "(.+)" as a common side effect/);
      expect(match).not.toBeNull();
      const seName = match![1];
      expect(
        asked.commonSideEffects.some((s) => s.name === seName)
      ).toBe(true);
      expect(
        partner.commonSideEffects.some((s) => s.name === seName)
      ).toBe(true);
      for (const d of distractors) {
        const other = names.get(d)!;
        expect(other).toBeDefined();
        expect(other.commonSideEffects.some((s) => s.name === seName)).toBe(false);
      }
    }
  });

  test("8. availability is data-driven: mirtazapine (no transporter token) gets no shared-target questions", () => {
    const mirtazapine = drugs.find((d) => d.slug === "mirtazapine")!;
    expect(
      ["SERT", "NET", "DAT"].some((t) =>
        mirtazapine.mechanism.molecularTarget.includes(t)
      )
    ).toBe(false);
    const result = TEMPLATES["shared-target"]({
      drug: mirtazapine,
      allDrugs: drugs,
    });
    expect(result.questions).toEqual([]);
  });
});

describe("graph templates — engine integration", () => {
  test("9. the new families flow through buildTest with the existing guarantees", () => {
    // A full-selection test must be able to include graph questions.
    const attempt = buildTest(ALL_SLUGS, 60, 424242);
    expect(attempt.questions.length).toBe(60);
    const families = new Set(attempt.questions.map((q) => q.templateId));
    expect(families.has("mechanism-effect") || families.has("shared-target") || families.has("side-effect-association")).toBe(true);
  });

  test("10. identities are stable across pool rebuilds (scheduling-ready)", () => {
    const pool1 = buildQuestionPool(ALL_SLUGS);
    const pool2 = buildQuestionPool([...ALL_SLUGS].reverse());
    const ids1 = new Set(pool1.map((q) => q.identity));
    // Rebuilding with a different selection ORDER still yields the
    // same identities per drug — the Retention Engine keys on them.
    for (const q of pool2) {
      expect(ids1.has(q.identity)).toBe(true);
    }
  });
});
