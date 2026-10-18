import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { CLAIM_RECORDS, SOURCE_RECORDS, evidenceViews } from "@/lib/kyp/evidence";
import { EvidenceClaimCards } from "@/components/kyp/sections/drug/evidence-claims";
import { plainSummaryFor } from "@/lib/kyp/evidence/plain-summaries";
import { reviewPacket } from "@/lib/kyp/evidence/review-packet";
import { sourceKind, sourceIdLabel, jurisdictionNoteKey } from "@/lib/kyp/evidence/source-label";
import { isInfoPageClaim, isLabelClaim, isSafetyAlertClaim } from "@/lib/kyp/evidence/patient-sections";

const src = new Map(SOURCE_RECORDS.map((s) => [s.id, s]));
const isMlp = (id: string) => src.get(id)!.identifier.startsWith("mlp.");
const cards = (slug: string) => renderToStaticMarkup(React.createElement(EvidenceClaimCards, { views: evidenceViews(slug) }));
const slugsWith = (pred: (sourceId: string) => boolean) => [...new Set(CLAIM_RECORDS.filter((c) => pred(c.sourceId)).map((c) => c.slug))];

describe("source classification: label, patient-information page, safety alert", () => {
  test("every claim falls in exactly one class, and the class agrees with the source record", () => {
    for (const c of CLAIM_RECORDS) {
      const s = src.get(c.sourceId)!;
      const classes = [isLabelClaim(c), isInfoPageClaim(c), isSafetyAlertClaim(c)].filter(Boolean).length;
      expect(classes).toBe(1);
      expect(isInfoPageClaim(c)).toBe(s.identifier.startsWith("mlp."));
      expect(isSafetyAlertClaim(c)).toBe(s.type === "indian-safety-communication");
    }
  });
  test("the readable source kind never falls through to a bare organisation name, and names what the document is not", () => {
    for (const s of SOURCE_RECORDS) {
      const k = sourceKind(s);
      expect(k).not.toBe(s.organisation);
      expect(sourceIdLabel(s)).not.toBe(s.identifier);
      if (s.identifier.startsWith("mlp.")) expect(k).toMatch(/not a product label/);
      if (s.type === "indian-safety-communication") expect(k).toMatch(/not a product label/);
      if (s.jurisdiction !== "IN") expect(k).toMatch(/US label|archived FDA|leaflet|formulary|monograph|drug-information page/i);
    }
    expect(jurisdictionNoteKey(SOURCE_RECORDS.find((s) => s.type === "indian-safety-communication")!)).toBe("INSAFETY");
  });
  test("a patient-information page is never described as a label in the cards it appears in", () => {
    const slugs = slugsWith(isMlp);
    expect(slugs.length).toBeGreaterThan(20);
    for (const slug of slugs) {
      const h = cards(slug);
      const mlpClaims = evidenceViews(slug).filter((v) => v.source.identifier.startsWith("mlp."));
      for (const v of mlpClaims) {
        const li = h.slice(h.indexOf(`data-claim="${v.claim.id}"`)).split("</li>")[0];
        expect(li).not.toMatch(/label&#x27;s own text|label's own text/);
        expect(li).not.toContain("US label.");
        expect(li).toMatch(/not a product label/);
        expect(li).not.toContain("data-plain-summary");
      }
    }
  });
  test("a safety-alert statement is shown as a signal and is never quoted as the document's own words", () => {
    for (const slug of slugsWith((id) => src.get(id)!.type === "indian-safety-communication")) {
      for (const v of evidenceViews(slug).filter((x) => x.source.type === "indian-safety-communication")) {
        expect(v.claim.wordingKind).toBe("paraphrase");
        const h = cards(slug);
        const li = h.slice(h.indexOf(`data-claim="${v.claim.id}"`)).split("</li>")[0];
        expect(li).toMatch(/not a product label/);
        expect(li).not.toContain("quoted exactly");
      }
    }
  });
  test("an 'In short' summary is only ever attached to a product-label (Medication Guide) quote", () => {
    for (const c of CLAIM_RECORDS) {
      if (!plainSummaryFor(c)) continue;
      expect(isLabelClaim(c)).toBe(true);
      expect(src.get(c.sourceId)!.type).toBe("us-product-label");
      expect(c.wordingKind).toBe("exact-quote");
    }
  });
  test("review packets say the same: each statement block names the kind and, for pages and alerts, what it is not", () => {
    for (const slug of ["mesoridazine", "quetiapine", "olanzapine"]) {
      const p = reviewPacket(slug);
      for (const b of p.split(/^### /m).slice(1)) {
        const id = b.split(" ")[0];
        const c = CLAIM_RECORDS.find((x) => x.id === id);
        if (!c) continue;
        if (isInfoPageClaim(c) || isSafetyAlertClaim(c)) expect(b).toMatch(/- Kind: .*not a product label/);
      }
    }
  });
  test("the jurisdiction, type and web host of each source agree", () => {
    const expected: Record<string, { j: string; t: RegExp }> = {
      "dailymed.nlm.nih.gov": { j: "US", t: /^us-product-label$/ },
      "www.accessdata.fda.gov": { j: "US", t: /^us-product-label$/ },
      "medlineplus.gov": { j: "US", t: /^international-patient-information$/ },
      "www.medicines.org.uk": { j: "UK", t: /^international-patient-information$/ },
      "assets.hpra.ie": { j: "IE", t: /^international-patient-information$/ },
      "www.ndf.gov.sg": { j: "SG", t: /^international-regulator-label$/ },
      "pdf.hres.ca": { j: "CA", t: /^international-regulator-label$/ },
      "ipc.gov.in": { j: "IN", t: /^indian-safety-communication$/ },
    };
    for (const s of SOURCE_RECORDS) {
      const e = expected[new URL(s.url).host];
      expect(e).toBeTruthy();
      expect(s.jurisdiction).toBe(e.j as typeof s.jurisdiction);
      expect(s.type).toMatch(e.t);
    }
  });
  test("source dates are sane: published is a real date, never after it was accessed or after the current date", () => {
    const now = Date.parse("2026-10-16");
    for (const s of SOURCE_RECORDS) {
      expect(s.accessedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Date.parse(s.accessedAt)).toBeLessThanOrEqual(now);
      if (!s.publishedDate) continue;
      const t = Date.parse(s.publishedDate.replace(/(\d{4}-\d{2})$/, "$1-01").replace(/^(\d{4})$/, "$1-01-01").replace(/^(\d{2})\/(\d{4})$/, "$2-$1-01"));
      if (Number.isNaN(t)) continue; // free-text revision dates (for example "03/2024 (file ...)") are kept as written
      expect(t).toBeLessThanOrEqual(Date.parse(s.accessedAt) + 86400000);
    }
  });
});
