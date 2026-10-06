"use client";

/**
 * KYPMechanismCanvas — the universal, data-driven mechanism renderer.
 *
 * Architecture (spec §10):
 *   MechanismDefinition → deterministic layout engine → semantic SVG
 *   → interaction layer (pan / zoom / selection / progressive disclosure)
 *   → accessibility layer (keyboard, SR announcements, no-JS fallback)
 *
 * Hard guarantees:
 *   - NOT a card stack: nodes are spatially positioned by causal layer;
 *     branching, convergence and feedback are visible geometry.
 *   - Colour is never the sole carrier of meaning (terminals + strokes +
 *     labels + legend carry it; grayscale-print safe).
 *   - Drug interventions render at their causal point of action.
 *   - No-JS: the server-rendered <details> carries the full causal story.
 *   - No new dependencies (SVG + React only).
 */

import * as React from "react";
import type { MechanismDefinition } from "@/lib/mechanism";
import {
  layoutMechanism,
  describeMechanism,
  describeNodeContext,
  getRelationshipMeta,
  INTERVENTION_ACTION_META,
  levelIndex,
} from "@/lib/mechanism";
import { MechanismSvg } from "./mechanism-svg";
import "./mechanism.css";

export interface KYPMechanismCanvasProps {
  definition: MechanismDefinition;
  variant?: "full" | "compact";
}

type View = { x: number; y: number; z: number };

const MIN_ZOOM = 0.35;
const MAX_ZOOM = 2.5;

