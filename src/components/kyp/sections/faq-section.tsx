"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Accordion } from "@/components/kyp/ui/accordion";
import { Reveal } from "@/components/kyp/ui/reveal";
import { faqs } from "@/lib/kyp/data";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container width="narrow">
        <Reveal>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Questions before you start"
            align="center"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-12">
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
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
