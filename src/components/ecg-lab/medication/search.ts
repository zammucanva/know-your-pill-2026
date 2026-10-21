import type { MedicationRecord } from '../content/types';
import { medicationGroups, medicationSectionKinds } from '../content/schema';

export type MedicationGroup = (typeof medicationGroups)[number];
export type SectionKind = (typeof medicationSectionKinds)[number];

export const groupLabels: Record<MedicationGroup, string> = {
  'beta-blocker': 'Beta-blockers',
  'calcium-channel-blocker': 'Calcium channel blockers',
  'cardiac-glycoside': 'Cardiac glycosides',
  antiarrhythmic: 'Antiarrhythmics',
  other: 'Other',
};

export const sectionLabels: Record<SectionKind, string> = {
  mechanism: 'Mechanism of action',
  'educational-use': 'Educational uses',
  pharmacology: 'Relevant pharmacology',
  'ecg-effect': 'Potential ECG effects',
  safety: 'Safety considerations',
  interaction: 'Interactions',
};

export const MAX_QUERY_LENGTH = 100;

const normalise = (value: string) => value.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export type MedicationQuery = { text: string; group: MedicationGroup | 'all' };
export type SearchOutcome = {
  results: MedicationRecord[];
  /** Why the list is empty, so the interface can say the right thing. */
  emptyReason: 'nothing-available' | 'no-match' | null;
};

function score(record: MedicationRecord, tokens: string[]): number | null {
  const name = normalise(record.medication.genericName);
  const fields: [string, number][] = [
    [name, 100],
    ...record.medication.searchTerms.map((term): [string, number] => [normalise(term), 60]),
    [normalise(record.medication.drugClass), 40],
    [normalise(record.medication.drugGroup), 30],
    ...record.tags.map((tag): [string, number] => [normalise(tag), 20]),
    ...record.medication.sections.map((section): [string, number] => [normalise(section.title), 10]),
    [normalise(record.summary), 10],
  ];
  let total = 0;
  for (const token of tokens) {
    let best = 0;
    for (const [field, weight] of fields) {
      if (!field.includes(token)) continue;
      const bonus = field === token ? 20 : field.startsWith(token) ? 10 : 0;
      best = Math.max(best, weight + bonus);
    }
    if (best === 0) return null;
    total += best;
  }
  return total;
}

/** Every query word must match somewhere; results are ranked, then ordered by name for stability. */
export function searchMedications(records: readonly MedicationRecord[], query: MedicationQuery): SearchOutcome {
  if (records.length === 0) return { results: [], emptyReason: 'nothing-available' };
  const tokens = normalise(query.text.slice(0, MAX_QUERY_LENGTH)).split(' ').filter(Boolean);
  const inGroup = records.filter(record => query.group === 'all' || record.medication.drugGroup === query.group);
  const scored = inGroup
    .map(record => ({ record, value: tokens.length === 0 ? 0 : score(record, tokens) }))
    .filter((entry): entry is { record: MedicationRecord; value: number } => entry.value !== null)
    .sort((a, b) => b.value - a.value || a.record.medication.genericName.localeCompare(b.record.medication.genericName));
  const results = scored.map(entry => entry.record);
  return { results, emptyReason: results.length === 0 ? 'no-match' : null };
}

export type ClaimEvidence = { claimId: string; statement: string; status: 'no-source' | 'unverified' | 'source-verified' | 'source-and-rights-verified'; sourceTitles: string[] };

/** What evidence is actually attached to each claim of a section. Nothing is assumed. */
export function sectionEvidence(record: MedicationRecord, sectionId: string): ClaimEvidence[] {
  const section = record.medication.sections.find(item => item.id === sectionId);
  if (!section) return [];
  return section.claimIds.map(claimId => {
    const claim = record.claims?.find(item => item.id === claimId);
    const references = record.sourceReferences.filter(reference => reference.supports.some(link => link.kind === 'claim' && link.claimId === claimId));
    const best = references.find(reference => reference.verificationStatus === 'source-and-rights-verified')
      ?? references.find(reference => reference.verificationStatus === 'source-verified');
    const status: ClaimEvidence['status'] = references.length === 0 ? 'no-source' : best ? best.verificationStatus : 'unverified';
    return { claimId, statement: claim?.statement ?? '', status, sourceTitles: references.map(reference => reference.title) };
  });
}

/** Section kinds the record does not cover yet. They are shown as not written rather than hidden. */
export const missingSectionKinds = (record: MedicationRecord): SectionKind[] =>
  medicationSectionKinds.filter(kind => !record.medication.sections.some(section => section.kind === kind));

export type RelatedLink = { id: string; title: string };

/** Related content is shown only if it is in the supplied list of published, eligible items. */
export function resolveRelated(record: MedicationRecord, published: readonly RelatedLink[]): RelatedLink[] {
  return record.medication.relatedContentIds
    .map(id => published.find(item => item.id === id))
    .filter((item): item is RelatedLink => item !== undefined);
}

export const reviewStatusLabel = (record: MedicationRecord): string => {
  switch (record.publicationStatus) {
    case 'published': return 'Published: all source, review and approval checks passed';
    case 'reviewed-for-educational-use': return 'Reviewed for educational use, not yet published';
    case 'awaiting-review': return 'Awaiting review';
    case 'retired': return 'Retired';
    default: return 'Draft: unreviewed';
  }
};
