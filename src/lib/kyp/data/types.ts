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
  /** Custom artwork path (in /public/artwork/), if available */
  artwork?: string;
  /** Alt text for the artwork */
  artworkAlt?: string;
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
  /** Former FDA pregnancy category (A/B/C/D/X) — DEPRECATED, kept for legacy reference only. Do not center clinical decisions on this. */
  legacyCategory?: string;
  /** Contemporary evidence-based assessment (replaces the deprecated letter category) */
  evidenceBasedSummary?: string;
  /** Indian practice note for pregnancy */
  indianPracticeNote?: string;
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

/* ============================================================
   India-first extensions (Phase 0)
   ------------------------------------------------------------
   KYP is an India-first, evidence-first medical education platform.
   These fields add Indian clinical practice context without
   compromising international scientific accuracy.

   Principle: When international and Indian guidance differ,
   both are presented clearly and labeled by source. No invented
   "Indian clinical practice" when no formal guideline exists.
   ============================================================ */

/** Indian prescription schedule categories per CDSCO. */
export type PrescriptionSchedule =
  | "Schedule H"
  | "Schedule H1"
  | "Schedule X"
  | "OTC"
  | "Prescription Only";

/** Indian brand name entry — sourced from CDSCO/CIMS/MIMS. */
export interface IndianBrand {
  /** Brand name as sold in India, e.g. "Serta" */
  name: string;
  /** Manufacturer (optional) */
  manufacturer?: string;
  /** Common strengths available, e.g. "25mg, 50mg, 100mg" */
  strengths?: string;
  /** Note — e.g. "among the most commonly prescribed in India" */
  note?: string;
}

/** Cost category — relative to Indian generic market. */
export type CostCategory = "low" | "moderate" | "high";

/** Availability in Indian healthcare settings. */
export interface IndianAvailability {
  /** Available in government hospitals? */
  governmentHospitals: boolean;
  /** Available in private pharmacies? */
  privatePharmacies: boolean;
  /** Urban availability */
  urban: boolean;
  /** Rural availability */
  rural: boolean;
  /** Additional notes */
  note?: string;
}

/** Indian clinical practice information. */
export interface IndianPracticeInfo {
  /** Prescription schedule (Schedule H, H1, X, OTC) */
  prescriptionStatus: PrescriptionSchedule;
  /** Common Indian brand names (3-8, sourced from CDSCO/CIMS/MIMS) */
  brands: IndianBrand[];
  /** Typical dose ranges used in Indian practice */
  typicalDoses: string;
  /** Common prescribing scenarios in India */
  prescribingScenarios: string[];
  /** Availability across Indian healthcare settings */
  availability: IndianAvailability;
  /** Cost category relative to Indian market */
  costCategory: CostCategory;
  /** Cost note — always includes "Cost varies by manufacturer and region" */
  costNote: string;
  /** Indian monitoring approach — how monitoring is commonly done in Indian practice */
  monitoring: string;
  /** India-specific patient counselling points */
  patientCounselling: string[];
}

/** NMC CBME competency mapping. */
export interface CBMEMapping {
  /** Subject, e.g. "Pharmacology" or "Psychiatry" */
  subject: string;
  /** MBBS year, e.g. "Second Professional" or "Final Professional" */
  mbbsYear: string;
  /** Relevant NMC competency codes — must be actual codes from the CBME curriculum */
  competencyCodes: string[];
  /** Human-readable competency descriptions matching the codes */
  competencyDescriptions: string[];
  /** Integration subjects, e.g. ["Psychiatry", "General Medicine"] */
  integrationSubjects: string[];
  /** Topic-level description */
  topic: string;
}

/** Exam-focused content structured by Indian examination.
 *  Replaces the flat examPearls array with structured, exam-specific content.
 */
export interface ExamLens {
  /** MBBS level — viva, practical, long answer */
  mbbs: {
    viva: string[];
    practical: string[];
    longAnswer: string[];
  };
  /** NEET PG — high yield + previous year question concepts */
  neetPg: {
    highYield: string[];
    pyqConcepts: string[];
  };
  /** INICET — clinical reasoning, mechanism-based questions */
  inicet: {
    clinicalReasoning: string[];
  };
  /** FMGE — frequently tested facts for foreign medical graduates */
  fmge: {
    frequentlyTested: string[];
  };
  /** Psychiatry Residency — advanced clinical pearls */
  psychiatryResidency: {
    advancedPearls: string[];
  };
}

