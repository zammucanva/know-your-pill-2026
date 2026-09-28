import type { PsychiatryCourse } from "./types";
import { depressiveDisordersCourse } from "./depressive-disorders";
import { schizophreniaCourse } from "./schizophrenia";
import { neurotransmittersCourse } from "./neurotransmitters";
import { schizoaffectiveSchizotypalCourse } from "./schizoaffective-schizotypal";
import { acuteTransientPsychosisCourse } from "./acute-transient-psychosis";
import { delusionalDisorderCourse } from "./delusional-disorder";
import { bipolarDisordersCourse } from "./bipolar-disorders";
import { persistentMoodDisordersCourse } from "./persistent-mood-disorders";
import { suicideSelfHarmCourse } from "./suicide-self-harm";
import { acuteStressReactionCourse } from "./acute-stress-reaction";
import { ptsdCourse } from "./ptsd";
import { adjustmentDisorderCourse } from "./adjustment-disorder";
import { bereavementCourse } from "./bereavement";
import { depersonalizationDisorderCourse } from "./depersonalization-disorder";
import { recoveredMemoriesCourse } from "./recovered-memories";

/**
 * Psychiatry learning-system course registry.
 *
 * A course here REPLACES the note-driven lesson rendering for its slug
 * (same URL) with the six-lesson KYP learning journey. Every other
 * slug continues to render through the finalized note shell unchanged.
 *
 * Migration is deliberately incremental (learning-system brief §35–37):
 * pilot first (three validated pilots — depression, schizophrenia,
 * neurotransmitters), then controlled batches after the pilot approval
 * gate. Batch 1 (Groups C + D completion): schizoaffective-schizotypal,
 * acute-transient-psychosis, delusional-disorder, bipolar-disorders,
 * persistent-mood-disorders, suicide-self-harm. Batch 2 (Group E —
 * stress, trauma & dissociation-spectrum): acute-stress-reaction, ptsd,
 * adjustment-disorder, bereavement, depersonalization-disorder,
 * recovered-memories. The completion matrix generator audits coverage.
 */
export const psychiatryCourses: PsychiatryCourse[] = [
  depressiveDisordersCourse,
  schizophreniaCourse,
  neurotransmittersCourse,
  schizoaffectiveSchizotypalCourse,
  acuteTransientPsychosisCourse,
  delusionalDisorderCourse,
  bipolarDisordersCourse,
  persistentMoodDisordersCourse,
  suicideSelfHarmCourse,
  acuteStressReactionCourse,
  ptsdCourse,
  adjustmentDisorderCourse,
  bereavementCourse,
  depersonalizationDisorderCourse,
  recoveredMemoriesCourse,
];

export function getPsychiatryCourse(slug: string): PsychiatryCourse | null {
  return psychiatryCourses.find((c) => c.slug === slug) ?? null;
}

export function getPsychiatryCourseSlugs(): string[] {
  return psychiatryCourses.map((c) => c.slug);
}
