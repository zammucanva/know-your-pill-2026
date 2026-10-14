import { SHARED_CLAIM_RULES } from "@/lib/kyp/modes/shared-claims";
import discoveryJson from "./data/discovery.json";
import onsetScanJson from "./data/onset-scan.json";
import medguidesJson from "./data/medguides.json";
import { deriveMedGuideEvidence } from "./medguide-claims";
import { deriveFromPilDocs } from "./pil-docs";
import mlpJson from "./data/medlineplus.json";
import { INTERACTION_CLAIMS } from "./claims-interactions";
import { deriveMedlinePlusEvidence, type MlpRecordData } from "./medlineplus-claims";
import sourcesJson from "./data/sources.json";
import { CLAIM_RECORDS as HAND_CLAIMS } from "./claims";
import type { ClaimRecord, DiscoveryRecord, EvidenceClaimView, MedGuideRecord, SourceRecord } from "./types";

export * from "./types";

/** Captured US Medication Guides (verbatim sections). Regenerate with scripts/evidence/medguide.ts. */
export const MEDGUIDE_RECORDS = medguidesJson as unknown as MedGuideRecord[];
const MG = deriveMedGuideEvidence(MEDGUIDE_RECORDS);
const PIL = deriveFromPilDocs();
/** Captured MedlinePlus drug-information pages (scripts/evidence/medlineplus.ts), used only for parts with no other source. */
export const MEDLINEPLUS_RECORDS = mlpJson as unknown as MlpRecordData[];
const MLP = deriveMedlinePlusEvidence(MEDLINEPLUS_RECORDS, [...HAND_CLAIMS, ...MG.claims, ...PIL.claims]);

/** Retrieved sources (verbatim excerpts): hand-picked labels (fetch-label.ts) plus Medication Guides (medguide.ts). */
export const SOURCE_RECORDS: SourceRecord[] = [...(sourcesJson as unknown as SourceRecord[]), ...MG.sources, ...PIL.sources, ...MLP.sources];
/** Hand-authored claims (claims.ts) plus exact-quote claims derived from Medication Guides. */
export const CLAIM_RECORDS: ClaimRecord[] = [...HAND_CLAIMS, ...MG.claims, ...PIL.claims, ...MLP.claims, ...INTERACTION_CLAIMS];
/** Candidate labels found on DailyMed for every medication. Regenerate with scripts/evidence/discover.ts. */
export const DISCOVERY_RECORDS = discoveryJson as unknown as DiscoveryRecord[];

/**
 * Screening results: sentences in a medicine's US label that MAY say when an effect is seen. Candidates for a
 * person to read in context. Not claims, not verified, noisy (trial durations match too).
 */
export interface OnsetScanRecord {
  slug: string;
  status: "scanned" | "no-us-label-found" | "error";
  labelTitle?: string;
  setid?: string;
  publishedDate?: string;
  accessedAt: string;
  matches: { loinc: string; section: string; sentence: string }[];
}
export const ONSET_SCAN = onsetScanJson as unknown as OnsetScanRecord[];

export const claimsFor = (slug: string): ClaimRecord[] => CLAIM_RECORDS.filter((c) => c.slug === slug);
export const sourcesFor = (slug: string): SourceRecord[] => SOURCE_RECORDS.filter((s) => s.slug === slug);

/** Allowed hosts. A source URL outside this list is a defect until a person adds the host on purpose. */
export const ALLOWED_SOURCE_HOSTS = ["dailymed.nlm.nih.gov", "medlineplus.gov", "cdsco.gov.in", "cdscoonline.gov.in", "ipc.gov.in", "pvpi.gov.in", "www.ipc.gov.in", "labeling.pfizer.com", "www.medicines.org.uk", "www.accessdata.fda.gov", "assets.hpra.ie", "www.ndf.gov.sg", "pdf.hres.ca"];

