/**
 * KYP Mechanism System — controlled vocabulary.
 *
 * The canonical, closed vocabulary of the universal mechanism engine:
 *   - 22 entity types across the molecular → clinical spectrum
 *   - 6 biological levels
 *   - 28 relationship types, each carrying NON-COLOUR visual semantics
 *     (terminal geometry + stroke pattern + polarity) and a screen-reader verb
 *   - 7 evidence qualifiers (mirrors PsychiatryCourse evidence grades + shades)
 *   - 11 intervention actions (seeded from the knowledge-graph's
 *     `mechanism-actions` registry, which is itself derived from locked
 *     medical data — never invented)
 *
 * HARD RULE (medical content firewall): this file defines VISUAL SEMANTICS
 * ONLY. It confers no medical meaning on any edge; every edge in a real
 * mechanism must be traceable to the locked source data (see
 * tests/mechanism-integrity.test.ts). `associated_with` / `related_to`
 * exist so that uncertainty in the source can be represented WITHOUT
 * being strengthened into causation.
 */

/* ============================================================
   Entity types
   ============================================================ */

export const ENTITY_TYPES = [
  "disease",
  "drug",
  "receptor",
  "enzyme",
  "molecule",
  "gene",
  "protein",
  "cell",
  "tissue",
  "organ",
  "pathway",
  "laboratory-finding",
  "clinical-finding",
  "diagnostic-test",
  "imaging-finding",
  "treatment",
  "neurotransmitter",
  "second-messenger",
  "ion-channel",
  "transporter",
  "compartment",
  "physiological-process",
] as const;

export type EntityType = (typeof ENTITY_TYPES)[number];

export interface EntityTypeMeta {
  /** Stable machine id (= EntityType). */
  id: EntityType;
  /** Human label for legends and screen readers. */
  label: string;
  /** Single-glyph marker rendered inside the node (never the sole carrier of meaning). */
  glyph: string;
}

const ENTITY_META: Record<EntityType, EntityTypeMeta> = {
  disease: { id: "disease", label: "Disease", glyph: "⚕" },
  drug: { id: "drug", label: "Drug", glyph: "Rx" },
  receptor: { id: "receptor", label: "Receptor", glyph: "◱" },
  enzyme: { id: "enzyme", label: "Enzyme", glyph: "⬡" },
  molecule: { id: "molecule", label: "Molecule", glyph: "•" },
  gene: { id: "gene", label: "Gene", glyph: "Ⓖ" },
  protein: { id: "protein", label: "Protein", glyph: "Ⓟ" },
  cell: { id: "cell", label: "Cell", glyph: "⬭" },
  tissue: { id: "tissue", label: "Tissue", glyph: "▤" },
  organ: { id: "organ", label: "Organ", glyph: "◉" },
  pathway: { id: "pathway", label: "Pathway", glyph: "⇉" },
  "laboratory-finding": { id: "laboratory-finding", label: "Laboratory finding", glyph: "Ⓛ" },
  "clinical-finding": { id: "clinical-finding", label: "Clinical finding", glyph: "Ⓒ" },
  "diagnostic-test": { id: "diagnostic-test", label: "Diagnostic test", glyph: "Ⓓ" },
  "imaging-finding": { id: "imaging-finding", label: "Imaging finding", glyph: "Ⓘ" },
  treatment: { id: "treatment", label: "Treatment", glyph: "✚" },
  neurotransmitter: { id: "neurotransmitter", label: "Neurotransmitter", glyph: "Ⓝ" },
  "second-messenger": { id: "second-messenger", label: "Second messenger", glyph: "Ⓢ" },
  "ion-channel": { id: "ion-channel", label: "Ion channel", glyph: "⇌" },
  transporter: { id: "transporter", label: "Transporter", glyph: "⇄" },
  compartment: { id: "compartment", label: "Compartment", glyph: "◌" },
  "physiological-process": { id: "physiological-process", label: "Physiological process", glyph: "∿" },
};

export function getEntityMeta(type: EntityType): EntityTypeMeta {
  return ENTITY_META[type];
}

export function isEntityType(value: string): value is EntityType {
  return (ENTITY_TYPES as readonly string[]).includes(value);
}

/* ============================================================
   Biological levels (spec §16: encoded in DATA, not CSS position)
   ============================================================ */

export const BIOLOGICAL_LEVELS = [
  "molecular",
  "cellular",
  "tissue",
  "organ",
  "systemic",
  "clinical",
] as const;

export type BiologicalLevel = (typeof BIOLOGICAL_LEVELS)[number];

const LEVEL_ORDER: Record<BiologicalLevel, number> = {
  molecular: 0,
  cellular: 1,
  tissue: 2,
  organ: 3,
  systemic: 4,
  clinical: 5,
};

