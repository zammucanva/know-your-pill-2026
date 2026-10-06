/**
 * KYP Mechanism System — legacy adapter (the documented migration bridge).
 *
 * Converts the three legacy mechanism shapes into `MechanismDefinition`s so
 * every existing page can render KYPMechanismCanvas TODAY without touching
 * the locked data layer:
 *
 *   1. `Drug.mechanismFlow`        (145 drug pages)
 *   2. `PsychiatryCourse.mechanism` (109 course pages — grade → qualifier)
 *   3. `MechanismFlowStep[]`         (2 substance step flows)
 *
 * MEDICAL CONTENT FIREWALL (spec §9/§35):
 *   - node labels, sublabels and edge labels are copied VERBATIM;
 *   - the single documented transformation is the legacy edge field rename
 *     `type:"inhibit"` → relationship `inhibits` (and `"stimulate"` →
 *     `stimulates`); untyped legacy edges become the NEUTRAL `leads_to`
 *     (never strengthened into activation);
 *   - adapted graphs carry NO entity types / levels / compartments /
 *     interventions / timelines — that richness is exactly what the next
 *     content-mapping phase adds (hence `migration: "adapter-fallback"`).
 *
 * The adapter is a bridge, NOT a migration: pages it serves are classified
 * ADAPTER_FALLBACK by the census (spec §27/§34) and must never be reported
 * as fully mapped.
 */

import type {
  MechanismDefinition,
  MechanismEdge,
  MechanismNode,
} from "./model";
import type {
  EvidenceQualifier,
} from "./vocabulary";
import { COURSE_GRADE_TO_QUALIFIER } from "./vocabulary";

/* Legacy shapes (structural mirrors of the locked data types — no import
   from the data layer here so this module stays framework-pure and testable). */

export interface LegacyMechanismFlowNode {
  id: string;
  label: string;
  sublabel?: string;
  variant?: string;
}

export interface LegacyMechanismFlowEdge {
  from: string;
  to: string;
  label?: string;
  type?: "stimulate" | "inhibit";
}

export interface LegacyMechanismFlow {
  nodes: LegacyMechanismFlowNode[];
  edges: LegacyMechanismFlowEdge[];
  caption?: string;
}

export interface LegacyCourseMechanism {
  summary: string;
  steps: string[];
  grade: string;
}

export interface LegacyMechanismFlowStep {
  step: string;
  title: string;
  description: string;
}

/* ============================================================
   1. Drug mechanismFlow → MechanismDefinition
   ============================================================ */

export function fromDrugMechanismFlow(input: {
  drugSlug: string;
  drugName: string;
  mechanismSummary?: string;
  mechanismFlow: LegacyMechanismFlow;
}): MechanismDefinition {
  const { drugSlug, drugName, mechanismSummary, mechanismFlow: flow } = input;

  const nodes: MechanismNode[] = flow.nodes.map((n) => ({
    id: n.id,
    label: n.label,
    sublabel: n.sublabel,
  }));

  const edges: MechanismEdge[] = flow.edges.map((e) => {
    // The ONLY documented transformation: the legacy typed field rename.
    let relationship: MechanismEdge["relationship"];
    if (e.type === "inhibit") relationship = "inhibits";
    else if (e.type === "stimulate") relationship = "stimulates";
    else relationship = "leads_to"; // neutral chaining — never strengthened
    return { from: e.from, to: e.to, relationship, label: e.label };
  });

  const firstSentence = mechanismSummary
    ? mechanismSummary.split(/(?<=\.)\s/)[0]
    : "";

  return {
    mechanismId: `adapted-drug-${drugSlug}`,
    topicId: drugSlug,
    topicKind: "drug",
    title: `${drugName}: mechanism flow`,
    summary: firstSentence || `${drugName} mechanism of action, adapted verbatim from the locked drug data.`,
    nodes,
    edges,
    migration: "adapter-fallback",
    accessibility: {
      summary: `Mechanism diagram of ${drugName}, adapted verbatim from the drug's mechanism data.`,
      description: flow.caption ?? undefined,
    },
    evidence: undefined,
  };
}

/* ============================================================
   2. Psychiatry course mechanism → MechanismDefinition
   ============================================================ */

export function fromCourseMechanism(input: {
  courseSlug: string;
  courseTitle: string;
  mechanism: LegacyCourseMechanism;
}): MechanismDefinition {
  const { courseSlug, courseTitle, mechanism } = input;

  const nodes: MechanismNode[] = mechanism.steps.map((step, i) => ({
    id: `s${i + 1}`,
    label: step,
  }));

  const edges: MechanismEdge[] = mechanism.steps.slice(0, -1).map((_, i) => ({
    from: `s${i + 1}`,
    to: `s${i + 2}`,
    relationship: "leads_to",
  }));

  const qualifier: EvidenceQualifier | undefined =
    COURSE_GRADE_TO_QUALIFIER[mechanism.grade];
  if (qualifier) {
    for (const e of edges) e.qualifier = qualifier;
  }

  const firstSentence = mechanism.summary.split(/(?<=\.)\s/)[0] || "";

  return {
    mechanismId: `adapted-course-${courseSlug}`,
    topicId: courseSlug,
    topicKind: "course",
    title: `${courseTitle}: mechanism`,
    summary: firstSentence || `${courseTitle} mechanism, adapted verbatim from the course data.`,
    nodes,
    edges,
    migration: "adapter-fallback",
    accessibility: {
      summary: `Mechanism of ${courseTitle} as a sequence of ${mechanism.steps.length} teaching steps, adapted verbatim from the course data.`,
      description: mechanism.summary,
    },
    evidence: qualifier ? { grade: qualifier } : undefined,
  };
}

/* ============================================================
   3. Substance MechanismFlowStep[] → MechanismDefinition
   ============================================================ */

export function fromSubstanceStepFlow(input: {
  substanceSlug: string;
  substanceName: string;
  flowTitle: string;
  steps: LegacyMechanismFlowStep[];
}): MechanismDefinition {
  const { substanceSlug, substanceName, flowTitle, steps } = input;

  const nodes: MechanismNode[] = steps.map((s, i) => ({
    id: `s${i + 1}`,
    label: s.title,
    sublabel: s.description,
  }));

  const edges: MechanismEdge[] = steps.slice(0, -1).map((_, i) => ({
    from: `s${i + 1}`,
    to: `s${i + 2}`,
    relationship: "leads_to",
  }));

  return {
    mechanismId: `adapted-substance-${substanceSlug}-${flowTitle.toLowerCase().replace(/\s+/g, "-")}`,
    topicId: substanceSlug,
    topicKind: "substance",
    title: `${flowTitle} (${substanceName})`,
    summary: `${flowTitle} on the ${substanceName} page: ${steps.length} steps, adapted verbatim from the substance data.`,
    nodes,
    edges,
    migration: "adapter-fallback",
    accessibility: {
      summary: `${flowTitle} mechanism on the ${substanceName} page, adapted verbatim from the substance data.`,
    },
  };
}
