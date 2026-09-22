import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Brain } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { getNoteBySlug, getAllNoteSlugs } from "@/lib/oxford/loader";
import { getGroupForSlug, relatedNotes } from "@/lib/oxford/curriculum";
import { LessonShell } from "@/components/oxford/lesson-shell";

/**
 * /psychiatry/[slug] — one KYP Psychiatry lesson per canonical note.
 *
 * The dynamic-route architecture (one implementation, 109 pages) with
 * static generation over the canonical note slugs. The note content is
 * rendered through the existing learning presentation layer; nothing is
 * duplicated per note.
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

  const group = getGroupForSlug(slug);
  const related = relatedNotes(note, 6).map((n) => ({
    slug: n.frontmatter.slug,
    title: n.frontmatter.title,
    tagline: n.tagline,
    priorityLabel: n.frontmatter.priority,
    readingMinutes: n.readingMinutes,
    mcqCount: n.mcqs.length,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch />
      <LessonShell
        note={note}
        groupName={group?.name ?? null}
        groupLetter={group?.letter ?? null}
        related={related}
        selfTestHref="/psychiatry/self-test"
      />
      <Footer />
    </div>
  );
}
