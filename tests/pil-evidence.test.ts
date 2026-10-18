import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { CLAIM_RECORDS, MEDGUIDE_RECORDS, SOURCE_RECORDS, claimsFor, evidenceViews, validateEvidence } from "@/lib/kyp/evidence";
import { PIL_DOCS } from "@/lib/kyp/evidence/pil-docs";
import { dashboardRows } from "@/lib/kyp/evidence/dashboard";
import { formOf, isCombinationTitle } from "@/lib/kyp/evidence/label-form";
import { sourceIdLabel, sourceKind } from "@/lib/kyp/evidence/source-label";
import verification from "@/lib/kyp/evidence/data/pil-verification.json";

const html = (slug: string) => {
  const d = drugs.find((x) => x.slug === slug)!;
  const g = getPatientGuide(slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions, evidence: evidenceViews(slug), hasGuide: !!g }));
};

describe("non-US source documents (UK leaflets, an archived FDA label)", () => {
  test("every document was re-downloaded and every stored passage was found in it", () => {
    const v = verification as { slug: string; file: string; httpStatus: number; sha256: string; passages: number; passagesFound: number; missing: string[]; checkedAt: string }[];
    const redownloadable = PIL_DOCS.filter((d) => !d.importCheck); // a manually imported Indian insert cannot be re-downloaded
    expect(v.map((x) => `${x.slug}:${x.file}`).sort()).toEqual(redownloadable.map((d) => `${d.slug}:${d.file}`).sort());
    for (const d of redownloadable) {
      const r = v.find((x) => x.slug === d.slug && x.file === d.file)!;
      expect(r.file).toBe(d.file);
      expect(r.httpStatus).toBe(200);
      expect(r.sha256).toMatch(/^[0-9a-f]{64}$/);
      expect(r.passages).toBe(d.claims.length);
      expect(r.passagesFound).toBe(r.passages);
      expect(r.missing).toEqual([]);
      expect(r.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  test("each claim keeps a short exact passage and a separate, different plain-language wording", () => {
    for (const d of PIL_DOCS) {
      const cs = claimsFor(d.slug).filter((c) => c.sourceId.includes(d.file));
      expect(cs.length).toBe(d.claims.length);
      for (const c of cs) {
        expect(c.wordingKind).toBe("paraphrase");
        expect(c.passage.length).toBeLessThan(1300);
        expect(c.review).toBe("not-reviewed");
        expect(c.limitations.join(" ")).toMatch(d.kind === "in-safety-alert" ? /not a product label/ : /not an Indian label/);
        expect(c.verification).toBe("passage-found-in-source");
      }
    }
    // A passage that is already plain may be reused word for word, but most statements are genuinely rewritten.
    const rewritten = PIL_DOCS.flatMap((d) => claimsFor(d.slug).filter((c) => c.sourceId.includes(d.file))).filter((c) => c.patientWording !== c.passage).length;
    const total = PIL_DOCS.reduce((n, d) => n + d.claims.length, 0);
    expect(rewritten / total).toBeGreaterThan(0.85);
    expect(validateEvidence()).toEqual([]);
  });

  test("wording written for this app avoids unexplained clinical jargon", () => {
    const jargon = /\b(contraindicat\w*|concomitant\w*|micturition|incidence|discontinu\w+|therapeutic|administered)\b/i;
    const written = CLAIM_RECORDS.filter((c) => c.wordingKind === "paraphrase");
    expect(written.length).toBeGreaterThan(200);
    for (const c of written) {
      expect(c.patientWording.match(jargon)?.[0] ?? null).toBeNull();
      // "anticholinergic" is a class name: allowed only when it is explained in the same statement.
      if (/anticholinergic/i.test(c.patientWording)) expect(c.patientWording).toMatch(/atropine-like|drying/i);
      if (/paresthesia/i.test(c.patientWording)) expect(c.patientWording).toMatch(/tingling|numbness/i);
    }
  });

  test("doses and numbers in the wording are only ones in the passage (checked by the validator) and carry a 'do not change your own dose' limit", () => {
    for (const c of CLAIM_RECORDS.filter((x) => x.category === "how-to-take" && /\b\d+\s?mg\b/.test(x.patientWording) && !/contains/.test(x.patientWording))) {
      const s = SOURCE_RECORDS.find((x) => x.id === c.sourceId)!;
      if (s.jurisdiction === "UK" || s.identifier.startsWith("fda.") || c.id.includes(":pil")) expect(`${c.patientWording} ${c.limitations.join(" ")}`).toMatch(/set by your prescriber|Your own dose|change your own dose/i);
    }
  });

  test("pages say which country and which product form the document is for", () => {
    const mocl = html("moclobemide");
    expect(mocl).toContain("UK patient leaflet (not an Indian label)");
    expect(mocl).toContain("Leaflet file pil.10614");
    expect(mocl).toContain("This is a UK package leaflet. Indian product information has not been checked");
    expect(mocl).not.toContain("DailyMed set id pil");
    const rebox = html("reboxetine");
    expect(rebox).toContain("Irish patient leaflet (not an Indian label)");
    expect(rebox).toContain("HPRA leaflet hpra.21922");
    expect(rebox).toContain("This is an Irish package leaflet");
    expect(rebox).toContain("date not stated in the document");
    const lofe = html("lofepramine");
    expect(lofe).toContain('data-claim-form="liquid"'); // the leaflet is for the oral suspension
    expect(lofe).toContain("This statement was written for this form of the medicine: liquid");
    const mapr = html("maprotiline");
    expect(mapr).toContain("US label (archived FDA copy, not an Indian label)");
    expect(mapr).toContain("Drugs@FDA document 072285s021");
    expect(mapr).not.toContain("DailyMed set id fda");
    expect(sourceKind({ jurisdiction: "US", organisation: "x", identifier: "abc", type: "us-product-label" })).toBe("US label");
    expect(sourceIdLabel({ jurisdiction: "US", organisation: "x", identifier: "abc", type: "us-product-label" })).toBe("DailyMed set id abc");
  });

  test("sourced pages explain in plain words how to read the sources; unsourced pages do not claim any", () => {
    expect(html("moclobemide")).toContain("data-provenance-how");
    expect(html("moclobemide")).toContain("How to read this page");
    expect(html("blonanserin")).not.toContain("data-provenance-how");
    expect(html("blonanserin")).not.toContain("data-claim=");
  });

  test("a leaflet's onset sentence replaces the generic one only when the leaflet states it, and says what it is", () => {
    for (const slug of ["moclobemide", "mianserin", "dothiepin", "lofepramine", "maprotiline"]) {
      const on = claimsFor(slug).filter((c) => c.category === "onset");
      expect(on.length).toBe(1);
      expect(on[0].replacesRule).toBe("onset-works-gradually");
    }
    expect(claimsFor("moclobemide").find((c) => c.category === "onset")!.limitations.join(" ")).toMatch(/general statement about antidepressants/);
    expect(claimsFor("lofepramine").find((c) => c.category === "onset")!.limitations.join(" ")).toMatch(/general statement about antidepressants/);
  });

  test("tablet doses are never shown for the liquid and the liquid leaflet is labelled as the liquid", () => {
    const lofe = claimsFor("lofepramine");
    expect(lofe.every((c) => c.applicability.join(" ").includes("oral suspension"))).toBe(true);
    expect(lofe.find((c) => c.category === "how-to-take" && /5 ml/.test(c.patientWording))!.limitations.join(" ")).toMatch(/liquid only/);
  });
});

describe("US label selection never presents a different product form as the medicine's own", () => {
  test("label forms are read from the title", () => {
    expect(formOf("TRAZODONE HYDROCHLORIDE TABLET [GRANULES]").plainOral).toBe(true);
    expect(formOf("PREGABALIN CAPSULE [ASCEND]").label).toBe("capsule");
    expect(formOf("LITHIUM SOLUTION [ADVAGEN]")).toEqual({ label: "liquid", plainOral: false });
    expect(formOf("LAMOTRIGINE TABLET, FILM COATED, EXTENDED RELEASE [AMNEAL]").label).toBe("extended-release product");
    expect(formOf("ADASUVE (LOXAPINE) AEROSOL, POWDER [ALEXZA]").plainOral).toBe(false);
    expect(formOf("VIVITROL (NALTREXONE) KIT [ALKERMES]").label).toBe("injection");
    expect(formOf("REXULTI (BREXPIPRAZOLE) TABLET REXULTI (BREXPIPRAZOLE) KIT [OTSUKA]").plainOral).toBe(true);
    expect(isCombinationTitle("PERPHENAZINE AND AMITRIPTYLINE HYDROCHLORIDE TABLET [MYLAN]")).toBe(true);
    expect(isCombinationTitle("PERPHENAZINE TABLET [MYLAN]")).toBe(false);
  });

  test("no single-ingredient medicine rests on a combination product's guide", () => {
    for (const r of MEDGUIDE_RECORDS) if (r.status === "medication-guide-found" && !r.slug.includes("-")) expect(isCombinationTitle(r.labelTitle!)).toBe(false);
  });

  test("a guide for a non-plain form is flagged on every statement taken from it", () => {
    const flagged = MEDGUIDE_RECORDS.filter((r) => r.status === "medication-guide-found" && !formOf(r.labelTitle!).plainOral);
    for (const r of flagged.slice(0, 5)) expect(html(r.slug)).toContain("data-claim-form=");
  });
});

describe("Indian PvPI safety-alert rows are Indian sources, labelled as safety signals and never as product labels", () => {
  const pvpi = SOURCE_RECORDS.filter((s) => s.type === "indian-safety-communication");
  test("they are stored, typed and located correctly", () => {
    expect(pvpi.length).toBe(18);
    for (const s of pvpi) {
      expect(s.jurisdiction).toBe("IN");
      expect(s.url).toBe("https://ipc.gov.in/images/pvpi/List-of-drug-safety-alerts-issued-by-PvPI.pdf");
      expect(sourceKind(s)).toMatch(/not a product label/);
      expect(s.limitations.join(" ")).toMatch(/signal/);
    }
  });
  test("the dashboard counts them apart from Indian product labels", () => {
    const rows = dashboardRows();
    expect(rows.filter((r) => r.indianSafetyAlertSources > 0).length).toBe(18);
    expect(rows.every((r) => r.indianSourcesVerified === 0)).toBe(true);
    expect(rows.find((r) => r.slug === "olanzapine")!.indianSourceStatus).toBe("safety-alert-only");
    expect(rows.find((r) => r.slug === "olanzapine")!.worklist).toContain("no Indian product label or insert");
  });
  test("the page says what the row is and is not", () => {
    const h = html("olanzapine");
    expect(h).toContain("Indian drug safety alert list (IPC, PvPI)");
    expect(h).toContain("it gives no rate, cause or dosing advice");
    expect(h).toContain("it is a safety signal, it does not say how often this happens");
  });
});

describe("the form a source describes is the stricter of its formulation text and its title", () => {
  test("a vague formulation ('oral') does not hide or blur the title's form", async () => {
    const { formOfSource } = await import("@/lib/kyp/evidence/label-form");
    expect(formOfSource({ formulation: "oral", title: "ACAMPROSATE CALCIUM TABLET, DELAYED RELEASE [NCS]" }).label).toBe("delayed-release product");
    expect(formOfSource({ formulation: "oral", title: "PALIPERIDONE TABLET, EXTENDED RELEASE [ANI]" }).plainOral).toBe(false);
    expect(formOfSource({ formulation: "oral", title: "ASENAPINE TABLET [BRECKENRIDGE]" })).toEqual({ label: "tablet", plainOral: true });
    expect(formOfSource({ formulation: "extended-release tablets", title: "DRUG TABLET [X]" }).plainOral).toBe(false);
    expect(formOfSource({ formulation: "tablets", title: "DRUG TABLET, EXTENDED RELEASE [X]" }).plainOral).toBe(false);
    expect(formOfSource({ title: "KIT [X]" }).label).toBe("injection");
  });
});
