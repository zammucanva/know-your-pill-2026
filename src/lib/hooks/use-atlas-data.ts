"use client";

import * as React from "react";
import { imgPath } from "@/lib/kyp/image-path";
import type { BP3DAtlas, BP3DPart, BP3DConcept } from "./use-anatomy-model";

/**
 * useAtlasData — lightweight hook that loads just the atlas.json manifest
 * (without the geometry chunks). Used by UI components outside the R3F
 * Canvas (SystemsPanel, InspectorPanel) to look up part names, systems,
 * and concept groupings.
 *
 * The full atlas (with geometry) is loaded separately by useAnatomyModel
 * inside the Canvas.
 */

let cachedAtlas: BP3DAtlas | null = null;
let loadPromise: Promise<BP3DAtlas | null> | null = null;

async function loadAtlas(): Promise<BP3DAtlas | null> {
  if (cachedAtlas) return cachedAtlas;
  if (loadPromise) return loadPromise;
  loadPromise = (async () => {
    try {
      const res = await fetch(imgPath("/models/atlas.json"));
      if (!res.ok) return null;
      const data = (await res.json()) as BP3DAtlas;
      cachedAtlas = data;
      return data;
    } catch {
      return null;
    }
  })();
  return loadPromise;
}

export function useAtlasData() {
  const [atlas, setAtlas] = React.useState<BP3DAtlas | null>(cachedAtlas);
  const [loading, setLoading] = React.useState(!cachedAtlas);

  React.useEffect(() => {
    if (cachedAtlas) return;
    let active = true;
    loadAtlas().then((data) => {
      if (active && data) {
        setAtlas(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, []);

  const getPartById = React.useCallback(
    (id: string): BP3DPart | undefined => {
      return atlas?.parts.find((p) => p.id === id);
    },
    [atlas]
  );

  const getConceptById = React.useCallback(
    (id: string): BP3DConcept | undefined => {
      return atlas?.concepts.find((c) => c.id === id);
    },
    [atlas]
  );

  const getPartsBySystem = React.useCallback(
    (systemId: string): BP3DPart[] => {
      return atlas?.parts.filter((p) => p.system === systemId) ?? [];
    },
    [atlas]
  );

  const getConceptByPartId = React.useCallback(
    (partId: string): BP3DConcept | undefined => {
      if (!atlas) return undefined;
      const part = atlas.parts.find((p) => p.id === partId);
      if (!part) return undefined;
      return atlas.concepts.find((c) => c.id === part.conceptId);
    },
    [atlas]
  );

  return { atlas, loading, getPartById, getConceptById, getPartsBySystem, getConceptByPartId };
}
