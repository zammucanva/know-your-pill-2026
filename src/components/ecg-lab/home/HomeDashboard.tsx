import type { ExerciseState, HomeSummary } from './summary';

type HomeDashboardProps = {
  summary: HomeSummary;
  onStartExercise: (exerciseId: string) => void;
  onResumeExperiment: (snapshotId: string) => void;
  onBeginChallenge: () => void;
  onReviewMissed: () => void;
  onOpenPatients: () => void;
  onOpenAcademy: () => void;
  onOpenSimulator: () => void;
};

const stateText: Record<ExerciseState, string> = { completed: 'Completed', 'in-progress': 'In progress', 'not-started': 'Not started' };
const actionText: Record<ExerciseState, string> = { completed: 'Review', 'in-progress': 'Continue', 'not-started': 'Start' };

/**
 * Everything on this page is read from stored learner state. Cards with nothing real behind them say so
 * and offer the action that would create it; no figure is ever filled in by default.
 */
export function HomeDashboard({ summary, onStartExercise, onResumeExperiment, onBeginChallenge, onReviewMissed, onOpenPatients, onOpenAcademy, onOpenSimulator }: HomeDashboardProps) {
  const { continueLearning, exercises, experiment, challenge, patients, progress } = summary;
  const firstExercise = exercises[0];

  return (
    <section className="home" aria-labelledby="home-heading">
      <p className="eyebrow">HOME</p>
      <h2 id="home-heading">{summary.isEmpty ? 'Start learning the ECG' : 'Pick up where you left off'}</h2>
      <p className="lede">Everything here comes from what you have actually done in this browser. The traces are synthetic teaching material, and the simulator is not a clinical tool.</p>

      {summary.isEmpty && (
        <div className="home-empty">
          <p><strong>Nothing saved yet.</strong> Choose a way in; your progress will appear on this page as you go.</p>
          <div className="challenge-actions">
            {firstExercise && <button type="button" className="cta" onClick={() => onStartExercise(firstExercise.id)}>Start your first exercise</button>}
            <button type="button" className="cta secondary" onClick={onBeginChallenge}>Begin a Rhythm Challenge</button>
            <button type="button" className="cta secondary" onClick={onOpenPatients}>Try a virtual patient</button>
          </div>
        </div>
      )}

      <div className="home-grid">
        <section className="home-card" aria-labelledby="home-continue">
          <h3 id="home-continue">Continue learning</h3>
          {(continueLearning.kind === 'continue-exercise' || continueLearning.kind === 'start-exercise') && <p><strong>{continueLearning.title}</strong></p>}
          <p className="challenge-note">{continueLearning.detail}</p>
          {continueLearning.kind === 'continue-exercise' && <button type="button" className="cta" onClick={() => onStartExercise(continueLearning.exerciseId)}>Continue exercise: {continueLearning.title}</button>}
          {continueLearning.kind === 'start-exercise' && <button type="button" className="cta" onClick={() => onStartExercise(continueLearning.exerciseId)}>Start exercise: {continueLearning.title}</button>}
          {(continueLearning.kind === 'all-exercises-done' || continueLearning.kind === 'none-available') && <button type="button" className="cta" onClick={onBeginChallenge}>Begin a Rhythm Challenge</button>}
        </section>

        <section className="home-card" aria-labelledby="home-experiment">
          <h3 id="home-experiment">Resume an experiment</h3>
          {experiment ? (
            <>
              <p><strong>{experiment.name}</strong></p>
              <p className="challenge-note">Saved {experiment.savedOn} · {experiment.settings}</p>
              <button type="button" className="cta" onClick={() => onResumeExperiment(experiment.snapshotId)}>Resume “{experiment.name}”</button>
            </>
          ) : (
            <>
              <p className="challenge-note">No saved experiments yet. Save one from the ECG simulator and it will appear here.</p>
              <button type="button" className="cta secondary" onClick={onOpenSimulator}>Open the ECG simulator</button>
            </>
          )}
        </section>

        <section className="home-card" aria-labelledby="home-exercises">
          <h3 id="home-exercises">Guided exercises</h3>
          <p className="challenge-note">{progress.exercisesCompleted} of {progress.exercisesTotal} completed.</p>
          <ul className="home-exercise-list">
            {exercises.map(item => (
              <li key={item.id}>
                <span><strong>{item.title}</strong><small>{stateText[item.state]}{item.state === 'in-progress' ? ` · ${item.readings} of ${item.requiredReadings} readings` : ''}</small></span>
                <button type="button" className="cta secondary" onClick={() => onStartExercise(item.id)} aria-label={`${actionText[item.state]} exercise: ${item.title}`}>{actionText[item.state]}</button>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-card" aria-labelledby="home-challenge">
          <h3 id="home-challenge">Rhythm Challenge</h3>
          {challenge.attempts === 0
            ? <p className="challenge-note">No strips answered yet.</p>
            : <p className="challenge-note">{challenge.attempts} {challenge.attempts === 1 ? 'strip' : 'strips'} answered · rhythm accuracy {challenge.accuracyPercent}%{challenge.timedBestScore > 0 ? ` · best timed score ${challenge.timedBestScore}` : ''}</p>}
          <div className="challenge-actions">
            <button type="button" className="cta" onClick={onBeginChallenge}>Begin a challenge</button>
            <button type="button" className="cta secondary" onClick={onReviewMissed} disabled={challenge.missedCount === 0}>Review missed strips ({challenge.missedCount})</button>
          </div>
          {challenge.missedCount === 0 && <p className="challenge-note">{challenge.attempts === 0 ? 'Missed strips will appear here once you have answered some.' : 'Nothing to review: no unresolved missed strips are recorded.'}</p>}
        </section>

        <section className="home-card" aria-labelledby="home-patients">
          <h3 id="home-patients">Virtual patients</h3>
          <p className="challenge-note">{patients.completed} of {patients.total} fictional cases completed.</p>
          {patients.next ? <p><strong>Next: {patients.next.title}</strong></p> : <p className="challenge-note">You have completed every available case.</p>}
          <button type="button" className="cta secondary" onClick={onOpenPatients}>{patients.completed === 0 ? 'Open the cases' : 'Continue with cases'}</button>
        </section>

        <section className="home-card" aria-labelledby="home-progress">
          <h3 id="home-progress">Your progress</h3>
          {summary.isEmpty ? (
            <p className="challenge-note">Nothing recorded yet. Finish an exercise, answer a strip or complete a case and your progress will show here.</p>
          ) : (
            <>
              <p><strong>Level {progress.level}</strong> · {progress.xp} XP</p>
              <progress max={progress.xpForNextLevel} value={progress.xpIntoLevel} aria-label={`Progress toward level ${progress.level + 1}`} />
              <ul className="home-facts">
                <li>Exercises completed: {progress.exercisesCompleted} of {progress.exercisesTotal}</li>
                <li>Case studies completed: {progress.caseStudiesCompleted} of {progress.caseStudiesTotal}</li>
                <li>Rhythm accuracy: {progress.rhythmAccuracyPercent === null ? 'no attempts yet' : `${progress.rhythmAccuracyPercent}%`}</li>
              </ul>
              {progress.recent.length > 0 && (
                <ul className="home-recent" aria-label="Recent activity">
                  {progress.recent.map((item, index) => <li key={`${item.label}-${index}`}>+{item.xp} XP · {item.label}</li>)}
                </ul>
              )}
            </>
          )}
          <button type="button" className="cta secondary" onClick={onOpenAcademy}>View progress</button>
        </section>
      </div>
    </section>
  );
}
