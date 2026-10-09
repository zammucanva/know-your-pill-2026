"use client";

import * as React from "react";
import * as THREE from "three";
import { useThree, type ThreeEvent } from "@react-three/fiber";
import { useAnatomyModel, type BP3DAtlas } from "@/lib/hooks/use-anatomy-model";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useCameraStore } from "@/lib/anatomy/store/camera-store";
import { isBrainVentriclePart } from "@/lib/anatomy/kyp-normalization";
import {
  computeExplodeOffsets,
  computeBrainExplodeOffsets,
  classifyMusclePart,
  type ExplodableSystem,
  DEFAULT_EXPLODE_DISTANCE,
} from "@/lib/anatomy/explode";

const SYSTEM_COLORS: Record<string, string> = {
  skeletal: "#e8dfc4", muscular: "#9c3f38", cardiac: "#b96760", sensory: "#b0c8ce",
  arterial: "#c05245", venous: "#527c9f", nervous: "#d8b565", respiratory: "#b98991",
  digestive: "#b8916b", urinary: "#b47961", lymphatic: "#879f7c", endocrine: "#c5a09a",
  reproductive: "#bda098", integumentary: "#ba9b7d", connective: "#aec3bb",
};

const SYSTEM_ORDER = [
  "integumentary", "connective", "muscular", "skeletal",
  "arterial", "venous", "cardiac", "respiratory",
  "digestive", "urinary", "endocrine", "reproductive",
  "lymphatic", "sensory", "nervous",
];

export function AnatomyModel() {
  const { atlas, geometries, error } = useAnatomyModel();
  const systemVisibility = useAnatomyStore((s) => s.systemVisibility);
  const selectedStructureId = useAnatomyStore((s) => s.selectedStructureId);
  const hoveredStructureId = useAnatomyStore((s) => s.hoveredStructureId);
  const selectStructure = useAnatomyStore((s) => s.selectStructure);
  const setHovered = useAnatomyStore((s) => s.setHovered);
  const explodeLevel = useCameraStore((s) => s.explodeLevel);
  const brainModeActive = useAnatomyStore((s) => s.brainModeActive);

  const bp3dToOurs: Record<string, string> = {
    skeletal: "skeletal", muscular: "muscular", nervous: "nervous",
    cardiac: "cardiovascular", arterial: "cardiovascular", venous: "cardiovascular",
    respiratory: "respiratory", digestive: "digestive", endocrine: "endocrine",
    urinary: "urinary", reproductive: "reproductive", lymphatic: "lymphatic",
    integumentary: "integumentary", sensory: "nervous", connective: "skeletal",
  };

  const isSystemVisible = React.useCallback((bp3dSystem: string): boolean => {
    const ourSystem = bp3dToOurs[bp3dSystem] ?? bp3dSystem;
    return systemVisibility[ourSystem as keyof typeof systemVisibility] ?? false;
  }, [systemVisibility]);

  // System-level explode offsets (mesh.position for all systems except muscular)
  const explodeOffsets = React.useMemo<Map<string, [number, number, number]>>(() => {
    const result = new Map<string, [number, number, number]>();
    if (!geometries) return result;
    const explodable: ExplodableSystem[] = [];
    for (const sysId of SYSTEM_ORDER) {
      const sg = geometries.get(sysId);
      if (!sg || !sg.geometry.boundingBox) continue;
      const visible = brainModeActive
        ? sysId === "nervous" || sysId === "cardiac"
        : isSystemVisible(sysId);
      explodable.push({
        id: sysId,
        bounds: {
          min: [sg.geometry.boundingBox.min.x, sg.geometry.boundingBox.min.y, sg.geometry.boundingBox.min.z],
          max: [sg.geometry.boundingBox.max.x, sg.geometry.boundingBox.max.y, sg.geometry.boundingBox.max.z],
        },
        visible,
      });
    }
    const offsets = brainModeActive
      ? computeBrainExplodeOffsets(explodable, explodeLevel)
      : computeExplodeOffsets(explodable, explodeLevel, DEFAULT_EXPLODE_DISTANCE);
    for (const o of offsets) result.set(o.systemId, o.offset);
    // Muscular system-level offset is ALWAYS zero when per-part explode is active
    if (!brainModeActive) result.set("muscular", [0, 0, 0]);
    return result;
  }, [geometries, isSystemVisible, brainModeActive, explodeLevel]);

  // Compute per-part explode DataTexture data for the muscular system
  const muscleExplodeData = React.useMemo<Float32Array<ArrayBuffer> | null>(() => {
    if (!geometries || !atlas || brainModeActive) return null;
    const muscleSG = geometries.get("muscular");
    if (!muscleSG) return null;
    const conceptNames = new Map<string, string>();
    for (const c of atlas.concepts) conceptNames.set(c.id, c.name);
    const partCount = muscleSG.parts.length;
    const texWidth = THREE.MathUtils.ceilPowerOfTwo(partCount);
    const data = new Float32Array(texWidth * 4);
    muscleSG.parts.forEach((part, i) => {
      const idx = i * 4;
      const name = conceptNames.get(part.conceptId) ?? "";
      const config = classifyMusclePart(part, name);
      data[idx] = config.direction[0];
      data[idx + 1] = config.direction[1];
      data[idx + 2] = config.direction[2];
      data[idx + 3] = config.distance;
    });
    return data;
  }, [geometries, atlas, brainModeActive]);

  if (error || !atlas) return null;

  return (
    <group>
      {SYSTEM_ORDER.map((sysId) => {
        const sg = geometries?.get(sysId);
        if (!sg) return null;
        let visible: boolean;
        if (brainModeActive) {
          visible = sysId === "nervous" || sysId === "cardiac";
        } else {
          visible = isSystemVisible(sysId);
        }
        const color = SYSTEM_COLORS[sysId] ?? "#aebbb8";
        const offset = explodeOffsets.get(sysId) ?? [0, 0, 0];
        const muscleData = (sysId === "muscular" && muscleExplodeData) ? muscleExplodeData : null;
        return (
          <SystemMesh
            key={sysId}
            systemId={sysId}
            geometry={sg.geometry}
            parts={sg.parts}
            color={color}
            visible={visible}
            selectedPartId={selectedStructureId}
            hoveredPartId={hoveredStructureId}
            explodeOffset={offset}
            explodeLevel={explodeLevel}
            muscleExplodeData={muscleData}
            brainModeActive={brainModeActive}
            onSelect={(partId) => selectStructure(partId)}
            onHover={(partId) => setHovered(partId)}
          />
        );
      })}
    </group>
  );
}

