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

/* ============================================================
   Visual learning structures (added in Sprint 3 polish)
   ============================================================ */

/** A single flow node in a visual mechanism diagram. */
export interface MechanismFlowNode {
  id: string;
  label: string;
  /** Short subtitle / role description */
  sublabel?: string;
  /** Visual variant — controls colour */
  variant: "input" | "process" | "target" | "output" | "inhibit";
}

/** A directed edge between two flow nodes. */
export interface MechanismFlowEdge {
  from: string;
  to: string;
  label?: string;
  /** "inhibit" renders a T-bar instead of an arrow */
  type?: "stimulate" | "inhibit";
}

/** Complete visual flow definition for the mechanism section. */
export interface MechanismFlow {
  nodes: MechanismFlowNode[];
  edges: MechanismFlowEdge[];
  /** Optional caption rendered below the diagram */
  caption?: string;
}

/** A real clinical case (not a placeholder). */
export interface ClinicalCase {
  title: string;
  /** One-line presentation summary */
  presentation: string;
  /** Patient demographics + presenting complaint */
  history: string;
  /** Examination findings */
  examination: string;
  /** Working diagnosis + differential */
  diagnosis: string;
  /** Why this drug was chosen */
  rationale: string;
  /** What was prescribed + titration */
  management: string;
  /** Follow-up + outcome */
  outcome: string;
  /** 2-3 teaching points the case illustrates */
  teachingPoints: string[];
}

/** Comparison row in a drug-vs-drug comparison table. */
export interface DrugComparisonRow {
  /** Attribute name — e.g. "Half-life", "Onset", "Sexual dysfunction" */
  attribute: string;
  /** Value for the primary drug (the page subject) */
  primaryValue: string;
  /** Values for each comparison drug, keyed by drug name */
  comparisons: { drug: string; value: string }[];
}

/** A complete comparison table. */
export interface DrugComparisonTable {
  title: string;
  /** The primary drug this table centres on (usually the page subject) */
  primaryDrug: string;
  rows: DrugComparisonRow[];
  /** Educational summary — "When to choose which" */
  takeaway: string;
}

/** A memory trick / mnemonic for exam preparation. */
export interface MemoryTrick {
  title: string;
  /** The mnemonic or trick itself */
  trick: string;
  /** What it helps you remember */
  remembers: string;
}

/** Categorised references — grouped by source type. */
export interface CategorisedReferences {
  guidelines: DrugReference[];
  textbooks: DrugReference[];
  trials: DrugReference[];
  reviews: DrugReference[];
  patientResources: DrugReference[];
}

/** Patient-mode content — simplified language for the same data. */
export interface PatientModeContent {
  /** Patient-friendly tagline (shown in hero when patient mode is on) */
  tagline: string;
  /** Patient-friendly summary */
  summary: string;
  /** Patient-friendly mechanism explanation */
  mechanism: string;
  /** Patient-friendly side effects overview */
  sideEffects: string;
  /** Patient-friendly monitoring overview */
  monitoring: string;
  /** Patient-friendly contraindications overview */
  contraindications: string;
  /** Patient-friendly interactions overview */
  interactions: string;
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

  /* ---- Learning objectives (NEW) ---- */
  learningObjectives: string[];

  /* ---- Mechanism ---- */
  mechanism: DrugMechanism;
  /** Visual flow diagram for the mechanism section (NEW) */
  mechanismFlow: MechanismFlow;

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
  /** Mnemonics and memory tricks for exam preparation (NEW) */
  memoryTricks: MemoryTrick[];
  /** One-page revision summary (NEW) */
  highYieldSummary: string[];

  /* ---- Clinical case (NEW) ---- */
  clinicalCase: ClinicalCase;

  /* ---- Comparison tables (NEW) ---- */
  comparisonTables: DrugComparisonTable[];

  /* ---- Timeline ---- */
  timeline: TimelineEvent[];

  /* ---- FAQ ---- */
  faqs: FAQItem[];

  /* ---- References & related ---- */
  /** Categorised references (NEW — replaces flat references array) */
  references: CategorisedReferences;
  relatedDrugs: DrugRelatedDrug[];
  relatedConditions: DrugRelatedCondition[];

  /* ---- Knowledge graph ---- */
  knowledgeGraph: KnowledgeGraphNode[];

  /* ---- Patient mode (NEW) ---- */
  patientMode: PatientModeContent;

  /* ---- Metadata ---- */
  /** ISO date string — last clinical review */
  lastReviewed: string;
  /** Optional list of reviewers / sources consulted */
  reviewers?: string[];
}
