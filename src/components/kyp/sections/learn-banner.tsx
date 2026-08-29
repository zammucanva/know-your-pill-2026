"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { drugs, diseases } from "@/lib/kyp/data";

/**
 * LearnBanner — a prominent entry point to /learn placed near the top
 * of the homepage (after the hero + stats).
 *
 * Purpose: make it impossible to miss that KYP is a learning platform.
 * A first-time visitor should see this within the first viewport of scrolling.
 */
export function LearnBanner() {
  const drugCount = drugs.length;
  const mcqCount = drugs.reduce((s, d) => s + (d.microQuizzes?.length || 0), 0)
    + diseases.reduce((s, d) => s + (d.microQuizzes?.length || 0), 0);

  return (
    <Section spacing="tight">
      <Container>
        <Reveal>
          <div className="rounded-lg border border-border/60 bg-muted/20 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p className="text-overline text-brand mb-2">Learning Hub</p>
                <h2
                  className="font-serif font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  Start learning medicine
                </h2>
                <p className="mt-2 text-body-sm text-muted-foreground max-w-lg">
                  Structured courses on {drugCount} medications, diseases, substances, and neuroscience — with {mcqCount} practice questions.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  href="/learn"
                  className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                >
                  Learn
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/quiz"
                  className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Zap className="h-4 w-4" />
                  Practice
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
