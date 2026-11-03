import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { CLAIM_RECORDS, SOURCE_RECORDS, evidenceViews, validateEvidence } from "@/lib/kyp/evidence";
import { EvidenceClaimCards } from "@/components/kyp/sections/drug/evidence-claims";
import { formOfSource, isCombinationTitle } from "@/lib/kyp/evidence/label-form";
import { dashboardRows } from "@/lib/kyp/evidence/dashboard";
import { MLP_PREFIX } from "@/lib/kyp/evidence/medlineplus-claims";

const srcById = new Map(SOURCE_RECORDS.map((s) => [s.id, s]));
const cards = (slug: string) => renderToStaticMarkup(React.createElement(EvidenceClaimCards, { views: evidenceViews(slug) }));

describe("evidence integrity across the whole pipeline", () => {
  test("every source and claim passes the validator (passages in excerpts, numbers, hosts, non-Indian disclosed)", () => {
    expect(validateEvidence(SOURCE_RECORDS, CLAIM_RECORDS)).toEqual([]);
  });
  test("every claim resolves to a source for the SAME medicine, with a dated, located, accessed record", () => {
    for (const c of CLAIM_RECORDS) {
      const s = srcById.get(c.sourceId);
      expect(s).toBeTruthy();
      expect(s!.slug).toBe(c.slug);
      expect(s!.accessedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s!.jurisdiction).toBeTruthy();
      expect(s!.url).toMatch(/^https:\/\//);
      expect(c.review).toBe("not-reviewed");
    }
  });
  test("PvPI safety-alert statements are labelled as signals, never as a product label, wherever they are shown", () => {
    const alerts = CLAIM_RECORDS.filter((c) => srcById.get(c.sourceId)!.type === "indian-safety-communication");
    expect(alerts.length).toBeGreaterThan(20);
    for (const c of alerts) {
      expect(c.category).toBe("side-effects");
      expect(c.limitations.join(" ")).toMatch(/not a (package insert|product label)|signal/i);
      expect(c.patientWording).toMatch(/safety signal/);
      expect(c.patientWording).toMatch(/does not say how often/);
    }
    for (const slug of new Set(alerts.map((c) => c.slug))) {
      const h = cards(slug);
      expect(h).toContain("not a product label");
      expect(h).not.toMatch(/Indian product label(?! )/);
    }
  });
  test("a statement from a non-plain form (injection, extended-release, liquid, patch, combination) always shows its form note", () => {
    let checked = 0;
    for (const slug of new Set(CLAIM_RECORDS.map((c) => c.slug))) {
      const views = evidenceViews(slug);
      const h = cards(slug);
      for (const v of views) {
        const src = srcById.get(v.claim.sourceId)!;
        if (src.type === "indian-safety-communication" || src.identifier.startsWith(MLP_PREFIX)) continue;
        const form = formOfSource(src);
        if (!form.plainOral || isCombinationTitle(src.productTitle)) {
          expect(h).toContain(`data-claim-form="${form.label}"`);
          checked++;
        }
      }
    }
    expect(checked).toBeGreaterThan(20);
  });
  test("a label for another country or form is never counted as an Indian product label", () => {
    for (const r of dashboardRows()) {
      const indian = SOURCE_RECORDS.filter((s) => s.slug === r.slug && s.jurisdiction === "IN" && s.type !== "indian-safety-communication").length;
      expect(r.indianSourcesVerified).toBe(indian);
    }
  });
  test("template and shared wording never inflate medication-specific coverage: counts equal the stored claims", () => {
    for (const r of dashboardRows()) {
      const n = CLAIM_RECORDS.filter((c) => c.slug === r.slug).length;
      expect(r.claimsWithSource).toBe(n);
      if (n === 0) {
        expect(r.sourcesRetrieved).toBe(0);
        expect(Object.values(r.parts)).not.toContain("source-backed");
      }
    }
  });
  test("a dated source is listed on the medicine's work list, so stale evidence is visible", () => {
    const old = SOURCE_RECORDS.filter((s) => s.publishedDate && 2026 - Number(s.publishedDate.slice(0, 4)) > 5);
    expect(old.length).toBeGreaterThan(0);
    const rows = new Map(dashboardRows().map((r) => [r.slug, r]));
    for (const s of old.slice(0, 40)) expect(rows.get(s.slug)!.worklist).toMatch(/dated source/);
  });
  test("each medicine page carries the Indian-source disclosure (data-india-note) and unavailable parts stay visible as such", () => {
    expect(drugs.length).toBe(145);
  });
});
