import type { MedicationRecord } from '../content/types';

/**
 * KYP ships the Medication Center machinery (content schema, publication gates, search and the
 * screen) with no profiles. The standalone ECG Lab repository holds five draft profiles for cardiac
 * medicines; they were deliberately not carried into KYP, because KYP never carries clinical text
 * without a verified source and its medication library is a psychiatric one. Profiles belong here
 * only with verified sources and real review records, and they will show to learners only once
 * every publication gate in `content/validation.ts` passes.
 */
export const medicationDrafts: MedicationRecord[] = [];
