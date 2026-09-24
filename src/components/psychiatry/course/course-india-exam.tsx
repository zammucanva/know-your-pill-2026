"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  MapPin,
  MessageSquare,
  Route,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import type { PsychiatryCourse } from "./course-types";
import { cn } from "@/lib/utils";

/* ============================================================
   Lesson 4 (Indian Context + decision path + mistakes) and
   Lesson 5 (Exam Revision) components.
   ============================================================ */

/** Lesson 4 — Indian practice. */
export function CourseIndianPractice({ course }: { course: PsychiatryCourse }) {
  const ip = course.indianPractice;
  return (
    <Section id="indian-practice">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Indian Practice"
          title="How this plays out in Indian healthcare."
          description="Guidelines, the system, the programmes, the costs and the culture."
          tone="brand"
          align="start"
        />
        <div className="mt-8 space-y-3">
          <div className="rounded-xl border border-brand/30 bg-card p-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden />
              <p className="text-sm font-semibold text-foreground">Where the patient meets the system</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">{ip.systemContext}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Indian guidelines</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{ip.indianGuidelines}</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Programmes & law</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{ip.programmeContext}</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Cost & access</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{ip.costConsiderations}</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Culture & family</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{ip.culturalConsiderations}</p>
            </div>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-brand" aria-hidden />
              <p className="text-sm font-semibold text-foreground">Counselling points for Indian practice</p>
            </div>
            <ul className="mt-2 space-y-1.5">
              {ip.patientCounselling.map((point, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/70" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 4 — clinical decision path (ported from the drug oracle). */
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
        className={cn(
          "rounded-xl border p-4",
          isTerminal
            ? node.recommendation && nodeId.includes("3")
              ? "border-emergency/40 bg-card"
              : "border-brand/30 bg-card"
            : "border-border/70 bg-card"
        )}
        style={{ marginLeft: depth > 0 ? Math.min(depth * 12, 36) : 0 }}
      >
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
              <p className="rounded-lg border border-success/25 bg-success-soft/25 px-3 py-2 text-xs leading-relaxed text-foreground/85">
                <span className="font-semibold text-success">Recommendation: </span>
                {node.recommendation}
              </p>
            )}
            {node.reasoning && (
              <p className="text-[0.7rem] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground/60">Why: </span>{node.reasoning}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Section id="decision-path" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Decision Path"
          title={path.title}
          description="An educational decision tree — never a substitute for professional judgment."
          tone="brand"
          align="start"
        />
        <div className="mt-8 space-y-3">
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

/** Lesson 4 — common mistakes. */
export function CourseCommonMistakes({ course }: { course: PsychiatryCourse }) {
  if (!course.commonMistakes || course.commonMistakes.length === 0) return null;
  return (
    <Section id="common-mistakes">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Common Mistakes"
          title="What goes wrong — and the correction."
          tone="emergency"
          align="start"
        />
        <div className="mt-8 space-y-3">
          {course.commonMistakes.map((mistake, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-warning/30 bg-card p-4"
            >
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
                <p className="text-sm font-medium text-foreground">{mistake.mistake}</p>
              </div>
              <p className="mt-2 pl-6 text-xs leading-relaxed text-muted-foreground">{mistake.why}</p>
              <p className="mt-2 pl-6 rounded-lg border border-success/25 bg-success-soft/25 px-3 py-2 text-xs leading-relaxed text-foreground/85">
                <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 -mt-0.5 text-success/80" aria-hidden />
                <span className="font-semibold text-success">Do this instead: </span>{mistake.correction}
              </p>
            </motion.div>
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
      <Container width="narrow">
        <SectionHeader
          eyebrow="Exam Content"
          title="The exam lens — by examination."
          description="KYP Practice Questions unless a verified previous-year concept is named."
          tone="brand"
          align="start"
        />
        <div className="mt-8 space-y-4">
          {blocks.map((block) => (
            <div key={block.title} className="rounded-xl border border-border/70 bg-card p-4">
              <div className="flex items-center gap-2">
                <block.icon className={cn("h-4 w-4", block.tone)} aria-hidden />
                <p className="text-sm font-semibold text-foreground">{block.title}</p>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {block.groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                      {group.label}
                    </p>
                    <ul className="mt-1.5 space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/50" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 5 — clinical cases. */
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
      <Container width="narrow">
        <SectionHeader
          eyebrow="Clinical Case"
          title="Learn it the way wards teach it."
          tone="neural"
          align="start"
        />
        <div className="mt-8 space-y-4">
          {course.clinicalCases.map((clinicalCase, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-card p-5">
              <p className="font-serif text-lg font-medium text-foreground">{clinicalCase.title}</p>
              <p className="mt-1 text-xs italic leading-relaxed text-muted-foreground">{clinicalCase.presentation}</p>
              <div className="mt-4 space-y-2">
                {fields.map((field) => (
                  <div key={field.key} className="rounded-lg border border-border/50 bg-muted/20 px-3 py-2">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                      {field.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/85">
                      {clinicalCase[field.key]}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-neural/25 bg-neural-soft/20 px-3 py-2.5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-neural">Teaching points</p>
                <ul className="mt-1.5 space-y-1">
                  {clinicalCase.teachingPoints.map((point, j) => (
                    <li key={j} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                      <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neural/70" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 5 — clinical pearls + high-yield summary. */
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
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-warning/30 bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-warning">One-page revision</p>
            <ul className="mt-3 space-y-2">
              {course.highYieldSummary.map((item, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/85">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-warning/15 text-[0.6rem] font-semibold text-warning">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-neural/25 bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-neural">Clinical pearls</p>
            <ul className="mt-3 space-y-2">
              {course.clinicalPearls.map((pearl, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/85">
                  <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neural/70" aria-hidden />
                  {pearl}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
