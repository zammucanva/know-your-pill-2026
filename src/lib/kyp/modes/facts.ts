import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import { BLOCK_CONTRACTS, CATEGORY_MODES, categoryOfSource, type FactCategory } from "./contracts";
import { isTemplateText } from "./patient-interactions";
import { MODE_ORDER } from "./specs";
import type { BlockKind, LensBlock, ModeId, ModeLensSet, Sourced } from "./types";
import { readPath, sourcedIn } from "./validate";

/**
 * Canonical fact references.
 *
 * A Fact is an ADDRESSABLE VIEW of a value that already lives in the canonical
 * registry (or the Patient Guide / authored MCQ bank). It is not a second copy
 * and not a second registry: the value is read at the path, and lens blocks keep
 * only that path plus the verbatim text.
 *
 * Provenance is only what the registry actually records. It is drug-level (source
 * notes, reference lists, a `lastReviewed` field); per-fact sources do not exist,
 * and this layer does not pretend they do. `lastReviewed` is an authored field,
 * not a recorded qualified review.
 */

export type FactStatus = "present" | "missing" | "unverified" | "review-required";
/** Review state of a fact. `approved` is only possible through a ReviewRecord (none exist yet). */
export type FactReview = "unreviewed" | "flagged" | "approved";

export interface FactProvenance {
  level: "drug" | "authored-bank";
  /** The drug's `reviewers` field: free-text source notes ("Compiled from ..."), not reviewer identities. */
  sourceNotes: string[];
  referenceCount: number;
  /** The authored `lastReviewed` field, verbatim; NOT evidence of a qualified clinical review. */
  lastReviewedField: string | null;
}

export interface Fact {
  /** Stable: `<slug>#<canonical path>`. */
  id: string;
  slug: string;
  path: string;
  category: FactCategory;
  /** The canonical value (verbatim), or null when the slot is missing. */
  value: string | null;
  status: FactStatus;
  review: FactReview;
  reviewReasons: string[];
  provenance: FactProvenance;
  /** Modes allowed to present this category of fact. */
  usableIn: readonly ModeId[];
  /** Modes whose lens actually presents it. */
  usedIn: ModeId[];
}

/** A recorded qualified review. None exist; approval cannot be inferred from anything else. */
export interface ReviewRecord {
  slug: string;
  /** Canonical path, or "*" for the whole medication. */
  path: string;
  reviewer: string;
  qualification: string;
  date: string;
  sources: string[];
}
export const REVIEW_RECORDS: readonly ReviewRecord[] = [];

/** An explicit flag asking a qualified reviewer to read a fact (see the review notes). */
export interface ReviewFlag {
  slug: string;
  path: string;
  reason: string;
}
export const REVIEW_FLAGS: readonly ReviewFlag[] = [
  {
    slug: "sertraline",
    path: "patientGuide.keyReminders[3]",
    reason:
      "Unqualified 'It is not addictive' beside qualified wording elsewhere on the page (reports/medication-audit/four-mode/review-notes-sertraline-fluoxetine.md, section 2).",
  },
];

/** Statements about dependence/withdrawal/stopping always need a qualified reader. */
const SENSITIVE = /addict|habit.forming|withdraw|dependen|discontinuation|abrupt|taper|craving|misuse|tolerance/i;
export function sensitiveReason(text: string): string | null {
  return SENSITIVE.test(text) ? "mentions addiction, dependence, withdrawal or stopping" : null;
}

export function provenanceOf(drug: Drug, level: FactProvenance["level"] = "drug"): FactProvenance {
  const refs = drug.references as unknown as Record<string, unknown[]> | undefined;
  return {
    level,
    sourceNotes: [...(drug.reviewers ?? [])],
    referenceCount: refs ? Object.values(refs).reduce((n, a) => n + (Array.isArray(a) ? a.length : 0), 0) : 0,
    lastReviewedField: drug.lastReviewed ?? null,
  };
}

export const factId = (slug: string, path: string) => `${slug}#${path}`;

