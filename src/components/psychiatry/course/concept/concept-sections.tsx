"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Network, Printer, Check } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Timeline } from "@/components/kyp/ui/timeline";
import { cn } from "@/lib/utils";
import { linkPath } from "@/lib/kyp/image-path";
import {
  capQuickFacts,
  getConceptSectionVisibility,
} from "@/lib/kyp/psychiatry-concept-visibility";
import type { PsychiatryCourse } from "../course-types";
import {
  ConceptSectionHeader,
  EvidenceGradeDot,
  InlineExpander,
  ConceptAccordion,
} from "./concept-ui";
import { StepChain } from "../course-ui";

/* ============================================================
   Concept lesson sections — Lessons 1–3 of the concept course
   template (redesign B). Content model, section ids, mode
   gating and completion denominators are UNCHANGED from the
   shared course layer; only the presentation differs.
   ============================================================ */

const nodeTypeLabel: Record<string, string> = {
  drug: "Medication",
  class: "Class",
  neurotransmitter: "Neurotransmitter",
  "brain-region": "Brain Region",
  pathway: "Pathway",
  condition: "Condition",
  "side-effect": "Side Effect",
  "clinical-case": "Case",
  "patient-guide": "Guide",
};

const nodeTypeDot: Record<string, string> = {
  drug: "bg-brand",
  class: "bg-brand",
  neurotransmitter: "bg-neural",
  "brain-region": "bg-neural",
  pathway: "bg-brand",
  condition: "bg-success",
  "side-effect": "bg-warning",
  "clinical-case": "bg-muted-foreground/60",
  "patient-guide": "bg-muted-foreground/60",
};

/** Lesson 1 — Quick Facts, capped at five cards by priority (redesign D). */
export function ConceptQuickFacts({ course }: { course: PsychiatryCourse }) {
  const { visible, rest } = capQuickFacts(course.quickFacts);
  const [showAll, setShowAll] = React.useState(false);
  const shown = showAll ? course.quickFacts : visible;
  return (
    <Section id="quick-facts" spacing="tight">
      <Container>
        <ConceptSectionHeader title="Quick Facts" lede="The five facts that carry the most weight." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((fact, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-muted-foreground">{fact.label}</p>
                <p className="mt-1.5 font-serif text-lg font-semibold leading-tight text-foreground">
                  {fact.value}
                </p>
                {fact.detail && (
                  <p className="mt-2 text-caption leading-relaxed text-muted-foreground">
                    <InlineExpander
                      short=""
                      rest={fact.detail}
                      label="More"
                    />
                  </p>
                )}
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
        {!showAll && rest.length > 0 && (
          <details className="group mt-4 text-center">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-2 text-caption font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
              All key facts ({course.quickFacts.length})
            </summary>
            <div className="mt-4 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((fact, i) => (
                <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-4">
                    <p className="text-overline text-muted-foreground">{fact.label}</p>
                    <p className="mt-1.5 font-serif text-lg font-semibold leading-tight text-foreground">
                      {fact.value}
                    </p>
                    {fact.detail && (
                      <p className="mt-2 text-caption leading-relaxed text-muted-foreground">
                        {fact.detail}
                      </p>
                    )}
                  </CardBody>
                </CardPrimitive>
              ))}
            </div>
          </details>
        )}
      </Container>
    </Section>
  );
}

/** Lesson 1 — Knowledge Graph, lazily loaded with a fixed
 *  aspect-ratio box; a grouped topic list replaces the grid on
 *  narrow screens (redesign G). */
