import { getPublishedLessons, loadContentRegistry } from '../registry';
import { introductoryLearnDrafts } from './records';

export const learnRegistry = loadContentRegistry(introductoryLearnDrafts, issue => {
  console.warn(`[ECG Learn content] ${issue.path}: ${issue.message}`);
});

/** Only registry-approved published lesson records reach the learner UI. */
export const publishedLearnLessons = getPublishedLessons(learnRegistry);

export { introductoryKnowledgeChecks, introductoryLessons } from './records';