/** Side-by-side international vs Indian guideline comparison. */
export interface GuidelineComparison {
  /** Topic, e.g. "First-line treatment" or "Pregnancy category" */
  topic: string;
  /** International source, e.g. "FDA", "APA", "NICE" */
  internationalSource: string;
  /** International recommendation */
  internationalRecommendation: string;
  /** Indian source — e.g. "IPS" or null if no dedicated Indian guideline exists */
  indianSource: string | null;
  /** Indian recommendation — or honest note that no dedicated guideline exists */
  indianRecommendation: string;
}

/** Indian reference source. */
export interface IndianReference {
  /** Source name, e.g. "KD Tripathi Essentials of Medical Pharmacology" */
  source: string;
  /** Type */
  type: "textbook" | "guideline" | "curriculum" | "regulatory";
  /** Section or chapter */
  section?: string;
  /** Optional URL */
  url?: string;
}

/* ============================================================
   India Layer extensions (platform-wide)
   ============================================================ */

/** Evidence hierarchy — separates global evidence from Indian practice. */
export interface EvidenceHierarchy {
  /** International guidelines (FDA, APA, NICE, etc.) */
  international: {
    source: string;
    recommendation: string;
  }[];
  /** Indian guidelines (IPS, NMC, etc.) — or honest note if none exist */
  indian: {
    source: string | null;
    recommendation: string;
  }[];
  /** Indian clinical practice — how it's actually done in India */
  indianClinicalPractice: string;
}

/** Where this drug is commonly encountered in Indian healthcare. */
export interface IndianEncounterContext {
  governmentHospitals: string;
  privateHospitals: string;
  medicalColleges: string;
  primaryCare: string;
  psychiatryOPD: string;
}

/** Indian prescription workflow — before / during / follow-up / refer. */
export interface PrescriptionWorkflow {
  beforePrescribing: string[];
  duringTreatment: string[];
  followUp: string[];
  whenToRefer: string[];
}

/** Exam frequency — star rating per Indian examination. */
export interface ExamFrequency {
  /** 1-5 stars indicating how frequently this drug is tested */
  neetPg: 1 | 2 | 3 | 4 | 5;
  inicet: 1 | 2 | 3 | 4 | 5;
  mbbsViva: 1 | 2 | 3 | 4 | 5;
  fmge: 1 | 2 | 3 | 4 | 5;
}

/** PYQ metadata — concept-level, no copyrighted content. */
export interface PYQMetadata {
  exam: "NEET PG" | "INICET" | "FMGE" | "AIIMS" | "JIPMER";
  year: number;
  /** Concept tested — not the actual question */
  concept: string;
  /** Topic area */
  topic: string;
}

/** Indian comparison context — how drugs compare in specific Indian scenarios. */
export interface IndianComparisonContext {
  /** Scenario, e.g. "Government setup", "Private psychiatry", "Pregnancy" */
  scenario: string;
  /** Which drug is preferred and why */
  recommendation: string;
  /** Alternative if first-choice is unsuitable */
  alternative?: string;
}

/** Jan Aushadhi availability. */
export interface JanAushadhiInfo {
  available: boolean;
  /** Note about strengths or availability */
  note?: string;
}

/** Restructured evidence sources — International vs Indian. */
export interface EvidenceSources {
  international: DrugReference[];
  indian: IndianReference[];
}

/* ============================================================
   Final Architecture Pass — canonical template v2.0 extensions
   ============================================================ */

/** Clinical decision path — algorithm-style decision tree. */
export interface DecisionPathNode {
  id: string;
  /** Question or decision point, e.g. "Patient has depression" */
  question: string;
  /** Branches from this node */
  branches?: {
    /** Label for the branch, e.g. "Mild", "Moderate", "Severe" */
    label: string;
    /** Next node ID */
    next: string;
  }[];
  /** If this is a terminal node, the recommendation */
  recommendation?: string;
  /** If this is a terminal node, the reasoning */
  reasoning?: string;
}

