"use client";

import { motion } from "framer-motion";
import { ArrowRight, Network } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * KnowledgeGraphSection — teaser for Phase 5.
 * Shows a vertical chain: Sertraline → SSRI → Serotonin → Raphe Nuclei →
 * Prefrontal Cortex → Depression → Side Effects → Clinical Case →
 * Related Drugs → Patient Guide.
 *
 * This is the future "wow" feature of KYP — interconnected learning.
 */
const chain = [
  { label: "Sertraline", type: "Drug" },
  { label: "SSRI", type: "Class" },
  { label: "Serotonin", type: "Neurotransmitter" },
  { label: "Raphe Nuclei", type: "Brain Region" },
  { label: "Prefrontal Cortex", type: "Brain Region" },
  { label: "Depression", type: "Condition" },
  { label: "Side Effects", type: "Library" },
  { label: "Clinical Case", type: "Case" },
  { label: "Related Drugs", type: "Drugs" },
  { label: "Patient Guide", type: "Guide" },
];

export function KnowledgeGraphSection() {
  return (
    <Section id="knowledge-graph" className="relative">
      <Container>
        <SectionHeader
          eyebrow="Knowledge Graph · Coming in Phase 5"
          title="Everything connects."
          description="Open Sertraline and instantly traverse the entire web of neuroscience around it — the class it belongs to, the neurotransmitter it touches, the brain region where it acts, the conditions it treats, the side effects it causes, and the patient guide that explains it all in plain language."
          tone="neural"
          align="center"
        />

        {/* Vertical chain visualization */}
        <div className="mx-auto mt-12 max-w-md">
          {chain.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="relative"
            >
              <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3 shadow-[var(--shadow-card)]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
                  <Network className="h-4 w-4" />
                </span>
                <span className="flex-1 text-body-sm font-medium text-foreground">{node.label}</span>
                <Badge variant="outline" size="sm">{node.type}</Badge>
              </div>
              {i < chain.length - 1 && (
                <div className="ml-7 my-1 h-6 w-px bg-border" aria-hidden />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-xl">
            Preview the Knowledge Graph
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
