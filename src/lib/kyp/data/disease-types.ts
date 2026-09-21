import type { LucideIcon } from "lucide-react";
import type {
  DrugReference,
  IndianReference,
  CBMEMapping,
  ExamLens,
  ExamFrequency,
  PYQMetadata,
  GuidelineComparison,
  EvidenceHierarchy,
  IndianEncounterContext,
  PrescriptionWorkflow,
  ClinicalDecisionPath,
  CommonMistake,
  WardPearls,
  HighYieldLevel,
  LearningTimeBreakdown,
  MicroQuiz,
  ActiveRecallQuestion,
  LearningPath,
  LessonGroup,
  SectionDifficulty,
  TimelineEvent,
  FAQItem,
  KnowledgeGraphNode,
  PatientModeContent,
} from "./types";

/* ============================================================
   Disease Schema — KYP Disease Template v1.0
   ------------------------------------------------------------
   The canonical structure for every disease hub page.
   Designed to mirror the drug template's quality and depth
   while focusing on disease-centric learning.
   ============================================================ */

/** Disease severity scale (e.g., PHQ-9, GAD-7, Y-BOCS). */
export interface SeverityScale {
  /** Scale name, e.g. "PHQ-9" */
  name: string;
  /** Full name, e.g. "Patient Health Questionnaire-9" */
  fullName: string;
  /** What it measures */
  measures: string;
  /** Score ranges with interpretation */
  ranges: {
    min: number;
    max: number;
    severity: string;
    action: string;
  }[];
  /** Indian context note */
  indianNote?: string;
}

/** Symptom cluster. */
export interface SymptomCluster {
  /** Cluster name, e.g. "Emotional", "Cognitive", "Somatic", "Behavioural" */
  category: string;
  /** Symptoms in this cluster */
  symptoms: string[];
}

/** Diagnostic criteria entry. */
export interface DiagnosticCriteria {
  /** System, e.g. "DSM-5", "ICD-10", "ICD-11" */
  system: string;
  /** Code, e.g. "F32.x" for ICD-10 */
  code?: string;
  /** Criteria summary */
  criteria: string[];
  /** Duration requirement */
  duration?: string;
  /** Indian context note */
  indianNote?: string;
}

/** Differential diagnosis entry. */
export interface DifferentialDiagnosis {
  /** Condition name */
  condition: string;
  /** How to distinguish from the target disease */
  distinguishingFeatures: string;
  /** Key differentiator */
  keyDifferentiator: string;
}

/** Management option. */
export interface ManagementOption {
  /** Category: "lifestyle", "psychotherapy", "pharmacotherapy", "brain-stimulation" */
  category: string;
  /** Treatment name, e.g. "CBT", "SSRI", "ECT" */
  name: string;
  /** Description */
  description: string;
  /** When to use */
  whenToUse: string;
  /** Indian context */
  indianContext?: string;
}

/** Drug reference within a disease page. */
export interface DiseaseDrugLink {
  /** Drug name */
  name: string;
  /** Slug if a KYP drug page exists */
  slug?: string;
  /** Role: first-line, second-line, augmentation, etc. */
  role: string;
  /** Why this drug for this disease */
  rationale: string;
}

/** Clinical case for a disease page. */
export interface DiseaseClinicalCase {
  title: string;
  presentation: string;
  history: string;
  examination: string;
  diagnosis: string;
  management: string;
  outcome: string;
  teachingPoints: string[];
}

/** Epidemiology data. */
export interface Epidemiology {
  /** Global prevalence */
  globalPrevalence: string;
  /** Indian prevalence */
  indianPrevalence: string;
  /** Lifetime risk */
  lifetimeRisk?: string;
  /** Gender ratio */
  genderRatio?: string;
  /** Age of onset */
  ageOfOnset?: string;
  /** Indian-specific notes */
  indianNotes?: string;
}

/** Etiology / risk factor entry. */
export interface EtiologyFactor {
  /** Category: "genetic", "biological", "psychological", "social", "environmental" */
  category: string;
  /** Factor description */
  factor: string;
  /** Details */
  details: string;
}

/** Pathophysiology summary. */
export interface Pathophysiology {
  /** One-sentence summary */
  summary: string;
  /** Key neurotransmitter involvement */
  neurotransmitters: string[];
  /** Key brain regions involved */
  brainRegions: string[];
  /** Key pathways involved */
  pathways: string[];
  /** Detailed explanation */
  details: string;
  /** Indian research context */
  indianResearchContext?: string;
}

