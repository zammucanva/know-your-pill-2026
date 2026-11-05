import { describe, expect, test } from "bun:test";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { LENS_ENABLED_SLUGS, REVIEW_RECORDS, REVIEW_NOTICE, buildModeLenses, collectFacts } from "@/lib/kyp/modes";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";

describe("release gate: engineering success is not clinical approval", () => {
  test("only sertraline is enabled in the stepped four-mode experience", () => {
    expect([...LENS_ENABLED_SLUGS]).toEqual(["sertraline"]);
  });
  test("no review record exists anywhere: not for facts, not for any evidence statement", () => {
    expect(REVIEW_RECORDS).toHaveLength(0);
    expect(CLAIM_RECORDS.every((c) => c.review === "not-reviewed")).toBe(true);
  });
  test("every fact the enabled lens presents is unreviewed or flagged, never approved, and the pending-review notice exists", () => {
    for (const slug of LENS_ENABLED_SLUGS) {
      const drug = drugs.find((d) => d.slug === slug)!;
      const patientGuide = getPatientGuide(slug);
      const mcqs = stahlMcqs.filter((q) => q.drugSlug === slug);
      const facts = collectFacts(buildModeLenses({ drug, patientGuide, mcqs }), { drug, patientGuide, mcqIds: mcqs.map((q) => q.id) }).used;
      expect(facts.length).toBeGreaterThan(50);
      expect(facts.filter((f) => f.review === "approved")).toEqual([]);
    }
    expect(REVIEW_NOTICE.heading).toMatch(/not yet clinically reviewed/i);
  });
});
