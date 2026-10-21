import { useState } from 'react';
import { achievementDefinitions, dashboardStats, XP_RULES, type AcademyProgress } from './progress';

type AcademyDashboardProps = {
  progress: AcademyProgress;
  notice?: string;
  onReset: () => void;
  onOpenChallenge: () => void;
  onOpenSimulator: () => void;
};

const percent = (value: number | null) => (value === null ? 'No attempts yet' : `${value}%`);

/** Shows only recorded events. With no activity it explains how progress is earned instead of showing fake numbers. */
export function AcademyDashboard({ progress, notice, onReset, onOpenChallenge, onOpenSimulator }: AcademyDashboardProps) {
  const stats = dashboardStats(progress);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <section className="academy" aria-labelledby="academy-heading">
      <p className="eyebrow">ACADEMY</p>
      <h2 id="academy-heading">Your progress</h2>
      {notice && <p className="challenge-error" role="status">{notice}</p>}

      {stats.isEmpty ? (
        <div className="academy-empty">
          <p>Nothing recorded yet. Progress here comes only from what you actually do: finishing a guided exercise in the ECG simulator, answering strips in the Rhythm Challenge, or completing a Virtual Patient case.</p>
          <div className="challenge-actions">
            <button type="button" className="cta" onClick={onOpenChallenge}>Start a Rhythm Challenge</button>
            <button type="button" className="cta secondary" onClick={onOpenSimulator}>Open the ECG simulator</button>
          </div>
        </div>
      ) : (
        <>
          <div className="academy-level">
            <strong>Level {stats.level}</strong>
            <span>{stats.xp} XP · {stats.xpIntoLevel} of {stats.xpForNextLevel} toward level {stats.level + 1}</span>
            <progress max={stats.xpForNextLevel} value={stats.xpIntoLevel} aria-label={`Progress toward level ${stats.level + 1}`} />
          </div>
          <dl className="challenge-stats">
            <div><dt>Exercises completed</dt><dd>{stats.exercisesCompleted}</dd></div>
            <div><dt>Case studies completed</dt><dd>{stats.caseStudiesCompleted} of {stats.caseStudiesAvailable}</dd></div>
            <div><dt>Rhythm accuracy</dt><dd>{percent(stats.rhythmAccuracyPercent)}</dd></div>
            <div><dt>Rate estimates in range</dt><dd>{percent(stats.rateAccuracyPercent)}</dd></div>
            <div><dt>Sessions completed</dt><dd>{stats.bests.sessionsCompleted}</dd></div>
            <div><dt>Best timed score</dt><dd>{stats.bests.timedScore > 0 ? `${stats.bests.timedScore} (${stats.bests.timedAccuracyPercent}%)` : 'None yet'}</dd></div>
            <div><dt>Longest streak</dt><dd>{stats.bests.bestStreak}</dd></div>
          </dl>

          <div className="academy-columns">
            <div>
              <h3>Strongest categories</h3>
              {stats.strongest.length === 0 ? <p className="challenge-note">None at 50% or better yet.</p>
                : <ul>{stats.strongest.map(item => <li key={item.categoryId}>{item.label}: {item.accuracyPercent}% over {item.attempts} {item.attempts === 1 ? 'attempt' : 'attempts'}</li>)}</ul>}
            </div>
            <div>
              <h3>Categories to practise</h3>
              {stats.toPractice.length === 0 ? <p className="challenge-note">Nothing flagged. Every attempted category is at 100%.</p>
                : <ul>{stats.toPractice.map(item => <li key={item.categoryId}>{item.label}: {item.accuracyPercent}% over {item.attempts} {item.attempts === 1 ? 'attempt' : 'attempts'}</li>)}</ul>}
            </div>
          </div>

          <h3>Recent activity</h3>
          {stats.recent.length === 0 ? <p className="challenge-note">No XP-earning activity yet.</p>
            : <ul className="academy-recent">{stats.recent.slice(0, 8).map((item, index) => <li key={`${item.at}-${index}`}>+{item.xp} XP · {item.label}</li>)}</ul>}
        </>
      )}

      <h3>Achievements</h3>
      <ul className="academy-achievements" aria-label="Achievements">
        {achievementDefinitions.filter(item => !item.id.startsWith('category-complete.') || progress.achievements[item.id]).map(item => {
          const earned = Boolean(progress.achievements[item.id]);
          return (
            <li key={item.id} className={earned ? 'earned' : 'locked'}>
              <strong><span aria-hidden="true">{earned ? '★' : '☆'}</span> {item.title}</strong>
              <span>{item.description}</span>
              <small>{earned ? 'Earned' : 'Locked'}</small>
            </li>
          );
        })}
      </ul>
      <p className="challenge-note">Category-completion achievements appear here once earned. How XP works: {XP_RULES.firstCorrectRhythm} for a first correct rhythm, {XP_RULES.firstCorrectRate} for a first in-range rate, {XP_RULES.exerciseCompleted} for a completed exercise, {XP_RULES.sessionCompleted} for completing a session, {XP_RULES.caseStudyCompleted} (plus {XP_RULES.caseStudyCorrectRhythm} for a correct rhythm) for a case study, {XP_RULES.correctedAfterMiss} for correcting a missed strip, and at most {XP_RULES.maxRepeatAwardsPerCase} small repeat awards per strip. Speed never earns XP.</p>

      <div className="academy-reset">
        {confirmReset ? (
          <div className="experiment-confirmation" role="group" aria-label="Reset Academy progress confirmation">
            <p>Erase all XP, achievements and statistics stored in this browser? Saved experiments and exercise progress are not affected. This cannot be undone.</p>
            <button type="button" className="cta danger" onClick={() => { onReset(); setConfirmReset(false); }}>Reset now</button>
            <button type="button" className="cta secondary" onClick={() => setConfirmReset(false)}>Cancel</button>
          </div>
        ) : <button type="button" className="cta danger" onClick={() => setConfirmReset(true)}>Reset Academy progress</button>}
      </div>
    </section>
  );
}
