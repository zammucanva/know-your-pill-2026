"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#categories", label: "Categories" },
  { href: "#library", label: "Med Library" },
  { href: "#substances", label: "Substance Use" },
  { href: "#knowledge-graph", label: "Knowledge Graph" },
  { href: "#neuroarcade", label: "NeuroArcade" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="#top" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/logo-navy-128.png"
              alt="Know Your Pill logo"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="font-serif text-[1.05rem] font-semibold tracking-tight">
              Know Your Pill
            </strong>
            <small className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Medication Education · Visual
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <FloatingSearch variant="button" className="hidden sm:flex" />

          <a
            href="#emergency"
            className="hidden items-center gap-1.5 rounded-full border border-emergency/30 bg-emergency-soft/60 px-3 py-1.5 text-xs font-semibold text-emergency transition-colors hover:bg-emergency/10 sm:flex"
          >
            <Phone className="h-3 w-3" strokeWidth={2.5} />
            Emergency
          </a>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-full"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#emergency"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-emergency px-3 py-2.5 text-body-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Emergency Help
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