export function ConceptKnowledgeGraph({ course }: { course: PsychiatryCourse }) {
  const nodes = course.knowledgeGraph;
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const grouped = React.useMemo(() => {
    const map = new Map<string, typeof nodes>();
    for (const node of nodes) {
      const key = nodeTypeLabel[node.type] ?? "Topic";
      if (!map.has(key)) map.set(key, [] as typeof nodes);
      map.get(key)!.push(node);
    }
    return Array.from(map.entries());
  }, [nodes]);

  return (
    <Section spacing="tight" id="knowledge-graph" className="bg-muted/20">
      <Container>
        <div ref={wrapperRef}>
        <ConceptSectionHeader
          title="Knowledge Graph"
          lede="Everything this topic touches — every link is a real KYP route."
        />
        {/* Fixed aspect-ratio box prevents layout shift when the graph
            lazily activates (redesign G). */}
        <div className="relative min-h-[220px]">
          {!active && (
            <div
              aria-hidden
              className="min-h-[220px] w-full rounded-xl border border-dashed border-border/60"
            />
          )}
          {active && (
            <>
              {/* Wide screens: the topic grid */}
              <div className="hidden min-[640px]:block">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                  {nodes.map((node, i) => (
                    <motion.a
                      key={`${node.type}-${node.label}`}
                      href={linkPath(node.href)}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.25) }}
                      className="group flex min-w-0 flex-col items-start gap-1.5 rounded-lg border border-border/60 bg-card p-3 transition-colors hover:border-brand/30"
                      title={node.note ?? undefined}
                    >
                      <span className="flex w-full items-center justify-between gap-2">
                        <span
                          aria-hidden
                          className={cn("h-2 w-2 shrink-0 rounded-full", nodeTypeDot[node.type] ?? "bg-brand")}
                        />
                        <span className="text-[0.55rem] font-semibold uppercase tracking-wide text-muted-foreground/60">
                          {nodeTypeLabel[node.type] ?? "Topic"}
                        </span>
                      </span>
                      <p className="min-w-0 w-full break-words text-xs font-medium leading-tight text-foreground/85">
                        {node.label}
                      </p>
                      {node.note && (
                        <p className="hidden text-[0.65rem] leading-snug text-muted-foreground group-hover:block">
                          {node.note}
                        </p>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
              {/* Narrow screens: a simple grouped list (redesign G) */}
              <div className="min-[640px]:hidden">
                {grouped.map(([type, groupNodes]) => (
                  <div key={type} className="mb-4 last:mb-0">
                    <p className="mb-2 text-overline text-muted-foreground">{type}</p>
                    <ul className="space-y-1.5">
                      {groupNodes.map((node) => (
                        <li key={`${node.type}-${node.label}`}>
                          <a
                            href={linkPath(node.href)}
                            className="flex min-w-0 items-start gap-2 rounded-lg border border-border/50 bg-card px-3 py-2 text-sm leading-snug text-foreground/85 transition-colors hover:border-brand/40 hover:text-brand"
                          >
                            <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                            <span className="min-w-0 break-words">{node.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 2 — Mechanism: numbered steps by default, the narrative
 *  behind an expander, the grade once beside the title (redesign D/F). */
export function ConceptMechanism({ course }: { course: PsychiatryCourse }) {
  return (
    <Section spacing="tight" id="mechanism">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Mechanism"
          lede="What actually happens — graded honestly."
          grade={course.mechanism.grade}
        />
        <div className="mt-2">
          <StepChain steps={course.mechanism.steps.map((s) => ({ label: s, detail: undefined }))} />
        </div>
        <details className="group mt-6">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-2 text-caption font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            Read the full narrative
          </summary>
          <p className="mt-4 max-w-[68ch] text-body-sm leading-[1.65] text-foreground/85">
            {course.mechanism.summary}
          </p>
        </details>
      </Container>
    </Section>
  );
}

/** Lesson 2 — the merged Explanatory layer: brain regions +
 *  neurotransmitters in ONE collapsible block placed after the
 *  description (redesign B). The section ids, mode gating and
 *  completion anchors are exactly the shared layer's — the merge
 *  is presentational only. */
export function ConceptExplanatoryLayer({ course }: { course: PsychiatryCourse }) {
  const detailsRef = React.useRef<HTMLDetailsElement | null>(null);

  // #brain / #neurotransmitters links (e.g. from the knowledge
  // graph) open the layer before the browser scrolls to the anchor.
  React.useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash;
      if (h === "#brain" || h === "#neurotransmitters") {
        if (detailsRef.current) detailsRef.current.open = true;
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <Section spacing="tight">
      <Container width="narrow">
        <details ref={detailsRef} className="group">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 rounded-xl border border-border/70 bg-muted/30 px-4 py-3 text-left transition-colors hover:border-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            <span className="min-w-0">
              <span className="block text-body-sm font-semibold text-foreground">
                Explanatory layer (after the description)
              </span>
              <span className="mt-0.5 block text-caption leading-relaxed text-muted-foreground">
                The brain structures and chemical systems beneath the method — open when you are ready
                for the neuroscience.
              </span>
            </span>
            <span
              aria-hidden
              className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            >
              ▾
            </span>
          </summary>
          <div className="mt-6 space-y-10">
            {course.brainRegions.length > 0 && (
              <div id="brain" className="scroll-mt-32">
                <p className="mb-3 text-overline text-neural">Brain structures</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {course.brainRegions.map((region, i) => (
                    <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="h-full">
                      <CardBody className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-body-sm font-semibold leading-snug text-foreground">{region.name}</p>
                          <EvidenceGradeDot grade={region.grade} />
                        </div>
                        <p className="mt-2 text-caption leading-relaxed text-muted-foreground">{region.role}</p>
                      </CardBody>
                    </CardPrimitive>
                  ))}
                </div>
              </div>
            )}
            {course.neurotransmitters.length > 0 && (
              <div id="neurotransmitters" className="scroll-mt-32">
                <p className="mb-3 text-overline text-neural">Chemical systems</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {course.neurotransmitters.map((nt, i) => (
                    <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="h-full">
                      <CardBody className="p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-neural-soft/70 px-2 py-0.5 font-mono text-xs font-semibold text-neural">
                            {nt.symbol}
                          </span>
                          <p className="text-body-sm font-semibold text-foreground">{nt.name}</p>
                          <EvidenceGradeDot grade={nt.grade} className="ml-auto" />
                        </div>
                        <p className="mt-2 text-caption leading-relaxed text-muted-foreground">{nt.role}</p>
                      </CardBody>
                    </CardPrimitive>
                  ))}
                </div>
              </div>
            )}
          </div>
        </details>
      </Container>
    </Section>
  );
}

/** Lesson 2 — Pathways as accessible accordions (redesign C). */
export function ConceptPathways({ course }: { course: PsychiatryCourse }) {
  return (
    <Section spacing="tight" id="pathways" className="bg-muted/20">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Pathways"
          lede="Follow the chain from molecule to symptom — structured pathway data, rendered."
        />
        <ConceptAccordion
          label={`${course.title} pathways`}
          entries={course.pathways.map((pathway) => ({
            id: pathway.id,
            title: pathway.name,
            meta: <EvidenceGradeDot grade={pathway.grade} />,
            content: (
              <div>
                <ol className="space-y-2">
                  {pathway.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-[0.6rem] font-semibold text-muted-foreground">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug text-foreground">{step.label}</p>
                        {step.detail && (
                          <p className="mt-0.5 text-caption leading-relaxed text-muted-foreground">{step.detail}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 rounded-lg border border-brand/20 bg-brand-soft/30 px-3 py-2 text-caption leading-relaxed text-foreground/80">
                  <span className="font-semibold text-brand-ink">Clinical meaning: </span>
                  {pathway.clinicalManifestation}
                </p>
              </div>
            ),
          }))}
        />
      </Container>
    </Section>
  );
}

/** Lesson 2 — Timeline (reuses the shared Timeline component). */
export function ConceptTimeline({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="timeline" spacing="tight">
      <Container width="narrow">
        <ConceptSectionHeader title="Timeline" lede="How the story unfolds over time." />
        <Timeline events={course.timeline} />
      </Container>
    </Section>
  );
}

/** Lesson 3 — epidemiology / underlying factors, rendered only
 *  when the course carries real (non-placeholder) data for the
 *  family (redesign B). The concept branch uses real topic
 *  names instead of the disease-shaped headers. */
export function ConceptClinicalContext({ course }: { course: PsychiatryCourse }) {
  const visibility = getConceptSectionVisibility(course);
  if (!visibility.epidemiology && !visibility.etiology) return null;
  return (
    <Section className="bg-muted/20" spacing="tight">
      <Container width="narrow">
        {visibility.epidemiology && course.epidemiology && (
          <div id="epidemiology" className="scroll-mt-32">
            <ConceptSectionHeader
              title="Epidemiology"
              lede="Who this affects — global and Indian numbers."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                <CardBody className="p-4">
                  <p className="text-overline text-brand-ink">Global</p>
                  <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">
                    {course.epidemiology.globalPrevalence}
                  </p>
                </CardBody>
              </CardPrimitive>
              <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                <CardBody className="p-4">
                  <p className="text-overline text-brand-ink">India</p>
                  <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">
                    {course.epidemiology.indianPrevalence}
                  </p>
                </CardBody>
              </CardPrimitive>
              {course.epidemiology.genderRatio && (
                <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-4">
                    <p className="text-overline text-muted-foreground">Sex ratio</p>
                    <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">
                      {course.epidemiology.genderRatio}
                    </p>
                  </CardBody>
                </CardPrimitive>
              )}
              {course.epidemiology.ageOfOnset && (
                <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-4">
                    <p className="text-overline text-muted-foreground">Age of onset</p>
                    <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">
                      {course.epidemiology.ageOfOnset}
                    </p>
                  </CardBody>
                </CardPrimitive>
              )}
            </div>
          </div>
        )}
        {visibility.etiology && course.etiology && course.etiology.length > 0 && (
          <div id="etiology" className={cn("scroll-mt-32", visibility.epidemiology && "mt-10")}>
            <ConceptSectionHeader
              title="Underlying factors"
              lede="What this topic is built on."
            />
            <div className="space-y-2">
              {course.etiology.map((factor, i) => (
                <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="flex gap-3 p-4">
                    <span className="mt-0.5 shrink-0 rounded-md bg-muted px-2 py-0.5 text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                      {factor.category}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-body-sm font-medium text-foreground">{factor.factor}</p>
                      <p className="mt-1 text-caption leading-relaxed text-muted-foreground">{factor.details}</p>
                    </div>
                  </CardBody>
                </CardPrimitive>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

/** Lesson 3 — symptom clusters. */
export function ConceptSymptoms({ course }: { course: PsychiatryCourse }) {
  if (!course.symptomClusters || course.symptomClusters.length === 0) return null;
  return (
    <Section spacing="tight" id="symptoms">
      <Container width="narrow">
        <ConceptSectionHeader title="The Signals" lede="What it looks like — by cluster." />
        <div className="grid gap-3 sm:grid-cols-3">
          {course.symptomClusters.map((cluster, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="h-full">
              <CardBody className="p-4">
                <p className="text-overline text-brand-ink">{cluster.category}</p>
                <ul className="mt-3 space-y-1.5">
                  {cluster.symptoms.map((symptom, j) => (
                    <li key={j} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/50" aria-hidden />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 3 — diagnostic criteria + severity scales. */
export function ConceptDiagnosis({ course }: { course: PsychiatryCourse }) {
  if (!course.diagnosticCriteria || course.diagnosticCriteria.length === 0) return null;
  return (
    <Section spacing="tight" id="diagnosis" className="bg-muted/20">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Working Criteria"
          lede="The criteria, the scales, and how to apply them."
        />
        <div className="space-y-4">
          {course.diagnosticCriteria.map((criteria, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-h4 text-foreground">{criteria.system}</p>
                  {criteria.code && (
                    <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-caption text-muted-foreground">
                      {criteria.code}
                    </span>
                  )}
                  {criteria.duration && <Badge variant="outline" size="sm">{criteria.duration}</Badge>}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {criteria.criteria.map((criterion, j) => (
                    <li key={j} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/70" aria-hidden />
                      {criterion}
                    </li>
                  ))}
                </ul>
                {criteria.indianNote && (
                  <p className="mt-3 rounded-lg border border-brand/20 bg-brand-soft/30 px-3 py-2 text-caption leading-relaxed text-foreground/80">
                    <span className="font-semibold text-brand-ink">Indian practice: </span>
                    {criteria.indianNote}
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

/** Lesson 3 — differential: table on wide screens with a sticky
 *  first column and clamped cells; stacked cards below 900px
 *  with the distinguishing-features block collapsed by default
 *  (redesign C). */
export function ConceptDifferential({ course }: { course: PsychiatryCourse }) {
  if (!course.differentialDiagnosis || course.differentialDiagnosis.length === 0) return null;
  return (
    <Section spacing="tight" id="differential">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Differential Diagnosis"
          lede="What else it could be — and the feature that decides."
        />
        {/* ≥900px: the comparison table */}
        <div className="hidden min-[900px]:block">
          <div className="overflow-x-auto rounded-xl border border-border/60">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-border/70 bg-muted/30 text-muted-foreground">
                  <th className="sticky left-0 z-10 bg-muted/30 px-4 py-2.5 font-semibold">Condition</th>
                  <th className="px-4 py-2.5 font-semibold">Distinguishing features</th>
                  <th className="px-4 py-2.5 font-semibold">Key assessment point</th>
                </tr>
              </thead>
              <tbody>
                {course.differentialDiagnosis.map((differential, i) => (
                  <tr key={i} className="border-b border-border/40 align-top last:border-0">
                    <td className="sticky left-0 z-10 max-w-[180px] bg-card px-4 py-3 font-medium text-foreground">
                      {differential.condition}
                    </td>
                    <td className="px-4 py-3 leading-relaxed text-muted-foreground">
                      <InlineExpander
                        short={<span className="line-clamp-2">{differential.distinguishingFeatures}</span>}
                        rest=""
                        label="more"
                      />
                    </td>
                    <td className="px-4 py-3 leading-relaxed text-foreground/85">
                      <InlineExpander
                        short={<span className="line-clamp-2">{differential.keyDifferentiator}</span>}
                        rest=""
                        label="more"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <900px: stacked cards, features collapsed by default (redesign C) */}
        <div className="min-[900px]:hidden">
          {course.differentialDiagnosis.map((differential, i) => (
            <div key={i} className="mb-3 rounded-xl border border-border/70 bg-card p-4 last:mb-0">
              <p className="text-body-sm font-semibold text-foreground">{differential.condition}</p>
              <p className="mt-2 text-caption leading-relaxed text-foreground/85">
                <span className="font-semibold text-brand-ink">Key assessment: </span>
                {differential.keyDifferentiator}
              </p>
              <details className="group mt-2">
                <summary className="cursor-pointer list-none text-caption font-medium text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  Distinguishing features
                </summary>
                <p className="mt-1.5 text-caption leading-relaxed text-muted-foreground">
                  {differential.distinguishingFeatures}
                </p>
              </details>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 3 — applying the science: the concept-course branch of
 *  the management section. The "psychotherapy" category label is
 *  replaced by the neutral "Skill" (redesign B). */
export function ConceptManagement({ course }: { course: PsychiatryCourse }) {
  if (!course.management || course.management.length === 0) return null;
  const neutralCategory = (category: string) => {
    if (category.toLowerCase() === "psychotherapy") return "Skill";
    return category;
  };
  return (
    <Section spacing="tight" id="management" className="bg-muted/20">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Applying the Science"
          lede="How the science is used at the bedside — educational, not a treatment algorithm."
        />
        <div className="space-y-3">
          {course.management.map((option, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-success-soft/50 px-2 py-0.5 text-caption font-semibold uppercase tracking-wide text-success">
                    {neutralCategory(option.category)}
                  </span>
                  <p className="text-body-sm font-semibold text-foreground">{option.name}</p>
                </div>
                <p className="mt-2 text-caption leading-relaxed text-foreground/80">{option.description}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <p className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-caption leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground/70">When to use: </span>
                    {option.whenToUse}
                  </p>
                  {option.indianContext && (
                    <p className="rounded-lg border border-brand/20 bg-brand-soft/25 px-3 py-2 text-caption leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-brand-ink">India: </span>
                      {option.indianContext}
                    </p>
                  )}
                </div>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 3 — patient guide (renders when the guide carries real
 *  plain-language content — true for all 35 concept courses). */
export function ConceptPatientGuide({ course }: { course: PsychiatryCourse }) {
  const guide = course.patientGuide;
  return (
    <Section spacing="tight" id="patient-guide">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Patient Guide"
          lede="In plain language — for patients and families."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">What it is</p>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.whatIsIt}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">What causes it</p>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.whatCausesIt}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">What you may experience</p>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.symptoms}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">What treatment involves</p>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.treatment}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="sm:col-span-2">
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">What you can do</p>
              <ul className="mt-2 space-y-1.5">
                {guide.selfHelp.map((item, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-emergency/30 sm:col-span-2">
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">When to seek help</p>
              <ul className="mt-2 space-y-1.5">
                {guide.whenToSeekHelp.map((item, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emergency/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              {guide.indianResources && guide.indianResources.length > 0 && (
                <div className="mt-3 border-t border-border/50 pt-3">
                  <p className="text-overline text-brand-ink">Indian resources</p>
                  <ul className="mt-1.5 space-y-1">
                    {guide.indianResources.map((resource, i) => (
                      <li key={i} className="text-caption leading-relaxed text-muted-foreground">{resource}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardBody>
          </CardPrimitive>
        </div>
      </Container>
    </Section>
  );
}
