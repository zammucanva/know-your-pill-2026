"use client";

import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";

/**
 * TestUnderstandingCTA — contextual "Test your understanding" prompt
 * placed at the end of content pages.
 *
 * Links to /quiz so the user can practice MCQs related to what they just read.
 * This establishes the core learning loop: LEARN → UNDERSTAND → TEST → REVIEW.
 *
 * Restraint over gamification:
 * - No "🔥 LEVEL UP!!!" language
 * - No score pressure
 * - Honest framing: "Practice" / "Test your understanding" / "Review"
 */
interface TestUnderstandingCTAProps {
  /** The topic the user just finished reading — e.g. "Sertraline" */
  topic?: string;
  /** Optional variant — "default" (full section) or "compact" (inline) */
  variant?: "default" | "compact";
}

export function TestUnderstandingCTA({ topic, variant = "default" }: TestUnderstandingCTAProps) {
  const heading = topic
    ? `Test your understanding of ${topic}`
    : "Test your understanding";

  if (variant === "compact") {
    return (
      <Link
        href="/quiz"
        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-brand/40 hover:text-brand"
      >
        <Zap className="h-4 w-4 text-brand" />
        {heading}
        <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <Section className="border-t border-border/30 bg-muted/10">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-overline text-brand mb-2">Practice</p>
              <h2
                className="font-serif font-semibold tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                {heading}
              </h2>
              <p className="mt-2 text-body-sm text-muted-foreground max-w-md">
                Answer multiple-choice questions drawn from across the KYP library. Each answer includes a one-line explanation.
              </p>
            </div>
            <Link
              href="/quiz"
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
            >
              <Zap className="h-5 w-5" />
              Start Practice
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
