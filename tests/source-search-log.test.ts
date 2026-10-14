import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { claimsFor, evidenceViews } from "@/lib/kyp/evidence";
import { SOURCE_SEARCH_LOG, searchLogFor } from "@/lib/kyp/evidence/source-search-log";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g, searchLog: searchLogFor(slug) }));
};
const unsourced = drugs.filter((d) => !getPatientGuide(d.slug) && claimsFor(d.slug).length === 0).map((d) => d.slug);

describe("what was looked for, for medicines that still have no source", () => {
  test("every unsourced medicine has a search record, and no sourced medicine has one", () => {
    expect([...unsourced].sort()).toEqual(Object.keys(SOURCE_SEARCH_LOG).sort());
  });
  test("each record says where the search went and never says the medicine is safe, absent or approved", () => {
    for (const [slug, e] of Object.entries(SOURCE_SEARCH_LOG)) {
      expect(e.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(e.checked.length, slug).toBeGreaterThan(0);
      expect(e.next.length, slug).toBeGreaterThan(10);
      const all = [...e.checked, ...e.notUsed, e.next].join(" ");
      expect(all, slug).not.toMatch(/\b(safe|approved|reviewed|no risk|not exist|does not exist)\b/i);
    }
  });
  test("the page shows the record in the sources part and still says nothing is source-backed", () => {
    const h = html("ketamine");
    expect(h).toContain("data-search-log");
    expect(h).toContain("What was looked for");
    expect(h).toContain("No product label has been retrieved for this medicine, so nothing on this page is source-backed.");
    expect(h).toContain("a medicine not found in a place is not shown to be absent from it");
    expect(html("tacrine")).toContain("Drugs@FDA lists approval letters for Cognex");
  });
  test("a sourced medicine shows no search record", () => {
    expect(html("alprazolam")).not.toContain("data-search-log");
    expect(html("sertraline")).not.toContain("data-search-log");
  });
});