export function levelIndex(level: BiologicalLevel): number {
  return LEVEL_ORDER[level];
}

export function isBiologicalLevel(value: string): value is BiologicalLevel {
  return (BIOLOGICAL_LEVELS as readonly string[]).includes(value);
}

/* ============================================================
   Relationships — visual semantics FIRST, colour never sole
   ============================================================ */

/** How the edge terminates at the target node. */
export type EdgeTerminal = "arrow" | "tbar" | "dot" | "chevron" | "diamond" | "none";

/** Stroke pattern of the edge body. */
export type EdgeStroke = "solid" | "dashed" | "dotted";

/** Causal polarity (used for redundancy in labels/legend, never colour-only). */
export type EdgePolarity = "positive" | "negative" | "neutral";

/** Path shape: "forward" flows with the causal reading direction; "return" loops back. */
export type EdgeShape = "forward" | "return";

export interface RelationshipMeta {
  /** Stable machine id. */
  id: string;
  /** Screen-reader verb + human label, e.g. "inhibits". */
  srVerb: string;
  /** Terminal geometry at the target end. */
  terminal: EdgeTerminal;
  /** Stroke pattern. */
  stroke: EdgeStroke;
  /** Polarity (redundant encoding for legend + SR). */
  polarity: EdgePolarity;
  /** Whether this relationship is a feedback/return path by default. */
  shape: EdgeShape;
  /** True when the relationship asserts causation (used by integrity linting). */
  causal: boolean;
}

/**
 * The closed relationship vocabulary (28).
 *
 * Core causal verbs required by the spec come first. `associated_with` and
 * `related_to` are the uncertainty-safe members: they exist so source
 * hedging ("associated with") never has to be strengthened into "causes".
 */
