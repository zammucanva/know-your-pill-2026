import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Test — Build Your Own · Know Your Pill",
  description:
    "Build your own test: choose the medications and the number of questions. Every question is drawn from reviewed KYP content — nothing invented.",
};

export default function CustomTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
