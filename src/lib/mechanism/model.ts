/**
 * KYP Mechanism System — the typed, reusable mechanism data model.
 *
 * A `MechanismDefinition` is a pure, serializable JSON description of a
 * biological mechanism: semantic nodes, first-class typed edges, biological
 * compartments, drug interventions AT their point of action, timeline
 * stages, normal-vs-abnormal state panels, and accessibility text.
 *
 * DESIGN RULES
 *   1. Everything is optional except ids and labels — the model degrades
 *      gracefully from a full atlas-quality graph down to a linear adapted
 *      chain, WITHOUT inventing data the source does not contain.
 *   2. Biological level (molecular→clinical) lives in the DATA (`node.level`),
 *      never in CSS position.
 *   3. Uncertainty is representable: evidence qualifiers travel with edges
 *      and with the mechanism, and `associated_with` / `related_to` edges
 *      never assert causation.
 *   4. Interventions are first-class: a drug acts ON a target node at its
 *      actual causal point of action (spec §13/§14), never as a detached
 *      info card.
 */

import type {
  BiologicalLevel,
  EntityType,
  EvidenceQualifier,
  InterventionAction,
  RelationshipId,
} from "./vocabulary";

/* ============================================================
   Nodes
   ============================================================ */

export interface MechanismNode {
  /** Unique within the mechanism. */
  id: string;
  /** Primary label (verbatim from source data where one exists). */
  label: string;
  /** Optional subtitle / role description (verbatim where one exists). */
  sublabel?: string;
  /** What kind of biological entity this is (absent on adapted data — never inferred). */
  type?: EntityType;
  /** Biological level — encoded data, drives progressive disclosure. */
  level?: BiologicalLevel;
  /** Longer plain-language description (read by screen readers, shown in inspector). */
  description?: string;
  /** Owning compartment (id in `compartments`), when declared. */
  compartmentId?: string;
  /** Marks a node whose state the mechanism is "about" (e.g. the drug itself, the disease). */
  role?: "agent" | "context" | "endpoint";
}

/* ============================================================
   Edges
   ============================================================ */

export interface MechanismEdge {
  /** Unique within the mechanism. Auto-derived (`from→to#n`) when omitted. */
  id?: string;
  from: string;
  to: string;
  /** Controlled vocabulary relationship — carries the visual semantics. */
  relationship: RelationshipId;
  /** Verbatim source label (shown as the edge chip when present). */
  label?: string;
  /** Evidence qualifier travelling with this edge (source-graded only). */
  qualifier?: EvidenceQualifier;
  /** Free-text note (inspector / SR). */
  note?: string;
  /** When set, this edge IS the intervention edge for that intervention (dotted + action terminal). */
  interventionId?: string;
}

/* ============================================================
   Compartments (biological context — spec §14)
   ============================================================ */

export interface MechanismCompartment {
  id: string;
  label: string;
  description?: string;
}

/* ============================================================
   Interventions (drug at the causal action point — spec §13)
   ============================================================ */

export interface MechanismIntervention {
  id: string;
  /** The intervening agent, e.g. "Escitalopram (S-enantiomer)". */
  agentLabel: string;
  /** What kind of action the agent exerts (controlled vocabulary). */
  action: InterventionAction;
  /** The node id at which the agent acts (its point of action). */
  targetId: string;
  /** Effect label, e.g. "blocks (highly selective)" — shown on the intervention edge. */
  effectLabel?: string;
  /** Longer description for the inspector / screen readers. */
  description?: string;
}

/* ============================================================
   Timeline (temporal stages — only where source supports it)
   ============================================================ */

export interface MechanismTimelineStage {
  id: string;
  /** Stage label, e.g. "Acute (hours)". */
  label: string;
  /** Optional time range, e.g. "days 7–14". */
  range?: string;
  description?: string;
  /** Nodes belonging to this stage (used for focus + narration order). */
  nodeIds: string[];
}

/* ============================================================
   Normal vs abnormal (spec §15 — only where real data exists)
   ============================================================ */

export type StateDirection =
  | "increase"
  | "decrease"
  | "loss"
  | "accumulation"
  | "deficiency"
  | "compensation"
  | "normal";

export interface StateFinding {
  /** Node/quantity label (e.g. "Synaptic 5-HT"). */
  label: string;
  /** Direction of change in this state. */
  direction: StateDirection;
  /** The finding text (verbatim where possible). */
  text: string;
}

export interface MechanismStatePanel {
  /** Panel title, e.g. "Normal state" / "Disease state". */
  label: string;
  findings: StateFinding[];
}

