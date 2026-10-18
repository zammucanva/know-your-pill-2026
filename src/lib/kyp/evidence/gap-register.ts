import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { CLAIM_RECORDS, SOURCE_RECORDS } from "./index";
import { formOfSource } from "./label-form";
import { dashboardRows } from "./dashboard";
import { isInfoPageClaim, isLabelClaim, isSafetyAlertClaim, PART_ORDER } from "./patient-sections";
import { classOf, type ContentClass } from "./gap-matrix";
import type { SourceRecord } from "./types";

/**
 * The medication evidence gap register: one row per registered medicine, built from the same records the page renders
 * (claims, sources, Patient Guides, part states), so its totals reconcile with the 145-medicine registry and with the
 * patient-section matrix. A source being stored is not a claim being supported: only CLAIMS are counted as evidence,
 * by the kind of document they rest on. Nothing here is clinical review.
 */
export type EvidenceClass = "label-or-leaflet-backed" | "information-page-only" | "safety-alert-only" | "no-source-backed-claims";
export const EVIDENCE_CLASSES: EvidenceClass[] = ["label-or-leaflet-backed", "information-page-only", "safety-alert-only", "no-source-backed-claims"];

export interface GapRow {
  slug: string;
  name: string;
  /** Exactly one class per medicine, by the strongest kind of document any claim rests on. */
  evidenceClass: EvidenceClass;
  patientGuide: boolean;
  labelClaims: number;
  /** Jurisdictions of the label/leaflet/monograph/formulary sources that carry claims. */
  labelJurisdictions: string;
  labelSourceKinds: string;
  infoPageClaims: number;
  safetyAlertClaims: number;
  indianProductLabelClaims: number;
  /** Strongest-first reading of what supports the medicine for an Indian reader. */
  indianStatus: "indian-product-label" | "pvpi-signal-only" | "none";
  /** Distinct forms the label sources describe (extended-release, injection, ...). */
  formsDescribed: string;
  nonPlainForm: boolean;
  /** Oldest and newest publication year among sources that carry claims ("" when no source states one). */
  oldestSourceYear: string;
  newestSourceYear: string;
  partsByClass: Record<ContentClass, number>;
  unavailableParts: string;
  genericOrTemplateParts: string;
  reviewedClaims: number;
  clinicalReview: "not reviewed";
  /** True when a source is stored for the medicine but no claim rests on it (present is not supported). */
  storedSourceWithoutClaims: boolean;
}

const yearOf = (d?: string) => {
  const m = /(19|20)\d{2}/.exec(d ?? "");
  return m ? Number(m[0]) : null;
};
const kindOf = (s: SourceRecord) => (s.identifier.startsWith("mlp.") ? "patient-information page" : s.type === "indian-safety-communication" ? "safety-alert list" : s.type === "us-product-label" ? "US label" : s.type === "indian-product-label" ? "Indian label" : s.jurisdiction === "UK" || s.jurisdiction === "IE" ? "patient leaflet" : s.jurisdiction === "SG" ? "formulary entry" : s.jurisdiction === "CA" ? "product monograph" : "other");

