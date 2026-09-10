import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Mail } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";

/**
 * /legal/terms — Terms of Use & Copyright.
 *
 * The fuller, human-readable reuse terms referenced by the shared
 * footer copyright line, the <meta name="copyright"> tag and the
 * <link rel="license"> tag in the root layout.
 *
 * Server component (static, no client state) so search engines and
 * screen readers get the full document without hydration.
 */

export const metadata: Metadata = {
  title: "Terms & Copyright · Know Your Pill",
  description:
    "Copyright and reuse terms for Know Your Pill. All content — including drug pages, disease modules, and educational text — is protected by copyright and may not be reproduced, republished, or redistributed without written permission.",
  keywords: [
    "Know Your Pill",
    "copyright",
    "terms of use",
    "content reuse",
    "licensing",
  ],
  openGraph: {
    title: "Terms & Copyright · Know Your Pill",
    description:
      "Copyright and reuse terms for Know Your Pill educational content.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

interface TermsSection {
  id: string;
  title: string;
  paragraphs: string[];
}

const sections: TermsSection[] = [
  {
    id: "ownership",
    title: "1. Copyright & ownership",
    paragraphs: [
      "All content on this website — including medication pages, disease modules, substance-use guides, educational text, quizzes, illustrations, and the site design itself — is the property of Zamaan Ali Shamji and is protected by copyright law. © 2026 Zamaan Ali Shamji. All rights reserved.",
      "No ownership transfer occurs through use of this site. Viewing, bookmarking, or linking to these pages does not grant any licence beyond the limited personal use described below.",
    ],
  },
  {
    id: "permitted",
    title: "2. What you may do",
    paragraphs: [
      "You are welcome to read, study, and use this site for personal education, and to share links to any page with others — colleagues, students, patients, or on social media. Linking is always allowed and appreciated.",
      "You may quote a brief excerpt (a sentence or two) in your own writing, provided you attribute it to Know Your Pill, name Zamaan Ali Shamji as the author, and link back to the page it came from. Fair use and fair dealing rights under applicable law are unaffected by these terms.",
    ],
  },
  {
    id: "prohibited",
    title: "3. What you may not do",
    paragraphs: [
      "You may not reproduce, republish, or redistribute the content of this site — in whole or in substantial part — in any form or medium without prior written permission. This includes copying pages into other websites, documents, courses, videos, or apps, and selling or bundling the content with other products.",
      "You may not remove, obscure, or alter any copyright notice, attribution, or link that appears on the content, and you may not present KYP content in a way that implies endorsement of a third-party product, service, or treatment.",
    ],
  },
  {
    id: "ai-training",
    title: "4. Automated & AI training use",
    paragraphs: [
      "Systematic scraping, bulk downloading, or feeding the content of this site into datasets for training, fine-tuning, or evaluating machine-learning or AI systems is expressly prohibited, regardless of commercial intent. The site's robots.txt disallows common AI-training crawlers for this reason.",
      "If you are building a tool (for example a study aid or search assistant) and believe KYP content would genuinely help, get in touch first — permission is far easier to obtain in advance than to fix retroactively.",
    ],
  },
  {
    id: "medical",
    title: "5. Medical disclaimer",
    paragraphs: [
      "This website is for educational support only. It does not replace a doctor, pharmacist, emergency service, or local medical guideline. Always consult a qualified healthcare professional before making decisions about medication or substance use. The full disclaimer appears in the footer of every page.",
      "Nothing in these terms limits the disclaimer or creates a clinician–patient relationship.",
    ],
  },
  {
    id: "contact",
    title: "6. Permission requests",
    paragraphs: [
      "Requests to reuse, republish, or adapt content — including translations and educational adaptations — are welcome and are typically answered quickly. Email zammucanva@gmail.com with a short description of what you would like to use and where.",
      "These terms were last updated in September 2026. The version served at this URL is the current authoritative version.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed">
          <Container width="narrow">
            <Reveal>
              <p className="text-overline text-brand mb-6">Legal</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Terms &amp; Copyright
              </h1>
              <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                The reuse terms for Know Your Pill, in plain language. Short
                version: read and link freely, quote briefly with
                attribution, and ask before republishing anything.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
                  <Scale className="h-3.5 w-3.5 text-brand" />
                  © 2026 Zamaan Ali Shamji · All rights reserved
                </span>
                <a
                  href="mailto:zammucanva@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Request permission
                </a>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ===== TERMS SECTIONS ===== */}
        <Section spacing="default">
          <Container width="narrow">
            <div className="border-t border-border/20">
              {sections.map((s, i) => (
                <Reveal key={s.id} delay={0.04 * i}>
                  <section
                    id={s.id}
                    className="border-b border-border/20 py-10"
                    aria-labelledby={`${s.id}-title`}
                  >
                    <h2
                      id={`${s.id}-title`}
                      className="font-serif font-semibold text-foreground mb-4"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {s.title}
                    </h2>
                    <div className="space-y-4">
                      {s.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className="text-body text-muted-foreground leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 text-caption text-muted-foreground/60 leading-relaxed">
                Questions about these terms?{" "}
                <a
                  href="mailto:zammucanva@gmail.com"
                  className="text-muted-foreground underline underline-offset-2 transition-colors hover:text-brand"
                >
                  Email the author
                </a>{" "}
                or visit the{" "}
                <Link
                  href="/learn"
                  className="text-muted-foreground underline underline-offset-2 transition-colors hover:text-brand"
                >
                  learning hub
                </Link>{" "}
                to see what the site covers.
              </p>
            </Reveal>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
