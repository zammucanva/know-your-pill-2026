import type { DrugClassId } from "./types";

/* ============================================================
   Substance Page Schema
   ------------------------------------------------------------
   For substance-of-abuse education pages (alcohol, opioids, etc.)
   Distinct from the Drug schema (which is for medications).
   All fields except identity/hero are optional — substances
   have different content structures.
   ============================================================ */

/** Classification system (e.g., Jellinek, Cloninger). */
export interface SubstanceClassification {
  title: string;
  description: string;
  types?: {
    symbol?: string;
    name: string;
    description?: string;
    features: string[];
  }[];
}

/** Screening tool (e.g., CAGE). */
export interface SubstanceScreeningTool {
  name: string;
  description: string;
  questions: { text: string; meaning: string }[];
  scoring: string;
}

/** BAC or severity scale. */
export interface SubstanceSeverityScale {
  level: string;
  value?: string;
  effects: string;
}

/** Neurobiology mechanism. */
export interface SubstanceMechanism {
  title: string;
  description: string;
}

/** Clinical feature with mechanism. */
export interface ClinicalFeature {
  symptom: string;
  mechanism?: string;
}

/** Withdrawal phase. */
export interface WithdrawalPhase {
  phase: string;
  timing?: string;
  symptoms: string;
}

/** Withdrawal emergency callout (e.g., DT emergency). */
export interface WithdrawalEmergencyCallout {
  title: string;
  description: string;
}

/** Complication entry. */
export interface ComplicationEntry {
  name: string;
  description: string;
}

/** Mechanism flow step (e.g., Disulfiram 5-step flow). */
export interface MechanismFlowStep {
  step: string;
  title: string;
  description: string;
}

/** Reaction symptom group (e.g., Disulfiram-Ethanol Reaction common/severe). */
export interface ReactionSymptomGroup {
  category: string;
  symptoms: string[];
}

/** Treatment option. */
export interface TreatmentOption {
  name: string;
  description: string;
  mechanism?: string;
  notes?: string;
  /** Ordered mechanism flow (Disulfiram ingestion → reaction). */
  mechanismFlow?: MechanismFlowStep[];
  /** Additional mechanism bullets beyond the primary description. */
  mechanismNotes?: string[];
  /** Symptom groups for reactions (e.g., Disulfiram-Ethanol Reaction). */
  reactionSymptoms?: ReactionSymptomGroup[];
}

/** Detoxification step. */
export interface DetoxStep {
  title: string;
  description: string;
}

/** Emergency info. */
export interface SubstanceEmergency {
  warningSigns: string[];
  contacts: { label: string; number: string }[];
}

/** Recovery info. */
export interface RecoveryInfo {
  title: string;
  description: string;
}

/** Overdose emergency panel (opioid-specific — distinct from page-level emergency). */
export interface OverdoseEmergency {
  /** Section eyebrow / kicker (e.g. "Life-Threatening Emergency"). */
  eyebrow: string;
  /** Section title (e.g. "Overdose Emergency"). */
  title: string;
  /** Section subtitle / description. */
  subtitle: string;
  /** Panel title (e.g. "Opioid Overdose — Act Fast"). */
  panelTitle: string;
  /** Panel intro paragraph. */
  panelDescription: string;
  /** Warning sign grid items. */
  warningSigns: string[];
  /** "Why overdose kills" pattern-card content. */
  mechanism?: {
    summary: string;
    notes: string[];
    /** Emergency action callout (e.g. "What to Do" 5-step list). */
    emergencyAction: string;
  };
}

/** Maintenance therapy pattern-card content (opioid-specific). */
export interface MaintenanceTherapy {
  /** Section eyebrow. */
  eyebrow: string;
  /** Section title. */
  title: string;
  /** Section subtitle. */
  subtitle: string;
  /** Pattern-card title (e.g. "Opioid Agonist Therapy"). */
  cardTitle: string;
  /** Pattern-card tagline. */
  cardTagline: string;
  /** Pattern-card summary paragraph. */
  summary: string;
  /** Benefits list (e.g. methadone benefits). */
  benefits: string[];
  /** Alternatives section (e.g. naltrexone antagonist description). */
  alternatives?: { title: string; description: string };
  /** Complementary psychosocial therapies list. */
  complementaryTherapies: string[];
}