export function gapRows(): GapRow[] {
  const dash = new Map(dashboardRows().map((r) => [r.slug, r]));
  const srcById = new Map(SOURCE_RECORDS.map((s) => [s.id, s]));
  return drugs.map((d) => {
    const claims = CLAIM_RECORDS.filter((c) => c.slug === d.slug);
    const label = claims.filter(isLabelClaim);
    const info = claims.filter(isInfoPageClaim);
    const alert = claims.filter(isSafetyAlertClaim);
    const labelSources = [...new Set(label.map((c) => c.sourceId))].map((id) => srcById.get(id)!);
    const years = labelSources.map((s) => yearOf(s.publishedDate)).filter((y): y is number => y !== null);
    const parts = dash.get(d.slug)!.parts;
    const byClass: Record<ContentClass, number> = { "patient-guide": 0, "source-backed": 0, "information-page-only": 0, "safety-alert-only": 0, "generic-or-template": 0, unavailable: 0 };
    for (const p of PART_ORDER) byClass[classOf(parts[p])]++;
    const indianLabel = label.filter((c) => srcById.get(c.sourceId)!.jurisdiction === "IN").length;
    const claimedSourceIds = new Set(claims.map((c) => c.sourceId));
    return {
      slug: d.slug,
      name: d.genericName,
      evidenceClass: label.length ? "label-or-leaflet-backed" : info.length ? "information-page-only" : alert.length ? "safety-alert-only" : "no-source-backed-claims",
      patientGuide: !!getPatientGuide(d.slug),
      labelClaims: label.length,
      labelJurisdictions: [...new Set(labelSources.map((s) => s.jurisdiction))].sort().join("; "),
      labelSourceKinds: [...new Set(labelSources.map(kindOf))].sort().join("; "),
      infoPageClaims: info.length,
      safetyAlertClaims: alert.length,
      indianProductLabelClaims: indianLabel,
      indianStatus: indianLabel ? "indian-product-label" : alert.length ? "pvpi-signal-only" : "none",
      formsDescribed: [...new Set(labelSources.map((s) => formOfSource(s).label))].sort().join("; "),
      nonPlainForm: labelSources.some((s) => !formOfSource(s).plainOral),
      oldestSourceYear: years.length ? String(Math.min(...years)) : "",
      newestSourceYear: years.length ? String(Math.max(...years)) : "",
      partsByClass: byClass,
      unavailableParts: PART_ORDER.filter((p) => parts[p] === "unavailable").join("; "),
      genericOrTemplateParts: PART_ORDER.filter((p) => classOf(parts[p]) === "generic-or-template" && p !== "questions").join("; "),
      reviewedClaims: claims.filter((c) => c.review !== "not-reviewed").length,
      clinicalReview: "not reviewed" as const,
      storedSourceWithoutClaims: SOURCE_RECORDS.some((s) => s.slug === d.slug && !claimedSourceIds.has(s.id)),
    };
  });
}

export function gapTotals(rows: GapRow[]) {
  const n = rows.length;
  const count = (f: (r: GapRow) => boolean) => rows.filter(f).length;
  const byClass = Object.fromEntries(EVIDENCE_CLASSES.map((c) => [c, count((r) => r.evidenceClass === c)])) as Record<EvidenceClass, number>;
  return {
    medicines: n,
    byClass,
    withGuide: count((r) => r.patientGuide),
    withLabelClaims: byClass["label-or-leaflet-backed"],
    withAnyClaim: n - byClass["no-source-backed-claims"],
    withIndianProductLabelClaims: count((r) => r.indianProductLabelClaims > 0),
    withPvpiSignals: count((r) => r.safetyAlertClaims > 0),
    labelJurisdictions: Object.fromEntries(["US", "UK", "IE", "SG", "CA", "IN"].map((j) => [j, count((r) => r.labelJurisdictions.split("; ").includes(j))])),
    nonPlainFormLabels: count((r) => r.nonPlainForm),
    storedSourceWithoutClaims: count((r) => r.storedSourceWithoutClaims),
    reviewedClaims: rows.reduce((a, r) => a + r.reviewedClaims, 0),
    withUnavailableParts: count((r) => r.unavailableParts !== ""),
  };
}

