"use client";

import * as React from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";

/**
 * PlaceholderBody — a clearly-marked placeholder for the real anatomical GLB.
 *
 * This is NOT fake anatomy. It is a set of abstract, labeled wireframe
 * shapes arranged roughly in human-body proportion, so the engine, UI,
 * selection, and inspection systems can be developed and demonstrated
 * before a real anatomical asset is sourced.
 *
 * When a real GLB is added to /public/models/ and the asset manifest is
 * updated, the AnatomyScene swaps this component for the real AnatomyModel
 * — no other code changes.
 *
 * Each placeholder shape is keyed to a structure_id so the engine can
 * exercise the full selection/highlight/inspector pipeline.
 */

// Each entry corresponds to one structure defined in structures.ts.
// Positions are roughly in human-body proportion; sizes are illustrative.
const PLACEHOLDER_SHAPES: PlaceholderShape[] = [
  // ── Nervous system ──
  { id: "brain", label: "Brain", position: [0, 1.55, 0.05], size: [0.32, 0.22, 0.28], kind: "sphere" },
  { id: "cerebrum", label: "Cerebrum", position: [0, 1.58, 0.05], size: [0.3, 0.2, 0.27], kind: "sphere" },
  { id: "frontal-lobe", label: "Frontal Lobe", position: [0, 1.62, 0.18], size: [0.22, 0.14, 0.14], kind: "sphere" },
  { id: "parietal-lobe", label: "Parietal Lobe", position: [0, 1.7, -0.05], size: [0.22, 0.12, 0.14], kind: "sphere" },
  { id: "temporal-lobe", label: "Temporal Lobe", position: [0.22, 1.55, 0.05], size: [0.1, 0.1, 0.16], kind: "sphere" },
  { id: "occipital-lobe", label: "Occipital Lobe", position: [0, 1.6, -0.18], size: [0.2, 0.12, 0.1], kind: "sphere" },
  { id: "cerebellum", label: "Cerebellum", position: [0, 1.42, -0.12], size: [0.22, 0.1, 0.12], kind: "sphere" },
  { id: "brainstem", label: "Brainstem", position: [0, 1.3, -0.02], size: [0.06, 0.22, 0.06], kind: "cylinder" },
  { id: "thalamus", label: "Thalamus", position: [0, 1.5, 0.02], size: [0.08, 0.06, 0.08], kind: "sphere" },
  { id: "hypothalamus", label: "Hypothalamus", position: [0, 1.45, 0.05], size: [0.06, 0.04, 0.06], kind: "sphere" },
  { id: "hippocampus", label: "Hippocampus", position: [0.12, 1.5, 0], size: [0.06, 0.05, 0.12], kind: "sphere" },
  { id: "amygdala", label: "Amygdala", position: [0.16, 1.5, 0.08], size: [0.04, 0.04, 0.04], kind: "sphere" },
  { id: "basal-ganglia", label: "Basal Ganglia", position: [-0.08, 1.5, 0.02], size: [0.1, 0.08, 0.1], kind: "sphere" },
  { id: "substantia-nigra", label: "Substantia Nigra", position: [-0.05, 1.35, 0.02], size: [0.04, 0.04, 0.06], kind: "sphere" },
  { id: "ventral-tegmental-area", label: "VTA", position: [-0.04, 1.32, 0.02], size: [0.03, 0.03, 0.04], kind: "sphere" },
  { id: "nucleus-accumbens", label: "Nucleus Accumbens", position: [0.1, 1.45, 0.08], size: [0.04, 0.04, 0.04], kind: "sphere" },
  { id: "spinal-cord", label: "Spinal Cord", position: [0, 1.0, -0.04], size: [0.04, 0.7, 0.04], kind: "cylinder" },
  // ── Skeletal ──
  { id: "skull", label: "Skull", position: [0, 1.55, 0.05], size: [0.34, 0.36, 0.32], kind: "sphere" },
  { id: "vertebral-column", label: "Vertebral Column", position: [0, 0.85, -0.06], size: [0.08, 1.4, 0.08], kind: "cylinder" },
  { id: "rib-cage", label: "Rib Cage", position: [0, 1.15, 0.05], size: [0.5, 0.55, 0.35], kind: "sphere" },
  // ── Cardiovascular ──
  { id: "heart", label: "Heart", position: [-0.06, 1.2, 0.1], size: [0.16, 0.2, 0.16], kind: "sphere" },
  // ── Respiratory ──
  { id: "lungs", label: "Lungs", position: [0, 1.2, 0.05], size: [0.55, 0.6, 0.35], kind: "sphere" },
  // ── Digestive ──
  { id: "liver", label: "Liver", position: [-0.1, 0.7, 0.08], size: [0.3, 0.18, 0.22], kind: "sphere" },
];

