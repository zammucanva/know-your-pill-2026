import type { Metadata } from "next";

import { loadCorpus } from "@/lib/oxford/loader";
import { LEARNER_SECTION_ORDER } from "@/lib/oxford/curriculum";
import { getPsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses";
import {
  SelfTestClient,
  type SelfTestGroup,
  type SelfTestQuestion,
} from "./self-test-client";

/**
 * /psychiatry/self-test — server shell for the Psychiatry Self-Test.
 * Questions come from the canonical notes via the loader; the notes
 * remain the single authority for question content. Lesson titles use
 * the curriculum-normalized course layer (all 109 migrated) so the
 * quiz names lessons exactly as the library and course pages do.
 */
export const metadata: Metadata = {
  title: "Psychiatry Self-Test. KYP Psychiatry",
  description:
    "Mixed MCQ practice across the whole psychiatry curriculum: 719 authored questions with explanations, by domain or all at once.",
  keywords: ["psychiatry self-test", "psychiatry MCQs", "psychiatry practice questions", "KYP Psychiatry"],
  openGraph: {
    title: "Psychiatry Self-Test. KYP Psychiatry",
    description: "Mixed MCQ practice across the psychiatry curriculum, with explanations.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function SelfTestPage() {
  const corpus = loadCorpus();

  const groupCountByLetter = new Map<string, number>();
  const questions: SelfTestQuestion[] = [];
  for (const note of corpus.notes) {
    const group = corpus.groupBySlug.get(note.frontmatter.slug);
    // Curriculum-normalized lesson title (course layer; note frontmatter
    // is the immutable fallback).
    const lessonTitle =
      getPsychiatryCourse(note.frontmatter.slug)?.title ?? note.frontmatter.title;
    for (const mcq of note.mcqs) {
      const letter = group?.letter ?? "?";
      questions.push({
        id: mcq.id,
        noteSlug: note.frontmatter.slug,
        noteTitle: lessonTitle,
        groupLetter: letter,
        question: mcq.question,
        options: mcq.options,
        correctIndex: mcq.correctIndex,
        explanation: mcq.explanation,
      });
      groupCountByLetter.set(letter, (groupCountByLetter.get(letter) ?? 0) + 1);
    }
  }

  const groups: SelfTestGroup[] = [...corpus.groups]
    // Curriculum normalization: Foundations & sciences first —
    // LEARNER_SECTION_ORDER is the single ordering authority (shared
    // with the hub, library and course-to-course navigation).
    .sort(
      (a, b) =>
        LEARNER_SECTION_ORDER.indexOf(a.letter as never) -
        LEARNER_SECTION_ORDER.indexOf(b.letter as never)
    )
    .map((g) => ({
      letter: g.letter,
      name: g.name,
      count: groupCountByLetter.get(g.letter) ?? 0,
    }));

  return (
    <SelfTestClient
      questions={questions}
      groups={groups}
      noteCount={corpus.noteCount}
    />
  );
}