interface SystemMeshProps {
  systemId: string;
  geometry: THREE.BufferGeometry;
  parts: BP3DAtlas["parts"];
  color: string;
  visible: boolean;
  selectedPartId: string | null;
  hoveredPartId: string | null;
  explodeOffset: [number, number, number];
  explodeLevel: number;
  muscleExplodeData: Float32Array<ArrayBuffer> | null;
  brainModeActive: boolean;
  onSelect: (partId: string) => void;
  onHover: (partId: string | null) => void;
}

function SystemMesh({
  systemId, geometry, parts, color, visible,
  selectedPartId, hoveredPartId, explodeOffset, explodeLevel,
  muscleExplodeData, brainModeActive,
  onSelect, onHover,
}: SystemMeshProps) {
  const meshRef = React.useRef<THREE.Mesh | null>(null);
  const materialRef = React.useRef<THREE.MeshStandardMaterial | null>(null);
  const { invalidate } = useThree();

  const partCount = parts.length;
  const textureWidth = THREE.MathUtils.ceilPowerOfTwo(partCount);
  const hasPerPartExplode = !!muscleExplodeData;

  // ── Per-part state texture (visibility/selection/hover) ──────────
  //
  // Created once after mount (React-Compiler-safe: no ref writes during
  // render) and disposed on unmount. The Float32Array data is written
  // from effects and flagged via needsUpdate — the standard DataTexture
  // update path. The mesh is gated on `ready` so the first shader
  // compile always finds a live texture.
  const [stateReady, setStateReady] = React.useState(false);
  const stateDataRef = React.useRef<Float32Array | null>(null);
  const stateTextureRef = React.useRef<THREE.DataTexture | null>(null);

  React.useEffect(() => {
    const data = new Float32Array(textureWidth * 4);
    const tex = new THREE.DataTexture(data, textureWidth, 1, THREE.RGBAFormat, THREE.FloatType);
    tex.needsUpdate = true;
    stateDataRef.current = data;
    stateTextureRef.current = tex;
    setStateReady(true);
    return () => {
      tex.dispose();
      stateTextureRef.current = null;
      stateDataRef.current = null;
    };
  }, [textureWidth]);

  // ── Per-part explode texture (muscular only) ─────────────────────
  //
  // One texture per muscleExplodeData version, created inside the memo
  // factory (mutation allowed there) and disposed on replacement.
  const explodeTexture = React.useMemo<THREE.DataTexture | null>(() => {
    if (!muscleExplodeData) return null;
    const tex = new THREE.DataTexture(
      muscleExplodeData, textureWidth, 1, THREE.RGBAFormat, THREE.FloatType
    );
    tex.needsUpdate = true;
    return tex;
  }, [muscleExplodeData, textureWidth]);

  // ── SHARED explode-level uniform (the race-free pattern) ─────────
  //
  // A single stable uniform object is handed to EVERY compiled shader
  // program via onBeforeCompile. Because all programs reference the
  // same object, updating .value propagates instantly regardless of
  // when (or whether) Three.js recompiles — no shaderRef, no
  // setTimeout fallback, no lost updates.
  const explodeLevelUniform = React.useRef({ value: 0 });

  // ── GPU resource disposal ────────────────────────────────────────
  React.useEffect(() => {
    return () => {
      explodeTexture?.dispose();
    };
  }, [explodeTexture]);

  // ── Write visibility/selection/hover into the state texture ──────
  React.useEffect(() => {
    const data = stateDataRef.current;
    const tex = stateTextureRef.current;
    if (!data || !tex) return;
    data.fill(0);
    parts.forEach((part, i) => {
      const idx = i * 4;
      let isVisible = 1;
      if (brainModeActive && systemId === "cardiac") {
        isVisible = isBrainVentriclePart(part.conceptId) ? 1 : 0;
      }
      data[idx] = isVisible;
      if (selectedPartId === part.id) data[idx + 1] = 1;
      if (hoveredPartId === part.id) data[idx + 2] = 1;
    });
    tex.needsUpdate = true;
    invalidate();
  }, [stateReady, parts, selectedPartId, hoveredPartId, brainModeActive, systemId, invalidate]);

  // ── Update the shared explode uniform (no recompile, no race) ────
  React.useEffect(() => {
    explodeLevelUniform.current.value = explodeLevel;
    invalidate();
  }, [explodeLevel, invalidate]);

  // ── System-level explode animation (mesh.position) ───────────────
  React.useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const target = new THREE.Vector3(explodeOffset[0], explodeOffset[1], explodeOffset[2]);
    const startPos = mesh.position.clone();
    const duration = 400;
    const startTime = performance.now();
    let raf = 0;
    const animate = () => {
      const t = Math.min(1, (performance.now() - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      mesh.position.lerpVectors(startPos, target, eased);
      invalidate();
      if (t < 1) raf = requestAnimationFrame(animate);
      else { mesh.position.copy(target); invalidate(); }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [explodeOffset, invalidate]);

  // ── Separate shader program per explode variant ──────────────────
  //
  // CRITICAL: override customProgramCacheKey so Three.js compiles a
  // SEPARATE shader when per-part explode is active. Without this,
  // toggling explode would silently reuse the wrong program cache key.
  React.useEffect(() => {
    const material = materialRef.current;
    if (!material) return;
    (material as THREE.MeshStandardMaterial & { customProgramCacheKey?: () => string }).customProgramCacheKey =
      () => (hasPerPartExplode ? "kyp-per-part-explode-v1" : "kyp-standard-v1");
    material.needsUpdate = true;
  }, [hasPerPartExplode]);

  // ── Raycast handlers (typed) ─────────────────────────────────────
  const handleClick = React.useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const mesh = meshRef.current;
    if (!mesh) return;
    // ThreeEvent extends THREE.Intersection — the face/object live directly
    // on the event (there is no `.intersection` property; the old code
    // silently never selected anything).
    const face = e.face;
    if (!face) return;
    const partIndexAttr = mesh.geometry.getAttribute("partIndex");
    if (!partIndexAttr) return;
    const partIndex = Math.round(partIndexAttr.getX(face.a));
    if (partIndex >= 0 && partIndex < parts.length) onSelect(parts[partIndex].id);
  }, [parts, onSelect]);

  const handlePointerOver = React.useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const mesh = meshRef.current;
    if (!mesh) return;
    const face = e.face;
    if (!face) return;
    const partIndexAttr = mesh.geometry.getAttribute("partIndex");
    if (!partIndexAttr) return;
    const partIndex = Math.round(partIndexAttr.getX(face.a));
    if (partIndex >= 0 && partIndex < parts.length) {
      onHover(parts[partIndex].id);
      document.body.style.cursor = "pointer";
    }
  }, [parts, onHover]);

  const handlePointerOut = React.useCallback(() => {
    onHover(null);
    document.body.style.cursor = "default";
  }, [onHover]);

  if (!visible || !stateReady) return null;

  // ── Shader injection ─────────────────────────────────────────────
  const shaderHeader = hasPerPartExplode
    ? `attribute float partIndex;\nuniform sampler2D partState;\nuniform float stateWidth;\nuniform sampler2D uExplodeState;\nuniform float uExplodeLevel;\nvarying float vPartVisible;\nvarying float vPartSelected;\nvarying float vPartHovered;\nvarying float vPartId;\n`
    : `attribute float partIndex;\nuniform sampler2D partState;\nuniform float stateWidth;\nvarying float vPartVisible;\nvarying float vPartSelected;\nvarying float vPartHovered;\nvarying float vPartId;\n`;

  const vertexReplace = hasPerPartExplode
    ? `#include <begin_vertex>
       vec2 stateUv = vec2((partIndex + 0.5) / stateWidth, 0.5);
       vec4 state = texture2D(partState, stateUv);
       vec4 explodeData = texture2D(uExplodeState, stateUv);
       transformed += explodeData.xyz * explodeData.w * uExplodeLevel;
       vPartId = partIndex;
       vPartVisible = state.x;
       vPartSelected = state.y;
       vPartHovered = state.z;`
    : `#include <begin_vertex>
       vec2 stateUv = vec2((partIndex + 0.5) / stateWidth, 0.5);
       vec4 state = texture2D(partState, stateUv);
       vPartId = partIndex;
       vPartVisible = state.x;
       vPartSelected = state.y;
       vPartHovered = state.z;`;

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        metalness={0.04}
        roughness={systemId === "skeletal" ? 0.62 : 0.42}
        side={THREE.DoubleSide}
        transparent={systemId === "integumentary"}
        opacity={systemId === "integumentary" ? 0.1 : 1}
        depthWrite={systemId !== "integumentary"}
        onBeforeCompile={(shader) => {
          shader.uniforms.partState = { value: stateTextureRef.current };
          shader.uniforms.stateWidth = { value: textureWidth };
          if (hasPerPartExplode && explodeTexture) {
            // Shared uniform object: updating .value later updates every
            // compiled program that received this reference.
            shader.uniforms.uExplodeState = { value: explodeTexture };
            shader.uniforms.uExplodeLevel = explodeLevelUniform.current;
          }
          shader.vertexShader = shaderHeader + shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", vertexReplace);
          shader.fragmentShader =
            `varying float vPartVisible;\nvarying float vPartSelected;\nvarying float vPartHovered;\nvarying float vPartId;\n` +
            shader.fragmentShader;
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>\nif (vPartVisible < 0.5) discard;`
          );
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <color_fragment>",
            `#include <color_fragment>\n` +
            `float tone = fract(sin(vPartId * 12.9898) * 43758.5453);\n` +
            `diffuseColor.rgb *= 0.84 + 0.3 * tone;\n` +
            `diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.08, 0.58, 0.53), vPartSelected * 0.75);\n` +
            `diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95, 0.77, 0.36), vPartHovered * 0.4);`
          );
        }}
      />
    </mesh>
  );
}
