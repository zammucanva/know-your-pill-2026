"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Accordion } from "@/components/kyp/ui/accordion";
import { Reveal } from "@/components/kyp/ui/reveal";
import { faqs } from "@/lib/kyp/data";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left: heading */}
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="text-overline text-brand mb-3">Frequently Asked Questions</p>
              <h2 className="font-serif text-h1 font-semibold tracking-tight text-foreground">
                Questions before you start
              </h2>
              <p className="mt-4 text-body-sm text-muted-foreground leading-relaxed max-w-sm">
                Everything you need to know before diving into the KYP library.
              </p>
            </div>
          </Reveal>

          {/* Right: questions */}
          <Reveal delay={0.12}>
            <Accordion
              type="single"
              collapsible
              defaultValue={faqs[0].question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              items={faqs.map((f) => ({
                id: f.question.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                question: f.question,
                answer: f.answer,
              }))}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
