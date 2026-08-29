import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { StickyLearningNav, LearningProgress } from "@/components/kyp/ui/sticky-learning-nav";
import { GuidedLearningToggle } from "@/components/kyp/ui/guided-learning-toggle";
import { GuidedLearningVisibility } from "@/components/kyp/ui/guided-learning-visibility";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import { Checkpoint } from "@/components/kyp/ui/checkpoint";
import { ActiveRecallSection } from "@/components/kyp/ui/active-recall";
import { LessonProgress } from "@/components/kyp/ui/lesson-progress";

import {
  DrugHero,
  DrugQuickFacts,
  DrugLearningObjectives,
  DrugClinicalUses,
  DrugMechanismOfAction,
  DrugBrainRegions,
  DrugNeurotransmitters,
  DrugNeuralPathways,
  DrugSideEffects,
  DrugMonitoring,
  DrugContraindications,
  DrugInteractions,
  DrugPatientEducation,
  DrugClinicalCases,
  DrugClinicalDecisionPath,
  DrugCommonMistakes,
  DrugHighYieldSummary,
  DrugFAQ,
  DrugKnowledgeGraph,
  DrugReferences,
  DrugPrevNext,
} from "@/components/kyp/sections/drug";

import {
  HeroInfoStrip,
  EvidenceAndIndianPractice,
  IndianClinicalModule,
  LearningModule,
  DrugNavigationModule,
  PageMetadataStrip,
} from "@/components/kyp/sections/drug";

import { Timeline } from "@/components/kyp/ui/timeline";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { PageTracker } from "@/components/kyp/ui/page-tracker";
import { TestUnderstandingCTA } from "@/components/kyp/ui/test-understanding-cta";

import { getDrugBySlug, getAllDrugSlugs } from "@/lib/kyp/data";
import type { NavItem } from "@/lib/kyp/use-scroll-spy";

/**
 * KYP Canonical Drug Template v2.0 — Educational UX Pass
 *
 * The page is now organised as a COURSE, not a documentation page:
 *   - Guided Learning Mode (Patient 5min / MBBS 20min / NEET PG 35min / Resident 45min)
 *   - Lesson Progress indicator (sticky horizontal strip)
 *   - Sections grouped into lessons with checkpoints between them
 *   - Inline micro-quizzes after key learning milestones
 *   - End-of-page Active Recall section (retrieval practice)
 *
 * The same content is preserved — the UX layer changes HOW it's experienced.
 */

type Slug = string;

export function generateStaticParams(): { slug: Slug }[] {
  return getAllDrugSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const drug = getDrugBySlug(slug);
  if (!drug) return { title: "Drug not found · Know Your Pill" };

  const title = `${drug.genericName} (${drug.drugClassLabel}) · Know Your Pill`;
  return {
    title,
    description: drug.tagline,
    keywords: [drug.genericName, ...drug.brandNames, drug.drugClassLabel, "pharmacology", "Know Your Pill"],
    authors: [{ name: "Zamaan Ali Shamji" }],
    openGraph: { title, description: drug.tagline, type: "article", siteName: "Know Your Pill" },
  };
}