/* ============================================================
   Clinical consequences
   ============================================================ */

export interface ClinicalConsequence {
  label: string;
  description: string;
}

/* ============================================================
   Related entities (navigation — mirrors knowledge-graph nodes)
   ============================================================ */

export interface RelatedEntity {
  label: string;
  type: string;
  href: string;
  note?: string;
}

/* ============================================================
   Evidence block
   ============================================================ */

export interface MechanismEvidence {
  /** Overall evidence grade of the model (mirrors course grades). */
  grade: EvidenceQualifier;
  /** One-paragraph honest grading of the mechanism model. */
  summary?: string;
  /** Provenance notes: where each string came from (pilots document these). */
  sources?: string[];
}

/* ============================================================
   Visual hints (presentation metadata — not medical data)
   ============================================================ */

export interface MechanismVisuals {
  /** Reading direction of the causal flow. Default "left-right". */
  layout?: "left-right" | "top-bottom";
  /** Show the on-canvas legend (default true). */
  showLegend?: boolean;
  /** Show biological-level chips (default: true when any node has a level). */
  showLevelChips?: boolean;
  /** Initial zoom clamp for small viewports (default 0.85). */
  minInitialZoom?: number;
}

/* ============================================================
   Accessibility
   ============================================================ */

export interface MechanismAccessibility {
  /** One-sentence overview for the aria-label of the canvas region. */
  summary: string;
  /** Optional long-form description (fallback <details> body when the canvas is unavailable). */
  description?: string;
}

/* ============================================================
   Branch / feedback declarations (descriptive metadata; the layout
   engine ALSO derives structure from the graph itself)
   ============================================================ */

export interface BranchDeclaration {
  /** Node from which paths diverge. */
  fromId: string;
  /** Labels of the diverging paths (narrative aid; nodes are in the edges). */
  pathLabels: string[];
}

export interface FeedbackLoopDeclaration {
  /** Edge ids participating in the loop (must exist in `edges`). */
  edgeIds: string[];
  /** Net loop direction. */
  direction: "negative" | "positive";
  /** Optional loop label. */
  label?: string;
}

/* ============================================================
   Scenarios (progressive disclosure — "What happens if ...?")
   Only where source data supports the answer. No invention.
   ============================================================ */

export interface MechanismScenario {
  id: string;
  /** The question, e.g. "What happens if this enzyme is inhibited?" */
  question: string;
  /** Source-supported answer. */
  answer: string;
  /** Nodes to focus when the scenario is active. */
  focusNodeIds?: string[];
}

/* ============================================================
   The definition itself
   ============================================================ */

export interface MechanismDefinition {
  /** Unique mechanism id, e.g. "pilot-escitalopram". */
  mechanismId: string;
  /** The KYP topic this mechanism belongs to (drug slug, course slug, ...). */
  topicId: string;
  /** The KYP topic kind, e.g. "drug" | "course" | "substance" | "disease". */
  topicKind?: string;
  title: string;
  summary: string;
  nodes: MechanismNode[];
  edges: MechanismEdge[];
  /** Descriptive branch metadata (structure is derived from edges). */
  branches?: BranchDeclaration[];
  /** Explicit feedback-loop declarations (edges typed feedback* render as return paths anyway). */
  feedbackLoops?: FeedbackLoopDeclaration[];
  timeline?: MechanismTimelineStage[];
  compartments?: MechanismCompartment[];
  interventions?: MechanismIntervention[];
  normalState?: MechanismStatePanel;
  abnormalState?: MechanismStatePanel;
  clinicalConsequences?: ClinicalConsequence[];
  scenarios?: MechanismScenario[];
  visuals?: MechanismVisuals;
  relatedEntities?: RelatedEntity[];
  evidence?: MechanismEvidence;
  accessibility: MechanismAccessibility;
  /** Provenance marker for migration classification (never rendered). */
  migration?: "fully-mapped" | "adapter-fallback" | "test-fixture";
}

/* ============================================================
   Migration classification (spec §27/§34)
   ============================================================ */

export type MigrationStatus = "FULLY_MAPPED" | "ADAPTER_FALLBACK" | "NO_MECHANISM" | "ERROR";

export interface MigrationClassification {
  topicId: string;
  kind: string;
  status: MigrationStatus;
  /** mechanismId of the rendering definition (when one exists). */
  mechanismId?: string;
  /** Human-readable note (e.g. "cannabis page: no flow exists in source"). */
  note?: string;
}
