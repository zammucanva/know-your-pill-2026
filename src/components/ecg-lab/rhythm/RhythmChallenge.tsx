import { useEffect, useMemo, useRef, useState } from 'react';
import type { ApplyResult } from '../academy/progress';
import { achievementDefinitions } from '../academy/progress';
import { answerOptions, buildCase, distractorRationale, expectedRate, getRhythmCase, hintsFor, UNCERTAIN_ANSWER_ID, type AnswerId } from './cases';
import { RhythmStrip } from './RhythmStrip';
import { rhythmCategories, type RhythmCategoryId } from './rhythms';
import {
  createSession, currentCase, isCurrentAnswered, MAX_HINTS, MAX_QUESTIONS, nextQuestion, pauseSession, resumeSession, retryQuestion,
  revealHint, submitAnswer, summarise, tickSession, type Difficulty, type SessionMode, type SessionState,
} from './session';

type RhythmChallengeProps = {
  /** False while another section is showing; a timed session pauses itself. */
  active: boolean;
  /** Case ids the learner has missed and not yet corrected, for the review shortcut. */
  missedCaseIds: string[];
  /** Called once when a session ends; returns what the Academy awarded. */
  onSessionEnded: (state: SessionState) => ApplyResult;
  onOpenAcademy: () => void;
  /** Personal best so a new one can be called out. */
  timedBestScore: number;
  /** Each new value asks for a review of missed strips (for example from the Home dashboard). Handled once. */
  reviewRequest?: number;
};

const modeLabels: Record<SessionMode, { title: string; blurb: string }> = {
  learn: { title: 'Learn', blurb: 'Untimed. Hints, explanations after every answer, and a retry on any missed strip.' },
  practice: { title: 'Practice', blurb: 'Untimed. Choose categories and difficulty, get feedback after each answer, and review what you missed.' },
  timed: { title: 'Timed challenge', blurb: 'A countdown for the whole session. Points depend only on accuracy, never on speed. Use Learn or Practice for an untimed alternative.' },
};

const formatClock = (ms: number) => {
  const total = Math.ceil(ms / 1000);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
};

