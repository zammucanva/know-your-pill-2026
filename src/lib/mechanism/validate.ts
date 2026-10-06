/**
 * KYP Mechanism System — fail-loud validation.
 *
 * A definition that does not validate is a programming error, not a
 * graceful-degradation case: silent discarding of nodes/edges is exactly
 * how medical content gets lost. `validateMechanism` THROWS on the first
 * problem and `collectMechanismErrors` returns them all (used by tests).
 *
 * Structural checks (all of them):
 *   - unique mechanismId / topicId / title / accessibility.summary present
 *   - node ids unique and non-empty; labels non-empty
 *   - edge endpoints resolve; relationship ids are in the closed vocabulary
 *   - no duplicate edges (same from+to+relationship)
 *   - compartmentId references resolve
 *   - intervention targetIds resolve; intervention agents may not also be
 *     plain nodes unless they are part of the causal graph (allowed — the
 *     drug IS a causal node in drug mechanisms)
 *   - timeline nodeIds resolve
 *   - feedbackLoop edgeIds resolve and must be feedback-shaped
 *   - branch fromIds resolve
 *   - at least one node; a graph with 1 node must have 0 edges
 */

import type { MechanismDefinition, MechanismNode } from "./model";
import { getRelationshipMeta, isInterventionAction } from "./vocabulary";

export class MechanismValidationError extends Error {
  readonly mechanismId: string;
  readonly errors: string[];
  constructor(mechanismId: string, errors: string[]) {
    super(`Mechanism "${mechanismId}" failed validation:\n  - ${errors.join("\n  - ")}`);
    this.name = "MechanismValidationError";
    this.mechanismId = mechanismId;
    this.errors = errors;
  }
}

