/**
 * Shared types used across the KYP data layer.
 * Every component consumes these — never duplicate a type inline.
 */

import type { LucideIcon } from "lucide-react";

/**
 * Drug class identifiers.
 *
 * The first 8 (`depressant`..`ssri`) describe substances of abuse and
 * major medication classes — they have stable accent colors defined in
 * `classes.ts` and CSS variables in `globals.css`.
 *
 * The remaining IDs cover other medication classes that don't need a
 * distinct accent color (they fall back to the brand teal).
 */
export type DrugClassId =
  // Substances of abuse (with accent colors)
  | "depressant"
  | "stimulant"
  | "hallucinogen"
  | "opioid"
  | "cannabinoid"
  | "dissociative"
  | "inhalant"
  // Medication classes
  | "ssri"
  | "snri"
  | "tca"
  | "maoi"
  | "atypical-antipsychotic"
  | "typical-antipsychotic"
  | "mood-stabiliser"
  | "benzodiazepine"
  | "non-benzodiazepine-hypnotic";

export interface DrugClass {
  id: DrugClassId;
  name: string;
  shortName: string;
  description: string;
  neurotransmitter: string;
  /** CSS var name without the leading `--`. Resolves to a color. */
  accentVar: string;
  /** Tailwind text color class for the accent (e.g. "text-[var(--class-depressant)]") */
  accentClass: string;
}

export interface Substance {
  id: string;
  name: string;
  slug: string;
  drugClass: DrugClassId;
  description: string;
  neurotransmitter: string;
  href: string;
}

export interface MedicationClass {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  chips: string[];
  featured?: boolean;
  comingSoon?: boolean;
  icon: LucideIcon;
}