interface PlaceholderShape {
  id: string;
  label: string;
  position: [number, number, number];
  size: [number, number, number];
  kind: "sphere" | "cylinder" | "box";
}

export { PLACEHOLDER_SHAPES };

/**
 * A single placeholder mesh. Renders as a wireframe with a structure label
 * floating above. Wireframe is intentional — it should NOT be mistaken
 * for real anatomy.
 */
export function PlaceholderMesh({
  shape,
  color,
  highlighted,
  selected,
  onClick,
  onPointerOver,
  onPointerOut,
}: {
  shape: PlaceholderShape;
  color: string;
  highlighted: boolean;
  selected: boolean;
  onClick: (e: any) => void;
  onPointerOver: (e: any) => void;
  onPointerOut: (e: any) => void;
}) {
  const geometry = React.useMemo(() => {
    const [w, h, d] = shape.size;
    if (shape.kind === "sphere") {
      const r = Math.max(w, h, d) / 2;
      return new THREE.SphereGeometry(r, 16, 12);
    }
    if (shape.kind === "cylinder") {
      const r = Math.max(w, d) / 2;
      return new THREE.CylinderGeometry(r, r, h, 16);
    }
    return new THREE.BoxGeometry(w, h, d);
  }, [shape]);

  return (
    <group position={shape.position}>
      <mesh
        geometry={geometry}
        onClick={onClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        {/* Solid translucent fill — gives depth but is clearly NOT real anatomy */}
        <meshStandardMaterial
          color={selected ? "#0d9488" : highlighted ? color : "#475569"}
          transparent
          opacity={selected ? 0.5 : highlighted ? 0.35 : 0.12}
          roughness={0.7}
          metalness={0.0}
          emissive={selected ? "#0d9488" : highlighted ? color : "#000000"}
          emissiveIntensity={selected ? 0.4 : highlighted ? 0.2 : 0}
        />
      </mesh>
      {/* Wireframe overlay — the explicit "this is a placeholder" signal */}
      <mesh geometry={geometry} scale={1.001}>
        <meshBasicMaterial
          color={selected ? "#0d9488" : highlighted ? color : "#64748b"}
          wireframe
          transparent
          opacity={selected ? 0.9 : highlighted ? 0.7 : 0.3}
        />
      </mesh>
      {/* Floating label — only when highlighted or selected to avoid clutter */}
      {(highlighted || selected) && (
        <Html distanceFactor={6} position={[0, shape.size[1] / 2 + 0.06, 0]} center>
          <div
            style={{
              padding: "2px 8px",
              borderRadius: 4,
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              color: selected ? "#5eead4" : "#e2e8f0",
              fontSize: 11,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              whiteSpace: "nowrap",
              border: `1px solid ${selected ? "#14b8a6" : "rgba(226,232,240,0.2)"}`,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {shape.label}
          </div>
        </Html>
      )}
    </group>
  );
}

/**
 * The placeholder body — a banner that says "PLACEHOLDER" floating above
 * the wireframe shapes, so the user always knows this is not real anatomy.
 */
export function PlaceholderBanner() {
  return (
    <Html position={[0, 2.4, 0]} center>
      <div
        style={{
          padding: "6px 14px",
          borderRadius: 6,
          backgroundColor: "rgba(15, 23, 42, 0.92)",
          color: "#fbbf24",
          fontSize: 12,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          border: "1px solid rgba(251, 191, 36, 0.4)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        Placeholder model — Real anatomical GLB not yet loaded
      </div>
    </Html>
  );
}
