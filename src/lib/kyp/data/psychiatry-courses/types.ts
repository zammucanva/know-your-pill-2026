import type {
  LearningPath,
  LessonGroup,
  MicroQuiz,
  ActiveRecallQuestion,
  TimelineEvent,
  FAQItem,
  KnowledgeGraphNode,
  CommonMistake,
  ClinicalDecisionPath,
  CategorisedReferences,
  ExamLens,
} from "../types";
import type {
  SymptomCluster,
  DiagnosticCriteria,
  DifferentialDiagnosis,
  ManagementOption,
  SeverityScale,
  Epidemiology,
  EtiologyFactor,
  DiseaseDrugLink,
  DiseaseClinicalCase,
  DiseasePatientEducation,
} from "../disease-types";

/* ============================================================
   KYP Psychiatry Learning System — Canonical Course Schema
   ------------------------------------------------------------
   The typed model behind the six-lesson Psychiatry learning
   journey (Foundations -> Mechanism & Neuroscience -> Clinical
   Practice -> Indian Context -> Exam Revision -> Active Recall).

   Architecture principles (from the learning-system brief):
   1. ONE canonical medical content per topic; the four learner
      modes (Patient / MBBS / NEET-PG / Resident) are projections
      of it, never separate documents.
   2. Every substantive clinical claim is traceable through the
      provenance registry; user-facing references stay clean.
   3. Neuroscience claims carry an evidence grade so the product
      can honestly distinguish established / supported /
      proposed / uncertain.
   4. Each course declares a lifecycle status; unsupported
      content never ships as PUBLISHED.
   5. Drug links only to routes that exist; missing lessons are
      recorded as content gaps, never invented.
   ============================================================ */

/* ---- Lifecycle (learning-system brief §34) ---- */

export type CourseStatus =
  | "DRAFT"
  | "RESEARCHED"
  | "VERIFIED"
  | "PUBLISHED"
  | "NEEDS_REVIEW";

/* ---- Evidence grading (brief §10) ---- */

export type EvidenceGrade = "established" | "supported" | "proposed" | "uncertain";

export const evidenceGradeMeta: Record<
  EvidenceGrade,
  { label: string; description: string }
> = {
  established: {
    label: "Established",
    description:
      "Consistently replicated and reflected in current major guidance.",
  },
  supported: {
    label: "Supported",
    description:
      "Good quality evidence with broad agreement; details still being refined.",
  },
  proposed: {
    label: "Proposed",
    description:
      "A leading working hypothesis — useful to learn, not yet settled science.",
  },
  uncertain: {
    label: "Uncertain",
    description:
      "Actively debated or with mixed evidence; presented as open.",
  },
};

/* ---- Source provenance (brief §7) ---- */

export type SourceType =
  | "guideline"
  | "classification"
  | "textbook"
  | "systematic-review"
  | "meta-analysis"
  | "trial"
  | "primary"
  | "review"
  | "indian-guideline"
  | "government"
  | "who";

/** One authoritative source in the course's provenance registry. */
export interface ProvenanceRecord {
  /** Stable short id used by evidenceMap entries, e.g. "S1". */
  id: string;
  /** Human source name, e.g. "WHO — Depressive disorder (depression) fact sheet". */
  source: string;
  sourceType: SourceType;
  /** Edition / version when applicable, e.g. "3rd edition". */
  edition?: string;
  /** Publication / most recent revision year. */
  year: string;
  /** URL or DOI where applicable. */
  locator?: string;
  /** ISO date the KYP author last checked this source. */
  dateReviewed: string;
}

/** A substantive claim mapped to its sources. Internal record —
 *  keeps every clinical statement traceable without turning the
 *  page into a bibliography. */
export interface GradedFact {
  /** The claim, phrased the way the lesson teaches it. */
  text: string;
  grade: EvidenceGrade;
  /** ProvenanceRecord ids that support this claim. */
  sources: string[];
  /** Optional scope note (population, setting, caveat). */
  note?: string;
}

/* ---- Neuroscience layer (brief §10–§13) ---- */

/** A brain structure relevant to the topic — only structures with a
 *  genuine, teachable role are included (no decorative neuroscience). */
export interface CourseBrainRegion {
  id: string;
  name: string;
  /** What this region does for THIS topic. */
  role: string;
  grade: EvidenceGrade;
}

