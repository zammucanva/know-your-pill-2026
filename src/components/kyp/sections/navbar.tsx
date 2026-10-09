"use client";

import { ProfileMenu } from "@/components/kyp/ui/profile-menu";
import { NavDropdown } from "@/components/kyp/ui/nav-dropdown";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type MotionValue } from "framer-motion";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, Phone, LogIn, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { imgPath } from "@/lib/kyp/image-path";
import { IS_STATIC_EXPORT } from "@/lib/kyp/static-export";
import { cn } from "@/lib/utils";

/**
 * Primary navigation — Study Mode is the SINGLE top-level learning
 * destination (Learn + Practice live inside it at /study). The former
 * peer "Practice" entry is intentionally absent: practice is reached
 * through Study Mode's Practice section, not as a competing navbar item.
 */
/** Most-used destinations stay on the bar. */
const primaryLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/study", label: "Study Mode" },
  { href: "/drugs", label: "Medication Library" },
  // prefetch=false: /interactions is a client-side data engine whose
  // route bundle embeds the 145-drug registry (~1.5MB gzipped). The
  // default viewport prefetch would download it in the background on
  // EVERY page; navigating without prefetch only costs the first
  // click. Browsing routes keep their default prefetch.
  { href: "/interactions", label: "Interactions", prefetch: false as const },
];

/** Related destinations, grouped under one clearly named menu each. */
const navGroups = [
  {
    label: "Explore",
    items: [
      { href: "/psychiatry", label: "Psychiatry", description: "Disorders, courses and self-test" },
      { href: "/#substances", label: "Substances", description: "Alcohol, opioids, cannabis and more" },
      // /medicine is the plain-language hub (patients and carers); the
      // Medication Library is the full clinical course for each drug.
      { href: "/medicine", label: "Patient Guides", description: "Plain-language medicine information" },
    ],
  },
  {
    label: "Visual tools",
    items: [
      { href: "/anatomy", label: "3D Anatomy", description: "Explore the body in 3D" },
      { href: "/synapse-studio", label: "Synapse Studio", description: "Animated drug-action scenes" },
    ],
  },
];

/** Every destination, flat: used by the mobile menu. */
const navLinks = [...primaryLinks, ...navGroups.flatMap((g) => g.items)];

type SessionUser = { id: string; name: string; email: string; learnerType: string } | null;

/**
 * Intro mode, used only by /enter. The cinematic intro owns the header's
 * opacity (scroll-linked, 0 -> 1 as the wordmark docks) and needs the logo
 * element to measure its dock target. Everything else (links, menus, search,
 * account, theme) is the same canonical navbar every other page renders.
 */
export interface NavbarIntro {
  /** Scroll-linked header opacity. */
  opacity: MotionValue<number>;
  /** False while the header is still invisible: it is then inert (no focus, no clicks, hidden from AT). */
  active: boolean;
  /** Attached to the logo link: the dock target for the hero wordmark. */
  logoRef: React.RefObject<HTMLElement | null>;
}

