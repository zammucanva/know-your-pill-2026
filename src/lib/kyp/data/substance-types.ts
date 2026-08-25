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

  /* ---- Classification (optional — alcohol-specific) ---- */
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
  };

  /* ---- Intoxication ---- */
  intoxication?: {
    summary: string;
    clinicalFeatures: ClinicalFeature[];
    mechanisms?: string[];
    /** "When to Seek Help" emergency sub-panel. */
    whenToSeekHelp?: string[];
  };

  /* ---- Withdrawal ---- */
  withdrawal?: {
    summary: string;
    phases: WithdrawalPhase[];
    mechanisms?: string[];
    /** Emergency callout (e.g., DT "life-threatening emergency"). */
    emergencyCallout?: WithdrawalEmergencyCallout;
  };

  /* ---- Complications ---- */
  complications?: ComplicationEntry[];

  /* ---- Treatment ---- */
  treatment?: {
    summary: string;
    detoxificationSteps?: DetoxStep[];
    detoxificationProtocol?: { title: string; description: string; keyPoints?: string[] };
    medications?: TreatmentOption[];
    psychosocial?: TreatmentOption[];
    recovery?: RecoveryInfo[];
  };

  /* ---- Emergency ---- */
  emergency?: SubstanceEmergency;

  /* ---- Metadata ---- */
  lastReviewed: string;
  source: string;
}
