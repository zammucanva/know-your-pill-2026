"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeftRight, ArrowRight, ArrowUpRight, Atom, BookOpen, Brain, ClipboardList, Compass, Phone, Search, Siren, Zap,
} from "lucide-react";

import { ModuleCard, ModuleHeader } from "./modules-hero";
import { emergencyContacts } from "@/lib/kyp/data/platform";

/**
 * Quick Actions (real routes + the existing kyp:search handoff),
 * Explore Next (existing KYP content only), and the restrained
 * Emergency card (the platform's real emergency contacts).
 */

/* ─── Quick Actions ─────────────────────────────────────────────── */

export function QuickActions() {
  const openSearch = () => {
    // Hand off to the existing universal search (same channel the
    // homepage hero uses). FloatingSearch listens for kyp:search.
    window.dispatchEvent(new CustomEvent("kyp:search", { detail: { query: "" } }));
  };

  const actions: { label: string; icon: React.ComponentType<{ className?: string }>; onClick?: () => void; href?: string }[] = [
    { label: "Search medications", icon: Search, onClick: openSearch },
    { label: "Start MCQs", icon: ClipboardList, href: "/quiz" },
    { label: "Explore Psychiatry", icon: Brain, href: "/psychiatry" },
    { label: "Drug interactions", icon: ArrowLeftRight, href: "/interactions" },
    { label: "Brain Science", icon: Atom, href: "/#neuroarcade" },
    { label: "Study Mode", icon: BookOpen, href: "/study" },
  ];

  return (
    <ModuleCard>
      <ModuleHeader icon={Zap} title="Quick Actions" />
      <div className="grid grid-cols-2 gap-2.5 p-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const body = (
            <>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-brand">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-left text-xs font-medium leading-snug text-foreground">{action.label}</span>
            </>
          );
          const cls =
            "group flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/40 px-3 py-3 transition-colors hover:border-brand/40 hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60";
          return action.href ? (
            <Link key={action.label} href={action.href} className={cls}>
              {body}
            </Link>
          ) : (
            <button key={action.label} type="button" onClick={action.onClick} className={cls}>
              {body}
            </button>
          );
        })}
      </div>
    </ModuleCard>
  );
}

/* ─── Explore Next ──────────────────────────────────────────────── */

const EXPLORE_ITEMS: { n: string; title: string; description: string; href: string }[] = [
  {
    n: "01",
    title: "How antidepressants work",
    description: "Mechanism, indications, safety and interactions, taught through escitalopram.",
    href: "/drugs/escitalopram",
  },
  {
    n: "02",
    title: "Antipsychotic safety & monitoring",
    description: "The clozapine course: dosing, monitoring and the safety decisions that matter.",
    href: "/drugs/clozapine",
  },
  {
    n: "03",
    title: "Major Depressive Disorder",
    description: "Diagnosis, neurobiology and the treatment landscape in one module.",
    href: "/diseases/major-depressive-disorder",
  },
  {
    n: "04",
    title: "Alcohol & withdrawal",
    description: "Pharmacology, dependence and the recovery pathway.",
    href: "/substances/alcohol",
  },
];

export function ExploreNext() {
  return (
    <ModuleCard>
      <ModuleHeader icon={Compass} title="Explore Next" aside={<span>From the KYP library</span>} />
      <ul className="grid gap-2 p-4 md:grid-cols-2">
        {EXPLORE_ITEMS.map((item) => (
          <li key={item.n}>
            <Link
              href={item.href}
              className="group flex h-full items-start gap-3.5 rounded-xl border border-border/50 bg-background/40 p-4 transition-colors hover:border-brand/40 hover:bg-accent/30"
            >
              <span className="font-serif text-sm font-semibold text-brand/70">{item.n}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground group-hover:text-brand">
                  {item.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </span>
              </span>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
            </Link>
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}

/* ─── Emergency ──────────────────────────────────────────────────── */

export function EmergencyCard() {
  return (
    <ModuleCard className="border-emergency/25 bg-emergency-soft/15">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-semibold text-emergency">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emergency/10">
              <Siren className="h-3.5 w-3.5" />
            </span>
            Need help now?
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            If you or someone else is in immediate danger, seek emergency medical care.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.number}
              href={contact.href}
              className="flex items-center gap-1.5 rounded-full border border-emergency/30 bg-background/60 px-3 py-1.5 text-xs font-semibold text-emergency transition-colors hover:bg-emergency-soft/60"
            >
              <Phone className="h-3 w-3" />
              {contact.label} · {contact.number}
            </a>
          ))}
          <Link
            href="/#emergency"
            className="flex items-center gap-1 px-1.5 text-xs font-medium text-emergency transition-opacity hover:opacity-75"
          >
            Emergency resources
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </ModuleCard>
  );
}
