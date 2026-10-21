import { useEffect, useMemo, useRef, useState } from 'react';
import { achievementDefinitions, type ApplyResult } from '../academy/progress';
import type { Lead } from '../engine/types';
import { answerOptions, buildCase, distractorRationale, evaluateAnswer, expectedRate, explanationFor, type AnswerEvaluation, type AnswerId } from '../rhythm/cases';
import { RhythmStrip } from '../rhythm/RhythmStrip';
import { patientCases, resolvePatientCase, type PatientCase } from './cases';

type VirtualPatientProps = {
  /** Completed case ids with the version completed, from the Academy. */
  completed: Record<string, string>;
  /** Called once when a case is finished; returns what the Academy awarded. */
  onCompleted: (patient: PatientCase, evaluation: AnswerEvaluation) => ApplyResult;
  onOpenAcademy: () => void;
  onOpenChallenge: () => void;
  /** Injectable for tests; defaults to the authored registry. */
  registry?: readonly PatientCase[];
};

const steps = ['Presentation', 'ECG and rate', 'Interpretation', 'Debrief'] as const;
const leadChoices: Lead[] = ['I', 'II', 'V1', 'V5'];

export function VirtualPatient({ completed, onCompleted, onOpenAcademy, onOpenChallenge, registry = patientCases }: VirtualPatientProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState<Lead>('II');
  const [rateText, setRateText] = useState('');
  const [answer, setAnswer] = useState<AnswerId | ''>('');
  const [evaluation, setEvaluation] = useState<AnswerEvaluation | null>(null);
  const [rewards, setRewards] = useState<ApplyResult | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const finishedFor = useRef<string | null>(null);

  const resolved = useMemo(() => (selectedId ? resolvePatientCase(selectedId, registry) : null), [selectedId, registry]);

  useEffect(() => {
    if (selectedId) headingRef.current?.focus();
  }, [selectedId, step]);

  const open = (id: string) => {
    setSelectedId(id);
    setStep(0);
    setLead('II');
    setRateText('');
    setAnswer('');
    setEvaluation(null);
    setRewards(null);
    finishedFor.current = null;
    setAnnouncement('Case opened.');
  };
  const backToList = () => {
    setSelectedId(null);
    setAnnouncement('');
  };

  // ───────────────────────── Case list ─────────────────────────
  if (!selectedId) {
    return (
      <section className="patients" aria-labelledby="patients-heading">
        <p className="eyebrow">VIRTUAL PATIENTS</p>
        <h2 id="patients-heading">Fictional cases, real strips</h2>
        <p className="lede">Each case is a fictional patient with simulated observations and an ECG from the same case library as the Rhythm Challenge. Read the story, inspect the strip, estimate the rate and choose an interpretation. This is a learning exercise, not a clinical tool, and the case text is a draft awaiting review.</p>
        <ul className="patient-list" aria-label="Fictional patient cases">
          {registry.map(item => {
            const done = completed[item.id] === item.version;
            return (
              <li key={item.id} className="patient-card">
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.ageRange} · {item.symptoms[0]}</span>
                  <small>{done ? 'Completed' : 'Not started'}</small>
                </div>
                <button type="button" className="cta secondary" onClick={() => open(item.id)} aria-label={`${done ? 'Review' : 'Start'} case: ${item.title}`}>{done ? 'Review case' : 'Start case'}</button>
              </li>
            );
          })}
        </ul>
        {registry.length === 0 && <p className="challenge-note">No cases are available.</p>}
        <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
      </section>
    );
  }

  // ───────────────────────── Unavailable case ─────────────────────────
  if (!resolved || !resolved.ok) {
    return (
      <section className="patients" aria-labelledby="patients-heading">
        <h2 id="patients-heading">Case unavailable</h2>
        <p className="challenge-error" role="alert">{resolved && !resolved.ok ? resolved.reason : 'This case is not available.'}</p>
        <button type="button" className="cta" onClick={backToList}>Back to cases</button>
      </section>
    );
  }

  const { patient, rhythm } = resolved;
  const built = buildCase(rhythm);
  const rate = expectedRate(rhythm);
  const options = answerOptions(rhythm);
  const nextCase = registry[registry.findIndex(item => item.id === patient.id) + 1];

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!answer || evaluation) return;
    const trimmed = rateText.trim();
    const result = evaluateAnswer(rhythm, answer, trimmed === '' ? undefined : Number(trimmed));
    setEvaluation(result);
    if (finishedFor.current !== patient.id) {
      finishedFor.current = patient.id;
      const awarded = onCompleted(patient, result);
      if (!awarded.alreadyApplied) setRewards(awarded);
    }
    setStep(3);
    setAnnouncement(`${result.rhythmCorrect ? 'Correct' : 'Not quite'}. Case debrief is ready.`);
  };

  return (
    <section className="patients" aria-labelledby="patient-title">
      <p className="eyebrow">VIRTUAL PATIENT</p>
      <h2 id="patient-title">{patient.title}</h2>
      <p className="patient-banner" role="note">Fictional patient · simulated observations · not a real person and not a clinical tool</p>
      <ol className="patient-steps" aria-label="Case steps">
        {steps.map((label, index) => (
          <li key={label} aria-current={index === step ? 'step' : undefined} className={index === step ? 'current' : index < step ? 'done' : ''}>
            <span>{index + 1}.</span> {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="patient-panel">
          <h3 ref={headingRef} tabIndex={-1}>The story</h3>
          <p><strong>Age range:</strong> {patient.ageRange}</p>
          <p>{patient.presentation}</p>
          <div className="patient-columns">
            <div>
              <h4>Symptoms</h4>
              <ul>{patient.symptoms.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h4>Relevant history</h4>
              {patient.history.length === 0 ? <p className="challenge-note">None given.</p> : <ul>{patient.history.map(item => <li key={item}>{item}</li>)}</ul>}
            </div>
          </div>
          <h4>Simulated observations</h4>
          <dl className="patient-observations">
            {patient.observations.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
            <div><dt>Heart rate</dt><dd>Measure it from the ECG on the next step</dd></div>
          </dl>
          <div className="challenge-actions">
            <button type="button" className="cta secondary" onClick={backToList}>Back to cases</button>
            <button type="button" className="cta" onClick={() => setStep(1)}>Next: inspect the ECG</button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="patient-panel">
          <h3 ref={headingRef} tabIndex={-1}>Inspect the ECG and estimate the rate</h3>
          <div className="patient-leads" role="group" aria-label="Choose a lead to view">
            {leadChoices.map(item => (
              <button key={item} type="button" className="cta secondary" aria-pressed={lead === item} onClick={() => setLead(item)}>{item}</button>
            ))}
          </div>
          <RhythmStrip definition={rhythm} lead={lead} />
          <label className="challenge-rate">Heart-rate estimate (beats per minute, optional)
            <input type="number" inputMode="numeric" min="1" max="400" step="1" value={rateText} onChange={event => setRateText(event.target.value)} aria-describedby="patient-rate-help" />
          </label>
          <p id="patient-rate-help" className="challenge-note">Count the QRS complexes in the 6-second strip and multiply by 10, or for a regular rhythm divide 60 000 by the R–R interval in milliseconds. Counting gives an estimate, especially when the rhythm is irregular. Leave it blank if you cannot count distinct QRS complexes.</p>
          <div className="challenge-actions">
            <button type="button" className="cta secondary" onClick={() => setStep(0)}>Back</button>
            <button type="button" className="cta" onClick={() => setStep(2)}>Next: interpret</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <form className="patient-panel challenge-form" onSubmit={submit}>
          <h3 ref={headingRef} tabIndex={-1}>Choose an interpretation</h3>
          <p className="challenge-note">Your rate estimate: {rateText.trim() === '' ? 'none given' : `${rateText.trim()} per minute`}. A single strip rarely settles a diagnosis, so “cannot be determined” is always an option.</p>
          <fieldset>
            <legend>Which rhythm best describes this strip?</legend>
            {options.map(option => (
              <label key={option.id} className={answer === option.id ? 'answer-option selected' : 'answer-option'}>
                <input type="radio" name="patient-answer" value={option.id} checked={answer === option.id} onChange={() => setAnswer(option.id)} />
                <span>{option.label}</span>
              </label>
            ))}
          </fieldset>
          <div className="challenge-actions">
            <button type="button" className="cta secondary" onClick={() => setStep(1)}>Back</button>
            <button type="submit" className="cta" disabled={!answer}>Submit interpretation</button>
          </div>
        </form>
      )}

      {step === 3 && evaluation && (
        <div className={evaluation.rhythmCorrect ? 'patient-panel challenge-feedback correct' : 'patient-panel challenge-feedback incorrect'}>
          <h3 ref={headingRef} tabIndex={-1}><span aria-hidden="true">{evaluation.rhythmCorrect ? '✔' : '✖'}</span> {evaluation.rhythmCorrect ? 'Correct' : 'Not quite'}</h3>
          <p>{evaluation.feedback}</p>
          <p><strong>Rate:</strong> {evaluation.rateFeedback}</p>
          {rate.applicable && <p><strong>Simulated monitor:</strong> heart rate about {rate.bpm} per minute, measured from this strip.</p>}
          <p><strong>Explanation:</strong> {explanationFor(rhythm)}</p>
          <h4>What this case practised</h4>
          <ul>{patient.learningObjectives.map(item => <li key={item}>{item}</li>)}</ul>
          <h4>Keep in mind</h4>
          <ul>{patient.caveats.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="challenge-note"><strong>Escalation:</strong> guidance on urgency and escalation for this case has not been written or reviewed yet, so none is given. This tool does not advise on real patients.</p>
          <p className="challenge-note">Draft teaching text, not clinical guidance.</p>
          <details>
            <summary>Why the other options do not fit</summary>
            <ul>{options.filter(option => option.id !== built.category.id).map(option => <li key={option.id}><strong>{option.label}:</strong> {distractorRationale(rhythm, option.id)}</li>)}</ul>
          </details>
          {rewards ? (
            <>
              <p className="challenge-banner" role="status">+{rewards.xpGained} XP for this case study.</p>
              {rewards.achievements.length > 0 && (
                <ul className="challenge-unlocks" aria-label="Achievements unlocked">
                  {rewards.achievements.map(id => <li key={id}>Unlocked: {achievementDefinitions.find(item => item.id === id)?.title ?? id}</li>)}
                </ul>
              )}
            </>
          ) : <p className="challenge-note">No additional XP: this case study was already completed.</p>}
          <div className="challenge-actions">
            <button type="button" className="cta secondary" onClick={backToList}>Back to cases</button>
            {nextCase && <button type="button" className="cta" onClick={() => open(nextCase.id)}>Next case: {nextCase.title}</button>}
            <button type="button" className="cta secondary" onClick={onOpenChallenge}>Practise in the Rhythm Challenge</button>
            <button type="button" className="cta secondary" onClick={onOpenAcademy}>View Academy</button>
          </div>
        </div>
      )}
      <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </section>
  );
}
