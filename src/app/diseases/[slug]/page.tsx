import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { GuidedLearningToggle } from "@/components/kyp/ui/guided-learning-toggle";
import { GuidedLearningVisibility } from "@/components/kyp/ui/guided-learning-visibility";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import { Checkpoint } from "@/components/kyp/ui/checkpoint";
import { ActiveRecallSection } from "@/components/kyp/ui/active-recall";
import { LessonProgress } from "@/components/kyp/ui/lesson-progress";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import { Timeline } from "@/components/kyp/ui/timeline";
import { LearningPath } from "@/components/kyp/ui/learning-path";

import { getDiseaseBySlug, getAllDiseaseSlugs } from "@/lib/kyp/data/diseases";
import type { Disease } from "@/lib/kyp/data/disease-types";

import { Pill, HeartPulse, Brain, Activity, ClipboardCheck, Stethoscope, AlertTriangle, BookOpen, FileText, Globe, MapPin } from "lucide-react";

type Slug = string;

export function generateStaticParams(): { slug: Slug }[] {
  return getAllDiseaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) return { title: "Disease not found · Know Your Pill" };

  const title = `${disease.name} (${disease.shortName}) · Know Your Pill`;
  return {
    title,
    description: disease.tagline,
    keywords: [disease.name, disease.shortName, "psychiatry", "Know Your Pill"],
    authors: [{ name: "Zamaan Ali Shamji" }],
    openGraph: { title, description: disease.tagline, type: "article", siteName: "Know Your Pill" },
  };
}

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function DiseasePage({ params }: PageProps) {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) notFound();

  const lessons = disease.lessonGroups ?? [];
  const quizzes = disease.microQuizzes ?? [];
  const hasLessons = lessons.length > 0;
  const quizAfter = (sectionId: string) => quizzes.find((q) => q.afterSectionId === sectionId);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <GuidedLearningToggle />
      </div>

      <main className="flex-1 lg:pl-52 xl:pl-56">
        {/* Lesson Progress */}
        {hasLessons && (
          <div className="sticky top-16 z-20">
            <LessonProgress lessons={lessons} />
          </div>
        )}

        {/* ===== HERO ===== */}
        <section id="top" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12">
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
          <Container className="relative">
            <div className="mb-4">
              <LearningPath path={disease.learningPath} />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="brand" size="sm">{disease.category}</Badge>
              <span className="text-muted-foreground/70">{disease.shortName}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{disease.estimatedReadTime}</span>
              {disease.highYieldLevel === "extreme" && (
                <span className="text-neural font-medium">★ High Yield</span>
              )}
            </div>
            <h1 className="mt-3 text-display text-foreground leading-[1.05]">{disease.name}</h1>
            <p className="mt-4 max-w-2xl text-base text-foreground/80 leading-relaxed">{disease.tagline}</p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">{disease.summary}</p>
          </Container>
        </section>

        {/* ===== LEARNING OBJECTIVES ===== */}
        <Section id="learning-objectives" spacing="tight">
          <Container>
            <div className="rounded-xl border border-brand/20 bg-brand-soft/10 p-6">
              <p className="text-overline text-brand">Learning Objectives</p>
              <h2 className="mt-2 text-h2">After reading this page you should be able to:</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {disease.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Pill className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-foreground/90">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* ===== KNOWLEDGE GRAPH ===== */}
        <GuidedLearningVisibility drug={disease as any} sectionId="knowledge-graph">
          <Section id="knowledge-graph" className="bg-muted/20">
            <Container>
              <SectionHeader
                eyebrow="Knowledge Graph"
                title="Everything this disease touches."
                description="How does this disease connect to drugs, brain regions, neurotransmitters, and clinical concepts?"
                tone="neural"
                align="center"
              />
              <div className="mx-auto mt-8 max-w-3xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {disease.knowledgeGraph.map((node, i) => (
                    <div key={i} className="rounded-lg border border-border/60 bg-card p-3 hover:border-brand/30 transition-colors">
                      <p className="text-xs font-medium text-foreground">{node.label}</p>
                      {node.note && <p className="mt-0.5 text-[0.65rem] text-muted-foreground">{node.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        </GuidedLearningVisibility>

        {/* ===== EPIDEMIOLOGY ===== */}
        <Section id="epidemiology">
          <Container>
            <SectionHeader eyebrow="Epidemiology" title="How common is it?" tone="brand" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Globe className="h-3.5 w-3.5 text-brand" />
                  <h3 className="text-sm font-semibold text-brand">Global</h3>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">{disease.epidemiology.globalPrevalence}</p>
                {disease.epidemiology.lifetimeRisk && (
                  <p className="mt-1 text-sm text-muted-foreground">Lifetime risk: {disease.epidemiology.lifetimeRisk}</p>
                )}
                {disease.epidemiology.genderRatio && (
                  <p className="text-sm text-muted-foreground">Gender ratio: {disease.epidemiology.genderRatio}</p>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  <h3 className="text-sm font-semibold text-brand">India</h3>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">{disease.epidemiology.indianPrevalence}</p>
                {disease.epidemiology.indianNotes && (
                  <p className="mt-1 text-sm text-muted-foreground">{disease.epidemiology.indianNotes}</p>
                )}
              </div>
            </div>
            {disease.epidemiology.ageOfOnset && (
              <p className="mt-3 text-sm text-muted-foreground">Typical age of onset: {disease.epidemiology.ageOfOnset}</p>
            )}
          </Container>
        </Section>

        {/* ===== ETIOLOGY ===== */}
        <Section id="etiology" className="bg-muted/20">
          <Container>
            <SectionHeader eyebrow="Etiology & Risk Factors" title="Why does it happen?" tone="brand" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {disease.etiology.map((factor, i) => (
                <div key={i}>
                  <p className="text-overline text-muted-foreground mb-1">{factor.category}</p>
                  <p className="text-sm font-medium text-foreground">{factor.factor}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{factor.details}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ===== PATHOPHYSIOLOGY ===== */}
        <Section id="pathophysiology">
          <Container>
            <SectionHeader eyebrow="Pathophysiology" title="What's happening in the brain?" tone="neural" />
            <div className="mt-8">
              <Callout variant="info" title="Summary">{disease.pathophysiology.summary}</Callout>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">{disease.pathophysiology.details}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-overline text-muted-foreground mb-1.5">Neurotransmitters</p>
                  <div className="flex flex-wrap gap-1.5">
                    {disease.pathophysiology.neurotransmitters.map((nt) => (
                      <Badge key={nt} variant="neural" size="sm">{nt}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-overline text-muted-foreground mb-1.5">Brain Regions</p>
                  <div className="flex flex-wrap gap-1.5">
                    {disease.pathophysiology.brainRegions.map((br) => (
                      <Badge key={br} variant="brand" size="sm">{br}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-overline text-muted-foreground mb-1.5">Pathways</p>
                  <div className="flex flex-wrap gap-1.5">
                    {disease.pathophysiology.pathways.map((p) => (
                      <Badge key={p} variant="outline" size="sm">{p}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ===== SYMPTOMS ===== */}
        <Section id="symptoms" className="bg-muted/20">
          <Container>
            <SectionHeader eyebrow="Symptoms" title="What does it look like?" tone="brand" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {disease.symptomClusters.map((cluster, i) => (
                <div key={i}>
                  <p className="text-overline text-muted-foreground mb-2">{cluster.category}</p>
                  <ul className="space-y-1">
                    {cluster.symptoms.map((symptom, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ===== DIAGNOSIS ===== */}
        <Section id="diagnosis">
          <Container>
            <SectionHeader eyebrow="Diagnosis" title="How is it diagnosed?" tone="brand" />

            {/* Diagnostic criteria */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {disease.diagnosticCriteria.map((criteria, i) => (
                <div key={i} className="rounded-lg border border-border/60 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <ClipboardCheck className="h-3.5 w-3.5 text-brand" />
                    <span className="text-sm font-semibold text-brand">{criteria.system}</span>
                    {criteria.code && <Badge variant="outline" size="sm">{criteria.code}</Badge>}
                  </div>
                  <ul className="space-y-1">
                    {criteria.criteria.map((c, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-foreground/80">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {criteria.duration && (
                    <p className="mt-2 text-xs text-muted-foreground">Duration: {criteria.duration}</p>
                  )}
                  {criteria.indianNote && (
                    <p className="mt-1 text-xs text-brand">🇮🇳 {criteria.indianNote}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Severity scales */}
            {disease.severityScales.length > 0 && (
              <div className="mt-8">
                <h3 className="text-h3 mb-4">Severity Scales</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {disease.severityScales.map((scale, i) => (
                    <div key={i} className="rounded-lg border border-border/60 p-4">
                      <p className="text-sm font-semibold text-foreground">{scale.name}</p>
                      <p className="text-xs text-muted-foreground">{scale.fullName}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{scale.measures}</p>
                      <div className="mt-3 space-y-1">
                        {scale.ranges.map((range, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs">
                            <span className="font-mono font-medium text-foreground tabular-nums">{range.min}-{range.max}</span>
                            <span className="text-muted-foreground">{range.severity}</span>
                            <span className="text-brand ml-auto">{range.action}</span>
                          </div>
                        ))}
                      </div>
                      {scale.indianNote && (
                        <p className="mt-2 text-xs text-brand">🇮🇳 {scale.indianNote}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Differential diagnosis */}
            {disease.differentialDiagnosis.length > 0 && (
              <div className="mt-8">
                <h3 className="text-h3 mb-4">Differential Diagnosis</h3>
                <div className="space-y-2">
                  {disease.differentialDiagnosis.map((ddx, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border border-border/40 p-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs font-semibold">{i + 1}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{ddx.condition}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{ddx.distinguishingFeatures}</p>
                        <p className="mt-0.5 text-xs text-brand">Key: {ddx.keyDifferentiator}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>

        {/* ===== MANAGEMENT ===== */}
        <Section id="management" className="bg-muted/20">
          <Container>
            <SectionHeader eyebrow="Management" title="How is it treated?" tone="brand" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {disease.management.map((option, i) => (
                <div key={i} className="rounded-lg border border-border/40 p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Badge variant="outline" size="sm">{option.category}</Badge>
                    <span className="text-sm font-semibold text-foreground">{option.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{option.description}</p>
                  <p className="mt-1 text-xs text-brand">When: {option.whenToUse}</p>
                  {option.indianContext && (
                    <p className="mt-1 text-xs text-brand">🇮🇳 {option.indianContext}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Drug links */}
            {disease.drugs.length > 0 && (
              <div className="mt-8">
                <h3 className="text-h3 mb-4">Pharmacotherapy — Drugs for {disease.name}</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {disease.drugs.map((drug, i) => {
                    const content = (
                      <>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Badge variant="brand" size="sm">{drug.role}</Badge>
                            <p className="mt-1 text-sm font-medium text-foreground">{drug.name}</p>
                          </div>
                        </div>
                        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{drug.rationale}</p>
                      </>
                    );
                    if (drug.slug) {
                      return (
                        <a key={i} href={`/drugs/${drug.slug}`} className="rounded-lg border border-border/40 p-3 transition-colors hover:border-brand/40 hover:bg-brand-soft/10">
                          {content}
                        </a>
                      );
                    }
                    return <div key={i} className="rounded-lg border border-border/40 p-3">{content}</div>;
                  })}
                </div>
              </div>
            )}
          </Container>
        </Section>

        {/* ===== INDIAN PRACTICE ===== */}
        <GuidedLearningVisibility drug={disease as any} sectionId="indian-practice">
          <Section id="indian-practice">
            <Container>
              <SectionHeader
                eyebrow="🇮🇳 Indian Practice"
                title="How is it managed in India?"
                tone="brand"
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-overline text-muted-foreground mb-1">Indian Guidelines</p>
                    <p className="text-sm text-foreground/90">{disease.indianPractice.indianGuidelines}</p>
                  </div>
                  <div>
                    <p className="text-overline text-muted-foreground mb-1">Government Hospitals</p>
                    <p className="text-sm text-foreground/90">{disease.indianPractice.governmentHospitals}</p>
                  </div>
                  <div>
                    <p className="text-overline text-muted-foreground mb-1">Private Practice</p>
                    <p className="text-sm text-foreground/90">{disease.indianPractice.privatePractice}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-overline text-muted-foreground mb-1">Primary Care</p>
                    <p className="text-sm text-foreground/90">{disease.indianPractice.primaryCare}</p>
                  </div>
                  <div>
                    <p className="text-overline text-muted-foreground mb-1">Cost Considerations</p>
                    <p className="text-sm text-foreground/90">{disease.indianPractice.costConsiderations}</p>
                  </div>
                  <div>
                    <p className="text-overline text-muted-foreground mb-2">Patient Counselling</p>
                    <ul className="space-y-1">
                      {disease.indianPractice.patientCounselling.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-sm text-foreground/80">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </GuidedLearningVisibility>

        {/* ===== CLINICAL CASES ===== */}
        <GuidedLearningVisibility drug={disease as any} sectionId="clinical-case">
          <Section id="clinical-case" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow="Clinical Case" title="See it in practice." tone="brand" />
              <div className="mt-8">
                {disease.clinicalCases.map((case_, i) => (
                  <div key={i} className="rounded-xl border border-brand/20 p-6">
                    <Badge variant="brand" size="sm">Real case · de-identified</Badge>
                    <h3 className="mt-2 text-h3">{case_.title}</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {[
                        { label: "Presentation", text: case_.presentation },
                        { label: "History", text: case_.history },
                        { label: "Examination", text: case_.examination },
                        { label: "Diagnosis", text: case_.diagnosis },
                        { label: "Management", text: case_.management },
                        { label: "Outcome", text: case_.outcome },
                      ].map((field, j) => (
                        <div key={j}>
                          <p className="text-overline text-muted-foreground">{field.label}</p>
                          <p className="mt-1 text-sm text-foreground/90">{field.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-border/40 pt-4">
                      <p className="text-overline text-brand mb-2">Teaching Points</p>
                      <ul className="space-y-1">
                        {case_.teachingPoints.map((tp, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground font-mono text-[0.65rem] font-bold">{j + 1}</span>
                            <span className="text-foreground/90">{tp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        </GuidedLearningVisibility>

        {/* ===== ACTIVE RECALL ===== */}
        <GuidedLearningVisibility drug={disease as any} sectionId="active-recall">
          <ActiveRecallSection drug={disease as any} />
        </GuidedLearningVisibility>

        {/* ===== FAQ ===== */}
        <Section id="faq">
          <Container width="narrow">
            <SectionHeader eyebrow="FAQ" title="Common questions." align="center" />
            <div className="mt-8 space-y-3">
              {disease.faqs.map((faq, i) => (
                <div key={i} className="border-b border-border/50 pb-3">
                  <p className="text-sm font-semibold text-foreground">{faq.question}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ===== EVIDENCE SOURCES ===== */}
        {disease.evidenceSources && (
          <Section id="references">
            <Container width="narrow">
              <SectionHeader eyebrow="Evidence Sources" title="Where does this content come from?" />
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-4 w-4 text-brand" />
                    <h3 className="text-sm font-semibold text-brand">International</h3>
                    <Badge variant="outline" size="sm">{disease.evidenceSources.international.length}</Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {disease.evidenceSources.international.map((ref, i) => (
                      <li key={i} className="text-sm text-foreground/90">
                        <span className="font-medium">{ref.source}</span>
                        {ref.section && <span className="text-muted-foreground"> — {ref.section}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-brand" />
                    <h3 className="text-sm font-semibold text-brand">Indian</h3>
                    <Badge variant="brand" size="sm">{disease.evidenceSources.indian.length}</Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {disease.evidenceSources.indian.map((ref, i) => (
                      <li key={i} className="text-sm text-foreground/90">
                        <span className="font-medium">{ref.source}</span>
                        {ref.section && <span className="text-muted-foreground"> — {ref.section}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* ===== EMERGENCY ===== */}
        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
