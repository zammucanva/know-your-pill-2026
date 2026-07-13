"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Accordion } from "@/components/kyp/ui/accordion";
import { faqs } from "@/lib/kyp/data";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Quick answers, before you dive in."
          align="center"
        />
        <div className="mt-10">
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
      </Container>
    </Section>
  );
}
