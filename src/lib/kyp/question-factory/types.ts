/**
 * KYP Question Factory: core types.
 *
 * The factory is a deterministic, offline generator. It never calls an AI
 * service. Every question is derived from FACTS, which are normalised
 * (subject, relation, object) records extracted verbatim from KYP's own
 * content layer. If a relationship is not a fact, no question about it can
 * exist: the correct outcome is INSUFFICIENT SOURCE DATA, never a guess.
 */

/* ============================================================
   Entities and facts
   ============================================================ */

/** Entity kinds the data model can represent. Which of these actually
 *  have facts depends on what KYP's source data contains; kinds with no
 *  facts simply never produce questions. */
export type EntityType =
  | "drug"
  | "drugClass"
  | "disease"
  | "disorder"
  | "symptom"
  | "sign"
  | "mechanism"
  | "receptor"
  | "transporter"
  | "enzyme"
  | "ionChannel"
  | "molecule"
  | "neurotransmitter"
  | "gene"
  | "protein"
  | "cell"
  | "tissue"
  | "organ"
  | "brainRegion"
  | "pathway"
  | "diagnosticTest"
  | "laboratoryFinding"
  | "imagingFinding"
  | "treatment"
  | "adverseEffect"
  | "contraindication"
  | "indication"
  | "interactionAgent"
  | "monitoringParameter"
  | "metabolite"
  | "halfLife"
  | "boxedWarning"
  | "netEffect"
  | "brainFunction"
  | "diagnosis";

export interface EntityRef {
  type: EntityType;
  /** Stable id, e.g. "drug:fluoxetine". */
  id: string;
  /** Learner-facing label, verbatim from the data where possible. */
  label: string;
}

/** Relationships the factory understands. A question may only be built
 *  from a relation that exists as a Fact. */
export type RelationId =
  | "belongsToClass"
  | "modulatesNeurotransmitter"
  | "actsOnBrainRegion"
  | "indicatedFor"
  | "hasCommonAdverseEffect"
  | "hasSeriousAdverseEffect"
  | "requiresMonitoring"
  | "contraindicatedIn"
  | "interactsWith"
  | "hasActiveMetabolite"
  | "hasHalfLife"
  | "hasBoxedWarning"
  | "hasNetEffect"
  | "hasPrimaryTarget"
  | "encodedByGene"
  | "hasBrainFunction"
  | "associatedWithDisorder"
  | "originatesIn"
  | "terminatesIn"
  | "usesNeurotransmitter"
  | "hasTeachingCase";

/** Where a fact lives in KYP, so a question can link back to its source. */
export interface SourceRef {
  /** Drug slug when the fact comes from a drug page. */
  slug?: string;
  /** Human-readable source name, e.g. "Sertraline". */
  name: string;
  /** Section label, e.g. "Side effects". */
  sectionLabel: string;
  /** Page href incl. anchor. Omitted when the fact has no stable page. */
  sectionHref?: string;
  /** Class label, the aggregation dimension for review and the Mistake Book. */
  classLabel: string;
}

export interface Fact {
  /** Stable id: relation|subject|object|discriminator. */
  id: string;
  relation: RelationId;
  subject: EntityRef;
  object: EntityRef;
  /** The exact source string this fact was derived from. Never paraphrased. */
  evidence: string;
  /** Verbatim rationale/description from the data, used for explanations. */
  explanation: string;
  source: SourceRef;
  /** Verbatim qualifiers (status, severity, frequency, ...). */
  attrs?: Record<string, string>;
}

/** Where the syllabus places a drug: Subject, Chapter, Topic, Subtopic. */
export interface SyllabusPlacement {
  subject: string;
  chapter: string;
  topic: string;
  subtopic: string;
}

/* ============================================================
   Questions
   ============================================================ */

/** Whether a question came from the authored bank or the factory. */
export type SourceType = "AUTHORED" | "GENERATED";

/** Lifecycle of a generated question. Publication is distinct from
 *  generation: only PUBLISHED questions may appear in a quiz. */
export type QuestionStatus =
  | "GENERATED"
  | "VALIDATED"
  | "PUBLISHED"
  | "REJECTED"
  | "ARCHIVED";