/** A neurotransmitter system relevant to the topic. */
export interface CourseNeurotransmitter {
  name: string;
  /** Chemical shorthand shown in the chip, e.g. "5-HT". */
  symbol: string;
  /** Where it acts and why it matters here. */
  role: string;
  grade: EvidenceGrade;
  /** Optional pointer into KYP drug content. */
  drugConnection?: string;
}

/** One step of a signalling/circuit pathway chain. */
export interface CoursePathwayStep {
  label: string;
  detail?: string;
}

/** A receptor/system -> pathway -> circuit -> clinical manifestation
 *  chain rendered as structured visual data (never a hard-coded graphic). */
export interface CoursePathway {
  id: string;
  name: string;
  steps: CoursePathwayStep[];
  /** The clinical manifestation the chain explains. */
  clinicalManifestation: string;
  grade: EvidenceGrade;
}

/* ---- Quick facts (brief §9) ---- */

export interface CourseQuickFact {
  label: string;
  value: string;
  detail?: string;
}

/* ---- Indian practice (brief §25) ---- */

export interface CourseIndianPractice {
  /** Indian guidelines / professional bodies relevant to the topic. */
  indianGuidelines: string;
  /** Where the patient typically meets the system (primary care, district hospital). */
  systemContext: string;
  /** Government programmes / helplines relevant to the topic. */
  programmeContext: string;
  /** Cost, availability and access realities. */
  costConsiderations: string;
  /** Cultural and family considerations with evidence. */
  culturalConsiderations: string;
  /** Counselling points phrased for Indian practice. */
  patientCounselling: string[];
}

/* ---- The canonical course ---- */

export interface PsychiatryCourse {
  /* ---- Identity ---- */
  /** Matches the canonical note slug — one URL per topic. */
  slug: string;
  title: string;
  shortName?: string;
  kind: "disorder" | "concept";
  category: string;
  /** Library group (letter A–R + name) the note belongs to. */
  groupLetter: string;
  groupName: string;
  /** Breadcrumb, e.g. ["Psychiatry", "Mood Disorders", "Depressive Disorders"]. */
  learningPath: string[];

  /* ---- Lifecycle + review ---- */
  status: CourseStatus;
  /** ISO date of the KYP content review. */
  lastReviewed: string;

  /* ---- Hero / summary ---- */
  tagline: string;
  summary: string;
  estimatedReadTime: string;
  yieldRating: "low" | "medium" | "high";
  primaryAudience: "patient" | "medical" | "resident" | "clinician";

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: string[];
  quickFacts: CourseQuickFact[];
  knowledgeGraph: KnowledgeGraphNode[];

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    /** One-paragraph synthesis for the section header. */
    summary: string;
    /** Ordered teaching steps. */
    steps: string[];
    /** Honest grading of the overall model. */
    grade: EvidenceGrade;
  };
  brainRegions: CourseBrainRegion[];
  neurotransmitters: CourseNeurotransmitter[];
  pathways: CoursePathway[];
  timeline: TimelineEvent[];

  /* ---- Lesson 3: Clinical Practice (disorders; concepts may omit) ---- */
  epidemiology?: Epidemiology;
  etiology?: EtiologyFactor[];
  symptomClusters?: SymptomCluster[];
  diagnosticCriteria?: DiagnosticCriteria[];
  severityScales?: SeverityScale[];
  differentialDiagnosis?: DifferentialDiagnosis[];
  management?: ManagementOption[];
  /** Safety / red flags / escalation where applicable. */
  safety?: {
    redFlags: string[];
    urgentGuidance: string;
  };
  /** Medication routes INTO existing KYP drug lessons. */
  drugLinks: DiseaseDrugLink[];
  /** Requested lessons that do not exist yet (brief §17). */
  contentGaps: string[];
  patientGuide: DiseasePatientEducation;

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: CourseIndianPractice;
  decisionPath?: ClinicalDecisionPath;
  commonMistakes?: CommonMistake[];

  /* ---- Lesson 5: Exam Revision ---- */
  examLens?: ExamLens;
  clinicalCases?: DiseaseClinicalCase[];
  clinicalPearls: string[];
  highYieldSummary: string[];

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: MicroQuiz[];
  activeRecallQuestions: ActiveRecallQuestion[];
  faqs: FAQItem[];

  /* ---- References (user-facing, clean) ---- */
  references: CategorisedReferences;

  /* ---- Learning architecture ---- */
  learningPaths: LearningPath[];
  lessonGroups: LessonGroup[];

  /* ---- Provenance (internal, machine-checkable) ---- */
  provenance: ProvenanceRecord[];
  evidenceMap: GradedFact[];
}
