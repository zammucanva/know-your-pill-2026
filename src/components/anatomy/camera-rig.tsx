"use client";

import * as React from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useCameraStore, type ViewPreset } from "@/lib/anatomy/store/camera-store";
import { useAtlasData } from "@/lib/hooks/use-atlas-data";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useCameraDistanceStore, ZOOM_LIMITS, type ZoomApi } from "@/lib/anatomy/store/camera-distance-store";
import { brainCameraPositions, brainViewFraming } from "@/lib/anatomy/brain-registry";

const PRESET_POSITIONS: Record<ViewPreset, [number, number, number]> = {
  anterior: [0, 0.9, 3.6],
  posterior: [0, 0.9, -3.6],
  left: [-3.6, 0.9, 0],
  right: [3.6, 0.9, 0],
  superior: [0, 5.0, 0.01],
  inferior: [0, -3.0, 0.01],
};

export function CameraRig() {
  const controlsRef = React.useRef<React.ComponentRef<typeof OrbitControls> | null>(null);
  const { camera, invalidate } = useThree();
  const viewPreset = useCameraStore((s) => s.viewPreset);
  const focusTarget = useCameraStore((s) => s.focusTarget);
  const resetToken = useCameraStore((s) => s.resetToken);
  const explodeLevel = useCameraStore((s) => s.explodeLevel);
  const brainModeActive = useAnatomyStore((s) => s.brainModeActive);
  const activeBrainPreset = useAnatomyStore((s) => s.activeBrainPreset);
  const brainPanelCollapsed = useAnatomyStore((s) => s.brainPanelCollapsed);
  const { getPartById } = useAtlasData();
  const setDistance = useCameraDistanceStore((s) => s.setDistance);
  const setRange = useCameraDistanceStore((s) => s.setRange);
  const registerApi = useCameraDistanceStore((s) => s.registerApi);
  const reducedMotion = React.useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // ── Memoize camera targets/presets ──────────────────────────────
  //
  // CRITICAL: these MUST be memoized so they don't change reference on
  // every render. If they're recreated, the preset animation effect
  // re-runs every time the distance store updates (because it depends
  // on currentPresets/currentTarget), which moves the camera back to
  // the preset position and overrides user zoom.
  const currentPresets = React.useMemo(
    () => (brainModeActive ? brainCameraPositions : PRESET_POSITIONS),
    [brainModeActive]
  );
  const currentTarget = React.useMemo<[number, number, number]>(
    () => (brainModeActive ? [0, 1.62, 0] : [0, 0.9, 0]),
    [brainModeActive]
  );

  // ── Helpers ──────────────────────────────────────────────────────

  /** Distance from camera to the OrbitControls target. */
  const getCameraDistance = React.useCallback(() => {
    const controls = controlsRef.current;
    if (!controls) return camera.position.length();
    return camera.position.distanceTo(controls.target);
  }, [camera]);

  /** Keep the store's distance in sync with the actual camera. */
  const syncDistance = React.useCallback(() => {
    setDistance(getCameraDistance());
  }, [setDistance, getCameraDistance]);

  /** Set camera distance along the current viewing direction. */
  const zoomToDistance = React.useCallback((distance: number) => {
    const controls = controlsRef.current;
    if (!controls) return;
    const min = brainModeActive ? ZOOM_LIMITS.BRAIN_MIN : ZOOM_LIMITS.DEFAULT_MIN;
    const max = brainModeActive ? ZOOM_LIMITS.BRAIN_MAX : ZOOM_LIMITS.DEFAULT_MAX;
    const clamped = Math.max(min, Math.min(max, distance));
    const target = controls.target.clone();
    const dir = camera.position.clone().sub(target).normalize();
    camera.position.copy(target).add(dir.multiplyScalar(clamped));
    controls.update();
    setDistance(camera.position.distanceTo(controls.target));
    invalidate();
  }, [brainModeActive, camera, setDistance, invalidate]);

  // ── Register the typed zoom API on the store (replaces window.__zoom*) ──
  React.useEffect(() => {
    const api: ZoomApi = {
      zoomIn: () => zoomToDistance(getCameraDistance() * 0.8),
      zoomOut: () => zoomToDistance(getCameraDistance() * 1.25),
      zoomReset: () =>
        zoomToDistance(brainModeActive ? ZOOM_LIMITS.BRAIN_DISTANCE : ZOOM_LIMITS.DEFAULT_DISTANCE),
      zoomSet: (distance: number) => zoomToDistance(distance),
    };
    registerApi(api);
    return () => registerApi(null);
  }, [registerApi, zoomToDistance, getCameraDistance, brainModeActive]);

  // ── Keep the slider's active range in sync with Brain Mode ───────
  React.useEffect(() => {
    setRange(
      brainModeActive ? ZOOM_LIMITS.BRAIN_MIN : ZOOM_LIMITS.DEFAULT_MIN,
      brainModeActive ? ZOOM_LIMITS.BRAIN_MAX : ZOOM_LIMITS.DEFAULT_MAX
    );
  }, [brainModeActive, setRange]);

  // ── Sync camera distance to the store when user scrolls/pinches ──
  //
  // OrbitControls handles mouse wheel + touch pinch internally. The
  // 'change' event fires for every camera movement, so the zoom slider
  // always reflects the actual camera distance.
  React.useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    controls.addEventListener("change", syncDistance);
    return () => controls.removeEventListener("change", syncDistance);
  }, [syncDistance]);

  // ── Shared cubic-eased camera animation helper ──────────────────
  const animateCamera = React.useCallback(
    (end: THREE.Vector3, lookAt: THREE.Vector3, duration: number) => {
      const controls = controlsRef.current;
      const startPos = camera.position.clone();
      const startTime = performance.now();
      let raf = 0;
      const step = () => {
        const t = Math.min(1, (performance.now() - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        camera.position.lerpVectors(startPos, end, eased);
        camera.lookAt(lookAt);
        if (controls) {
          controls.target.copy(lookAt);
          controls.update();
        }
        syncDistance();
        invalidate();
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    },
    [camera, syncDistance, invalidate]
  );

  // ── Animate to preset position ───────────────────────────────────
  const lastBrainModeRef = React.useRef(brainModeActive);
  React.useEffect(() => {
    // Entering / leaving Brain Mode is framed by the effect further down, not by the plain view preset.
    if (lastBrainModeRef.current !== brainModeActive) {
      lastBrainModeRef.current = brainModeActive;
      return;
    }
    const targetPos = currentPresets[viewPreset];
    if (!targetPos) return;
    const end = new THREE.Vector3(...targetPos);
    const lookAt = new THREE.Vector3(...currentTarget);
    if (reducedMotion) {
      camera.position.copy(end);
      camera.lookAt(lookAt);
      const controls = controlsRef.current;
      if (controls) {
        controls.target.copy(lookAt);
        controls.update();
      }
      syncDistance();
      invalidate();
      return;
    }
    return animateCamera(end, lookAt, 600);
  }, [viewPreset, resetToken, camera, reducedMotion, invalidate, syncDistance, currentPresets, currentTarget, animateCamera]);

  // ── Pull the camera back as the model explodes so the spread stays in frame ──
  //
  // Scales the CURRENT distance by the change in a (1 + k * level) factor, so any zoom the user chose is kept.
  const lastExplodeRef = React.useRef(0);
  React.useEffect(() => {
    const prev = lastExplodeRef.current;
    lastExplodeRef.current = explodeLevel;
    if (brainModeActive || prev === explodeLevel) return;
    const k = 0.45;
    const ratio = (1 + k * explodeLevel) / (1 + k * prev);
    zoomToDistance(getCameraDistance() * ratio);
  }, [explodeLevel, brainModeActive, zoomToDistance, getCameraDistance]);

  // ── Animate to focus target ──────────────────────────────────────
  React.useEffect(() => {
    if (!focusTarget) return;
    const part = getPartById(focusTarget);
    if (!part) return;

    const center = new THREE.Vector3()
      .fromArray(part.bounds[0])
      .add(new THREE.Vector3().fromArray(part.bounds[1]))
      .multiplyScalar(0.5);

    const size = new THREE.Vector3().fromArray(part.bounds[1]).sub(
      new THREE.Vector3().fromArray(part.bounds[0])
    );
    const maxDim = Math.max(size.x, size.y, size.z);
    const offset = maxDim * 2.5 + 0.3;
    const end = center.clone().add(new THREE.Vector3(offset * 0.7, offset * 0.3, offset * 0.7));

    if (reducedMotion) {
      camera.position.copy(end);
      camera.lookAt(center);
      const controls = controlsRef.current;
      if (controls) {
        controls.target.copy(center);
        controls.update();
      }
      syncDistance();
      invalidate();
      return;
    }
    return animateCamera(end, center, 600);
  }, [focusTarget, camera, reducedMotion, getPartById, invalidate, syncDistance, animateCamera]);

  // ── Animate to brain position when Brain Mode is entered/exited ──
  React.useEffect(() => {
    const framing = brainModeActive ? brainViewFraming[activeBrainPreset ?? "whole-brain"] : undefined;
    const targetPos = framing ? framing.pos : brainModeActive ? brainCameraPositions["anterior"] : PRESET_POSITIONS["anterior"];
    const lookAt = framing ? new THREE.Vector3(...framing.target) : brainModeActive ? new THREE.Vector3(0, 1.62, 0) : new THREE.Vector3(0, 0.9, 0);
    const end = new THREE.Vector3(...targetPos);
    if (framing && !brainPanelCollapsed) {
      // the Brain Mode panel covers the left of the viewport: slide the brain into the free space on the right
      lookAt.x -= 0.045;
      end.x -= 0.045;
    }

    if (reducedMotion) {
      camera.position.copy(end);
      camera.lookAt(lookAt);
      const controls = controlsRef.current;
      if (controls) {
        controls.target.copy(lookAt);
        controls.update();
      }
      syncDistance();
      invalidate();
      return;
    }
    return animateCamera(end, lookAt, 800);
  }, [brainModeActive, activeBrainPreset, brainPanelCollapsed, camera, reducedMotion, invalidate, syncDistance, animateCamera]);

  return (
    <OrbitControls
      ref={controlsRef}
      target={currentTarget}
      enablePan
      enableZoom
      enableRotate
      minDistance={brainModeActive ? ZOOM_LIMITS.BRAIN_MIN : ZOOM_LIMITS.DEFAULT_MIN}
      maxDistance={brainModeActive ? ZOOM_LIMITS.BRAIN_MAX : ZOOM_LIMITS.DEFAULT_MAX}
      makeDefault
    />
  );
}
