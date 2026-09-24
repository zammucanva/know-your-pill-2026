"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  GitBranch,
  HeartPulse,
  Pill,
  Stethoscope,
  XCircle,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  BookOpen,
  AlertOctagon,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import type { PsychiatryCourse } from "./course-types";
import { cn } from "@/lib/utils";
import { linkPath } from "@/lib/kyp/image-path";

/* ============================================================
   Lesson 3 (Clinical Practice), Lesson 4 (Indian Context),
   Lesson 5 (Exam Revision) and Lesson 6 (recall-facing)
   section components for the Psychiatry course layer.
   ============================================================ */

/** Lesson 3 — epidemiology + etiology (disorder courses). Rendered
 *  as the opening band of the clinical flow; the scroll anchor for the
 *  nav is owned by CourseSymptoms below (id="symptoms"). */
export function CourseClinicalContext({ course }: { course: PsychiatryCourse }) {
  if (!course.epidemiology && !course.etiology) return null;
  return (
    <Section className="bg-muted/20">
      <Container width="narrow">
        {course.epidemiology && (
          <>
            <SectionHeader
              eyebrow="Epidemiology & Burden"
              title="Who this affects — global and Indian numbers."
              tone="brand"
              align="start"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Global</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{course.epidemiology.globalPrevalence}</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">India</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{course.epidemiology.indianPrevalence}</p>
              </div>
              {course.epidemiology.genderRatio && (
                <div className="rounded-xl border border-border/70 bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Sex ratio</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{course.epidemiology.genderRatio}</p>
                </div>
              )}
              {course.epidemiology.ageOfOnset && (
                <div className="rounded-xl border border-border/70 bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Age of onset</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{course.epidemiology.ageOfOnset}</p>
                </div>
              )}
            </div>
            {course.epidemiology.indianNotes && (
              <div className="mt-4">
                <Callout variant="info" title="The Indian reality">{course.epidemiology.indianNotes}</Callout>
              </div>
            )}
          </>
        )}

        {course.etiology && course.etiology.length > 0 && (
          <div className="mt-12">
            <SectionHeader
              eyebrow="Causes & Risk Factors"
              title="No single cause — converging pathways."
              tone="brand"
              align="start"
            />
            <div className="mt-6 space-y-2">
              {course.etiology.map((factor, i) => (
                <div key={i} className="flex gap-3 rounded-xl border border-border/70 bg-card p-4">
                  <span className="mt-0.5 rounded-md bg-muted px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    {factor.category}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{factor.factor}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{factor.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

/** Lesson 3 — symptom clusters. */
export function CourseSymptoms({ course }: { course: PsychiatryCourse }) {
  if (!course.symptomClusters || course.symptomClusters.length === 0) return null;
  return (
    <Section id="symptoms" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Symptoms"
          title="What it looks like — by cluster."
          tone="brand"
          align="start"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {course.symptomClusters.map((cluster, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">{cluster.category}</p>
              <ul className="mt-3 space-y-1.5">
                {cluster.symptoms.map((symptom, j) => (
                  <li key={j} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/50" aria-hidden />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 3 — diagnostic criteria + severity scales. */
export function CourseDiagnosis({ course }: { course: PsychiatryCourse }) {
  if (!course.diagnosticCriteria || course.diagnosticCriteria.length === 0) return null;
  return (
    <Section id="diagnosis">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Diagnosis"
          title="The criteria, the scales, and how to apply them."
          tone="brand"
          align="start"
        />
        <div className="mt-8 space-y-4">
          {course.diagnosticCriteria.map((criteria, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-card p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-medium text-foreground">{criteria.system}</p>
                {criteria.code && (
                  <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
                    {criteria.code}
                  </span>
                )}
                {criteria.duration && (
                  <Badge variant="outline" size="sm">{criteria.duration}</Badge>
                )}
              </div>
              <ul className="mt-3 space-y-1.5">
                {criteria.criteria.map((criterion, j) => (
                  <li key={j} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/70" aria-hidden />
                    {criterion}
                  </li>
                ))}
              </ul>
              {criteria.indianNote && (
                <p className="mt-3 rounded-lg border border-brand/20 bg-brand-soft/30 px-3 py-2 text-xs leading-relaxed text-foreground/80">
                  <span className="font-semibold text-brand">Indian practice: </span>{criteria.indianNote}
                </p>
              )}
            </div>
          ))}
        </div>

        {course.severityScales && course.severityScales.length > 0 && (
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground">Severity measurement</p>
            <div className="mt-3 space-y-4">
              {course.severityScales.map((scale, i) => (
                <div key={i} className="rounded-xl border border-border/70 bg-card p-5">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <p className="font-mono font-semibold text-brand">{scale.name}</p>
                    <p className="text-xs text-muted-foreground">{scale.fullName}</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">{scale.measures}</p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[480px] text-left text-xs">
                      <thead>
                        <tr className="border-b border-border/60 text-muted-foreground">
                          <th className="py-1.5 pr-2 font-medium">Score</th>
                          <th className="py-1.5 pr-2 font-medium">Severity</th>
                          <th className="py-1.5 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scale.ranges.map((range, j) => (
                          <tr key={j} className="border-b border-border/30 last:border-0">
                            <td className="py-1.5 pr-2 font-mono text-foreground/80">{range.min}–{range.max}</td>
                            <td className="py-1.5 pr-2 font-medium text-foreground">{range.severity}</td>
                            <td className="py-1.5 leading-relaxed text-muted-foreground">{range.action}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {scale.indianNote && (
                    <p className="mt-2 text-[0.7rem] leading-relaxed text-muted-foreground">
                      <AlertTriangle className="mr-1 inline h-3 w-3 -mt-0.5 text-warning" aria-hidden />
                      {scale.indianNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

/** Lesson 3 — differential diagnosis (visual comparison structure). */
export function CourseDifferential({ course }: { course: PsychiatryCourse }) {
  if (!course.differentialDiagnosis || course.differentialDiagnosis.length === 0) return null;
  return (
    <Section id="differential" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Differential Diagnosis"
          title="What else it could be — and the feature that decides."
          description="Condition · distinguishing features · the key differentiator that settles it."
          tone="brand"
          align="start"
        />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead>
              <tr className="border-b-2 border-border/70 text-muted-foreground">
                <th className="py-2 pr-3 font-semibold">Condition</th>
                <th className="py-2 pr-3 font-semibold">Distinguishing features</th>
                <th className="py-2 font-semibold">Key assessment point</th>
              </tr>
            </thead>
            <tbody>
              {course.differentialDiagnosis.map((differential, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.25 }}
                  className="border-b border-border/40 align-top last:border-0"
                >
                  <td className="py-3 pr-3 font-medium text-foreground">{differential.condition}</td>
                  <td className="py-3 pr-3 leading-relaxed text-muted-foreground">{differential.distinguishingFeatures}</td>
                  <td className="py-3 leading-relaxed text-foreground/85">{differential.keyDifferentiator}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 3 — management options + safety. */
export function CourseManagement({ course }: { course: PsychiatryCourse }) {
  if (!course.management || course.management.length === 0) return null;
  return (
    <>
      <Section id="management">
        <Container width="narrow">
          <SectionHeader
            eyebrow="Management"
            title="Evidence-based treatment principles."
            description="Educational content — not a substitute for clinical judgment."
            tone="success"
            align="start"
          />
          <div className="mt-8 space-y-3">
            {course.management.map((option, i) => (
              <div key={i} className="rounded-xl border border-border/70 bg-card p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-success-soft/50 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-success">
                    {option.category}
                  </span>
                  <p className="font-medium text-foreground">{option.name}</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{option.description}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <p className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-[0.7rem] leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground/70">When to use: </span>{option.whenToUse}
                  </p>
                  {option.indianContext && (
                    <p className="rounded-lg border border-brand/20 bg-brand-soft/25 px-3 py-2 text-[0.7rem] leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-brand">India: </span>{option.indianContext}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {course.safety && (
        <Section id="safety" className="bg-muted/20">
          <Container width="narrow">
            <div className="rounded-xl border border-emergency/40 bg-card p-5">
              <div className="flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-emergency" aria-hidden />
                <p className="font-semibold text-foreground">Red flags & urgent guidance</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {course.safety.redFlags.map((flag, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/85">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency/80" aria-hidden />
                    {flag}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg border border-emergency/30 bg-emergency/5 px-3 py-2 text-xs leading-relaxed text-foreground/85">
                {course.safety.urgentGuidance}
              </p>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

/** Lesson 3 — drug navigation (existing lessons + recorded content gaps). */
export function CourseDrugNavigation({ course }: { course: PsychiatryCourse }) {
  const hasLinks = course.drugLinks.length > 0;
  return (
    <Section id="drug-navigation" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Drug Navigation"
          title="From this topic to the medicines that treat it."
          description="Only real KYP drug lessons are linked. Missing lessons are recorded as content gaps — never invented."
          tone="brand"
          align="start"
        />
        {hasLinks ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {course.drugLinks.map((link, i) => (
              <a
                key={i}
                href={linkPath(link.slug ? `/drugs/${link.slug}/` : "#")}
                className="group rounded-xl border border-border/70 bg-card p-4 transition-colors hover:border-brand/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Pill className="h-4 w-4 text-brand" aria-hidden />
                    <p className="font-medium text-foreground group-hover:text-brand">{link.name}</p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden />
                </div>
                <Badge variant="outline" size="sm" className="mt-2">{link.role}</Badge>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{link.rationale}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-border/60 bg-card/50 p-5 text-center">
            <p className="text-sm text-muted-foreground">
              No KYP drug lessons exist for this topic yet — see the recorded content gaps below.
            </p>
          </div>
        )}

        {course.contentGaps.length > 0 && (
          <div className="mt-6 rounded-xl border border-warning/40 bg-card p-4">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-warning" aria-hidden />
              <p className="text-sm font-semibold text-foreground">Recorded content gaps</p>
            </div>
            <ul className="mt-2 space-y-1.5">
              {course.contentGaps.map((gap, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-warning/70" aria-hidden />
                  {gap}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[0.65rem] text-muted-foreground">
              Honest gap recording (learning-system brief §17): routes are never invented.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}

/** Lesson 3 — patient guide (plain language, existing KYP patient-mode pattern). */
export function CoursePatientGuide({ course }: { course: PsychiatryCourse }) {
  const guide = course.patientGuide;
  return (
    <Section id="patient-guide">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Patient Guide"
          title="In plain language — for patients and families."
          description="What it is, what to expect, and where Indian help is."
          tone="success"
          align="start"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-card p-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-success" aria-hidden />
              <p className="text-sm font-semibold text-foreground">What it is</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">{guide.whatIsIt}</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-4">
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-success" aria-hidden />
              <p className="text-sm font-semibold text-foreground">What causes it</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">{guide.whatCausesIt}</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-success" aria-hidden />
              <p className="text-sm font-semibold text-foreground">What you may experience</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">{guide.symptoms}</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-4">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-success" aria-hidden />
              <p className="text-sm font-semibold text-foreground">What treatment involves</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">{guide.treatment}</p>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-card p-4">
            <p className="text-sm font-semibold text-foreground">What you can do</p>
            <ul className="mt-2 space-y-1.5">
              {guide.selfHelp.map((item, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/70" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-emergency/30 bg-card p-4">
            <p className="text-sm font-semibold text-foreground">When to seek help</p>
            <ul className="mt-2 space-y-1.5">
              {guide.whenToSeekHelp.map((item, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/85">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency/80" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            {guide.indianResources && guide.indianResources.length > 0 && (
              <div className="mt-3 border-t border-border/50 pt-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-brand">Indian resources</p>
                <ul className="mt-1.5 space-y-1">
                  {guide.indianResources.map((resource, i) => (
                    <li key={i} className="text-[0.7rem] leading-relaxed text-muted-foreground">{resource}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
