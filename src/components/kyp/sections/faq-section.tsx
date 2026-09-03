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
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left: sticky heading */}
          <Reveal>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-overline text-brand mb-4">Frequently Asked</p>
              <h2
                className="font-sans font-semibold tracking-[-0.03em] text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Questions
              </h2>
              <p className="mt-4 text-body-sm text-muted-foreground max-w-xs leading-relaxed">
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
