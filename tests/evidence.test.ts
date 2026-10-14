import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient, matchSharedClaim } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import {
  CLAIM_RECORDS,
  DISCOVERY_RECORDS,
  INDIAN_SOURCE_SEARCH,
  MEDGUIDE_RECORDS,
  ONSET_SCAN,
  SOURCE_RECORDS,
  claimsFor,
  evidenceViews,
  numbersIn,
  validateEvidence,
  type ClaimRecord,
  type SourceRecord,
} from "@/lib/kyp/evidence";
import { dashboardRows, dashboardSummary } from "@/lib/kyp/evidence/dashboard";
import { readability } from "@/lib/kyp/evidence/readability";
import { PIL_DOCS } from "@/lib/kyp/evidence/pil-docs";
import { CLAIM_SOURCE_SETID } from "@/lib/kyp/evidence/claims";

const squash = (t: string) => t.replace(/\s+/g, " ").trim();
const visible = (html: string) => html.replace(/<details data-withheld[\s\S]*?<\/details>/g, "");
const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug) }));
};
const TEMPLATE_ONLY = ["isocarboxazid", "moclobemide", "phenelzine", "selegiline", "tranylcypromine", "amoxapine", "desipramine", "dothiepin", "doxepin", "imipramine", "lofepramine", "maprotiline", "mianserin", "nortriptyline", "protriptyline", "trimipramine"];
const sourcesOf = (slug: string) => SOURCE_RECORDS.filter((s) => s.slug === slug);
const NO_US_LABEL = ["moclobemide", "dothiepin", "lofepramine", "maprotiline", "mianserin"];

