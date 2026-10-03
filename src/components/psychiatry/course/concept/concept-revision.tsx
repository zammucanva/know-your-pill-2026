"use client";

import * as React from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Lightbulb,
  Printer,
  RotateCcw,
  X,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { cn } from "@/lib/utils";
import {
  clampSentences,
  splitRevisionParagraph,
} from "@/lib/kyp/psychiatry-concept-visibility";
import type { PsychiatryCourse } from "../course-types";
import type {
  ClinicalDecisionPath,
  CommonMistake,
  ExamLens,
} from "@/lib/kyp/data/types";
import type { DiseaseClinicalCase } from "@/lib/kyp/data/disease-types";
import { ConceptSectionHeader, ConceptAccordion, EvidenceGradeDot, ConceptProse } from "./concept-ui";

/* ============================================================
   Concept lesson sections — Lessons 4–6 (redesign B).
   ============================================================ */

/** Lesson 4 — Indian practice. Long prose fields render through the
 *  ConceptProse wall guard (declutter mission). */
export function ConceptIndianPractice({ course }: { course: PsychiatryCourse }) {
  const ip = course.indianPractice;
  return (
    <Section spacing="tight" id="indian-practice" className="bg-muted/20">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Indian Practice"
          lede="How this plays out in Indian healthcare."
        />
        <div className="space-y-4">
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/30">
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">Where the patient meets the system</p>
              <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">
                <ConceptProse text={ip.systemContext} maxWords={60} />
              </p>
            </CardBody>
          </CardPrimitive>
          <div className="grid gap-4 sm:grid-cols-2">
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand-ink">Indian guidelines</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">
                  <ConceptProse text={ip.indianGuidelines} maxWords={60} />
                </p>
              </CardBody>
            </CardPrimitive>
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand-ink">Programmes &amp; law</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">
                  <ConceptProse text={ip.programmeContext} maxWords={60} />
                </p>
              </CardBody>
            </CardPrimitive>
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand-ink">Cost &amp; access</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">
                  <ConceptProse text={ip.costConsiderations} maxWords={60} />
                </p>
              </CardBody>
            </CardPrimitive>
            <CardPrimitive variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <p className="text-overline text-brand-ink">Culture &amp; family</p>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/80">
                  <ConceptProse text={ip.culturalConsiderations} maxWords={60} />
                </p>
              </CardBody>
            </CardPrimitive>
          </div>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody className="p-4">
              <p className="text-h4 text-foreground">Counselling points for Indian practice</p>
              <ul className="mt-3 space-y-1.5">
                {ip.patientCounselling.map((point, i) => (
                  <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/70" strokeWidth={2.5} aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   Lesson 4 — the decision wizard (redesign G): one question at
   a time, answer buttons, Back, Start over, a breadcrumb of the
   choices taken, and the recommendation as a result card using
   the existing text. Rendered content is exactly the existing
   decision-path data — no new claims.
   ============================================================ */

interface WizardState {
  nodeId: string;
  choices: Array<{ label: string; nodeTitle: string }>;
}

export function ConceptDecisionWizard({ path }: { path: ClinicalDecisionPath }) {
  const nodeById = React.useMemo(
    () => new Map(path.nodes.map((n) => [n.id, n])),
    [path]
  );
  const [state, setState] = React.useState<WizardState>({
    nodeId: path.nodes[0]?.id ?? "",
    choices: [],
  });
  const [announce, setAnnounce] = React.useState("");

  const node = nodeById.get(state.nodeId);
  const isTerminal = !node?.branches || node.branches.length === 0;

  const choose = (branchLabel: string, nextId: string) => {
    const next = nodeById.get(nextId);
    setState((s) => ({
      nodeId: nextId,
      choices: [...s.choices, { label: branchLabel, nodeTitle: next?.question ?? "" }],
    }));
    setAnnounce(`Question: ${next?.question ?? ""}`);
  };
  const back = () => {
    setState((s) => {
      if (s.choices.length === 0) return s;
      const choices = s.choices.slice(0, -1);
      const nodeId =
        choices.length > 0
          ? (nodeById.get(
              // return to the node that offered the last choice
              path.nodes.find((n) =>
                n.branches?.some((b) => b.next === s.nodeId)
              )?.id ?? path.nodes[0].id
            )?.id ?? path.nodes[0].id)
          : path.nodes[0].id;
      return { nodeId, choices };
    });
  };
  const startOver = () => {
    setState({ nodeId: path.nodes[0].id, choices: [] });
    setAnnounce(`Question: ${path.nodes[0].question}`);
  };

  if (!node) return null;

  return (
    <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-6">
      {/* Breadcrumb of choices taken */}
      <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-muted-foreground">
        <button
          type="button"
          onClick={startOver}
          className="font-medium text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Start
        </button>
        {state.choices.map((choice, i) => (
          <React.Fragment key={i}>
            <span aria-hidden>→</span>
            <span className="rounded-md bg-muted px-1.5 py-0.5">{choice.label}</span>
          </React.Fragment>
        ))}
      </div>

      <p className="text-body-sm font-semibold leading-snug text-foreground">{node.question}</p>

      {isTerminal ? (
        <div className="mt-4 space-y-2">
          {node.recommendation && (
            <p className="rounded-lg border border-success/25 bg-success-soft/25 px-3 py-2 text-caption leading-relaxed text-foreground/85">
              <span className="font-semibold text-success">Recommendation: </span>
              {node.recommendation}
            </p>
          )}
          {node.reasoning && (
            <p className="text-caption leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground/60">Why: </span>
              {node.reasoning}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {node.branches?.map((branch, i) => (
            <button
              key={i}
              type="button"
              onClick={() => choose(branch.label, branch.next)}
              className="kyp-touch-y inline-flex items-center justify-between gap-2 rounded-lg border border-brand/30 bg-brand-soft/40 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-brand/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {branch.label}
              <ArrowRight className="h-3 w-3 shrink-0" aria-hidden />
            </button>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
        <button
          type="button"
          onClick={back}
          disabled={state.choices.length === 0}
          className="kyp-touch-y inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ArrowLeft className="h-3 w-3" aria-hidden /> Back
        </button>
        <button
          type="button"
          onClick={startOver}
          className="kyp-touch-y inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <RotateCcw className="h-3 w-3" aria-hidden /> Start over
        </button>
      </div>
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
    </div>
  );
}

export function ConceptDecisionPathSection({ course }: { course: PsychiatryCourse }) {
  if (!course.decisionPath) return null;
  return (
    <Section spacing="tight" id="decision-path">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Decision Path"
          lede={course.decisionPath.title}
        />
        <p className="mb-4 text-caption leading-relaxed text-muted-foreground">
          An educational decision tree, never a substitute for professional judgment. Work through
          one question at a time.
        </p>
        <ConceptDecisionWizard path={course.decisionPath} />
      </Container>
    </Section>
  );
}

/** Lesson 4 — common mistakes as accordions (redesign C). */
export function ConceptCommonMistakes({ course }: { course: PsychiatryCourse }) {
  if (!course.commonMistakes || course.commonMistakes.length === 0) return null;
  return (
    <Section spacing="tight" id="common-mistakes" className="bg-muted/20">
      <Container width="narrow">
        <ConceptSectionHeader title="Common Mistakes" lede="What goes wrong, and the correction." />
        <ConceptAccordion
          label={`${course.title} common mistakes`}
          entries={course.commonMistakes.map((mistake: CommonMistake, i) => ({
            id: `mistake-${i}`,
            title: mistake.mistake,
            content: (
              <div className="space-y-2">
                <p className="text-caption leading-relaxed text-muted-foreground">
                  <AlertCircle className="mr-1 inline h-3 w-3 -mt-0.5 text-warning" aria-hidden />
                  {mistake.why}
                </p>
                <p className="text-caption leading-relaxed text-foreground/90">
                  <Check className="mr-1 inline h-3 w-3 -mt-0.5 text-success" aria-hidden />
                  {mistake.correction}
                </p>
              </div>
            ),
          }))}
        />
      </Container>
    </Section>
  );
}

/* ============================================================
   Lesson 5 — exam content as accessible tabs (redesign C):
   tablist semantics, arrow-key navigation, URL hash support,
   first tab selected by default; sub-groups render as small
   headed lists.
   ============================================================ */

const EXAM_TABS = [
  { key: "mbbs", label: "MBBS" },
  { key: "neetPg", label: "NEET PG" },
  { key: "inicet", label: "INICET" },
  { key: "fmge", label: "FMGE" },
  { key: "psychiatryResidency", label: "Residency" },
] as const;

type ExamTabKey = (typeof EXAM_TABS)[number]["key"];

export function ConceptExamLens({ course }: { course: PsychiatryCourse }) {
  const lens: ExamLens | undefined = course.examLens;
  const groupsByTab: Record<ExamTabKey, Array<{ label: string; items: string[] }>> = {
    mbbs: [
      { label: "Viva", items: lens?.mbbs.viva ?? [] },
      { label: "Practical", items: lens?.mbbs.practical ?? [] },
      { label: "Long answer", items: lens?.mbbs.longAnswer ?? [] },
    ],
    neetPg: [
      { label: "High-yield", items: lens?.neetPg.highYield ?? [] },
      { label: "PYQ concepts", items: lens?.neetPg.pyqConcepts ?? [] },
    ],
    inicet: [{ label: "Clinical reasoning", items: lens?.inicet.clinicalReasoning ?? [] }],
    fmge: [{ label: "Frequently tested", items: lens?.fmge.frequentlyTested ?? [] }],
    psychiatryResidency: [
      { label: "Advanced pearls", items: lens?.psychiatryResidency.advancedPearls ?? [] },
    ],
  };

  // First tab that has content (fallback: MBBS)
  const firstWithContent =
    EXAM_TABS.find((t) => groupsByTab[t.key].some((g) => g.items.length > 0))?.key ?? "mbbs";

  // Null until mount: the SSR / no-JS render keeps EVERY exam panel
  // stacked and readable (progressive enhancement), exactly like the
  // lesson panels. With JS on, the first content tab is selected.
  const [tab, setTab] = React.useState<ExamTabKey | null>(null);
  const tabRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  // With JS on, select the first content tab (the no-JS render keeps
  // every panel stacked).
  React.useEffect(() => {
    setTab((current) => current ?? firstWithContent);
  }, [firstWithContent]);

  // URL hash support: #exam-<tab>
  React.useEffect(() => {
    const applyHash = () => {
      const m = window.location.hash.match(/^#exam-([a-z]+)$/i);
      if (m) {
        const key = m[1] as ExamTabKey;
        if (EXAM_TABS.some((t) => t.key === key)) setTab(key);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectTab = (key: ExamTabKey) => {
    setTab(key);
    window.history.replaceState(null, "", `#exam-${key}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const idx = EXAM_TABS.findIndex((t) => t.key === tab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = EXAM_TABS[(idx + 1) % EXAM_TABS.length];
      selectTab(next.key);
      tabRefs.current[next.key]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = EXAM_TABS[(idx - 1 + EXAM_TABS.length) % EXAM_TABS.length];
      selectTab(prev.key);
      tabRefs.current[prev.key]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      const first = EXAM_TABS.find((t) => groupsByTab[t.key].some((g) => g.items.length > 0)) ?? EXAM_TABS[0];
      selectTab(first.key);
      tabRefs.current[first.key]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = [...EXAM_TABS].reverse().find((t) => groupsByTab[t.key].some((g) => g.items.length > 0)) ?? EXAM_TABS[EXAM_TABS.length - 1];
      selectTab(last.key);
      tabRefs.current[last.key]?.focus();
    }
  };

  return (
    <Section spacing="tight" id="exam-lens" className="bg-muted/20">
      <Container width="narrow">
        <ConceptSectionHeader
          title="Exam Content"
          lede="The exam lens: by examination. KYP Practice Questions unless a verified previous-year concept is named."
        />
        <div
          role="tablist"
          aria-label="Exam content by examination"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2"
        >
          {EXAM_TABS.map((t) => {
            const hasContent = groupsByTab[t.key].some((g) => g.items.length > 0);
            if (!hasContent) return null;
            const selected = tab === t.key;
            return (
              <button
                key={t.key}
                ref={(el) => {
                  tabRefs.current[t.key] = el;
                }}
                type="button"
                role="tab"
                id={`exam-tab-${t.key}`}
                aria-selected={selected}
                aria-controls={`exam-panel-${t.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(t.key)}
                className={cn(
                  "kyp-touch-y rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                  selected
                    ? "border-brand/40 bg-brand-soft/50 text-brand-ink"
                    : "border-border/70 bg-card text-muted-foreground hover:border-brand/30 hover:text-foreground"
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        {/* Panels for every content tab stay in the DOM (hidden with
            the `hidden` class rather than unmounted) so no-JS readers
            and the print sheet keep every exam list. `hidden` (not
            sr-only) keeps inactive panels OUT of the accessibility
            tree — no ghost focus targets (declutter mission). */}
        {EXAM_TABS.map((t) => {
          const groups = groupsByTab[t.key];
          const hasContent = groups.some((g) => g.items.length > 0);
          if (!hasContent) return null;
          const selected = tab === t.key;
          return (
            <div
              key={t.key}
              role="tabpanel"
              id={`exam-panel-${t.key}`}
              aria-labelledby={`exam-tab-${t.key}`}
              className={cn("mt-6 concept-exam-panel", tab !== null && !selected && "hidden")}
            >
              {groups.map((group, gi) => (
                <div key={group.label} className={cn(gi > 0 && "mt-6")}>
                  <p className="mb-2 text-overline text-muted-foreground">{group.label}</p>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/50" aria-hidden />
                        <ConceptProse text={item} maxWords={60} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })}
      </Container>
    </Section>
  );
}

/* ============================================================
   Lesson 5 — clinical cases as disclosures (redesign C): title
   + one-line summary collapsed; expansion reveals the structured
   two-column definition layout (single column on mobile) and
   the highlighted teaching-points card.
   ============================================================ */

export function ConceptClinicalCases({ course }: { course: PsychiatryCourse }) {
  if (!course.clinicalCases || course.clinicalCases.length === 0) return null;
  return (
    <Section spacing="tight" id="clinical-case">
      <Container width="narrow">
        <ConceptSectionHeader title="Clinical Cases" lede="Learn it the way wards teach it." />
        <ConceptAccordion
          label={`${course.title} clinical cases`}
          entries={course.clinicalCases.map((clinicalCase: DiseaseClinicalCase, i) => ({
            id: `case-${i}`,
            title: clinicalCase.title,
            content: (
              <div>
                <p className="text-caption italic leading-relaxed text-muted-foreground">
                  {clinicalCase.presentation}
                </p>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {clinicalCase.initialPresentation && (
                    <div className="rounded-xl border border-border/70 bg-muted/30 p-4 sm:col-span-2">
                      <dt className="text-overline text-muted-foreground">Presentation</dt>
                      <dd className="mt-1.5 text-body-sm leading-relaxed text-foreground/85">
                        {clinicalCase.initialPresentation}
                      </dd>
                    </div>
                  )}
                  {(
                    [
                      ["History", "history"],
                      ["Examination", "examination"],
                      ["Diagnosis", "diagnosis"],
                      ["Management", "management"],
                      ["Outcome", "outcome"],
                    ] as const
                  ).map(([label, key]) => (
                    <div key={key} className="rounded-xl border border-border/70 bg-muted/30 p-4">
                      <dt className="text-overline text-muted-foreground">{label}</dt>
                      <dd className="mt-1.5 text-body-sm leading-relaxed text-foreground/85">
                        {clinicalCase[key]}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 rounded-xl border border-neural/25 bg-neural-soft/20 p-4">
                  <p className="text-overline text-neural-ink">Teaching points</p>
                  <ul className="mt-2 space-y-1.5">
                    {clinicalCase.teachingPoints.map((point, j) => (
                      <li key={j} className="flex gap-2 text-caption leading-relaxed text-foreground/80">
                        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neural/70" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          }))}
        />
      </Container>
    </Section>
  );
}

/* ============================================================
   Lesson 5 — high-yield revision cards (declutter mission):
   each long paragraph becomes a short 1–2 line card — a
   verbatim sentence-bounded slice of the source (≤
   REVISION_VISIBLE_MAX_WORDS), with "Read more" carrying the
   exact remainder (visible + remainder reconstructs the
   paragraph, pinned by tests). The full unmodified paragraphs
   stay in the print sheet.
   ============================================================ */

/** Visible cap for a revision card: about two rendered lines. */
const REVISION_VISIBLE_MAX_WORDS = 40;

export function ConceptHighYield({ course }: { course: PsychiatryCourse }) {
  const cards = React.useMemo(
    () => course.highYieldSummary.map(splitRevisionParagraph),
    [course.highYieldSummary]
  );
  return (
    <Section spacing="tight" id="high-yield" className="bg-muted/20" data-revision-sheet>
      <Container width="narrow">
        <ConceptSectionHeader
          title="One-page Revision"
          lede="If you remember nothing else."
          action={
            <button
              type="button"
              onClick={() => window.print()}
              className="kyp-touch-y inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-caption font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden />
              Print revision sheet
            </button>
          }
        />
        <div className="grid gap-4 min-[900px]:grid-cols-2" data-revision-cards>
          {cards.map((card, i) => {
            // 1–2 visible lines: a verbatim sentence-bounded slice of
            // the card's text (≤ REVISION_VISIBLE_MAX_WORDS words).
            // "Read more" carries the exact remainder — visible +
            // remainder is the full paragraph, pinned by tests.
            const { visible, rest } = clampSentences(
              (card.title ? `${card.title}: ` : "") + card.bullets.join(" "),
              REVISION_VISIBLE_MAX_WORDS
            );
            return (
              <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="h-full">
                <CardBody className="p-4">
                  <p className="text-overline text-warning-ink">Point {i + 1}</p>
                  <p className="mt-1 text-caption leading-relaxed text-foreground/85">
                    {visible}
                  </p>
                  {rest && (
                    <details className="group mt-2">
                      <summary className="cursor-pointer list-none text-caption font-medium text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                        Read more
                      </summary>
                      <p className="mt-1.5 text-caption leading-relaxed text-foreground/85">
                        {rest}
                      </p>
                    </details>
                  )}
                </CardBody>
              </CardPrimitive>
            );
          })}
        </div>

        {/* The print revision sheet: the full unmodified paragraphs,
            rendered in the compact print layout (1–2 A4 pages). */}
        <div data-revision-full className="sr-only">
          <h4>{course.title} — one-page revision</h4>
          {course.highYieldSummary.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
