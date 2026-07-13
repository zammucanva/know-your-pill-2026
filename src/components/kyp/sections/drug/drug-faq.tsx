import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Accordion } from "@/components/kyp/ui/accordion";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugFAQ — accordion of frequently asked patient questions.
 *
 * Reuses the shared <Accordion /> component for accessibility
 * (keyboard navigation, ARIA expansion states).
 *
 * Server Component — Accordion is a client component, but it's
 * imported from a Server Component here, which is fine.
 */
interface DrugFAQProps {
  drug: Drug;
}

export function DrugFAQ({ drug }: DrugFAQProps) {
  const items = drug.faqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <Section id="faq">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="What patients actually ask."
          align="center"
        />

        <div className="mt-10">
          <Accordion
            type="single"
            collapsible
            defaultValue={items[0]?.id}
            items={items}
          />
        </div>
      </Container>
    </Section>
  );
}
