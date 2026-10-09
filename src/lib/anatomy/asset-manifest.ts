/**
 * Asset manifest — the bridge between the anatomy engine and the 3D asset.
 *
 * The engine is model-agnostic: it reads structure_id → meshName mappings
 * from this manifest. When a real anatomical GLB is sourced, only this
 * file changes (and the GLB file in /public/models/). No component code
 * changes.
 *
 * ─── Status ─────────────────────────────────────────────────────
 * The REAL BodyParts3D model is now loaded. The data lives in:
 *   - /public/models/atlas.json (manifest with 2,234 parts)
 *   - /public/models/body-0.bin.gz through body-14.bin.gz (geometry chunks)
 *
 * License: CC BY 4.0 — BodyParts3D, © The Database Center for Life Science.
 * See public/models/ATTRIBUTION.md for full attribution.
 */

export type AssetKind = "placeholder" | "real";

export interface AssetManifest {
  /** Whether this is the placeholder or a real anatomical asset. */
  kind: AssetKind;
  /** Human-readable label for the model status badge. */
  statusLabel: string;
  /** Whether Draco compression is enabled. */
  draco: boolean;
  /** Whether meshopt compression is enabled. */
  meshopt: boolean;
  /** License attribution (required for real assets). */
  license?: string;
  /** Source URL (required for real assets). */
  sourceUrl?: string;
  /** Total number of individually selectable structures. */
  structureCount?: number;
}

export const assetManifest: AssetManifest = {
  kind: "real",
  statusLabel: "BodyParts3D — 2,234 structures loaded",
  draco: false,
  meshopt: true,
  license: "CC BY 4.0 — BodyParts3D, © The Database Center for Life Science",
  sourceUrl: "https://dbarchive.biosciencedbc.jp/en/bodyparts3d/",
  structureCount: 2234,
};
