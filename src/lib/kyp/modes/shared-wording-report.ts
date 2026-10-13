import { drugs } from "@/lib/kyp/data";
import { matchSharedClaim, SHARED_CLAIM_RULES, type SharedClaimRule } from "./shared-claims";
import { normaliseSentence, splitSentences } from "./patient-explanation";

/**
 * Content-owner worklist for shared patient wording: every standard sentence that is used across medicines,
 * where it lives, how many medicines carry it and how it is handled. Read-only: it reports, it never edits.
 */

export interface SharedWordingRow {
  id: string;
  kind: SharedClaimRule["kind"] | "unclassified";
  category: string;
  handling: "withheld from guidance" | "shown as standard wording";
  medications: number;
  slugs: string[];
  fields: string[];
  /** Original wording, name-neutral (the medicine's own name replaced by X). */
  wording: string;
  why: string;
  reviewStatus: "not reviewed";
  nextAction: string;
}

const FIELDS: [string, (d: (typeof drugs)[number]) => string[]][] = [
  ["patientExplanation", (d) => [d.patientExplanation]],
  ["patientMode.summary", (d) => [d.patientMode?.summary]],
  ["patientMode.mechanism", (d) => [d.patientMode?.mechanism]],
  ["patientMode.sideEffects", (d) => [d.patientMode?.sideEffects]],
  ["patientMode.interactions", (d) => [d.patientMode?.interactions]],
  ["patientMode.monitoring", (d) => [d.patientMode?.monitoring]],
  ["patientMode.contraindications", (d) => [d.patientMode?.contraindications]],
  ["patientEducationPoints", (d) => (Array.isArray(d.patientEducationPoints) ? d.patientEducationPoints : [])],
].map(([n, f]) => [n as string, (d: (typeof drugs)[number]) => (f as (x: (typeof drugs)[number]) => unknown[])(d).filter((x): x is string => typeof x === "string" && x.trim().length > 0)]);

export function sharedWordingReport(threshold = 20): { rows: SharedWordingRow[]; unclassified: SharedWordingRow[] } {
  const byRule = new Map<string, { slugs: Set<string>; fields: Set<string>; sample: string }>();
  const byNorm = new Map<string, { slugs: Set<string>; fields: Set<string>; sample: string }>();
  for (const d of drugs) {
    for (const [field, get] of FIELDS) {
      for (const text of get(d)) {
        for (const s of splitSentences(text)) {
          const norm = normaliseSentence(s, d);
          const e = byNorm.get(norm) ?? { slugs: new Set(), fields: new Set(), sample: norm };
          e.slugs.add(d.slug);
          e.fields.add(field);
          byNorm.set(norm, e);
          const rule = matchSharedClaim(s);
          if (rule) {
            const r = byRule.get(rule.id) ?? { slugs: new Set(), fields: new Set(), sample: norm };
            r.slugs.add(d.slug);
            r.fields.add(field);
            byRule.set(rule.id, r);
          }
        }
      }
    }
  }
  const rows: SharedWordingRow[] = SHARED_CLAIM_RULES.map((rule) => {
    const r = byRule.get(rule.id);
    return {
      id: rule.id,
      kind: rule.kind,
      category: rule.category,
      handling: rule.kind === "claim" ? "withheld from guidance" : "shown as standard wording",
      medications: r?.slugs.size ?? 0,
      slugs: [...(r?.slugs ?? [])].sort(),
      fields: [...(r?.fields ?? [])].sort(),
      wording: r?.sample ?? "",
      why: rule.why,
      reviewStatus: "not reviewed" as const,
      nextAction:
        rule.kind === "claim"
          ? "Content owner: supply medicine-specific, source-backed wording or confirm the sentence for each medicine. Until then it stays withheld."
          : "Content owner / clinical reviewer: confirm the direction is acceptable as standard advice.",
    };
  });
  const standardPurpose = /^x is a prescription medicine used to treat /;
  const unclassified: SharedWordingRow[] = [];
  for (const [norm, e] of byNorm) {
    if (e.slugs.size < threshold || standardPurpose.test(norm) || matchSharedClaim(norm)) continue;
    unclassified.push({
      id: "unclassified-shared",
      kind: "unclassified",
      category: "unclassified",
      handling: "withheld from guidance",
      medications: e.slugs.size,
      slugs: [...e.slugs].sort(),
      fields: [...e.fields].sort(),
      wording: norm,
      why: "Shared by 20 or more medicines and not yet classified.",
      reviewStatus: "not reviewed",
      nextAction: "Classify as a claim or a direction in shared-claims.ts, or supply medicine-specific wording.",
    });
  }
  return { rows, unclassified };
}
