"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Network, MousePointerClick, Layers, ArrowDown, Check, Clock, Star } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Timeline } from "@/components/kyp/ui/timeline";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { LearningPath } from "@/components/kyp/ui/learning-path";
import { EvidenceBadge, EvidenceLegend, StepChain } from "./course-ui";
import { linkPath } from "@/lib/kyp/image-path";
import type { PsychiatryCourse } from "./course-types";
import { cn } from "@/lib/utils";

/* ============================================================
   Lesson 1 + Lesson 2 section components for the Psychiatry
   course layer. Visual language: aligned with the drug lesson
   oracle (DrugHero ambient grid/orbs + text-display, tight
   quick-facts strip, CardPrimitive chassis, wide neuroscience
   rhythm) — content model unchanged.
   ============================================================ */

/** Lesson 1 — hero (id="top"): the anchor the resume system targets.
 *  Mirrors DrugHero: ambient grid, drifting orbs, breadcrumb,
 *  Badge metadata row, display typography. */
export function CourseHero({ course }: { course: PsychiatryCourse }) {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* Ambient decoration — subtle, not dominant */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl kyp-drift" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-neural/15 blur-3xl kyp-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />

      <Container className="relative">
        {/* Learning path breadcrumb — every segment links to the
            collection that browses it (Psychiatry → /psychiatry,
            group → /psychiatry/library/#group-X); the final segment is
            the current page. */}
        <div className="mb-4">
          <LearningPath
            path={course.learningPath}
            links={[
              "/psychiatry",
              `/psychiatry/library/#group-${course.groupLetter}`,
              undefined,
            ]}
          />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="brand" size="sm">
                <Layers className="h-2.5 w-2.5" />
                {course.category}
              </Badge>
              <span className="text-muted-foreground/70">
                {course.kind === "disorder" ? "Disorder course" : "Concept course"}
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {course.estimatedReadTime}
              </span>
              {course.yieldRating === "high" && (
                <span className="inline-flex items-center gap-1 text-neural">
                  <Star className="h-2.5 w-2.5 fill-current" />
                  High yield
                </span>
              )}
            </div>

            <h1 className="mt-3 text-display text-foreground leading-[1.05]">{course.title}</h1>

            <p className="mt-3 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground">
              {course.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base text-foreground/80 leading-relaxed">
              {course.summary}
            </p>
          </div>

          {/* Objectives — the "what you will be able to do" card (also the
              learning-objectives scroll anchor for the sticky nav) */}
          <aside id="learning-objectives" className="scroll-mt-28">
            <CardPrimitive
              variant="flat"
              interactive={false}
              showArrow={false}
              className="border-brand/20 bg-brand-soft/20"
            >
              <CardBody className="p-6">
                <p className="text-overline text-brand">Learning objectives</p>
                <ul className="mt-4 space-y-2.5">
                  {course.learningObjectives.slice(0, 6).map((objective, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-body-sm text-foreground/90 leading-relaxed">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
                {course.learningObjectives.length > 6 && (
                  <p className="mt-3 text-caption text-muted-foreground">
                    +{course.learningObjectives.length - 6} more objectives below in the flow
                  </p>
                )}
              </CardBody>
            </CardPrimitive>
          </aside>
        </div>
      </Container>
    </section>
  );
}

/** Lesson 1 — quick facts (tight unbanded strip, drug pattern). */
export function CourseQuickFacts({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="quick-facts" spacing="tight">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {course.quickFacts.map((fact, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody>
                <p className="text-overline text-muted-foreground">{fact.label}</p>
                <p className="mt-1.5 font-serif text-lg font-semibold leading-tight text-foreground">
                  {fact.value}
                </p>
                {fact.detail && (
                  <p className="mt-2 text-caption text-muted-foreground leading-relaxed">
                    {fact.detail}
                  </p>
                )}
              </CardBody>
            </CardPrimitive>
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

/** Lesson 2 — mechanism with evidence grading (wide banded, drug rhythm). */
export function CourseMechanism({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="mechanism" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Mechanism"
          title="What actually happens — graded honestly."
          tone="neural"
          align="start"
        />
        <div className="mt-4">
          <EvidenceLegend />
        </div>
        <div className="mt-6">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-overline text-muted-foreground">
                  Overall model grade:
                </span>
                <EvidenceBadge grade={course.mechanism.grade} />
              </div>
              <p className="mt-3 text-body-sm leading-relaxed text-foreground/85">{course.mechanism.summary}</p>
            </CardBody>
          </CardPrimitive>
        </div>
        <div className="mt-8">
          <StepChain steps={course.mechanism.steps.map((s) => ({ label: s, detail: undefined }))} />
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — brain regions (wide unbanded, three-across with stagger). */
export function CourseBrain({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="brain">
      <Container>
        <SectionHeader
          eyebrow="Brain"
          title="The structures that carry this topic."
          description="Only regions with a genuine, teachable role — every claim carries its evidence grade."
          tone="neural"
          align="start"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.brainRegions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.25, delay: Math.min(i * 0.05, 0.3) }}
            >
              <CardPrimitive
                variant="flat"
                interactive={false}
                showArrow={false}
                className="h-full border-neural/25"
              >
                <CardBody className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-body-sm font-semibold leading-snug text-foreground">{region.name}</p>
                    <EvidenceBadge grade={region.grade} />
                  </div>
                  <p className="mt-2 text-caption leading-relaxed text-muted-foreground">{region.role}</p>
                </CardBody>
              </CardPrimitive>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — neurotransmitters (wide banded, three-across cards). */
export function CourseNeurotransmitters({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="neurotransmitters" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Neurotransmitters"
          title="The chemical systems involved — and the drugs that speak them."
          tone="neural"
          align="start"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.neurotransmitters.map((nt, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="h-full">
              <CardBody className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-neural-soft/70 px-2 py-0.5 font-mono text-xs font-semibold text-neural">
                    {nt.symbol}
                  </span>
                  <p className="text-body-sm font-semibold text-foreground">{nt.name}</p>
                  <EvidenceBadge grade={nt.grade} className="ml-auto" />
                </div>
                <p className="mt-2 text-caption leading-relaxed text-muted-foreground">{nt.role}</p>
                {nt.drugConnection && (
                  <p className="mt-3 inline-flex items-center gap-1 rounded-md border border-brand/25 bg-brand-soft/40 px-2 py-1 text-caption font-medium text-brand">
                    <ArrowRight className="h-3 w-3" />
                    {nt.drugConnection}
                  </p>
                )}
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — pathways (receptor → pathway → circuit → manifestation chains). */
export function CoursePathways({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="pathways">
      <Container>
        <SectionHeader
          eyebrow="Pathways"
          title="Follow the chain from molecule to symptom."
          description="Structured pathway data — rendered, never hard-coded graphics."
          tone="neural"
          align="start"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {course.pathways.map((pathway) => (
            <CardPrimitive key={pathway.id} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-body-sm font-semibold text-foreground">{pathway.name}</p>
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
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — timeline (reuses the shared Timeline component). */
export function CourseTimeline({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="timeline" className="bg-muted/20">
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
