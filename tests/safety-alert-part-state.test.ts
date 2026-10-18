import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { CLAIM_RECORDS, evidenceViews } from "@/lib/kyp/evidence";
import { PART_CATEGORIES, PART_ORDER, isInfoPageClaim, isLabelClaim, isSafetyAlertClaim, partStates } from "@/lib/kyp/evidence/patient-sections";
import { dashboardRows } from "@/lib/kyp/evidence/dashboard";

const stateOf = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const inter = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions");
  const claims = CLAIM_RECORDS.filter((c) => c.slug === slug);
  return partStates({ explanation: explainPatient(d, g), claims, hasGuide: !!g, interactionsStatement: (inter && inter.kind === "patient-interactions" && inter.statement?.origin) || "missing", interactionNames: 0 });
};

describe("a safety-alert signal alone is never labelled as a product-label source", () => {
  test("quetiapine and ziprasidone: side effects rest only on a PvPI signal, and the part says so", () => {
    for (const slug of ["quetiapine", "ziprasidone"]) {
      expect(stateOf(slug)["side-effects"]).toBe("safety-alert-only");
    }
  });

  test("invariant: no part of any non-guide medicine is 'source-backed' unless a product-label, leaflet or monograph claim backs it", () => {
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const claims = CLAIM_RECORDS.filter((c) => c.slug === d.slug);
      const s = stateOf(d.slug);
      for (const p of PART_ORDER) {
        if (s[p] !== "source-backed" || p === "sources") continue;
        const real = claims.filter((c) => isLabelClaim(c) && PART_CATEGORIES[p].includes(c.category));
        const usesFromWhat = p === "uses" && claims.some((c) => isLabelClaim(c) && c.category === "what-it-is");
        expect(real.length > 0 || usesFromWhat).toBe(true);
      }
    }
  });

  test("the rendered page shows the distinct chip and explains it", () => {
    const d = drugs.find((x) => x.slug === "quetiapine")!;
    const h = renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, undefined), interactions: null, evidence: evidenceViews("quetiapine"), hasGuide: false }));
    expect(h).toContain("Safety alert signal only");
    expect(h).toContain("not a product label");
  });

  test("the dashboard part column agrees", () => {
    const row = dashboardRows().find((r) => r.slug === "quetiapine")!;
    expect(row.parts["side-effects"]).toBe("safety-alert-only");
  });
});

describe("a patient-information page is not a product label", () => {
  test("a part whose only support is a MedlinePlus page is 'info-page-only', never 'source-backed'", () => {
    let seen = 0;
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const claims = CLAIM_RECORDS.filter((c) => c.slug === d.slug);
      const s = stateOf(d.slug);
      for (const p of PART_ORDER) {
        const cats = PART_CATEGORIES[p];
        if (!cats.length) continue;
        const inPart = claims.filter((c) => cats.includes(c.category));
        if (inPart.some(isLabelClaim)) continue;
        if (inPart.some(isInfoPageClaim)) {
          expect(s[p]).toBe("info-page-only");
          seen++;
        }
      }
    }
    expect(seen).toBeGreaterThan(50);
  });
  test("mesoridazine (only MedlinePlus sources) shows the chip and no 'product label' wording for those parts", () => {
    const d = drugs.find((x) => x.slug === "mesoridazine")!;
    const h = renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, undefined), interactions: null, evidence: evidenceViews("mesoridazine"), hasGuide: false }));
    expect(h).toContain("Patient information page only");
    expect(h).not.toMatch(/data-part-state="source-backed"/);
    expect(stateOf("mesoridazine").sources).toBe("info-page-only");
  });
});
