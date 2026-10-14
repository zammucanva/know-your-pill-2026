import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { claimsFor, evidenceViews } from "@/lib/kyp/evidence";
import { PART_CATEGORIES, urgentPointers } from "@/lib/kyp/evidence/patient-sections";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g }));
};

describe("pointer from 'when to get help' to statements that say to get help right away", () => {
  test("it lists only parts whose stored passages contain such words", () => {
    for (const d of drugs) {
      const claims = claimsFor(d.slug);
      for (const part of urgentPointers(claims)) {
        const hit = claims.filter((c) => PART_CATEGORIES[part].includes(c.category)).some((c) => /(right away|immediately|straight away|emergency|nearest hospital)/i.test(c.passage));
        expect(hit, `${d.slug} ${part}`).toBe(true);
      }
    }
    expect(urgentPointers([])).toEqual([]);
  });
  test("the page shows the pointer for a guide-backed medicine with such passages, and says it proves nothing about other parts", () => {
    const ptr = urgentPointers(claimsFor("alprazolam"));
    expect(ptr.length).toBeGreaterThan(0);
    const h = html("alprazolam");
    expect(h).toContain("data-seek-help-pointer");
    expect(h).toContain("Parts not listed are not shown to be free of such advice.");
    expect(h).toContain("This is a general direction, not from a product label.");
  });
  test("no pointer without sourced passages, and none on an authored Patient Guide", () => {
    expect(html("tianeptine")).not.toContain("data-seek-help-pointer");
    expect(html("sertraline")).not.toContain("data-seek-help-pointer");
  });
});
