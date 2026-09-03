"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitBranch, ChevronRight } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, DecisionPathNode } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugClinicalDecisionPath — algorithm-style decision tree.
 *
 * Renders an interactive decision tree showing:
 *   Patient presentation → severity → need for medication →
 *   why choose this drug → when NOT to choose → alternatives
 *
 * Students remember algorithms far better than paragraphs.
 *
 * Client Component — uses useState for selected branch.
 */
interface DrugClinicalDecisionPathProps {
  drug: Drug;
}

export function DrugClinicalDecisionPath({ drug }: DrugClinicalDecisionPathProps) {
  const path = drug.clinicalDecisionPath;
  const [visitedNodes, setVisitedNodes] = React.useState<string[]>([path?.startNodeId ?? ""]);

  if (!path) return null;

  const currentNodeId = visitedNodes[visitedNodes.length - 1];
  const currentNode = path.nodes.find((n) => n.id === currentNodeId);

  if (!currentNode) return null;

  const handleBranch = (nextId: string) => {
    setVisitedNodes((prev) => [...prev, nextId]);
  };

  const handleRestart = () => {
    setVisitedNodes([path.startNodeId]);
  };

  const handleBack = () => {
    setVisitedNodes((prev) => prev.slice(0, -1));
  };

  return (
    <Section id="decision-path" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Clinical Decision Path"
          title={path.title}
          description="Follow the algorithm — students remember decision trees far better than paragraphs. Click through each branch to see the recommendation."
          tone="brand"
        />

        <div className="mx-auto mt-10 max-w-2xl">
          {/* Breadcrumb of visited nodes */}
          {visitedNodes.length > 1 && (
            <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              {visitedNodes.map((nodeId, i) => {
                const node = path.nodes.find((n) => n.id === nodeId);
                return (
                  <React.Fragment key={i}>
                    {i > 0 && <ChevronRight className="h-3 w-3" />}
                    <button
                      type="button"
                      onClick={() => setVisitedNodes((prev) => prev.slice(0, i + 1))}
                      className="rounded-md px-2 py-0.5 hover:bg-accent/40"
                    >
                      {node?.question.slice(0, 40)}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {/* Current node */}
          <motion.div
            key={currentNodeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardPrimitive
              variant="flat"
              interactive={false}
              showArrow={false}
              className={cn(
                currentNode.recommendation
                  ? "border-brand/20 bg-brand-soft/10"
                  : "border-border/70"
              )}
            >
              <CardBody className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="h-4 w-4 text-brand" />
                  <p className="text-overline text-muted-foreground">
                    Step {visitedNodes.length}
                  </p>
                </div>

                <h3 className="text-h3 text-foreground mb-3">{currentNode.question}</h3>

                {/* Terminal node — recommendation */}
                {currentNode.recommendation && (
                  <div className="mt-3 rounded-lg border border-brand/20 bg-brand-soft/10 p-3">
                    <p className="text-overline text-brand mb-1">Recommendation</p>
                    <p className="text-body-sm text-foreground/90 leading-relaxed">
                      {currentNode.recommendation}
                    </p>
                  </div>
                )}

                {/* Reasoning */}
                {currentNode.reasoning && (
                  <div className="mt-3">
                    <p className="text-overline text-muted-foreground mb-1">Why?</p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {currentNode.reasoning}
                    </p>
                  </div>
                )}

                {/* Branches */}
                {currentNode.branches && currentNode.branches.length > 0 && (
                  <div className="mt-4">
                    <p className="text-overline text-muted-foreground mb-2">Select:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentNode.branches.map((branch) => (
                        <button
                          key={branch.next}
                          type="button"
                          onClick={() => handleBranch(branch.next)}
                          className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:bg-brand-soft/30"
                        >
                          {branch.label}
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardBody>
            </CardPrimitive>
          </motion.div>

          {/* Navigation buttons */}
          <div className="mt-4 flex justify-between gap-2">
            {visitedNodes.length > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="rounded-lg border border-border/70 bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent/40"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-lg border border-border/70 bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent/40"
            >
              ↻ Restart
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
