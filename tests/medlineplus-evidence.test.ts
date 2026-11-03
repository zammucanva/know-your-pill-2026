import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { CLAIM_RECORDS, MEDLINEPLUS_RECORDS, SOURCE_RECORDS, claimsFor, evidenceViews, validateEvidence } from "@/lib/kyp/evidence";
import { htmlToText, parsePage, TARGETS } from "../scripts/evidence/medlineplus";
import { MLP_PREFIX } from "@/lib/kyp/evidence/medlineplus-claims";
import { jurisdictionNoteKey, sourceKind } from "@/lib/kyp/evidence/source-label";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g }));
};
const mlpClaims = CLAIM_RECORDS.filter((c) => c.sourceId.includes(`:${MLP_PREFIX}`));

describe("MedlinePlus drug-information pages as a gap-filling US source", () => {
  test("the capture lists every target once and states what was not found", () => {
    expect(MEDLINEPLUS_RECORDS.map((r) => r.slug).sort()).toEqual([...TARGETS].sort());
    for (const r of MEDLINEPLUS_RECORDS) {
      if (r.status === "page-found") {
        expect(r.pageId).toMatch(/^a\d+$/);
        expect(r.sections.length).toBeGreaterThan(2);
        expect(r.lastRevised).toMatch(/^\d\d\/\d\d\/\d{4}$/);
      } else expect(r.note).toBeTruthy(); // a gap is explained, never silent
    }
  });

  test("every MedlinePlus claim is an exact quote, US, not reviewed, and says it is not Indian", () => {
    expect(mlpClaims.length).toBeGreaterThan(100);
    expect(validateEvidence()).toEqual([]);
    for (const c of mlpClaims) {
      const s = SOURCE_RECORDS.find((x) => x.id === c.sourceId)!;
      expect(s.type).toBe("international-patient-information");
      expect(s.jurisdiction).toBe("US");
      expect(s.url).toMatch(/^https:\/\/medlineplus\.gov\/druginfo\/meds\/a\d+\.html$/);
      expect(c.wordingKind).toBe("exact-quote");
      expect(c.review).toBe("not-reviewed");
      expect(c.limitations.join(" ")).toMatch(/not an Indian label/);
      expect(sourceKind(s)).toMatch(/not a product label, not an Indian source/);
      expect(jurisdictionNoteKey(s)).toBe("USINFO");
      if (/\b(911|1-800|poison|FDA|MedWatch)/i.test(c.passage)) expect(c.limitations.join(" ")).toMatch(/do not apply in India/);
    }
  });

  test("it fills gaps only: a part that already has another source gets no MedlinePlus statement", () => {
    for (const r of MEDLINEPLUS_RECORDS.filter((x) => x.status === "page-found")) {
      const others = claimsFor(r.slug).filter((c) => !c.sourceId.includes(`:${MLP_PREFIX}`));
      const cats = new Set(others.map((c) => c.category));
      for (const c of claimsFor(r.slug).filter((x) => x.sourceId.includes(`:${MLP_PREFIX}`))) expect(cats.has(c.category)).toBe(false);
    }
    // quetiapine has a Medication Guide for everything except side effects
    expect(claimsFor("quetiapine").some((c) => c.sourceId.includes(`:${MLP_PREFIX}`) && c.category === "how-to-take")).toBe(false);
  });

  test("a withdrawn product is said to be withdrawn", () => {
    const s = SOURCE_RECORDS.find((x) => x.slug === "mesoridazine" && x.identifier.startsWith(MLP_PREFIX))!;
    expect(s.limitations.join(" ")).toMatch(/no longer sold in the United States/);
    expect(claimsFor("mesoridazine").length).toBeGreaterThan(5);
  });

  test("the page names MedlinePlus, not a product label, and keeps the page's own words", () => {
    const h = html("mesoridazine");
    expect(h).toContain("MedlinePlus Drug Information");
    expect(h).toContain("US drug-information page for patients");
    expect(h).toContain("This is a US drug-information page for patients (MedlinePlus), not a product label.");
    expect(h).not.toContain("This is a US product label.");
    expect(h.replace(/<[^>]+>/g, " ")).toContain("This drug must be taken regularly for a few weeks before its full effect is felt.");
    expect(h).not.toContain("data-claim-form"); // no 'written for this form' chip on a page that names no product
  });

  test("the HTML parser keeps words, turns list items into lines, and drops markup", () => {
    const page = `<title>Examplamine: MedlinePlus Drug Information</title><section><div id="how" class="section"><div class="section-header"><h2>How should this medicine be used?</h2></div><div class="section-body" id="s"><p>Take it &amp; swallow it.</p><ul><li>with water</li><li>at night</li></ul></div></div></section><span>Last Revised - </span><span>07/15/2017</span>`;
    const p = parsePage(page);
    expect(p.title).toBe("Examplamine");
    expect(p.revised).toBe("07/15/2017");
    expect(p.sections).toEqual([{ id: "how", heading: "How should this medicine be used?", text: "Take it & swallow it.\n• with water\n• at night" }]);
    expect(htmlToText("<p>a</p><p>b</p>")).toBe("a\nb");
  });
});