function getNavItems(): NavItem[] {
  return [
    { id: "top", label: "Overview", group: "Lesson 1" },
    { id: "quick-facts", label: "Quick Facts", group: "Lesson 1" },
    { id: "learning-objectives", label: "Objectives", group: "Lesson 1" },
    { id: "knowledge-graph", label: "Knowledge Graph", group: "Lesson 1" },
    { id: "mechanism", label: "Mechanism", group: "Lesson 2" },
    { id: "brain-regions", label: "Brain", group: "Lesson 2" },
    { id: "neurotransmitters", label: "Neurotransmitters", group: "Lesson 2" },
    { id: "neural-pathways", label: "Pathways", group: "Lesson 2" },
    { id: "timeline", label: "Timeline", group: "Lesson 2" },
    { id: "clinical-uses", label: "Clinical Uses", group: "Lesson 3" },
    { id: "side-effects", label: "Side Effects", group: "Lesson 3" },
    { id: "monitoring", label: "Monitoring", group: "Lesson 3" },
    { id: "contraindications", label: "Contraindications", group: "Lesson 3" },
    { id: "evidence-practice", label: "Evidence", group: "Lesson 3" },
    { id: "interactions", label: "Interactions", group: "Lesson 3" },
    { id: "patient-education", label: "Patient Guide", group: "Lesson 3" },
    { id: "indian-clinical", label: "Indian Practice", group: "Lesson 4" },
    { id: "decision-path", label: "Decision Path", group: "Lesson 4" },
    { id: "common-mistakes", label: "Mistakes", group: "Lesson 4" },
    { id: "learning-module", label: "Exam Content", group: "Lesson 5" },
    { id: "clinical-case", label: "Clinical Case", group: "Lesson 5" },
    { id: "drug-navigation", label: "Drug Navigation", group: "Lesson 5" },
    { id: "high-yield-summary", label: "High-Yield", group: "Lesson 5" },
    { id: "active-recall", label: "Active Recall", group: "Lesson 6" },
    { id: "faq", label: "FAQ", group: "Lesson 6" },
    { id: "references", label: "References", group: "Lesson 6" },
  ];
}

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function DrugPage({ params }: PageProps) {
  const { slug } = await params;
  const drug = getDrugBySlug(slug);
  if (!drug) notFound();

  const navItems = getNavItems();
  const lessons = drug.lessonGroups ?? [];
  const quizzes = drug.microQuizzes ?? [];
  const hasLessons = lessons.length > 0;

  // Helper: find quiz that should appear after a given section
  const quizAfter = (sectionId: string) => quizzes.find((q) => q.afterSectionId === sectionId);
  // Helper: find lesson by section ID
  const lessonForSection = (sectionId: string) => lessons.find((l) => l.sectionIds.includes(sectionId));
  // Helper: find checkpoint for a lesson (the last section of each lesson gets a checkpoint)
  const isLastInSection = (sectionId: string) => {
    for (const lesson of lessons) {
      if (lesson.sectionIds[lesson.sectionIds.length - 1] === sectionId) {
        return lesson;
      }
    }
    return null;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <GuidedLearningToggle />
      </div>
      <StickyLearningNav items={navItems} drugSlug={drug.slug} />

      {/* Progress tracking + bookmark button (invisible, fire-and-forget) */}
      <PageTracker
        type="drug"
        slug={drug.slug}
        title={drug.genericName}
        variant="floating"
      />

      <main className="flex-1 lg:pl-52 xl:pl-56">
        {/* ===== BREADCRUMB ===== */}
        <div className="border-b border-border/40 bg-muted/20">
          <Container>
            <nav className="flex items-center gap-2 py-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/learn" className="hover:text-brand">Learn</Link>
              <span aria-hidden>/</span>
              <Link href="/#library" className="hover:text-brand">Medications</Link>
              <span aria-hidden>/</span>
              <span className="font-medium text-foreground">{drug.genericName}</span>
            </nav>
          </Container>
        </div>

        {/* Lesson Progress indicator — sticky horizontal strip */}
        {hasLessons && (
          <div className="sticky top-16 z-20">
            <LessonProgress lessons={lessons} />
          </div>
        )}

        {/* ===== LESSON 1: Foundations ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="top">
          <DrugHero drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="quick-facts">
          <DrugQuickFacts drug={drug} />
          <HeroInfoStrip drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="learning-objectives">
          <DrugLearningObjectives drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="knowledge-graph">
          <DrugKnowledgeGraph drug={drug} />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 1 */}
        {hasLessons && lessons[0] && (
          <Container>
            <Checkpoint
              lessonNumber={1}
              lessonTitle={lessons[0].title}
              message={lessons[0].checkpoint}
              nextLessonTitle={lessons[1]?.title}
            />
          </Container>
        )}

        {/* ===== LESSON 2: Mechanism & Neuroscience ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="mechanism">
          <DrugMechanismOfAction drug={drug} />
          {quizAfter("mechanism") && <Container><MicroQuiz quiz={quizAfter("mechanism")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="brain-regions">
          <DrugBrainRegions drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="neurotransmitters">
          <DrugNeurotransmitters drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="neural-pathways">
          <DrugNeuralPathways drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="timeline">
          <Section id="timeline" className="bg-muted/20">
            <Container width="narrow">
              <SectionHeader
                eyebrow="Timeline of Effects"
                title="What happens, hour by hour, week by week."
                align="center"
              />
              <div className="mt-10">
                <Timeline events={drug.timeline} />
              </div>
            </Container>
          </Section>
          {quizAfter("timeline") && <Container><MicroQuiz quiz={quizAfter("timeline")!} /></Container>}
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 2 */}
        {hasLessons && lessons[1] && (
          <Container>
            <Checkpoint
              lessonNumber={2}
              lessonTitle={lessons[1].title}
              message={lessons[1].checkpoint}
              nextLessonTitle={lessons[2]?.title}
            />
          </Container>
        )}

        {/* ===== LESSON 3: Clinical Practice ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="clinical-uses">
          <DrugClinicalUses drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="side-effects">
          <DrugSideEffects drug={drug} />
          {quizAfter("side-effects") && <Container><MicroQuiz quiz={quizAfter("side-effects")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="monitoring">
          <DrugMonitoring drug={drug} />
          {quizAfter("monitoring") && <Container><MicroQuiz quiz={quizAfter("monitoring")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="contraindications">
          <DrugContraindications drug={drug} />
          {quizAfter("contraindications") && <Container><MicroQuiz quiz={quizAfter("contraindications")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="evidence-practice">
          <EvidenceAndIndianPractice drug={drug} />
          {quizAfter("evidence-practice") && <Container><MicroQuiz quiz={quizAfter("evidence-practice")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="interactions">
          <DrugInteractions drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="patient-education">
          <DrugPatientEducation drug={drug} />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 3 */}
        {hasLessons && lessons[2] && (
          <Container>
            <Checkpoint
              lessonNumber={3}
              lessonTitle={lessons[2].title}
              message={lessons[2].checkpoint}
              nextLessonTitle={lessons[3]?.title}
            />
          </Container>
        )}

        {/* ===== LESSON 4: Indian Context ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="indian-clinical">
          <IndianClinicalModule drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="decision-path">
          <DrugClinicalDecisionPath drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="common-mistakes">
          <DrugCommonMistakes drug={drug} />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 4 */}
        {hasLessons && lessons[3] && (
          <Container>
            <Checkpoint
              lessonNumber={4}
              lessonTitle={lessons[3].title}
              message={lessons[3].checkpoint}
              nextLessonTitle={lessons[4]?.title}
            />
          </Container>
        )}

        {/* ===== LESSON 5: Exam Revision ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="learning-module">
          <LearningModule drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="clinical-case">
          <DrugClinicalCases drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="drug-navigation">
          <DrugNavigationModule drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="high-yield-summary">
          <DrugHighYieldSummary drug={drug} />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 5 */}
        {hasLessons && lessons[4] && (
          <Container>
            <Checkpoint
              lessonNumber={5}
              lessonTitle={lessons[4].title}
              message={lessons[4].checkpoint}
              nextLessonTitle={lessons[5]?.title}
            />
          </Container>
        )}

        {/* ===== LESSON 6: Active Recall ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="active-recall">
          <ActiveRecallSection drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="faq">
          <DrugFAQ drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="references">
          <DrugReferences drug={drug} />
        </GuidedLearningVisibility>

        {/* Page Metadata Strip — professional trust footer */}
        <PageMetadataStrip drug={drug} />

        {/* Checkpoint after Lesson 6 (final) */}
        {hasLessons && lessons[5] && (
          <Container>
            <Checkpoint
              lessonNumber={6}
              lessonTitle={lessons[5].title}
              message={lessons[5].checkpoint}
            />
          </Container>
        )}

        {/* Prev/Next + Progress + Emergency */}
        <DrugPrevNext currentSlug={drug.slug} />

        <Section spacing="tight">
          <Container width="narrow">
            <LearningProgress items={navItems} drugSlug={drug.slug} />
          </Container>
        </Section>

        <TestUnderstandingCTA topic={drug.genericName} />

        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