const WORD_NUM: Record<string, string> = { one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10", twelve: "12" };
/** Layout only: list markers ("•", a lone "o" or "○") and table bars ("|") are removed and whitespace collapsed. Words are never changed. */
const norm = (t: string) => t.replace(/[•○]/g, " ").replace(/(^|\s)[o|](?=\s|$)/g, " ").replace(/\s+/g, " ").trim();
/** Numbers in a text, digits and number words alike, as digit strings. */
export function numbersIn(t: string): Set<string> {
  const out = new Set<string>();
  for (const m of t.toLowerCase().matchAll(/(\d+(?:\.\d+)?)|\b(one|two|three|four|five|six|seven|eight|nine|ten|twelve)\b/g)) out.add(m[1] ?? WORD_NUM[m[2]]);
  return out;
}

export interface EvidenceIssue {
  code: string;
  id: string;
  detail: string;
}

/**
 * Integrity of the evidence layer. It proves that every claim points at a stored excerpt, that the quoted
 * passage really is in it, and that the patient wording introduces no number the passage does not contain.
 * It does NOT prove a claim is correct, applicable to a patient, or clinically approved.
 */
export function validateEvidence(sources: SourceRecord[] = SOURCE_RECORDS, claims: ClaimRecord[] = CLAIM_RECORDS): EvidenceIssue[] {
  const issues: EvidenceIssue[] = [];
  const add = (code: string, id: string, detail: string) => issues.push({ code, id, detail });
  const ids = new Set<string>();
  const byId = new Map(sources.map((s) => [s.id, s]));
  for (const s of sources) {
    if (ids.has(s.id)) add("duplicate-source", s.id, "source id used twice");
    ids.add(s.id);
    let host = "";
    try {
      host = new URL(s.url).host;
    } catch {
      add("bad-url", s.id, s.url);
    }
    if (host && !ALLOWED_SOURCE_HOSTS.includes(host)) add("host-not-allowed", s.id, host);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.accessedAt)) add("bad-accessed-date", s.id, s.accessedAt);
    if (!s.identifier || !s.title) add("missing-identity", s.id, "identifier and title are required");
    if (s.type === "us-product-label" && s.jurisdiction !== "US") add("jurisdiction-mismatch", s.id, `${s.type} must be US`);
    if (s.type.startsWith("indian-") && s.jurisdiction !== "IN") add("jurisdiction-mismatch", s.id, `${s.type} must be IN`);
    if (!s.limitations.length) add("missing-limitations", s.id, "a source must state where it does not apply");
    if (!s.excerpts.length) add("no-excerpts", s.id, "a source with no stored text cannot support a claim");
  }
  const claimIds = new Set<string>();
  for (const c of claims) {
    if (claimIds.has(c.id)) add("duplicate-claim", c.id, "claim id used twice");
    claimIds.add(c.id);
    const s = byId.get(c.sourceId);
    if (!s) {
      add("missing-source", c.id, c.sourceId);
      continue;
    }
    if (s.slug !== c.slug) add("slug-mismatch", c.id, `${c.slug} vs ${s.slug}`);
    const ex = s.excerpts.find((e) => e.id === c.excerptId);
    if (!ex) {
      add("missing-excerpt", c.id, c.excerptId);
      continue;
    }
    if (!norm(ex.text).includes(norm(c.passage))) add("passage-not-in-source", c.id, c.passage.slice(0, 80));
    if (!c.patientWording.trim()) add("empty-wording", c.id, "");
    if (c.wordingKind === "exact-quote" && norm(c.patientWording) !== norm(c.passage)) add("quote-differs", c.id, "an exact-quote claim must equal its passage");
    const extra = [...numbersIn(c.patientWording)].filter((n) => !numbersIn(c.passage).has(n));
    if (extra.length) add("number-not-in-passage", c.id, `wording has ${extra.join(", ")} which the passage does not`);
    if (!c.applicability.length || !c.limitations.length) add("missing-applicability", c.id, "applicability and limitations are required");
    if (c.review !== "not-reviewed") add("review-claimed", c.id, "no review record exists, so review must be 'not-reviewed'");
    if (c.replacesRule && !SHARED_CLAIM_RULES.some((r) => r.id === c.replacesRule)) add("unknown-rule", c.id, c.replacesRule);
    if (s.jurisdiction !== "IN" && !c.limitations.some((l) => /US label|not an Indian|Indian/i.test(l))) add("jurisdiction-not-stated", c.id, "a non-Indian claim must say it is not an Indian label claim");
  }
  return issues;
}

/** What the Indian-source search actually found. Recorded so "no Indian source" is a stated result, not a silence. */
export const INDIAN_SOURCE_SEARCH = {
  accessedAt: "2026-10-13",
  outcome: "unresolved-for-every-medication",
  organisations: [
    {
      name: "CDSCO (Central Drugs Standard Control Organisation)",
      url: "https://cdsco.gov.in/opencms/opencms/en/Home/",
      found: 'Home page with menus named "New Drugs", "Subsequent New Drugs", "Approval", "Drugs@CDSCO", "Prescribing Information", "Alerts" and "Adverse Drug Reaction related Notifications".',
      perMedicineRecordsRetrievable: false,
      reason: "No per-medicine index was reachable by script. cdscoonline.gov.in returned no readable content without a browser session. No Indian label text was retrieved, so none is claimed.",
    },
    {
      name: "IPC / PvPI (Indian Pharmacopoeia Commission, Pharmacovigilance Programme of India)",
      url: "https://www.ipc.gov.in/",
      found: "Home page with Indian Pharmacopoeia editions, National Formulary of India, PvPI (ADR reporting, publications, orders and circulars). No page named 'Drug Safety Alerts' was found on the home page.",
      perMedicineRecordsRetrievable: false,
      reason: "Pharmacopoeial monographs and PvPI publications were not retrieved per medicine. Nothing from them is claimed.",
    },
  ],
  supplementary: {
    name: "DailyMed (US FDA labelling)",
    url: "https://dailymed.nlm.nih.gov/dailymed/",
    use: "Supplementary international evidence only. A US label is not an Indian label.",
  },
} as const;

export function evidenceViews(slug: string): EvidenceClaimView[] {
  const byId = new Map(SOURCE_RECORDS.map((s) => [s.id, s]));
  return claimsFor(slug).flatMap((claim) => {
    const s = byId.get(claim.sourceId);
    return s ? [{ claim, source: { title: s.title, url: s.url, identifier: s.identifier, publishedDate: s.publishedDate, accessedAt: s.accessedAt, organisation: s.organisation, jurisdiction: s.jurisdiction, formulation: s.formulation, type: s.type } }] : [];
  });
}
