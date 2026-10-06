"use client";

/**
 * MechanismSvg — the pure SVG rendering of a laid-out mechanism graph.
 *
 * Presentational only: all geometry comes from the deterministic layout
 * engine, all semantics from the controlled vocabulary. Rendering rules
 * that matter for acceptance:
 *   - terminals are GEOMETRY (arrowhead / T-bar / dot / chevron / diamond)
 *   - strokes are PATTERNS (solid / dashed / dotted)
 *   - every edge may carry a text label chip
 *   - feedback edges are visibly different (dashed, swept return path)
 *   - intervention edges are dotted with the intervention terminal
 *   => the graph stays readable in grayscale (colour is redundant)
 */

import * as React from "react";
import type { LaidOutEdge, LaidOutNode, MechanismLayout } from "@/lib/mechanism";
import type { MechanismDefinition } from "@/lib/mechanism";
import {
  getEntityMeta,
  getRelationshipMeta,
  INTERVENTION_ACTION_META,
} from "@/lib/mechanism";
import { describeEdge, describeNode } from "@/lib/mechanism";

export interface MechanismSvgProps {
  def: MechanismDefinition;
  layout: MechanismLayout;
  view: { x: number; y: number; z: number };
  selectedId: string | null;
  /** Node ids to dim (focus mode / level filter / scenario focus). */
  dimNodeIds: ReadonlySet<string>;
  /** Edge ids to dim. */
  dimEdgeIds: ReadonlySet<string>;
  /** Nodes that are intervention agents (get the agent ring). */
  agentNodeIds: ReadonlySet<string>;
  onNodeSelect: (id: string) => void;
  onNodeKeyDown: (e: React.KeyboardEvent, id: string) => void;
  dragging: boolean;
}

/* ---------- terminal geometry (angle in degrees, 0 = pointing right) ---------- */

function Terminal({ x, y, angle, kind, vars }: {
  x: number;
  y: number;
  angle: number;
  kind: string;
  vars: Record<string, string>;
}) {
  const t = `translate(${x} ${y}) rotate(${angle})`;
  const common = { className: "kyp-mech-terminal", "data-polarity": vars.polarity, "data-feedback": vars.feedback, "data-intervention": vars.intervention } as const;
  switch (kind) {
    case "tbar":
      return (
        <path
          {...common}
          d="M 0 -8.5 L 0 8.5"
          strokeWidth={3.5}
          fill="none"
          transform={t}
        />
      );
    case "dot":
      return <circle {...common} cx={0} cy={0} r={4.1} transform={t} />;
    case "chevron":
      return (
        <path
          {...common}
          d="M -10 -5 L -4.5 0 L -10 5 M -4 -5 L 1.5 0 L -4 5"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform={t}
        />
      );
    case "diamond":
      return <path {...common} d="M 0 -6.5 L 6.5 0 L 0 6.5 L -6.5 0 Z" transform={t} />;
    case "none":
      return null;
    // arrow (default)
    default:
      return <path {...common} d="M 2 0 L -10 -5.4 L -10 5.4 Z" transform={t} />;
  }
}

/* ---------- the component ---------- */

