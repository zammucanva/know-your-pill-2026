/**
 * Zone registry + fact resolution — the lossless bridge between
 * authored MCQs and the canonical PrescriberGuide data.
 *
 * resolveFact(ref) returns the EXACT string stored in the drug's
 * locked PrescriberGuide record, addressed by coordinates. A fact
 * reference that does not resolve (unknown slug, out-of-bounds index,
 * missing field) returns null — validation treats that as a fatal
 * authoring error, and assembly never fabricates a fallback.
 */

import { drugs } from "@/lib/kyp/data/drugs/index";
import type { Drug, PrescriberGuide } from "@/lib/kyp/data/types";
import type { FactRef, StahlTopicId, StahlTopicMeta, StahlZoneId, StahlZoneMeta } from "./types";

/* ============================================================
   Drug registry lookups (memoised — the bank resolves thousands
   of refs at module load)
   ============================================================ */

const drugBySlug = new Map<string, Drug>(drugs.map((d) => [d.slug, d]));

export function stahlDrug(slug: string): Drug | undefined {
  return drugBySlug.get(slug);
}

/* ============================================================
   Zone registry
   ============================================================ */

/** Display labels for every zone, + where it renders on the drug page. */
export const STAHL_ZONES: Record<StahlZoneId, StahlZoneMeta> = {
  onsetTimeline: { id: "onsetTimeline", label: "How Long Until It Works", anchor: "prescriber-guide" },
  ifItWorks: { id: "ifItWorks", label: "If It Works", anchor: "prescriber-guide" },
  ifItDoesNotWork: { id: "ifItDoesNotWork", label: "If It Doesn't Work", anchor: "prescriber-guide" },
  augmentationCombos: { id: "augmentationCombos", label: "Augmentation Combos", anchor: "prescriber-guide" },
  testsBeforeStarting: { id: "testsBeforeStarting", label: "Tests Before Starting", anchor: "prescriber-guide" },
  sideEffectLogic: { id: "sideEffectLogic", label: "Why Side Effects Happen", anchor: "prescriber-guide" },
  sideEffectManagement: { id: "sideEffectManagement", label: "Managing Side Effects", anchor: "prescriber-guide" },
  sideEffectRescue: { id: "sideEffectRescue", label: "Side Effect Rescue", anchor: "prescriber-guide" },
  weightGain: { id: "weightGain", label: "Weight Gain", anchor: "prescriber-guide" },
  sedation: { id: "sedation", label: "Sedation", anchor: "prescriber-guide" },
  dosing: { id: "dosing", label: "Dosing & Titration", anchor: "prescriber-guide" },
  dosageForms: { id: "dosageForms", label: "Dosage Forms", anchor: "prescriber-guide" },
  dosingTips: { id: "dosingTips", label: "Dosing Tips", anchor: "prescriber-guide" },
  overdose: { id: "overdose", label: "Overdose", anchor: "prescriber-guide" },
  longTermUse: { id: "longTermUse", label: "Long-Term Use", anchor: "prescriber-guide" },
  habitForming: { id: "habitForming", label: "Habit Forming", anchor: "prescriber-guide" },
  howToStop: { id: "howToStop", label: "How To Stop", anchor: "prescriber-guide" },
  pharmacokinetics: { id: "pharmacokinetics", label: "Pharmacokinetics", anchor: "prescriber-guide" },
  doNotUse: { id: "doNotUse", label: "Do Not Use", anchor: "prescriber-guide" },
  specialPopulations: { id: "specialPopulations", label: "Special Populations", anchor: "prescriber-guide" },
  potentialAdvantages: { id: "potentialAdvantages", label: "Potential Advantages", anchor: "prescriber-guide" },
  potentialDisadvantages: { id: "potentialDisadvantages", label: "Potential Disadvantages", anchor: "prescriber-guide" },
  primaryTargetSymptoms: { id: "primaryTargetSymptoms", label: "Primary Target Symptoms", anchor: "prescriber-guide" },
  pearls: { id: "pearls", label: "Clinical Pearls", anchor: "prescriber-guide" },
};

/* ============================================================
   Topic registry — only categories the data supports
   ============================================================ */

/**
 * Topic registry — only categories the data supports.
 *
 * Zone honesty: Stahl's `pearls` and `dosingTips` zones are genuinely
 * cross-cutting (a pearl can be about monitoring, a dosing tip can be
 * an interaction rule), so they feed every topic. The zone check
 * still catches gross mis-tagging — e.g. a `howToStop` fact tagged
 * "dosing-titration" fails.
 */
