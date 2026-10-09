"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Play, RotateCcw, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { KypLoader } from "@/components/kyp/ui/kyp-loader";
import { MAX_PER_REQUEST } from "@/lib/kyp/question-factory/request";
import { StoredHistory } from "@/lib/kyp/question-factory/history";
import { stageFactoryQuiz, FACTORY_QUIZ_PARAM, markQuizSeen } from "@/lib/kyp/question-factory/handoff";
import { toTestQuestion } from "@/lib/kyp/question-factory/integration";
import type { FactoryJob, FactoryRunner } from "@/lib/kyp/question-factory/batch";
import type { FactStore } from "@/lib/kyp/question-factory/facts";
import type { SyllabusNode } from "@/lib/kyp/question-factory/syllabus";
import type { SpaceEstimate } from "@/lib/kyp/question-factory/space";
import type {
  DifficultySelection,
  KindSelection,
  Scope,
} from "@/lib/kyp/question-factory/types";

/* The engine is loaded on demand: the registry and the authored bank are
   large, and none of it is needed until this page is opened. */
type Engine = typeof import("@/lib/kyp/question-factory/batch");
interface Loaded {
  engine: Engine;
  store: FactStore;
  syllabus: SyllabusNode[];
  authored: import("@/lib/kyp/question-factory/dedupe").AuthoredIndex;
  syl: typeof import("@/lib/kyp/question-factory/syllabus");
  req: typeof import("@/lib/kyp/question-factory/request");
  space: typeof import("@/lib/kyp/question-factory/space");
  gen: typeof import("@/lib/kyp/question-factory/generate");
}

const JOB_KEY = "kyp:factory:job:v1";

function local(): Storage | null {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null;
  }
}

function saveJob(job: FactoryJob): void {
  try {
    local()?.setItem(JOB_KEY, JSON.stringify(job));
  } catch {
    // too large or blocked: resume simply is not offered
  }
}
function clearJob(): void {
  try {
    local()?.removeItem(JOB_KEY);
  } catch {
    // ignore
  }
}
function loadJob(): FactoryJob | null {
  try {
    const raw = local()?.getItem(JOB_KEY);
    if (!raw) return null;
    const job = JSON.parse(raw) as FactoryJob;
    return job && job.schema === 1 && Array.isArray(job.questions) ? job : null;
  } catch {
    return null;
  }
}

const yieldToBrowser = () => new Promise<void>((r) => setTimeout(r, 0));

const selectClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground kyp-focus-ring";
const labelClass = "block text-sm font-medium text-foreground";

const OUTCOME: Record<string, string> = {
  REQUEST_SATISFIED: "Your quiz is ready.",
  QUESTION_SPACE_EXHAUSTED:
    "You have seen every distinct question this selection can honestly produce. Pick a wider area or a different difficulty for more.",
  SOURCE_INSUFFICIENT:
    "INSUFFICIENT SOURCE DATA: the reviewed content for this selection does not contain enough facts to build questions.",
  CANCELLED: "Generation was stopped. The valid questions so far are kept.",
  QUALITY_THRESHOLD:
    "Generation stopped because too few candidates passed the quality checks. Quality is never lowered to reach a number.",
  ERROR: "Generation stopped because of an unexpected problem. The valid questions so far are kept.",
};