function judge(slug: string, path: string, value: string | null, prov: FactProvenance): Pick<Fact, "status" | "review" | "reviewReasons"> {
  const reasons: string[] = [];
  const flag = REVIEW_FLAGS.find((f) => f.slug === slug && f.path === path);
  if (flag) reasons.push(flag.reason);
  const sens = value ? sensitiveReason(value) : null;
  if (sens) reasons.push(sens);
  if (value && path === "patientMode.interactions" && isTemplateText(value))
    reasons.push("standard template wording shared by many medicines, including a general alcohol sentence that is not specific to this medicine");
  const record = REVIEW_RECORDS.some((r) => r.slug === slug && (r.path === path || r.path === "*"));
  const review: FactReview = record ? "approved" : flag ? "flagged" : "unreviewed";
  let status: FactStatus = "present";
  if (value === null) status = "missing";
  else if (!prov.sourceNotes.length && !prov.referenceCount) status = "unverified";
  else if (reasons.length && !record) status = "review-required";
  return { status, review, reviewReasons: reasons };
}

export interface FactSet {
  /** Facts a built block presents (deduplicated by id). */
  used: Fact[];
  /** Contract slots the registry could not fill. */
  missing: Fact[];
}

export interface FactInputs {
  drug: Drug;
  patientGuide?: PatientGuide;
  /** Authored MCQ ids for this drug (each becomes a `mcq` fact). */
  mcqIds?: readonly string[];
}

/**
 * Resolves every fact the lens set presents, and every contract slot that could
 * not be filled. Does not read anything except the registry values at the paths.
 */
export function collectFacts(lenses: ModeLensSet, inputs: FactInputs): FactSet {
  const { drug, patientGuide } = inputs;
  const slug = drug.slug;
  const root = { ...drug, patientGuide } as unknown;
  const prov = provenanceOf(drug);
  const byId = new Map<string, Fact>();

  const upsert = (path: string, value: string | null, mode: ModeId | null, provenance = prov): Fact => {
    const id = factId(slug, path);
    let f = byId.get(id);
    if (!f) {
      const category = categoryOfSource(path);
      f = { id, slug, path, category, value, ...judge(slug, path, value, provenance), provenance, usableIn: CATEGORY_MODES[category], usedIn: [] };
      byId.set(id, f);
    }
    if (mode && !f.usedIn.includes(mode)) f.usedIn.push(mode);
    return f;
  };

  const bankProv = provenanceOf(drug, "authored-bank");
  for (const mode of MODE_ORDER) {
    for (const block of lenses[mode].blocks) {
      for (const s of sourcedIn(block as LensBlock)) upsert(s.source, s.text, mode);
      if (block.kind === "mcq-drill")
        for (const q of block.questions) upsert(q.source, q.stem, mode, bankProv);
    }
  }

  // Contract slots the registry could not fill become explicit missing facts.
  const missing: Fact[] = [];
  const mcqCount = inputs.mcqIds?.length ?? 0;
  for (const kind of Object.keys(BLOCK_CONTRACTS) as BlockKind[]) {
    const c = BLOCK_CONTRACTS[kind];
    let optionalFilled = 0;
    for (const slot of c.slots) {
      let filled = false;
      if (slot.anyOf[0] === "stahl:mcq") filled = mcqCount > 0;
      else
        filled = slot.anyOf.some((p) => {
          const v = readPath(root, p);
          return typeof v === "string" && v.trim().length > 0;
        });
      if (slot.optional) {
        if (filled) optionalFilled++;
        continue;
      }
      if (!filled) {
        const path = slot.anyOf[0];
        const list = (drug as unknown as Record<string, unknown>)[path.split("[")[0]];
        const note =
          path.startsWith("interactions[") && Array.isArray(list)
            ? `${c.kind}: the registry records an EMPTY interaction list (none listed), which is not a claim that none exist`
            : `${c.kind}: ${slot.label} not in the registry`;
        const category = categoryOfSource(path);
        const jid = factId(slug, path);
        missing.push({
          id: jid, slug, path, category, value: null, status: "missing", review: "unreviewed",
          reviewReasons: [note], provenance: prov,
          usableIn: CATEGORY_MODES[category], usedIn: [],
        });
      }
    }
    if (c.minOptional && optionalFilled < c.minOptional)
      missing.push({
        id: factId(slug, `${kind}:optional-slots`), slug, path: `${kind}:optional-slots`, category: "mechanism", value: null,
        status: "missing", review: "unreviewed",
        reviewReasons: [`${kind}: ${optionalFilled} of ${c.slots.length} slots filled, ${c.minOptional} needed`],
        provenance: prov, usableIn: [], usedIn: [],
      });
  }
  return { used: [...byId.values()], missing };
}

export type { Sourced };