/** Patient education for disease page. */
export interface DiseasePatientEducation {
  /** What is this condition? (plain language) */
  whatIsIt: string;
  /** What causes it? */
  whatCausesIt: string;
  /** What are the symptoms? */
  symptoms: string;
  /** How is it treated? */
  treatment: string;
  /** What can I do? (self-help) */
  selfHelp: string[];
  /** When to seek help */
  whenToSeekHelp: string[];
  /** Indian resources */
  indianResources?: string[];
}

/** The canonical Disease interface. */
export interface Disease {
  /* ---- Identity ---- */
  slug: string;
  name: string;
  /** Short name/abbreviation, e.g. "MDD", "GAD", "OCD" */
  shortName: string;
  /** Category, e.g. "Mood Disorder", "Anxiety Disorder" */
  category: string;

  /* ---- Learning path (breadcrumb) ---- */
  learningPath: string[];

  /* ---- Hero / summary ---- */
  tagline: string;
  summary: string;
  estimatedReadTime: string;
  yieldRating: "low" | "medium" | "high";
  highYieldLevel?: HighYieldLevel;
  primaryAudience: "patient" | "medical" | "resident" | "clinician";

  /* ---- Learning objectives ---- */
  learningObjectives: string[];

  /* ---- Epidemiology ---- */
  epidemiology: Epidemiology;

  /* ---- Etiology & Risk Factors ---- */
  etiology: EtiologyFactor[];

  /* ---- Pathophysiology ---- */
  pathophysiology: Pathophysiology;

  /* ---- Neuroscience mapping ---- */
  neurotransmitters: string[];
  receptors: string[];
  brainRegionIds: string[];
  pathwayIds: string[];

  /* ---- Symptoms ---- */
  symptomClusters: SymptomCluster[];

  /* ---- Diagnosis ---- */
  diagnosticCriteria: DiagnosticCriteria[];
  severityScales: SeverityScale[];
  differentialDiagnosis: DifferentialDiagnosis[];

  /* ---- Management ---- */
  management: ManagementOption[];
  /** Drugs linked to this disease (with slugs for cross-linking) */
  drugs: DiseaseDrugLink[];

  /* ---- Indian Practice ---- */
  indianPractice: {
    indianGuidelines: string;
    governmentHospitals: string;
    privatePractice: string;
    primaryCare: string;
    costConsiderations: string;
    patientCounselling: string[];
  };
  guidelineComparisons?: GuidelineComparison[];
  evidenceHierarchy?: EvidenceHierarchy;
  indianEncounterContext?: IndianEncounterContext;
  prescriptionWorkflow?: PrescriptionWorkflow;
  janAushadhiRelevant?: boolean;

  /* ---- Education ---- */
  patientEducation: DiseasePatientEducation;
  clinicalPearls: string[];
  examLens?: ExamLens;
  examFrequency?: ExamFrequency;
  pyqMetadata?: PYQMetadata[];
  memoryTricks: { title: string; trick: string; remembers: string }[];
  highYieldSummary: string[];

  /* ---- Clinical cases ---- */
  clinicalCases: DiseaseClinicalCase[];

  /* ---- v2.0 additions ---- */
  clinicalDecisionPath?: ClinicalDecisionPath;
  commonMistakes?: CommonMistake[];
  wardPearls?: WardPearls;
  drugFamilyNav?: {
    familyName: string;
    members: { name: string; slug?: string; relationship: string; distinguishing: string }[];
  };
  learningTimeBreakdown?: LearningTimeBreakdown;

  /* ---- Educational UX ---- */
  microQuizzes?: MicroQuiz[];
  activeRecallQuestions?: ActiveRecallQuestion[];
  learningPaths?: LearningPath[];
  lessonGroups?: LessonGroup[];

  /* ---- Knowledge graph ---- */
  knowledgeGraph: KnowledgeGraphNode[];

  /* ---- CBME ---- */
  cbmeMapping?: CBMEMapping;
  sectionDifficulty?: Record<string, SectionDifficulty>;

  /* ---- Timeline ---- */
  timeline: TimelineEvent[];

  /* ---- FAQ ---- */
  faqs: FAQItem[];

  /* ---- References ---- */
  evidenceSources?: {
    international: DrugReference[];
    indian: IndianReference[];
  };

  /* ---- Patient mode ---- */
  patientMode: PatientModeContent;

  /* ---- Metadata ---- */
  lastReviewed: string;
  reviewers?: string[];
}
