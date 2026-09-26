"use client";

import * as React from "react";
import {
  AlertCircle,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  GraduationCap,
  Lightbulb,
  MapPin,
  MessageSquare,
  Stethoscope,
  X,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { PsychiatryCourse } from "./course-types";
import { cn } from "@/lib/utils";

/* ============================================================
   Lesson 4 (Indian Context + decision path + mistakes) and
   Lesson 5 (Exam Revision) components.
   Wide drug-oracle rhythm with CardPrimitive chassis; mistakes
   use the drug inline-row treatment (typography, no cards).
   ============================================================ */

/** Lesson 4 — Indian practice (wide banded). */
export function CourseIndianPractice({ course }: { course: PsychiatryCourse }) {
  const ip = course.indianPractice;
  return (
    <Section id="indian-practice" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Indian Practice"
          title="How this plays out in Indian healthcare."
          description="Guidelines, the system, the programmes, the costs and the culture."
          tone="brand"
          align="start"
        />
        <div className="mt-10 space-y-4">
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/30">
            <CardBody className="p-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" aria-hidden />
                <p className="text-h4 text-foreground">Where the patient meets the system</p>
              </div>
              <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">{ip.systemContext}</p>
            </CardBody>
          </CardPrimitive>
          <div className="grid gap-4 sm:grid-cols-2">
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand">Indian guidelines</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">{ip.indianGuidelines}</p>
              </CardBody>
            </CardPrimitive>
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand">Programmes & law</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">{ip.programmeContext}</p>
              </CardBody>
            </CardPrimitive>
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand">Cost & access</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">{ip.costConsiderations}</p>
              </CardBody>
            </CardPrimitive>
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand">Culture & family</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">{ip.culturalConsiderations}</p>
              </CardBody>
            </CardPrimitive>
          </div>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-brand" aria-hidden />
                <p className="text-h4 text-foreground">Counselling points for Indian practice</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {ip.patientCounselling.map((point, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/70" strokeWidth={2.5} aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 4 — clinical decision path (ported from the drug oracle; wide,
 *  CardPrimitive nodes; anchors, branches and evidence preserved). */
export function CourseDecisionPath({ course }: { course: PsychiatryCourse }) {
  const path = course.decisionPath;
  if (!path) return null;

  const nodeById = new Map(path.nodes.map((n) => [n.id, n]));

  /** Recursively render a decision node as nested cards. */
  const renderNode = (nodeId: string, depth: number): React.ReactNode => {
    const node = nodeById.get(nodeId);
    if (!node) return null;
    const isTerminal = !node.branches || node.branches.length === 0;
    return (
      <div
        key={nodeId}
        style={{ marginLeft: depth > 0 ? Math.min(depth * 12, 36) : 0 }}
      >
        <CardPrimitive
          variant="flat"
          interactive={false}
          showArrow={false}
          className={
            isTerminal
              ? node.recommendation && nodeId.includes("3")
                ? "border-emergency/40"
                : "border-brand/30"
              : undefined
          }
        >
          <CardBody className="p-4">
            <p className={cn("text-sm leading-snug", isTerminal ? "font-medium text-foreground" : "font-semibold text-foreground")}>
              {node.question}
            </p>
            {node.branches && node.branches.length > 0 ? (
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {node.branches.map((branch, i) => {
                  const next = nodeById.get(branch.next);
                  const terminal = next && (!next.branches || next.branches.length === 0);
                  return (
                    <a
                      key={i}
                      href={`#dp-${branch.next}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                        terminal
                          ? "border-success/40 bg-success-soft/40 text-foreground hover:border-success/60"
                          : "border-brand/30 bg-brand-soft/40 text-foreground hover:border-brand/50"
                      )}
                    >
                      {branch.label}
                      <ArrowRight className="h-3 w-3" aria-hidden />
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="mt-3 space-y-2">
                {node.recommendation && (
                  <p className="rounded-lg border border-success/25 bg-success-soft/25 px-3 py-2 text-caption leading-relaxed text-foreground/85">
                    <span className="font-semibold text-success">Recommendation: </span>
                    {node.recommendation}
                  </p>
                )}
                {node.reasoning && (
                  <p className="text-caption leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground/60">Why: </span>{node.reasoning}
                  </p>
                )}
              </div>
            )}
          </CardBody>
        </CardPrimitive>
      </div>
    );
  };

  return (
    <Section id="decision-path" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Decision Path"
          title={path.title}
          description="An educational decision tree — never a substitute for professional judgment."
          tone="brand"
          align="start"
        />
        <div className="mt-10 space-y-3">
          {/* Start node rendered prominently, then all nodes as an indexed map
              (the tree contains loops back to shared children, so each node is
              rendered once with anchor links for navigation). */}
          {path.nodes.map((node) => (
            <div key={node.id} id={`dp-${node.id}`} className="scroll-mt-32">
              {renderNode(node.id, node.branches ? 0 : 0)}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 4 — common mistakes (drug inline-row treatment: typography, no cards). */
export function CourseCommonMistakes({ course }: { course: PsychiatryCourse }) {
  if (!course.commonMistakes || course.commonMistakes.length === 0) return null;
  return (
    <Section id="common-mistakes">
      <Container>
        <SectionHeader
          eyebrow="Common Mistakes"
          title="What goes wrong — and the correction."
          tone="emergency"
          align="start"
        />
        <div className="mt-8 space-y-3">
          {course.commonMistakes.map((mistake, i) => (
            <div key={i} className="grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-3">
              {/* Mistake number + text */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emergency/10 text-emergency">
                  <X className="h-3 w-3" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium text-foreground">{mistake.mistake}</p>
              </div>

              {/* Why + correction — inline, no card */}
              <div className="sm:pl-7">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <AlertCircle className="inline h-3 w-3 -mt-0.5 mr-1 text-warning" />
                  {mistake.why}
                </p>
                <p className="mt-0.5 text-xs text-foreground/90 leading-relaxed">
                  <Check className="inline h-3 w-3 -mt-0.5 mr-1 text-success" />
                  {mistake.correction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 5 — exam lens (MBBS / NEET-PG / INICET / FMGE / Residency). */
export function CourseExamLens({ course }: { course: PsychiatryCourse }) {
  const lens = course.examLens;
  if (!lens) return null;

  const blocks = [
    {
      icon: GraduationCap,
      title: "MBBS",
      tone: "text-brand",
      groups: [
        { label: "Viva", items: lens.mbbs.viva },
        { label: "Practical", items: lens.mbbs.practical },
        { label: "Long answer", items: lens.mbbs.longAnswer },
      ],
    },
    {
      icon: Award,
      title: "NEET PG",
      tone: "text-neural",
      groups: [
        { label: "High-yield", items: lens.neetPg.highYield },
        { label: "PYQ concepts", items: lens.neetPg.pyqConcepts },
      ],
    },
    {
      icon: Stethoscope,
      title: "INICET",
      tone: "text-success",
      groups: [{ label: "Clinical reasoning", items: lens.inicet.clinicalReasoning }],
    },
    {
      icon: BookOpen,
      title: "FMGE",
      tone: "text-warning",
      groups: [{ label: "Frequently tested", items: lens.fmge.frequentlyTested }],
    },
    {
      icon: Lightbulb,
      title: "Residency",
      tone: "text-emergency",
      groups: [{ label: "Advanced pearls", items: lens.psychiatryResidency.advancedPearls }],
    },
  ];

  return (
    <Section id="exam-lens" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Exam Content"
          title="The exam lens — by examination."
          description="KYP Practice Questions unless a verified previous-year concept is named."
          tone="brand"
          align="start"
        />
        <div className="mt-10 space-y-4">
          {blocks.map((block) => (
            <CardPrimitive key={block.title} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <block.icon className={cn("h-4 w-4", block.tone)} aria-hidden />
                  <p className="text-h4 text-foreground">{block.title}</p>
                </div>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.groups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-overline text-muted-foreground">{group.label}</p>
                      <ul className="space-y-1.5">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/50" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 5 — clinical cases (wide, elevated cards). */
export function CourseClinicalCases({ course }: { course: PsychiatryCourse }) {
  if (!course.clinicalCases || course.clinicalCases.length === 0) return null;
  const fields = [
    { key: "presentation", label: "Presentation" },
    { key: "history", label: "History" },
    { key: "examination", label: "Examination" },
    { key: "diagnosis", label: "Diagnosis" },
    { key: "management", label: "Management" },
    { key: "outcome", label: "Outcome" },
  ] as const;
  return (
    <Section id="clinical-case">
      <Container>
        <SectionHeader
          eyebrow="Clinical Case"
          title="Learn it the way wards teach it."
          tone="neural"
          align="start"
        />
        <div className="mt-10 space-y-4">
          {course.clinicalCases.map((clinicalCase, i) => (
            <CardPrimitive key={i} variant="elevated" interactive={false} showArrow={false}>
              <CardBody className="p-5 sm:p-6">
                <p className="font-serif text-lg font-semibold text-foreground">{clinicalCase.title}</p>
                <p className="mt-1 text-caption italic leading-relaxed text-muted-foreground">{clinicalCase.presentation}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.key} className="rounded-xl border border-border/70 bg-muted/30 p-4">
                      <p className="text-overline text-muted-foreground">{field.label}</p>
                      <p className="mt-1.5 text-body-sm leading-relaxed text-foreground/85">
                        {clinicalCase[field.key]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-neural/25 bg-neural-soft/20 p-4">
                  <p className="text-overline text-neural">Teaching points</p>
                  <ul className="mt-2 space-y-1.5">
                    {clinicalCase.teachingPoints.map((point, j) => (
                      <li key={j} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neural/70" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 5 — clinical pearls + high-yield summary (narrow revision sheets). */
export function CourseHighYield({ course }: { course: PsychiatryCourse }) {
  return (
    <Section id="high-yield" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="High-Yield"
          title="If you remember nothing else."
          tone="emergency"
          align="start"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <CardPrimitive variant="elevated" interactive={false} showArrow={false} className="border-warning/30">
            <CardBody className="p-5">
              <p className="text-overline text-warning">One-page revision</p>
              <ol className="mt-3 space-y-2">
                {course.highYieldSummary.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-muted/30 p-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning-soft/60 font-mono text-xs font-semibold text-warning">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-body-sm leading-relaxed text-foreground/90">{item}</p>
                  </li>
                ))}
              </ol>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="elevated" interactive={false} showArrow={false} className="border-neural/25">
            <CardBody className="p-5">
              <p className="text-overline text-neural">Clinical pearls</p>
              <ul className="mt-3 space-y-2">
                {course.clinicalPearls.map((pearl, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/85">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neural/70" aria-hidden />
                    {pearl}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
        </div>
      </Container>
    </Section>
  );
}