export function FactoryBuilder() {
  const router = useRouter();
  const [loaded, setLoaded] = React.useState<Loaded | null>(null);
  const [loadError, setLoadError] = React.useState<string | null>(null);

  const [chapter, setChapter] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [subtopic, setSubtopic] = React.useState("");
  const [count, setCount] = React.useState(20);
  const [difficulty, setDifficulty] = React.useState<DifficultySelection>("mixed");
  const [kind, setKind] = React.useState<KindSelection>("mixed");
  const [neverRepeat, setNeverRepeat] = React.useState(true);
  const [seedText, setSeedText] = React.useState("");

  const [errors, setErrors] = React.useState<string[]>([]);
  const [job, setJob] = React.useState<FactoryJob | null>(null);
  const [running, setRunning] = React.useState(false);
  const [saved, setSaved] = React.useState<FactoryJob | null>(null);
  const runnerRef = React.useRef<FactoryRunner | null>(null);
  const cancelRef = React.useRef(false);
  const historyRef = React.useRef<StoredHistory | null>(null);

  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [engine, registry, authoredSrc, syl, req, space, gen] = await Promise.all([
          import("@/lib/kyp/question-factory/batch"),
          import("@/lib/kyp/question-factory/registry-source"),
          import("@/lib/kyp/question-factory/authored-source"),
          import("@/lib/kyp/question-factory/syllabus"),
          import("@/lib/kyp/question-factory/request"),
          import("@/lib/kyp/question-factory/space"),
          import("@/lib/kyp/question-factory/generate"),
        ]);
        if (!alive) return;
        const store = registry.getRegistryFactStore();
        historyRef.current = new StoredHistory(local());
        setLoaded({
          engine,
          store,
          syllabus: syl.buildSyllabus(store),
          authored: authoredSrc.getAuthoredIndex(),
          syl,
          req,
          space,
          gen,
        });
        const stored = loadJob();
        if (stored && stored.counts.accepted < stored.counts.requested && stored.status !== "EXHAUSTED" && stored.status !== "INSUFFICIENT") {
          setSaved(stored);
        }
      } catch (e) {
        if (alive) setLoadError(e instanceof Error ? e.message : "The question factory could not load.");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const subject = loaded?.syllabus[0];
  const chapters = subject?.children ?? [];
  const topics = chapters.find((c) => c.label === chapter)?.children ?? [];
  const drugs = topics.find((t) => t.label === topic)?.children ?? [];

  const scope: Scope = React.useMemo(() => {
    const s: Scope = {};
    if (subject) s.subject = subject.label;
    if (chapter) s.chapter = chapter;
    if (topic) s.topic = topic;
    if (subtopic) s.subtopic = subtopic;
    return s;
  }, [subject, chapter, topic, subtopic]);

  const estimate: SpaceEstimate | null = React.useMemo(() => {
    if (!loaded) return null;
    try {
      const inScope = loaded.syl.drugsInScope(loaded.store, scope);
      if (inScope.length === 0) return null;
      const ctx = loaded.gen.contextFor(loaded.store, inScope, !chapter && !topic && !subtopic);
      return loaded.space.estimateSpace(ctx, kind, difficulty, historyRef.current);
    } catch {
      return null;
    }
  }, [loaded, scope, chapter, topic, subtopic, kind, difficulty]);

  const scopeLabel = subtopic
    ? drugs.find((d) => d.slug === subtopic)?.label ?? "selection"
    : topic || chapter || "all medications";

  const drive = async (runner: FactoryRunner) => {
    runnerRef.current = runner;
    cancelRef.current = false;
    setRunning(true);
    try {
      while (runner.isRunning) {
        if (cancelRef.current) {
          runner.cancel();
          break;
        }
        runner.runBatch();
        setJob({ ...runner.job });
        saveJob(runner.job);
        await yieldToBrowser();
      }
    } catch (e) {
      runner.job.status = "ERROR";
      runner.job.completionReason = "ERROR";
      runner.job.errorMessage = e instanceof Error ? e.message : "unexpected error";
    }
    setJob({ ...runner.job });
    saveJob(runner.job);
    setRunning(false);
  };

  const services = (l: Loaded) => ({
    store: l.store,
    authored: l.authored,
    history: historyRef.current ?? undefined,
  });

  const generate = () => {
    if (!loaded || running) return;
    const parsedSeed = seedText.trim() === "" ? undefined : Number(seedText);
    const result = loaded.req.validateRequest(
      { scope, count, difficulty, kind, neverRepeat, seed: parsedSeed },
      loaded.store
    );
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setErrors([]);
    setSaved(null);
    const runner = loaded.engine.FactoryRunner.start(result.request, services(loaded));
    setJob({ ...runner.job });
    void drive(runner);
  };

  const resumeSaved = () => {
    if (!loaded || !saved || running) return;
    const runner = loaded.engine.FactoryRunner.resume(saved, services(loaded));
    setSaved(null);
    setJob({ ...runner.job });
    void drive(runner);
  };

  const generateMore = () => {
    const runner = runnerRef.current;
    if (!runner || running) return;
    runner.extend(Math.min(count, MAX_PER_REQUEST));
    setJob({ ...runner.job });
    void drive(runner);
  };

  const startQuiz = () => {
    if (!job || job.questions.length === 0) return;
    const questions = job.questions.map(toTestQuestion);
    if (historyRef.current) markQuizSeen(job.questions.map((q) => q.fingerprint), historyRef.current);
    if (stageFactoryQuiz(questions, `Question Factory: ${scopeLabel}`)) {
      clearJob();
      router.push(`/quiz/custom?${FACTORY_QUIZ_PARAM}=1`);
    } else {
      setErrors(["Your browser blocked temporary storage, so the quiz could not be started."]);
    }
  };

  const reset = () => {
    if (running) return;
    clearJob();
    runnerRef.current = null;
    setJob(null);
    setErrors([]);
  };

  if (loadError) {
    return (
      <p role="alert" className="mt-10 text-sm text-destructive">
        {loadError}
      </p>
    );
  }
  if (!loaded) {
    return (
      <KypLoader
        title="Loading the reviewed content…"
        subtitle="Preparing the medications and source facts on your device."
        delayMs={200}
      />
    );
  }

  const counts = job?.counts;
  const pct = counts ? Math.min(100, Math.round((counts.accepted / Math.max(1, counts.requested)) * 100)) : 0;
  const finished = job && !running && job.status !== "RUNNING";
  const hasQuestions = !!job && job.questions.length > 0;
  const canMore = finished && job.status !== "EXHAUSTED" && job.status !== "INSUFFICIENT" && job.status !== "ERROR";

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
      <div className="space-y-6">
        {saved && !job && (
          <div role="status" className="rounded-xl border border-brand/30 bg-brand/5 p-4 text-sm">
            <p className="font-medium text-foreground">
              An unfinished run was found: {saved.counts.accepted} of {saved.counts.requested} questions.
            </p>
            <div className="mt-3 flex gap-2">
              <button type="button" onClick={resumeSaved} className="rounded-lg kyp-glass bg-brand px-4 py-2 text-sm font-semibold text-white kyp-focus-ring">
                Resume
              </button>
              <button
                type="button"
                onClick={() => {
                  clearJob();
                  setSaved(null);
                }}
                className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground kyp-focus-ring"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        <fieldset disabled={running} className="space-y-4 disabled:opacity-60">
          <legend className="text-lg font-semibold text-foreground">What do you want to practise?</legend>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="qf-chapter" className={labelClass}>Chapter</label>
              <select
                id="qf-chapter"
                className={selectClass}
                value={chapter}
                onChange={(e) => {
                  setChapter(e.target.value);
                  setTopic("");
                  setSubtopic("");
                }}
              >
                <option value="">All chapters</option>
                {chapters.map((c) => (
                  <option key={c.label} value={c.label}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="qf-topic" className={labelClass}>Topic</label>
              <select
                id="qf-topic"
                className={selectClass}
                value={topic}
                disabled={!chapter}
                onChange={(e) => {
                  setTopic(e.target.value);
                  setSubtopic("");
                }}
              >
                <option value="">All topics</option>
                {topics.map((t) => (
                  <option key={t.label} value={t.label}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="qf-subtopic" className={labelClass}>Medication</label>
              <select
                id="qf-subtopic"
                className={selectClass}
                value={subtopic}
                disabled={!topic}
                onChange={(e) => setSubtopic(e.target.value)}
              >
                <option value="">All medications</option>
                {drugs.map((d) => (
                  <option key={d.slug} value={d.slug}>{d.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="qf-count" className={labelClass}>Questions (max {MAX_PER_REQUEST} per run)</label>
              <input
                id="qf-count"
                type="number"
                min={1}
                max={MAX_PER_REQUEST}
                className={selectClass}
                value={count}
                onChange={(e) => setCount(Math.trunc(Number(e.target.value)) || 0)}
              />
            </div>
            <div>
              <label htmlFor="qf-difficulty" className={labelClass}>Difficulty</label>
              <select id="qf-difficulty" className={selectClass} value={difficulty} onChange={(e) => setDifficulty(e.target.value as DifficultySelection)}>
                <option value="mixed">Mixed</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <label htmlFor="qf-kind" className={labelClass}>Question type</label>
              <select id="qf-kind" className={selectClass} value={kind} onChange={(e) => setKind(e.target.value as KindSelection)}>
                <option value="mixed">Mixed</option>
                <option value="standard">Standard recall</option>
                <option value="conceptual">Conceptual</option>
                <option value="clinical">Clinical style</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-6">
            <label className="inline-flex items-center gap-2 text-sm text-foreground">
              <input type="checkbox" checked={neverRepeat} onChange={(e) => setNeverRepeat(e.target.checked)} />
              Never repeat a question I have already seen
            </label>
            <div>
              <label htmlFor="qf-seed" className="block text-xs text-muted-foreground">Seed (optional, repeats the same run)</label>
              <input
                id="qf-seed"
                inputMode="numeric"
                className="w-40 rounded-lg border border-border bg-background px-3 py-1.5 text-sm kyp-focus-ring"
                value={seedText}
                onChange={(e) => setSeedText(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="random"
              />
            </div>
          </div>
        </fieldset>

        {errors.length > 0 && (
          <ul role="alert" className="list-disc space-y-1 pl-5 text-sm text-destructive">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-3">
          {!running ? (
            <button
              type="button"
              onClick={generate}
              className="inline-flex items-center gap-2 rounded-lg kyp-glass bg-brand px-5 py-3 text-sm font-semibold text-white kyp-focus-ring"
            >
              <Play className="h-4 w-4" aria-hidden />
              {job ? "Generate again" : "Generate questions"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                cancelRef.current = true;
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground kyp-focus-ring"
            >
              <Square className="h-4 w-4" aria-hidden />
              Cancel
            </button>
          )}
          {job && !running && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground kyp-focus-ring"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Clear
            </button>
          )}
        </div>

        {job && counts && (
          <section aria-label="Generation progress" className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">
                {running ? "Generating…" : OUTCOME[job.completionReason ?? ""] ?? "Done."}
              </span>
              <span className="tabular-nums text-muted-foreground">
                {counts.accepted} of {counts.requested}
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              aria-label="Questions generated"
              className="mt-3 h-2 overflow-hidden rounded-full bg-muted"
            >
              <div className={cn("h-full bg-brand transition-all")} style={{ width: `${pct}%` }} />
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {[
                ["Built", counts.generated],
                ["Passed checks", counts.validated],
                ["Duplicates skipped", counts.duplicates],
                ["Rejected", counts.rejected],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt className="text-xs text-muted-foreground">{k}</dt>
                  <dd className="font-semibold tabular-nums text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">
              {job.batches.length} batch{job.batches.length === 1 ? "" : "es"} run. Seed {job.request.seed}.
              {job.status === "ERROR" && job.errorMessage ? ` Error: ${job.errorMessage}` : ""}
            </p>

            {finished && hasQuestions && (
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={startQuiz}
                  className="inline-flex items-center gap-2 rounded-lg kyp-glass bg-brand px-5 py-3 text-sm font-semibold text-white kyp-focus-ring"
                >
                  <Play className="h-4 w-4" aria-hidden />
                  Start quiz ({job.questions.length})
                </button>
                {canMore && (
                  <button
                    type="button"
                    onClick={generateMore}
                    className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground kyp-focus-ring"
                  >
                    Generate {Math.min(count, MAX_PER_REQUEST)} more
                  </button>
                )}
              </div>
            )}
          </section>
        )}
      </div>

      <aside aria-label="Question space" className="h-fit rounded-xl border border-border bg-card p-5 text-sm">
        <h2 className="text-base font-semibold text-foreground">Question space</h2>
        {estimate ? (
          <>
            <dl className="mt-3 space-y-2">
              <div className="flex justify-between"><dt className="text-muted-foreground">Distinct concepts</dt><dd className="font-semibold tabular-nums">{estimate.total}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Not yet seen</dt><dd className="font-semibold tabular-nums">{estimate.remaining}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Already seen</dt><dd className="font-semibold tabular-nums">{estimate.seen}</dd></div>
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{estimate.note}</p>
            {estimate.total === 0 && (
              <p className="mt-3 text-xs font-medium text-foreground">
                INSUFFICIENT SOURCE DATA for this selection and difficulty.
              </p>
            )}
          </>
        ) : (
          <p className="mt-3 text-xs text-muted-foreground">Choose part of the syllabus to see how many questions it can produce.</p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          The number is finite: it is limited by what the reviewed content actually says. When it runs out,
          the factory tells you instead of repeating itself.
        </p>
      </aside>
    </div>
  );
}
