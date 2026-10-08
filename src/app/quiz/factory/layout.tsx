import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Factory · Know Your Pill",
  description:
    "Generate fresh practice questions from reviewed KYP content. Every question traces back to its source; nothing is invented.",
};

export default function QuestionFactoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
