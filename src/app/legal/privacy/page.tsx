import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";

/**
 * /legal/privacy — Privacy Policy.
 *
 * Every statement here describes behaviour that exists in the code
 * (prisma/schema.prisma, src/lib/session.ts, src/lib/rate-limit.ts,
 * src/app/api/auth/*). When the data model or the third-party services
 * change, this page must change with them.
 *
 * Server component (static, no client state).
 */

export const metadata: Metadata = {
  title: "Privacy Policy · Know Your Pill",
  description:
    "What personal data Know Your Pill collects, why, who processes it, how long it is kept, and how to delete your account and data.",
  openGraph: {
    title: "Privacy Policy · Know Your Pill",
    description: "What data Know Your Pill collects and how to delete it.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

const LAST_UPDATED = "24 November 2026";

interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
}

const sections: PolicySection[] = [
  {
    id: "summary",
    title: "1. Short version",
    paragraphs: [
      "You can read all of Know Your Pill without an account. If you create one, we store the minimum needed to run it: your name, email address, a hashed password (or your Google sign-in identity), and your own learning activity. We do not run advertising, analytics or tracking tools, and we do not sell or share your data for advertising.",
    ],
  },
  {
    id: "collected",
    title: "2. What we collect when you have an account",
    paragraphs: [
      "Account details: your name, email address, your learner type (for example student or patient) and, if you sign in with Google, your Google account identifier and whether Google has verified your email. Your password is never stored; only a one-way bcrypt hash of it is.",
      "Your activity: the pages you open (so the dashboard can show recent visits), your bookmarks, and your recent searches (the latest 50 are kept). This is linked to your account so it follows you between devices.",
      "Security records: a session record for each device you are signed in on (stored as a one-way hash, valid for 30 days or until you sign out), password-reset requests (stored as a one-way hash, valid for 30 minutes, single use), and sign-in and sign-up attempt counters used to block password guessing and abuse. These counters store only one-way hashes of your email address and network address, never the raw values.",
    ],
  },
  {
    id: "device",
    title: "3. What stays on your device",
    paragraphs: [
      "Learning progress, quiz history, theme and dashboard settings are kept in your browser's local storage and are not sent to us unless a feature is described as saving to your account. The only cookie we set is a single sign-in session cookie (HttpOnly, sent only to this site). It contains a random token, not your name or email.",
    ],
  },
  {
    id: "processors",
    title: "4. Who processes data for us",
    paragraphs: [
      "Hosting is provided by Vercel and the account database by Supabase (PostgreSQL). If you choose Google sign-in, Google (through Firebase Authentication) verifies your identity and tells us your name, email address and whether the email is verified. Password-reset emails are sent through Resend. These providers process data only to provide those services, under their own terms and privacy policies, and may keep their own operational logs.",
      "We do not use advertising networks, analytics or session-recording tools, and we do not track you across other websites or apps.",
    ],
  },
  {
    id: "use",
    title: "5. Why we use it",
    paragraphs: [
      "To sign you in and keep your account secure, to show your progress, bookmarks and recent searches, to send a password-reset email when you ask for one, and to detect and block abuse. We do not use your data to profile you, and we do not send marketing email.",
    ],
  },
  {
    id: "retention",
    title: "6. How long we keep it",
    paragraphs: [
      "Account data is kept until you delete your account. Session records expire after 30 days, reset tokens after 30 minutes, and only your 50 most recent searches are retained. Sign-in attempt counters hold only one-way hashes (never the raw email or network address) and their counts reset after 15 minutes.",
    ],
  },
  {
    id: "deletion",
    title: "7. Deleting your account and your rights",
    paragraphs: [
      "You can permanently delete your account yourself: open your dashboard, choose Settings, then Delete account. This removes your account, sessions, progress, bookmarks, search history and any reset tokens. Copies held in provider backups or logs are removed on those providers' own schedules.",
      "You may also ask us to access, correct or delete your data, or to object to its use, by emailing the address below. Depending on where you live, you may have additional rights under local law, including the right to complain to your data-protection authority.",
    ],
  },
  {
    id: "security",
    title: "8. How we protect it",
    paragraphs: [
      "Connections use HTTPS. Passwords and sign-in tokens are stored only as one-way hashes. Sign-in is rate limited, sessions can be revoked, and changing or resetting your password signs out your other devices. No system is perfectly secure; if you believe your account has been affected, change your password and contact us.",
    ],
  },
  {
    id: "medical",
    title: "9. Medical information",
    paragraphs: [
      "Know Your Pill is an educational resource and does not collect health records. Please do not type personal medical details into search boxes or any free-text field. Content on this site is not medical advice and does not replace a clinician.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes",
    paragraphs: [
      `We will update this page when the data we collect or the services we use change. The date above shows the latest revision (${LAST_UPDATED}).`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container width="narrow">
            <Reveal>
              <p className="text-overline text-brand mb-6">Legal</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Privacy Policy
              </h1>
              <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                What we collect, why, who helps us run the site, and how to
                delete your data, in plain language.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-lg kyp-glass kyp-glass-refract border border-border bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                  Last updated {LAST_UPDATED}
                </span>
                <a
                  href="mailto:zammucanva@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg kyp-glass kyp-glass-refract border border-border bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Privacy questions
                </a>
              </div>
            </Reveal>
          </Container>
        </Section>

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
                Contact:{" "}
                <a
                  href="mailto:zammucanva@gmail.com"
                  className="text-muted-foreground underline underline-offset-2 transition-colors hover:text-brand"
                >
                  zammucanva@gmail.com
                </a>
                . See also the{" "}
                <Link
                  href="/legal/terms"
                  className="text-muted-foreground underline underline-offset-2 transition-colors hover:text-brand"
                >
                  Terms &amp; Copyright
                </Link>
                .
              </p>
            </Reveal>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
