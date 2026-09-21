"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, KeyRound, Loader2, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * /reset — complete a password reset with a single-use token.
 *
 * Reset tokens are issued through verified channels (the account's verified
 * contact channel once email delivery is configured; until then, the
 * repository operator's verified process — see
 * scripts/create-password-reset.ts). This page consumes the token and sets a
 * new password. On success every existing session for the account is
 * revoked, so the user must log in again.
 */

export default function ResetPasswordPage() {
  const router = useRouter();
  const [token, setToken] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Prefill the token from ?token=... (operator-delivered links).
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");
    if (t) setToken(t);
  }, []);

  const canSubmit =
    token.trim().length > 0 &&
    newPassword.length >= 8 &&
    newPassword === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/password/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.trim(), newPassword }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };
      if (!res.ok) {
        setError(data.error || "Failed to reset password. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Section>
          <Container>
            <div className="mx-auto max-w-md">
              {done ? (
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft/60 text-brand">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h1 className="font-serif text-2xl font-semibold tracking-tight">
                    Password updated
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Your password has been reset and all previous sessions were
                    signed out. Please log in with your new password.
                  </p>
                  <Button
                    onClick={() => router.push("/welcome")}
                    className="mt-8 w-full rounded-xl"
                    size="lg"
                  >
                    Go to log in <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Link
                    href="/welcome"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="h-3 w-3" /> Back to log in
                  </Link>
                  <div>
                    <h1 className="font-serif text-2xl font-semibold tracking-tight">
                      Set a new password
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Enter the reset token you received, then choose a new
                      password.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="reset-token" className="text-xs">
                      Reset token
                    </Label>
                    <Input
                      id="reset-token"
                      type="text"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="Paste your reset token"
                      required
                      autoComplete="off"
                      spellCheck={false}
                      className="mt-1 h-11 rounded-xl font-mono text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="reset-password" className="text-xs">
                      New password
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        id="reset-password"
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="At least 8 characters"
                        required
                        minLength={8}
                        autoComplete="new-password"
                        className="h-11 rounded-xl pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        tabIndex={-1}
                      >
                        <KeyRound className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="reset-confirm" className="text-xs">
                      Confirm new password
                    </Label>
                    <Input
                      id="reset-confirm"
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat your new password"
                      required
                      minLength={8}
                      autoComplete="new-password"
                      className="mt-1 h-11 rounded-xl"
                    />
                  </div>
                  {error && (
                    <p
                      className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={loading || !canSubmit}
                    className="w-full rounded-xl"
                    size="lg"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Reset password{" "}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground leading-relaxed">
                    Reset tokens are single-use and expire quickly. If yours
                    stopped working, request a new one through the channel that
                    provided it.
                  </p>
                </form>
              )}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
