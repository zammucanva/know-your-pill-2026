/**
 * Batch runner: generation in controlled, auditable, resumable batches.
 *
 * A job never materialises its whole quantity at once. Each batch:
 *   plan next slots -> build -> validate -> deduplicate -> accept
 * and is recorded in the job's audit trail. The job is plain serialisable
 * data, so a closed tab can be resumed: accepted questions are kept and
 * blocked from regeneration, and the rest is planned afresh.
 *
 * STOP CONDITIONS (never lowering quality to hit a number):
 *   REQUEST_SATISFIED          the requested quantity was reached
 *   QUESTION_SPACE_EXHAUSTED   no meaningful unused concepts remain
 *   SOURCE_INSUFFICIENT        the selection has no source data to ask about
 *   CANCELLED                  the learner stopped it (valid questions stay)
 *   QUALITY_THRESHOLD          acceptance fell below the configured floor
 *   ERROR                      an unexpected failure (valid questions stay)
 */

import { hashString } from "./normalize";
import { AuthoredIndex, Deduper } from "./dedupe";
import { contextFor, generateQuestion } from "./generate";
import { buildPlan, type Plan } from "./planner";
import { DEFAULT_BATCH_SIZE } from "./request";
import { drugsInScope } from "./syllabus";
import { TEMPLATES } from "./templates";
import { validateQuestion } from "./validate";
import { GENERATOR_VERSION } from "./version";
import type { FactStore } from "./facts";
import type { SeenView } from "./dedupe";
import type { QuestionTemplate, TemplateContext } from "./templates/types";
import type { FactoryRequest, GeneratedQuestion, RejectReason } from "./types";

export type JobStatus =
  | "RUNNING"
  | "COMPLETED"
  | "EXHAUSTED"
  | "INSUFFICIENT"
  | "CANCELLED"
  | "ERROR";

export type CompletionReason =
  | "REQUEST_SATISFIED"
  | "QUESTION_SPACE_EXHAUSTED"
  | "SOURCE_INSUFFICIENT"
  | "CANCELLED"
  | "QUALITY_THRESHOLD"
  | "ERROR";

export interface BatchAudit {
  batchId: string;
  index: number;
  /** Seed of the run (every question also stores its own derived seed). */
  seed: number;
  targetCount: number;
  attempted: number;
  accepted: number;
  duplicates: number;
  rejected: number;
  rejectReasons: Record<string, number>;
  templatesUsed: Record<string, number>;
  durationMs: number;
  generatorVersion: string;
  startedAt: string;
}

export interface JobCounts {
  requested: number;
  /** Candidates successfully built. */
  generated: number;
  /** Candidates that passed validation. */
  validated: number;
  /** Questions accepted into the quiz. */
  accepted: number;
  duplicates: number;
  rejected: number;
  /** requested - accepted. */
  remaining: number;
}

export interface FactoryJob {
  id: string;
  schema: 1;
  generatorVersion: string;
  request: FactoryRequest & { seed: number };
  status: JobStatus;
  completionReason: CompletionReason | null;
  counts: JobCounts;
  questions: GeneratedQuestion[];
  batches: BatchAudit[];
  /** Concepts available for the selection when the job started. */
  space: { total: number; unseen: number };
  /** Anonymous local learner reference (null when none). */
  learnerRef: string | null;
  createdAt: string;
  updatedAt: string;
  errorMessage?: string;
}

export interface FactoryServices {
  store: FactStore;
  authored?: AuthoredIndex;
  history?: SeenView;
  templates?: QuestionTemplate[];
  now?: () => string;
  clock?: () => number;
  learnerRef?: string | null;
  /** Floor on accepted/attempted; below it (after MIN_ATTEMPTS) the job stops. */
  minAcceptanceRate?: number;
}

const MIN_ATTEMPTS_FOR_QUALITY = 200;
const DEFAULT_MIN_ACCEPTANCE = 0.05;
const ATTEMPTS_PER_TARGET = 8;

const emptyCounts = (requested: number): JobCounts => ({
  requested,
  generated: 0,
  validated: 0,
  accepted: 0,
  duplicates: 0,
  rejected: 0,
  remaining: requested,
});