export function collectMechanismErrors(def: MechanismDefinition): string[] {
  const errors: string[] = [];
  const push = (e: string) => errors.push(e);

  // --- top-level ---
  if (!def.mechanismId || typeof def.mechanismId !== "string") push("mechanismId is required");
  if (!def.topicId || typeof def.topicId !== "string") push("topicId is required");
  if (!def.title || typeof def.title !== "string") push("title is required");
  if (!def.summary || typeof def.summary !== "string") push("summary is required");
  if (!def.accessibility?.summary) push("accessibility.summary is required (screen-reader overview)");
  if (!Array.isArray(def.nodes) || def.nodes.length === 0) push("at least one node is required");

  const nodes = def.nodes as MechanismNode[];
  const nodeIds = new Set<string>();
  for (const n of nodes) {
    if (!n.id) push(`node with label "${n.label}" has no id`);
    else if (nodeIds.has(n.id)) push(`duplicate node id "${n.id}"`);
    else nodeIds.add(n.id);
    if (!n.label || !n.label.trim()) push(`node "${n.id}" has an empty label`);
  }

  // --- edges ---
  if (def.edges !== undefined && !Array.isArray(def.edges)) push("edges must be an array");
  const edges = def.edges ?? [];
  const edgeIdSet = new Set<string>();
  const seenEdgeKeys = new Set<string>();
  edges.forEach((e, i) => {
    const where = `edge[${i}]`;
    if (!e.from || !nodeIds.has(e.from)) push(`${where}: "from" (${e.from}) does not resolve to a node`);
    if (!e.to || !nodeIds.has(e.to)) push(`${where}: "to" (${e.to}) does not resolve to a node`);
    const rel = getRelationshipMeta(e.relationship);
    if (!rel) push(`${where}: unknown relationship "${e.relationship}" (closed vocabulary)`);
    if (e.from && e.from === e.to) push(`${where}: self-loop on "${e.from}" — use a feedback relationship instead`);
    const key = `${e.from ?? "?"}→${e.to ?? "?"}:${e.relationship}`;
    if (seenEdgeKeys.has(key)) push(`${where}: duplicate edge ${key}`);
    seenEdgeKeys.add(key);
    if (e.id) {
      if (edgeIdSet.has(e.id)) push(`${where}: duplicate edge id "${e.id}"`);
      edgeIdSet.add(e.id);
    }
    if (e.qualifier && !["established", "supported", "proposed", "uncertain", "preclinical", "mixed", "disputed"].includes(e.qualifier)) {
      push(`${where}: unknown evidence qualifier "${e.qualifier}"`);
    }
  });

  // --- edge→intervention references ---
  const interventionIds = new Set((def.interventions ?? []).map((iv) => iv.id));
  edges.forEach((e, i) => {
    if (e.interventionId && !interventionIds.has(e.interventionId)) {
      push(`edge[${i}]: interventionId "${e.interventionId}" does not resolve to an intervention`);
    }
    if (e.interventionId) {
      const iv = (def.interventions ?? []).find((iv) => iv.id === e.interventionId);
      if (iv && e.to !== iv.targetId) {
        push(`edge[${i}]: intervention edge targets "${e.to}" but intervention "${iv.id}" targets "${iv.targetId}"`);
      }
    }
  });

  // --- compartments ---
  const compartmentIds = new Set<string>();
  (def.compartments ?? []).forEach((c, i) => {
    if (!c.id) push(`compartments[${i}] has no id`);
    else if (compartmentIds.has(c.id)) push(`duplicate compartment id "${c.id}"`);
    else compartmentIds.add(c.id);
    if (!c.label) push(`compartment "${c.id}" has no label`);
  });
  for (const n of nodes) {
    if (n.compartmentId && !compartmentIds.has(n.compartmentId)) {
      push(`node "${n.id}" references unknown compartment "${n.compartmentId}"`);
    }
  }

  // --- interventions ---
  (def.interventions ?? []).forEach((iv, i) => {
    const where = `interventions[${i}]`;
    if (!iv.id) push(`${where} has no id`);
    if (!iv.agentLabel) push(`${where} (${iv.id}) has no agentLabel`);
    if (!iv.targetId || !nodeIds.has(iv.targetId)) {
      push(`${where} (${iv.id}): targetId "${iv.targetId}" does not resolve to a node`);
    }
    if (!isInterventionAction(iv.action)) {
      push(`${where} (${iv.id}): unknown intervention action "${iv.action}" (closed vocabulary)`);
    }
  });

  // --- timeline ---
  (def.timeline ?? []).forEach((t, i) => {
    const where = `timeline[${i}]`;
    if (!t.id) push(`${where} has no id`);
    if (!t.label) push(`${where} (${t.id}) has no label`);
    if (!Array.isArray(t.nodeIds)) push(`${where} (${t.id}): nodeIds must be an array`);
    else
      t.nodeIds.forEach((nid) => {
        if (!nodeIds.has(nid)) push(`${where} (${t.id}): node id "${nid}" does not resolve`);
      });
  });

  // --- feedback loops ---
  (def.feedbackLoops ?? []).forEach((f, i) => {
    const where = `feedbackLoops[${i}]`;
    if (!Array.isArray(f.edgeIds) || f.edgeIds.length === 0) push(`${where} needs at least one edgeId`);
    else
      f.edgeIds.forEach((eid) => {
        const edge = edges.find((e) => (e.id ?? `e-${e.from}-${e.to}-${edges.indexOf(e)}`) === eid);
        if (!edge) push(`${where}: edge id "${eid}" does not resolve`);
        else {
          const rel = getRelationshipMeta(edge.relationship);
          if (rel && rel.shape !== "return") {
            push(`${where}: edge "${eid}" has relationship "${edge.relationship}" which is not feedback-shaped`);
          }
        }
      });
    if (f.direction !== "negative" && f.direction !== "positive") {
      push(`${where}: direction must be "negative" | "positive"`);
    }
  });

  // --- branches ---
  (def.branches ?? []).forEach((b, i) => {
    if (!b.fromId || !nodeIds.has(b.fromId)) {
      push(`branches[${i}]: fromId "${b.fromId}" does not resolve to a node`);
    }
    if (!Array.isArray(b.pathLabels) || b.pathLabels.length < 2) {
      push(`branches[${i}]: a branch needs at least 2 pathLabels`);
    }
  });

  // --- states ---
  for (const key of ["normalState", "abnormalState"] as const) {
    const panel = def[key];
    if (panel !== undefined) {
      if (!panel.label) push(`${key}.label is required`);
      if (!Array.isArray(panel.findings) || panel.findings.length === 0) {
        push(`${key} needs at least one finding`);
      } else {
        panel.findings.forEach((f, i) => {
          if (!f.label) push(`${key}.findings[${i}] has no label`);
          if (!f.text) push(`${key}.findings[${i}] ("${f.label}") has no text`);
        });
      }
    }
  }
  if (def.normalState && !def.abnormalState) push("normalState declared without abnormalState (declare both or neither)");
  if (def.abnormalState && !def.normalState) push("abnormalState declared without normalState (declare both or neither)");

  return errors;
}

/** Fail-loud entry point. */
export function validateMechanism(def: MechanismDefinition): MechanismDefinition {
  const errors = collectMechanismErrors(def);
  if (errors.length > 0) throw new MechanismValidationError(def.mechanismId, errors);
  return def;
}

export function isValidMechanism(def: MechanismDefinition): boolean {
  return collectMechanismErrors(def).length === 0;
}
