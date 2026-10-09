"use client";

import * as React from "react";
import { useAtlasData } from "@/lib/hooks/use-atlas-data";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useCameraStore } from "@/lib/anatomy/store/camera-store";
import { useModelLoadingStore } from "@/lib/anatomy/store/model-loading-store";
import { brainStructureGroups } from "@/lib/anatomy/brain-registry";

/**
 * /anatomy?brain=<group id> (used by the Synapse Studio region links) opens Brain Mode and
 * selects the main structure of that group once the model has loaded (the camera focus needs the geometry).
 */
export function useBrainDeepLink() {
  const { atlas } = useAtlasData();
  const loaded = useModelLoadingStore((s) => s.loaded);
  const done = React.useRef(false);
  React.useEffect(() => {
    if (done.current || !atlas || !loaded) return;
    const id = new URLSearchParams(window.location.search).get("brain");
    if (!id) return;
    done.current = true;
    const group = brainStructureGroups.find((g) => g.id === id);
    if (!group) return;
    const concepts = new Map(atlas.concepts.map((c) => [c.id, c]));
    // the concept with the most parts is the group's main structure (e.g. the thalamus itself)
    const main = group.conceptIds
      .map((cid) => concepts.get(cid))
      .filter((c): c is NonNullable<typeof c> => !!c)
      .sort((a, b) => b.elements.length - a.elements.length)[0];
    const partId = main?.elements[0];
    useAnatomyStore.getState().enterBrainMode();
    if (partId) {
      useAnatomyStore.getState().selectStructure(partId);
      useCameraStore.getState().setFocusTarget(partId);
    }
  }, [atlas, loaded]);
}
