/**
 * Bank assembly — authored questions → resolved, position-balanced MCQs.
 *
 * Determinism contract (pinned by tests/stahl-mcqs.test.ts):
 *   - Question ids are stable: stahl-{drugSlug}-{nn}, numbered per drug
 *     in bank order. Renumbering the bank is a migration, never a
 *     side effect.
 *   - Answer positions are assigned by a per-question seeded shuffle
 *     (seed = seedFromString(question id)) — same bank, same positions,
 *     every build, with no predictable A/B/C/D pattern across the set.
 *   - A question whose options fail to resolve, collide, or come back
 *     empty is EXCLUDED and reported via stahlBankIntegrity — assembly
 *     never fabricates fallback content, and the validation suite
 *     fails the build if any question was excluded.
 */

import { createRng, seedFromString } from "@/lib/kyp/custom-test/rng";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { anchoredDrugHref } from "@/lib/kyp/drug-course-sections";
import { resolveFact, stahlDrug, STAHL_ZONES, STAHL_TOPIC_LABELS } from "./facts";
import { STAHL_MCQ_BANK } from "./bank/index";
import type {
  AuthoredStahlMcq,
  OptionSpec,
  StahlBankStats,
  StahlDifficulty,
  StahlMcq,
  StahlMcqFilter,
  StahlQuestionType,
  StahlTopicId,
} from "./types";

/* ============================================================
   Option resolution
   ============================================================ */

function optionText(option: OptionSpec): string | null {
  if (option.kind === "fact") return resolveFact(option.ref);
  if (option.kind === "drug") return stahlDrug(option.slug)?.genericName ?? null;
  return option.text.trim().length > 0 ? option.text : null;
}

/* ============================================================
   Assembly
   ============================================================ */

export interface BankIntegrity {
  /** Questions excluded at assembly + why (must stay empty). */
  excluded: { drug: string; reason: string }[];
  /** Authored question count before exclusions. */
  authored: number;
}

function assemble(drugSlug: string, authored: AuthoredStahlMcq[]): { mcqs: StahlMcq[]; integrity: BankIntegrity } {
  const excluded: BankIntegrity["excluded"] = [];
  const mcqs: StahlMcq[] = [];
  let perDrugCounter = 0;

  for (const aq of authored) {
    const drug = stahlDrug(aq.drug);
    perDrugCounter++;
    const id = `stahl-${aq.drug}-${String(perDrugCounter).padStart(2, "0")}`;

    const fail = (reason: string) => excluded.push({ drug: aq.drug, reason: `${id}: ${reason}` });

    if (!drug) {
      fail("unknown drug slug");
      continue;
    }
    if (!drug.prescriberGuide) {
      fail("drug has no prescriberGuide record");
      continue;
    }

    // Evidence: explicit ref > the correct option's own fact.
    let evidenceRef = aq.evidenceRef;
    if (!evidenceRef && aq.correct.kind === "fact") evidenceRef = aq.correct.ref;
    if (!evidenceRef) {
      fail("drug-name answers require an explicit evidenceRef");
      continue;
    }
    const evidence = resolveFact(evidenceRef);
    if (!evidence) {
      fail(`evidence ref does not resolve (${evidenceRef.zone}[${evidenceRef.index}])`);
      continue;
    }

    // Options: correct first at authoring time, then deterministic shuffle.
    const specs = [aq.correct, ...aq.distractors];
    const resolved = specs.map(optionText);
    if (resolved.some((t) => t === null)) {
      const bad = specs
        .map((s, i) => ({ s, i }))
        .filter(({ s, i }) => resolved[i] === null)
        .map(({ s }) => (s.kind === "fact" ? `${s.ref.slug}:${s.ref.zone}[${s.ref.index}]` : s.kind))
        .join(", ");
      fail(`unresolvable option(s): ${bad}`);
      continue;
    }
    const options = resolved as string[];
    if (new Set(options).size !== 4) {
      fail("duplicate or colliding options after resolution");
      continue;
    }
    if (options.some((t) => t.trim().length === 0)) {
      fail("empty option text");
      continue;
    }

    // Deterministic, non-patterned position assignment.
    const order = [0, 1, 2, 3];
    createRng(seedFromString(id)).shuffle(order);
    const shuffled = order.map((i) => options[i]);
    const correctIndex = order.indexOf(0);

    const zone = aq.correct.kind === "fact" ? aq.correct.ref.zone : evidenceRef.zone;

    mcqs.push({
      id,
      drugSlug: drug.slug,
      drugName: drug.genericName,
      drugClass: drug.drugClass,
      drugClassLabel: drug.drugClassLabel,
      topic: aq.topic,
      difficulty: aq.difficulty,
      type: aq.type,
      question: aq.stem,
      options: shuffled,
      correctIndex,
      explanation: aq.explanation,
      evidence,
      zone,
      zoneLabel: STAHL_ZONES[zone]?.label ?? zone,
      sourceHref: anchoredDrugHref(drug.slug, "prescriber-guide"),
      tags: aq.tags ?? [],
    });
  }

  return { mcqs, integrity: { excluded, authored: authored.length } };
}

