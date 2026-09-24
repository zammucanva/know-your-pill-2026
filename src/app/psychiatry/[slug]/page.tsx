import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Brain } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { getNoteBySlug, getAllNoteSlugs } from "@/lib/oxford/loader";
import { getGroupForSlug, relatedNotes } from "@/lib/oxford/curriculum";
import { LessonShell, type LessonRef } from "@/components/oxford/lesson-shell";
import { getPsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses";
import { PsychiatryCourseView } from "@/components/psychiatry/course/course-view";

/**
 * /psychiatry/[slug] — one KYP Psychiatry lesson per canonical note.
 *
 * The dynamic-route architecture (one implementation, 109 pages) with
 * static generation over the canonical note slugs.
 *
 * Learning-system layer: a slug with a migrated PsychiatryCourse in
 * the course registry renders the six-lesson KYP learning journey
 * (same URL, same progress store). Every other slug renders the
 * finalized note shell unchanged. The canonical notes are never
 * modified by the course layer.
 */

type Slug = string;

export function generateStaticParams(): { slug: Slug }[] {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return { title: "Lesson not found · KYP Psychiatry" };

  const title = `${note.frontmatter.title} — KYP Psychiatry`;
  const description =
    (note.tagline ? note.tagline.slice(0, 155) : undefined) ??
    `Learn ${note.frontmatter.title} through structured clinical learning, cases, active recall and self-testing.`;
  return {
    title,
    description,
    keywords: [
      note.frontmatter.title,
      note.frontmatter.category,
      "psychiatry",
      "KYP Psychiatry",
      ...(note.kind === "disorder" ? ["disorder", "clinical lesson"] : ["concept", "psychiatry science"]),
    ],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Know Your Pill",
    },
  };
}

export default async function PsychiatryLessonPage({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  // ── Learning-system dispatcher ──────────────────────────────
  // A migrated course replaces the note-shell rendering with the
  // six-lesson journey (same URL). Search metadata, breadcrumbs and
  // the note corpus are untouched — the course layer is additive.
  const course = getPsychiatryCourse(slug);
  if (course) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <FloatingSearch />
        <main className="flex-1 pt-16 lg:pl-52 xl:pl-56">
          <div className="border-b border-border/40 bg-muted/20">
            <Container>
              <nav className="flex items-center gap-2 py-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
                <Link href="/learn" className="hover:text-brand">Learn</Link>
                <span aria-hidden>/</span>
                <Link href="/psychiatry" className="hover:text-brand">Psychiatry</Link>
                <span aria-hidden>/</span>
                <span className="font-medium text-foreground">{course.title}</span>
              </nav>
            </Container>
          </div>
          <PsychiatryCourseView course={course} />
        </main>
        <Footer />
      </div>
    );
  }

  const group = getGroupForSlug(slug);
  const related = relatedNotes(note, 6).map((n) => ({
    slug: n.frontmatter.slug,
    title: n.frontmatter.title,
    tagline: n.tagline,
    priorityLabel: n.frontmatter.priority,
    readingMinutes: n.readingMinutes,
    mcqCount: n.mcqs.length,
  }));

  // Curriculum neighbours — same group, library order. The bottom
  // prev/next cards use real adjacency only (never fabricated).
  const toRef = (s: string | undefined): LessonRef | null => {
    if (!s) return null;
    const n = getNoteBySlug(s);
    if (!n) return null;
    return {
      slug: n.frontmatter.slug,
      title: n.frontmatter.title,
      priorityLabel: n.frontmatter.priority,
      readingMinutes: n.readingMinutes,
    };
  };
  const idx = group ? group.noteSlugs.indexOf(slug) : -1;
  const prevLesson =
    idx > 0 ? toRef(group!.noteSlugs[idx - 1]) : null;
  const nextLesson =
    idx >= 0 && idx < (group?.noteSlugs.length ?? 0) - 1
      ? toRef(group!.noteSlugs[idx + 1])
      : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch />
      <LessonShell
        note={note}
        groupName={group?.name ?? null}
        groupLetter={group?.letter ?? null}
        related={related}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        selfTestHref="/psychiatry/self-test"
      />
      <Footer />
    </div>
  );
}
