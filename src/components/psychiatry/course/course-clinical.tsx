"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  GitBranch,
  HeartPulse,
  Stethoscope,
  HelpCircle,
  AlertOctagon,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { PsychiatryCourse } from "./course-types";
import { linkPath } from "@/lib/kyp/image-path";

/* ============================================================
   Lesson 3 (Clinical Practice), Lesson 4 (Indian Context),
   Lesson 5 (Exam Revision) and Lesson 6 (recall-facing)
   section components for the Psychiatry course layer.
   Card surfaces use the shared CardPrimitive chassis and the
   named typography tokens, matching the drug lesson oracle.
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
              <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                <CardBody className="p-4">
                  <p className="text-overline text-brand">Global</p>
                  <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">{course.epidemiology.globalPrevalence}</p>
                </CardBody>
              </CardPrimitive>
              <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                <CardBody className="p-4">
                  <p className="text-overline text-brand">India</p>
                  <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">{course.epidemiology.indianPrevalence}</p>
                </CardBody>
              </CardPrimitive>
              {course.epidemiology.genderRatio && (
                <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-4">
                    <p className="text-overline text-muted-foreground">Sex ratio</p>
                    <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">{course.epidemiology.genderRatio}</p>
                  </CardBody>
                </CardPrimitive>
              )}
              {course.epidemiology.ageOfOnset && (
                <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-4">
                    <p className="text-overline text-muted-foreground">Age of onset</p>
                    <p className="mt-2 text-body-sm leading-relaxed text-foreground/85">{course.epidemiology.ageOfOnset}</p>
                  </CardBody>
                </CardPrimitive>
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
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="h-full">
              <CardBody className="p-4">
                <p className="text-overline text-brand">{cluster.category}</p>
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
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-h4 text-foreground">{criteria.system}</p>
                  {criteria.code && (
                    <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-caption text-muted-foreground">
                      {criteria.code}
                    </span>
                  )}
                  {criteria.duration && (
                    <Badge variant="outline" size="sm">{criteria.duration}</Badge>
                  )}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {criteria.criteria.map((criterion, j) => (
                    <li key={j} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/70" aria-hidden />
                      {criterion}
                    </li>
                  ))}
                </ul>
                {criteria.indianNote && (
                  <p className="mt-3 rounded-lg border border-brand/20 bg-brand-soft/30 px-3 py-2 text-caption leading-relaxed text-foreground/80">
                    <span className="font-semibold text-brand">Indian practice: </span>{criteria.indianNote}
                  </p>
                )}
              </CardBody>
            </CardPrimitive>
          ))}
        </div>

        {course.severityScales && course.severityScales.length > 0 && (
          <div className="mt-10">
            <p className="text-h4 text-foreground">Severity measurement</p>
            <div className="mt-3 space-y-4">
              {course.severityScales.map((scale, i) => (
                <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="font-mono font-semibold text-brand">{scale.name}</p>
                      <p className="text-caption text-muted-foreground">{scale.fullName}</p>
                    </div>
                    <p className="mt-2 text-caption leading-relaxed text-foreground/80">{scale.measures}</p>
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
                      <p className="mt-2 text-caption leading-relaxed text-muted-foreground">
                        <AlertTriangle className="mr-1 inline h-3 w-3 -mt-0.5 text-warning" aria-hidden />
                        {scale.indianNote}
                      </p>
                    )}
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
              <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
                <CardBody className="p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-success-soft/50 px-2 py-0.5 text-caption font-semibold uppercase tracking-wide text-success">
                      {option.category}
                    </span>
                    <p className="text-body-sm font-semibold text-foreground">{option.name}</p>
                  </div>
                  <p className="mt-2 text-caption leading-relaxed text-foreground/80">{option.description}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <p className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-caption leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground/70">When to use: </span>{option.whenToUse}
                    </p>
                    {option.indianContext && (
                      <p className="rounded-lg border border-brand/20 bg-brand-soft/25 px-3 py-2 text-caption leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-brand">India: </span>{option.indianContext}
                      </p>
                    )}
                  </div>
                </CardBody>
              </CardPrimitive>
            ))}
          </div>
        </Container>
      </Section>

      {course.safety && (
        <Section id="safety" className="bg-muted/20">
          <Container width="narrow">
            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-emergency/40">
              <CardBody className="p-5">
                <div className="flex items-center gap-2">
                  <AlertOctagon className="h-5 w-5 text-emergency" aria-hidden />
                  <p className="text-h4 text-foreground">Red flags & urgent guidance</p>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {course.safety.redFlags.map((flag, i) => (
                    <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/85">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency/80" aria-hidden />
                      {flag}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-emergency/30 bg-emergency/5 px-3 py-2 text-caption leading-relaxed text-foreground/85">
                  {course.safety.urgentGuidance}
                </p>
              </CardBody>
            </CardPrimitive>
          </Container>
        </Section>
      )}
    </>
  );
}

/** Lesson 3 — drug navigation (existing lessons + recorded content gaps).
 *  Wide unbanded band with drug family-member link cards. */
