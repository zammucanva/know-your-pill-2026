/**
 * KYP Psychiatry — search records.
 *
 * Builds SearchableItem records for the universal KYP search index from
 * the canonical notes. The records are KYP-first: the source textbook
 * never appears as searchable public branding. Provenance stays in the
 * note layer (Sources & References).
 *
 * Records added: 1 hub entry + 1 library entry + 109 note entries.
 * The quiz/self-test surface is reached from the hub and every lesson.
 */
import type { SearchableItem } from "@/lib/kyp/data/types";
import { loadCorpus } from "./loader";
import { priorityMeta } from "./learn";
import { getPsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses";

export function buildPsychiatrySearchRecords(): SearchableItem[] {
  const corpus = loadCorpus();
  const records: SearchableItem[] = [];

  // Course-layer type counts (the learner-facing classification —
  // treatment/services/law topics are concepts here even when the
  // source note used the 16-section disorder template).
  const courseRecords = corpus.notes
    .map((note) => ({ note, course: getPsychiatryCourse(note.frontmatter.slug) }))
    .filter(({ course }) => Boolean(course));
  const conceptCount = courseRecords.filter(({ course }) => course!.kind === "concept").length;
  const disorderCount = courseRecords.length - conceptCount;

  // Hub + library entries
  records.push({
    id: "psychiatry-hub",
    title: "KYP Psychiatry",
    type: "psychiatry-note",
    description: `The KYP Psychiatry curriculum: ${corpus.noteCount} structured lessons across ${corpus.groups.length} clinical domains, ${corpus.mcqCount} self-test questions.`,
    href: "/psychiatry",
    keywords: [
      "psychiatry",
      "kyp psychiatry",
      "psychiatry library",
      "psychiatry curriculum",
      "mental health learning",
      "psychiatry notes",
      "psychiatric disorders",
    ],
  });
  records.push({
    id: "psychiatry-library",
    title: "Psychiatry Library",
    type: "psychiatry-note",
    description: `Browse all ${corpus.noteCount} psychiatry lessons: ${disorderCount} disorder courses and ${conceptCount} concept lessons, filterable by domain, tier and progress.`,
    href: "/psychiatry/library",
    keywords: [
      "psychiatry library",
      "browse psychiatry",
      "psychiatry curriculum",
      "all psychiatry topics",
      "psychiatry domains",
      "disorder courses list",
    ],
  });

  // One record per note — curriculum-normalized identity (course-layer
  // title/tagline/type; the note frontmatter is the immutable fallback).
  for (const note of corpus.notes) {
    const course = getPsychiatryCourse(note.frontmatter.slug);
    const title = course?.title ?? note.frontmatter.title;
    const kind = course?.kind ?? note.kind;
    const { category, priority } = note.frontmatter;
    const group = corpus.groupBySlug.get(note.frontmatter.slug);
    const prio = priorityMeta(priority).label;
    records.push({
      id: `psychiatry-${note.frontmatter.slug}`,
      title,
      type: "psychiatry-note",
      description:
        (course?.tagline ?? note.tagline ??
          `${category} ${kind === "disorder" ? "lesson" : "concept lesson"} (${prio}).`) +
        ` ~${note.readingMinutes} min read${note.mcqs.length ? ` · ${note.mcqs.length} questions` : ""}` +
        (group ? ` · ${group.name}` : ""),
      href: `/psychiatry/${note.frontmatter.slug}`,
      keywords: [
        title.toLowerCase(),
        note.frontmatter.slug.replace(/-/g, " "),
        note.frontmatter.title.toLowerCase(),
        category.toLowerCase(),
        group?.name.toLowerCase() ?? "",
        kind === "disorder" ? "disorder" : "concept",
        "psychiatry",
        "kyp psychiatry",
        `group ${group?.letter.toLowerCase() ?? ""}`,
        prio.toLowerCase(),
      ].filter(Boolean),
    });
  }

  return records;
}
