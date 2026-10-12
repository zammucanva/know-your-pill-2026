import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import { BLOCK_CONTRACTS, distinctiveInteractions, type InteractionKind } from "./contracts";
import { buildModeLenses, classifyViva } from "./build";
import { findContradictions, type Contradiction } from "./consistency";
import { collectFacts } from "./facts";
import { MODE_ORDER } from "./specs";
import type { BlockKind, ModeId } from "./types";
import { validateLensSet, type LensIssue } from "./validate";

/**
 * One drug's validation, in three SEPARATE layers:
 *   mechanical   - are the contract blocks built, are references valid, is a distinctive interaction offered
 *   quality      - duplicated sentences, possible contradictions, viva content needing review
 *   clinical     - review-required / flagged / approved facts (approval only via a recorded review)
 * A mechanical pass is not content quality, and neither is clinical approval.
 */

export interface DrugModeReport {
  built: BlockKind[];
  unavailable: { kind: BlockKind; reason: string }[];
  interactions: InteractionKind[];
  distinctive: InteractionKind[];
  factsUsed: number;
}

export interface DrugValidation {
  slug: string;
  modes: Record<ModeId, DrugModeReport>;
  mechanical: {
    blocksBuilt: number;
    blocksExpected: number;
    unavailableBlocks: number;
    missingFacts: number;
    invalidReferences: number;
    modesWithoutDistinctiveInteraction: ModeId[];
    ok: boolean;
  };
  quality: {
    duplicateAcrossFields: number;
    possibleContradictions: Contradiction[];
    vivaNeedsReview: number;
    vivaStatements: number;
    sharedFactsAcrossModes: number;
    factsPerMode: Record<ModeId, number>;
  };
  /** Interaction data state: absent (field missing) is reported separately from empty (explicit empty list). */
  interactions: {
    state: "absent" | "empty" | "listed";
    records: number;
    incomplete: number;
    bySeverity: Record<string, number>;
  };
  clinical: { factsReviewRequired: number; factsFlagged: number; factsApproved: number; factsUnverified: number };
  issues: LensIssue[];
}

export function validateDrug(
  drug: Drug,
  patientGuide: PatientGuide | undefined,
  mcqIds: readonly string[],
  mcqs: Parameters<typeof buildModeLenses>[0]["mcqs"],
  allNames: readonly string[]
): DrugValidation {
  const lenses = buildModeLenses({ drug, patientGuide, mcqs });
  const issues = validateLensSet(lenses, drug, patientGuide);
  const facts = collectFacts(lenses, { drug, patientGuide, mcqIds });
  const contradictions = findContradictions(lenses, drug, allNames);

  const builtByMode = Object.fromEntries(MODE_ORDER.map((m) => [m, lenses[m].blocks.map((b) => b.kind)])) as Record<ModeId, BlockKind[]>;
  const distinct = distinctiveInteractions(builtByMode);
  const modes = Object.fromEntries(
    MODE_ORDER.map((m) => [
      m,
      {
        built: builtByMode[m],
        unavailable: lenses[m].unavailable,
        interactions: [...new Set(builtByMode[m].map((k) => BLOCK_CONTRACTS[k].interaction))],
        distinctive: distinct[m],
        factsUsed: facts.used.filter((f) => f.usedIn.includes(m)).length,
      },
    ])
  ) as Record<ModeId, DrugModeReport>;

  const blocksBuilt = MODE_ORDER.reduce((n, m) => n + builtByMode[m].length, 0);
  const blocksExpected = Object.keys(BLOCK_CONTRACTS).length;
  const invalidReferences = issues.filter((i) => ["source-missing", "text-differs-from-source", "fact-not-allowed-in-mode", "conflicting-text-for-source"].includes(i.code)).length;
  const noDistinct = MODE_ORDER.filter((m) => modes[m].distinctive.length === 0);
  const unavailableBlocks = MODE_ORDER.reduce((n, m) => n + lenses[m].unavailable.length, 0);

  const ib = lenses.resident.blocks.find((b) => b.kind === "interactions");
  const interactions: DrugValidation["interactions"] =
    ib && ib.kind === "interactions"
      ? {
          state: ib.state,
          records: ib.items.length,
          incomplete: ib.incomplete,
          bySeverity: ib.items.reduce<Record<string, number>>((a, i) => ((a[i.severity] = (a[i.severity] ?? 0) + 1), a), {}),
        }
      : { state: "absent", records: 0, incomplete: 0, bySeverity: {} };
  const viva = (drug.examLens?.mbbs?.viva ?? []).map(classifyViva);
  return {
    slug: drug.slug,
    modes,
    mechanical: {
      blocksBuilt,
      blocksExpected,
      unavailableBlocks,
      missingFacts: facts.missing.length,
      invalidReferences,
      modesWithoutDistinctiveInteraction: noDistinct,
      ok: unavailableBlocks === 0 && invalidReferences === 0 && noDistinct.length === 0,
    },
    quality: {
      duplicateAcrossFields: issues.filter((i) => i.code === "duplicate-across-fields").length,
      possibleContradictions: contradictions,
      vivaNeedsReview: viva.filter((v) => v.type === "needs-review").length,
      vivaStatements: viva.filter((v) => v.type === "statement").length,
      sharedFactsAcrossModes: facts.used.filter((f) => f.usedIn.length > 1).length,
      factsPerMode: Object.fromEntries(MODE_ORDER.map((m) => [m, modes[m].factsUsed])) as Record<ModeId, number>,
    },
    interactions,
    clinical: {
      factsReviewRequired: facts.used.filter((f) => f.status === "review-required").length,
      factsFlagged: facts.used.filter((f) => f.review === "flagged").length,
      factsApproved: facts.used.filter((f) => f.review === "approved").length,
      factsUnverified: facts.used.filter((f) => f.status === "unverified").length,
    },
    issues,
  };
}
