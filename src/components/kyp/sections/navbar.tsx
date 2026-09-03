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

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/#library", label: "Medications" },
  { href: "/#substances", label: "Substances" },
  { href: "/quiz", label: "Practice" },
];

type SessionUser = { id: string; name: string; email: string; role: string } | null;

export function Navbar() {
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

  // Check session on mount
  React.useEffect(() => {
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
        scrolled
          ? "border-b border-border/70 bg-background/95"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="#top" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
            <img
              src={imgPath("/logo-navy-128.png")}
              alt="Know Your Pill logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="font-sans text-[1.05rem] font-semibold tracking-tight">
              Know Your Pill
            </strong>
            <small className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Medication Education · Visual
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isRoute = l.href.startsWith("/") && !l.href.startsWith("/#");
            const className = "rounded-md px-3 py-2 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground";
            return isRoute ? (
              <Link key={l.href} href={l.href} className={className}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className={className}>
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <FloatingSearch variant="button" className="hidden sm:flex" />

          <a
            href="#emergency"
            className="hidden items-center gap-1.5 rounded-md border border-emergency/30 bg-emergency-soft/60 px-3 py-1.5 text-xs font-semibold text-emergency transition-colors hover:bg-emergency/10 sm:flex"
          >
            <Phone className="h-3 w-3" strokeWidth={2.5} />
            Emergency
          </a>

          {/* Auth button */}
          {user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <UserIcon className="h-3 w-3 text-brand" />
                {user.name}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                aria-label="Log out"
                className="h-9 w-9 rounded-full"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Link href="/welcome" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="gap-1.5 rounded-md">
                <LogIn className="h-3.5 w-3.5" />
                Log in
              </Button>
            </Link>
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
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => {
              const isRoute = l.href.startsWith("/") && !l.href.startsWith("/#");
              const className = "rounded-md px-3 py-2.5 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground";
              return isRoute ? (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={className}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={className}>
                  {l.label}
                </a>
              );
            })}
            <a
              href="#emergency"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-emergency px-3 py-2.5 text-body-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Emergency Help
            </a>
            {/* Auth link in mobile menu */}
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
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-body-sm font-medium text-foreground hover:bg-accent/60"
                  >
                    <UserIcon className="h-4 w-4" />
                    My Dashboard
                  </Link>
                  <button
                    onClick={() => { setOpen(false); handleLogout(); }}
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
    </header>
  );
}