/** Naloxone mechanism section (opioid-specific). */
export interface NaloxoneInfo {
  /** Section eyebrow. */
  eyebrow: string;
  /** Section title. */
  title: string;
  /** Section subtitle. */
  subtitle: string;
  /** 5-step mechanism flow. */
  mechanismFlow: MechanismFlowStep[];
  /** Pattern-card title (e.g. "Naloxone Rescue"). */
  cardTitle: string;
  /** Pattern-card tagline. */
  cardTagline: string;
  /** Pattern-card summary paragraph. */
  summary: string;
  /** Pharmacology notes (e.g. receptor displacement bullets). */
  pharmacologyNotes: string[];
  /** Dosing & administration callout text (source verbatim, including dose values). */
  dosingAndAdministration: string;
}

/** The canonical Substance page interface. */
export interface SubstancePage {
  /* ---- Identity ---- */
  slug: string;
  name: string;
  disorderName: string;
  drugClass: DrugClassId;
  artwork?: string;
  artworkAlt?: string;

  /* ---- Hero ---- */
  tagline: string;
  summary: string;
  neurotransmitter: string;

  /* ---- Overview ---- */
  overview?: {
    title: string;
    description: string;
    keyConcepts?: string[];
    mechanisms?: SubstanceMechanism[];
  };

  /* ---- Classification (optional — substance-specific) ---- */
  classifications?: SubstanceClassification[];

  /* ---- Screening tools (optional — alcohol-specific) ---- */
  screeningTools?: SubstanceScreeningTool[];

  /* ---- Severity scale (optional — alcohol BAC) ---- */
  severityScale?: SubstanceSeverityScale[];

  /* ---- Neurobiology ---- */
  neurobiology?: {
    summary: string;
    mechanisms: SubstanceMechanism[];
    brainRegions?: string[];
    neurotransmitters?: string[];
    /** Substance-specific deep-dive pattern-card (e.g. Heroin Neuropharmacology). */
    deepDive?: {
      cardTitle: string;
      cardTagline: string;
      summary: string;
      /** Mechanism bullets (e.g. BBB penetration bullets). */
      mechanismNotes: string[];
      /** Emergency/danger callout (e.g. "Why Heroin is So Addictive"). */
      dangerCallout?: { title: string; description: string };
    };
  };

  /* ---- Intoxication ---- */
  intoxication?: {
    summary: string;
    clinicalFeatures: ClinicalFeature[];
    mechanisms?: string[];
    /** "When to Seek Help" emergency sub-panel. */
    whenToSeekHelp?: string[];
    /** Emergency callout inside intoxication section (e.g. overdose triad). */
    emergencyCallout?: WithdrawalEmergencyCallout;
  };

  /* ---- Withdrawal ---- */
  withdrawal?: {
    summary: string;
    phases: WithdrawalPhase[];
    mechanisms?: string[];
    /** Emergency callout (e.g., DT "life-threatening emergency"). */
    emergencyCallout?: WithdrawalEmergencyCallout;
    /** Additional clinical-course notes (e.g. opioid onset/peak/duration/PAWS). */
    clinicalCourse?: string[];
  };

  /* ---- Complications ---- */
  complications?: ComplicationEntry[];

  /* ---- Overdose emergency (optional — opioid-specific) ---- */
  overdoseEmergency?: OverdoseEmergency;

  /* ---- Treatment ---- */
  treatment?: {
    summary: string;
    detoxificationSteps?: DetoxStep[];
    detoxificationProtocol?: { title: string; description: string; keyPoints?: string[] };
    medications?: TreatmentOption[];
    psychosocial?: TreatmentOption[];
    recovery?: RecoveryInfo[];
    /** Maintenance therapy section (opioid-specific). */
    maintenance?: MaintenanceTherapy;
    /** Maintenance medications grid (e.g. Methadone, Buprenorphine, Clonidine, Naltrexone). */
    maintenanceMedications?: TreatmentOption[];
  };

  /* ---- Naloxone mechanism section (optional — opioid-specific) ---- */
  naloxoneInfo?: NaloxoneInfo;

  /* ---- Emergency ---- */
  emergency?: SubstanceEmergency;

  /* ---- Metadata ---- */
  lastReviewed: string;
  source: string;
}
