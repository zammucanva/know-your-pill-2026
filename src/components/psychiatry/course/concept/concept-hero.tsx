"use client";

import * as React from "react";
import { Check, Clock, Layers, Star } from "lucide-react";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { LearningPath } from "@/components/kyp/ui/learning-path";
import { objectiveOneLiner } from "@/lib/kyp/psychiatry-concept-visibility";
import type { PsychiatryCourse } from "../course-types";
import { InlineExpander } from "./concept-ui";

/**
 * ConceptHero — the concept-course hero (id="top").
 *
 * Same identity/breadcrumb/metadata row as the shared CourseHero;
 * the learning objectives render as the first three one-liners
 * (first clause up to the first dash or semicolon) with the full
 * text and the remaining objectives behind a "+N more" expander
 * (redesign D). The full text always stays in the DOM.
 */
export function ConceptHero({ course }: { course: PsychiatryCourse }) {
  const objectives = course.learningObjectives;
  const visible = objectives.slice(0, 3);
  const rest = objectives.slice(3);

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12">
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl kyp-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-neural/15 blur-3xl kyp-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 relative sm:px-6">
        <div className="mb-4">
          <LearningPath
            path={course.learningPath}
            links={["/psychiatry", `/psychiatry/library/#group-${course.groupLetter}`, undefined]}
          />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="brand" size="sm">
                <Layers className="h-2.5 w-2.5" />
                {course.category}
              </Badge>
              <span className="text-muted-foreground/70">Concept course</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {course.estimatedReadTime}
              </span>
              {course.yieldRating === "high" && (
                <span className="inline-flex items-center gap-1 text-neural">
                  <Star className="h-2.5 w-2.5 fill-current" />
                  High yield
                </span>
              )}
            </div>

            <h1 className="mt-3 text-display text-foreground leading-[1.05]">{course.title}</h1>

            <p className="mt-3 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground">
              {course.tagline}
            </p>
            <p className="mt-5 max-w-[68ch] text-base leading-[1.65] text-foreground/80">
              {course.summary}
            </p>
          </div>

          {/* Objectives — the first three as one-liners (redesign D) */}
          <div id="learning-objectives" className="scroll-mt-28">
            <CardPrimitive
              variant="flat"
              interactive={false}
              showArrow={false}
              className="border-brand/20 bg-brand-soft/20"
            >
              <CardBody className="p-6">
                <p className="text-overline text-brand-ink">Learning objectives</p>
                <ul className="mt-4 space-y-2.5">
                  {visible.map((objective, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-body-sm text-foreground/90 leading-relaxed">
                        {objectiveOneLiner(objective)}
                      </span>
                    </li>
                  ))}
                </ul>
                {rest.length > 0 && (
                  <div className="mt-3">
                    <details className="group">
                      <summary className="cursor-pointer list-none text-caption font-medium text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                        +{objectives.length - visible.length} more objectives
                      </summary>
                      <ul className="mt-2 space-y-2.5">
                        {rest.map((objective, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            <span className="text-body-sm text-foreground/90 leading-relaxed">
                              {objective}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                )}
                {/* Full first-three text for no-JS / print */}
                <div className="sr-only">
                  {visible.map((objective, i) => (
                    <p key={i}>{objective}</p>
                  ))}
                </div>
              </CardBody>
            </CardPrimitive>
          </div>
        </div>
      </div>
    </section>
  );
}
