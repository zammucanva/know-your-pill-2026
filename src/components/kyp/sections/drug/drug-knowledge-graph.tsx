"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Network, MousePointerClick } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, KnowledgeGraphNode } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugKnowledgeGraph — KYP's signature interactive feature.
 *
 * Renders the drug's relationships as an interactive node grid.
 * Hover any node to:
 *   1. Highlight the node
 *   2. Show its relationship path
 *   3. Display an explanation tooltip
 *   4. Reveal the click destination
 *
 * Every node is clickable — navigating to its destination.
 *
 * Client Component — uses React state for hover + framer-motion for entrance.
 */

interface DrugKnowledgeGraphProps {
  drug: Drug;
}

const nodeTypeConfig = {
  drug: { variant: "brand" as const, label: "Drug", color: "text-brand", bg: "bg-brand-soft/60", border: "border-brand/30" },
  class: { variant: "brand" as const, label: "Class", color: "text-brand", bg: "bg-brand-soft/60", border: "border-brand/30" },
  neurotransmitter: { variant: "neural" as const, label: "Neurotransmitter", color: "text-neural", bg: "bg-neural-soft/60", border: "border-neural/30" },
  "brain-region": { variant: "neural" as const, label: "Brain Region", color: "text-neural", bg: "bg-neural-soft/60", border: "border-neural/30" },
  pathway: { variant: "brand" as const, label: "Pathway", color: "text-brand", bg: "bg-brand-soft/60", border: "border-brand/30" },
  condition: { variant: "success" as const, label: "Condition", color: "text-success", bg: "bg-success-soft/60", border: "border-success/30" },
  "side-effect": { variant: "warning" as const, label: "Side Effect", color: "text-warning", bg: "bg-warning-soft/60", border: "border-warning/30" },
  "clinical-case": { variant: "outline" as const, label: "Case", color: "text-foreground", bg: "bg-muted/40", border: "border-border/70" },
  "patient-guide": { variant: "outline" as const, label: "Guide", color: "text-foreground", bg: "bg-muted/40", border: "border-border/70" },
};

export function DrugKnowledgeGraph({ drug }: DrugKnowledgeGraphProps) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const nodes = drug.knowledgeGraph;

  return (
    <Section id="knowledge-graph" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Knowledge Graph"
          title="Everything this drug touches."
          description="Hover any node to see its relationship. Click to navigate. This is KYP's signature feature — no other psychopharmacology platform surfaces these connections."
          tone="neural"
          align="center"
        />

        {/* Hint */}
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <MousePointerClick className="h-3 w-3" />
            Hover to highlight · Click to navigate
          </span>
        </div>

        {/* Interactive node grid */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {nodes.map((node, i) => (
              <KnowledgeGraphNode
                key={`${node.type}-${node.label}`}
                node={node}
                index={i}
                isHovered={hoveredIdx === i}
                onHover={(idx) => setHoveredIdx(idx)}
              />
            ))}
          </div>
        </div>

        {/* Hover detail panel — appears below the grid */}
        <div className="mx-auto mt-8 max-w-2xl min-h-[80px]">
          {hoveredIdx !== null ? (
            <HoverDetail node={nodes[hoveredIdx]} />
          ) : (
            <div className="rounded-xl border border-dashed border-border/60 bg-card/40 p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <Network className="inline h-4 w-4 mr-1.5 -mt-0.5" />
                {nodes.length} relationships indexed — hover any node above to see how it connects to {drug.genericName}.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

function KnowledgeGraphNode({
  node,
  index,
  isHovered,
  onHover,
}: {
  node: KnowledgeGraphNode;
  index: number;
  isHovered: boolean;
  onHover: (idx: number | null) => void;
}) {
  const config = nodeTypeConfig[node.type];

  return (
    <motion.a
      href={node.href}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(index)}
      onBlur={() => onHover(null)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
      className={cn(
        "group relative flex flex-col items-start gap-1.5 rounded-lg border p-3 transition-all duration-150",
        isHovered
          ? cn(config.border, config.bg, "shadow-[var(--shadow-card)] scale-[1.03] z-10")
          : "border-border/60 bg-card hover:border-brand/30"
      )}
    >
      {/* Type label — tiny, top-right */}
      <span className={cn(
        "absolute right-2 top-2 text-[0.55rem] font-semibold uppercase tracking-wide",
        isHovered ? config.color : "text-muted-foreground/50"
      )}>
        {config.label}
      </span>

      {/* Node label */}
      <p className={cn(
        "text-xs font-medium leading-tight pr-12",
        isHovered ? "text-foreground" : "text-foreground/80"
      )}>
        {node.label}
      </p>

      {/* Note — only on hover */}
      {node.note && isHovered && (
        <p className="text-[0.65rem] text-muted-foreground leading-snug mt-0.5">
          {node.note}
        </p>
      )}

      {/* Arrow indicator — appears on hover */}
      {isHovered && (
        <ArrowRight className="absolute bottom-2 right-2 h-3 w-3 text-brand" />
      )}
    </motion.a>
  );
}

function HoverDetail({ node }: { node: KnowledgeGraphNode }) {
  const config = nodeTypeConfig[node.type];

  const relationshipDescriptions: Record<string, string> = {
    drug: "The drug you're currently reading about.",
    class: "The pharmacological class this drug belongs to.",
    neurotransmitter: "The chemical messenger this drug modulates in the brain.",
    "brain-region": "A brain region where this drug has clinically significant effects.",
    pathway: "A neural circuit relevant to this drug's mechanism.",
    condition: "A clinical condition this drug is used to treat.",
    "side-effect": "A side effect this drug can cause — know the warning signs.",
    "clinical-case": "A real patient case illustrating this drug in practice.",
    "patient-guide": "Plain-language guidance for patients taking this drug.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn("rounded-xl border p-4", config.border, config.bg)}
    >
      <div className="flex items-start gap-3">
        <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", config.bg, config.color)}>
          <Network className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="text-sm font-semibold text-foreground">{node.label}</p>
            <Badge variant={config.variant} size="sm">{config.label}</Badge>
          </div>
          {node.note && (
            <p className="mt-1 text-xs text-foreground/70">{node.note}</p>
          )}
          <p className="mt-1.5 text-xs text-muted-foreground">
            {relationshipDescriptions[node.type]}
          </p>
        </div>
        <a
          href={node.href}
          className="shrink-0 inline-flex items-center gap-1 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
        >
          Open
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </motion.div>
  );
}
