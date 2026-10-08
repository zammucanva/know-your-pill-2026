/**
 * Registry adapter: builds the FactStore from KYP's real content layer.
 *
 * Kept apart from the core engine on purpose. Everything else in the
 * Question Factory takes a FactStore as a parameter and never imports the
 * 145-monograph registry, so the engine stays testable offline on small
 * fixtures. Only this module (and the UI that needs real data) pulls the
 * registry in.
 *
 * Read-only: nothing under src/lib/kyp/data is modified.
 */

import { brainRegions, pathways } from "@/lib/kyp/data/brain";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { getDrugKnowledgeChain, knowledgeGraph } from "@/lib/kyp/knowledge";
import { buildFactStore, type FactStore } from "./facts";

let cached: FactStore | null = null;

/** The fact store derived from the live registry (built once, memoised). */
export function getRegistryFactStore(): FactStore {
  if (cached) return cached;
  cached = buildFactStore({
    drugs,
    brainRegions,
    pathways,
    targets: [...knowledgeGraph.targets.values()],
    primaryTargetOf: (slug) =>
      getDrugKnowledgeChain(slug)?.drug.primaryTarget.primaryTargetId ?? null,
  });
  return cached;
}
