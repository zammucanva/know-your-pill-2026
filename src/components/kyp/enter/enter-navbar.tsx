"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, Phone, LogIn, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { imgPath } from "@/lib/kyp/image-path";
import { cn } from "@/lib/utils";
import { motion, type MotionValue } from "framer-motion";

const navLinks = [
  { href: "#library", label: "Medications" },
  { href: "#substances", label: "Substance Use" },
  { href: "#timeline", label: "Timeline" },
  { href: "#neuroarcade", label: "NeuroArcade" },
];

type SessionUser = { id: string; name: string; email: string; role: string } | null;

interface EnterNavbarProps {
  /** MotionValue controlling the header's opacity (0 → 1, scroll-linked). */
  headerOpacity: MotionValue<number>;
  /** Whether interactive elements should be focusable/clickable. */
  active: boolean;
  /** Ref to attach to the logo element — used by EnterHero to measure the dock target. */
  logoRef: React.RefObject<HTMLElement | null>;
}

/**
 * EnterNavbar — the site header for the /enter intro page.
 *
 * Identical content to the standard Navbar, but:
 * - Opacity is driven by a scroll-linked MotionValue (starts at 0, fades to 1
 *   as the hero text docks into the logo position).
 * - Interactive elements (links, buttons, search) are `pointer-events-none`
 *   and `aria-hidden` until `active` is true, so keyboard/screen-reader
 *   users can't tab into invisible controls during the animation.
 * - The logo element receives `logoRef` so EnterHero can measure its real
 *   screen position for accurate travel-path calculation.
 * - Uses `bg-background/95` (opaque) instead of `backdrop-blur` to avoid
 *   blurring the hero text as it docks.
 */
export function EnterNavbar({ headerOpacity, active, logoRef }: EnterNavbarProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [user, setUser] = React.useState<SessionUser>(null);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      })
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
        scrolled && active
          ? "border-b border-border/70 bg-background/95"
          : "bg-transparent border-b border-transparent"
      )}
      style={{ opacity: headerOpacity }}
      aria-hidden={!active}
    >
      {/* pointer-events wrapper — disables all interaction when !active */}
      <div className={cn(!active && "pointer-events-none")}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand — this is the dock target for the hero text */}
          <Link
            ref={logoRef as React.RefObject<HTMLAnchorElement>}
            href="#enter-top"
            className="group flex items-center gap-2.5"
            tabIndex={active ? 0 : -1}
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
              <img
                src={imgPath("/logo-navy-128.png")}
                alt="Know Your Pill logo"
                className="h-full w-full object-contain"
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
                tabIndex={active ? 0 : -1}
                className="rounded-md px-3 py-2 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <FloatingSearch
              variant="button"
              className="hidden sm:flex"
            />

            <a
              href="#emergency"
              tabIndex={active ? 0 : -1}
              className="hidden items-center gap-1.5 rounded-full border border-emergency/30 bg-emergency-soft/60 px-3 py-1.5 text-xs font-semibold text-emergency transition-colors hover:bg-emergency/10 sm:flex"
            >
              <Phone className="h-3 w-3" strokeWidth={2.5} />
              Emergency
            </a>

            {/* Auth button */}
            {user ? (
              <div className="hidden items-center gap-2 sm:flex">
                <span className="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">
                  <UserIcon className="h-3 w-3 text-brand" />
                  {user.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  aria-label="Log out"
                  tabIndex={active ? 0 : -1}
                  className="h-9 w-9 rounded-full"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link
                href="/welcome"
                className="hidden sm:block"
                tabIndex={active ? 0 : -1}
              >
                <Button variant="ghost" size="sm" className="gap-1.5 rounded-full">
                  <LogIn className="h-3.5 w-3.5" />
                  Log in
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              tabIndex={active ? 0 : -1}
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
              tabIndex={active ? 0 : -1}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && active && (
          <div className="border-t border-border/70 bg-background/95 lg:hidden">
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
              <div className="mt-2 border-t border-border/50 pt-3">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground">
                      <UserIcon className="h-3 w-3 text-brand" />
                      Signed in as {user.name}
                    </div>
                    <button
                      onClick={() => {
                        setOpen(false);
                        handleLogout();
                      }}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-body-sm font-medium text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/welcome"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center gap-2 rounded-md bg-brand px-3 py-2.5 text-body-sm font-semibold text-primary-foreground"
                  >
                    <LogIn className="h-4 w-4" />
                    Log in / Sign up
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
