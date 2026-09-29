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
import { gadCourse } from "./gad";
import { socialAnxietyPhobiasCourse } from "./social-anxiety-phobias";
import { panicDisorderCourse } from "./panic-disorder";
import { ocdCourse } from "./ocd";
import { impulseControlDisordersCourse } from "./impulse-control-disorders";
import { gamblingDisorderCourse } from "./gambling-disorder";
import { anorexiaNervosaCourse } from "./anorexia-nervosa";
import { bulimiaNervosaCourse } from "./bulimia-nervosa";
import { sexualDysfunctionsCourse } from "./sexual-dysfunctions";
import { paraphiliasCourse } from "./paraphilias";
import { genderIdentityAdultsCourse } from "./gender-identity-adults";
import { personalityDisordersOverviewCourse } from "./personality-disorders-overview";
import { personalityDisorderTypesCourse } from "./personality-disorder-types";
import { personalityDisorderTreatmentCourse } from "./personality-disorder-treatment";
import { sleepBasicsCourse } from "./sleep-basics";
import { insomniaCourse } from "./insomnia";
import { hypersomniaCourse } from "./hypersomnia";
import { parasomniasCourse } from "./parasomnias";
import { deliriumCourse } from "./delirium";
import { alzheimersDementiaCourse } from "./alzheimers-dementia";
import { frontotemporalDementiaCourse } from "./frontotemporal-dementia";
import { prionDiseaseCourse } from "./prion-disease";
import { lewyBodyDementiaCourse } from "./lewy-body-dementia";
import { parkinsonsDementiaCourse } from "./parkinsons-dementia";
import { huntingtonsNeuropsychiatryCourse } from "./huntingtons-neuropsychiatry";
import { vascularDementiaCourse } from "./vascular-dementia";
import { hivNeuropsychiatryCourse } from "./hiv-neuropsychiatry";
import { tbiNeuropsychiatryCourse } from "./tbi-neuropsychiatry";
import { alcoholRelatedDementiaCourse } from "./alcohol-related-dementia";
import { amnesicSyndromesCourse } from "./amnesic-syndromes";
import { dementiaManagementCourse } from "./dementia-management";
import { memoryRehabilitationCourse } from "./memory-rehabilitation";

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
 * recovered-memories. Batch 3 (Groups F + G — anxiety disorders and
 * OCD/impulse/habit): gad, social-anxiety-phobias, panic-disorder, ocd,
 * impulse-control-disorders, gambling-disorder. Batch 4 (Groups H + I —
 * eating disorders and sexuality/gender): anorexia-nervosa,
 * bulimia-nervosa, sexual-dysfunctions, paraphilias,
 * gender-identity-adults. Batch 5 (Groups J + K — personality
 * disorders and sleep-wake): personality-disorders-overview,
 * personality-disorder-types, personality-disorder-treatment,
 * sleep-basics, insomnia, hypersomnia, parasomnias. Batch 6 (Group A
 * — neurocognitive disorders, first half): delirium,
 * alzheimers-dementia, frontotemporal-dementia, prion-disease,
 * lewy-body-dementia, parkinsons-dementia,
 * huntingtons-neuropsychiatry. Batch 7 (Group A — neurocognitive
 * disorders, second half): vascular-dementia, hiv-neuropsychiatry,
 * tbi-neuropsychiatry, alcohol-related-dementia, amnesic-syndromes,
 * dementia-management (concept), memory-rehabilitation (concept).
 * The completion matrix generator audits coverage.
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
  gadCourse,
  socialAnxietyPhobiasCourse,
  panicDisorderCourse,
  ocdCourse,
  impulseControlDisordersCourse,
  gamblingDisorderCourse,
  anorexiaNervosaCourse,
  bulimiaNervosaCourse,
  sexualDysfunctionsCourse,
  paraphiliasCourse,
  genderIdentityAdultsCourse,
  personalityDisordersOverviewCourse,
  personalityDisorderTypesCourse,
  personalityDisorderTreatmentCourse,
  sleepBasicsCourse,
  insomniaCourse,
  hypersomniaCourse,
  parasomniasCourse,
  deliriumCourse,
  alzheimersDementiaCourse,
  frontotemporalDementiaCourse,
  prionDiseaseCourse,
  lewyBodyDementiaCourse,
  parkinsonsDementiaCourse,
  huntingtonsNeuropsychiatryCourse,
  vascularDementiaCourse,
  hivNeuropsychiatryCourse,
  tbiNeuropsychiatryCourse,
  alcoholRelatedDementiaCourse,
  amnesicSyndromesCourse,
  dementiaManagementCourse,
  memoryRehabilitationCourse,
];

export function getPsychiatryCourse(slug: string): PsychiatryCourse | null {
  return psychiatryCourses.find((c) => c.slug === slug) ?? null;
}

export function getPsychiatryCourseSlugs(): string[] {
  return psychiatryCourses.map((c) => c.slug);
}