export function Navbar({ intro }: { intro?: NavbarIntro } = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [user, setUser] = React.useState<SessionUser>(null);

  // aria-current (audit B21): mark the nav link of the page the user is
  // on. usePathname() includes the Pages basePath in the app router, so
  // strip it before comparing. Anchor-only entries ("/#substances") are
  // never "current" — they point at homepage sections.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const route = pathname?.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname || "/";
  const isCurrent = (href: string) => {
    if (href.includes("#")) return false;
    return route === href || route.startsWith(href + "/");
  };

  // Escape closes the mobile menu (D-3). The listener exists only while
  // the menu is open and mirrors the sheet pattern used by the drug
  // lesson navigator: Radix overlays (e.g. the search modal) run their
  // own capture-phase Escape handling and call preventDefault, so the
  // defaultPrevented guard keeps one Escape press from dismissing two
  // stacked surfaces. Focus returns to the disclosure button so it
  // never rests inside the collapsed menu.
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || e.defaultPrevented) return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Check session on mount (server mode only — the static export has
  // no session API and no way to log in, so the CTA is hidden too)
  React.useEffect(() => {
    if (IS_STATIC_EXPORT) return;
    fetch("/api/auth/session")
      .then(r => r.json())
      .then(data => { if (data.user) setUser(data.user); })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/session", { method: "DELETE" });
    setUser(null);
    router.push("/welcome");
  };

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 duration-[var(--duration-base)] ease-[var(--ease-out-soft)] print:hidden",
        // In intro mode opacity is driven by scroll, so only colours may transition
        intro ? "transition-[background-color,border-color]" : "transition-all",
        intro && !intro.active && "pointer-events-none",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      )}
      style={intro ? { opacity: intro.opacity } : undefined}
      aria-hidden={intro && !intro.active ? true : undefined}
      inert={intro && !intro.active ? true : undefined}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand — goes home from every page (next/link prepends the
            GitHub Pages basePath; on the homepage itself the
            same-route navigation scrolls back to the top). */}
        <Link
          href="/"
          ref={intro?.logoRef as React.Ref<HTMLAnchorElement> | undefined}
          className="group flex items-center gap-2.5"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
            <img width={128} height={128}
              src={imgPath("/logo-navy-128.png")}
              alt="Know Your Pill logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="font-serif text-[1.05rem] font-semibold tracking-tight">
              Know Your Pill
            </strong>
          </span>
        </Link>

        {/* Desktop nav — all links through Next Link so hrefs get the
            GitHub Pages basePath. Plain <a href="/#…"> would resolve to
            the root domain and break anchor navigation on Pages. */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={"prefetch" in l ? l.prefetch : undefined}
              aria-current={isCurrent(l.href) ? "page" : undefined}
              className="whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground xl:px-3 xl:text-sm"
            >
              {l.label}
            </Link>
          ))}
          {navGroups.map((g) => (
            <NavDropdown key={g.label} label={g.label} items={g.items} isCurrent={isCurrent} />
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <FloatingSearch variant="button" className="hidden lg:flex" />

          <Link
            href="/#emergency"
            className="hidden items-center gap-1.5 rounded-full border border-emergency/30 bg-emergency-soft/60 px-2.5 py-1.5 text-[11px] font-bold text-[oklch(0.4_0.16_25)] transition-colors hover:bg-emergency/10 sm:flex xl:px-3 xl:text-xs"
          >
            <Phone className="h-3 w-3" strokeWidth={2.5} />
            <span className="hidden xl:inline">Emergency</span>
            <span className="sr-only xl:hidden">Emergency</span>
          </Link>

          {/* Auth button */}
          {user ? (
            <div className="hidden sm:block">
              <ProfileMenu user={user} onLogout={handleLogout} />
            </div>
          ) : (
            /* Static export: no auth backend exists — hide the Log in
               CTA rather than link to a page whose forms can only fail
               with "Network error" [audit B1]. */
            !IS_STATIC_EXPORT && (
            /* asChild renders the Link itself as the button element —
               the previous <Link><Button> composition nested a <button>
               inside an <a> (invalid interactive-inside-interactive HTML,
               audit B11). Same classes, same appearance, valid markup. */
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden gap-1.5 rounded-full sm:inline-flex"
            >
              <Link href="/welcome">
                <LogIn className="h-3.5 w-3.5" />
                Log in
              </Link>
            </Button>
            )
          )}

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
            className="h-11 w-11 rounded-full lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            ref={menuButtonRef}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav-menu" className="border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {/* Search — the floating pill is hidden below lg (audit B3),
                so the menu is the mobile search entry point */}
            <FloatingSearch
              variant="button"
              className="mb-2 w-full min-h-[44px] justify-between rounded-md bg-muted/30"
            />
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(l.href) ? "page" : undefined}
                className="flex min-h-[44px] items-center rounded-md px-3 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#emergency"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-emergency px-3 text-body-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Emergency Help
            </Link>
            {/* Auth link in mobile menu (hidden in the static export —
                no backend, no dead ends [audit B1]) */}
            {!IS_STATIC_EXPORT && (
            <div className="mt-2 border-t border-border/50 pt-3">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground">
                    <UserIcon className="h-3 w-3 text-brand" />
                    Signed in as {user.name}
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] w-full items-center gap-2 rounded-md px-3 text-body-sm font-medium text-foreground hover:bg-accent/60"
                  >
                    <UserIcon className="h-4 w-4" />
                    My Dashboard
                  </Link>
                  <button
                    onClick={() => { setOpen(false); handleLogout(); }}
                    className="flex min-h-[44px] w-full items-center gap-2 rounded-md px-3 text-body-sm font-medium text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </>
              ) : (
                <Link
                  href="/welcome"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] w-full items-center gap-2 rounded-md bg-brand px-3 text-body-sm font-semibold text-primary-foreground"
                >
                  <LogIn className="h-4 w-4" />
                  Log in / Sign up
                </Link>
              )}
            </div>
            )}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
