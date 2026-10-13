import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, EXPLANATION_COPY as EC, explainPatient, normaliseSentence, splitSentences } from "@/lib/kyp/modes";
import { claimsFor } from "@/lib/kyp/evidence";
import { PART_ORDER, PART_TITLE } from "@/lib/kyp/evidence/patient-sections";
import { PatientExplainer, PatientProvenanceNote } from "@/components/kyp/sections/drug/patient-explainer";
import { groupSegments } from "@/components/kyp/sections/drug/explanation-text";

type Drug = (typeof drugs)[number];
const squash = (t: string) => t.replace(/\s+/g, " ").trim();
const clone = (d: Drug, f: (x: Record<string, unknown>) => void): Drug => {
  const c = JSON.parse(JSON.stringify(d));
  f(c);
  return c;
};
const render = (d: Drug) => {
  const g = getPatientGuide(d.slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions }));
};

describe("patient explanation: every medication has the slot, with honest provenance", () => {
  test("registry-wide: slot renders for all 145 with the review notice, headings and no approval language", () => {
    for (const d of drugs) {
      const h = render(d);
      expect(h).toContain("data-patient-explainer");
      expect(h).toContain(EC.reviewNotice);
      for (const p of PART_ORDER) {
        expect(h).toContain(PART_TITLE[p]);
        expect(h).toContain(`id="pe-${p}"`);
      }
      expect(h).toContain("data-part-state=");
      expect(h).toContain(EC.part.personalNote);
      expect(h).toContain(EC.part.sourcesIndia);
      expect(h).toContain(EC.part.reviewLine);
      expect(h).not.toMatch(/\b(approved by|verified by|reviewed by)\b/i);
    }
  });

  test("levels are measured separately and add up (guide, registry-specific, template-only, missing)", () => {
    const counts: Record<string, number> = {};
    for (const d of drugs) {
      const e = explainPatient(d, getPatientGuide(d.slug));
      counts[e.level] = (counts[e.level] ?? 0) + 1;
      expect(e.review).toBe("not-clinically-reviewed");
      expect(e.source === "patient-guide").toBe(e.level === "authored-guide");
    }
    expect(counts["authored-guide"]).toBe(12);
    expect(Object.values(counts).reduce((a, b) => a + b, 0)).toBe(145);
    expect(counts["template-only"] ?? 0).toBeGreaterThan(0); // template-only wording exists and is reported, not hidden
    expect(counts["registry-specific"] ?? 0).toBeGreaterThan(0);
  });

  test("segments are verbatim: they rejoin to the source text for every medication", () => {
    for (const d of drugs) {
      const e = explainPatient(d);
      expect(e.plainWords.map((s) => s.text).join(" ")).toBe(squash(d.patientExplanation));
      expect(e.summary.map((s) => s.text).join(" ")).toBe(squash(d.patientMode.summary));
      const g = getPatientGuide(d.slug);
      if (g) {
        const eg = explainPatient(d, g);
        expect(eg.plainWords.every((s) => s.origin === "authored-guide")).toBe(true);
        expect(eg.plainWords.map((s) => s.text).join(" ")).toBe(squash([g.classInPlainWords, g.whatIsThis].join(" ")));
      }
    }
  });

  test("a registry sentence is never presented as authored-guide wording, and the standard sentence is always a template", () => {
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const e = explainPatient(d);
      for (const s of [...e.plainWords, ...e.summary, ...e.reminders, ...e.sideEffects]) {
        expect(s.origin).not.toBe("authored-guide");
        if (/is a prescription medicine used to treat/i.test(s.text)) {
          expect(s.origin).toBe("template");
          expect(s.indicationCheck).toBeDefined();
        }
        if (s.origin === "template" || s.origin === "class-shared") expect(s.sharedBy ?? 0).toBeGreaterThanOrEqual(2 - (s.indicationCheck ? 2 : 0));
      }
    }
  });

  test("the standard purpose sentence's condition is checked against the medicine's own indication records, not inferred", () => {
    let checked = 0;
    for (const d of drugs) {
      const seg = explainPatient(d).summary.find((s) => s.indicationCheck);
      if (!seg) continue;
      checked++;
      expect(seg.indicationCheck).toBe("matches-registry-indication"); // true for the current registry; a mismatch would be flagged, not hidden
    }
    expect(checked).toBeGreaterThan(100);
    const odd = clone(drugs[0], (c) => {
      c.indications = [{ name: "Something else entirely", status: "fda-approved", description: "x" }];
      c.patientMode = { ...(c.patientMode as object), summary: `${drugs[0].genericName} is a prescription medicine used to treat a different condition.` };
    });
    expect(explainPatient(odd).summary[0].indicationCheck).toBe("not-matched");
  });

  test("absent, empty and listed uses stay apart, and unsupported content gets an honest unavailable state", () => {
    const base = drugs.find((d) => !getPatientGuide(d.slug))!;
    const absent = clone(base, (c) => {
      delete c.indications;
      delete c.patientExplanation;
      delete c.patientMode;
      delete c.patientEducationPoints;
    });
    const empty = clone(base, (c) => {
      c.indications = [];
      c.patientExplanation = "";
      c.patientEducationPoints = [];
    });
    expect(explainPatient(absent).uses.state).toBe("absent");
    expect(explainPatient(empty).uses.state).toBe("empty");
    expect(explainPatient(base).uses.state).toBe("listed");
    for (const d of [absent, empty]) {
      const e = explainPatient(d);
      expect(e.level).toBe("missing");
      const h = renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: e, interactions: null }));
      // Every part is unavailable for the fully absent medicine; the "empty" variant keeps its side-effect wording.
      for (const k of (d === absent ? ["what", "how", "precautions", "side-effects", "interactions"] : ["what", "how", "precautions"]) as ("what" | "how" | "precautions" | "side-effects" | "interactions")[]) {
        expect(h).toContain(EC.part.unavailable[k]);
        expect(EC.part.unavailable[k]).toMatch(/pharmacist/);
      }
      expect(h).toContain('data-state="unavailable"');
      expect(h).toContain('data-part-state="unavailable"');
      expect(h).toContain("data-questions"); // the gaps become questions to ask
      expect(EC.part.unavailable.precautions).toMatch(/not a sign that there are none/);
      expect(EC.part.unavailable["side-effects"]).toMatch(/does not mean it cannot happen/);
      expect(EC.part.unavailable.interactions).toMatch(/does not mean it has no interactions/);
      expect(h).not.toMatch(/no (known )?(risk|side effects)\b/i);
    }
    expect(renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: "x", explanation: explainPatient(absent), interactions: null }))).toContain(EC.usesAbsent);
    expect(renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: "x", explanation: explainPatient(empty), interactions: null }))).toContain(EC.usesEmpty);
  });

  test("template-only wording carries an explicit warning and per-run labels", () => {
    const t = drugs.find((d) => !getPatientGuide(d.slug) && explainPatient(d).level === "template-only" && claimsFor(d.slug).length === 0)!;
    expect(t).toBeDefined();
    const h = render(t);
    expect(h).toContain('data-state="template-only"');
    expect(h).toContain(EC.templateOnly);
    expect(h).toMatch(/data-origin="(template|class-shared)"/);
  });

  test("grouping keeps sentence order and labels runs of the same origin once", () => {
    const d = drugs.find((x) => !getPatientGuide(x.slug))!;
    const e = explainPatient(d);
    const groups = groupSegments(e.plainWords);
    expect(groups.flatMap((g) => g.sentences)).toEqual(e.plainWords.filter((s) => s.handling === "show"));
    for (let i = 1; i < groups.length; i++) expect(groups[i].label).not.toBe(groups[i - 1].label);
  });

  test("the guide's own medicines get a source note that says no clinical review is recorded", () => {
    const h = renderToStaticMarkup(React.createElement(PatientProvenanceNote));
    expect(h).toContain("data-provenance-note");
    expect(h).toContain("Patient Guide");
    expect(EC.reviewNotice).toMatch(/has not been clinically reviewed/);
  });

  test("the personal interaction list starts empty (only learner selections are ever shown) and says unselected is not safe", () => {
    const d = drugs.find((x) => !getPatientGuide(x.slug))!;
    const h = render(d);
    expect(h).toContain("Nothing ticked yet.");
    expect(h).toMatch(/Not ticking an item does not mean a combination is safe/);
  });

  test("normalisation and splitting are stable helpers", () => {
    expect(splitSentences("One.  Two?\nThree!")).toEqual(["One.", "Two?", "Three!"]);
    expect(normaliseSentence("Sertraline helps. Zoloft too.", { genericName: "Sertraline", brandNames: ["Zoloft"] })).toBe("x helps. x too.");
  });
});
