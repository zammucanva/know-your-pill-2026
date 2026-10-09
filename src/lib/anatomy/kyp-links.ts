/**
 * KYP learning links for the anatomy inspector.
 *
 * The anatomy data (structures.ts) references drugs, disorders and
 * neurotransmitters by short ids. This module resolves those ids to REAL
 * KYP destinations. An id with no matching KYP page resolves to nothing,
 * so the inspector never shows a link that leads nowhere.
 *
 * The tables below were checked against the site's registries when this
 * module was written:
 *   drugs      -> src/lib/kyp/data/drugs/<slug>.ts            (/drugs/<slug>)
 *   disorders  -> src/lib/kyp/data/diseases + psychiatry-courses
 *   transmitters -> the "Neurotransmitters & Signalling" lesson
 * To connect another structure to a lesson, add the id here (and check the
 * destination exists).
 */

export interface LearningLink {
  /** Display name (matches the destination page's own title). */
  name: string;
  /** Short context line, e.g. drug class. */
  subtitle?: string;
  /** Internal KYP route (passed to next/link, so basePath is applied). */
  href: string;
}

const DRUGS: Record<string, LearningLink> = {
  diazepam: { name: "Diazepam", subtitle: "Benzodiazepine", href: "/drugs/diazepam" },
  donepezil: { name: "Donepezil", subtitle: "AChE Inhibitor", href: "/drugs/donepezil" },
  fluoxetine: { name: "Fluoxetine", subtitle: "SSRI", href: "/drugs/fluoxetine" },
  haloperidol: { name: "Haloperidol", subtitle: "Typical Antipsychotic", href: "/drugs/haloperidol" },
  risperidone: { name: "Risperidone", subtitle: "Atypical Antipsychotic", href: "/drugs/risperidone" },
};

const DISORDERS: Record<string, LearningLink> = {
  schizophrenia: { name: "Schizophrenia", subtitle: "Psychiatry lesson", href: "/psychiatry/schizophrenia" },
  adhd: { name: "ADHD", subtitle: "Psychiatry lesson", href: "/psychiatry/adhd" },
  ptsd: { name: "Post-Traumatic Stress Disorder (PTSD)", subtitle: "Psychiatry lesson", href: "/psychiatry/ptsd" },
  "alzheimer-disease": { name: "Alzheimer's Disease & Dementia", subtitle: "Psychiatry lesson", href: "/psychiatry/alzheimers-dementia" },
  anxiety: { name: "Generalized Anxiety Disorder (GAD)", subtitle: "Psychiatry lesson", href: "/psychiatry/gad" },
  "huntington-disease": { name: "Huntington's Disease Psychiatry", subtitle: "Psychiatry lesson", href: "/psychiatry/huntingtons-neuropsychiatry" },
  depression: { name: "Major Depressive Disorder", subtitle: "Disease page", href: "/diseases/major-depressive-disorder" },
};

const NEUROTRANSMITTERS: Record<string, string> = {
  acetylcholine: "Acetylcholine (ACh)",
  dopamine: "Dopamine (DA)",
  gaba: "GABA",
  glutamate: "Glutamate",
  histamine: "Histamine (HA)",
  norepinephrine: "Norepinephrine (NE)",
  serotonin: "Serotonin (5-HT)",
};
const NEUROTRANSMITTER_HREF = "/psychiatry/neurotransmitters";

/** Resolve a list of ids against a table; unknown ids are dropped. */
function pick(ids: readonly string[] | undefined, table: Record<string, LearningLink>): LearningLink[] {
  return (ids ?? []).map((id) => table[id]).filter((l): l is LearningLink => !!l);
}

export function resolveDrugLinks(ids?: readonly string[]): LearningLink[] {
  return pick(ids, DRUGS);
}
export function resolveDisorderLinks(ids?: readonly string[]): LearningLink[] {
  return pick(ids, DISORDERS);
}
export function resolveNeurotransmitterLinks(ids?: readonly string[]): LearningLink[] {
  return (ids ?? [])
    .filter((id) => NEUROTRANSMITTERS[id])
    .map((id) => ({ name: NEUROTRANSMITTERS[id], subtitle: "Neurotransmitters & Signalling lesson", href: NEUROTRANSMITTER_HREF }));
}

/** Generic learning entry points shown when nothing is selected. */
export const GENERAL_LEARNING_LINKS: LearningLink[] = [
  { name: "Neurotransmitters & Signalling", subtitle: "How brain circuits communicate", href: NEUROTRANSMITTER_HREF },
  { name: "Medication Library", subtitle: "How each drug acts on the brain", href: "/drugs" },
  { name: "Psychiatry curriculum", subtitle: "Disorders taught lesson by lesson", href: "/psychiatry" },
];