export const MechanismSvg = React.memo(function MechanismSvg({
  def,
  layout,
  view,
  selectedId,
  dimNodeIds,
  dimEdgeIds,
  agentNodeIds,
  onNodeSelect,
  onNodeKeyDown,
  dragging,
}: MechanismSvgProps) {
  const nodeAria = React.useCallback(
    (n: LaidOutNode) => {
      const base = describeNode(n.node);
      const hint = selectedId === n.id ? "selected" : "press Enter for details";
      return `${base}. ${hint}`;
    },
    [selectedId]
  );

  return (
    <svg
      className="kyp-mech-svg"
      data-dragging={dragging ? "true" : "false"}
      viewBox={`0 0 ${Math.max(layout.width, 320)} ${Math.max(layout.height, 200)}`}
      preserveAspectRatio="xMidYMin meet"
      role="group"
      aria-label={`${def.title} mechanism diagram: ${def.nodes.length} nodes, ${def.edges.length} relationships. Tab through nodes; press Enter to inspect.`}
    >
      <g transform={`translate(${view.x} ${view.y}) scale(${view.z})`}>
        {/* ---- compartments (behind everything) ---- */}
        {layout.compartments.map((c) => (
          <g key={`comp-${c.id}`} className="kyp-mech-compartment" aria-hidden="true">
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx={14} />
            <text x={c.x + 10} y={c.y + 15}>
              {c.label}
            </text>
          </g>
        ))}

        {/* ---- timeline stage chips ---- */}
        {layout.timeline.map((t, i) => (
          <g key={`tl-${t.id}`} className="kyp-mech-timeline" aria-hidden="true">
            <rect x={t.x} y={t.y} width={Math.max(t.w, 90)} height={t.h} rx={8} />
            <text x={t.x + Math.max(t.w, 90) / 2} y={t.y + t.h / 2 + 0.5}>
              {t.range ? `${t.label} (${t.range})` : t.label}
            </text>
            {i < layout.timeline.length - 1 && (
              <text
                x={t.x + Math.max(t.w, 90) + 12}
                y={t.y + t.h / 2 + 1}
                style={{ fill: "var(--mech-timeline-ink)", fontSize: 13, fontWeight: 700 }}
              >
                →
              </text>
            )}
          </g>
        ))}

        {/* ---- edges ---- */}
        {layout.edges.map((le) => {
          const rel = getRelationshipMeta(le.edge.relationship);
          if (!rel) return null;
          const vars: Record<string, string> = {
            polarity: rel.polarity,
            feedback: le.isFeedback ? "true" : "false",
            intervention: le.isIntervention ? "true" : "false",
          };
          return (
            <g key={le.id}>
              <path
                className="kyp-mech-edge"
                d={le.path}
                data-polarity={rel.polarity}
                data-stroke={le.isIntervention ? "dotted" : rel.stroke}
                data-feedback={le.isFeedback ? "true" : "false"}
                data-intervention={le.isIntervention ? "true" : "false"}
                data-dim={dimEdgeIds.has(le.id) ? "true" : "false"}
                role="img"
                aria-label={describeEdge(def, le.edge)}
              />
              <Terminal
                x={le.terminalX}
                y={le.terminalY}
                angle={le.isFeedback ? -90 : 0}
                kind={le.isIntervention && le.edge.interventionId
                  ? (INTERVENTION_ACTION_META[
                      def.interventions?.find((iv) => iv.id === le.edge.interventionId)?.action ?? "receptor-antagonism"
                    ]?.terminal ?? rel.terminal)
                  : rel.terminal}
                vars={vars}
              />
              {le.edge.label && le.labelX !== undefined && le.labelY !== undefined && (
                <g
                  className="kyp-mech-edge-label"
                  data-intervention={le.isIntervention ? "true" : "false"}
                  data-dim={dimEdgeIds.has(le.id) ? "true" : "false"}
                >
                  <rect
                    x={le.labelX - (le.labelWidth ?? 40) / 2}
                    y={le.labelY - (le.labelHeight ?? 17) / 2}
                    width={le.labelWidth ?? 40}
                    height={le.labelHeight ?? 17}
                    rx={7}
                  />
                  {(le.labelLines ?? [le.edge.label]).map((line, li) => (
                    <text
                      key={li}
                      x={le.labelX}
                      y={(le.labelY ?? 0) - (le.labelHeight ?? 17) / 2 + 12 + li * 14}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              )}
            </g>
          );
        })}

        {/* ---- floating intervention markers ---- */}
        {layout.interventions.map((li) => {
          if (!li.marker) return null;
          const iv = li.intervention;
          const action = INTERVENTION_ACTION_META[iv.action];
          return (
            <g key={`iv-${iv.id}`} className="kyp-mech-intervention-marker">
              {li.connectorPath && (
                <>
                  <path
                    className="kyp-mech-edge"
                    d={li.connectorPath}
                    data-polarity="positive"
                    data-stroke="dotted"
                    data-intervention="true"
                  />
                  <Terminal
                    x={li.connectorTerminalX}
                    y={li.connectorTerminalY}
                    angle={-90}
                    kind={action?.terminal ?? "arrow"}
                    vars={{ polarity: "positive", feedback: "false", intervention: "true" }}
                  />
                </>
              )}
              <rect x={li.marker.x} y={li.marker.y} width={li.marker.w} height={li.marker.h} rx={13} />
              <text className="marker-glyph" x={li.marker.x + 11} y={li.marker.y + li.marker.h / 2 + 0.5}>
                Rx
              </text>
              <text x={li.marker.x + 22} y={li.marker.y + li.marker.h / 2 + 0.5}>
                {iv.agentLabel}
              </text>
            </g>
          );
        })}

        {/* ---- nodes ---- */}
        {layout.nodes.map((n) => {
          const meta = n.node.type ? getEntityMeta(n.node.type) : null;
          const glyph = meta?.glyph ?? "◦";
          const labelX = 46;
          let baseline = 22;
          return (
            <g
              key={n.id}
              className="kyp-mech-node"
              transform={`translate(${n.x} ${n.y})`}
              data-selected={selectedId === n.id ? "true" : "false"}
              data-agent={agentNodeIds.has(n.id) ? "true" : "false"}
              data-dim={dimNodeIds.has(n.id) ? "true" : "false"}
              role="button"
              tabIndex={0}
              aria-label={nodeAria(n)}
              aria-pressed={selectedId === n.id ? "true" : "false"}
              onClick={(e) => {
                e.stopPropagation();
                onNodeSelect(n.id);
              }}
              onKeyDown={(e) => onNodeKeyDown(e, n.id)}
            >
              <rect className="node-box" width={n.w} height={n.h} rx={12} />
              <rect className="node-glyph-bg" x={11} y={(n.h - 24) / 2} width={24} height={24} rx={7} />
              <text className="node-glyph" x={23} y={n.h / 2 + 0.5} aria-hidden="true">
                {glyph}
              </text>
              <text className="node-label" aria-hidden="true">
                {(() => {
                  baseline = 22;
                  return n.labelLines.map((line, i) => {
                    const y = baseline + i * 16.5;
                    return (
                      <tspan key={i} x={labelX} y={y}>
                        {line}
                      </tspan>
                    );
                  });
                })()}
              </text>
              {n.sublabelLines.length > 0 && (
                <text className="node-sublabel" aria-hidden="true">
                  {n.sublabelLines.map((line, i) => {
                    const y = 22 + n.labelLines.length * 16.5 + 3 + 9 + i * 13.5;
                    return (
                      <tspan key={i} x={labelX} y={y}>
                        {line}
                      </tspan>
                    );
                  })}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
});
