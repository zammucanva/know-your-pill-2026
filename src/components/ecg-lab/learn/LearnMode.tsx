import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import type { ContentRecord, KnowledgeCheckRecord, LessonRecord } from '../content/types';
import { learnRegistry, publishedLearnLessons } from '../content/learn/registry';
import {
  localLearnProgressStore,
  markLessonComplete,
  markLessonSectionComplete,
  markLessonStarted,
  recordKnowledgeCheckAttempt,
  type LearnProgress,
  type LearnProgressStore,
} from './progress';
import { Demonstration } from './Demonstrations';

type ProgressAction = (current: LearnProgress) => LearnProgress;

export function KnowledgeCheck({
  question,
  onAttempt,
}: {
  question: KnowledgeCheckRecord;
  onAttempt: (correct: boolean) => void;
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const choose = (choiceId: string, checked: boolean) => {
    setSelectedIds(current => question.questionType === 'single-best-answer'
      ? [choiceId]
      : checked ? [...new Set([...current, choiceId])] : current.filter(id => id !== choiceId));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedIds.length || submitted) return;
    const expected = [...question.correctAnswerIds].sort();
    const selected = [...selectedIds].sort();
    const isCorrect = expected.length === selected.length && expected.every((id, index) => id === selected[index]);
    setCorrect(isCorrect);
    setSubmitted(true);
    onAttempt(isCorrect);
  };

  const retry = () => {
    setSelectedIds([]);
    setSubmitted(false);
    setCorrect(false);
  };

  return <form className="learn-question" onSubmit={submit}>
    <fieldset>
      <legend>{question.prompt}</legend>
      {question.choices.map(choice => <label className="learn-answer" key={choice.id}>
        <input
          type={question.questionType === 'single-best-answer' ? 'radio' : 'checkbox'}
          name={question.id}
          value={choice.id}
          checked={selectedIds.includes(choice.id)}
          disabled={submitted}
          onChange={event => choose(choice.id, event.target.checked)}
        />
        <span>{choice.text}</span>
      </label>)}
    </fieldset>
    {!submitted
      ? <button className="learn-action" type="submit" disabled={!selectedIds.length}>Check answer</button>
      : <div className={`learn-feedback ${correct ? 'is-correct' : 'is-incorrect'}`} role="status" aria-live="polite">
        <strong>{correct ? 'Correct.' : 'Not quite.'}</strong> {question.explanation}
        <button className="learn-text-button" type="button" onClick={retry}>Try again</button>
      </div>}
    <p className="learn-formative-note">Lesson check · formative only, not an examination.</p>
  </form>;
}

export type LessonReaderProps = {
  lesson: LessonRecord;
  previous?: LessonRecord;
  next?: LessonRecord;
  questions: KnowledgeCheckRecord[];
  progress: LearnProgress;
  onProgress: (action: ProgressAction) => void;
  onNavigate: (id: string) => void;
};