export class FactoryRunner {
  private plan: Plan;
  private deduper: Deduper;
  private ctx: TemplateContext;
  private positionCounts = [0, 0, 0, 0];
  private attemptsTotal = 0;
  private readonly now: () => string;
  private readonly clock: () => number;
  private readonly minAcceptance: number;
  private resumes = 0;
  private current: FactoryJob;

  private constructor(job: FactoryJob, private readonly services: FactoryServices, resumes: number) {
    this.current = job;
    this.resumes = resumes;
    this.now = services.now ?? (() => new Date().toISOString());
    this.clock = services.clock ?? (() => performance.now());
    this.minAcceptance = services.minAcceptanceRate ?? DEFAULT_MIN_ACCEPTANCE;

    const scopeDrugs = drugsInScope(services.store, job.request.scope);
    const s = job.request.scope;
    this.ctx = contextFor(services.store, scopeDrugs, !s.chapter && !s.topic && !s.subtopic);

    for (const q of job.questions) this.positionCounts[q.correctIndex]++;
    this.attemptsTotal = job.batches.reduce((n, b) => n + b.attempted, 0);

    this.deduper = new Deduper({
      authored: services.authored,
      history: services.history,
      neverRepeat: job.request.neverRepeat,
      accepted: job.questions.map((q) => q.fingerprint),
    });
    this.plan = this.makePlan();
  }

  /** Begin a new job from an already-validated request. */
  static start(
    request: FactoryRequest & { seed: number },
    services: FactoryServices
  ): FactoryRunner {
    const now = (services.now ?? (() => new Date().toISOString()))();
    const job: FactoryJob = {
      id: `qf-job-${hashString(`${JSON.stringify(request)}|${now}`)}`,
      schema: 1,
      generatorVersion: GENERATOR_VERSION,
      request,
      status: "RUNNING",
      completionReason: null,
      counts: emptyCounts(request.count),
      questions: [],
      batches: [],
      space: { total: 0, unseen: 0 },
      learnerRef: services.learnerRef ?? null,
      createdAt: now,
      updatedAt: now,
    };
    const runner = new FactoryRunner(job, services, 0);
    runner.current.space = { total: runner.plan.total, unseen: runner.plan.unseen };
    if (runner.plan.total === 0) runner.finish("INSUFFICIENT", "SOURCE_INSUFFICIENT");
    return runner;
  }

  /** Continue a stored job. Accepted questions are kept and never rebuilt. */
  static resume(job: FactoryJob, services: FactoryServices): FactoryRunner {
    const copy: FactoryJob = JSON.parse(JSON.stringify(job)) as FactoryJob;
    const resumes = copy.batches.length + 1;
    copy.status = copy.counts.accepted >= copy.counts.requested ? "COMPLETED" : "RUNNING";
    copy.completionReason = copy.status === "COMPLETED" ? "REQUEST_SATISFIED" : null;
    return new FactoryRunner(copy, services, resumes);
  }

  private makePlan(): Plan {
    const { request } = this.current;
    return buildPlan({
      ctx: this.ctx,
      templates: this.services.templates ?? TEMPLATES,
      kind: request.kind,
      difficulty: request.difficulty,
      // a resumed run explores in a new order but under the same seed family
      seed: request.seed + this.resumes,
      blocked: (fp) => this.deduper.blockedBeforeBuild(fp) !== null,
      seen: (fp) => this.services.history?.has(fp) ?? false,
      allowSeenReuse: !request.neverRepeat,
    });
  }

  /** A snapshot safe to persist or render. */
  get job(): FactoryJob {
    return this.current;
  }

  get isRunning(): boolean {
    return this.current.status === "RUNNING";
  }

  private finish(status: JobStatus, reason: CompletionReason, errorMessage?: string): void {
    this.current.status = status;
    this.current.completionReason = reason;
    this.current.updatedAt = this.now();
    if (errorMessage) this.current.errorMessage = errorMessage;
  }

  cancel(): void {
    if (this.current.status === "RUNNING") this.finish("CANCELLED", "CANCELLED");
  }

  /** "Generate more": raise the requested total and continue. */
  extend(additional: number): void {
    if (additional < 1) return;
    const job = this.current;
    job.request = { ...job.request, count: job.request.count + additional };
    job.counts.requested = job.request.count;
    job.counts.remaining = job.counts.requested - job.counts.accepted;
    if (job.status === "EXHAUSTED" || job.status === "INSUFFICIENT") return; // nothing new to draw
    job.status = "RUNNING";
    job.completionReason = null;
    job.updatedAt = this.now();
  }

