import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { EXPLANATION_COPY as EC } from "@/lib/kyp/modes/explanation-copy";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { CLAIM_RECORDS, MEDGUIDE_RECORDS, SOURCE_RECORDS, claimsFor, evidenceViews, validateEvidence } from "@/lib/kyp/evidence";
import { CLAIM_SOURCE_SETID } from "@/lib/kyp/evidence/claims";
import { categoryOfHeading, deriveMedGuideEvidence } from "@/lib/kyp/evidence/medguide-claims";
import { GAP_PROMPTS, PART_ORDER, PART_TITLE, QUESTION_PROMPTS, partStates, questionsFor } from "@/lib/kyp/evidence/patient-sections";
import { dashboardRows, dashboardSummary } from "@/lib/kyp/evidence/dashboard";
import { PIL_DOCS } from "@/lib/kyp/evidence/pil-docs";
import { splitGuide } from "../scripts/evidence/medguide";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g }));
};
const visible = (h: string) => h.replace(/<details data-withheld[\s\S]*?<\/details>/g, "");

describe("Patient explanation: nine parts, one structure for every medicine", () => {
  test("all 145 medicines render all nine parts in the same order, each with a state", () => {
    for (const d of drugs) {
      const h = html(d.slug);
      let at = -1;
      for (const p of PART_ORDER) {
        const i = h.indexOf(`id="pe-${p}"`);
        expect(i).toBeGreaterThan(at);
        at = i;
        expect(h).toContain(`id="pe-${p}-h"`);
        expect(h).toContain(PART_TITLE[p]);
      }
      expect((h.match(/data-part-state="/g) ?? []).length).toBe(PART_ORDER.length);
      expect(h).toContain("data-seek-help-general");
      expect(h).toContain("data-india-note");
      expect(h).toContain("data-review-line");
    }
  });

  test("the general help direction is labelled as not from a product label, and the personal list says it is only a note", () => {
    expect(EC.part.seekHelpGeneral).toMatch(/not from a product label/);
    expect(EC.part.personalNote).toMatch(/own notes/);
    expect(EC.part.personalNote).toMatch(/not a check of your medicines/);
    for (const slug of ["alprazolam", "moclobemide", "tranylcypromine"]) {
      const h = html(slug);
      expect(h).toContain(EC.part.personalNote);
      expect(h).toContain("Nothing ticked yet.");
    }
  });
});

describe("part states are computed from evidence, never assumed", () => {
  const explanation = (slug: string) => explainPatient(drugs.find((d) => d.slug === slug)!, getPatientGuide(slug));
  const states = (slug: string) => {
    const d = drugs.find((x) => x.slug === slug)!;
    const g = getPatientGuide(slug);
    const block = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions");
    const inter = block && block.kind === "patient-interactions" ? block : null;
    return partStates({ explanation: explanation(slug), claims: claimsFor(slug), hasGuide: !!g, interactionsStatement: inter?.statement?.origin ?? "missing", interactionNames: inter?.names.length ?? 0 });
  };
  test("a Patient Guide medicine is authored-guide throughout", () => {
    for (const p of PART_ORDER.filter((x) => x !== "questions" || true)) expect(states("fluoxetine")[p]).toBe("authored-guide");
  });
  test("a medicine with a retrieved Medication Guide has source-backed parts; one without has unavailable parts", () => {
    const s = states("alprazolam");
    expect(s["how"]).toBe("source-backed");
    expect(s["precautions"]).toBe("source-backed");
    expect(s["side-effects"]).toBe("source-backed");
    const none = drugs.find((d) => !getPatientGuide(d.slug) && claimsFor(d.slug).length === 0)!;
    const n = states(none.slug);
    expect(n.precautions).toBe("unavailable");
    expect(n.how).not.toBe("source-backed");
    expect(n.sources).toBe("unavailable");
  });
  test("no part is ever described as reviewed", () => {
    for (const k of Object.keys(EC.part.chip) as (keyof typeof EC.part.chip)[]) expect(EC.part.chip[k]).not.toMatch(/review(ed)?\b(?!.*not)/i);
    expect(EC.part.legend["source-backed"]).toMatch(/Not clinically reviewed/);
    expect(EC.part.legend["authored-guide"]).toMatch(/Not clinically reviewed/);
  });
  test("questions come only from the fixed prompt list and only for parts without supported content", () => {
    for (const d of drugs) {
      const s = states(d.slug);
      for (const q of questionsFor(s)) {
        expect(Object.values(QUESTION_PROMPTS)).toContain(q.question);
        expect(["unavailable", "standard-wording", "general-direction"]).toContain(s[q.part!]);
      }
    }
    expect(questionsFor(states("fluoxetine"))).toEqual(questionsFor(states("fluoxetine"))); // deterministic
  });
});

describe("Medication Guide evidence: exact quotes, correctly categorised, never overreaching", () => {
  test("heading categories", () => {
    expect(categoryOfHeading("What is XANAX?")).toBe("what-it-is");
    expect(categoryOfHeading("What is the most important information I should know about XANAX?")).toBe("precaution");
    expect(categoryOfHeading("Who should not take PARNATE?")).toBe("contraindication");
    expect(categoryOfHeading("How should I take XANAX?")).toBe("how-to-take");
    expect(categoryOfHeading("What are the possible side effects of XANAX?")).toBe("side-effects");
    expect(categoryOfHeading("What should I avoid while taking X?")).toBe("precaution");
    expect(categoryOfHeading("How can I watch for and try to prevent suicidal thoughts and actions?")).toBe("urgent-help");
    expect(categoryOfHeading("How should I store XANAX?")).toBeNull();
    expect(categoryOfHeading("What are the ingredients in XANAX?")).toBeNull();
  });
  test("guide splitting keeps layout only: markers re-attached, nothing else changed", () => {
    const secs = splitGuide("What is X?\n•\nX treats this condition and that one.\no\nit is also used for another thing entirely here\nHow should I take X?\nTake X exactly as your healthcare provider tells you to, every single day.");
    expect(secs.map((s) => s.heading)).toEqual(["What is X?", "How should I take X?"]);
    expect(secs[0].text).toBe("• X treats this condition and that one.\n– it is also used for another thing entirely here");
  });
  test("every derived claim is an exact quote of its stored section, and says it is a US Medication Guide", () => {
    const mg = CLAIM_RECORDS.filter((c) => /:mg\d+$/.test(c.id));
    expect(mg.length).toBeGreaterThan(250);
    for (const c of mg) {
      expect(c.wordingKind).toBe("exact-quote");
      expect(c.patientWording).toBe(c.passage);
      expect(c.limitations.join(" ")).toMatch(/US (Medication Guide|patient information sheet)/);
      expect(c.review).toBe("not-reviewed");
      if (/\b(FDA|1-800|poison control|911)\b/.test(c.patientWording)) expect(c.limitations.join(" ")).toMatch(/do not apply in India/);
    }
    expect(validateEvidence()).toEqual([]);
  });
  test("hand-authored medicines and Patient Guide medicines are not regenerated from a different label", () => {
    for (const r of MEDGUIDE_RECORDS.filter((x) => x.status === "medication-guide-found" && !(x.slug in CLAIM_SOURCE_SETID))) {
      expect(Object.keys(CLAIM_SOURCE_SETID)).not.toContain(r.slug);
      expect(getPatientGuide(r.slug)).toBeUndefined();
    }
    const derived = deriveMedGuideEvidence(MEDGUIDE_RECORDS);
    expect(derived.sources.filter((x) => !x.identifier.endsWith(".pi")).length).toBe(MEDGUIDE_RECORDS.filter((r) => r.status === "medication-guide-found" && !(r.slug in CLAIM_SOURCE_SETID)).length);
    expect(SOURCE_RECORDS.length).toBe(Object.keys(CLAIM_SOURCE_SETID).length + derived.sources.length + PIL_DOCS.length + SOURCE_RECORDS.filter((x) => x.identifier.startsWith("mlp.")).length);
  });
  test("records say honestly when no Medication Guide or no US label was found", () => {
    for (const r of MEDGUIDE_RECORDS) {
      if (r.status === "no-medication-guide-in-labels-checked") expect(r.note).toMatch(/Not a statement that none exists/);
      if (r.status === "no-us-label-found") expect(r.note).toMatch(/nothing about Indian/);
      // No Medication Guide claim exists for them; the only claims that can exist rest on a named non-US document.
      if (r.status !== "medication-guide-found") for (const c of claimsFor(r.slug)) expect(c.sourceId.includes(":mlp.") || PIL_DOCS.some((d) => d.slug === r.slug && c.sourceId.includes(d.file)) || Object.keys(CLAIM_SOURCE_SETID).includes(r.slug)).toBe(true);
    }
  });
  test("a medicine's source-backed cards appear in the right part, with source, date and review status", () => {
    const h = html("alprazolam");
    const how = h.slice(h.indexOf('id="pe-how"'), h.indexOf('id="pe-precautions"'));
    expect(how).toContain("data-claim-category=\"how-to-take\"");
    expect(how).toContain("Take XANAX exactly as your healthcare provider tells");
    expect(how).toMatch(/DailyMed set id/);
    expect(how).toContain("Not clinically reviewed");
    const side = h.slice(h.indexOf('id="pe-side-effects"'), h.indexOf('id="pe-interactions"'));
    expect(side).toContain('data-claim-category="side-effects"');
    // the unsupported onset claim is still not shown as guidance
    expect(visible(h).toLowerCase()).not.toContain("works gradually, most people notice");
  });
});

describe("coverage matrix: UI, content, sources and review are reported apart", () => {
  const rows = dashboardRows();
  const sum = dashboardSummary(rows);
  test("every medicine has a state for every part, and the totals add up per part", () => {
    for (const r of rows) for (const p of PART_ORDER) expect(typeof r.parts[p]).toBe("string");
    for (const p of PART_ORDER) expect(Object.values(sum.parts[p]).reduce((a, b) => a + b, 0)).toBe(145);
  });
  test("rendering all 145 pages is not content coverage: unavailable parts remain and are counted", () => {
    expect(sum.patientUiRenders).toBe(145);
    expect(sum.parts["precautions"]["unavailable"]).toBeGreaterThan(0);
    expect(sum.parts["how"]["unavailable"]).toBeGreaterThan(0);
    expect(sum.clinicallyReviewed).toBe(0);
    expect(sum.indianSourcesVerified).toBe(0);
  });
  test("sourced medicine counts match the stored claims", () => {
    expect(sum.claimsWithTraceableSource).toBe(CLAIM_RECORDS.length);
    expect(sum.claimsExactQuote + sum.claimsRestated).toBe(CLAIM_RECORDS.length);
  });
});

describe("questions to ask are specific to the real gaps on each page", () => {
  const body = (h: string) => h.slice(h.indexOf('id="pe-questions"'), h.indexOf('id="pe-sources"'));
  test("no sourced onset statement: the onset question appears; with one, it does not", () => {
    expect(body(html("alprazolam"))).toContain(GAP_PROMPTS.onset);
    expect(body(html("moclobemide"))).not.toContain(GAP_PROMPTS.onset);
  });
  test("a source from another country prompts a brand question; a statement for another form prompts a form question", () => {
    expect(body(html("moclobemide"))).toContain(GAP_PROMPTS.brand);
    expect(body(html("lofepramine"))).toContain(GAP_PROMPTS.form); // the leaflet is for the liquid
    expect(body(html("tranylcypromine"))).not.toContain(GAP_PROMPTS.form);
  });
  test("a stopping or check-up statement prompts the matching question, and only then", () => {
    expect(body(html("propranolol"))).toContain(GAP_PROMPTS.stopping);
    expect(body(html("mianserin"))).toContain(GAP_PROMPTS.monitoring);
    expect(body(html("buspirone"))).not.toContain(GAP_PROMPTS.stopping);
  });
  test("a Patient Guide medicine gets none of these extra questions", () => {
    for (const k of Object.values(GAP_PROMPTS)) expect(body(html("fluoxetine"))).not.toContain(k);
  });
  test("a medicine with no source at all asks only the part-based questions", () => {
    const none = drugs.find((d) => !getPatientGuide(d.slug) && claimsFor(d.slug).length === 0)!;
    const b = body(html(none.slug));
    expect(b).toContain(GAP_PROMPTS.onset);
    expect(b).not.toContain(GAP_PROMPTS.brand);
  });
});
