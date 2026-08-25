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
  types?: { name: string; features: string[] }[];
}

/** Screening tool (e.g., CAGE). */
export interface SubstanceScreeningTool {
  name: string;
  description: string;
  questions: string[];
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

/** Complication entry. */
export interface ComplicationEntry {
  name: string;
  description: string;
}

/** Treatment option. */
export interface TreatmentOption {
  name: string;
  description: string;
  mechanism?: string;
  notes?: string;
}

/** Detoxification step. */
export interface DetoxStep {
  title: string;
  description: string;
}

/** Emergency info. */
export interface SubstanceEmergency {
  warningSigns: string[];
  immediateActions: string[];
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
  };

  /* ---- Withdrawal ---- */
  withdrawal?: {
    summary: string;
    phases: WithdrawalPhase[];
    mechanisms?: string[];
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