export const RELATIONSHIPS: RelationshipMeta[] = [
  // --- core causal (spec §8) ---
  { id: "activates", srVerb: "activates", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "inhibits", srVerb: "inhibits", terminal: "tbar", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  { id: "binds", srVerb: "binds to", terminal: "dot", stroke: "solid", polarity: "neutral", shape: "forward", causal: false },
  { id: "releases", srVerb: "releases", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "converts", srVerb: "converts to", terminal: "chevron", stroke: "solid", polarity: "neutral", shape: "forward", causal: true },
  { id: "transports", srVerb: "transports", terminal: "arrow", stroke: "dashed", polarity: "neutral", shape: "forward", causal: true },
  { id: "increases", srVerb: "increases", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "decreases", srVerb: "decreases", terminal: "tbar", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  { id: "stimulates", srVerb: "stimulates", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "blocks", srVerb: "blocks", terminal: "tbar", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  { id: "causes", srVerb: "causes", terminal: "arrow", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  { id: "leads_to", srVerb: "leads to", terminal: "chevron", stroke: "solid", polarity: "neutral", shape: "forward", causal: true },
  { id: "compensates", srVerb: "compensates for", terminal: "diamond", stroke: "dashed", polarity: "positive", shape: "forward", causal: false },
  { id: "displaces", srVerb: "displaces", terminal: "chevron", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  { id: "modulates", srVerb: "modulates", terminal: "dot", stroke: "dashed", polarity: "neutral", shape: "forward", causal: false },
  { id: "potentiates", srVerb: "potentiates", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "antagonises", srVerb: "antagonises", terminal: "tbar", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  { id: "desensitises", srVerb: "desensitises", terminal: "tbar", stroke: "dashed", polarity: "negative", shape: "forward", causal: true },
  // --- feedback (rendered as visible curved return paths) ---
  { id: "feedback", srVerb: "feeds back to", terminal: "arrow", stroke: "dashed", polarity: "neutral", shape: "return", causal: false },
  { id: "negative_feedback", srVerb: "negatively feeds back to", terminal: "tbar", stroke: "dashed", polarity: "negative", shape: "return", causal: false },
  { id: "positive_feedback", srVerb: "positively feeds back to", terminal: "arrow", stroke: "dashed", polarity: "positive", shape: "return", causal: false },
  // --- molecular / biological ---
  { id: "expresses", srVerb: "expresses", terminal: "dot", stroke: "solid", polarity: "neutral", shape: "forward", causal: false },
  { id: "secretes", srVerb: "secretes", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "metabolises", srVerb: "metabolises", terminal: "chevron", stroke: "solid", polarity: "neutral", shape: "forward", causal: true },
  { id: "upregulates", srVerb: "upregulates", terminal: "arrow", stroke: "solid", polarity: "positive", shape: "forward", causal: true },
  { id: "downregulates", srVerb: "downregulates", terminal: "tbar", stroke: "solid", polarity: "negative", shape: "forward", causal: true },
  // --- uncertainty-safe (never strengthen source hedging into these → those) ---
  { id: "associated_with", srVerb: "is associated with", terminal: "dot", stroke: "dotted", polarity: "neutral", shape: "forward", causal: false },
  { id: "related_to", srVerb: "relates to", terminal: "dot", stroke: "dotted", polarity: "neutral", shape: "forward", causal: false },
];

export type RelationshipId = (typeof RELATIONSHIPS)[number]["id"];

const RELATIONSHIP_MAP: ReadonlyMap<string, RelationshipMeta> = new Map(
  RELATIONSHIPS.map((r) => [r.id, r])
);

export function getRelationshipMeta(id: string): RelationshipMeta | undefined {
  return RELATIONSHIP_MAP.get(id);
}

export function isRelationshipId(value: string): value is RelationshipId {
  return RELATIONSHIP_MAP.has(value);
}

/** Relationships reserved for feedback loops (curved return paths). */
export const FEEDBACK_RELATIONSHIPS: ReadonlySet<string> = new Set(
  RELATIONSHIPS.filter((r) => r.shape === "return").map((r) => r.id)
);

/** Relationships that assert causation — integrity lint flags unexpected use on adapted data. */
export const CAUSAL_RELATIONSHIPS: ReadonlySet<string> = new Set(
  RELATIONSHIPS.filter((r) => r.causal).map((r) => r.id)
);

/* ============================================================
   Evidence qualifiers (7) — preserve source uncertainty
   ============================================================ */

export const EVIDENCE_QUALIFIERS = [
  "established",
  "supported",
  "proposed",
  "uncertain",
  "preclinical",
  "mixed",
  "disputed",
] as const;

export type EvidenceQualifier = (typeof EVIDENCE_QUALIFIERS)[number];

/** Psychiatry course EvidenceGrade maps 1:1 onto the first four qualifiers. */
export const COURSE_GRADE_TO_QUALIFIER: Record<string, EvidenceQualifier> = {
  established: "established",
  supported: "supported",
  proposed: "proposed",
  uncertain: "uncertain",
};

export function isEvidenceQualifier(value: string): value is EvidenceQualifier {
  return (EVIDENCE_QUALIFIERS as readonly string[]).includes(value);
}

/* ============================================================
   Intervention actions (11) — seeded by mechanism-actions.ts
   ============================================================ */

export const INTERVENTION_ACTIONS = [
  "reuptake-inhibition",
  "receptor-agonism",
  "receptor-partial-agonism",
  "receptor-antagonism",
  "competitive-antagonism",
  "enzyme-inhibition",
  "enzyme-induction",
  "ion-channel-blockade",
  "autoreceptor-desensitisation",
  "allosteric-modulation",
  "negligible-affinity",
] as const;

export type InterventionAction = (typeof INTERVENTION_ACTIONS)[number];

export interface InterventionActionMeta {
  id: InterventionAction;
  /** Human label (mirrors the knowledge-graph chip labels where seeded). */
  label: string;
  /** Terminal used by the intervention edge (never colour alone). */
  terminal: EdgeTerminal;
}

export const INTERVENTION_ACTION_META: Record<InterventionAction, InterventionActionMeta> = {
  "reuptake-inhibition": { id: "reuptake-inhibition", label: "Reuptake inhibition", terminal: "tbar" },
  "receptor-agonism": { id: "receptor-agonism", label: "Receptor agonism", terminal: "arrow" },
  "receptor-partial-agonism": { id: "receptor-partial-agonism", label: "Partial agonism", terminal: "arrow" },
  "receptor-antagonism": { id: "receptor-antagonism", label: "Receptor antagonism", terminal: "tbar" },
  "competitive-antagonism": { id: "competitive-antagonism", label: "Competitive antagonism", terminal: "tbar" },
  "enzyme-inhibition": { id: "enzyme-inhibition", label: "Enzyme inhibition", terminal: "tbar" },
  "enzyme-induction": { id: "enzyme-induction", label: "Enzyme induction", terminal: "arrow" },
  "ion-channel-blockade": { id: "ion-channel-blockade", label: "Ion-channel blockade", terminal: "tbar" },
  "autoreceptor-desensitisation": { id: "autoreceptor-desensitisation", label: "Autoreceptor desensitisation", terminal: "tbar" },
  "allosteric-modulation": { id: "allosteric-modulation", label: "Allosteric modulation", terminal: "dot" },
  "negligible-affinity": { id: "negligible-affinity", label: "Negligible affinity", terminal: "dot" },
};

export function isInterventionAction(value: string): value is InterventionAction {
  return (INTERVENTION_ACTIONS as readonly string[]).includes(value);
}
