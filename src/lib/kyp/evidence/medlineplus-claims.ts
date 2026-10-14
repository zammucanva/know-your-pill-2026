import type { ClaimCategory, ClaimRecord, SourceRecord } from "./types";

/**
 * MedlinePlus drug-information pages (US National Library of Medicine, text from ASHP) turned into sources and
 * EXACT-QUOTE claims. Nothing is written here: each claim's wording IS the page section. The page is written
 * for patients, so it needs no restating.
 *
 * What this source is not: it is not a product label, it is not Indian, and it is not tied to one product or
 * strength. It is used only for a part of the Patient explanation that has no other source (see
 * scripts/evidence/medlineplus.ts), so a medicine with a full Medication Guide is not given a second, thinner
 * US source for the same part.
 */
export interface MlpSectionRec {
  id: string;
  heading: string;
  text: string;
}
export interface MlpRecordData {
  slug: string;
  status: "page-found" | "no-page-found" | "error";
  pageId?: string;
  title?: string;
  lastRevised?: string;
  accessedAt: string;
  footnote?: string;
  sections: MlpSectionRec[];
  note?: string;
}

const CATEGORY: Record<string, ClaimCategory> = {
  "boxed-warning": "precaution",
  why: "used-for",
  how: "how-to-take",
  precautions: "precaution",
  "special-dietary": "how-to-take",
  "if-i-forget": "how-to-take",
  "side-effects": "side-effects",
  overdose: "urgent-help",
  "other-information": "monitoring",
};

const US_ONLY = /\b(FDA|1-800|poison control|poison help|911|MedWatch)\b/i;
const OFF_MARKET = /no longer (available|on the market|sold)/i;
/** The identifier prefix that marks a MedlinePlus page (checked by source-label.ts). */
export const MLP_PREFIX = "mlp.";

export function deriveMedlinePlusEvidence(records: MlpRecordData[], other: ClaimRecord[]): { sources: SourceRecord[]; claims: ClaimRecord[] } {
  const sources: SourceRecord[] = [];
  const claims: ClaimRecord[] = [];
  for (const r of records) {
    if (r.status !== "page-found" || !r.pageId) continue;
    const have = new Set(other.filter((c) => c.slug === r.slug).map((c) => c.category));
    const wanted = r.sections.filter((s) => CATEGORY[s.id] && !have.has(CATEGORY[s.id]));
    if (!wanted.length) continue;
    const title = r.title ?? r.slug;
    const sourceId = `${r.slug}:international-patient-information:${MLP_PREFIX}${r.pageId}`;
    const offMarket = [r.footnote ?? "", ...r.sections.map((s) => s.text)].some((t) => OFF_MARKET.test(t));
    sources.push({
      id: sourceId,
      slug: r.slug,
      ingredient: r.slug,
      productTitle: `${title} (drug information page, no single product)`,
      organisation: "MedlinePlus, US National Library of Medicine (text from ASHP)",
      type: "international-patient-information",
      jurisdiction: "US",
      title: `${title}: MedlinePlus Drug Information`,
      url: `https://medlineplus.gov/druginfo/meds/${r.pageId}.html`,
      identifier: `${MLP_PREFIX}${r.pageId}`,
      publishedDate: r.lastRevised ? `${r.lastRevised.slice(6, 10)}-${r.lastRevised.slice(0, 2)}-${r.lastRevised.slice(3, 5)}` : undefined,
      accessedAt: r.accessedAt,
      excerpts: r.sections.map((s) => ({ id: `${r.slug}:mlp:${s.id}`, section: `MedlinePlus: ${s.heading}`, text: s.text, truncated: false })),
      limitations: [
        "A US drug-information page for patients. It is not a product label and not an Indian source; Indian brands, strengths, approvals and warnings may differ.",
        "It describes the medicine in general, not one product, strength or form.",
        ...(offMarket ? ["The page says this product is no longer sold in the United States. It may still be sold or prescribed elsewhere; check what you were actually given."] : []),
      ],
    });
    const perCat = new Map<string, number>();
    for (const s of wanted) {
      const category = CATEGORY[s.id];
      const n = (perCat.get(category) ?? 0) + 1;
      perCat.set(category, n);
      const limits = [
        "US drug-information page, not an Indian label. Indian approval, strengths and warnings may differ.",
        "Quoted exactly as published. Bullet and line layout follow the page.",
        "General information, not advice for any one person.",
      ];
      if (US_ONLY.test(s.text)) limits.push("This text names US-specific contacts or services (for example FDA, poison control or 911). They do not apply in India.");
      if (OFF_MARKET.test(s.text)) limits.push("The page says this product is no longer sold in the United States.");
      claims.push({
        id: `${r.slug}:${category}:mp${n}`,
        slug: r.slug,
        category,
        patientWording: s.text,
        wordingKind: "exact-quote",
        sourceId,
        excerptId: `${r.slug}:mlp:${s.id}`,
        passage: s.text,
        applicability: [`As written in the MedlinePlus page "${title}", section "${s.heading}", last revised ${r.lastRevised ?? "date not stated"}.`],
        limitations: limits,
        verification: "passage-found-in-source",
        review: "not-reviewed",
        openQuestions: ["Compare with the Indian product information for the brand the patient is actually given."],
      });
    }
  }
  return { sources, claims };
}
