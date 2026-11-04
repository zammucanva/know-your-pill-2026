import type { ContentRecord, LessonRecord } from './types';
import { contentRecordSchema } from './schema';
import { validateContentRecord, type ContentIssue } from './validation';

export type RegistryRejection = { index: number; id?: string; content: unknown; issues: ContentIssue[] };
export type RegistryLoadResult = {
  records: ContentRecord[];
  published: ContentRecord[];
  rejected: RegistryRejection[];
  issues: ContentIssue[];
};

/** Parses registry input defensively; invalid entries are reported and withheld, never substituted. */
export function loadContentRegistry(input: unknown, onIssue?: (issue: ContentIssue) => void): RegistryLoadResult {
  if (!Array.isArray(input)) {
    const issue = { path: 'registry', message: 'Content registry must be an array.' };
    onIssue?.(issue);
    return { records: [], published: [], rejected: [{ index: -1, content: input, issues: [issue] }], issues: [issue] };
  }

  const issues: ContentIssue[] = [];
  const rejected: RegistryRejection[] = [];
  const structurallyValid: Array<{ index: number; content: unknown; record: ContentRecord }> = [];
  input.forEach((content, index) => {
    const parsed = contentRecordSchema.safeParse(content);
    if (!parsed.success) {
      const recordIssues = parsed.error.issues.map(issue => ({ path: `registry[${index}]${issue.path.length ? `.${issue.path.join('.')}` : ''}`, message: issue.message }));
      issues.push(...recordIssues);
      rejected.push({ index, content, issues: recordIssues });
      return;
    }
    structurallyValid.push({ index, content, record: parsed.data });
  });

  const counts = new Map<string, number>();
  structurallyValid.forEach(({ record }) => counts.set(record.id, (counts.get(record.id) ?? 0) + 1));
  const duplicateIds = new Set([...counts].filter(([, count]) => count > 1).map(([id]) => id));
  const uniqueEntries = structurallyValid.filter(entry => !duplicateIds.has(entry.record.id));
  for (const entry of structurallyValid) {
    if (duplicateIds.has(entry.record.id)) {
      const duplicateIssue = { path: `registry[${entry.index}].id`, message: `Duplicate content ID "${entry.record.id}"; every conflicting entry is withheld.` };
      issues.push(duplicateIssue);
      rejected.push({ index: entry.index, id: entry.record.id, content: entry.content, issues: [duplicateIssue] });
      continue;
    }
    if (entry.record.type === 'case' && entry.record.caseMaterial.waveformContentId) {
      const waveformId = entry.record.caseMaterial.waveformContentId;
      const linked = uniqueEntries.find(item => item.record.id === waveformId);
      if (!linked || linked.record.type !== 'waveform') {
        const linkIssue = {
          path: `registry[${entry.index}].caseMaterial.waveformContentId`,
          message: `Referenced waveform "${waveformId}" is missing or is not a waveform record.`,
        };
        issues.push(linkIssue);
        rejected.push({ index: entry.index, id: entry.record.id, content: entry.content, issues: [linkIssue] });
        continue;
      }
    }
    const validation = validateContentRecord(entry.record, structurallyValid.map(item => item.record));
    if (!validation.success) {
      const recordIssues = validation.issues.map(issue => ({ path: `registry[${entry.index}].${issue.path}`, message: issue.message }));
      issues.push(...recordIssues);
      rejected.push({ index: entry.index, id: entry.record.id, content: entry.content, issues: recordIssues });
    }
  }

  const rejectedIndexes = new Set(rejected.map(item => item.index));
  const validIndexes = new Set(structurallyValid.map(item => item.index).filter(index => !rejectedIndexes.has(index)));
  const records = structurallyValid.filter(item => validIndexes.has(item.index)).map(item => item.record);
  issues.forEach(issue => onIssue?.(issue));
  return { records, published: records.filter(record => record.publicationStatus === 'published'), rejected, issues };
}

/** Learner catalogs use only records that survived the registry's validation and publication gates. */
export function getPublishedLessons(registry: RegistryLoadResult): LessonRecord[] {
  return registry.published
    .filter((record): record is LessonRecord => record.type === 'lesson')
    .sort((left, right) => left.lessonContent.sequence - right.lessonContent.sequence || left.id.localeCompare(right.id));
}
