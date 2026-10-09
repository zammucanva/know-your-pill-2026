"use client";

import * as React from "react";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useTheme } from "next-themes";
import { CameraRig } from "./camera-rig";
import { AnatomyModel } from "./anatomy-model";

/**
 * Studio backdrop colors per theme — hex approximations of the KYP token
 * --viewport-backdrop (light: cool paper, dark: deep navy). The WebGL
 * buffer is opaque (alpha: false), so the scene background — not CSS —
 * defines what surrounds the model.
 */
const BACKDROP_BY_THEME = {
  light: "#eef2f7", // ≈ oklch(96.5% .008 220)
  dark: "#131722", // ≈ oklch(16% .02 250)
} as const;

/**
 * AnatomyScene — the R3F scene graph.
 *
 * Renders the REAL BodyParts3D anatomical model and the camera rig.
 * The engine wires up:
 *  - Theme-aware studio backdrop (declarative scene background — R3F
 *    reconstructs the color when args change and invalidates the
 *    demand-mode loop)
 *  - System visibility (each structure's visibility depends on its system's flag)
 *  - Per-structure click + hover (drives the inspector + 3D highlight)
 *  - Camera rig (orbit controls + view presets + focus animation)
 *  - Explode controller
 */
export function AnatomyScene() {
  // KYP's global theme (next-themes) is the only theme switch; the scene follows it.
  const { resolvedTheme } = useTheme();
  const backdrop =
    resolvedTheme === "dark" ? BACKDROP_BY_THEME.dark : BACKDROP_BY_THEME.light;

  return (
    <>
      {/* Theme-aware studio backdrop */}
      <color attach="background" args={[backdrop]} />

      <CameraRig />

      {/* Lighting — neutral, even, clinical */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 4]} intensity={0.8} castShadow />
      <directionalLight position={[-3, 2, -4]} intensity={0.3} />
      <hemisphereLight args={["#ffffff", "#a7acb2", 0.5]} />

      {/* The real BodyParts3D anatomical model */}
      <AnatomyModel />

      {/* Click on empty space deselects */}
      <mesh
        position={[0, 0, -5]}
        scale={[20, 20, 0.1]}
        onClick={() => useAnatomyStore.getState().selectStructure(null)}
        visible={false}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </>
  );
}