export type TemplateFamily =
  | "DIRECT_RECALL"
  | "CLASSIFICATION"
  | "MECHANISM"
  | "INDICATION"
  | "ADVERSE_EFFECT"
  | "ASSOCIATION"
  | "IDENTIFICATION"
  | "EXCEPTION"
  | "COMPARISON"
  | "RELATIONSHIP"
  | "MATCHING"
  | "CONCEPT_APPLICATION"
  | "MULTI_FACT"
  | "CLINICAL_STYLE"
  | "SEQUENCE_PATHWAY";

/** Learner-facing question type. */
export type QuestionKind = "standard" | "conceptual" | "clinical";

/** Learner-facing difficulty. Depth is structural: the number of verified
 *  facts a solver must connect, never the length of the stem. */
export type Difficulty = "easy" | "moderate" | "hard";

/** One option, with the claim that makes it correct or incorrect. */
export interface QuestionOption {
  text: string;
  /** The entity this option stands for, when it stands for one. */
  entityId?: string;
}

/** One relationship an option asserts. The link holds when ANY of the
 *  listed relations holds between subject and object (for example "common"
 *  or "serious" side effect). */
export interface ClaimLink {
  relations: RelationId[];
  subjectId: string;
  objectId: string;
}

/**
 * What an option asserts, re-checked against the fact index by the
 * validator independently of how the question was built. An option is
 * TRUE when every one of its links holds. For a positive question the
 * correct option must be true and every distractor false; for a NOT
 * question the polarity flips. This is what proves "exactly one correct
 * answer" under the closed-world rule (an entity not documented for the
 * subject does not hold).
 */
export interface OptionClaim {
  optionIndex: number;
  links: ClaimLink[];
  /** The truth value the construction intended for this option. */
  expected: boolean;
}

/** Positive: "which IS ..."; negative: "which is NOT ...". */
export type Polarity = "positive" | "negative";

export interface QuestionProvenance {
  /** Batch id the question was produced in. */
  batchId: string;
  /** Seed that, with template + slot, reproduces this exact question. */
  seed: number;
  /** Seed of the job/batch run that produced it. */
  batchSeed: number;
  generatorVersion: string;
  templateId: string;
  templateVersion: string;
  factIds: string[];
  sources: SourceRef[];
  createdAt: string;
}

export interface GeneratedQuestion {
  /** Stable id derived from fingerprint + seed. */
  id: string;
  sourceType: "GENERATED";
  status: QuestionStatus;
  stem: string;
  /** Exactly four options for a standard MCQ. */
  options: QuestionOption[];
  correctIndex: number;
  explanation: string;
  family: TemplateFamily;
  kind: QuestionKind;
  difficulty: Difficulty;
  polarity: Polarity;
  /** Facts a solver must connect. */
  depth: 1 | 2 | 3;
  /** Semantic fingerprint (concept + relation + answer), used for dedupe
   *  and never-repeat history. */
  fingerprint: string;
  /** Structure fingerprint incl. the distractor set (analytics only). */
  structureFingerprint: string;
  claims: OptionClaim[];
  provenance: QuestionProvenance;
  /** Where the question sits in the syllabus. */
  placement: SyllabusPlacement | null;
  /** True when a human has not yet reviewed it (always true for factory output). */
  unreviewed: boolean;
}

/** Why a candidate or slot could not become a question. */
export type RejectReason =
  | "INSUFFICIENT_SOURCE_DATA"
  | "NOT_ENOUGH_DISTRACTORS"
  | "AMBIGUOUS_DISTRACTOR"
  | "DUPLICATE_AUTHORED"
  | "DUPLICATE_GENERATED"
  | "DUPLICATE_IN_BATCH"
  | "ALREADY_SEEN"
  | "VALIDATION_FAILED";

/* ============================================================
   Selection and requests
   ============================================================ */

/** A place in the syllabus. Empty fields mean "all". */
export interface Scope {
  subject?: string;
  chapter?: string;
  topic?: string;
  /** Drug slug. */
  subtopic?: string;
}

export type DifficultySelection = Difficulty | "mixed";
export type KindSelection = QuestionKind | "mixed";

export interface FactoryRequest {
  scope: Scope;
  count: number;
  difficulty: DifficultySelection;
  kind: KindSelection;
  neverRepeat: boolean;
  /** Optional preset id. Presets are configuration only: no exam-specific
   *  rules are built in. */
  preset?: string;
  seed?: number;
}