export function LessonReader({
  lesson,
  previous,
  next,
  questions,
  progress,
  onProgress,
  onNavigate,
}: LessonReaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lessonProgress = progress.lessons[lesson.id];

  useEffect(() => {
    titleRef.current?.focus();
  }, [lesson.id]);

  const completeSections = new Set(lessonProgress?.completedSectionIds ?? []);
  const checksAttempted = questions.every(question => (lessonProgress?.knowledgeChecks[question.id]?.attempts ?? 0) > 0);
  const allSectionsComplete = lesson.lessonContent.sections.every(section => completeSections.has(section.id));
  const canComplete = allSectionsComplete && checksAttempted;

  return <article className="learn-reader" aria-labelledby="learn-lesson-title">
    <button className="learn-back" type="button" onClick={() => onNavigate('')}>← All published lessons</button>
    <header className="learn-lesson-header">
      <p className="eyebrow">LESSON {String(lesson.lessonContent.sequence).padStart(2, '0')} · {lesson.difficulty}</p>
      <h2 id="learn-lesson-title" ref={titleRef} tabIndex={-1}>{lesson.title}</h2>
      <p className="learn-summary">{lesson.summary}</p>
      <p className="learn-status-line">{lesson.publicationStatus === 'published' ? 'Published for educational use' : 'Draft preview · not learner-facing'} · v{lesson.version}</p>
    </header>

    <section className="learn-objectives" aria-labelledby="learn-objectives-heading">
      <h3 id="learn-objectives-heading">By the end, you should be able to</h3>
      <ul>{lesson.learningObjectives.map(objective => <li key={objective.id}>{objective.statement}</li>)}</ul>
    </section>

    <nav className="learn-section-nav" aria-label="Lesson sections">
      <span>IN THIS LESSON</span>
      <ol>{lesson.lessonContent.sections.map(section => <li key={section.id}><a href={`#section-${section.id}`}>{section.title}</a></li>)}</ol>
    </nav>

    <div className="learn-sections">
      {lesson.lessonContent.sections.map(section => {
        const demonstration = lesson.lessonContent.visualDemonstrations.find(item => item.id === section.demonstrationId);
        const completed = completeSections.has(section.id);
        return <section className="learn-section" id={`section-${section.id}`} key={section.id} aria-labelledby={`section-title-${section.id}`}>
          <div className="learn-section-title-row">
            <h3 id={`section-title-${section.id}`}>{section.title}</h3>
            <button
              className="learn-section-complete"
              type="button"
              aria-pressed={completed}
              onClick={() => onProgress(current => markLessonSectionComplete(current, lesson.id, section.id))}
            >{completed ? 'Section complete' : 'Mark section complete'}</button>
          </div>
          <p>{section.body}</p>
          {demonstration && <Demonstration demonstration={demonstration} />}
        </section>;
      })}
    </div>

    {lesson.lessonContent.keyTerms.length > 0 && <section className="learn-terms" aria-labelledby="learn-terms-heading">
      <h3 id="learn-terms-heading">Key terms</h3>
      <dl>{lesson.lessonContent.keyTerms.map(term => <div key={term.term}><dt>{term.term}</dt><dd>{term.definition}</dd></div>)}</dl>
    </section>}

    <section className="learn-takeaways" aria-labelledby="learn-takeaways-heading">
      <h3 id="learn-takeaways-heading">Key takeaways</h3>
      <ul>{lesson.lessonContent.keyTakeaways.map(takeaway => <li key={takeaway}>{takeaway}</li>)}</ul>
    </section>

    <section className="learn-checks" aria-labelledby="learn-checks-heading">
      <h3 id="learn-checks-heading">Check your understanding</h3>
      <p>Submit each short lesson check to record an attempt. These checks are formative and do not contribute to an exam score.</p>
      {questions.map(question => <KnowledgeCheck
        key={question.id}
        question={question}
        onAttempt={correct => onProgress(current => recordKnowledgeCheckAttempt(current, lesson.id, question.id, correct))}
      />)}
    </section>

    <section className="learn-references" aria-labelledby="learn-references-heading">
      <h3 id="learn-references-heading">Sources and provenance</h3>
      <p>This lesson contains synthetic educational waveform templates. They are not patient recordings and have not been validated as clinical morphology.</p>
      <ul>{lesson.sourceReferences.map(reference => <li key={reference.id}>
        {reference.url ? <a href={reference.url} target="_blank" rel="noreferrer">{reference.title}</a> : reference.title}
        <span> · {reference.kind.replaceAll('-', ' ')} · {reference.verificationStatus.replaceAll('-', ' ')}</span>
        <small>Supports: {reference.supports.map(support => support.kind === 'objective'
          ? lesson.learningObjectives.find(objective => objective.id === support.objectiveId)?.statement ?? support.objectiveId
          : support.claimId).join('; ')}</small>
      </li>)}</ul>
      <p>Limitations: {lesson.knownLimitations.join(' ')}</p>
    </section>

    <div className="learn-completion">
      <p aria-live="polite">{allSectionsComplete ? 'All sections marked complete.' : 'Mark each section complete.'} {checksAttempted ? 'Lesson checks attempted.' : 'Submit each lesson check.'}</p>
      <button
        className="learn-action"
        type="button"
        disabled={!canComplete && !lessonProgress?.completed}
        aria-pressed={Boolean(lessonProgress?.completed)}
        onClick={() => onProgress(current => markLessonComplete(current, lesson.id))}
      >{lessonProgress?.completed ? 'Lesson completed' : 'Mark lesson complete'}</button>
    </div>

    <nav className="learn-lesson-nav" aria-label="Lesson navigation">
      {previous
        ? <button type="button" onClick={() => onNavigate(previous.id)}>← Previous: {previous.title}</button>
        : <span>First published lesson</span>}
      {next
        ? <button type="button" onClick={() => onNavigate(next.id)}>Next: {next.title} →</button>
        : <span>End of published lessons</span>}
    </nav>
  </article>;
}