export function RhythmChallenge({ active, missedCaseIds, onSessionEnded, onOpenAcademy, timedBestScore, reviewRequest }: RhythmChallengeProps) {
  const [mode, setMode] = useState<SessionMode>('learn');
  const [category, setCategory] = useState<'all' | RhythmCategoryId>('all');
  const [difficulty, setDifficulty] = useState<'all' | '1' | '2' | '3'>('all');
  const [questionCount, setQuestionCount] = useState(5);
  const [durationSec, setDurationSec] = useState(120);
  const [setupError, setSetupError] = useState('');
  const [session, setSession] = useState<SessionState | null>(null);
  const [selected, setSelected] = useState<AnswerId | ''>('');
  const [rateText, setRateText] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [rewards, setRewards] = useState<ApplyResult | null>(null);
  const announcedThreshold = useRef<number | null>(null);
  const endedSessionId = useRef<string | null>(null);
  const bestAtStart = useRef(timedBestScore);

  const start = (config: Partial<Parameters<typeof createSession>[0]> = {}) => {
    const result = createSession({
      mode,
      categoryIds: category === 'all' ? null : [category],
      difficulties: difficulty === 'all' ? null : [Number(difficulty) as Difficulty],
      questionCount,
      durationSec: mode === 'timed' ? durationSec : null,
      seed: Math.floor(Math.random() * 1_000_000_000),
      ...config,
    });
    if (!result.ok) {
      setSetupError(result.error);
      return;
    }
    setSetupError('');
    setSession(result.state);
    setSelected('');
    setRateText('');
    setRewards(null);
    announcedThreshold.current = null;
    endedSessionId.current = null;
    bestAtStart.current = timedBestScore;
    setAnnouncement('Session started.');
  };

  useEffect(() => {
    if (!active) setSession(current => (current ? pauseSession(current) : current));
  }, [active]);

  // A review request starts a review of missed strips, unless the learner already has a session in progress.
  const handledReview = useRef(0);
  useEffect(() => {
    if (!reviewRequest || reviewRequest === handledReview.current) return;
    handledReview.current = reviewRequest;
    if (missedCaseIds.length === 0) return;
    if (session && session.status !== 'complete' && session.status !== 'expired') return;
    start({ mode: 'practice', caseIds: missedCaseIds, categoryIds: null, difficulties: null, questionCount: Math.min(MAX_QUESTIONS, missedCaseIds.length) });
  }, [reviewRequest]);

  // Timed countdown: measured wall time per tick, clamped inside tickSession, paused with the session.
  const running = session !== null && session.config.mode === 'timed' && session.status === 'in-progress';
  useEffect(() => {
    if (!running) return undefined;
    let last = performance.now();
    const interval = window.setInterval(() => {
      const now = performance.now();
      const delta = now - last;
      last = now;
      setSession(current => (current ? tickSession(current, delta) : current));
    }, 250);
    return () => window.clearInterval(interval);
  }, [running]);

  // Announce the countdown only at a few thresholds, never every second.
  useEffect(() => {
    if (!session || session.remainingMs === null || session.status !== 'in-progress') return;
    const secondsLeft = Math.ceil(session.remainingMs / 1000);
    const threshold = [10, 30, 60].find(value => secondsLeft <= value);
    if (threshold !== undefined && announcedThreshold.current !== threshold) {
      announcedThreshold.current = threshold;
      setAnnouncement(`${threshold} seconds or less remaining.`);
    }
  }, [session]);

  // Hand a finished session to the Academy exactly once.
  const ended = session !== null && (session.status === 'complete' || session.status === 'expired');
  useEffect(() => {
    if (!session || !ended || endedSessionId.current === session.id) return;
    endedSessionId.current = session.id;
    const result = onSessionEnded(session);
    if (!result.alreadyApplied) setRewards(result);
    setAnnouncement(session.status === 'expired' ? 'Time is up. Session results are ready.' : 'Session complete. Results are ready.');
  }, [session, ended, onSessionEnded]);

  const definition = session ? currentCase(session) : undefined;
  const options = useMemo(() => (definition ? answerOptions(definition) : []), [definition]);
  const answered = session ? isCurrentAnswered(session) : false;
  const answer = session?.answers[session.index] ?? null;

  const resetInputs = () => {
    setSelected('');
    setRateText('');
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!session || !selected || answered) return;
    const trimmed = rateText.trim();
    const rate = trimmed === '' ? undefined : Number(trimmed);
    const next = submitAnswer(session, selected, rate);
    setSession(next);
    const evaluation = next.answers[next.index]?.evaluation;
    if (evaluation) setAnnouncement(`${evaluation.rhythmCorrect ? 'Correct' : 'Not quite'}. ${evaluation.rateFeedback}`);
  };

  // ───────────────────────── Setup ─────────────────────────
  if (!session) {
    return (
      <section className="challenge" aria-labelledby="challenge-heading">
        <p className="eyebrow">RHYTHM CHALLENGE</p>
        <h2 id="challenge-heading">Read the strip, name the rhythm</h2>
        <p className="lede">Each question shows a calibrated six-second synthetic strip. Name the rhythm and estimate the rate. All strips are generated teaching templates, not patient recordings, and all explanations are drafts awaiting review.</p>
        <div className="challenge-modes" role="radiogroup" aria-label="Session mode">
          {(Object.keys(modeLabels) as SessionMode[]).map(value => (
            <label key={value} className={mode === value ? 'mode-card selected' : 'mode-card'}>
              <input type="radio" name="challenge-mode" value={value} checked={mode === value} onChange={() => setMode(value)} />
              <strong>{modeLabels[value].title}</strong>
              <span>{modeLabels[value].blurb}</span>
            </label>
          ))}
        </div>
        <div className="challenge-setup">
          <label>Category
            <select value={category} onChange={event => setCategory(event.target.value as 'all' | RhythmCategoryId)}>
              <option value="all">All categories</option>
              {rhythmCategories.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </label>
          <label>Difficulty
            <select value={difficulty} onChange={event => setDifficulty(event.target.value as typeof difficulty)}>
              <option value="all">All levels</option><option value="1">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option>
            </select>
          </label>
          <label>Questions
            <select value={questionCount} onChange={event => setQuestionCount(Number(event.target.value))}>
              {[5, 10, 15, MAX_QUESTIONS].map(value => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          {mode === 'timed' && (
            <label>Session time
              <select value={durationSec} onChange={event => setDurationSec(Number(event.target.value))}>
                {[60, 120, 180, 300].map(value => <option key={value} value={value}>{value / 60} min</option>)}
              </select>
            </label>
          )}
        </div>
        {setupError && <p className="challenge-error" role="alert">{setupError}</p>}
        <div className="challenge-actions">
          <button type="button" className="cta" onClick={() => start()}>{mode === 'timed' ? 'Start timed challenge' : `Start ${modeLabels[mode].title.toLowerCase()} session`}</button>
          <button type="button" className="cta secondary" disabled={missedCaseIds.length === 0} onClick={() => start({ mode: 'practice', caseIds: missedCaseIds, categoryIds: null, difficulties: null, questionCount: Math.min(MAX_QUESTIONS, missedCaseIds.length) })}>
            Review missed strips ({missedCaseIds.length})
          </button>
        </div>
        {timedBestScore > 0 && <p className="challenge-note">Your best timed score: {timedBestScore}.</p>}
        <p className="challenge-note">This is an educational trainer, not a monitoring or diagnostic tool.</p>
        <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
      </section>
    );
  }

  // ───────────────────────── Summary ─────────────────────────
  if (ended) {
    const summary = summarise(session);
    const newBest = session.config.mode === 'timed' && summary.rewardEligible && rewards !== null && summary.score > bestAtStart.current;
    return (
      <section className="challenge" aria-labelledby="challenge-heading">
        <p className="eyebrow">SESSION RESULTS</p>
        <h2 id="challenge-heading">{session.status === 'expired' ? 'Time is up' : 'Session complete'}</h2>
        <dl className="challenge-stats">
          <div><dt>Score</dt><dd>{summary.score}</dd></div>
          <div><dt>Rhythm accuracy</dt><dd>{summary.accuracyPercent}%</dd></div>
          <div><dt>Answered</dt><dd>{summary.answered} of {summary.total}</dd></div>
          <div><dt>Best streak</dt><dd>{summary.bestStreak}</dd></div>
          <div><dt>Rate estimates in range</dt><dd>{summary.rateAnswered === 0 ? '—' : `${summary.rateCorrect} of ${summary.rateAnswered}`}</dd></div>
          <div><dt>XP earned</dt><dd>{rewards ? `+${rewards.xpGained}` : '+0'}</dd></div>
        </dl>
        {!summary.rewardEligible && <p className="challenge-note">Answer at least {Math.min(5, summary.total)} questions to earn the session completion bonus.</p>}
        {newBest && <p className="challenge-banner" role="status">New personal best for a timed session.</p>}
        {rewards && rewards.achievements.length > 0 && (
          <ul className="challenge-unlocks" aria-label="Achievements unlocked">
            {rewards.achievements.map(id => <li key={id}>Unlocked: {achievementDefinitions.find(item => item.id === id)?.title ?? id}</li>)}
          </ul>
        )}
        {summary.missed.length > 0 && (
          <>
            <h3>Review your misses</h3>
            <ul className="challenge-missed">
              {summary.missed.map(item => {
                const missedCase = getRhythmCase(item.caseId);
                const category = rhythmCategories.find(entry => entry.id === item.categoryId);
                const chosen = item.answerId === UNCERTAIN_ANSWER_ID ? 'Cannot be determined' : rhythmCategories.find(entry => entry.id === item.answerId)?.label ?? item.answerId;
                return <li key={item.caseId}>{category?.label} (level {missedCase?.difficulty}), you answered: {chosen}</li>;
              })}
            </ul>
          </>
        )}
        <div className="challenge-actions">
          <button type="button" className="cta" onClick={() => setSession(null)}>New session</button>
          {summary.missed.length > 0 && (
            <button type="button" className="cta secondary" onClick={() => start({ mode: 'practice', caseIds: summary.missed.map(item => item.caseId), categoryIds: null, difficulties: null, questionCount: summary.missed.length })}>Retry missed strips</button>
          )}
          <button type="button" className="cta secondary" onClick={onOpenAcademy}>View Academy</button>
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
      </section>
    );
  }

  // ───────────────────────── Question ─────────────────────────
  const built = definition ? buildCase(definition) : undefined;
  const hints = definition ? hintsFor(definition) : [];
  const rate = definition ? expectedRate(definition) : undefined;
  const summaryNow = summarise(session);
  const paused = session.status === 'paused';
  const evaluation = answer?.evaluation;
  const isLast = session.index >= session.caseIds.length - 1;
  const canRetry = session.config.mode === 'learn' && answered && evaluation !== undefined && !evaluation.rhythmCorrect;

  return (
    <section className="challenge" aria-labelledby="challenge-heading">
      <p className="eyebrow">{modeLabels[session.config.mode].title.toUpperCase()}</p>
      <h2 id="challenge-heading">Question {session.index + 1} of {session.caseIds.length}</h2>
      <ul className="challenge-scoreboard" aria-label="Session progress">
        <li><span>Score</span><strong>{session.score}</strong></li>
        <li><span>Accuracy</span><strong>{summaryNow.answered === 0 ? '—' : `${summaryNow.accuracyPercent}%`}</strong></li>
        <li><span>Streak</span><strong>{session.streak}</strong></li>
        {session.remainingMs !== null && <li><span>Time left</span><strong role="timer" aria-live="off">{formatClock(session.remainingMs)}</strong></li>}
      </ul>
      <progress className="challenge-progress" max={session.caseIds.length} value={session.index + (answered ? 1 : 0)} aria-label="Questions completed" />
      {session.remainingMs !== null && (
        <div className="challenge-actions">
          {paused
            ? <button type="button" className="cta" onClick={() => setSession(resumeSession(session))}>Resume</button>
            : <button type="button" className="cta secondary" onClick={() => setSession(pauseSession(session))}>Pause</button>}
        </div>
      )}
      {paused ? (
        <p className="challenge-note" role="status">Paused. The strip is hidden until you resume.</p>
      ) : definition && (
        <>
          <RhythmStrip definition={definition} />
          <form className="challenge-form" onSubmit={submit}>
            <fieldset disabled={answered}>
              <legend>Which rhythm best describes this strip?</legend>
              {options.map(option => (
                <label key={option.id} className={selected === option.id ? 'answer-option selected' : 'answer-option'}>
                  <input type="radio" name="rhythm-answer" value={option.id} checked={selected === option.id} onChange={() => setSelected(option.id)} />
                  <span>{option.label}</span>
                </label>
              ))}
            </fieldset>
            <label className="challenge-rate">Heart-rate estimate (beats per minute, optional)
              <input type="number" inputMode="numeric" min="1" max="400" step="1" value={rateText} disabled={answered} onChange={event => setRateText(event.target.value)} aria-describedby="rate-help" />
            </label>
            <p id="rate-help" className="challenge-note">Count the QRS complexes in the 6-second strip and multiply by 10, or for a regular rhythm divide 60 000 by the R–R interval in milliseconds. Counting gives an estimate, especially when the rhythm is irregular. Leave it blank if you cannot count distinct QRS complexes.</p>

            {session.config.mode !== 'timed' && !answered && (
              <div className="challenge-hints">
                <button type="button" className="cta secondary" disabled={session.hintsUsed[session.index] >= MAX_HINTS} onClick={() => setSession(revealHint(session))}>
                  Show hint ({session.hintsUsed[session.index]}/{MAX_HINTS})
                </button>
                {session.hintsUsed[session.index] > 0 && (
                  <ol aria-label="Hints">{hints.slice(0, session.hintsUsed[session.index]).map(hint => <li key={hint}>{hint}</li>)}</ol>
                )}
              </div>
            )}

            <div className="challenge-actions">
              {!answered && <button type="submit" className="cta" disabled={!selected}>Submit answer</button>}
            </div>
          </form>

          {answered && evaluation && built && (
            <div className={evaluation.rhythmCorrect ? 'challenge-feedback correct' : 'challenge-feedback incorrect'} role="status" aria-live="polite">
              <h3><span aria-hidden="true">{evaluation.rhythmCorrect ? '✔' : '✖'}</span> {evaluation.rhythmCorrect ? 'Correct' : 'Not quite'}</h3>
              <p>{evaluation.feedback}</p>
              <p><strong>Rate:</strong> {evaluation.rateFeedback || (rate && rate.applicable ? `Expected about ${rate.bpm} per minute.` : '')}</p>
              <p><strong>Explanation:</strong> {evaluation.explanation}</p>
              <p className="challenge-note">Points this question: {answer?.firstEvaluation.points}{(answer?.attempts ?? 1) > 1 ? ' (retries are not scored)' : ''}. Draft teaching text, not clinical guidance.</p>
              <details>
                <summary>Why the other options do not fit</summary>
                <ul>
                  {options.filter(option => option.id !== definition.categoryId).map(option => (
                    <li key={option.id}><strong>{option.label}:</strong> {distractorRationale(definition, option.id)}</li>
                  ))}
                </ul>
              </details>
              <div className="challenge-actions">
                {canRetry && <button type="button" className="cta secondary" onClick={() => { setSession(retryQuestion(session)); resetInputs(); }}>Try this strip again</button>}
                <button type="button" className="cta" onClick={() => { setSession(nextQuestion(session)); resetInputs(); }}>{isLast ? 'See results' : 'Next question'}</button>
              </div>
            </div>
          )}
        </>
      )}
      <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </section>
  );
}