export function gapRegisterMarkdown(rows: GapRow[]): string {
  const t = gapTotals(rows);
  const L: string[] = [];
  L.push("# Medication evidence gap register", "");
  L.push(`${t.medicines} registered medicines. Generated from the records the pages render (\`bun scripts/evidence/gap-register.ts\`); do not edit by hand. Only CLAIMS count as evidence, by the kind of document each rests on. A stored source is not a supported claim. Nothing here is clinical review: **${t.reviewedClaims} claims are reviewed**.`, "");
  L.push("## Each medicine in exactly one evidence class", "", "| Class | Medicines | Meaning |", "|---|---:|---|");
  const meaning: Record<EvidenceClass, string> = {
    "label-or-leaflet-backed": "at least one claim rests on a product label, leaflet, monograph or formulary entry",
    "information-page-only": "claims rest only on a MedlinePlus patient-information page (not a label)",
    "safety-alert-only": "claims rest only on Indian PvPI safety-alert rows (signals, not labels)",
    "no-source-backed-claims": "no source-backed claim; the page shows registry or standard wording and says what is unavailable",
  };
  for (const c of EVIDENCE_CLASSES) L.push(`| ${c} | ${t.byClass[c]} | ${meaning[c]} |`);
  L.push(`| **total** | **${t.medicines}** | |`, "");
  L.push("## Cross-cutting counts (not additive with the table above)", "");
  L.push(`- Medicines with an authored Patient Guide: ${t.withGuide}`);
  L.push(`- Medicines with at least one claim of any kind: ${t.withAnyClaim}`);
  L.push(`- Medicines with Indian product-label claims: **${t.withIndianProductLabelClaims}**`);
  L.push(`- Medicines with PvPI safety-signal claims: ${t.withPvpiSignals}`);
  L.push(`- Medicines whose label claims rest on a non-plain form (extended-release, injection, liquid, ...): ${t.nonPlainFormLabels}`);
  L.push(`- Label-claim jurisdictions (medicines with at least one label source from): ${Object.entries(t.labelJurisdictions).map(([j, n]) => `${j} ${n}`).join(", ")}`);
  L.push(`- Medicines with a stored source that no claim rests on: ${t.storedSourceWithoutClaims}`);
  L.push(`- Medicines with at least one unavailable Patient part: ${t.withUnavailableParts}`, "");
  L.push("## Medicines with no source-backed claim", "");
  for (const r of rows.filter((x) => x.evidenceClass === "no-source-backed-claims")) L.push(`- ${r.name} (${r.slug})${r.patientGuide ? ", has a Patient Guide" : ""}; unavailable parts: ${r.unavailableParts || "none"}`);
  const guides = rows.filter((x) => x.patientGuide);
  L.push("", "## Patient Guide medicines: authored content with no claim-level label evidence", "");
  L.push(`${guides.length} medicines have an authored Patient Guide. ${guides.filter((x) => x.labelClaims === 0).length} of them have **no claim that rests on a product label** in the evidence layer (${guides.filter((x) => x.evidenceClass === "no-source-backed-claims").length} have no claim at all; ${guides.filter((x) => x.evidenceClass === "safety-alert-only").length} have only PvPI signal rows). The guide text is authored in the application and is not traced sentence by sentence to a source here, so a qualified reviewer must check it against current Indian product information. Guides: ${guides.map((x) => x.slug).join(", ")}.`);
  const stored = rows.filter((x) => x.storedSourceWithoutClaims);
  if (stored.length) L.push("", "## Stored sources that no claim rests on", "", `${stored.map((x) => x.slug).join(", ")}: a source is stored but none of its text supports a patient statement (for example a label with no drug-interaction section). It is not counted as evidence.`);
  L.push("", "Per-medicine columns: `medication-evidence-gap-register.csv` (evidence class, claim counts by document kind, jurisdictions, forms, source years, Patient parts by content class, unavailable and generic parts, review status).", "");
  return L.join("\n");
}

export function gapRegisterCsv(rows: GapRow[]): string {
  const q = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;
  const head = ["slug", "name", "evidenceClass", "patientGuide", "labelClaims", "labelJurisdictions", "labelSourceKinds", "infoPageClaims", "safetyAlertClaims", "indianProductLabelClaims", "indianStatus", "formsDescribed", "nonPlainForm", "oldestSourceYear", "newestSourceYear", "parts_patient-guide", "parts_source-backed", "parts_information-page-only", "parts_safety-alert-only", "parts_generic-or-template", "parts_unavailable", "unavailableParts", "genericOrTemplateParts", "storedSourceWithoutClaims", "reviewedClaims", "clinicalReview"];
  const lines = rows.map((r) => [r.slug, r.name, r.evidenceClass, r.patientGuide, r.labelClaims, r.labelJurisdictions, r.labelSourceKinds, r.infoPageClaims, r.safetyAlertClaims, r.indianProductLabelClaims, r.indianStatus, r.formsDescribed, r.nonPlainForm, r.oldestSourceYear, r.newestSourceYear, r.partsByClass["patient-guide"], r.partsByClass["source-backed"], r.partsByClass["information-page-only"], r.partsByClass["safety-alert-only"], r.partsByClass["generic-or-template"], r.partsByClass.unavailable, r.unavailableParts, r.genericOrTemplateParts, r.storedSourceWithoutClaims, r.reviewedClaims, r.clinicalReview].map(q).join(","));
  return [head.map(q).join(","), ...lines].join("\n") + "\n";
}
