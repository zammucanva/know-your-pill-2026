"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/kyp/ui/badge";
import {
  User, GraduationCap, Award, Stethoscope, HeartPulse,
  ArrowRight, ArrowLeft, Check, Mail, Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "welcome" | "signup" | "login" | "verify" | "role" | "done";
type Role = "patient" | "mbbs_student" | "exam_aspirant" | "psychiatry_resident" | "healthcare_professional";

const roles: { id: Role; label: string; description: string; icon: typeof User }[] = [
  { id: "patient", label: "Patient", description: "Understand medications, conditions, side effects, and treatment information in plain language.", icon: HeartPulse },
  { id: "mbbs_student", label: "MBBS Student", description: "Learn pharmacology, pathology, physiology, anatomy, and clinical medicine.", icon: GraduationCap },
  { id: "exam_aspirant", label: "NEET PG / INICET / FMGE Aspirant", description: "Focus on high-yield concepts, PYQs, clinical reasoning, and exam preparation.", icon: Award },
  { id: "psychiatry_resident", label: "Psychiatry Resident", description: "Explore psychopharmacology, neuropsychiatry, clinical cases, and advanced clinical reasoning.", icon: Stethoscope },
  { id: "healthcare_professional", label: "Healthcare Professional", description: "Use KYP for clinical learning, pharmacology review, patient education, and continuing medical knowledge.", icon: User },
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

  React.useEffect(() => {
    fetch("/api/auth/session").then(r => r.json()).then(data => {
      if (data.user) {
        setUserData({ name: data.user.name, email: data.user.email });
        setStep(data.user.role ? "done" : "role");
      }
    }).catch(() => {});
  }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
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
          <Image
            src="/artwork/hero-brain.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
            role="presentation"
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
              <Image src="/logo-navy-128.png" alt="Know Your Pill" fill className="object-contain" priority />
            </div>
          </div>

          {/* STEP: WELCOME */}
          {step === "welcome" && (
            <div className="text-center">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
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
              <p className="mt-6 text-xs text-muted-foreground">By continuing, you agree to KYP's educational use terms.</p>
            </div>
          )}

          {/* STEP: SIGNUP */}
          {step === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">
              <button type="button" onClick={() => { setStep("welcome"); setError(""); }} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-3 w-3" /> Back
              </button>
              <h2 className="font-serif text-2xl font-semibold tracking-tight">Create your account</h2>
              <p className="text-sm text-muted-foreground">Start learning medicine visually.</p>
              <div className="space-y-3">
                <div><Label htmlFor="name" className="text-xs">Name</Label><Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="mt-1 h-11 rounded-xl" /></div>
                <div><Label htmlFor="email" className="text-xs">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="mt-1 h-11 rounded-xl" /></div>
                <div><Label htmlFor="password" className="text-xs">Password</Label><Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" required minLength={6} className="mt-1 h-11 rounded-xl" /></div>
              </div>
              {error && <p className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-xl" size="lg">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create account"}</Button>
              <p className="text-center text-xs text-muted-foreground">Already have an account? <button type="button" onClick={() => { setStep("login"); setError(""); }} className="font-medium text-brand hover:underline">Log in</button></p>
            </form>
          )}

          {/* STEP: LOGIN */}
          {step === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <button type="button" onClick={() => { setStep("welcome"); setError(""); }} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-3 w-3" /> Back
              </button>
              <h2 className="font-serif text-2xl font-semibold tracking-tight">Welcome back</h2>
              <p className="text-sm text-muted-foreground">Log in to continue learning.</p>
              <div className="space-y-3">
                <div><Label htmlFor="login-email" className="text-xs">Email</Label><Input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="mt-1 h-11 rounded-xl" /></div>
                <div><Label htmlFor="login-password" className="text-xs">Password</Label><Input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" required className="mt-1 h-11 rounded-xl" /></div>
              </div>
              {error && <p className="rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-xl" size="lg">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Log in"}</Button>
              <p className="text-center text-xs text-muted-foreground"><button type="button" className="font-medium text-brand hover:underline">Forgot password?</button></p>
              <p className="text-center text-xs text-muted-foreground">Don't have an account? <button type="button" onClick={() => { setStep("signup"); setError(""); }} className="font-medium text-brand hover:underline">Create one</button></p>
            </form>
          )}

          {/* STEP: VERIFY */}
          {step === "verify" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft/60 text-brand"><Mail className="h-5 w-5" /></div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight">Verify your email</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Email verification helps secure your account and enables progress tracking across devices. You can verify later — KYP is ready for you now.</p>
              <div className="mt-8 space-y-3">
                <Button onClick={() => setStep("role")} className="w-full rounded-xl" size="lg">Verify email</Button>
                <Button onClick={() => setStep("role")} variant="ghost" className="w-full rounded-xl text-muted-foreground" size="lg">Skip for now</Button>
              </div>
            </div>
          )}

          {/* STEP: ROLE */}
          {step === "role" && (
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-center">How will you primarily use KYP?</h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">This helps us prioritize the right content. You can change this anytime.</p>
              <div className="mt-6 space-y-2">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button key={role.id} type="button" onClick={() => setSelectedRole(role.id)}
                      className={cn("flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all",
                        isSelected ? "border-brand bg-brand-soft/20 ring-1 ring-brand/20" : "border-border/60 hover:border-brand/30 hover:bg-accent/20")}>
                      <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", isSelected ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground")}><Icon className="h-4 w-4" /></span>
                      <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-foreground">{role.label}</p><p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{role.description}</p></div>
                      {isSelected && <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={3} />}
                    </button>
                  );
                })}
              </div>
              {error && <p className="mt-3 rounded-lg border border-emergency/30 bg-emergency-soft/20 px-3 py-2 text-xs text-emergency">{error}</p>}
              <Button onClick={handleRoleSelect} disabled={!selectedRole || loading} className="mt-6 w-full rounded-xl" size="lg">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue"}{!loading && <ArrowRight className="ml-1.5 h-4 w-4" />}</Button>
            </div>
          )}

          {/* STEP: DONE */}
          {step === "done" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-success-soft/60 text-success"><Check className="h-6 w-6" strokeWidth={3} /></div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight">You're ready.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Welcome{userData?.name ? `, ${userData.name}` : ""}. KYP is ready for you.</p>
              {selectedRole && <Badge variant="brand" size="md" className="mt-4">{roles.find((r) => r.id === selectedRole)?.label || "Your role"}</Badge>}
              <Button onClick={() => router.push("/")} className="mt-8 w-full rounded-xl" size="lg">Enter KYP <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
