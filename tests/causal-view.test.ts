/**
 * Why-This-Effect Causal View Test Suite — the NEXT-X7 contract.
 *
 * Source-level and data-level pins. No server needed.
 *
 * Coverage map:
 *   1     the component exists and is rendered inside the drug
 *         side-effects section on every drug page
 *   2     the chain walks the documented links: target → mechanism
 *         steps → net effect → the side effect
 *   3     content governance: every rendered body is a verbatim data
 *         field — the component imports no free-text medical claims
 *   4     the plain-language patient-mode path exists and degrades
 *         honestly
 *   5-6   every drug carries the data the chain needs
 *   7     neutral structural labels only — no new causal claims in
 *         the component's own copy
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { drugs } from "@/lib/kyp/data/drugs/index";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const COMPONENT = "src/components/kyp/sections/drug/drug-side-effect-causal.tsx";
const SECTION = "src/components/kyp/sections/drug/drug-side-effects.tsx";

describe("causal view — contract pins", () => {
  test("1. the component exists and renders inside the side-effects section", () => {
    expect(existsSync(join(process.cwd(), COMPONENT))).toBe(true);
    const section = read(SECTION);
    expect(section).toContain("<DrugSideEffectCausal");
    expect(section).toContain('drug={drug}');
  });

  test("2. the chain walks the documented links in order", () => {
    const src = read(COMPONENT);
    expect(src).toContain("Target / receptor");
    expect(src).toContain("Documented mechanism, step by step");
    expect(src).toContain("Net effect");
    expect(src).toContain("The side effect, as documented");
    // The steps are the drug's own ordered mechanism steps.
    expect(src).toContain("drug.mechanism.steps.join");
  });

  test("3. content governance: every body is a verbatim data field", () => {
    const src = read(COMPONENT);
    expect(src).toContain("drug.mechanism.molecularTarget");
    expect(src).toContain("drug.mechanism.effect");
    expect(src).toContain("effect.description");
    expect(src).toContain("effect.management");
    // The governance statement is visible to the learner (the
    // apostrophe is JSX-escaped in the source).
    expect(src).toContain("Assembled from this medication&apos;s own reviewed fields");
  });

  test("4. the plain-language patient-mode path exists and degrades honestly", () => {
    const src = read(COMPONENT);
    expect(src).toContain("Plain language");
    expect(src).toContain("patientMode");
    expect(src).toContain("hasPatientMode");
    // The toggle is hidden when the drug lacks patient-mode content.
    expect(src).toContain("{hasPatientMode && (");
  });

  test("5. every drug carries the fields the chain needs", () => {
    for (const drug of drugs) {
      expect(drug.mechanism.molecularTarget.length).toBeGreaterThan(0);
      expect(drug.mechanism.steps.length).toBeGreaterThan(0);
      expect(drug.mechanism.effect.length).toBeGreaterThan(0);
      expect(drug.commonSideEffects.length).toBeGreaterThan(0);
      expect(drug.seriousSideEffects.length).toBeGreaterThan(0);
    }
  });

  test("6. every drug's patient-mode fields are populated (plain-language path)", () => {
    for (const drug of drugs) {
      expect(drug.patientMode?.mechanism).toBeTruthy();
      expect(drug.patientMode?.sideEffects).toBeTruthy();
    }
  });

  test("7. neutral structural labels only — no new causal claims in the copy", () => {
    const src = read(COMPONENT);
    // The side effect is presented as documented, never asserted as
    // caused-by the mechanism by the component's own prose.
    expect(src).toContain("as documented");
    // No shaming or judgemental language.
    expect(src).not.toMatch(/obviously|clearly caused|you should have|stupid|dangerous drug/i);
  });
});