export function CourseDrugNavigation({ course }: { course: PsychiatryCourse }) {
  const hasLinks = course.drugLinks.length > 0;
  return (
    <Section id="drug-navigation">
      <Container>
        <SectionHeader
          eyebrow="Drug Navigation"
          title="From this topic to the medicines that treat it."
          description="Only real KYP drug lessons are linked. Missing lessons are recorded as content gaps — never invented."
          tone="brand"
          align="start"
        />
        {hasLinks ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.drugLinks.map((link, i) => (
              <a
                key={i}
                href={linkPath(link.slug ? `/drugs/${link.slug}/` : "#")}
                className="group rounded-lg border border-border/40 p-3 transition-colors hover:border-brand/40 hover:bg-brand-soft/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand">{link.name}</p>
                    <p className="text-xs text-muted-foreground">{link.role}</p>
                  </div>
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">{link.rationale}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border/60 bg-card/50 p-5 text-center">
            <p className="text-body-sm text-muted-foreground">
              No KYP drug lessons exist for this topic yet — see the recorded content gaps below.
            </p>
          </div>
        )}

        {course.contentGaps.length > 0 && (
          <div className="mt-6">
            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-warning/40">
              <CardBody className="p-4">
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-warning" aria-hidden />
                  <p className="text-h4 text-foreground">Recorded content gaps</p>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {course.contentGaps.map((gap, i) => (
                    <li key={i} className="flex gap-2 text-caption leading-relaxed text-muted-foreground">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-warning/70" aria-hidden />
                      {gap}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-caption text-muted-foreground/70">
                  Honest gap recording (learning-system brief §17): routes are never invented.
                </p>
              </CardBody>
            </CardPrimitive>
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
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-success" aria-hidden />
                <p className="text-h4 text-foreground">What it is</p>
              </div>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.whatIsIt}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-success" aria-hidden />
                <p className="text-h4 text-foreground">What causes it</p>
              </div>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.whatCausesIt}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-success" aria-hidden />
                <p className="text-h4 text-foreground">What you may experience</p>
              </div>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.symptoms}</p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <div className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4 text-success" aria-hidden />
                <p className="text-h4 text-foreground">What treatment involves</p>
              </div>
              <p className="mt-2 text-caption leading-relaxed text-foreground/80">{guide.treatment}</p>
            </CardBody>
          </CardPrimitive>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">What you can do</p>
              <ul className="mt-2 space-y-1.5">
                {guide.selfHelp.map((item, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-emergency/30">
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">When to seek help</p>
              <ul className="mt-2 space-y-1.5">
                {guide.whenToSeekHelp.map((item, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/85">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency/80" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              {guide.indianResources && guide.indianResources.length > 0 && (
                <div className="mt-3 border-t border-border/50 pt-3">
                  <p className="text-overline text-brand">Indian resources</p>
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