export interface ClinicalDecisionPath {
  /** Title, e.g. "When to choose Sertraline for depression" */
  title: string;
  /** The decision tree nodes */
  nodes: DecisionPathNode[];
  /** Starting node ID */
  startNodeId: string;
}

/** Educational prescription template (India). */
export interface EducationalPrescription {
  /** Clinical scenario, e.g. "Typical OPD initiation for first-episode depression" */
  scenario: string;
  /** The prescription lines (Rx format) */
  lines: string[];
  /** Follow-up instructions */
  followUp: string[];
  /** Disclaimer — always "Educational example only. Not a substitute for clinical judgment." */
  disclaimer: string;
}

/** Common mistake entry. */
export interface CommonMistake {
  /** The mistake, e.g. "Stopping after 2 weeks" */
  mistake: string;
  /** Why it's wrong */
  why: string;
  /** What to do instead */
  correction: string;
}

/** "When NOT to use" entry — red card with alternative. */
export interface WhenNotToUseEntry {
  /** Scenario, e.g. "Bipolar depression without mood stabiliser" */
  scenario: string;
  /** Why to avoid */
  reason: string;
  /** What to use instead */
  alternative: string;
}

/** Indian ward pearls — hierarchical teaching pearls. */
export interface WardPearls {
  /** What your psychiatry professor may ask */
  professorMayAsk: string[];
  /** What the resident expects you to know */
  residentExpects: string[];
  /** What consultants commonly do */
  consultantsDo: string[];
  /** What interns commonly miss */
  internsMiss: string[];
}

/** Refined high-yield level (replaces simple yieldRating for display). */
export type HighYieldLevel = "extreme" | "high" | "moderate" | "background" | "rare";

/** Drug family navigation member. */
export interface DrugFamilyMember {
  name: string;
  slug?: string;
  /** How this drug relates to the current drug, e.g. "Same class (SSRI)" */
  relationship: string;
  /** Key distinguishing feature, e.g. "Longest half-life" */
  distinguishing: string;
}

export interface DrugFamilyNav {
  /** Family name, e.g. "SSRIs" */
  familyName: string;
  /** All members of the family */
  members: DrugFamilyMember[];
}

/** Learning time breakdown. */
export interface LearningTimeBreakdown {
  /** Skim reading time, e.g. "18 min" */
  read: string;
  /** Deep study time, e.g. "45 min" */
  study: string;
  /** Quick revision time, e.g. "8 min" */
  revision: string;
}

/* ============================================================
   Educational UX Layer — learning experience extensions
   ============================================================ */

/** Inline micro-quiz — multiple choice with reveal explanation. */
export interface MicroQuiz {
  /** Unique ID */
  id: string;
  /** The question */
  question: string;
  /** 4 answer options */
  options: string[];
  /** Index of the correct option (0-based) */
  correctIndex: number;
  /** Explanation revealed after answering */
  explanation: string;
  /** Section ID this quiz appears after */
  afterSectionId: string;
}

/** Active recall question — end-of-page retrieval practice. */
export interface ActiveRecallQuestion {
  /** The question */
  question: string;
  /** The model answer */
  answer: string;
  /** Topic area */
  topic: string;
}

/** Guided learning mode — curated section visibility + time estimate. */
export type GuidedLearningMode = "patient" | "mbbs" | "neetPg" | "resident";

export interface LearningPath {
  mode: GuidedLearningMode;
  /** Display label, e.g. "MBBS Student" */
  label: string;
  /** Estimated time, e.g. "20 min" */
  estimatedTime: string;
  /** Description of what this mode covers */
  description: string;
  /** Section IDs visible in this mode */
  visibleSections: string[];
}

/** Lesson grouping — sections organised into learning units. */
export interface LessonGroup {
  /** Lesson number, e.g. 1 */
  number: number;
  /** Lesson title, e.g. "Foundations" */
  title: string;
  /** Brief description */
  description: string;
  /** Section IDs in this lesson (in order) */
  sectionIds: string[];
  /** Checkpoint text shown after completing this lesson */
  checkpoint: string;
}

