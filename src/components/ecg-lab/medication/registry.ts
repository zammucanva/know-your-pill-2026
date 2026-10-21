import { loadContentRegistry, type RegistryLoadResult } from '../content/registry';
import type { ContentRecord, MedicationRecord } from '../content/types';
import { medicationDrafts } from './records';

/**
 * The medication registry goes through the same loader as lessons, so a record that fails
 * validation (including the dosing and evidence rules) is withheld, never repaired or substituted.
 */
export const medicationRegistry: RegistryLoadResult = loadContentRegistry(medicationDrafts, issue => {
  console.warn(`[ECG Medication content] ${issue.path}: ${issue.message}`);
});

export const isMedication = (record: ContentRecord): record is MedicationRecord => record.type === 'medication';

/** Only records that passed every publication gate. This is what learners see. */
export const publishedMedications = (registry: RegistryLoadResult = medicationRegistry): MedicationRecord[] =>
  registry.published.filter(isMedication);

/** Every valid record, including drafts. Used only by the explicit authoring preview. */
export const allValidMedications = (registry: RegistryLoadResult = medicationRegistry): MedicationRecord[] =>
  registry.records.filter(isMedication);

/**
 * Learners get published records only. Drafts need an explicit preview request, which the interface
 * labels everywhere; they are never mixed in silently.
 */
export const visibleMedications = (registry: RegistryLoadResult = medicationRegistry, preview = false): MedicationRecord[] =>
  preview ? allValidMedications(registry) : publishedMedications(registry);

/** True only for the documented authoring URL flag. */
export const isPreviewRequested = (search: string): boolean => new URLSearchParams(search).get('medication-preview') === 'drafts';
