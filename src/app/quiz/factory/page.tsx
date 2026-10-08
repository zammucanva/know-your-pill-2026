import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { FactoryBuilder } from "./factory-builder";

/**
 * /quiz/factory — Question Factory.
 *
 * Server-rendered shell (navigation, breadcrumb, heading, intro) with the
 * interactive generator behind a Suspense boundary. The finished quiz is
 * handed to the existing runner at /quiz/custom, so scoring, review and the
 * Mistake Book behave exactly as for any other test.
 */
export default function QuestionFactoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/study" className="hover:text-brand">
                Study Mode
              </Link>
              <span aria-hidden>›</span>
              <Link href="/quiz" className="hover:text-brand">
                Practice
              </Link>
              <span aria-hidden>/</span>
              <span className="font-medium text-foreground">Question Factory</span>
            </nav>
            <h1
              className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Question Factory
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
              Generate fresh practice questions from the reviewed KYP library.
              Built by rules on your device: no AI, nothing invented, and every
              question can be traced to the source it came from.
            </p>
            <React.Suspense
              fallback={
                <p role="status" className="mt-10 text-sm text-muted-foreground">
                  Loading the question factory…
                </p>
              }
            >
              <FactoryBuilder />
            </React.Suspense>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
