"use client";

import * as React from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { fetchWithRetry, isAbortError } from "@/lib/hooks/fetch-with-retry";
import { imgPath } from "@/lib/kyp/image-path";
import { atlasManifestPath } from "@/lib/anatomy/atlas-source";
import { useModelLoadingStore, type ModelErrorCategory } from "@/lib/anatomy/store/model-loading-store";

/**
 * BodyParts3D atlas data types.
 *
 * The atlas is distributed as:
 *  - atlas.json: a manifest with 2,234 parts, 3,432 concepts, 15 chunks
 *  - body-0.bin.gz through body-14.bin.gz: packed binary geometry data
 *
 * Each part has offsets into its chunk's binary buffer:
 *  - positions: Float32Array at offset `positions`, length vertexCount * 3
 *  - normals: Int16Array (normalized) at offset `normals`, length vertexCount * 3
 *  - indices: Uint32Array at offset `indices`, length indexCount
 *
 * License: CC BY 4.0 — BodyParts3D, © The Database Center for Life Science.
 * See public/models/ATTRIBUTION.md for full attribution.
 */

export type BP3DSystemId = string;

export interface BP3DPart {
  id: string;
  name: string;
  conceptId: string;
  system: BP3DSystemId;
  chunk: number;
  positions: number;
  normals: number;
  indices: number;
  vertexCount: number;
  indexCount: number;
  bounds: [number[], number[]];
}

export interface BP3DConcept {
  id: string;
  name: string;
  elements: string[];
}

export interface BP3DChunk {
  url: string;
  bytes: number;
  gzip?: string;
  gzipBytes?: number;
  /** Short content hash; appended as ?v= so chunks can be cached as immutable. */
  hash?: string;
}

export interface BP3DAtlas {
  version: string;
  parts: BP3DPart[];
  concepts: BP3DConcept[];
  chunks: BP3DChunk[];
  triangles: number;
}

/**
 * Loaded geometry per system — a single merged BufferGeometry with a
 * `partIndex` attribute so the shader can control per-part visibility,
 * selection, and explode offset.
 */
export interface SystemGeometry {
  systemId: string;
  geometry: THREE.BufferGeometry;
  /** Map of partIndex → part metadata, for picking. */
  parts: BP3DPart[];
}

/**
 * A load failure that knows which overlay category it belongs to:
 *  - "anatomy-asset": the manifest or a chunk could not be fetched, even
 *    after fetchWithRetry's backoff was exhausted.
 *  - "runtime": the data arrived but could not be decoded or merged into
 *    renderable geometry.
 *
 * Anything else reaching the final catch is a network-level error thrown by
 * fetchWithRetry and is treated as an "anatomy-asset" failure.
 */
class CategorizedLoadError extends Error {
  readonly category: ModelErrorCategory;

  constructor(message: string, category: ModelErrorCategory) {
    super(message);
    this.name = "CategorizedLoadError";
    this.category = category;
  }
}

/**
 * useAnatomyModel — loads the BodyParts3D atlas data and creates merged
 * BufferGeometries per anatomical system.
 *
 * Loading is resilient: every request goes through fetchWithRetry
 * (exponential backoff on network errors / 5xx / 429) and the whole
 * pipeline can be re-run without a page reload. The ModelLoadingOverlay's
 * "Try again" button calls retry() in the model-loading store, which bumps
 * `retryToken`; the effect below depends on that token, so it re-runs the
 * entire load — its cleanup first aborts every in-flight fetch (and any
 * pending backoff wait) from the previous attempt.
 *
 * Returns:
 *  - atlas: the parsed manifest (for the structure tree, inspector, etc.)
 *  - geometries: a map of systemId → SystemGeometry
 *  - progress: 0–100 (mirrored from the model-loading store)
 *  - error: string if loading failed (mirrored from the model-loading store)
 */
