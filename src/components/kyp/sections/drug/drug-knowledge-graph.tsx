"use client";

import { motion } from "framer-motion";
import { ArrowRight, Network } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, KnowledgeGraphNode } from "@/lib/kyp/data";

/**
 * DrugKnowledgeGraph — the canonical "everything connects" panel.
 *
 * Phase 5 (Knowledge Graph) will turn this into a fully interactive
 * graph visualisation. For now it renders as a vertical chain that
 * surfaces every relationship this drug has — every node is clickable.
 *
 * Each node links to its destination (either another section on this
 * page, another KYP page, or an external anchor).
 *
 * This is the single most differentiated feature of KYP — no other
 * psychopharmacology platform surfaces these connections visually.
 *
 * Client Component — uses framer-motion for the staggered entrance.
 */

interface DrugKnowledgeGraphProps {
  drug: Drug;
}

const nodeTypeVariant = {
  drug: "brand" as const,
  class: "brand" as const,
  neurotransmitter: "neural" as const,
  "brain-region": "neural" as const,
  pathway: "brand" as const,
  condition: "success" as const,
  "side-effect": "warning" as const,
  "clinical-case": "outline" as const,
  "patient-guide": "outline" as const,
};

const nodeTypeLabel = {
  drug: "Drug",
  class: "Class",
  neurotransmitter: "Neurotransmitter",
  "brain-region": "Brain Region",
  pathway: "Pathway",
  condition: "Condition",
  "side-effect": "Side Effect",
  "clinical-case": "Case",
  "patient-guide": "Guide",
};

export function DrugKnowledgeGraph({ drug }: DrugKnowledgeGraphProps) {
  return (
    <Section id="knowledge-graph" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Knowledge Graph"
          title="Everything this drug touches."
          description="Open any node below to traverse the web of neuroscience around this drug — the class it belongs to, the neurotransmitter it modulates, the brain regions it acts on, the conditions it treats, and the side effects it can cause. This is what makes KYP different from a Wikipedia article."
          tone="neural"
          align="center"
        />

        {/* Vertical chain */}
        <div className="mx-auto mt-12 max-w-2xl">
          {drug.knowledgeGraph.map((node, i) => (
            <KnowledgeGraphNodeRow key={`${node.type}-${node.label}`} node={node} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-caption text-muted-foreground">
            {drug.knowledgeGraph.length} relationships indexed · Phase 5 will turn this list into a
            fully interactive graph visualisation.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function KnowledgeGraphNodeRow({ node, index }: { node: KnowledgeGraphNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
    >
      <a
        href={node.href}
        className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3 shadow-[var(--shadow-soft)] transition-all hover:border-brand/40 hover:shadow-[var(--shadow-lift)]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neural-soft/60 text-neural">
          <Network className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="text-body-sm font-medium text-foreground">{node.label}</p>
            <Badge variant={nodeTypeVariant[node.type]} size="sm">
              {nodeTypeLabel[node.type]}
            </Badge>
          </div>
          {node.note && (
            <p className="mt-0.5 text-caption text-muted-foreground">{node.note}</p>
          )}
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </a>

      {/* Connector line to next node */}
      <div className="ml-7 my-1 h-3 w-px bg-border" aria-hidden />
    </motion.div>
  );
}
