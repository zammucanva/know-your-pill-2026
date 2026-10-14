import type { ClaimCategory, ClaimRecord, MedGuideRecord, SourceRecord } from "./types";
import { CLAIM_SOURCE_SETID } from "./claims";
import piSectionsJson from "./data/pi-sections.json";

/** Prescribing-information sections of the same label a stored Medication Guide came from (scripts/evidence/pi-sections.ts). */
export interface PiSectionsData {
  slug: string;
  setid: string;
  accessedAt: string;
  excerpts: { id: string; loinc: string; section: string; text: string; truncated: boolean }[];
}
export const PI_SECTIONS = piSectionsJson as unknown as PiSectionsData[];
/** Suffix that marks the prescribing-information record of a label (the Medication Guide record keeps the bare set id). */
export const PI_SUFFIX = ".pi";

/**
 * Turns the captured US Medication Guide sections into sources and EXACT-QUOTE claims. Nothing is written
 * here: each claim's patient wording IS the published section text (the Medication Guide is FDA-required
 * text written for patients). The only choices made in code are which heading maps to which category and
 * which limits to attach.
 *
 * These are US documents. Every claim says so, says what is not covered, and is "not-reviewed".
 */

const RULES: [RegExp, ClaimCategory][] = [
  [/watch for|prevent suicidal/i, "urgent-help"],
  [/most important information/i, "precaution"],
  [/^(?:\d+\.\s*)?what (?:is|are) (?!the (?:most important|possible)).*?(?:\?)$/i, "what-it-is"],
  [/who should not (?:take|use)|should not (?:take|use)/i, "contraindication"],
  [/tell (?:your|my) (?:health|doctor)|before (?:you )?(?:take|taking|use|using|start|starting)/i, "precaution"],
  [/how should i (?:take|use|apply|inject|give)/i, "how-to-take"],
  [/what should i avoid/i, "precaution"],
  [/side effects/i, "side-effects"],
  [/what else do i need to know|do i need to know about/i, "precaution"],
];
const SKIP = /store|ingredients|general information|disposal|manufactured|revised|distributed/i;

export function categoryOfHeading(heading: string): ClaimCategory | null {
  if (SKIP.test(heading)) return null;
  for (const [re, cat] of RULES) if (re.test(heading)) return cat;
  return null;
}

const US_ONLY = /\b(FDA|1-800|poison control|911|MedWatch)\b/;

export function deriveMedGuideEvidence(records: MedGuideRecord[], pi: PiSectionsData[] = PI_SECTIONS): { sources: SourceRecord[]; claims: ClaimRecord[] } {
  const sources: SourceRecord[] = [];
  const claims: ClaimRecord[] = [];
  for (const r of records) {
    if (r.status !== "medication-guide-found" || !r.setid || !r.labelTitle) continue;
    if (r.slug in CLAIM_SOURCE_SETID) continue; // this medicine's statements rest on a specific, hand-picked label (see claims.ts)
    const sourceId = `${r.slug}:us-product-label:${r.setid}`;
    const doc = r.guideKind === "patient-information" ? "patient information sheet" : "Medication Guide";
    const excerpts = r.sections.map((s, i) => ({ id: `${r.slug}:mg:${i}`, section: `${doc}: ${s.heading}`, text: s.text, truncated: s.truncated }));
    sources.push({
      id: sourceId,
      slug: r.slug,
      ingredient: r.slug,
      productTitle: r.labelTitle,
      formulation: r.labelTitle,
      organisation: /\[(.+)\]\s*$/.exec(r.labelTitle)?.[1] ?? "unknown labeler",
      type: "us-product-label",
      jurisdiction: "US",
      title: `${r.labelTitle} (${doc})`,
      url: `https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=${r.setid}`,
      identifier: r.setid,
      publishedDate: r.publishedDate,
      revision: r.version,
      accessedAt: r.accessedAt,
      excerpts,
      limitations: [
        `US ${doc} for this US product. It is not an Indian product label, and Indian approval, indications, strengths and warnings may differ.`,
        "Applies to the product named in this record only.",
      ],
    });
    // The same label's prescribing information is a separate source record, so a statement taken from it is never
    // shown as if it came from the Medication Guide.
    const piRec = pi.find((x) => x.slug === r.slug && x.setid === r.setid);
    if (piRec?.excerpts.length)
      sources.push({
        id: `${r.slug}:us-product-label:${r.setid}${PI_SUFFIX}`,
        slug: r.slug,
        ingredient: r.slug,
        productTitle: r.labelTitle,
        formulation: r.labelTitle,
        organisation: /\[(.+)\]\s*$/.exec(r.labelTitle)?.[1] ?? "unknown labeler",
        type: "us-product-label",
        jurisdiction: "US",
        title: `${r.labelTitle} (prescribing information)`,
        url: `https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=${r.setid}`,
        identifier: `${r.setid}${PI_SUFFIX}`,
        publishedDate: r.publishedDate,
        revision: r.version,
        accessedAt: piRec.accessedAt,
        excerpts: piRec.excerpts.map((e) => ({ id: e.id, section: `Prescribing information: ${e.section}`, text: e.text, truncated: e.truncated })),
        limitations: [
          "US prescribing information for this US product, written for clinicians. It is not an Indian product label, and Indian approval, indications, strengths and warnings may differ.",
          "Applies to the product named in this record only.",
        ],
      });
    const perCat = new Map<string, number>();
    r.sections.forEach((s, i) => {
      const category = categoryOfHeading(s.heading);
      if (!category) return;
      const key = `${r.slug}:${category}`;
      const n = (perCat.get(key) ?? 0) + 1;
      perCat.set(key, n);
      const limits = [
        `US ${doc} only: Indian approval, strengths and warnings may differ.`,
        "Quoted exactly as published. Spacing and list layout follow the source document and may contain small typographical artefacts.",
        "General information, not advice for any one person.",
      ];
      if (US_ONLY.test(s.text)) limits.push("This text names US-specific contacts or services (for example FDA, poison control or 911). They do not apply in India.");
      if (s.truncated) limits.push("Only the first part of this section is shown (cut at the end of a sentence).");
      claims.push({
        id: `${key}:mg${n}`,
        slug: r.slug,
        category,
        patientWording: s.text,
        wordingKind: "exact-quote",
        sourceId,
        excerptId: `${r.slug}:mg:${i}`,
        passage: s.text,
        applicability: [`As written in the US ${doc} for: ${r.labelTitle}. Heading in the guide: "${s.heading}"`],
        limitations: limits,
        verification: "passage-found-in-source",
        review: "not-reviewed",
        openQuestions: ["Compare with the Indian product information for the brand the patient is actually given."],
      });
    });
  }
  return { sources, claims };
}
