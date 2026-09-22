import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Landmark,
  ListChecks,
  Stethoscope,
  Layers,
  GraduationCap,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { corpusStats, loadCorpus } from "@/lib/oxford/loader";
import { coreNotes } from "@/lib/oxford/curriculum";

/**
 * /psychiatry — the KYP Psychiatry hub.
 *
 * The primary landing experience for the psychiatry curriculum:
 * what KYP Psychiatry teaches, how learning is structured, the major
 * domains, and the learning tools (self-test, active recall, cases).
 *
 * Branding rule: KYP Psychiatry is the visible identity. The source
 * textbook is referenced only inside Sources & References layers.
 */

export const metadata: Metadata = {
  title: "KYP Psychiatry — Structured Psychiatry Learning",
  description:
    "Learn psychiatry through structured clinical lessons — 109 topics across 18 domains, clinical cases, active recall, India in practice and 719 self-test questions.",
  keywords: ["psychiatry", "psychiatry learning", "KYP Psychiatry", "psychiatry curriculum", "psychiatric disorders"],
  openGraph: {
    title: "KYP Psychiatry — Structured Psychiatry Learning",
    description:
      "109 structured lessons, 18 clinical domains, cases, active recall and self-testing.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function PsychiatryHubPage() {
  const stats = corpusStats();
  const corpus = loadCorpus();
  const core = coreNotes().slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-neural/[0.07] to-transparent">
        <Container>
          <div className="py-14 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-neural/10 px-3.5 py-1.5 text-xs font-semibold text-neural">
              <Brain className="h-3.5 w-3.5" aria-hidden />
              KYP Psychiatry
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Learn psychiatry the way clinical thinking works.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A complete psychiatry curriculum — {stats.noteCount} structured lessons across{" "}
              {stats.groupCount} clinical domains. Understand the concept, learn the detail,
              reason through cases, remember what matters, then test yourself with{" "}
              {stats.mcqCount} practice questions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/psychiatry/library"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
              >
                Open the Library <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/psychiatry/self-test"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/40"
              >
                <ListChecks className="h-4 w-4" aria-hidden /> Take a self-test
              </Link>
            </div>

            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: "Lessons", value: stats.noteCount },
                { label: "Clinical domains", value: stats.groupCount },
                { label: "Disorder courses", value: stats.disorderCount },
                { label: "Practice questions", value: stats.mcqCount },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ─── HOW LEARNING IS STRUCTURED ──────────────────────────── */}
      <Section spacing="tight">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="Every lesson follows one learning structure"
            description="Each topic moves through the same five phases — so you always know where you are and what comes next."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: BookOpen, label: "Understand", text: "The concept in plain language — what happens in the body and brain, and the symptoms it produces." },
              { icon: Layers, label: "Learn", text: "Epidemiology, causes and risk factors — the detailed clinical content." },
              { icon: Landmark, label: "India in Practice", text: "Indian epidemiology, services, costs and counselling realities, built into every topic." },
              { icon: Stethoscope, label: "Think", text: "Diagnosis, management and clinical cases — reasoning, not memorising." },
              { icon: ListChecks, label: "Remember & Practice", text: "Active recall, FAQs, exam traps and self-test MCQs with explanations." },
            ].map((p) => (
              <div key={p.label} className="rounded-xl border border-border bg-card p-5">
                <p.icon className="h-5 w-5 text-brand" aria-hidden />
                <h2 className="mt-3 text-sm font-semibold text-foreground">{p.label}</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── DOMAINS ───────────────────────────────────────────────── */}
      <Section spacing="tight">
        <Container>
          <SectionHeader
            eyebrow="The curriculum"
            title="18 clinical domains"
            description="From neurocognitive disorders to social psychiatry — the full breadth of the specialty, organised the way it is taught and examined."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {corpus.groups.map((g) => {
              const groupNotes = g.noteSlugs
                .map((slug) => corpus.bySlug.get(slug))
                .filter(Boolean);
              const mcqs = groupNotes.reduce(
                (sum, n) => sum + (n ? n.mcqs.length : 0),
                0
              );
              return (
                <Link
                  key={g.letter}
                  href={`/psychiatry/library#group-${g.letter}`}
                  className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand">
                      <span className="mr-2 font-mono text-xs text-muted-foreground/60">{g.letter}</span>
                      {g.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {g.noteSlugs.length} lessons
                      {mcqs ? ` · ${mcqs} MCQs` : ""}
                    </p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-brand" aria-hidden />
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ─── HIGH-YIELD ────────────────────────────────────────────── */}
      <Section spacing="tight">
        <Container>
          <SectionHeader
            eyebrow="High-yield"
            title="Start with the core"
            description="The topics marked Core are the heart of the curriculum — start here if you are new or revising for exams."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {core.map((n) => (
              <Link
                key={n.frontmatter.slug}
                href={`/psychiatry/${n.frontmatter.slug}`}
                className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground group-hover:text-brand">
                    {n.frontmatter.title}
                  </p>
                  <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                    <CheckCircle2 className="h-3 w-3" aria-hidden /> Core
                  </span>
                </div>
                {n.tagline && (
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {n.tagline}
                  </p>
                )}
                <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-muted-foreground/70">
                  <Clock className="h-3 w-3" aria-hidden /> {n.readingMinutes} min
                  {n.mcqs.length ? ` · ${n.mcqs.length} MCQs` : ""}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/psychiatry/library"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              Browse all {stats.noteCount} lessons <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ─── LEARNING TOOLS ────────────────────────────────────────── */}
      <Section spacing="tight">
        <Container>
          <SectionHeader
            eyebrow="Learning tools"
            title="Built for retention, not browsing"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <ListChecks className="h-5 w-5 text-neural" aria-hidden />
              <h2 className="mt-3 text-sm font-semibold text-foreground">Self-testing</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {stats.mcqCount} authored questions with explanations — inside every lesson
                or mixed across the curriculum in the Psychiatry Self-Test.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <Brain className="h-5 w-5 text-neural" aria-hidden />
              <h2 className="mt-3 text-sm font-semibold text-foreground">Active recall</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Every lesson carries recall prompts and an exam-lens section — the
                questions examiners actually ask.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <GraduationCap className="h-5 w-5 text-neural" aria-hidden />
              <h2 className="mt-3 text-sm font-semibold text-foreground">Your pace, your lens</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Patient, student and clinician entry points on every lesson, with progress
                that resumes exactly where you left off.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      </main>

      <Footer />
    </div>
  );
}
