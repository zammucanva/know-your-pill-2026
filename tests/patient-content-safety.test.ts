import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { explainPatient } from "@/lib/kyp/modes";
import { EXPLANATION_COPY as EC } from "@/lib/kyp/modes/explanation-copy";
import { UNSOURCED_DOSE, UNSOURCED_TIMING, UNSOURCED_WAIT } from "@/lib/kyp/modes/patient-explanation";
import { CLAIM_RECORDS, evidenceViews } from "@/lib/kyp/evidence";
import { EvidenceClaimCards } from "@/components/kyp/sections/drug/evidence-claims";
import { guideFigureSentences, readinessReport } from "@/lib/kyp/evidence/review-readiness";

const figure = (s: string) => UNSOURCED_TIMING.test(s) || UNSOURCED_DOSE.test(s) || UNSOURCED_WAIT.test(s);

describe("patient content: no unsupported dose, wait or time-to-effect figure is shown as guidance", () => {
  test("the figure detector flags time-to-effect, dose instructions and waits, and leaves safety thresholds alone", () => {
    for (const t of ["Benefit builds over 1–3 weeks.", "It takes several weeks to show its full effect.", "Take 10 mg at night.", "The maximum is 40 mg a day.", "Nothing to eat or drink for 10 minutes after the tablet goes in."]) expect(figure(t), t).toBe(true);
    for (const t of ["Serious effects: hypertensive crisis (oral high-dose; patch 9 mg with tyramine).", "Ask your pharmacist how this medicine works for you.", "It is a prescription medicine used to treat insomnia."]) expect(figure(t), t).toBe(false);
  });
  test("across all non-guide medicines, no shown registry-derived sentence carries such a figure; they are withheld with a reason", () => {
    let withheld = 0;
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const e = explainPatient(d, undefined);
      for (const s of [...e.plainWords, ...e.summary, ...e.reminders, ...e.sideEffects]) {
        if (s.handling === "show") expect(figure(s.text), `${d.slug}: ${s.text}`).toBe(false);
        if (s.rule?.id === "unsourced-figure") {
          withheld++;
          expect(s.handling).toBe("withhold");
          expect(s.rule.why).toMatch(/until a source statement or a reviewer supports it/);
        }
      }
    }
    expect(withheld).toBe(9);
  });
  test("the withheld sentences are the ones found by the scan (risperidone, aripiprazole, atomoxetine, asenapine ...)", () => {
    const names = new Set<string>();
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const e = explainPatient(d, undefined);
      if ([...e.plainWords, ...e.summary, ...e.reminders, ...e.sideEffects].some((s) => s.rule?.id === "unsourced-figure")) names.add(d.slug);
    }
    for (const m of ["risperidone", "aripiprazole", "atomoxetine", "asenapine", "zaleplon", "zopiclone", "flumazenil", "pemoline", "tacrine"]) expect(names.has(m), m).toBe(true);
  });
  test("authored Patient Guide sentences with figures are inventoried for the reviewer rather than silently trusted", () => {
    const md = readinessReport();
    const total = drugs.filter((d) => getPatientGuide(d.slug)).reduce((n, d) => n + guideFigureSentences(getPatientGuide(d.slug)).length, 0);
    expect(total).toBeGreaterThan(0);
    expect(md).toMatch(/guide sentence\(s\) state a dose, a wait or a time frame/);
  });
});

describe("patient content: provenance, jurisdiction and empty states", () => {
  test("every source-backed statement card says which country's document it comes from and that Indian information was not checked", () => {
    let cards = 0;
    for (const slug of new Set(CLAIM_RECORDS.map((c) => c.slug))) {
      const html = renderToStaticMarkup(React.createElement(EvidenceClaimCards, { views: evidenceViews(slug) }));
      for (const li of html.split("<li data-claim=").slice(1)) {
        cards++;
        const card = li;
        expect(card, `${slug}`).toMatch(/data-jurisdiction-note/);
        expect(card, `${slug}`).toMatch(/Indian|India/);
      }
    }
    expect(cards).toBeGreaterThan(1500);
  });
  test("an unavailable part says that evidence is missing and points to a pharmacist (or prescriber); it never implies danger or ineffectiveness", () => {
    for (const [part, text] of Object.entries(EC.part.unavailable)) {
      expect(text, part).toMatch(/pharmacist/);
      expect(text, part).not.toMatch(/\b(unsafe|dangerous|harmful|ineffective|does not work|do not use|avoid this medicine)\b/i);
    }
    expect(EC.part.legend.unavailable).toMatch(/not a sign that nothing applies/);
  });
});

import { readFileSync } from "fs";
import { patientSafetyReport } from "@/lib/kyp/evidence/patient-safety-report";
describe("the patient content safety report", () => {
  test("it is generated from the code, lists the nine withheld sentences and the eight unavailable-part medicines, and claims no review", () => {
    const md = patientSafetyReport();
    expect(readFileSync("reports/medication-audit/patient-content-safety-report.md", "utf8").replace(/\r\n/g, "\n")).toBe(md);
    expect(md).toContain("9 registry sentences");
    for (const m of ["blonanserin", "perospirone", "zotepine", "cyamemazine", "loflazepate", "flunitrazepam", "tacrine", "caprylidene"]) expect(md).toContain(m);
    expect(md).toContain("Nothing here is clinical review.");
    expect(md).not.toMatch(/approved by|reviewed by/i);
  });
});