export const STAHL_TOPICS: StahlTopicMeta[] = [
  {
    id: "clinical-use",
    label: "Clinical Use",
    zones: [
      "onsetTimeline", "ifItWorks", "ifItDoesNotWork", "augmentationCombos",
      "primaryTargetSymptoms", "potentialAdvantages", "potentialDisadvantages",
      "pearls", "dosingTips",
    ],
  },
  {
    id: "dosing-titration",
    label: "Dosing & Titration",
    zones: ["dosing", "dosageForms", "dosingTips", "pearls"],
  },
  {
    id: "adverse-effects",
    label: "Adverse Effects",
    zones: [
      "sideEffectLogic", "sideEffectManagement", "sideEffectRescue",
      "weightGain", "sedation", "overdose", "dosingTips", "pearls",
    ],
  },
  {
    id: "pharmacokinetics",
    label: "Pharmacokinetics",
    zones: ["pharmacokinetics", "dosingTips", "pearls"],
  },
  {
    id: "interactions",
    label: "Interactions",
    zones: [
      "pharmacokinetics", "doNotUse", "potentialAdvantages",
      "potentialDisadvantages", "dosingTips", "pearls",
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    zones: ["testsBeforeStarting", "dosingTips", "specialPopulations", "pearls"],
  },
  {
    id: "discontinuation",
    label: "Discontinuation",
    zones: ["howToStop", "dosingTips", "pearls"],
  },
  {
    id: "special-populations",
    label: "Special Populations",
    zones: ["specialPopulations", "dosingTips", "pearls"],
  },
  {
    id: "contraindications",
    label: "Contraindications",
    zones: ["doNotUse", "dosingTips", "pearls"],
  },
  {
    id: "clinical-pearls",
    label: "Clinical Pearls",
    zones: ["pearls", "potentialAdvantages", "potentialDisadvantages"],
  },
];

export const STAHL_TOPIC_LABELS: Record<StahlTopicId, string> = Object.fromEntries(
  STAHL_TOPICS.map((t) => [t.id, t.label])
) as Record<StahlTopicId, string>;

/** Topic validity + zone compatibility check (validation input). */
export function topicAllowsZone(topic: StahlTopicId, zone: StahlZoneId): boolean {
  return STAHL_TOPICS.find((t) => t.id === topic)?.zones.includes(zone) ?? false;
}

/* ============================================================
   Fact resolution — coordinates → verbatim canonical string
   ============================================================ */

const SCALAR_ZONES: StahlZoneId[] = ["weightGain", "sedation", "longTermUse", "habitForming"];
const ARRAY_ZONES: StahlZoneId[] = [
  "onsetTimeline", "ifItWorks", "ifItDoesNotWork", "augmentationCombos",
  "testsBeforeStarting", "sideEffectLogic", "sideEffectManagement",
  "sideEffectRescue", "dosageForms", "dosingTips", "overdose", "howToStop",
  "pharmacokinetics", "doNotUse", "potentialAdvantages",
  "potentialDisadvantages", "primaryTargetSymptoms", "pearls",
];

/**
 * Resolve a fact reference to the verbatim canonical string.
 * Returns null for ANY malformed reference — never a fallback.
 */
export function resolveFact(ref: FactRef): string | null {
  const drug = drugBySlug.get(ref.slug);
  const pg: PrescriberGuide | undefined = drug?.prescriberGuide;
  if (!drug || !pg) return null;

  if (SCALAR_ZONES.includes(ref.zone)) {
    if (ref.index !== 0) return null;
    const value = pg[ref.zone] as unknown;
    return typeof value === "string" && value.length > 0 ? value : null;
  }

  if (ARRAY_ZONES.includes(ref.zone)) {
    const arr = pg[ref.zone] as unknown;
    if (!Array.isArray(arr)) return null;
    if (ref.index < 0 || ref.index >= arr.length) return null;
    if (ref.subIndex !== undefined) return null; // arrays have no sub-index
    const value = arr[ref.index];
    return typeof value === "string" ? value : null;
  }

  if (ref.zone === "dosing") {
    const row = pg.dosing[ref.index];
    if (!row) return null;
    if (ref.subIndex !== undefined) {
      const note = row.notes?.[ref.subIndex];
      return typeof note === "string" ? note : null;
    }
    if (!ref.field || ref.field === "indication") return row.indication;
    return row[ref.field];
  }

  if (ref.zone === "specialPopulations") {
    const pop = pg.specialPopulations[ref.index];
    if (!pop || ref.subIndex === undefined) return null;
    const guidance = pop.guidance[ref.subIndex];
    return typeof guidance === "string" ? guidance : null;
  }

  return null;
}

/**
 * Collect every canonical string of a drug's PrescriberGuide record
 * (used by validation: distractors must not also be true of the
 * asked-about drug — the ambiguity guard).
 */
export function drugFactUniverse(slug: string): Set<string> {
  const out = new Set<string>();
  const pg = drugBySlug.get(slug)?.prescriberGuide;
  if (!pg) return out;
  for (const zone of ARRAY_ZONES) {
    const arr = pg[zone] as unknown;
    if (Array.isArray(arr)) for (const v of arr) if (typeof v === "string") out.add(v);
  }
  for (const zone of SCALAR_ZONES) {
    const v = pg[zone] as unknown;
    if (typeof v === "string") out.add(v);
  }
  for (const row of pg.dosing) {
    out.add(row.indication);
    out.add(row.starting);
    out.add(row.target);
    out.add(row.max);
    out.add(row.titration);
    for (const note of row.notes ?? []) out.add(note);
  }
  for (const pop of pg.specialPopulations) {
    out.add(pop.population);
    for (const g of pop.guidance) out.add(g);
  }
  return out;
}