export function LearnMode() {
  const lessons = publishedLearnLessons;
  const records: ContentRecord[] = learnRegistry.records;
  const progressStore: LearnProgressStore = localLearnProgressStore;
  const [progress, setProgress] = useState(() => progressStore.load());
  const [selectedId, setSelectedId] = useState('');
  const [storageWarning, setStorageWarning] = useState(false);
  const [feedback, setFeedback] = useState('');
  const questionsById = useMemo(() => new Map(records.filter((record): record is KnowledgeCheckRecord => record.type === 'question').map(question => [question.id, question])), [records]);
  const orderedLessons = lessons;
  const selectedIndex = orderedLessons.findIndex(lesson => lesson.id === selectedId);
  const lesson = selectedIndex >= 0 ? orderedLessons[selectedIndex] : undefined;
  const startedCount = orderedLessons.filter(item => progress.lessons[item.id]?.started).length;
  const completedCount = orderedLessons.filter(item => progress.lessons[item.id]?.completed).length;

  const changeProgress = (action: ProgressAction) => setProgress(current => action(current));
  useEffect(() => {
    setStorageWarning(!progressStore.save(progress));
  }, [progress, progressStore]);

  const openLesson = (id: string) => {
    setSelectedId(id);
    if (id) {
      changeProgress(current => markLessonStarted(current, id));
      setFeedback('Lesson opened. Progress is stored only in this browser.');
    }
  };

  const resetProgress = () => {
    setProgress(progressStore.reset());
    setFeedback('Local lesson progress reset.');
  };

  return <section className="learn-mode" aria-labelledby="learn-mode-title">
    {!lesson ? <>
      <header className="learn-heading">
        <p className="eyebrow">ECG FUNDAMENTALS · LEARN</p>
        <h2 id="learn-mode-title">Learn ECG fundamentals</h2>
        <p>Short, structured lessons with interactive signal demonstrations. This standalone module stores progress locally and does not use KYP accounts or services.</p>
      </header>
      <div className="learn-progress-summary" aria-label="Local Learn progress">
        <span><strong>{startedCount}</strong> started</span>
        <span><strong>{completedCount}</strong> completed</span>
        <button className="learn-text-button" type="button" onClick={resetProgress}>Reset local progress</button>
      </div>
      <p className="learn-status-message" role="status" aria-live="polite">{feedback}</p>
      {storageWarning && <p className="learn-storage-warning" role="status">Browser storage is unavailable. Progress remains temporary for this visit.</p>}
      {orderedLessons.length === 0
        ? <section className="learn-empty" aria-labelledby="learn-empty-title">
          <p className="eyebrow">CONTENT REVIEW GATE</p>
          <h3 id="learn-empty-title">No lessons are published yet</h3>
          <p>The introductory lessons and checks are still drafts. They will appear here only after source verification, educational review, and publication approval are recorded for the current versions. No draft answer or unreviewed clinical statement is exposed as a learner lesson.</p>
          <p>The ECG simulator remains available from the section navigation above.</p>
        </section>
        : <>
          <h3 className="learn-catalog-title">Published lessons</h3>
          <ol className="learn-catalog">{orderedLessons.map(item => {
            const itemProgress = progress.lessons[item.id];
            return <li key={item.id}>
              <button className="learn-catalog-item" type="button" onClick={() => openLesson(item.id)}>
                <span className="learn-catalog-sequence">{String(item.lessonContent.sequence).padStart(2, '0')}</span>
                <span className="learn-catalog-copy"><strong>{item.title}</strong><small>{item.summary}</small></span>
                <span className="learn-catalog-status">{itemProgress?.completed ? 'Completed' : itemProgress?.started ? 'In progress' : 'Published'}</span>
              </button>
            </li>;
          })}</ol>
        </>}
    </> : <>
      {storageWarning && <p className="learn-storage-warning" role="status">Browser storage is unavailable. Progress remains temporary for this visit.</p>}
      <LessonReader
        lesson={lesson}
        previous={orderedLessons[selectedIndex - 1]}
        next={orderedLessons[selectedIndex + 1]}
        questions={lesson.lessonContent.knowledgeCheckIds.map(id => questionsById.get(id)).filter((item): item is KnowledgeCheckRecord => item?.publicationStatus === 'published')}
        progress={progress}
        onProgress={changeProgress}
        onNavigate={openLesson}
      />
    </>}
  </section>;
}

