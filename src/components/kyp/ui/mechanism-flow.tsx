"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MechanismFlow as MechanismFlowType } from "@/lib/kyp/data";

/**
 * MechanismFlow — visual flow diagram for the mechanism of action.
 *
 * Renders the drug's `mechanismFlow` as an interactive vertical chain
 * of nodes connected by labelled edges. Inhibition edges (type: "inhibit")
 * render with a T-bar instead of an arrow.
 *
 * Each node is colour-coded by variant:
 *   - input   : teal (source / starting point)
 *   - process : violet (intermediate step)
 *   - target  : amber (the molecular target being modulated)
 *   - output  : green (downstream effect)
 *   - inhibit : coral (the inhibiting agent, e.g. the drug itself)
 *
 * Client Component — uses framer-motion for staggered entrance.
 */
interface MechanismFlowProps {
  flow: MechanismFlowType;
}

const variantStyles = {
  input: {
    bg: "bg-brand-soft/60",
    border: "border-brand/30",
    text: "text-brand-ink",
    dot: "bg-brand",
  },
  process: {
    bg: "bg-neural-soft/60",
    border: "border-neural/30",
    text: "text-neural",
    dot: "bg-neural",
  },
  target: {
    bg: "bg-warning-soft/60",
    border: "border-warning/30",
    text: "text-warning",
    dot: "bg-warning",
  },
  output: {
    bg: "bg-success-soft/60",
    border: "border-success/30",
    text: "text-success",
    dot: "bg-success",
  },
  inhibit: {
    bg: "bg-emergency-soft/60",
    border: "border-emergency/30",
    text: "text-emergency",
    dot: "bg-emergency",
  },
};

export function MechanismFlow({ flow }: MechanismFlowProps) {
  // Build a lookup from node ID to node
  const nodeMap = React.useMemo(() => {
    const map = new Map<string, MechanismFlowType["nodes"][number]>();
    flow.nodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [flow]);

  // Group edges by their `from` node so we can render outgoing edges per node
  const outgoingEdges = React.useMemo(() => {
    const map = new Map<string, MechanismFlowType["edges"]>();
    flow.edges.forEach((e) => {
      if (!map.has(e.from)) map.set(e.from, []);
      map.get(e.from)!.push(e);
    });
    return map;
  }, [flow]);

  // Find nodes that are not the target of any edge — these are "roots"
  const rootNodes = React.useMemo(() => {
    const targets = new Set(flow.edges.map((e) => e.to));
    return flow.nodes.filter((n) => !targets.has(n.id));
  }, [flow]);

  // Walk the graph to produce a render order (BFS from roots)
  const orderedNodes = React.useMemo(() => {
    const visited = new Set<string>();
    const order: string[] = [];
    const queue = [...rootNodes.map((n) => n.id)];

    while (queue.length > 0) {
      const id = queue.shift()!;
      if (visited.has(id)) continue;
      visited.add(id);
      order.push(id);
      const edges = outgoingEdges.get(id) ?? [];
      edges.forEach((e) => {
        if (!visited.has(e.to)) queue.push(e.to);
      });
    }

    // Add any remaining nodes (in case of cycles or disconnected components)
    flow.nodes.forEach((n) => {
      if (!visited.has(n.id)) order.push(n.id);
    });

    return order;
  }, [rootNodes, outgoingEdges, flow.nodes]);

  return (
    <div className="mt-6">
      <div className="space-y-0">
        {orderedNodes.map((nodeId, index) => {
          const node = nodeMap.get(nodeId);
          if (!node) return null;
          const edges = outgoingEdges.get(nodeId) ?? [];
          const style = variantStyles[node.variant];

          return (
            <React.Fragment key={nodeId}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.08, 0.5) }}
                className="relative"
              >
                <div
                  className={cn(
                    "flex items-start gap-3 rounded-xl border p-4",
                    style.bg,
                    style.border
                  )}
                >
                  <span className={cn("mt-0.5 h-3 w-3 shrink-0 rounded-full", style.dot)} />
                  <div className="min-w-0 flex-1">
                    <p className={cn("font-serif text-base font-semibold leading-tight", style.text)}>
                      {node.label}
                    </p>
                    {node.sublabel && (
                      <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                        {node.sublabel}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Render outgoing edges as connectors */}
              {edges.map((edge, ei) => {
                const target = nodeMap.get(edge.to);
                if (!target) return null;
                const isInhibit = edge.type === "inhibit";
                return (
                  <div
                    key={`${edge.from}-${edge.to}-${ei}`}
                    className="flex items-center gap-2 py-1.5 pl-6"
                  >
                    {/* Vertical connector */}
                    <div
                      className={cn(
                        "h-px w-8",
                        isInhibit ? "bg-emergency" : "bg-border"
                      )}
                    />
                    {/* T-bar for inhibition, arrow for stimulation */}
                    {isInhibit ? (
                      <span className="text-emergency font-bold text-lg leading-none">⊣</span>
                    ) : (
                      <span className="text-muted-foreground">↓</span>
                    )}
                    {edge.label && (
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[0.65rem] font-medium",
                          isInhibit
                            ? "bg-emergency-soft/60 text-emergency"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {edge.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>

      {flow.caption && (
        <p className="mt-6 rounded-lg border border-border/70 bg-muted/40 p-3 text-center text-caption italic text-muted-foreground">
          {flow.caption}
        </p>
      )}
    </div>
  );
}