export function KYPMechanismCanvas({ definition: def, variant = "full" }: KYPMechanismCanvasProps) {
  const layout = React.useMemo(() => layoutMechanism(def), [def]);

  /* ---------- refs + sizing ---------- */
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState<{ w: number; h: number } | null>(null);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* ---------- view state ---------- */
  const [view, setView] = React.useState<View>({ x: 8, y: 8, z: 1 });
  const [viewInitialized, setViewInitialized] = React.useState(false);

  const computeInitial = React.useCallback((): View => {
    const W = size?.w ?? 800;
    const H = size?.h ?? 460;
    // READABILITY-FIRST initial view: fit to WIDTH (never to height — a
    // height-fit shrinks wide graphs to unreadable scales; vertical panning
    // handles overflow instead). Desktop clamps >= 0.6; mobile clamps >= 0.85
    // anchored at the start of the causal chain (spec §24 strategy).
    const fitW = W / layout.width;
    const isMobile = W < 768;
    const z = isMobile
      ? Math.min(Math.max(fitW, 0.85), 1.4)
      : Math.min(Math.max(fitW, 0.9), 1.25);
    if (isMobile) {
      // readable-first: never below 0.9 on desktop (users pan/fit for overview)
      const y = Math.max(8, Math.min((H - layout.height * z) / 2, 8));
      return { x: 8, y, z };
    }
    const x = Math.max(8, (W - layout.width * z) / 2);
    const y = Math.max(8, (H - layout.height * z) / 2);
    return { x, y, z };
  }, [size, layout]);

  React.useEffect(() => {
    if (!size || viewInitialized) return;
    setView(computeInitial());
    setViewInitialized(true);
  }, [size, viewInitialized, computeInitial]);

  const clampView = React.useCallback((v: View): View => {
    const z = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v.z));
    const W = size?.w ?? 800;
    const H = size?.h ?? 460;
    // keep at least a sliver of the graph reachable in both axes
    const minX = Math.min(8, W - 40);
    const maxX = Math.max(8, W - 40);
    const minY = Math.min(8, H - 40);
    const maxY = Math.max(8, H - 40);
    return {
      z,
      x: Math.min(maxX, Math.max(minX, v.x)),
      y: Math.min(maxY, Math.max(minY, v.y)),
    };
  }, [size]);

  const zoomBy = React.useCallback(
    (factor: number, px?: number, py?: number) => {
      setView((v) => {
        const W = size?.w ?? 800;
        const H = size?.h ?? 460;
        const cx = px ?? W / 2;
        const cy = py ?? H / 2;
        const nz = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v.z * factor));
        const k = nz / v.z;
        return clampView({ z: nz, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k });
      });
    },
    [size, clampView]
  );

  const fit = React.useCallback(() => {
    if (!size) return;
    const z = Math.min(size.w / layout.width, size.h / layout.height) * 0.96;
    const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
    setView({
      z: clamped,
      x: Math.max(8, (size.w - layout.width * clamped) / 2),
      y: Math.max(8, (size.h - layout.height * clamped) / 2),
    });
  }, [size, layout]);

  const reset = React.useCallback(() => setView(computeInitial()), [computeInitial]);

  /* ---------- wheel zoom (non-passive) ---------- */
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      zoomBy(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX - rect.left, e.clientY - rect.top);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomBy]);

  /* ---------- drag pan + pinch zoom (pointer events) ---------- */
  const [dragging, setDragging] = React.useState(false);
  const pointers = React.useRef(new Map<number, { x: number; y: number }>());
  const dragMoved = React.useRef(false);
  const pinchBase = React.useRef<{ d: number; z: number; cx: number; cy: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as Element).closest(".kyp-mech-node")) return; // nodes handle their own click
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragMoved.current = false;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const rect = wrapRef.current?.getBoundingClientRect();
      pinchBase.current = {
        d: Math.hypot(a.x - b.x, a.y - b.y),
        z: view.z,
        cx: ((a.x + b.x) / 2) - (rect?.left ?? 0),
        cy: ((a.y + b.y) / 2) - (rect?.top ?? 0),
      };
    } else {
      setDragging(true);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    const prev = pointers.current.get(e.pointerId)!;
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) dragMoved.current = true;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinchBase.current) {
      const [a, b] = [...pointers.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const scale = d / pinchBase.current.d;
      const nz = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinchBase.current.z * scale));
      const k = nz / view.z;
      setView((v) =>
        clampView({
          z: nz,
          x: pinchBase.current!.cx - (pinchBase.current!.cx - v.x) * k,
          y: pinchBase.current!.cy - (pinchBase.current!.cy - v.y) * k,
        })
      );
      return;
    }
    if (pointers.current.size === 1 && dragging) {
      setView((v) => clampView({ ...v, x: v.x + dx, y: v.y + dy }));
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchBase.current = null;
    if (pointers.current.size === 0) setDragging(false);
  };

  /* ---------- selection / focus mode ---------- */
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [announcement, setAnnouncement] = React.useState("");

  const neighbours = React.useMemo(() => {
    if (!selectedId) return null;
    const set = new Set<string>([selectedId]);
    for (const e of def.edges ?? []) {
      if (e.from === selectedId) set.add(e.to);
      if (e.to === selectedId) set.add(e.from);
    }
    return set;
  }, [selectedId, def]);

  /* ---------- progressive disclosure: level filter + scenarios ---------- */
  const levels = React.useMemo(() => {
    const set = new Set<string>();
    for (const n of def.nodes) if (n.level) set.add(n.level);
    return [...set].sort((a, b) => levelIndex(a as never) - levelIndex(b as never));
  }, [def]);

  const [activeLevel, setActiveLevel] = React.useState<string | null>(null);
  const [activeScenario, setActiveScenario] = React.useState<string | null>(null);
  const scenario = def.scenarios?.find((s) => s.id === activeScenario) ?? null;

  const dimNodeIds = React.useMemo(() => {
    const dim = new Set<string>();
    if (neighbours) {
      for (const n of def.nodes) if (!neighbours.has(n.id)) dim.add(n.id);
    } else if (activeLevel) {
      for (const n of def.nodes) if (n.level !== activeLevel) dim.add(n.id);
    } else if (scenario?.focusNodeIds) {
      const focus = new Set(scenario.focusNodeIds);
      for (const n of def.nodes) if (!focus.has(n.id)) dim.add(n.id);
    }
    return dim;
  }, [neighbours, activeLevel, scenario, def]);

  const dimEdgeIds = React.useMemo(() => {
    const dim = new Set<string>();
    if (neighbours) {
      (def.edges ?? []).forEach((e, i) => {
        if (e.from !== selectedId && e.to !== selectedId) dim.add(e.id ?? `e-${e.from}-${e.to}-${i}`);
      });
    } else if (activeLevel) {
      const byId = new Map(def.nodes.map((n) => [n.id, n]));
      (def.edges ?? []).forEach((e, i) => {
        if (byId.get(e.from)?.level !== activeLevel && byId.get(e.to)?.level !== activeLevel) {
          dim.add(e.id ?? `e-${e.from}-${e.to}-${i}`);
        }
      });
    } else if (scenario?.focusNodeIds) {
      const focus = new Set(scenario.focusNodeIds);
      (def.edges ?? []).forEach((e, i) => {
        if (!focus.has(e.from) && !focus.has(e.to)) dim.add(e.id ?? `e-${e.from}-${e.to}-${i}`);
      });
    }
    return dim;
  }, [neighbours, selectedId, activeLevel, scenario, def]);

  const agentNodeIds = React.useMemo(() => {
    const set = new Set<string>();
    for (const iv of def.interventions ?? []) {
      const agentNode = def.nodes.find(
        (n) => n.id === iv.id || n.label === iv.agentLabel || (n.role === "agent" && n.label === iv.agentLabel)
      );
      if (agentNode) set.add(agentNode.id);
    }
    return set;
  }, [def]);

  const selectNode = React.useCallback(
    (id: string) => {
      if (dragMoved.current) return; // click after a drag is not a selection
      setSelectedId((prev) => {
        const next = prev === id ? null : id;
        setAnnouncement(next ? describeNodeContext(def, next) : "Selection cleared.");
        return next;
      });
    },
    [def]
  );

  const onNodeKeyDown = React.useCallback(
    (e: React.KeyboardEvent, id: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        setSelectedId((prev) => {
          const next = prev === id ? null : id;
          setAnnouncement(next ? describeNodeContext(def, next) : "Selection cleared.");
          return next;
        });
      }
      if (e.key === "Escape") {
        setSelectedId(null);
        setAnnouncement("Selection cleared.");
      }
    },
    [def]
  );

  const onViewportKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      const pan = 60;
      switch (e.key) {
        case "+":
        case "=":
          e.preventDefault();
          zoomBy(1.15);
          break;
        case "-":
          e.preventDefault();
          zoomBy(1 / 1.15);
          break;
        case "0":
          e.preventDefault();
          fit();
          break;
        case "ArrowLeft":
          e.preventDefault();
          setView((v) => clampView({ ...v, x: v.x + pan }));
          break;
        case "ArrowRight":
          e.preventDefault();
          setView((v) => clampView({ ...v, x: v.x - pan }));
          break;
        case "ArrowUp":
          e.preventDefault();
          setView((v) => clampView({ ...v, y: v.y + pan }));
          break;
        case "ArrowDown":
          e.preventDefault();
          setView((v) => clampView({ ...v, y: v.y - pan }));
          break;
        case "Escape":
          setSelectedId(null);
          setAnnouncement("Selection cleared.");
          break;
      }
    },
    [zoomBy, fit, clampView]
  );

  /* ---------- view mode (graph / steps) ---------- */
  const [mode, setMode] = React.useState<"graph" | "steps">("graph");

  /* ---------- legend entries (derived from what the graph uses) ---------- */
  const legendEntries = React.useMemo(() => {
    const entries: { glyph: React.ReactNode; label: string }[] = [];
    const used = new Set((def.edges ?? []).map((e) => e.relationship));
    const has = (rels: string[]) => rels.some((r) => used.has(r as never));
    if (has(["activates", "stimulates", "increases", "upregulates", "releases", "secretes", "potentiates"]))
      entries.push({ glyph: <span aria-hidden>→</span>, label: "arrow = activation / stimulation" });
    if (has(["inhibits", "blocks", "decreases", "downregulates", "antagonises", "desensitises", "causes"]))
      entries.push({ glyph: <span aria-hidden>⊣</span>, label: "T-bar = inhibition / blockade" });
    if (has(["binds", "modulates", "expresses", "associated_with", "related_to"]))
      entries.push({ glyph: <span aria-hidden>•</span>, label: "dot = binding / association" });
    if (has(["converts", "leads_to", "metabolises", "displaces"]))
      entries.push({ glyph: <span aria-hidden>»</span>, label: "chevron = conversion / leads to" });
    if ((def.edges ?? []).some((e) => getRelationshipMeta(e.relationship)?.shape === "return"))
      entries.push({ glyph: <span aria-hidden>⤺</span>, label: "dashed sweep = feedback loop (return path)" });
    if ((def.interventions ?? []).length > 0)
      entries.push({ glyph: <span aria-hidden>Rx⇢</span>, label: "dotted = intervention at point of action" });
    return entries;
  }, [def]);

  const selectedNode = def.nodes.find((n) => n.id === selectedId) ?? null;

  const compact = variant === "compact";
  const canvasHeight = compact ? 340 : Math.min(560, Math.max(360, layout.height * 0.55));

  return (
    <div className="kyp-mech" data-variant={variant}>
      {/* ---------- toolbar ---------- */}
      <div className="kyp-mech-toolbar">
        {!compact && (
          <span className="kyp-mech-toolbar-label" aria-hidden="true">
            View
          </span>
        )}
        <button
          type="button"
          className="kyp-mech-chip"
          data-active={mode === "graph"}
          aria-pressed={mode === "graph"}
          onClick={() => setMode("graph")}
        >
          Graph
        </button>
        <button
          type="button"
          className="kyp-mech-chip"
          data-active={mode === "steps"}
          aria-pressed={mode === "steps"}
          onClick={() => setMode("steps")}
        >
          Steps
        </button>
        <span className="kyp-mech-sep" aria-hidden="true" />
        <button type="button" className="kyp-mech-btn" onClick={() => zoomBy(1.2)} aria-label="Zoom in" title="Zoom in (+)">
          +
        </button>
        <button type="button" className="kyp-mech-btn" onClick={() => zoomBy(1 / 1.2)} aria-label="Zoom out" title="Zoom out (−)">
          −
        </button>
        <button type="button" className="kyp-mech-btn" onClick={fit} aria-label="Fit graph to view" title="Fit (0)">
          Fit
        </button>
        <button type="button" className="kyp-mech-btn" onClick={reset} aria-label="Reset view" title="Reset">
          Reset
        </button>
        {!compact && levels.length > 0 && (
          <>
            <span className="kyp-mech-sep" aria-hidden="true" />
            <span className="kyp-mech-toolbar-label" aria-hidden="true">
              Level
            </span>
            {levels.map((lv) => (
              <button
                key={lv}
                type="button"
                className="kyp-mech-chip"
                data-active={activeLevel === lv}
                aria-pressed={activeLevel === lv}
                onClick={() => setActiveLevel((p) => (p === lv ? null : lv))}
              >
                {lv}
              </button>
            ))}
          </>
        )}
        {def.scenarios && def.scenarios.length > 0 && !compact && (
          <>
            <span className="kyp-mech-sep" aria-hidden="true" />
            <span className="kyp-mech-toolbar-label" aria-hidden="true">
              What if?
            </span>
            {def.scenarios.map((s) => (
              <button
                key={s.id}
                type="button"
                className="kyp-mech-chip"
                data-active={activeScenario === s.id}
                aria-pressed={activeScenario === s.id}
                onClick={() => setActiveScenario((p) => (p === s.id ? null : s.id))}
              >
                {s.question}
              </button>
            ))}
          </>
        )}
      </div>

      {/* ---------- canvas / steps ---------- */}
      {mode === "graph" ? (
        <div className="kyp-mech-canvas-block">
        <div
          ref={wrapRef}
          className={`kyp-mech-canvas-wrap${reducedMotion ? " kyp-mech-reduced-motion" : ""}`}
          data-variant={variant}
          style={{ height: canvasHeight }}
          tabIndex={0}
          role="group"
          aria-label={`${def.title} interactive mechanism canvas. Drag to pan, use plus and minus to zoom, press 0 to fit. Arrow keys pan. Tab reaches the mechanism nodes.`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onViewportKeyDown}
          onClick={() => {
            if (!dragMoved.current) {
              setSelectedId(null);
              setAnnouncement("Selection cleared.");
            }
          }}
        >
          <MechanismSvg
            def={def}
            layout={layout}
            view={view}
            selectedId={selectedId}
            dimNodeIds={dimNodeIds}
            dimEdgeIds={dimEdgeIds}
            agentNodeIds={agentNodeIds}
            onNodeSelect={selectNode}
            onNodeKeyDown={onNodeKeyDown}
            dragging={dragging}
          />
          <span className="kyp-mech-zoomhint" aria-hidden="true">
            {Math.round(view.z * 100)}% · drag / scroll to explore
          </span>
          <div className="kyp-mech-sr" role="status" aria-live="polite">
            {announcement}
          </div>
        </div>
        </div>
      ) : (
        <div className="kyp-mech-steps">
          <ol>
            {[...layout.nodes]
              .sort((a, b) => a.layer - b.layer || a.y - b.y || a.x - b.x)
              .map((n) => {
                const outgoing = (def.edges ?? []).filter((e) => e.from === n.id);
                return (
                  <li key={n.id}>
                    <strong>{n.node.label}</strong>
                    {n.node.sublabel ? ` · ${n.node.sublabel}` : ""}
                    {outgoing.length > 0 && (
                      <span className="block text-muted-foreground" style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
                        {outgoing
                          .map((e) => {
                            const to = def.nodes.find((x) => x.id === e.to);
                            const rel = getRelationshipMeta(e.relationship);
                            return `${rel?.srVerb ?? e.relationship} ${to?.label ?? e.to}${e.label && e.label !== rel?.srVerb ? ` (${e.label})` : ""}`;
                          })
                          .join("; ")}
                      </span>
                    )}
                  </li>
                );
              })}
          </ol>
        </div>
      )}

      {/* ---------- legend ---------- */}
      {legendEntries.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.375rem 0.875rem",
            marginTop: "0.5rem",
            fontSize: "0.6875rem",
            color: "var(--muted-foreground)",
          }}
          aria-label="Edge semantics legend"
        >
          {legendEntries.map((e, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  minWidth: "1.5rem",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {e.glyph}
              </span>
              {e.label}
            </span>
          ))}
        </div>
      )}

      {/* ---------- scenario answer ---------- */}
      {scenario && (
        <div className="kyp-mech-scenario-panel">
          <strong>{scenario.question}</strong>
          <p style={{ margin: "0.25rem 0 0" }}>{scenario.answer}</p>
        </div>
      )}

      {/* ---------- inspector ---------- */}
      {selectedNode && mode === "graph" && (
        <div className="kyp-mech-inspector">
          <span className="insp-meta">
            {selectedNode.type ? `${selectedNode.type.replace(/-/g, " ")}` : "node"}
            {selectedNode.level ? ` · ${selectedNode.level} level` : ""}
          </span>
          <h4 style={{ margin: "0.125rem 0 0" }}>{selectedNode.label}</h4>
          {selectedNode.sublabel && (
            <p style={{ margin: "0.25rem 0 0", color: "var(--muted-foreground)" }}>{selectedNode.sublabel}</p>
          )}
          <p style={{ margin: "0.375rem 0 0", lineHeight: 1.55 }}>{describeNodeContext(def, selectedNode.id)}</p>
        </div>
      )}

      {/* ---------- normal vs abnormal ---------- */}
      {def.normalState && def.abnormalState && (
        <div className="kyp-mech-panels">
          <StatePanel panel={def.normalState} tone="normal" />
          <StatePanel panel={def.abnormalState} tone="abnormal" />
        </div>
      )}

      {/* ---------- clinical consequences ---------- */}
      {def.clinicalConsequences && def.clinicalConsequences.length > 0 && (
        <div className="kyp-mech-consequences">
          {def.clinicalConsequences.map((c, i) => (
            <div key={i} className="kyp-mech-consequence">
              <strong>{c.label}</strong>
              <span style={{ color: "var(--muted-foreground)" }}>{c.description}</span>
            </div>
          ))}
        </div>
      )}

      {/* ---------- no-JS / SEO / screen-reader fallback ---------- */}
      <details className="kyp-mech-fallback">
        <summary>Read the mechanism as text</summary>
        <div className="fallback-body">{describeMechanism(def)}</div>
      </details>
    </div>
  );
}

/* ---------- state panel helper ---------- */

const DIR_GLYPH: Record<string, string> = {
  increase: "↑",
  decrease: "↓",
  loss: "✕",
  accumulation: "⤒",
  deficiency: "∅",
  compensation: "⤺",
  normal: "=",
};

function StatePanel({ panel, tone }: { panel: NonNullable<MechanismDefinition["normalState"]>; tone: "normal" | "abnormal" }) {
  return (
    <div className={`kyp-mech-panel kyp-mech-panel-${tone}`}>
      <h4>{panel.label}</h4>
      <ul>
        {panel.findings.map((f, i) => (
          <li key={i}>
            <span className="dir" aria-hidden="true">
              {DIR_GLYPH[f.direction] ?? "•"}
            </span>
            <span>
              <strong style={{ fontWeight: 650 }}>{f.label}:</strong> {f.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
