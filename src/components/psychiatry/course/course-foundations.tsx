"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Network, MousePointerClick, Zap, Target, Layers, ArrowDown } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Timeline } from "@/components/kyp/ui/timeline";
import { Badge } from "@/components/kyp/ui/badge";
import { EvidenceBadge, EvidenceLegend, StepChain } from "./course-ui";
import { linkPath } from "@/lib/kyp/image-path";
import type { PsychiatryCourse } from "./course-types";
import type { KnowledgeGraphNode } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/* ============================================================
   Lesson 1 + Lesson 2 section components for the Psychiatry
   course layer. Visual language: the KYP psych design tokens
   (kyp-grid-bg, Georgia display, shared card system) — parity
   verified at the shell level in the prior release.
   ============================================================ */

/** Lesson 1 — hero (id="top"): the anchor the resume system targets. */
export function CourseHero({ course }: { course: PsychiatryCourse }) {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border border-brand/30 bg-brand-soft/50 px-2.5 py-0.5 font-medium text-brand">
                KYP Psychiatry · Group {course.groupLetter}
              </span>
              <span className="rounded-full border border-border/70 bg-card px-2.5 py-0.5 text-muted-foreground">
                {course.kind === "disorder" ? "Disorder course" : "Concept course"}
              </span>
              <span className="rounded-full border border-border/70 bg-card px-2.5 py-0.5 text-muted-foreground">
                {course.category}
              </span>
            </div>
            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-3 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground">
              {course.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
              {course.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Layers className="h-3.5 w-3.5 text-brand" />
                Six lessons · {course.estimatedReadTime}
              </span>
              <span className="inline-flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-warning" />
                {course.yieldRating === "high" ? "High-yield" : course.yieldRating === "medium" ? "Medium-yield" : "Background"}
              </span>
              <span className="inline-flex items-center gap-1">
                <Target className="h-3.5 w-3.5 text-neural" />
                {course.learningPath.join(" › ")}
              </span>
            </div>
          </div>

          {/* Objectives — the "what you will be able to do" card (also the
              learning-objectives scroll anchor for the sticky nav) */}
          <aside id="learning-objectives" className="scroll-mt-28 rounded-xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">Learning objectives</p>
            <ul className="mt-3 space-y-2">
              {course.learningObjectives.slice(0, 6).map((objective, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/75">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                  {objective}
                </li>
              ))}
            </ul>
            {course.learningObjectives.length > 6 && (
              <p className="mt-2 text-[0.65rem] text-muted-foreground">
                +{course.learningObjectives.length - 6} more objectives below in the flow
              </p>
            )}
          </aside>
        </div>
      </Container>
    </section>
  );
}

/** Lesson 1 — quick facts. */
export function CourseQuickFacts({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="quick-facts" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Quick Facts"
          title="The numbers worth carrying."
          tone="brand"
          align="center"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {course.quickFacts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.25, delay: Math.min(i * 0.05, 0.3) }}
              className="rounded-xl border border-border/70 bg-card p-4"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-1.5 font-serif text-xl leading-tight text-foreground">{fact.value}</p>
              {fact.detail && (
                <p className="mt-1.5 text-[0.7rem] leading-snug text-muted-foreground">{fact.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 1 — knowledge graph (ported from the drug oracle with typed props). */
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

export function CourseKnowledgeGraph({ course }: { course: PsychiatryCourse }) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const nodes = course.knowledgeGraph;
  const subject = course.title;

  const relationshipDescriptions: Record<string, string> = {
    drug: "A medication relevant to this topic — with a full KYP drug lesson.",
    class: "The pharmacological class relevant to this topic.",
    neurotransmitter: "A chemical messenger central to this topic's neuroscience.",
    "brain-region": "A brain structure where this topic does its work.",
    pathway: "A neural circuit relevant to this topic.",
    condition: "A clinical condition connected to this topic.",
    "side-effect": "A side effect connected to this topic.",
    "clinical-case": "A patient case illustrating this topic.",
    "patient-guide": "Plain-language guidance connected to this topic.",
  };

  return (
    <Section id="knowledge-graph" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Knowledge Graph"
          title="Everything this topic touches."
          description="Hover any node to see its relationship. Click to navigate — every link is a real KYP route."
          tone="neural"
          align="center"
        />
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <MousePointerClick className="h-3 w-3" />
            Hover to highlight · Click to navigate
          </span>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {nodes.map((node, i) => {
              const config = nodeTypeConfig[node.type];
              const isHovered = hoveredIdx === i;
              return (
                <motion.a
                  key={`${node.type}-${node.label}`}
                  href={linkPath(node.href)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onFocus={() => setHoveredIdx(i)}
                  onBlur={() => setHoveredIdx(null)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.3) }}
                  className={cn(
                    "group relative flex min-w-0 flex-col items-start gap-1.5 rounded-lg border p-3 transition-all duration-150",
                    isHovered
                      ? cn(config.border, config.bg, "shadow-[var(--shadow-lift)] scale-[1.03] z-10")
                      : "border-border/60 bg-card hover:border-brand/30"
                  )}
                >
                  <span className={cn(
                    "absolute right-2 top-2 text-[0.55rem] font-semibold uppercase tracking-wide",
                    isHovered ? config.color : "text-muted-foreground/50"
                  )}>
                    {config.label}
                  </span>
                  <p className={cn(
                    "min-w-0 text-xs font-medium leading-tight pr-12 [overflow-wrap:anywhere]",
                    isHovered ? "text-foreground" : "text-foreground/80"
                  )}>
                    {node.label}
                  </p>
                  {node.note && isHovered && (
                    <p className="min-w-0 text-[0.65rem] leading-snug text-muted-foreground mt-0.5 [overflow-wrap:anywhere]">
                      {node.note}
                    </p>
                  )}
                  {isHovered && <ArrowRight className="absolute bottom-2 right-2 h-3 w-3 text-brand" />}
                </motion.a>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-2xl min-h-[72px]">
          {hoveredIdx !== null ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "rounded-xl border p-4",
                nodeTypeConfig[nodes[hoveredIdx].type].border,
                nodeTypeConfig[nodes[hoveredIdx].type].bg
              )}
            >
              <div className="flex items-start gap-3">
                <span className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                  nodeTypeConfig[nodes[hoveredIdx].type].bg,
                  nodeTypeConfig[nodes[hoveredIdx].type].color
                )}>
                  <Network className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <p className="text-sm font-semibold text-foreground">{nodes[hoveredIdx].label}</p>
                    <Badge variant={nodeTypeConfig[nodes[hoveredIdx].type].variant} size="sm">
                      {nodeTypeConfig[nodes[hoveredIdx].type].label}
                    </Badge>
                  </div>
                  {nodes[hoveredIdx].note && (
                    <p className="mt-1 text-xs text-foreground/70">{nodes[hoveredIdx].note}</p>
                  )}
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {relationshipDescriptions[nodes[hoveredIdx].type]}
                  </p>
                </div>
                <a
                  href={linkPath(nodes[hoveredIdx].href)}
                  className="shrink-0 inline-flex items-center gap-1 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Open
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="rounded-xl border border-dashed border-border/60 bg-card/40 p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <Network className="inline h-4 w-4 mr-1.5 -mt-0.5" />
                {nodes.length} relationships indexed — hover any node above to see how it connects to {subject}.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — mechanism with evidence grading. */
export function CourseMechanism({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="mechanism">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Mechanism"
          title="What actually happens — graded honestly."
          tone="neural"
          align="start"
        />
        <div className="mt-4">
          <EvidenceLegend />
        </div>
        <div className="mt-6 rounded-xl border border-border/70 bg-card p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Overall model grade:
            </span>
            <EvidenceBadge grade={course.mechanism.grade} />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{course.mechanism.summary}</p>
        </div>
        <div className="mt-8">
          <StepChain steps={course.mechanism.steps.map((s) => ({ label: s, detail: undefined }))} />
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — brain regions. */
export function CourseBrain({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="brain" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Brain"
          title="The structures that carry this topic."
          description="Only regions with a genuine, teachable role — every claim carries its evidence grade."
          tone="neural"
          align="start"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {course.brainRegions.map((region, i) => (
            <div key={i} className="rounded-xl border border-neural/25 bg-card p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium leading-snug text-foreground">{region.name}</p>
                <EvidenceBadge grade={region.grade} />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{region.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — neurotransmitters. */
export function CourseNeurotransmitters({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="neurotransmitters">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Neurotransmitters"
          title="The chemical systems involved — and the drugs that speak them."
          tone="neural"
          align="start"
        />
        <div className="mt-8 space-y-3">
          {course.neurotransmitters.map((nt, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-neural-soft/70 px-2 py-0.5 font-mono text-xs font-semibold text-neural">
                  {nt.symbol}
                </span>
                <p className="font-medium text-foreground">{nt.name}</p>
                <EvidenceBadge grade={nt.grade} className="ml-auto" />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{nt.role}</p>
              {nt.drugConnection && (
                <p className="mt-2 inline-flex items-center gap-1 rounded-md border border-brand/25 bg-brand-soft/40 px-2 py-1 text-[0.7rem] font-medium text-brand">
                  <ArrowRight className="h-3 w-3" />
                  {nt.drugConnection}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — pathways (receptor → pathway → circuit → manifestation chains). */
export function CoursePathways({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="pathways" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Pathways"
          title="Follow the chain from molecule to symptom."
          description="Structured pathway data — rendered, never hard-coded graphics."
          tone="neural"
          align="start"
        />
        <div className="mt-8 space-y-4">
          {course.pathways.map((pathway) => (
            <div key={pathway.id} className="rounded-xl border border-border/70 bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-foreground">{pathway.name}</p>
                <EvidenceBadge grade={pathway.grade} />
              </div>
              <div className="mt-4 flex flex-col items-stretch gap-1 sm:flex-row sm:items-center">
                {pathway.steps.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex min-w-0 flex-1 flex-col rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
                      <p className="text-xs font-medium leading-snug text-foreground">{step.label}</p>
                      {step.detail && (
                        <p className="mt-0.5 text-[0.65rem] leading-snug text-muted-foreground">{step.detail}</p>
                      )}
                    </div>
                    {i < pathway.steps.length - 1 && (
                      <ArrowDown
                        aria-hidden
                        className="mx-auto h-4 w-4 shrink-0 text-brand/60 sm:rotate-90"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-4 rounded-lg border border-brand/20 bg-brand-soft/30 px-3 py-2 text-xs leading-relaxed text-foreground/80">
                <span className="font-semibold text-brand">Clinical meaning: </span>
                {pathway.clinicalManifestation}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — timeline (reuses the shared Timeline component). */
export function CourseTimeline({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="timeline">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Timeline"
          title="How the story unfolds over time."
          align="center"
        />
        <div className="mt-10">
          <Timeline events={course.timeline} />
        </div>
      </Container>
    </Section>
  );
}
