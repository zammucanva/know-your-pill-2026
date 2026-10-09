"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AnatomyScene } from "./anatomy-scene";
import { useDeviceTier } from "@/lib/hooks/use-device-tier";
import { useModelLoadingStore } from "@/lib/anatomy/store/model-loading-store";

/**
 * AnatomyCanvas — the R3F <Canvas> wrapper.
 *
 * Device-aware rendering:
 *  - Adaptive DPR per device tier (phones render at reduced resolution)
 *  - touch-action: none on the canvas so OrbitControls receives pinch
 *    gestures instead of the browser scrolling/zooming the page
 *  - WebGL availability gate — when the context cannot be created the
 *    loading store receives a categorized "webgl" error and the overlay
 *    renders an actionable card instead of a dead canvas
 */
const DPR_BY_TIER = {
  low: [0.75, 1.25] as [number, number],
  medium: [1, 1.75] as [number, number],
  high: [1, 2] as [number, number],
};

function webglSupported(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function AnatomyCanvas() {
  const tier = useDeviceTier();
  const setError = useModelLoadingStore((s) => s.setError);
  const [glOk, setGlOk] = React.useState(true);

  React.useEffect(() => {
    if (!webglSupported()) {
      setError("WebGL is not available on this device or browser.", "webgl");
      setGlOk(false);
    }
  }, [setError]);

  if (!glOk) return null;

  return (
    <Canvas
      camera={{ position: [0, 0.9, 3.6], fov: 34, near: 0.01, far: 100 }}
      gl={{
        antialias: tier !== "low",
        alpha: false,
        powerPreference: "high-performance",
      }}
      dpr={DPR_BY_TIER[tier]}
      frameloop="demand"
      style={{ background: "transparent", touchAction: "none" }}
    >
      <Suspense fallback={null}>
        <AnatomyScene />
      </Suspense>
    </Canvas>
  );
}
