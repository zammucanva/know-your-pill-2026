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

export function buildPsychiatrySearchRecords(): SearchableItem[] {
  const corpus = loadCorpus();
  const records: SearchableItem[] = [];

  // Hub + library entries
  records.push({
    id: "psychiatry-hub",
    title: "KYP Psychiatry",
    type: "psychiatry-note",
    description: `The KYP Psychiatry curriculum — ${corpus.noteCount} structured lessons across ${corpus.groups.length} clinical domains, ${corpus.mcqCount} self-test questions.`,
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
    description: `Browse all ${corpus.noteCount} psychiatry lessons — ${corpus.disorderCount} disorder courses and ${corpus.conceptCount} concept notes, filterable by domain, priority and progress.`,
    href: "/psychiatry/library",
    keywords: [
      "psychiatry library",
      "browse psychiatry",
      "psychiatry curriculum",
      "all psychiatry topics",
      "psychiatry domains",
      "disorder notes list",
    ],
  });

  // One record per note
  for (const note of corpus.notes) {
    const { title, slug, category, priority } = note.frontmatter;
    const group = corpus.groupBySlug.get(slug);
    const prio = priorityMeta(priority).label;
    records.push({
      id: `psychiatry-${slug}`,
      title,
      type: "psychiatry-note",
      description:
        (note.tagline ??
          `${category} ${note.kind === "disorder" ? "lesson" : "concept note"} — ${prio}.`) +
        ` ~${note.readingMinutes} min${note.mcqs.length ? ` · ${note.mcqs.length} MCQs` : ""}` +
        (group ? ` · ${group.name}` : ""),
      href: `/psychiatry/${slug}`,
      keywords: [
        title.toLowerCase(),
        slug.replace(/-/g, " "),
        category.toLowerCase(),
        group?.name.toLowerCase() ?? "",
        note.kind === "disorder" ? "disorder" : "concept",
        "psychiatry",
        "kyp psychiatry",
        `group ${group?.letter.toLowerCase() ?? ""}`,
        prio.toLowerCase(),
      ].filter(Boolean),
    });
  }

  return records;
}
