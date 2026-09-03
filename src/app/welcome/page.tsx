"use client";

import { imgPath } from "@/lib/kyp/image-path";
import * as React from "react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/kyp/ui/badge";
import {
  User, GraduationCap, Stethoscope, HeartPulse, Brain,
  ArrowRight, ArrowLeft, Check, Mail, Loader2,
  Eye, EyeOff, ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "welcome" | "signup" | "login" | "verify" | "role" | "done";
type Role = "patient" | "student" | "medical_resident" | "medical_student" | "psychiatrist";

const roles: { id: Role; label: string; description: string; icon: typeof User }[] = [
  { id: "patient", label: "Patient", description: "I want to understand my medications and conditions in plain language.", icon: HeartPulse },
  { id: "student", label: "Student", description: "I'm a student curious about medicine and how the brain works.", icon: GraduationCap },
  { id: "medical_resident", label: "Medical Resident", description: "I'm training in a medical specialty and need clinical depth.", icon: Stethoscope },
  { id: "medical_student", label: "Student Doctor / Medical Student", description: "I'm studying medicine and preparing for clinical practice and exams.", icon: Brain },
  { id: "psychiatrist", label: "Practicing Psychiatrist", description: "I practice psychiatry and want a quick clinical reference.", icon: User },
];

const passwordRequirements = [
  { label: "At least 6 characters", test: (pw: string) => pw.length >= 6 },
  { label: "One letter", test: (pw: string) => /[a-zA-Z]/.test(pw) },
  { label: "One number", test: (pw: string) => /\d/.test(pw) },
];

export default function WelcomePage() {
  const router = useRouter();
  const [step, setStep] = React.useState<Step>("welcome");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [userData, setUserData] = React.useState<{ name: string; email: string } | null>(null);
  const [selectedRole, setSelectedRole] = React.useState<Role | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/auth/session").then(r => r.json()).then(data => {
      if (data.user) {
        setUserData({ name: data.user.name, email: data.user.email });
        setStep(data.user.role && data.user.role !== "mbbs_student" ? "done" : "role");
      }
    }).catch(() => {});
  }, []);

  // Password validation
  const passwordErrors = passwordRequirements.filter(req => !req.test(password));
  const passwordsMatch = confirmPassword === password;
  const canSubmitSignup = passwordErrors.length === 0 && passwordsMatch && name.trim() && email.trim();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (passwordErrors.length > 0) {
      setError("Please meet all password requirements.");
      return;
    }
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to create account"); return; }
      setUserData({ name: data.name, email: data.email });
      setStep("verify");
    } catch { setError("Network error. Please try again."); }
    finally { setLoading(false); }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to log in"); return; }
      setUserData({ name: data.name, email: data.email });
      setStep("done");
    } catch { setError("Network error. Please try again."); }
    finally { setLoading(false); }
  };

  const handleRoleSelect = async () => {
    if (!selectedRole) return;
    setLoading(true);
    try {
      await fetch("/api/auth/role", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole }),
      });
      setStep("done");
    } catch { setError("Failed to save role."); }
    finally { setLoading(false); }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Brain artwork as full-page background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <img
            src={imgPath("/artwork/hero-brain.png")}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      {/* Content centered on top */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-12 w-12">
            </div>
          </div>

          {/* Progress indicator (signup → role) */}
          {(step === "signup" || step === "role") && (
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className={cn("flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors",
                  step === "signup" ? "bg-brand text-primary-foreground" : "bg-brand/20 text-brand")}>
                  {step === "role" ? <Check className="h-3 w-3" strokeWidth={3} /> : "1"}
                </span>
                <span className="text-xs font-medium text-foreground">Account</span>
              </div>
              <div className="h-px w-8 bg-border/50" />
              <div className="flex items-center gap-1.5">
                <span className={cn("flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors",
                  step === "role" ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground")}>2</span>
                <span className={cn("text-xs font-medium", step === "role" ? "text-foreground" : "text-muted-foreground")}>Profile</span>
              </div>
            </div>
          )}

          {/* STEP: WELCOME */}
          {step === "welcome" && (
            <div className="text-center">
              <h1 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
                Welcome to KYP Medicine
              </h1>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Visual medical learning built around the way you actually study, practise, and understand medicine.
              </p>
              <div className="mt-8 space-y-3">
                <Button onClick={() => { setStep("signup"); setError(""); }} className="w-full rounded-xl" size="lg">
                  Create an account <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button onClick={() => { setStep("login"); setError(""); }} variant="outline" className="w-full rounded-xl" size="lg">
                  Log in
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                By continuing, you agree to KYP&apos;s{" "}
                <span className="font-medium text-foreground/70 underline-offset-2 hover:underline cursor-pointer">educational use terms</span>.
              </p>
            </div>
          )}

          {/* STEP: SIGNUP */}
          {step === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">
              <button type="button" onClick={() => { setStep("welcome"); setError(""); }} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-3 w-3" /> Back
              </button>
              <div>
                <h2 className="font-sans text-2xl font-semibold tracking-tight">Create your account</h2>
                <p className="text-sm text-muted-foreground">Start learning medicine visually.</p>
              </div>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-xs">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="mt-1 h-11 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    inputMode="email"
                    className="mt-1 h-11 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-xs">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      placeholder="At least 6 characters"
                      required
                      minLength={6}
                      autoComplete="new-password"
                      className="h-11 rounded-xl pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {/* Password requirements */}
                  {passwordFocused && password && (
                    <div className="mt-2 space-y-1 rounded-lg border border-border/50 bg-muted/30 p-3" role="status" aria-live="polite">
                      {passwordRequirements.map((req) => {
                        const passed = req.test(password);
                        return (
                          <div key={req.label} className="flex items-center gap-1.5 text-xs">
                            {passed ? (
                              <Check className="h-3 w-3 text-brand" strokeWidth={3} />
                            ) : (
                              <span className="h-3 w-3 rounded-full border border-muted-foreground/30" />
                            )}
                            <span className={passed ? "text-brand" : "text-muted-foreground"}>{req.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="confirm-password" className="text-xs">Confirm password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      required
                      autoComplete="new-password"
                      className={cn("h-11 rounded-xl pr-10", confirmPassword && !passwordsMatch && "border-emergency/50")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="mt-1 text-xs text-emergency">Passwords do not match</p>
                  )}
                  {confirmPassword && passwordsMatch && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-brand">
                      <Check className="h-3 w-3" strokeWidth={3} /> Passwords match
                    </p>
                  )}
                </div>
              </div>
              {error && <p className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency" role="alert">{error}</p>}
              <Button type="submit" disabled={loading || !canSubmitSignup} className="w-full rounded-xl" size="lg">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create account <ArrowRight className="ml-1 h-4 w-4" /></>}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Already have an account?{" "}
                <button type="button" onClick={() => { setStep("login"); setError(""); }} className="font-medium text-brand hover:underline">Log in</button>
              </p>
            </form>
          )}

          {/* STEP: LOGIN */}
          {step === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <button type="button" onClick={() => { setStep("welcome"); setError(""); }} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-3 w-3" /> Back
              </button>
              <div>
                <h2 className="font-sans text-2xl font-semibold tracking-tight">Welcome back</h2>
                <p className="text-sm text-muted-foreground">Log in to continue learning.</p>
              </div>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="login-email" className="text-xs">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    inputMode="email"
                    className="mt-1 h-11 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="login-password" className="text-xs">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      required
                      autoComplete="current-password"
                      className="h-11 rounded-xl pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
              {error && <p className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency" role="alert">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-xl" size="lg">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Log in"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                <button type="button" className="font-medium text-brand hover:underline">Forgot password?</button>
              </p>
              <p className="text-center text-xs text-muted-foreground">
                Don&apos;t have an account?{" "}
                <button type="button" onClick={() => { setStep("signup"); setError(""); }} className="font-medium text-brand hover:underline">Create one</button>
              </p>
            </form>
          )}

          {/* STEP: VERIFY */}
          {step === "verify" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft/60 text-brand">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="font-sans text-2xl font-semibold tracking-tight">Verify your email</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Email verification helps secure your account and enables progress tracking across devices. You can verify later — KYP is ready for you now.
              </p>
              <div className="mt-8 space-y-3">
                <Button onClick={() => setStep("role")} className="w-full rounded-xl" size="lg">Verify email</Button>
                <Button onClick={() => setStep("role")} variant="ghost" className="w-full rounded-xl text-muted-foreground" size="lg">Skip for now</Button>
              </div>
            </div>
          )}

          {/* STEP: ROLE */}
          {step === "role" && (
            <div>
              <h2 className="font-sans text-2xl font-semibold tracking-tight text-center">
                Tell us about yourself
              </h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                This helps us personalize your experience. You can change this anytime.
              </p>

              {/* Privacy reassurance */}
              <div className="mt-4 flex items-start gap-2 rounded-lg border border-border/50 bg-muted/30 p-3">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This is a personalization preference, not a medical credential. All content remains accessible to everyone.
                </p>
              </div>

              <div
                className="mt-6 space-y-2"
                role="radiogroup"
                aria-label="Select your primary role"
              >
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      role="radio"
                      aria-checked={isSelected}
                      aria-label={`Select ${role.label}`}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2",
                        isSelected
                          ? "border-brand bg-brand-soft/20 ring-1 ring-brand/20"
                          : "border-border/60 hover:border-brand/30 hover:bg-accent/20"
                      )}
                    >
                      <span className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{role.label}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{role.description}</p>
                      </div>
                      {isSelected && <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={3} />}
                    </button>
                  );
                })}
              </div>

              {error && <p className="mt-3 rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency" role="alert">{error}</p>}

              <Button
                onClick={handleRoleSelect}
                disabled={!selectedRole || loading}
                className="mt-6 w-full rounded-xl"
                size="lg"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Continue <ArrowRight className="ml-1.5 h-4 w-4" /></>}
              </Button>

              <button
                type="button"
                onClick={() => setStep("done")}
                className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
              >
                Skip for now
              </button>
            </div>
          )}

          {/* STEP: DONE */}
          {step === "done" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-success-soft/60 text-success">
                <Check className="h-6 w-6" strokeWidth={3} />
              </div>
              <h2 className="font-sans text-2xl font-semibold tracking-tight">You&apos;re ready.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Welcome{userData?.name ? `, ${userData.name}` : ""}. KYP is ready for you.
              </p>
              {selectedRole && (
                <Badge variant="brand" size="md" className="mt-4">
                  {roles.find((r) => r.id === selectedRole)?.label || "Your role"}
                </Badge>
              )}
              <Button onClick={() => router.push("/enter")} className="mt-8 w-full rounded-xl" size="lg">
                Enter KYP <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
