import { useEffect, useMemo, useRef, useState } from 'react';
import { medicationGroups, medicationSectionKinds } from '../content/schema';
import type { MedicationRecord } from '../content/types';
import {
  groupLabels, MAX_QUERY_LENGTH, missingSectionKinds, resolveRelated, reviewStatusLabel, searchMedications, sectionEvidence, sectionLabels,
  type ClaimEvidence, type MedicationGroup, type RelatedLink,
} from './search';

type MedicationCenterProps = {
  /** Records the learner may see: published only, unless the authoring preview was explicitly requested. */
  records: readonly MedicationRecord[];
  /** True only for the authoring preview, which shows unreviewed drafts and labels them everywhere. */
  preview: boolean;
  /** Published, eligible content that a profile may link to. */
  publishedLessons: readonly RelatedLink[];
  onOpenLearn: () => void;
};

const evidenceText: Record<ClaimEvidence['status'], string> = {
  'no-source': 'no source attached',
  unverified: 'source attached but not verified',
  'source-verified': 'source verified',
  'source-and-rights-verified': 'source and rights verified',
};

export function MedicationCenter({ records, preview, publishedLessons, onOpenLearn }: MedicationCenterProps) {
  const [text, setText] = useState('');
  const [group, setGroup] = useState<MedicationGroup | 'all'>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (openId) headingRef.current?.focus();
  }, [openId]);

  const outcome = useMemo(() => searchMedications(records, { text, group }), [records, text, group]);
  const open = openId ? records.find(record => record.id === openId) : undefined;

  const notice = (
    <>
      <p className="medication-notice" role="note">Educational information only. This is not a prescribing tool: it gives no doses and no advice about any patient.</p>
      {preview && <p className="medication-preview" role="note">Authoring preview: these are draft, unreviewed records shown only so authors can check them. They are not approved for learners.</p>}
    </>
  );

  // ───────────────────────── Profile ─────────────────────────
  if (openId) {
    if (!open) {
      return (
        <section className="medication" aria-labelledby="medication-heading">
          <h2 id="medication-heading">Profile unavailable</h2>
          <p className="challenge-error" role="alert">This profile is not available.</p>
          <button type="button" className="cta" onClick={() => setOpenId(null)}>Back to medicines</button>
        </section>
      );
    }
    const missing = missingSectionKinds(open);
    const related = resolveRelated(open, publishedLessons);
    const isDraft = open.publicationStatus !== 'published';
    return (
      <section className="medication" aria-labelledby="medication-title">
        <p className="eyebrow">MEDICATION CENTER</p>
        <h2 id="medication-title" ref={headingRef} tabIndex={-1}>{open.medication.genericName}</h2>
        {notice}
        <p className={isDraft ? 'medication-status draft' : 'medication-status'}><strong>Status:</strong> {reviewStatusLabel(open)} · version {open.version}</p>
        <dl className="medication-facts">
          <div><dt>Drug group</dt><dd>{groupLabels[open.medication.drugGroup]}</dd></div>
          <div><dt>Class</dt><dd>{open.medication.drugClass}</dd></div>
        </dl>
        <p>{open.summary}</p>
        <h3>Learning objective</h3>
        <ul>{open.learningObjectives.map(objective => <li key={objective.id}>{objective.statement}</li>)}</ul>

        {medicationSectionKinds.map(kind => {
          const sections = open.medication.sections.filter(section => section.kind === kind);
          return (
            <section key={kind} className="medication-section" aria-labelledby={`med-${kind}`}>
              <h3 id={`med-${kind}`}>{sectionLabels[kind]}</h3>
              {sections.length === 0 ? (
                <p className="challenge-note">Not yet written. This section needs specific sourced evidence before it can appear.</p>
              ) : sections.map(section => {
                const evidence = sectionEvidence(open, section.id);
                return (
                  <div key={section.id}>
                    <h4>{section.title}</h4>
                    <p>{section.body}</p>
                    <p className="challenge-note">
                      Evidence: {evidence.map(item => evidenceText[item.status]).filter((value, index, all) => all.indexOf(value) === index).join('; ')}
                      {evidence.some(item => item.sourceTitles.length > 0) ? ` (${[...new Set(evidence.flatMap(item => item.sourceTitles))].join('; ')})` : ''}
                    </p>
                  </div>
                );
              })}
            </section>
          );
        })}
        {missing.length > 0 && <p className="challenge-note">Sections not yet written: {missing.map(kind => sectionLabels[kind].toLowerCase()).join(', ')}.</p>}

        <h3>Related lessons</h3>
        {related.length === 0 ? <p className="challenge-note">No related lessons are published yet. Links appear here only for published, reviewed lessons.</p>
          : <ul>{related.map(item => <li key={item.id}>{item.title} <button type="button" className="cta secondary" onClick={onOpenLearn}>Open in Learn</button></li>)}</ul>}

        <h3>Known limitations</h3>
        <ul>{open.knownLimitations.map(item => <li key={item}>{item}</li>)}</ul>
        <div className="challenge-actions">
          <button type="button" className="cta secondary" onClick={() => setOpenId(null)}>Back to medicines</button>
        </div>
      </section>
    );
  }

  // ───────────────────────── List ─────────────────────────
  return (
    <section className="medication" aria-labelledby="medication-heading">
      <p className="eyebrow">MEDICATION CENTER</p>
      <h2 id="medication-heading">Medicines and the ECG</h2>
      <p className="lede">Structured educational profiles of medicines that matter when reading an ECG. A profile is shown to learners only after its claims have verified sources, and it has passed educational review, qualified medical review and publication approval.</p>
      {notice}

      {records.length === 0 ? (
        <div className="medication-empty">
          <p><strong>No medication profiles have been published yet.</strong></p>
          <p>Nothing here is shown until it has passed every check. Draft profiles exist but are withheld because their claims have no verified sources and no reviewer has approved them.</p>
        </div>
      ) : (
        <>
          <div className="medication-search">
            <label>Search medicines
              <input type="search" value={text} maxLength={MAX_QUERY_LENGTH} onChange={event => setText(event.target.value)} placeholder="Name, class or term" />
            </label>
            <label>Drug group
              <select value={group} onChange={event => setGroup(event.target.value as MedicationGroup | 'all')}>
                <option value="all">All groups</option>
                {medicationGroups.map(value => <option key={value} value={value}>{groupLabels[value]}</option>)}
              </select>
            </label>
          </div>
          <p className="challenge-note" role="status" aria-live="polite">
            {outcome.results.length === 1 ? '1 medicine shown.' : `${outcome.results.length} medicines shown.`}
          </p>
          {outcome.results.length === 0 ? (
            <div className="medication-empty">
              <p>No medicine matches this search.</p>
              <button type="button" className="cta secondary" onClick={() => { setText(''); setGroup('all'); }}>Clear search and filter</button>
            </div>
          ) : (
            <ul className="medication-list" aria-label="Medicines">
              {outcome.results.map(record => (
                <li key={record.id} className="patient-card">
                  <div>
                    <strong>{record.medication.genericName}</strong>
                    <span>{groupLabels[record.medication.drugGroup]} · {record.medication.drugClass}</span>
                    {record.publicationStatus !== 'published' && <small>{reviewStatusLabel(record)}</small>}
                  </div>
                  <button type="button" className="cta secondary" onClick={() => setOpenId(record.id)} aria-label={`Open profile: ${record.medication.genericName}`}>Open profile</button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}