export interface Category {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface BrainRegion {
  id: string;
  name: string;
  functions: string[];
  disorders: string[];
  affectedDrugs: string[];
  neurotransmitter: string;
}

export interface Pathway {
  id: string;
  name: string;
  origin: string;
  termination: string;
  neurotransmitter: string;
  function: string;
  relatedDrugs: string[];
  clinicalRelevance: string;
}

export interface SideEffect {
  id: string;
  name: string;
  description: string;
  receptor: string;
  pathway: string;
  drugs: string[];
  management: string;
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  phase: "onset" | "peak" | "duration" | "recovery";
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface EmergencyContact {
  label: string;
  number: string;
  description: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SearchableItem {
  id: string;
  title: string;
  type: "drug" | "class" | "neurotransmitter" | "side-effect" | "brain-region" | "pathway" | "clinical" | "patient-guide";
  description: string;
  href: string;
  keywords: string[];
}

/* ============================================================
   Canonical Drug Schema
   ------------------------------------------------------------
   The typed model every drug page consumes. Designed to support
   every psychiatric medication without breaking changes.

   Add new optional fields at the bottom; never remove or rename
   existing fields once a drug depends on them.
   ============================================================ */

export interface DrugIndication {
  /** Condition name, e.g. "Major Depressive Disorder" */
  name: string;
  /** FDA-approved vs off-label */
  status: "fda-approved" | "off-label" | "guideline";
  /** Patient-friendly description */
  description: string;
  /** Typical age group if restricted (e.g. "≥6 years") */
  ageGroup?: string;
}

export interface DrugContraindication {
  name: string;
  /** Absolute = never combine; Relative = use with caution */
  severity: "absolute" | "relative";
  rationale: string;
}

export interface DrugWarning {
  title: string;
  /** Boxed warning text — quoted/paraphrased from FDA label */
  text: string;
}

export interface DrugSideEffectEntry {
  name: string;
  /** Approximate incidence band — kept as string so we never lie with false precision */
  frequency: "very-common" | "common" | "uncommon" | "rare" | "unknown";
  severity: "mild" | "moderate" | "severe" | "life-threatening";
  description: string;
  /** Step-by-step management, if applicable */
  management?: string;
  /** Reference to a side effect in the global side-effects registry */
  sideEffectId?: string;
}

export interface DrugMonitoringParameter {
  parameter: string;
  /** When to check — e.g. "Baseline, then every 6 months" */
  frequency: string;
  rationale: string;
}

export interface DrugInteraction {
  /** The interacting drug or drug class */
  drug: string;
  severity: "contraindicated" | "major" | "moderate" | "minor";
  mechanism: string;
  /** What to do — e.g. "Avoid combination", "Monitor INR" */
  action: string;
}

export interface DrugPregnancyInfo {
  /** Former FDA pregnancy category (A/B/C/D/X) — kept for legacy reference */
  legacyCategory?: string;
  /** Plain-language summary */
  summary: string;
  /** Lactation-specific note */
  lactation: string;
}

export interface DrugReference {
  /** Source name, e.g. "Katzung Basic & Clinical Pharmacology 16e" */
  source: string;
  /** Section or chapter */
  section?: string;
  /** Optional URL */
  url?: string;
}

export interface DrugRelatedDrug {
  name: string;
  /** Slug if a KYP page exists, otherwise null */
  slug?: string;
  drugClass: string;
  /** Why this drug is related — e.g. "Same class (SSRI)" or "Alternative for hepatic impairment" */
  relationship: string;
}

export interface DrugRelatedCondition {
  name: string;
  /** How this drug fits the condition — primary treatment, alternative, etc. */
  relationship: "primary" | "alternative" | "adjunct" | "off-label";
  /** Optional KYP page or external href */
  href?: string;
}

export interface KnowledgeGraphNode {
  label: string;
  type: "drug" | "class" | "neurotransmitter" | "brain-region" | "pathway" | "condition" | "side-effect" | "clinical-case" | "patient-guide";
  /** Clickable destination — KYP page or in-page anchor */
  href: string;
  /** Optional short note shown under the node */
  note?: string;
}

export interface DrugMechanism {
  /** One-sentence summary for hero / cards */
  summary: string;
  /** The molecular target — e.g. "SERT (serotonin transporter)" */
  molecularTarget: string;
  /** Net physiological effect */
  effect: string;
  /** Ordered steps of the mechanism (used by the mechanism section) */
  steps: string[];
  /** Pharmacokinetics summary */
  pharmacokinetics: string;
  /** Half-life (with units) */
  halfLife: string;
  /** Active metabolite name + note, if any */
  activeMetabolite?: string;
  /** Hepatic enzyme metabolism — e.g. "CYP2D6, CYP2B6" */
  metabolism: string;
  /** Excretion route */
  excretion: string;
}

export interface Drug {
  /* ---- Identity ---- */
  slug: string;
  genericName: string;
  brandNames: string[];
  drugClass: DrugClassId;
  /** Short label shown in cards & badges — e.g. "SSRI" */
  drugClassLabel: string;
  /** Full name — e.g. "Selective Serotonin Reuptake Inhibitor" */
  drugClassFullName: string;

  /* ---- Hero / summary ---- */
  tagline: string;
  summary: string;

  /* ---- Mechanism ---- */
  mechanism: DrugMechanism;

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: string[];
  receptors: string[];
  /** Brain region IDs from the global brainRegions registry */
  brainRegionIds: string[];
  /** Pathway IDs from the global pathways registry */
  pathwayIds: string[];

  /* ---- Clinical ---- */
  indications: DrugIndication[];
  contraindications: DrugContraindication[];
  blackBoxWarnings: DrugWarning[];

  /* ---- Side effects ---- */
  commonSideEffects: DrugSideEffectEntry[];
  seriousSideEffects: DrugSideEffectEntry[];

  /* ---- Safety / monitoring ---- */
  monitoring: DrugMonitoringParameter[];
  interactions: DrugInteraction[];
  pregnancy: DrugPregnancyInfo;
  renalAdjustment: string;
  hepaticAdjustment: string;

  /* ---- Education ---- */
  patientExplanation: string;
  patientEducationPoints: string[];
  clinicalPearls: string[];
  examPearls: string[];

  /* ---- Timeline ---- */
  timeline: TimelineEvent[];

  /* ---- FAQ ---- */
  faqs: FAQItem[];

  /* ---- References & related ---- */
  references: DrugReference[];
  relatedDrugs: DrugRelatedDrug[];
  relatedConditions: DrugRelatedCondition[];

  /* ---- Knowledge graph ---- */
  knowledgeGraph: KnowledgeGraphNode[];

  /* ---- Metadata ---- */
  /** ISO date string — last clinical review */
  lastReviewed: string;
  /** Optional list of reviewers / sources consulted */
  reviewers?: string[];
}
