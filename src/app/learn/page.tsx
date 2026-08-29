"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Activity, HeartPulse, Brain, FlaskConical,
  Zap, Clock, TrendingUp, Layers,
} from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { drugs, diseases, substancePages, brainRegions, pathways, sideEffects } from "@/lib/kyp/data";

/**
 * /learn — the central educational dashboard of KYP.
 *
 * Visual hierarchy:
 *   1. HERO — "LEARN" + tagline + primary actions
 *   2. PRIMARY PATHWAYS — Medications (dominant) + Diseases/Substances (secondary)
 *   3. TEST YOUR KNOWLEDGE — MCQ practice entry
 *   4. EXPLORE — Brain, side effects, neuroscience concepts
 *   5. CONTINUE LEARNING — real progress data if logged in, else honest prompts
 *
 * All numbers are real — counted from the actual data arrays.
 * No fabricated content.
 */

export default function LearnPage() {
  const drugCount = drugs.length;
  const diseaseCount = diseases.length;
  const substanceCount = substancePages.length;
  const brainCount = brainRegions.length;
  const pathwayCount = pathways.length;
  const sideEffectCount = sideEffects.length;

  // Count total MCQs available across all drugs
  const totalMcqs = drugs.reduce((sum, d) => sum + (d.microQuizzes?.length || 0), 0)
    + diseases.reduce((sum, d) => sum + (d.microQuizzes?.length || 0), 0);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <p className="text-overline text-brand mb-6">Learning Hub</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                Learn
              </h1>
              <p
                className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed"
              >
                Understand the science. Test what you know. KYP organises medications, diseases, substances, and neuroscience into structured learning paths — built for medical students, residents, and patients who want depth without noise.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/#library"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Practice MCQs
                  <Zap className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Real stats — one inline line, no cards */}
            <Reveal delay={0.2}>
              <p className="mt-12 text-sm text-muted-foreground">
                <span className="font-serif text-lg font-bold text-foreground">{drugCount}</span> medications ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">{diseaseCount}</span> disease module ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">{substanceCount}</span> substances ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">{totalMcqs}</span> practice questions
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* ===== WHAT DO YOU WANT TO LEARN? ===== */}
        <Section spacing="relaxed" className="border-t border-border/30">
          <Container>
            <Reveal>
              <p className="text-overline text-muted-foreground mb-3">Section 01</p>
              <h2
                className="font-serif font-semibold tracking-[-0.02em] text-foreground mb-16"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                What do you want to learn?
              </h2>
            </Reveal>

            {/* PRIMARY PATHWAY — Medications (dominant, full-width) */}
            <Reveal delay={0.08}>
              <Link
                href="/#library"
                className="group block border-b border-border/40 pb-10 mb-10"
              >
                <div className="flex items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="h-5 w-5 text-brand" strokeWidth={1.5} />
                      <span className="font-mono text-xs text-muted-foreground/50">01 — Primary Pathway</span>
                    </div>
                    <h3
                      className="font-serif font-semibold tracking-tight text-foreground"
                      style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                      Medications
                    </h3>
                    <p className="mt-4 max-w-xl text-body text-muted-foreground leading-relaxed">
                      Learn how psychiatric medications work — mechanism of action, receptor pharmacology, clinical indications, side effects, and real clinical cases. Each drug is structured as a 6-lesson course with inline quizzes.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground/60">
                      <span><span className="font-semibold text-foreground">{drugCount}</span> drugs</span>
                      <span>·</span>
                      <span><span className="font-semibold text-foreground">{totalMcqs}</span> MCQs</span>
                      <span>·</span>
                      <span>SSRIs · SNRIs · NDRIs · NaSSAs · TCAs</span>
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 shrink-0 text-muted-foreground/30 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>

            {/* SECONDARY PATHWAYS — 2-column grid */}
            <div className="grid gap-px sm:grid-cols-2 border-border/40">
              {/* Diseases */}
              <Reveal delay={0.12}>
                <Link
                  href="/diseases/major-depressive-disorder"
                  className="group block border-b sm:border-r border-border/40 pb-8 sm:pb-10 sm:pr-8 mb-8 sm:mb-10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <HeartPulse className="h-4 w-4 text-brand" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground/50">02</span>
                  </div>
                  <h3
                    className="font-serif font-semibold tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    Diseases
                  </h3>
                  <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed max-w-md">
                    Understand disorders — symptoms, diagnosis criteria, pathophysiology, and management pathways with linked medications.
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground/50">
                    <span className="font-semibold text-foreground">{diseaseCount}</span> module · Major Depressive Disorder
                  </p>
                </Link>
              </Reveal>

              {/* Substances */}
              <Reveal delay={0.16}>
                <Link
                  href="/#substances"
                  className="group block border-b border-border/40 pb-8 sm:pb-10 sm:pl-8 mb-8 sm:mb-10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FlaskConical className="h-4 w-4 text-brand" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground/50">03</span>
                  </div>
                  <h3
                    className="font-serif font-semibold tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    Substances
                  </h3>
                  <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed max-w-md">
                    Explore alcohol, opioids, and cannabis — receptor pharmacology, intoxication, withdrawal timelines, and emergency management.
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground/50">
                    <span className="font-semibold text-foreground">{substanceCount}</span> modules · Alcohol · Opioids · Cannabis
                  </p>
                </Link>
              </Reveal>
            </div>

            {/* TERTIARY PATHWAYS — 2-column, smaller */}
            <div className="grid gap-px sm:grid-cols-2">
              <Reveal delay={0.2}>
                <Link
                  href="/#knowledge-graph"
                  className="group block pb-6 sm:pr-8"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-4 w-4 text-neural" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground/50">04</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Brain &amp; Neuroscience
                  </h3>
                  <p className="mt-1.5 text-body-sm text-muted-foreground leading-relaxed">
                    Receptors, neurotransmitters, brain regions, and dopamine pathways.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/50">
                    {brainCount} brain regions · {pathwayCount} pathways
                  </p>
                </Link>
              </Reveal>

              <Reveal delay={0.24}>
                <Link
                  href="/#side-effects"
                  className="group block pb-6 sm:pl-8"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-4 w-4 text-warning" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground/50">05</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Side Effects
                  </h3>
                  <p className="mt-1.5 text-body-sm text-muted-foreground leading-relaxed">
                    Adverse drug reactions linked to receptors, pathways, and management steps.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/50">
                    {sideEffectCount} high-yield effects mapped
                  </p>
                </Link>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* ===== TEST YOUR KNOWLEDGE ===== */}
        <Section spacing="relaxed" className="border-t border-border/30 bg-muted/10">
          <Container>
            <Reveal>
              <p className="text-overline text-muted-foreground mb-3">Section 02</p>
              <h2
                className="font-serif font-semibold tracking-[-0.02em] text-foreground mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Test your knowledge
              </h2>
              <p className="max-w-xl text-body text-muted-foreground leading-relaxed mb-10">
                Practice with {totalMcqs} multiple-choice questions drawn from across the medication and disease library. Each question comes with a one-line neuroscience explanation.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/quiz"
                className="group inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-base font-semibold text-foreground transition-all hover:border-brand/40 hover:shadow-[var(--shadow-soft)]"
              >
                <Zap className="h-5 w-5 text-brand" />
                Start Practice
                <span className="text-sm font-normal text-muted-foreground">
                  · {totalMcqs} questions
                </span>
                <ArrowRight className="h-4 w-4 ml-2 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </Container>
        </Section>

        {/* ===== EXPLORE ===== */}
        <Section spacing="relaxed" className="border-t border-border/30">
          <Container>
            <Reveal>
              <p className="text-overline text-muted-foreground mb-3">Section 03</p>
              <h2
                className="font-serif font-semibold tracking-[-0.02em] text-foreground mb-12"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Explore
              </h2>
            </Reveal>

            <div className="space-y-px">
              {[
                { icon: Layers, label: "Drug Timeline", description: "What happens hour by hour, week by week — the SSRI timeline as a reference.", href: "/#timeline", meta: "6 milestones" },
                { icon: Brain, label: "Brain Atlas", description: "Six brain regions indexed with their neurotransmitters, disorders, and associated drugs.", href: "/#knowledge-graph", meta: `${brainCount} regions` },
                { icon: Activity, label: "Side Effect Library", description: "Akathisia, EPS, serotonin syndrome, NMS, sexual dysfunction, weight gain.", href: "/#side-effects", meta: `${sideEffectCount} effects` },
                { icon: HeartPulse, label: "Emergency & Safety", description: "Crisis contacts, overdose protocols, and when to seek immediate help.", href: "/#emergency", meta: "24/7 helplines" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={i * 0.06}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-6 py-5 border-b border-border/15 last:border-0 transition-all duration-300 hover:pl-2"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-muted-foreground/40" strokeWidth={1.5} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {item.label}
                        </h3>
                        <p className="mt-0.5 text-body-sm text-muted-foreground/70">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground/40 hidden sm:block shrink-0">
                        {item.meta}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ===== CONTINUE LEARNING ===== */}
        <ContinueLearningSection />
      </main>
      <Footer />
    </div>
  );
}

