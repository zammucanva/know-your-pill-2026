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
  DrugRelatedDrugs,
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
import { SectionReadTracker } from "@/components/kyp/ui/section-read-tracker";
import { ResumeBanner } from "@/components/kyp/ui/resume-banner";
import { PatientHidden } from "@/components/kyp/ui/patient-hidden";
import { PatientModeSwitch } from "@/components/kyp/ui/patient-mode-switch";
import { PatientGuideSection } from "@/components/kyp/sections/drug/patient-guide-section";
import { getPatientGuide } from "@/lib/kyp/patient";

import { getDrugBySlug, getAllDrugSlugs } from "@/lib/kyp/data";
import { DRUG_COURSE_NAV_ITEMS } from "@/lib/kyp/drug-course-sections";
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

// All valid slugs come from generateStaticParams at build time. Unknown
// slugs are rejected by the router itself with a true 404 — without this,
// the loading.tsx streaming boundary would flush a 200 shell before
// notFound() resolves, returning the not-found UI with the wrong status.
export const dynamicParams = false;

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
  // Single source of truth: src/lib/kyp/drug-course-sections.ts —
  // the same list powers the question-to-knowledge deep-link
  // verification (NOW-N6), so navigator and deep links can never drift.
  return DRUG_COURSE_NAV_ITEMS.map(({ id, label, group }) => ({
    id,
    label,
    group,
  }));
}

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function DrugPage({ params }: PageProps) {
  const { slug } = await params;
  const drug = getDrugBySlug(slug);
  if (!drug) notFound();

  // Patient language layer — the plain-language presentation for this
  // medication (Patient guided-learning mode). Undefined only if a drug
  // has no guide, in which case medical content is shown in every mode.
  const patientGuide = getPatientGuide(drug.slug);

  const navItems = getNavItems();
  const lessons = drug.lessonGroups ?? [];
  const quizzes = drug.microQuizzes ?? [];
  const hasLessons = lessons.length > 0;

  // Slugs with an actually-built page — passed to the Drug Navigation
  // module so family members / related drugs without a page render as
  // non-clickable "coming soon" items instead of dead links.
  const builtDrugSlugs = getAllDrugSlugs();

  // Quizzes that actually render in this course template — only these
  // can ever be answered in-course, so only these count towards a
  // full quiz pass (best score never inflates from unreachable data).
  const QUIZ_RENDER_SECTIONS = new Set([
    "mechanism",
    "timeline",
    "side-effects",
    "monitoring",
    "contraindications",
    "evidence-practice",
  ]);
  const renderedQuizCount = quizzes.filter((q) =>
    QUIZ_RENDER_SECTIONS.has(q.afterSectionId)
  ).length;

  // Helper: find quiz that should appear after a given section
  const quizAfter = (sectionId: string) => quizzes.find((q) => q.afterSectionId === sectionId);

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

      {/* Local learning-memory layer: records the visit, tracks
          genuinely-read sections, persists current position and
          evaluates course completion. Invisible. */}
      <SectionReadTracker
        drugSlug={drug.slug}
        title={drug.genericName}
        items={navItems}
      />

      {/* One global header owner: the fixed <Navbar> above. Like every
          other page (learn/study/quiz/drugs + this route's loading
          skeleton), main reserves its h-16 band with pt-16 so the
          breadcrumb starts BELOW the header instead of rendering
          underneath its transparent state. */}
      <main className="flex-1 pt-16 lg:pl-52 xl:pl-56">
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

        {/* Continue-where-you-left-off affordance (renders only on
            return visits with saved progress — hydration-safe) */}
        <ResumeBanner courseSlug={drug.slug} items={navItems} />

        {/* Lesson Progress indicator — sticky horizontal strip
            (hidden in Patient mode; patients follow the guide, not
            the exam course structure) */}
        {hasLessons && (
          <div className="sticky top-16 z-20">
            <PatientHidden>
              <LessonProgress lessons={lessons} />
            </PatientHidden>
          </div>
        )}

        {/* ===== LESSON 1: Foundations ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="top">
          <DrugHero drug={drug} patientGuide={patientGuide} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="quick-facts">
          <DrugQuickFacts drug={drug} patientGuide={patientGuide} />
          <PatientHidden>
            <HeroInfoStrip drug={drug} />
          </PatientHidden>
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="learning-objectives">
          <DrugLearningObjectives drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="knowledge-graph">
          <DrugKnowledgeGraph drug={drug} />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 1 (hidden in Patient mode — the
            messages reference exam content that is not visible there) */}
        {hasLessons && lessons[0] && (
          <Container>
            <PatientHidden>
              <Checkpoint
                lessonNumber={1}
                lessonTitle={lessons[0].title}
                message={lessons[0].checkpoint}
                nextLessonTitle={lessons[1]?.title}
              />
            </PatientHidden>
          </Container>
        )}

        {/* ===== LESSON 2: Mechanism & Neuroscience ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="mechanism">
          <DrugMechanismOfAction drug={drug} />
          {quizAfter("mechanism") && <Container><MicroQuiz courseSlug={drug.slug} courseQuizCount={renderedQuizCount} quiz={quizAfter("mechanism")!} /></Container>}
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
          {quizAfter("timeline") && <Container><MicroQuiz courseSlug={drug.slug} courseQuizCount={renderedQuizCount} quiz={quizAfter("timeline")!} /></Container>}
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 2 (hidden in Patient mode) */}
        {hasLessons && lessons[1] && (
          <Container>
            <PatientHidden>
              <Checkpoint
                lessonNumber={2}
                lessonTitle={lessons[1].title}
                message={lessons[1].checkpoint}
                nextLessonTitle={lessons[2]?.title}
              />
            </PatientHidden>
          </Container>
        )}

        {/* ===== LESSON 3: Clinical Practice ===== */}
        <GuidedLearningVisibility drug={drug} sectionId="clinical-uses">
          <DrugClinicalUses drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="side-effects">
          <DrugSideEffects drug={drug} />
          {quizAfter("side-effects") && <Container><MicroQuiz courseSlug={drug.slug} courseQuizCount={renderedQuizCount} quiz={quizAfter("side-effects")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="monitoring">
          <DrugMonitoring drug={drug} />
          {quizAfter("monitoring") && <Container><MicroQuiz courseSlug={drug.slug} courseQuizCount={renderedQuizCount} quiz={quizAfter("monitoring")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="contraindications">
          <DrugContraindications drug={drug} />
          {quizAfter("contraindications") && <Container><MicroQuiz courseSlug={drug.slug} courseQuizCount={renderedQuizCount} quiz={quizAfter("contraindications")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="evidence-practice">
          <EvidenceAndIndianPractice drug={drug} />
          {quizAfter("evidence-practice") && <Container><MicroQuiz courseSlug={drug.slug} courseQuizCount={renderedQuizCount} quiz={quizAfter("evidence-practice")!} /></Container>}
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="interactions">
          <DrugInteractions drug={drug} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="patient-education">
          {/* Patient mode gets the structured plain-language guide;
              every other mode keeps the canonical patient-education
              section (pharmacist-style counselling points). */}
          <PatientModeSwitch
            patient={
              patientGuide ? (
                <PatientGuideSection drug={drug} guide={patientGuide} />
              ) : (
                <DrugPatientEducation drug={drug} />
              )
            }
            medical={<DrugPatientEducation drug={drug} />}
          />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 3 (hidden in Patient mode) */}
        {hasLessons && lessons[2] && (
          <Container>
            <PatientHidden>
              <Checkpoint
                lessonNumber={3}
                lessonTitle={lessons[2].title}
                message={lessons[2].checkpoint}
                nextLessonTitle={lessons[3]?.title}
              />
            </PatientHidden>
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

        {/* Checkpoint after Lesson 4 (hidden in Patient mode) */}
        {hasLessons && lessons[3] && (
          <Container>
            <PatientHidden>
              <Checkpoint
                lessonNumber={4}
                lessonTitle={lessons[3].title}
                message={lessons[3].checkpoint}
                nextLessonTitle={lessons[4]?.title}
              />
            </PatientHidden>
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
          <DrugNavigationModule drug={drug} builtDrugSlugs={builtDrugSlugs} />
        </GuidedLearningVisibility>

        {/* Related Medications cross-links (NOW-N5) — the explicit
            relationship reasons from the related-drug schema, with
            graceful "coming soon" degradation for unbuilt pages.
            Visibility mirrors the Drug Navigation cluster. */}
        <GuidedLearningVisibility drug={drug} sectionId="drug-navigation">
          <DrugRelatedDrugs drug={drug} builtDrugSlugs={builtDrugSlugs} />
        </GuidedLearningVisibility>

        <GuidedLearningVisibility drug={drug} sectionId="high-yield-summary">
          <DrugHighYieldSummary drug={drug} />
        </GuidedLearningVisibility>

        {/* Checkpoint after Lesson 5 (hidden in Patient mode) */}
        {hasLessons && lessons[4] && (
          <Container>
            <PatientHidden>
              <Checkpoint
                lessonNumber={5}
                lessonTitle={lessons[4].title}
                message={lessons[4].checkpoint}
                nextLessonTitle={lessons[5]?.title}
              />
            </PatientHidden>
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

        {/* Checkpoint after Lesson 6 (final — hidden in Patient mode) */}
        {hasLessons && lessons[5] && (
          <Container>
            <PatientHidden>
              <Checkpoint
                lessonNumber={6}
                lessonTitle={lessons[5].title}
                message={lessons[5].checkpoint}
              />
            </PatientHidden>
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