  /** Run one batch. Returns its audit record, or null if the job is not running. */
  runBatch(batchSize: number = DEFAULT_BATCH_SIZE): BatchAudit | null {
    const job = this.current;
    if (job.status !== "RUNNING") return null;

    const started = this.clock();
    const index = job.batches.length + 1;
    const target = Math.max(1, Math.min(batchSize, job.counts.requested - job.counts.accepted));
    const audit: BatchAudit = {
      batchId: `${job.id}-b${index}`,
      index,
      seed: job.request.seed,
      targetCount: target,
      attempted: 0,
      accepted: 0,
      duplicates: 0,
      rejected: 0,
      rejectReasons: {},
      templatesUsed: {},
      durationMs: 0,
      generatorVersion: GENERATOR_VERSION,
      startedAt: this.now(),
    };
    const reject = (reason: RejectReason, isDuplicate: boolean) => {
      audit.rejectReasons[reason] = (audit.rejectReasons[reason] ?? 0) + 1;
      if (isDuplicate) {
        audit.duplicates++;
        job.counts.duplicates++;
      } else {
        audit.rejected++;
        job.counts.rejected++;
      }
    };

    try {
      let exhausted = false;
      const attemptCap = target * ATTEMPTS_PER_TARGET;
      while (audit.accepted < target && audit.attempted < attemptCap) {
        const planned = this.plan.next();
        if (!planned) {
          exhausted = true;
          break;
        }
        audit.attempted++;
        this.attemptsTotal++;

        const built = generateQuestion({
          template: planned.template,
          slot: planned.slot,
          ctx: this.ctx,
          jobSeed: job.request.seed + this.resumes,
          batchId: audit.batchId,
          positionCounts: this.positionCounts,
          now: this.now,
        });
        if (!built.ok) {
          reject(built.reason, false);
          continue;
        }
        job.counts.generated++;

        const question = built.question;
        if (validateQuestion(question, this.services.store).length > 0) {
          reject("VALIDATION_FAILED", false);
          continue;
        }
        job.counts.validated++;
        question.status = "VALIDATED";

        const duplicate = this.deduper.check(
          question.fingerprint,
          question.stem,
          question.options[question.correctIndex].text
        );
        if (duplicate) {
          reject(duplicate, true);
          continue;
        }

        question.status = "PUBLISHED"; // validated + unique = available for quiz
        this.deduper.accept(question.fingerprint);
        this.positionCounts[question.correctIndex]++;
        job.questions.push(question);
        job.counts.accepted++;
        audit.accepted++;
        audit.templatesUsed[question.provenance.templateId] =
          (audit.templatesUsed[question.provenance.templateId] ?? 0) + 1;
      }

      audit.durationMs = Math.round(this.clock() - started);
      job.batches.push(audit);
      job.counts.remaining = Math.max(0, job.counts.requested - job.counts.accepted);
      job.updatedAt = this.now();

      if (job.counts.accepted >= job.counts.requested) {
        this.finish("COMPLETED", "REQUEST_SATISFIED");
      } else if (exhausted || this.plan.remaining() === 0) {
        this.finish(
          job.counts.accepted === 0 ? "INSUFFICIENT" : "EXHAUSTED",
          job.counts.accepted === 0 ? "SOURCE_INSUFFICIENT" : "QUESTION_SPACE_EXHAUSTED"
        );
      } else if (
        this.attemptsTotal >= MIN_ATTEMPTS_FOR_QUALITY &&
        job.counts.accepted / this.attemptsTotal < this.minAcceptance
      ) {
        this.finish("EXHAUSTED", "QUALITY_THRESHOLD");
      }
    } catch (error) {
      audit.durationMs = Math.round(this.clock() - started);
      job.batches.push(audit);
      this.finish("ERROR", "ERROR", error instanceof Error ? error.message : String(error));
    }
    return audit;
  }

  /** Run batches until the job stops. For tests and non-interactive use. */
  runToCompletion(batchSize: number = DEFAULT_BATCH_SIZE): FactoryJob {
    while (this.isRunning) this.runBatch(batchSize);
    return this.current;
  }
}