/**
 * ContinueLearningSection — surfaces real progress data if the user is logged in.
 * If not logged in, shows honest "Recommended starting points" instead of
 * fabricating progress numbers.
 */
function ContinueLearningSection() {
  const [progress, setProgress] = React.useState<{ type: string; slug: string; title: string; lastVisitedAt: string }[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/progress?limit=5")
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.progress) setProgress(d.progress); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const hrefForType = (type: string, slug: string) => {
    if (type === "drug") return `/drugs/${slug}`;
    if (type === "substance") return `/substances/${slug}`;
    if (type === "disease") return `/diseases/${slug}`;
    return "/";
  };

  return (
    <Section spacing="relaxed" className="border-t border-border/30 bg-muted/10">
      <Container>
        <Reveal>
          <p className="text-overline text-muted-foreground mb-3">Section 04</p>
          <h2
            className="font-serif font-semibold tracking-[-0.02em] text-foreground mb-12"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {progress.length > 0 ? "Continue learning" : "Recommended starting points"}
          </h2>
        </Reveal>

        {loading ? (
          <p className="text-body-sm text-muted-foreground">Loading…</p>
        ) : progress.length > 0 ? (
          <div className="space-y-px">
            {progress.map((p, i) => (
              <Reveal key={p.slug + p.type} delay={i * 0.05}>
                <Link
                  href={hrefForType(p.type, p.slug)}
                  className="group flex items-center gap-6 py-4 border-b border-border/15 last:border-0 transition-all hover:pl-2"
                >
                  <span className="font-mono text-xs text-muted-foreground/30 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/50 mt-0.5">
                      {p.type} · {timeAgo(p.lastVisitedAt)}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Honest empty state — no fabricated progress */
          <div className="space-y-px">
            {[
              { label: "Sertraline", description: "The reference SSRI — start here for the full 6-lesson course.", href: "/drugs/sertraline", meta: "Medication" },
              { label: "Major Depressive Disorder", description: "Understand the clinical condition that SSRIs treat.", href: "/diseases/major-depressive-disorder", meta: "Disease" },
              { label: "Alcohol", description: "GABA, glutamate, and the neuroscience of withdrawal.", href: "/substances/alcohol", meta: "Substance" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-6 py-4 border-b border-border/15 last:border-0 transition-all hover:pl-2"
                >
                  <span className="font-mono text-xs text-muted-foreground/30 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted-foreground/50 mt-0.5">
                      {item.meta} · {item.description}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

function timeAgo(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return date.toLocaleDateString();
}
