import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { CLAIM_RECORDS, evidenceViews } from "@/lib/kyp/evidence";
import { PART_CATEGORIES, PART_ORDER, isSafetyAlertClaim, partStates } from "@/lib/kyp/evidence/patient-sections";
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

  test("invariant: no part of any non-guide medicine is 'source-backed' unless a non-alert claim backs it", () => {
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const claims = CLAIM_RECORDS.filter((c) => c.slug === d.slug);
      const s = stateOf(d.slug);
      for (const p of PART_ORDER) {
        if (s[p] !== "source-backed" || p === "sources") continue;
        const real = claims.filter((c) => !isSafetyAlertClaim(c) && PART_CATEGORIES[p].includes(c.category));
        const usesFromWhat = p === "uses" && claims.some((c) => c.category === "what-it-is");
        expect(real.length > 0 || usesFromWhat).toBe(true);
      }
    }
  });

  test("the rendered page shows the distinct chip and explains it", () => {
    const d = drugs.find((x) => x.slug === "quetiapine")!;
    const h = renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, null), interactions: null, evidence: evidenceViews("quetiapine"), hasGuide: false }));
    expect(h).toContain("Safety alert signal only");
    expect(h).toContain("not a product label");
  });

  test("the dashboard part column agrees", () => {
    const row = dashboardRows().find((r) => r.slug === "quetiapine")!;
    expect(row.parts["side-effects"]).toBe("safety-alert-only");
  });
});
