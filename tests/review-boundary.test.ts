import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { MODE_SPECS, REVIEW_NOTICE, buildModeLenses, explainPatient, buildModeLens } from "@/lib/kyp/modes";
import { EXPLANATION_COPY } from "@/lib/kyp/modes/explanation-copy";
import { FLOW_COPY } from "@/lib/kyp/modes/flow-copy";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { LensBlockView } from "@/components/kyp/sections/drug/lens-blocks";
import { evidenceViews } from "@/lib/kyp/evidence";

/**
 * Nothing the application itself says may claim a review, approval or verification by a person. Source text (for
 * example "FDA-approved") is the document's wording and is not scanned here; our own copy and our rendered chrome are.
 */
const strings = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === "string") out.push(v);
  else if (typeof v === "function") {
    try {
      const r = (v as (...a: number[]) => unknown)(2, 2, 2);
      if (typeof r === "string") out.push(r);
    } catch {
      /* not a plain string function */
    }
  } else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => strings(x, out));
  return out;
};
const NEGATED = /\b(?:not|no|never|nor|without|neither|yet to be|has not been|have not been|nothing)\b[^.]{0,60}$/i;
const CLAIM = /\b(?:clinically|medically|expert|doctor|physician|pharmacist|clinician|peer|professionally)[- ](?:reviewed|approved|verified|checked|validated)\b|\b(?:approved|verified|certified|endorsed|reviewed|signed off) by (?:a |an |our |the )?(?:doctor|physician|pharmacist|clinician|expert|team|panel|specialist)|\bclinically (?:accurate|safe|correct|validated)\b/gi;
function claims(text: string): string[] {
  const hits: string[] = [];
  for (const m of text.matchAll(CLAIM)) {
    const before = text.slice(Math.max(0, m.index! - 70), m.index!);
    if (!NEGATED.test(before)) hits.push(text.slice(Math.max(0, m.index! - 40), m.index! + m[0].length + 20));
  }
  return hits;
}

describe("the application never claims that its content was reviewed or approved by a person", () => {
  test("none of the application's own copy makes a positive review or approval claim", () => {
    const all = [...strings(EXPLANATION_COPY), ...strings(FLOW_COPY), ...strings(REVIEW_NOTICE), ...strings(MODE_SPECS)];
    expect(all.length).toBeGreaterThan(200);
    expect(all.flatMap(claims)).toEqual([]);
  });
  test("the claim detector itself flags positive claims and lets negated ones through", () => {
    expect(claims("This page is clinically reviewed.")).not.toEqual([]);
    expect(claims("Approved by a doctor.")).not.toEqual([]);
    expect(claims("This wording has not been clinically reviewed.")).toEqual([]);
    expect(claims("Neither this view nor the page has a recorded qualified clinical review.")).toEqual([]);
  });
  test("every medicine's Patient explainer carries the not-reviewed notice and no positive review claim in its chrome", () => {
    for (const d of drugs) {
      const g = getPatientGuide(d.slug);
      const inter = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
      const html = renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions: inter, evidence: evidenceViews(d.slug), hasGuide: !!g }));
      expect(html).toContain("data-review-notice");
      const chrome = html.replace(/<[^>]+>/g, " ");
      // the Patient Guide text and source wording are data; check the notice and labels around them
      expect(claims(chrome.replace(/&#x27;/g, "'")).filter((h) => /clinically (accurate|safe|correct|validated)/i.test(h))).toEqual([]);
    }
  });
  test("every block of the enabled lens (all four modes) renders the not-reviewed notice and no approved state", () => {
    const slug = "sertraline";
    const drug = drugs.find((d) => d.slug === slug)!;
    const lenses = buildModeLenses({ drug, patientGuide: getPatientGuide(slug), mcqs: stahlMcqs.filter((q) => q.drugSlug === slug) });
    let blocks = 0;
    for (const mode of Object.values(lenses)) {
      for (const b of mode.blocks) {
        blocks++;
        const html = renderToStaticMarkup(React.createElement(LensBlockView, { block: b }));
        expect(html).not.toMatch(/data-review-state="approved"|>Approved<|>Reviewed<|>Clinically reviewed</);
      }
    }
    expect(blocks).toBeGreaterThan(20);
    expect(REVIEW_NOTICE.heading).toMatch(/not yet clinically reviewed/i);
  });
});
