import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { drugs } from "@/lib/kyp/data";
import { CLAIM_RECORDS, SOURCE_RECORDS } from "@/lib/kyp/evidence";
import { EVIDENCE_CLASSES, gapRegisterCsv, gapRegisterMarkdown, gapRows, gapTotals } from "@/lib/kyp/evidence/gap-register";
import { dashboardRows } from "@/lib/kyp/evidence/dashboard";
import { SOURCE_SEARCH_LOG } from "@/lib/kyp/evidence/source-search-log";

const lf = (p: string) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const rows = gapRows();
const t = gapTotals(rows);

describe("medication evidence gap register reconciles with the registry and the page records", () => {
  test("one row per registered medicine, in registry order, each in exactly one evidence class", () => {
    expect(rows.map((r) => r.slug)).toEqual(drugs.map((d) => d.slug));
    expect(rows).toHaveLength(145);
    expect(EVIDENCE_CLASSES.reduce((a, c) => a + t.byClass[c], 0)).toBe(145);
  });
  test("class counts are recomputed from claims by document kind, not from stored sources", () => {
    const src = new Map(SOURCE_RECORDS.map((s) => [s.id, s]));
    for (const r of rows) {
      const cl = CLAIM_RECORDS.filter((c) => c.slug === r.slug);
      const label = cl.filter((c) => !src.get(c.sourceId)!.identifier.startsWith("mlp.") && src.get(c.sourceId)!.type !== "indian-safety-communication").length;
      const info = cl.filter((c) => src.get(c.sourceId)!.identifier.startsWith("mlp.")).length;
      const alert = cl.filter((c) => src.get(c.sourceId)!.type === "indian-safety-communication").length;
      expect([r.labelClaims, r.infoPageClaims, r.safetyAlertClaims]).toEqual([label, info, alert]);
      expect(label + info + alert).toBe(cl.length);
      expect(r.evidenceClass).toBe(label ? "label-or-leaflet-backed" : info ? "information-page-only" : alert ? "safety-alert-only" : "no-source-backed-claims");
    }
  });
  test("agrees with the dashboard on Indian labels, PvPI rows and Patient Guides", () => {
    const dash = new Map(dashboardRows().map((r) => [r.slug, r]));
    for (const r of rows) {
      expect(r.indianProductLabelClaims > 0).toBe(dash.get(r.slug)!.indianSourcesVerified > 0 && r.indianProductLabelClaims > 0);
      expect(r.safetyAlertClaims > 0).toBe(dash.get(r.slug)!.indianSafetyAlertSources > 0);
      expect(r.patientGuide).toBe(dash.get(r.slug)!.patientGuide);
    }
    expect(t.withIndianProductLabelClaims).toBe(0);
    expect(t.withGuide).toBe(12);
  });
  test("every Patient part is classified, and each medicine's part counts add up to nine", () => {
    for (const r of rows) expect(Object.values(r.partsByClass).reduce((a, b) => a + b, 0)).toBe(9);
  });
  test("the eight medicines without verified product information have no claims and visible unavailable parts", () => {
    const eight = Object.keys(SOURCE_SEARCH_LOG);
    expect(eight.sort()).toEqual(["blonanserin", "caprylidene", "cyamemazine", "flunitrazepam", "loflazepate", "perospirone", "tacrine", "zotepine"]);
    for (const slug of eight) {
      const r = rows.find((x) => x.slug === slug)!;
      expect(r.evidenceClass).toBe("no-source-backed-claims");
      expect(r.labelClaims + r.infoPageClaims + r.safetyAlertClaims).toBe(0);
      expect(r.unavailableParts).not.toBe("");
    }
    expect(t.withUnavailableParts).toBe(8);
  });
  test("no medicine counts as reviewed", () => {
    expect(t.reviewedClaims).toBe(0);
    expect(rows.every((r) => r.clinicalReview === "not reviewed")).toBe(true);
  });
  test("a stored source is not counted as support: medicines with a source but no claim are flagged, not credited", () => {
    for (const r of rows.filter((x) => x.storedSourceWithoutClaims)) {
      const withSource = SOURCE_RECORDS.filter((s) => s.slug === r.slug);
      expect(withSource.length).toBeGreaterThan(0);
    }
    expect(t.withAnyClaim).toBe(rows.filter((r) => r.evidenceClass !== "no-source-backed-claims").length);
    expect(t.withLabelClaims).toBeLessThanOrEqual(t.withAnyClaim);
  });
  test("the saved reports are exactly what the code generates now", () => {
    expect(lf("reports/medication-audit/medication-evidence-gap-register.md")).toBe(gapRegisterMarkdown(rows));
    expect(lf("reports/medication-audit/medication-evidence-gap-register.csv")).toBe(gapRegisterCsv(rows));
  });
});

describe("the register states what the Patient Guides lack", () => {
  test("none of the 12 authored guides has a label-backed claim, and the report says so", () => {
    const guides = rows.filter((r) => r.patientGuide);
    expect(guides).toHaveLength(12);
    expect(guides.every((r) => r.labelClaims === 0)).toBe(true);
    const md = lf("reports/medication-audit/medication-evidence-gap-register.md");
    expect(md).toContain("authored content with no claim-level label evidence");
    expect(md).toContain("12 medicines have an authored Patient Guide. 12 of them have **no claim that rests on a product label**");
  });
});
