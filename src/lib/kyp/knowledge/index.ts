/**
 * Barrel export for the KYP knowledge layer.
 *
 *   import { getDrugKnowledgeChain, knowledgeGraph } from "@/lib/kyp/knowledge";
 *
 * Pure data derivation — no React, no client dependencies — so both the
 * component layer and the bun test suite consume the exact same module.
 */

export {
  getDrugKnowledgeChain,
  getKnowledgeChainSlugs,
  knowledgeGraph,
  knowledgeTargets,
  knowledgeNeurotransmitters,
  cranialNerves,
  resolveConditionDisplayName,
  conditionKeyFromName,
  isPlainConditionName,
} from "./graph";

export type {
  TargetKind,
  KnowledgeTarget,
  KnowledgeNeurotransmitter,
  KnowledgeCondition,
  CranialNerveNode,
  TargetEdge,
  ConditionEdge,
  SideEffectEdge,
  DrugKnowledgeChainDrug,
  KnowledgeChainBrainRegion,
  KnowledgeChainPathway,
  DrugKnowledgeChain,
} from "./graph";

export {
  mechanismActions,
  getMechanismActionLabel,
} from "./entities/mechanism-actions";
export type { MechanismAction } from "./entities/mechanism-actions";