/** Section difficulty tag — shown as a coloured dot next to section headings. */
export type SectionDifficulty = "mbbs" | "pg" | "resident";

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

  /* ---- Learning path (NEW — breadcrumb) ---- */
  /** Hierarchical breadcrumb from broad to specific, e.g. ["Psychiatry", "Antidepressants", "SSRIs", "Sertraline"] */
  learningPath: string[];

  /* ---- Hero / summary ---- */
  tagline: string;
  summary: string;

  /** Estimated reading time (NEW) — e.g. "18 min read" */
  estimatedReadTime: string;
  /** Yield rating (NEW) — how exam-relevant this drug is */
  yieldRating: "low" | "medium" | "high";
  /** Difficulty level this drug is most relevant for (NEW) */
  primaryAudience: DifficultyLevel;

  /* ---- Learning objectives ---- */
  learningObjectives: string[];

  /* ---- Mechanism ---- */
  mechanism: DrugMechanism;
  /** Visual flow diagram for the mechanism section */
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
  /** @deprecated Use examLens instead — kept for backward compat during Phase 1 migration */
  examPearls?: string[];
  /** Structured exam content by Indian examination (replaces examPearls) */
  examLens?: ExamLens;
  /** Mnemonics and memory tricks for exam preparation */
  memoryTricks: MemoryTrick[];
  /** One-page revision summary */
  highYieldSummary: string[];

  /* ---- Clinical cases (plural — supports multiple: adult, paediatric, geriatric, pregnancy, emergency, psychiatry) ---- */
  clinicalCases: ClinicalCase[];

  /* ---- Comparison tables ---- */
  comparisonTables: DrugComparisonTable[];

  /* ---- Timeline ---- */
  timeline: TimelineEvent[];

  /* ---- FAQ ---- */
  faqs: FAQItem[];

  /* ---- References & related ---- */
  /** Categorised references */
  references: CategorisedReferences;
  relatedDrugs: DrugRelatedDrug[];
  relatedConditions: DrugRelatedCondition[];

  /* ---- Knowledge graph ---- */
  knowledgeGraph: KnowledgeGraphNode[];

  /* ---- Patient mode (simplified content for patient audience) ---- */
  patientMode: PatientModeContent;

  /* ---- India-first extensions (Phase 0) ---- */
  /** Indian clinical practice: brands, doses, availability, cost, counselling */
  indianPractice?: IndianPracticeInfo;
  /** NMC CBME competency mapping */
  cbmeMapping?: CBMEMapping;
  /** Structured exam content by Indian examination */
  /** International vs Indian guideline side-by-side comparisons */
  guidelineComparisons?: GuidelineComparison[];
  /** Indian reference sources (KD Tripathi, IPS, NMC CBME, etc.) */
  indianReferences?: IndianReference[];
  /** Per-section difficulty mapping for progressive disclosure */
  sectionDifficulty?: Record<string, SectionDifficulty>;

  /* ---- India Layer extensions (platform-wide) ---- */
  /** Evidence hierarchy: International → Indian Guidelines → Indian Clinical Practice */
  evidenceHierarchy?: EvidenceHierarchy;
  /** Where this drug is commonly encountered in Indian healthcare */
  indianEncounterContext?: IndianEncounterContext;
  /** Indian prescription workflow: before / during / follow-up / refer */
  prescriptionWorkflow?: PrescriptionWorkflow;
  /** Exam frequency star ratings per Indian examination */
  examFrequency?: ExamFrequency;
  /** Previous year question metadata (concept-level, no copyrighted content) */
  pyqMetadata?: PYQMetadata[];
  /** Indian comparison contexts (govt setup, private, pregnancy, etc.) */
  indianComparisonContexts?: IndianComparisonContext[];
  /** Jan Aushadhi availability */
  janAushadhi?: JanAushadhiInfo;
  /** Restructured evidence sources (International vs Indian) */
  evidenceSources?: EvidenceSources;

  /* ---- Final Architecture Pass — canonical template v2.0 ---- */
  /** Clinical decision path — algorithm-style decision tree */
  clinicalDecisionPath?: ClinicalDecisionPath;
  /** Educational prescription template (India) */
  educationalPrescription?: EducationalPrescription;
  /** Common mistakes — what NOT to do */
  commonMistakes?: CommonMistake[];
  /** When NOT to use — red card with alternatives */
  whenNotToUse?: WhenNotToUseEntry[];
  /** Indian ward pearls — hierarchical teaching */
  wardPearls?: WardPearls;
  /** Refined high-yield level (5-tier) */
  highYieldLevel?: HighYieldLevel;
  /** Drug family navigation */
  drugFamilyNav?: DrugFamilyNav;
  /** Learning time breakdown (read / study / revision) */
  learningTimeBreakdown?: LearningTimeBreakdown;

  /* ---- Educational UX Layer ---- */
  /** Inline micro-quizzes placed after specific sections */
  microQuizzes?: MicroQuiz[];
  /** End-of-page active recall questions */
  activeRecallQuestions?: ActiveRecallQuestion[];
  /** Guided learning paths (Patient / MBBS / NEET PG / Resident) */
  learningPaths?: LearningPath[];
  /** Lesson grouping — sections organised into learning units */
  lessonGroups?: LessonGroup[];

  /* ---- Metadata ---- */
  /** ISO date string — last clinical review */
  lastReviewed: string;
  /** Optional list of reviewers / sources consulted */
  reviewers?: string[];
}

