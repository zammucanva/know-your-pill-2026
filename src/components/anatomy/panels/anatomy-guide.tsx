"use client";

import * as React from "react";
import Link from "next/link";
import { MousePointerClick, Search, Brain, ChevronRight } from "lucide-react";
import { GENERAL_LEARNING_LINKS } from "@/lib/anatomy/kyp-links";

/**
 * AnatomyGuide: the inspector's empty state. It explains how to explore the
 * model and offers real KYP learning entry points (see kyp-links.ts).
 */
export function AnatomyGuide() {
  return (
    <div className="kyp-scroll flex h-full min-h-0 flex-col overflow-y-auto p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">Inspector</p>
      <h2 className="mt-1 font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]">
        Select a structure
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
        Choose any part of the model to see its system, functions and clinical notes, with links to the
        related KYP lessons where they exist.
      </p>

      <ul className="mt-4 space-y-2.5 text-sm text-[var(--foreground)]">
        <li className="flex gap-2.5">
          <MousePointerClick size={15} className="mt-0.5 shrink-0 text-[var(--brand)]" aria-hidden />
          <span>Click a structure on the model. Hover to highlight it first.</span>
        </li>
        <li className="flex gap-2.5">
          <Search size={15} className="mt-0.5 shrink-0 text-[var(--brand)]" aria-hidden />
          <span>Or search by name in the systems list and select it there.</span>
        </li>
        <li className="flex gap-2.5">
          <Brain size={15} className="mt-0.5 shrink-0 text-[var(--brand)]" aria-hidden />
          <span>Turn on Brain Mode in the viewport to explore the nervous system in detail.</span>
        </li>
      </ul>

      <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
        Keep learning on KYP
      </h3>
      <ul className="mt-2 space-y-1.5">
        {GENERAL_LEARNING_LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm transition-colors hover:border-[var(--brand)]/40"
            >
              <span className="min-w-0">
                <span className="block text-[var(--foreground)] group-hover:text-[var(--brand)]">{l.name}</span>
                {l.subtitle && <span className="block text-[11px] text-[var(--muted-foreground)]">{l.subtitle}</span>}
              </span>
              <ChevronRight size={14} className="shrink-0 text-[var(--muted-foreground)]" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