/* ============================================================
   The bank (wired in bank/index.ts)
   ============================================================ */

const assembled = assembleBank(STAHL_MCQ_BANK);

function assembleBank(bank: AuthoredStahlMcq[]) {
  // Group by drug in bank order so per-drug numbering is deterministic.
  const byDrug = new Map<string, AuthoredStahlMcq[]>();
  for (const aq of bank) {
    const list = byDrug.get(aq.drug) ?? [];
    list.push(aq);
    byDrug.set(aq.drug, list);
  }
  const mcqs: StahlMcq[] = [];
  const integrity: BankIntegrity = { excluded: [], authored: bank.length };
  for (const [slug, list] of byDrug) {
    const { mcqs: drugMcqs, integrity: drugIntegrity } = assemble(slug, list);
    mcqs.push(...drugMcqs);
    integrity.excluded.push(...drugIntegrity.excluded);
  }
  mcqs.sort((a, b) => a.id.localeCompare(b.id));
  return { mcqs, integrity };
}

/** The resolved Stahl's MCQ bank — read-only, deterministic. */
export const stahlMcqs: readonly StahlMcq[] = assembled.mcqs;

/** Assembly integrity report (validation fails on any exclusion). */
export const stahlBankIntegrity: BankIntegrity = assembled.integrity;

/* ============================================================
   Filtering + stats
   ============================================================ */

export function filterStahlMcqs(filter: StahlMcqFilter): StahlMcq[] {
  return stahlMcqs.filter((m) => {
    if (filter.drugSlugs && !filter.drugSlugs.includes(m.drugSlug)) return false;
    if (filter.classIds && !filter.classIds.includes(m.drugClass)) return false;
    if (filter.topics && !filter.topics.includes(m.topic)) return false;
    if (filter.difficulties && !filter.difficulties.includes(m.difficulty)) return false;
    if (filter.types && !filter.types.includes(m.type)) return false;
    if (filter.zones && !filter.zones.includes(m.zone)) return false;
    return true;
  });
}

export function stahlBankStats(): StahlBankStats {
  const byTopic = {} as Record<StahlTopicId, number>;
  for (const t of Object.keys(STAHL_TOPIC_LABELS) as StahlTopicId[]) byTopic[t] = 0;
  const byDifficulty = { foundational: 0, intermediate: 0, advanced: 0 } as Record<StahlDifficulty, number>;
  const byType = {
    "clinical-application": 0,
    "drug-selection": 0,
    "dosing-detail": 0,
    "class-distinction": 0,
  } as Record<StahlQuestionType, number>;
  const byClass: Record<string, number> = {};
  const positions: [number, number, number, number] = [0, 0, 0, 0];
  const drugsWithQuestions = new Set<string>();

  for (const m of stahlMcqs) {
    byTopic[m.topic]++;
    byDifficulty[m.difficulty]++;
    byType[m.type]++;
    byClass[m.drugClassLabel] = (byClass[m.drugClassLabel] ?? 0) + 1;
    positions[m.correctIndex]++;
    drugsWithQuestions.add(m.drugSlug);
  }

  const drugsWithoutQuestions = [...new Set([...drugSlugsWithPrescriberGuide()].filter((s) => !drugsWithQuestions.has(s)))].sort();

  return {
    total: stahlMcqs.length,
    drugsRepresented: drugsWithQuestions.size,
    classesRepresented: Object.keys(byClass).length,
    byTopic,
    byDifficulty,
    byType,
    byClass,
    answerPositions: positions,
    drugsWithoutQuestions,
  };
}

function drugSlugsWithPrescriberGuide(): string[] {
  return drugs.filter((d) => d.prescriberGuide).map((d) => d.slug);
}
