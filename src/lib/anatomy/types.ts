/**
 * KYP Anatomy — anatomical data types.
 *
 * The engine is model-agnostic: it reads structure_id → meshName mappings
 * from asset-manifest.ts. When a real anatomical GLB is sourced, only the
 * manifest changes — no component code changes.
 */

export type SystemId =
  | "skeletal"
  | "muscular"
  | "nervous"
  | "cardiac"
  | "sensory"
  | "arterial"
  | "venous"
  | "respiratory"
  | "digestive"
  | "endocrine"
  | "urinary"
  | "reproductive"
  | "lymphatic"
  | "integumentary"
  | "connective";

export interface AnatomicalSystem {
  id: SystemId;
  name: string;
  description: string;
  /** Accent color for the system — used for structure highlight, panel accent. */
  color: string;
  /** Whether the system is visible by default on first load. */
  defaultVisible: boolean;
  /** Icon name from lucide-react. */
  icon: string;
}

export interface AnatomicalStructure {
  /** Stable id — never changes even if the GLB mesh name changes. */
  id: string;
  systemId: SystemId;
  /** Parent structure id — for hierarchical tree rendering. */
  parentId?: string;
  name: string;
  /** Optional region grouping — e.g. "Limbic System", "Basal Ganglia". */
  region?: string;
  /** Plain-language functions. */
  functions: string[];
  /** Clinical relevance — plain language. */
  clinicalRelevance?: string;
  /** Short anatomical description — location, connections, subdivisions. */
  anatomyDescription?: string;
  /**
   * The mesh name inside the GLB. When a real GLB is sourced, the asset
   * manifest maps structure_id → meshName. The placeholder body uses the
   * same meshName field to keep the architecture identical.
   */
  meshName: string;
  /** Predefined explode direction — normalised vector. */
  explodeVector: [number, number, number];
  /** Explode magnitude — how far the structure moves at explodeLevel = 1. */
  explodeMagnitude: number;
  /** KYP links — neurotransmitters, receptors, drugs, disorders, pathways. */
  kypLinks?: {
    neurotransmitters?: string[];
    receptors?: string[];
    pathways?: string[];
    drugs?: string[];
    disorders?: string[];
  };
}