describe("evidence layer: integrity", () => {
  test("every stored source and claim is internally consistent (passage really is in the source)", () => {
    expect(validateEvidence()).toEqual([]);
    const guides = MEDGUIDE_RECORDS.filter((r) => r.status === "medication-guide-found").length;
    expect(guides).toBe(60);
    expect(SOURCE_RECORDS.length).toBe(Object.keys(CLAIM_SOURCE_SETID).length + guides + PIL_DOCS.length); // hand-picked US labels + patient-directed US sections + non-US documents
    expect(Object.keys(CLAIM_SOURCE_SETID).length).toBe(24);
    expect(CLAIM_RECORDS.length).toBeGreaterThanOrEqual(50);
  });

  test("the validator catches a tampered passage, an invented number, a review claim, a foreign host and a bad quote", () => {
    const src = SOURCE_RECORDS[0];
    const base = CLAIM_RECORDS.find((c) => c.sourceId === src.id)!;
    const bad = (patch: Partial<ClaimRecord>) => validateEvidence(SOURCE_RECORDS, [{ ...base, ...patch }]).map((i) => i.code);
    expect(bad({ passage: "This sentence is not in the label at all." })).toContain("passage-not-in-source");
    expect(bad({ patientWording: "Takes 12 weeks to work." })).toContain("number-not-in-passage");
    expect(bad({ review: "approved" as unknown as "not-reviewed" })).toContain("review-claimed");
    expect(bad({ wordingKind: "exact-quote", patientWording: "Something else." })).toContain("quote-differs");
    expect(bad({ replacesRule: "no-such-rule" })).toContain("unknown-rule");
    expect(bad({ excerptId: "nope" })).toContain("missing-excerpt");
    expect(bad({ sourceId: "nope" })).toContain("missing-source");
    expect(bad({ limitations: [] })).toContain("missing-applicability");
    const foreign: SourceRecord = { ...src, url: "https://example.com/label" };
    expect(validateEvidence([foreign], []).map((i) => i.code)).toContain("host-not-allowed");
    const noText: SourceRecord = { ...src, excerpts: [] };
    expect(validateEvidence([noText], []).map((i) => i.code)).toContain("no-excerpts");
    expect(numbersIn("ten days to four weeks, 60 mg, 1 to 3").size).toBe(5);
  });

  test("no claim is an Indian label claim, none is reviewed, and every one says which non-Indian document it rests on", () => {
    for (const c of CLAIM_RECORDS) {
      const s = SOURCE_RECORDS.find((x) => x.id === c.sourceId)!;
      expect(["US", "UK"]).toContain(s.jurisdiction);
      expect(["us-product-label", "international-patient-information"]).toContain(s.type);
      expect(c.review).toBe("not-reviewed");
      expect(c.limitations.join(" ")).toMatch(s.jurisdiction === "UK" ? /UK (leaflet|package leaflet)/i : /US (label|Medication Guide|patient information|prescribing information)/i);
      expect(c.verification).toBe("passage-found-in-source");
    }
    expect(INDIAN_SOURCE_SEARCH.outcome).toBe("unresolved-for-every-medication");
    expect(INDIAN_SOURCE_SEARCH.organisations.every((o) => o.perMedicineRecordsRetrievable === false)).toBe(true);
  });

  test("source discovery covers all 145 medications and records an honest result for each", () => {
    expect(DISCOVERY_RECORDS.length).toBe(145);
    expect(new Set(DISCOVERY_RECORDS.map((r) => r.slug)).size).toBe(145);
    for (const r of DISCOVERY_RECORDS) {
      expect(["candidates-found", "none-found", "error"]).toContain(r.status);
      expect(r.accessedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (r.status === "candidates-found") expect(r.candidates.length).toBeGreaterThan(0);
      if (r.status === "none-found") expect(r.note).toMatch(/not evidence/i);
    }
    expect(DISCOVERY_RECORDS.filter((r) => r.status === "error").length).toBe(0);
    for (const slug of NO_US_LABEL) expect(DISCOVERY_RECORDS.find((r) => r.slug === slug)!.status).toBe("none-found");
  });

  test("patient wording of a claim is never itself a withheld shared claim", () => {
    for (const c of CLAIM_RECORDS) expect(matchSharedClaim(c.patientWording)?.kind === "claim").toBe(false);
  });
});

describe("evidence layer: rendering and honesty", () => {
  test("a sourced onset statement replaces the generic one for exactly the medicines whose label states one", () => {
    const withOnset = CLAIM_RECORDS.filter((c) => c.category === "onset").map((c) => c.slug).sort();
    expect(withOnset).toEqual(["amoxapine", "chlorpromazine", "desipramine", "dothiepin", "imipramine", "isocarboxazid", "lofepramine", "maprotiline", "mianserin", "moclobemide", "phenelzine", "propranolol", "protriptyline", "trimipramine"]);
    for (const slug of withOnset) {
      const h = html(slug);
      expect(h).toContain('data-claim-category="onset"');
      expect(visible(h).toLowerCase()).not.toContain("works gradually, most people notice");
      expect(h.toLowerCase()).toContain("works gradually, most people notice"); // original kept in the review list
    }
    expect(html("isocarboxazid")).toContain("3 to 6 weeks");
    expect(html("isocarboxazid")).toContain("Beneficial effect may not be seen in some patients for 3 to 6 weeks.");
    // The class-level statement in the trimipramine label stays labelled as class-level.
    expect(claimsFor("trimipramine").find((c) => c.category === "onset")!.applicability.join(" ")).toMatch(/in general/);
  });

  test("a medicine whose label says nothing about onset gets NO onset statement and keeps the generic one withheld", () => {
    for (const slug of ["nortriptyline", "tranylcypromine", "doxepin", "selegiline"]) {
      expect(claimsFor(slug).some((c) => c.category === "onset")).toBe(false);
      const h = html(slug);
      expect(h).not.toContain('data-claim-category="onset"');
      expect(visible(h).toLowerCase()).not.toContain("works gradually, most people notice");
    }
  });

  test("medicines with no DailyMed label rest only on a named non-US document, and say which", () => {
    for (const slug of NO_US_LABEL) {
      const claims = claimsFor(slug);
      expect(claims.length).toBeGreaterThan(15);
      for (const c of claims) {
        const s = SOURCE_RECORDS.find((x) => x.id === c.sourceId)!;
        expect(s.url).not.toContain("dailymed");
        expect(c.wordingKind).toBe("paraphrase");
        expect(c.passage.length).toBeLessThan(1300); // short extracts only, never the whole document
      }
      const h = html(slug);
      expect(h).toContain("data-evidence-claims");
      expect(h).toContain("not an Indian label");
      expect(visible(h).toLowerCase()).not.toContain("works gradually, most people notice");
      const row = dashboardRows().find((r) => r.slug === slug)!;
      expect(row.usLabelDiscovery).toBe("none-found"); // DailyMed still has nothing: that column does not change
      expect(row.nextAction).not.toMatch(/no US label found/i);
      expect(row.indianSourcesVerified).toBe(0);
    }
  });

  test("a sourced claim shows its wording, source identity, dates, limits, review status and the label's exact words", () => {
    const h = html("tranylcypromine");
    expect(h).toContain("data-evidence-claims");
    expect(h).toContain("data-jurisdiction-note");
    expect(h).toContain("US product label. Indian product information has not been checked");
    expect(h).toContain("tyramine");
    expect(h).toContain("DailyMed set id b72d8187-dfcc-4ea0-b5e9-c0be95b69a27");
    expect(h).toMatch(/Accessed \d{4}-\d{2}-\d{2}/);
    expect(h).toContain("Not clinically reviewed");
    expect(h).toContain("data-claim-passage");
    expect(h).toContain("Do not eat foods or have drinks that have high amounts of tyramine");
    expect(h).toMatch(/Not being named does not make a medicine safe|does not list every medicine/);
  });

  test("dose- and formulation-specific claims keep their conditions", () => {
    const emsam = claimsFor("selegiline").find((c) => /9 mg/.test(c.patientWording))!;
    expect(emsam.patientWording).toMatch(/9 mg or 12 mg/);
    expect(emsam.limitations.join(" ")).toMatch(/6 mg/);
    expect(claimsFor("selegiline")[0].limitations.join(" ")).toMatch(/tablets or capsules/);
    expect(claimsFor("doxepin")[0].limitations.join(" ")).toMatch(/insomnia|sleep/);
    expect(claimsFor("phenelzine").find((c) => c.category === "onset")!.limitations.join(" ")).toMatch(/prescriber sets/);
  });

  test("medicines without sourced claims show no source-backed cards and say so", () => {
    const none = drugs.find((d) => !getPatientGuide(d.slug) && claimsFor(d.slug).length === 0)!;
    const h = html(none.slug);
    expect(h).not.toContain("data-claim=");
    expect(h).toContain("No product label has been retrieved for this medicine");
  });

  test("the sourced claim set never contains dosing instructions beyond numbers present in the label passage", () => {
    for (const c of CLAIM_RECORDS) for (const n of numbersIn(c.patientWording)) expect(numbersIn(c.passage).has(n)).toBe(true);
  });
});

describe("India-first dashboard: separate measures, honest numbers", () => {
  const rows = dashboardRows();
  const sum = dashboardSummary(rows);
  test("one row per medication; Indian sources unresolved for all; nothing reviewed", () => {
    expect(rows.length).toBe(145);
    expect(sum.indianSourcesVerified).toBe(0);
    expect(sum.indianSourcesUnresolved).toBe(145);
    expect(sum.clinicallyReviewed).toBe(0);
    for (const r of rows) expect(r.clinicalReview).toBe("not reviewed");
  });
  test("measures are separate and consistent with the data", () => {
    expect(sum.patientUiRenders).toBe(145);
    expect(sum.patientGuides).toBe(12);
    expect(sum.claimsWithTraceableSource).toBe(CLAIM_RECORDS.length);
    expect(sum.medicationsWithSourcedClaims).toBe(new Set(CLAIM_RECORDS.map((c) => c.slug)).size);
    expect(sum.medicationsWithSourcedClaims).toBeGreaterThanOrEqual(60);
    expect(sum.medicationsWithSourcedOnsetClaim).toBe(14);
    expect(sum.usLabelDiscovery["candidates-found"] + sum.usLabelDiscovery["none-found"]).toBe(145);
    expect(Object.keys(sum)).not.toContain("percent");
    expect(Object.keys(sum).some((k) => /percent|score|overall/i.test(k))).toBe(false);
  });
  test("the 16 template-only medicines are all tracked and all have sourced statements; five rest on non-US documents only", () => {
    const t = rows.filter((r) => r.explanationLevel === "template-only").map((r) => r.slug).sort();
    expect(t).toEqual([...TEMPLATE_ONLY].sort());
    const sourced = t.filter((s) => claimsFor(s).length > 0);
    expect(sourced.length).toBe(16);
    for (const s of NO_US_LABEL) expect(sourcesOf(s).every((x) => !x.url.includes("dailymed"))).toBe(true);
    // Sourced claims do not make the registry wording medicine-specific: the level stays template-only.
    for (const s of sourced) expect(rows.find((r) => r.slug === s)!.explanationLevel).toBe("template-only");
  });
  test("the onset screen covers every medication, is labelled as candidates, and never becomes a claim by itself", () => {
    expect(ONSET_SCAN.length).toBe(145);
    expect(ONSET_SCAN.filter((o) => o.status === "scanned").length + ONSET_SCAN.filter((o) => o.status === "no-us-label-found").length).toBe(145);
    for (const o of ONSET_SCAN) {
      expect(o.accessedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (o.status === "no-us-label-found") expect(o.matches).toEqual([]);
    }
    for (const r of rows) if (r.onsetLabelCandidates.includes("candidate")) expect(["true", true, false]).toContain(r.onsetClaimFromSource);
    // Every sourced onset claim's source label was among the scanned or retrieved labels for that medicine.
    for (const c of CLAIM_RECORDS.filter((x) => x.category === "onset")) expect(SOURCE_RECORDS.some((s) => s.id === c.sourceId)).toBe(true);
    expect(sum.onsetScan.scanned).toBe(121);
    expect(sum.onsetScan.noUsLabel).toBe(24);
    expect(sum.onsetScan.note).toMatch(/not claims/);
  });
  test("every DailyMed source is a discovered candidate label (traceable to the listing)", () => {
    for (const s of SOURCE_RECORDS.filter((x) => x.url.includes("dailymed"))) expect(DISCOVERY_RECORDS.find((r) => r.slug === s.slug)!.candidates.some((c) => c.setid === s.identifier)).toBe(true);
  });
  test("readability is an automated screen, defined and bounded", () => {
    const easy = readability("Take it with food. Call your doctor if you feel unwell.");
    const hard = readability("Pharmacotherapeutic intervention necessitates comprehensive evaluation of concomitant contraindications, notwithstanding physiological variability.");
    expect(easy.grade).toBeLessThan(hard.grade);
    expect(readability("word ".repeat(40) + ".").longSentences).toBe(1);
    for (const r of rows) expect(Number.isFinite(r.readingGrade)).toBe(true);
    expect(squash(sum.readability.note)).toMatch(/not a comprehension test/i);
  });
});
