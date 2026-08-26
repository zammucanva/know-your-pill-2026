import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";

import { getSubstancePage, getAllSubstanceSlugs } from "@/lib/kyp/data/substances";
import { drugClasses } from "@/lib/kyp/data";
import { AlertTriangle, Activity, HeartPulse } from "lucide-react";

type Slug = string;

export function generateStaticParams(): { slug: Slug }[] {
  return getAllSubstanceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const substance = getSubstancePage(slug);
  if (!substance) return { title: "Substance not found · Know Your Pill" };

  return {
    title: `${substance.disorderName} · Know Your Pill`,
    description: substance.tagline,
    authors: [{ name: "Zamaan Ali Shamji" }],
    openGraph: { title: substance.disorderName, description: substance.tagline, type: "article" },
  };
}

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function SubstancePage({ params }: PageProps) {
  const { slug } = await params;
  const substance = getSubstancePage(slug);
  if (!substance) notFound();

  const drugClass = drugClasses[substance.drugClass];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />
      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <section id="top" className="relative overflow-hidden pt-12 pb-8">
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
          <Container className="relative">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="brand" size="sm">{drugClass?.name}</Badge>
              <span>{substance.neurotransmitter}</span>
            </div>
            <h1 className="mt-3 text-display text-foreground">{substance.disorderName}</h1>
            <p className="mt-3 max-w-2xl text-base text-foreground/80 leading-relaxed">{substance.tagline}</p>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed">{substance.summary}</p>
            {substance.artwork && (
              <div className="mt-6 flex justify-center">
                <div className="relative h-40 w-40">
                  <Image src={substance.artwork} alt={substance.artworkAlt || substance.name} fill className="object-contain" sizes="160px" />
                </div>
              </div>
            )}
          </Container>
        </section>

        {/* ===== OVERVIEW ===== */}
        {substance.overview && (
          <Section id="overview">
            <Container>
              <SectionHeader eyebrow="Overview" title={substance.overview.title} tone="brand" />
              <p className="mt-4 text-sm text-muted-foreground">{substance.overview.description}</p>

              {substance.overview.keyConcepts && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {substance.overview.keyConcepts.map((c) => (
                    <Badge key={c} variant="outline" size="md">{c}</Badge>
                  ))}
                </div>
              )}

              {substance.overview.mechanisms && (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {substance.overview.mechanisms.map((m, i) => (
                    <div key={i} className="rounded-lg border border-border/50 p-4">
                      <p className="text-sm font-semibold text-foreground">{m.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== CLASSIFICATION ===== */}
        {substance.classifications && substance.classifications.length > 0 && (
          <Section id="classification" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow="Classification" title="Classification Systems" tone="brand" />
              <div className="mt-8 space-y-6">
                {substance.classifications.map((cls, i) => (
                  <div key={i}>
                    <h3 className="text-h3">{cls.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cls.description}</p>
                    {cls.types && (
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {cls.types.map((type, j) => (
                          <div key={j} className="rounded-lg border border-border/50 p-4">
                            <div className="flex items-baseline gap-2">
                              {type.symbol && (
                                <span className="font-serif text-2xl text-brand">{type.symbol}</span>
                              )}
                              <p className="text-sm font-semibold text-foreground">{type.name}</p>
                            </div>
                            {type.description && (
                              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{type.description}</p>
                            )}
                            <ul className="mt-2 space-y-1">
                              {type.features.map((f, k) => (
                                <li key={k} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* ===== SCREENING TOOLS ===== */}
        {substance.screeningTools && substance.screeningTools.length > 0 && (
          <Section id="screening">
            <Container>
              <SectionHeader eyebrow="Screening" title="Screening Tools" tone="brand" />
              <div className="mt-8 space-y-4">
                {substance.screeningTools.map((tool, i) => (
                  <div key={i} className="rounded-lg border border-border/50 p-4">
                    <h3 className="text-h3">{tool.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
                    <div className="mt-4 space-y-2">
                      {tool.questions.map((q, j) => (
                        <div key={`q-${i}-${j}`} className="rounded-md border border-border/40 bg-muted/20 p-3">
                          <div className="flex items-baseline gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground font-mono text-xs font-bold">{j + 1}</span>
                            <p className="text-sm font-medium text-foreground">{q.text}</p>
                          </div>
                          <p className="mt-1.5 pl-8 text-xs italic text-muted-foreground">{q.meaning}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs font-medium text-brand">{tool.scoring}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* ===== SEVERITY SCALE ===== */}
        {substance.severityScale && substance.severityScale.length > 0 && (
          <Section id="severity" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow="Severity Scale" title="Blood Alcohol Concentration" tone="brand" />
              <div className="mt-8 overflow-x-auto kyp-scroll">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/70">
                      <th className="py-2 pr-3 text-left text-overline text-muted-foreground">Level</th>
                      <th className="py-2 px-3 text-left text-overline text-muted-foreground">BAC</th>
                      <th className="py-2 px-3 text-left text-overline text-muted-foreground">Effects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {substance.severityScale.map((row, i) => (
                      <tr key={i} className="border-b border-border/40">
                        <td className="py-2 pr-3 text-xs font-semibold">{row.level}</td>
                        <td className="py-2 px-3 font-mono text-xs">{row.value || "—"}</td>
                        <td className="py-2 px-3 text-xs text-muted-foreground">{row.effects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Container>
          </Section>
        )}

        {/* ===== NEUROBIOLOGY ===== */}
        {substance.neurobiology && (
          <Section id="neurobiology">
            <Container>
              <SectionHeader eyebrow="Neurobiology" title="How It Works in the Brain" tone="neural" />
              <p className="mt-4 text-sm text-foreground/90">{substance.neurobiology.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {substance.neurobiology.mechanisms.map((m, i) => (
                  <div key={i} className="rounded-lg border border-border/50 p-4">
                    <p className="text-sm font-semibold text-foreground">{m.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
              {substance.neurobiology.brainRegions && (
                <div className="mt-4">
                  <p className="text-overline text-muted-foreground">Brain Regions</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {substance.neurobiology.brainRegions.map((r) => (
                      <Badge key={r} variant="neural" size="sm">{r}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {substance.neurobiology.deepDive && (
                <div className="mt-6 rounded-lg border border-border/50 p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-h3">{substance.neurobiology.deepDive.cardTitle}</h3>
                    <span className="text-xs text-muted-foreground">{substance.neurobiology.deepDive.cardTagline}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{substance.neurobiology.deepDive.summary}</p>

                  {substance.neurobiology.deepDive.mechanismNotes.length > 0 && (
                    <div className="mt-4">
                      <p className="text-overline text-muted-foreground">Mechanism</p>
                      <ul className="mt-1.5 space-y-1">
                        {substance.neurobiology.deepDive.mechanismNotes.map((n, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                            <Activity className="mt-0.5 h-3 w-3 shrink-0 text-neural" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {substance.neurobiology.deepDive.dangerCallout && (
                    <div className="mt-4">
                      <Callout variant="danger" title={substance.neurobiology.deepDive.dangerCallout.title}>
                        <p className="text-xs text-foreground/80">{substance.neurobiology.deepDive.dangerCallout.description}</p>
                      </Callout>
                    </div>
                  )}
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== INTOXICATION ===== */}
        {substance.intoxication && (
          <Section id="intoxication" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow="Intoxication" title="Acute Intoxication" tone="emergency" />
              <p className="mt-4 text-sm text-foreground/90">{substance.intoxication.summary}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-overline text-muted-foreground">Clinical Features</p>
                  <ul className="mt-2 space-y-1">
                    {substance.intoxication.clinicalFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warning" />
                        {f.symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                {substance.intoxication.mechanisms && (
                  <div>
                    <p className="text-overline text-muted-foreground">Mechanisms</p>
                    <ul className="mt-2 space-y-2">
                      {substance.intoxication.mechanisms.map((m, i) => (
                        <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {substance.intoxication.whenToSeekHelp && substance.intoxication.whenToSeekHelp.length > 0 && (
                <div className="mt-6">
                  <Callout variant="warning" title="When to Seek Help">
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {substance.intoxication.whenToSeekHelp.map((w, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                          <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-emergency" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </Callout>
                </div>
              )}

              {substance.intoxication.emergencyCallout && (
                <div className="mt-4">
                  <Callout variant="danger" title={substance.intoxication.emergencyCallout.title}>
                    <p className="text-xs text-foreground/80 mt-1">{substance.intoxication.emergencyCallout.description}</p>
                  </Callout>
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== WITHDRAWAL ===== */}
        {substance.withdrawal && (
          <Section id="withdrawal">
            <Container>
              <SectionHeader eyebrow="Withdrawal" title="Withdrawal Syndrome" tone="emergency" />
              <p className="mt-4 text-sm text-foreground/90">{substance.withdrawal.summary}</p>
              <div className="mt-6 space-y-3">
                {substance.withdrawal.phases.map((phase, i) => (
                  <div key={i} className="rounded-lg border border-border/50 p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">{phase.phase}</p>
                      {phase.timing && <span className="font-mono text-xs text-brand">{phase.timing}</span>}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{phase.symptoms}</p>
                  </div>
                ))}
              </div>
              {substance.withdrawal.mechanisms && (
                <div className="mt-6">
                  <Callout variant="warning" title="Withdrawal Mechanisms">
                    <ul className="space-y-1.5 mt-2">
                      {substance.withdrawal.mechanisms.map((m, i) => (
                        <li key={i} className="text-xs text-foreground/80">{m}</li>
                      ))}
                    </ul>
                  </Callout>
                </div>
              )}

              {substance.withdrawal.emergencyCallout && (
                <div className="mt-4">
                  <Callout variant="danger" title={substance.withdrawal.emergencyCallout.title}>
                    <p className="text-xs text-foreground/80 mt-1">{substance.withdrawal.emergencyCallout.description}</p>
                  </Callout>
                </div>
              )}

              {substance.withdrawal.clinicalCourse && substance.withdrawal.clinicalCourse.length > 0 && (
                <div className="mt-4">
                  <Callout variant="info" title="Clinical Course">
                    <ul className="mt-2 space-y-1">
                      {substance.withdrawal.clinicalCourse.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                          <Activity className="mt-0.5 h-3 w-3 shrink-0 text-neural" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Callout>
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== COMPLICATIONS ===== */}
        {substance.complications && substance.complications.length > 0 && (
          <Section id="complications" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow="Complications" title="Neuropsychiatric Complications" tone="emergency" />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {substance.complications.map((c, i) => (
                  <div key={i} className="rounded-lg border border-border/50 p-4">
                    <p className="text-sm font-semibold text-foreground">{c.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* ===== OVERDOSE EMERGENCY (opioid-specific) ===== */}
        {substance.overdoseEmergency && (
          <Section id="overdose" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow={substance.overdoseEmergency.eyebrow} title={substance.overdoseEmergency.title} tone="emergency" />
              <p className="mt-4 text-sm text-foreground/80">{substance.overdoseEmergency.subtitle}</p>

              <div className="mt-6 rounded-lg border border-emergency/30 bg-emergency-soft/30 p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emergency" />
                  </span>
                  <h3 className="text-h3 text-emergency">{substance.overdoseEmergency.panelTitle}</h3>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{substance.overdoseEmergency.panelDescription}</p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {substance.overdoseEmergency.warningSigns.map((w, i) => (
                    <div key={i} className="flex items-start gap-1.5 rounded-md border border-emergency/20 bg-background/60 p-2.5">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" />
                      <span className="text-xs text-foreground/80">{w}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  {substance.emergency?.contacts.map((c, i) => (
                    <a
                      key={`od-contact-${i}`}
                      href={`tel:${c.number}`}
                      className="flex items-center justify-between rounded-lg border border-emergency/40 bg-emergency-soft/50 px-4 py-2.5 text-sm font-semibold text-emergency transition-colors hover:bg-emergency-soft/70"
                    >
                      <span>{c.label}</span>
                      <span className="font-mono">{c.number}</span>
                    </a>
                  ))}
                </div>
              </div>

              {substance.overdoseEmergency.mechanism && (
                <div className="mt-6 rounded-lg border border-border/50 p-5">
                  <h3 className="text-h3">Why Overdose Kills</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{substance.overdoseEmergency.mechanism.summary}</p>

                  <div className="mt-4">
                    <p className="text-overline text-muted-foreground">Mechanism</p>
                    <ul className="mt-1.5 space-y-1">
                      {substance.overdoseEmergency.mechanism.notes.map((n, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                          <Activity className="mt-0.5 h-3 w-3 shrink-0 text-neural" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <Callout variant="danger" title="Emergency Action — What to Do">
                      <p className="text-xs text-foreground/80">{substance.overdoseEmergency.mechanism.emergencyAction}</p>
                    </Callout>
                  </div>
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== TREATMENT ===== */}
        {substance.treatment && (
          <Section id="treatment">
            <Container>
              <SectionHeader eyebrow="Treatment" title="Treatment & Detoxification" tone="brand" />
              <p className="mt-4 text-sm text-foreground/90">{substance.treatment.summary}</p>

              {/* Detox steps */}
              {substance.treatment.detoxificationSteps && (
                <div className="mt-6">
                  <h3 className="text-h3 mb-3">Detoxification Steps</h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {substance.treatment.detoxificationSteps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2.5 rounded-lg border border-border/40 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground font-mono text-xs font-bold">{i + 1}</span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{step.title}</p>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detox protocol */}
              {substance.treatment.detoxificationProtocol && (
                <div className="mt-6">
                  <Callout variant="info" title={substance.treatment.detoxificationProtocol.title}>
                    <p className="text-xs text-foreground/80">{substance.treatment.detoxificationProtocol.description}</p>
                    {substance.treatment.detoxificationProtocol.keyPoints && (
                      <ul className="mt-2 space-y-1">
                        {substance.treatment.detoxificationProtocol.keyPoints.map((kp, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                            <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-warning" />
                            {kp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Callout>
                </div>
              )}

              {/* Medications */}
              {substance.treatment.medications && (
                <div className="mt-6">
                  <h3 className="text-h3 mb-3">Medications</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {substance.treatment.medications.map((med, i) => (
                      <div key={i} className="rounded-lg border border-border/50 p-4">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground">{med.name}</p>
                          {med.mechanism && (
                            <span className="shrink-0 rounded-full border border-brand/30 bg-brand-soft/40 px-2 py-0.5 text-[0.65rem] font-medium text-brand">{med.mechanism}</span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{med.description}</p>

                        {med.mechanismFlow && med.mechanismFlow.length > 0 && (
                          <div className="mt-3">
                            <p className="text-overline text-muted-foreground">Mechanism Flow</p>
                            <ol className="mt-1.5 space-y-1">
                              {med.mechanismFlow.map((s, k) => (
                                <li key={k} className="flex items-start gap-2 text-xs text-foreground/80">
                                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/15 font-mono text-[0.6rem] font-bold text-brand">{s.step}</span>
                                  <span>
                                    <strong className="font-medium text-foreground">{s.title}</strong>
                                    <span className="text-muted-foreground"> — {s.description}</span>
                                  </span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {med.mechanismNotes && med.mechanismNotes.length > 0 && (
                          <div className="mt-3">
                            <p className="text-overline text-muted-foreground">Mechanism Notes</p>
                            <ul className="mt-1.5 space-y-1">
                              {med.mechanismNotes.map((n, k) => (
                                <li key={k} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                  <Activity className="mt-0.5 h-3 w-3 shrink-0 text-neural" />
                                  {n}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {med.reactionSymptoms && med.reactionSymptoms.length > 0 && (
                          <div className="mt-3">
                            <p className="text-overline text-muted-foreground">Reaction Symptoms</p>
                            <div className="mt-1.5 grid gap-2 sm:grid-cols-2">
                              {med.reactionSymptoms.map((grp, k) => (
                                <div key={k} className="rounded-md border border-border/40 bg-muted/20 p-2">
                                  <p className="text-xs font-medium text-foreground">{grp.category}</p>
                                  <ul className="mt-1 space-y-0.5">
                                    {grp.symptoms.map((sym, l) => (
                                      <li key={l} className="flex items-start gap-1 text-xs text-muted-foreground">
                                        <HeartPulse className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emergency" />
                                        {sym}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {med.notes && (
                          <div className="mt-3">
                            <Callout variant="danger" title="Contraindications">
                              <p className="text-xs text-foreground/80">{med.notes}</p>
                            </Callout>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Psychosocial */}
              {substance.treatment.psychosocial && (
                <div className="mt-6">
                  <h3 className="text-h3 mb-3">Psychosocial Rehabilitation</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {substance.treatment.psychosocial.map((p, i) => (
                      <div key={i} className="rounded-lg border border-border/50 p-4">
                        <p className="text-sm font-semibold text-foreground">{p.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recovery */}
              {substance.treatment.recovery && (
                <div className="mt-6">
                  <h3 className="text-h3 mb-3">Recovery & Support</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {substance.treatment.recovery.map((r, i) => (
                      <div key={i} className="rounded-lg border border-border/50 p-4">
                        <p className="text-sm font-semibold text-foreground">{r.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{r.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== MAINTENANCE THERAPY (opioid-specific) ===== */}
        {substance.treatment?.maintenance && (
          <Section id="maintenance">
            <Container>
              <SectionHeader eyebrow={substance.treatment.maintenance.eyebrow} title={substance.treatment.maintenance.title} tone="brand" />
              <p className="mt-4 text-sm text-foreground/90">{substance.treatment.maintenance.subtitle}</p>

              <div className="mt-6 rounded-lg border border-border/50 p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-h3">{substance.treatment.maintenance.cardTitle}</h3>
                  <span className="text-xs text-muted-foreground">{substance.treatment.maintenance.cardTagline}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{substance.treatment.maintenance.summary}</p>

                <div className="mt-4">
                  <p className="text-overline text-muted-foreground">Benefits</p>
                  <ul className="mt-1.5 space-y-1">
                    {substance.treatment.maintenance.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                        <Activity className="mt-0.5 h-3 w-3 shrink-0 text-neural" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {substance.treatment.maintenance.alternatives && (
                  <div className="mt-4">
                    <p className="text-overline text-muted-foreground">{substance.treatment.maintenance.alternatives.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{substance.treatment.maintenance.alternatives.description}</p>
                  </div>
                )}

                {substance.treatment.maintenance.complementaryTherapies.length > 0 && (
                  <div className="mt-4">
                    <p className="text-overline text-muted-foreground">Psychosocial</p>
                    <ul className="mt-1.5 space-y-1">
                      {substance.treatment.maintenance.complementaryTherapies.map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {substance.treatment.maintenanceMedications && substance.treatment.maintenanceMedications.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-h3 mb-3">Maintenance Medications</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {substance.treatment.maintenanceMedications.map((med, i) => (
                      <div key={`maint-med-${i}`} className="rounded-lg border border-border/50 p-4">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground">{med.name}</p>
                          {med.mechanism && (
                            <span className="shrink-0 rounded-full border border-brand/30 bg-brand-soft/40 px-2 py-0.5 text-[0.65rem] font-medium text-brand">{med.mechanism}</span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{med.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* ===== NALOXONE MECHANISM (opioid-specific) ===== */}
        {substance.naloxoneInfo && (
          <Section id="naloxone" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow={substance.naloxoneInfo.eyebrow} title={substance.naloxoneInfo.title} tone="emergency" />
              <p className="mt-4 text-sm text-foreground/90">{substance.naloxoneInfo.subtitle}</p>

              {/* 5-step mechanism flow */}
              <div className="mt-6">
                <p className="text-overline text-muted-foreground">Mechanism Flow</p>
                <ol className="mt-2 grid gap-2 sm:grid-cols-5">
                  {substance.naloxoneInfo.mechanismFlow.map((s, i) => (
                    <li key={i} className="rounded-lg border border-border/50 bg-background/60 p-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground font-mono text-xs font-bold">{s.step}</span>
                        <p className="text-xs font-semibold text-foreground">{s.title}</p>
                      </div>
                      <p className="mt-1.5 text-[0.7rem] text-muted-foreground leading-relaxed">{s.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Naloxone rescue pattern-card */}
              <div className="mt-6 rounded-lg border border-border/50 p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-h3">{substance.naloxoneInfo.cardTitle}</h3>
                  <span className="text-xs text-muted-foreground">{substance.naloxoneInfo.cardTagline}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{substance.naloxoneInfo.summary}</p>

                <div className="mt-4">
                  <p className="text-overline text-muted-foreground">Pharmacology</p>
                  <ul className="mt-1.5 space-y-1">
                    {substance.naloxoneInfo.pharmacologyNotes.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                        <Activity className="mt-0.5 h-3 w-3 shrink-0 text-neural" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <Callout variant="danger" title="Dosing & Administration">
                    <p className="text-xs text-foreground/80">{substance.naloxoneInfo.dosingAndAdministration}</p>
                  </Callout>
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* ===== EMERGENCY ===== */}
        {substance.emergency && (
          <Section id="emergency" className="bg-muted/20">
            <Container>
              <SectionHeader eyebrow="Emergency" title="Emergency Quick Help" tone="emergency" />
              <p className="mt-4 text-sm text-foreground/80">If you observe any of these warning signs, call for emergency medical assistance immediately.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-overline text-emergency">Warning Signs</p>
                  <ul className="mt-2 space-y-1">
                    {substance.emergency.warningSigns.map((w, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-sm text-foreground/80">
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-overline text-brand">Emergency Contacts</p>
                  <div className="mt-2 space-y-2">
                    {substance.emergency.contacts.map((c, i) => (
                      <a
                        key={i}
                        href={`tel:${c.number}`}
                        className="flex items-center justify-between rounded-lg border border-emergency/30 bg-emergency-soft/40 px-4 py-3 text-sm font-semibold text-emergency transition-colors hover:bg-emergency-soft/60"
                      >
                        <span>{c.label}</span>
                        <span className="font-mono">{c.number}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* ===== METADATA ===== */}
        <Section spacing="tight">
          <Container className="text-center">
            <p className="text-xs text-muted-foreground">
              Last reviewed: {new Date(substance.lastReviewed).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
              {" · "}Source: {substance.source}
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
