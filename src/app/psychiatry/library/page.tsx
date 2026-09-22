import type { Metadata } from "next";

import { loadCorpus, corpusStats } from "@/lib/oxford/loader";
import { LibraryClient, type LibraryGroup } from "./library-client";

/**
 * /psychiatry/library — server shell for the KYP Psychiatry Library.
 *
 * The group/ordering authority is the canonical topic index
 * (00-topic-index.md); notes are read-only. Learner progress numbers
 * are merged in client-side (localStorage) — the server render shows
 * the curriculum itself.
 */
export const metadata: Metadata = {
  title: "Psychiatry Library — KYP Psychiatry",
  description:
    "Browse the full psychiatry curriculum — 109 lessons across 18 clinical domains, filterable by domain, importance, format and progress.",
  keywords: ["psychiatry library", "psychiatry curriculum", "psychiatry topics", "KYP Psychiatry"],
  openGraph: {
    title: "Psychiatry Library — KYP Psychiatry",
    description: "109 lessons across 18 clinical domains — the full psychiatry curriculum.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function LibraryPage() {
  const corpus = loadCorpus();
  const stats = corpusStats();

  const groups: LibraryGroup[] = corpus.groups.map((g) => ({
    letter: g.letter,
    name: g.name,
    notes: g.noteSlugs
      .map((slug) => corpus.bySlug.get(slug))
      .filter((n): n is NonNullable<typeof n> => Boolean(n))
      .map((n) => ({
        slug: n.frontmatter.slug,
        title: n.frontmatter.title,
        tagline: n.tagline,
        priority: n.frontmatter.priority,
        readingMinutes: n.readingMinutes,
        mcqCount: n.mcqs.length,
        kind: n.kind,
        completedSections: 0,
        totalSections: n.sections.filter((s) => s.number !== 2).length,
      })),
  }));

  return <LibraryClient groups={groups} />;
}