/* ============================================================
   Difficulty levels + progressive disclosure (Sprint 4)
   ============================================================ */

export type DifficultyLevel = "patient" | "medical" | "resident" | "clinician";

export interface DifficultyMeta {
  id: DifficultyLevel;
  label: string;
  description: string;
}

export const difficultyLevels: DifficultyMeta[] = [
  { id: "patient", label: "Patient", description: "Plain language. No jargon. What you need to know to take your medicine safely." },
  { id: "medical", label: "Medical Student", description: "Full clinical detail. MBBS / NEET-PG level. Mechanism, pearls, exam facts." },
  { id: "resident", label: "Resident", description: "Postgraduate level. Deeper reasoning, case selection, troubleshooting." },
  { id: "clinician", label: "Clinician", description: "Practising psychiatrist. Latest evidence, interactions, edge cases." },
];

/**
 * Progressive disclosure tiers.
 * Each tier is a collapsible group of sections. The Patient difficulty level
 * shows only Core Learning + selected Clinical Practice sections.
 */
export type DisclosureTier = "core" | "advanced" | "clinical" | "exam";

export interface DisclosureTierMeta {
  id: DisclosureTier;
  label: string;
  description: string;
  /** Section IDs that belong to this tier */
  sectionIds: string[];
  /** Whether this tier is visible in Patient mode */
  visibleInPatientMode: boolean;
}

/**
 * The canonical 4-tier progressive disclosure structure.
 * Used by every drug page. Section IDs match the IDs in page.tsx.
 */
export const disclosureTiers: DisclosureTierMeta[] = [
  {
    id: "core",
    label: "Core Learning",
    description: "Start here — the essential mental model.",
    sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain-regions", "neurotransmitters", "timeline"],
    visibleInPatientMode: true,
  },
  {
    id: "advanced",
    label: "Advanced Learning",
    description: "Deeper neuroscience & clinical context.",
    sectionIds: ["neural-pathways", "clinical-uses", "side-effects", "monitoring"],
    visibleInPatientMode: true, // side effects + monitoring + clinical uses are patient-relevant
  },
  {
    id: "clinical",
    label: "Clinical Practice",
    description: "Prescribing, contraindications, cases, comparisons.",
    sectionIds: ["contraindications", "interactions", "patient-education", "clinical-pearls", "clinical-case", "comparison", "related-drugs"],
    visibleInPatientMode: true, // patient education + contraindications are patient-relevant
  },
  {
    id: "exam",
    label: "Exam Revision",
    description: "High-yield facts, mnemonics, one-page summary.",
    sectionIds: ["exam-pearls", "memory-tricks", "high-yield-summary", "faq", "references"],
    visibleInPatientMode: false, // hidden from patients
  },
];

/**
 * Sections hidden in Patient mode (regardless of tier).
 * These are too technical for patients and would cause cognitive overload.
 */
export const hiddenInPatientMode: string[] = [
  "neural-pathways",      // too technical
  "clinical-pearls",      // prescriber-focused
  "clinical-case",        // clinical reasoning
  "comparison",           // drug selection reasoning
  "exam-pearls",          // exam-only
  "memory-tricks",        // exam-only
  "high-yield-summary",   // exam-only
  "references",           // academic
];