export function useAnatomyModel() {
  const [atlas, setAtlas] = React.useState<BP3DAtlas | null>(null);
  const [geometries, setGeometries] = React.useState<Map<string, SystemGeometry> | null>(null);

  // Progress and the human-readable error message live in the store so the
  // overlay (outside the Canvas) and this hook (inside the Canvas) always
  // agree; retry() clears them, which automatically resets this hook's
  // returned values too.
  const progress = useModelLoadingStore((s) => s.progress);
  const error = useModelLoadingStore((s) => s.error);

  // Retry wiring: retry() bumps this token and the load effect below
  // re-runs the whole pipeline whenever it changes.
  const retryToken = useModelLoadingStore((s) => s.retryToken);

  React.useEffect(() => {
    let disposed = false;
    const abort = new AbortController();

    // Fresh attempt — drop any data left over from a previous (failed) run.
    setAtlas(null);
    setGeometries(null);

    (async () => {
      try {
        // 1. Fetch atlas.json. Retried with exponential backoff on network
        // errors, 5xx and 429; permanent 4xx failures surface immediately.
        const res = await fetchWithRetry(imgPath(atlasManifestPath()), { signal: abort.signal });
        if (!res.ok) {
          throw new CategorizedLoadError(
            `Could not load anatomy manifest (HTTP ${res.status}).`,
            "anatomy-asset"
          );
        }
        let data: BP3DAtlas;
        try {
          data = await res.json();
        } catch {
          throw new CategorizedLoadError("Anatomy manifest is corrupt.", "anatomy-asset");
        }
        if (disposed) return;
        setAtlas(data);

        // 2. Fetch and decode each chunk, building per-system merged geometries
        const chunkBuffers: ArrayBuffer[] = new Array(data.chunks.length).fill(null);
        let loaded = 0;
        const store = useModelLoadingStore.getState();

        const loadChunk = async (ci: number) => {
          const chunk = data.chunks[ci];
          const compressed = !!chunk.gzip;
          const base = compressed ? chunk.gzip! : chunk.url;
          const response = await fetchWithRetry(imgPath(chunk.hash ? `${base}?v=${chunk.hash}` : base), {
            signal: abort.signal,
          });
          if (!response.ok) {
            throw new CategorizedLoadError(
              `Could not load chunk ${ci} (HTTP ${response.status}).`,
              "anatomy-asset"
            );
          }
          const payload = await response.arrayBuffer();

          // Check for gzip magic bytes
          const signature = new Uint8Array(payload, 0, Math.min(2, payload.byteLength));
          const isGzip = signature[0] === 0x1f && signature[1] === 0x8b;

          let buffer: ArrayBuffer;
          try {
            if (isGzip) {
              const stream = new Blob([payload]).stream().pipeThrough(new DecompressionStream("gzip"));
              buffer = await new Response(stream).arrayBuffer();
            } else {
              buffer = payload;
            }
          } catch {
            throw new CategorizedLoadError(`Could not decode chunk ${ci}.`, "runtime");
          }

          if (buffer.byteLength !== chunk.bytes) {
            throw new CategorizedLoadError(`Chunk ${ci} was incomplete.`, "anatomy-asset");
          }
          chunkBuffers[ci] = buffer;
          loaded++;
          const pct = Math.round((loaded / data.chunks.length) * 100);
          store.setProgress(pct);
        };

        // Load chunks with limited parallelism (3 at a time, like human-atlas)
        let cursor = 0;
        await Promise.all(
          Array.from({ length: 3 }, async () => {
            while (cursor < data.chunks.length) {
              const i = cursor++;
              await loadChunk(i);
              if (disposed) return;
            }
          })
        );

        if (disposed) return;

        // 3. Build per-system merged geometries.
        //
        // IMPORTANT: the `partIndex` attribute written into each geometry MUST
        // be the per-system index (0 .. entry.parts.length-1), NOT the global
        // part index (0 .. 2233). The rendering side (SystemMesh) builds a
        // DataTexture sized to ceilPowerOfTwo(perSystemPartCount) and indexes
        // it with per-system indices. If we wrote the global index here, the
        // shader would read out-of-bounds texels and per-part visibility /
        // selection / hover would silently break.
        const systemMap = new Map<string, { parts: BP3DPart[]; geometries: THREE.BufferGeometry[] }>();
        const result = new Map<string, SystemGeometry>();

        try {
          data.parts.forEach((part) => {
            const buffer = chunkBuffers[part.chunk];
            if (!buffer) return;

            const sys = part.system;
            if (!systemMap.has(sys)) {
              systemMap.set(sys, { parts: [], geometries: [] });
            }
            const entry = systemMap.get(sys)!;
            // Per-system index = the position this part will occupy in
            // entry.parts once pushed. This is the value the shader will use
            // to look up state in the per-system DataTexture.
            const perSystemIndex = entry.parts.length;

            const g = new THREE.BufferGeometry();
            g.setAttribute(
              "position",
              new THREE.BufferAttribute(new Float32Array(buffer, part.positions, part.vertexCount * 3), 3)
            );
            g.setAttribute(
              "normal",
              new THREE.BufferAttribute(new Int16Array(buffer, part.normals, part.vertexCount * 3), 3, true)
            );
            g.setIndex(new THREE.BufferAttribute(new Uint32Array(buffer, part.indices, part.indexCount), 1));

            // Store bounding box from manifest
            g.boundingBox = new THREE.Box3(
              new THREE.Vector3().fromArray(part.bounds[0]),
              new THREE.Vector3().fromArray(part.bounds[1])
            );
            g.computeBoundingSphere();

            // Add partIndex attribute — PER-SYSTEM index, NOT global.
            g.setAttribute(
              "partIndex",
              new THREE.BufferAttribute(new Float32Array(part.vertexCount).fill(perSystemIndex), 1)
            );

            entry.parts.push(part);
            entry.geometries.push(g);
          });

          // Merge geometries per system. mergeGeometries() does NOT compute
          // bounding box / sphere on the merged result, so we must do it
          // ourselves; otherwise Three.js frustum-culls the merged mesh using
          // a null bounding box and silently hides everything.
          systemMap.forEach((entry, sys) => {
            const merged = mergeGeometries(entry.geometries, false);
            if (merged) {
              merged.computeBoundingBox();
              merged.computeBoundingSphere();
              result.set(sys, {
                systemId: sys,
                geometry: merged,
                parts: entry.parts,
              });
            }
          });
        } catch (e) {
          // Geometry decode/build failure — free every geometry allocated so
          // far (per-part sources and any already-merged results), then
          // surface the error under the "runtime" category.
          systemMap.forEach((entry) => {
            entry.geometries.forEach((g) => g.dispose());
          });
          result.forEach((sg) => sg.geometry.dispose());
          throw new CategorizedLoadError(
            e instanceof Error && e.message ? e.message : "Could not build anatomy geometry.",
            "runtime"
          );
        }

        if (disposed) {
          // Cleanup
          result.forEach((sg) => sg.geometry.dispose());
          return;
        }

        setGeometries(result);
        useModelLoadingStore.getState().setLoaded(true);
      } catch (e) {
        // Aborts mean this attempt was superseded (unmount or retry), not
        // that loading failed — never surface them as errors.
        if (disposed || isAbortError(e)) return;

        const msg = e instanceof Error && e.message ? e.message : "Failed to load anatomy model.";
        // Anything uncategorised reaching this point is a network-level
        // error thrown by fetchWithRetry after its backoff was exhausted.
        const category: ModelErrorCategory =
          e instanceof CategorizedLoadError ? e.category : "anatomy-asset";
        useModelLoadingStore.getState().setError(msg, category);
      }
    })();

    return () => {
      disposed = true;
      // Cancels in-flight fetches AND any pending backoff waits, so a retry
      // or unmount never leaves stale requests from the previous attempt.
      abort.abort();
    };
  }, [retryToken]);

  return { atlas, geometries, progress, error };
}
