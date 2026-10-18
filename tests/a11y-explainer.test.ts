import { describe, expect, test } from "bun:test";
import * as React from "react";
import { readFileSync } from "fs";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { evidenceViews } from "@/lib/kyp/evidence";
import { PART_ORDER } from "@/lib/kyp/evidence/patient-sections";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g }));
};
const css = readFileSync("src/app/globals.css", "utf8").replace(/\r\n/g, "\n");

describe("Patient explainer: names, states and focus are exposed to assistive technology (static checks, not a screen-reader test)", () => {
  // source-backed (quetiapine), safety-alert-only side effects (quetiapine), unavailable parts (blonanserin), Patient Guide (sertraline)
  for (const slug of ["quetiapine", "blonanserin", "sertraline", "olanzapine"]) {
    test(`${slug}: every part is a labelled region whose state chip describes it`, () => {
      const h = html(slug);
      for (const p of PART_ORDER) {
        expect(h).toContain(`<section id="pe-${p}" aria-labelledby="pe-${p}-h" aria-describedby="pe-${p}-state"`);
        expect(h).toMatch(new RegExp(`id="pe-${p}-state" data-part-state="[a-z-]+"`));
        expect(h).toContain(`id="pe-${p}-h"`);
      }
    });
    test(`${slug}: heading order never skips a level inside the explainer`, () => {
      const levels = [...html(slug).matchAll(/<h([1-6])[ >]/g)].map((m) => Number(m[1]));
      for (let i = 1; i < levels.length; i++) expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
    });
  }
  test("state is stated in words, never by colour alone (source-backed, safety-alert-only, unavailable)", () => {
    expect(html("quetiapine")).toContain("Safety alert signal only");
    expect(html("quetiapine")).toContain("From a product label or leaflet");
    expect(html("blonanserin")).toContain("Not available");
  });
  test("each 'About this statement' disclosure has a distinct name that starts with its visible text", () => {
    const h = html("quetiapine");
    const labels = [...h.matchAll(/<summary aria-label="([^"]+)"[^>]*>About this statement<\/summary>/g)].map((m) => m[1]);
    expect(labels.length).toBeGreaterThan(5);
    expect(new Set(labels).size).toBe(labels.length);
    for (const l of labels) expect(l.startsWith("About this statement")).toBe(true);
  });
  test("disclosure summaries get the same visible keyboard focus ring as buttons and links", () => {
    expect(css).toMatch(/\[data-patient-explainer\] :is\(button, input, a, summary\):focus-visible \{\s*outline: 2px solid var\(--foreground\)/);
    expect(css).toMatch(/\[data-flow-mode\] :is\([^)]*summary\):focus-visible/);
  });
  test("no positive tabindex anywhere in the explainer (focus order is document order)", () => {
    for (const slug of ["quetiapine", "sertraline"]) expect(html(slug)).not.toMatch(/tabindex="[1-9]/);
  });
});
