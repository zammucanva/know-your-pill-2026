/**
 * KYP Mechanism System — accessibility text derived FROM THE DATA.
 *
 * Every string a screen reader needs is composed here, once, from the
 * definition itself: node labels, relationship verbs (from the controlled
 * vocabulary), evidence qualifiers, interventions, states and timeline.
 * The canvas composes these into aria-labels; the server-rendered fallback
 * `<details>` uses `describeMechanism` verbatim so the no-JS story equals
 * the graph story (spec §29).
 */

import type { MechanismDefinition, MechanismEdge, MechanismNode } from "./model";
import { getEntityMeta, getRelationshipMeta, INTERVENTION_ACTION_META } from "./vocabulary";

/** "SERT transporter (transporter, molecular level). Normally reuptakes serotonin." */
export function describeNode(node: MechanismNode): string {
  const parts: string[] = [node.label];
  const typeBits: string[] = [];
  if (node.type) typeBits.push(getEntityMeta(node.type).label.toLowerCase());
  if (node.level) typeBits.push(`${node.level} level`);
  if (typeBits.length > 0) parts.push(`(${typeBits.join(", ")})`);
  if (node.sublabel) parts.push(node.sublabel);
  if (node.description) parts.push(node.description);
  return parts.join(" ");
}

/** "Presynaptic neuron releases Serotonin (5-HT)" (+ qualifier + label). */
export function describeEdge(def: MechanismDefinition, edge: MechanismEdge): string {
  const from = def.nodes.find((n) => n.id === edge.from);
  const to = def.nodes.find((n) => n.id === edge.to);
  const rel = getRelationshipMeta(edge.relationship);
  const verb = rel?.srVerb ?? edge.relationship.replace(/_/g, " ");
  const fromLabel = from?.label ?? edge.from;
  const toLabel = to?.label ?? edge.to;
  let sentence = `${fromLabel} ${verb} ${toLabel}`;
  if (edge.label && rel && edge.label.toLowerCase() !== verb.toLowerCase()) {
    sentence += ` (${edge.label})`;
  }
  if (edge.qualifier) sentence += ` (evidence: ${edge.qualifier})`;
  if (edge.interventionId) {
    const iv = def.interventions?.find((iv) => iv.id === edge.interventionId);
    if (iv) sentence += ` [intervention: ${INTERVENTION_ACTION_META[iv.action]?.label ?? iv.action}]`;
  }
  return sentence;
}

/** Selected-node announcement with upstream/downstream explanation. */
export function describeNodeContext(def: MechanismDefinition, nodeId: string): string {
  const node = def.nodes.find((n) => n.id === nodeId);
  if (!node) return "";
  const lines: string[] = [describeNode(node)];

  const upstream = (def.edges ?? []).filter((e) => e.to === nodeId);
  if (upstream.length > 0) {
    lines.push(`Upstream: ${upstream.map((e) => describeEdge(def, e)).join("; ")}.`);
  } else {
    lines.push("Upstream: this is where the mechanism begins.");
  }

  const downstream = (def.edges ?? []).filter((e) => e.from === nodeId);
  if (downstream.length > 0) {
    lines.push(`Downstream: ${downstream.map((e) => describeEdge(def, e)).join("; ")}.`);
  } else {
    lines.push("Downstream: this is an endpoint of the mechanism.");
  }

  const interventions = (def.interventions ?? []).filter((iv) => iv.targetId === nodeId);
  for (const iv of interventions) {
    const action = INTERVENTION_ACTION_META[iv.action]?.label ?? iv.action;
    lines.push(`Intervention: ${iv.agentLabel} acts here: ${action}${iv.effectLabel ? ` (${iv.effectLabel})` : ""}.`);
  }

  const stage = def.timeline?.find((t) => t.nodeIds.includes(nodeId));
  if (stage) lines.push(`Stage: ${stage.label}${stage.range ? ` (${stage.range})` : ""}.`);

  return lines.join(" ");
}

/** The full mechanism as text — used by the no-JS/SEO fallback. */
export function describeMechanism(def: MechanismDefinition): string {
  const blocks: string[] = [];

  blocks.push(`${def.title}. ${def.summary}`);

  if (def.accessibility.description) {
    blocks.push(def.accessibility.description);
  }

  if (def.compartments && def.compartments.length > 0) {
    blocks.push(`Context: ${def.compartments.map((c) => c.label).join(", ")}.`);
  }

  const stages = def.timeline ?? [];
  if (stages.length > 0) {
    blocks.push(`Timeline: ${stages.map((s) => `${s.label}${s.range ? ` (${s.range})` : ""}`).join(" → ")}.`);
  }

  const edges = def.edges ?? [];
  if (edges.length > 0) {
    blocks.push(`Causal relationships: ${edges.map((e) => describeEdge(def, e)).join("; ")}.`);
  }

  for (const iv of def.interventions ?? []) {
    const target = def.nodes.find((n) => n.id === iv.targetId);
    const action = INTERVENTION_ACTION_META[iv.action]?.label ?? iv.action;
    blocks.push(
      `Intervention: ${iv.agentLabel} acts on ${target?.label ?? iv.targetId}: ${action}${
        iv.effectLabel ? ` (${iv.effectLabel})` : ""
      }${iv.description ? `. ${iv.description}` : ""}`
    );
  }

  if (def.normalState && def.abnormalState) {
    blocks.push(
      `Normal state (${def.normalState.label}): ${def.normalState.findings.map((f) => `${f.label}: ${f.text}`).join(" ")}`
    );
    blocks.push(
      `${def.abnormalState.label}: ${def.abnormalState.findings.map((f) => `${f.label}: ${f.text}`).join(" ")}`
    );
  }

  if (def.clinicalConsequences?.length) {
    blocks.push(`Clinical consequences: ${def.clinicalConsequences.map((c) => `${c.label}: ${c.description}`).join(" ")}`);
  }

  if (def.scenarios?.length) {
    for (const s of def.scenarios) blocks.push(`${s.question} ${s.answer}`);
  }

  if (def.evidence) {
    blocks.push(
      `Evidence grade: ${def.evidence.grade}.${def.evidence.summary ? ` ${def.evidence.summary}` : ""}`
    );
  }

  return blocks.join("\n\n");
}

/** Edge-sentence list only (for the aria description of the graph region). */
export function describeEdges(def: MechanismDefinition): string {
  return (def.edges ?? []).map((e) => describeEdge(def, e)).join("; ");
}
