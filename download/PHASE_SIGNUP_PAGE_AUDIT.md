# PHASE — SIGNUP PAGE AUDIT (READ-ONLY)

**Date:** 2026-08-28
**Scope:** Read-only audit of the current signup/authentication implementation to prepare for a more personalized KYP onboarding experience with user-role/profile selection.
**Constraint:** No files were modified. No substance migration. No clinical content changes.

---

## EXECUTIVE SUMMARY

The KYP application **already has a complete multi-step signup flow with role selection** at `/welcome`. The flow includes: welcome screen → signup form → email verification prompt → role selection (5 roles as selectable cards) → done. The `User` model in Prisma already has a `role` field with 5 valid values. The role is stored in the database and in the session cookie, and a `/api/auth/role` endpoint exists to update it.

However, the existing 5 roles (`patient`, `mbbs_student`, `exam_aspirant`, `psychiatry_resident`, `healthcare_professional`) **do not exactly match** the 5 requested roles (`Patient`, `Student`, `Medical Resident`, `Student Doctor / Medical Student`, `Practicing Psychiatrist`). A mapping decision is required. Additionally, the role is currently **stored but never consumed** — no role-based personalization exists yet (the separate `DifficultyToggle` system handles content-level personalization via localStorage).

The signup flow is functional but lacks several UX features: no confirm-password field, no password visibility toggle, no password requirements display, no terms/privacy links, no actual email verification, and no login link from the main Navbar.

**Verdict: A. READY FOR SIGNUP REDESIGN** — the architecture fully supports role selection; only UX refinement and role-mapping decisions are needed.

---

## 1. CURRENT SIGNUP ARCHITECTURE

### 1.1 Route structure

| Route | File | Type |
|-------|------|------|
| `/welcome` | `src/app/welcome/page.tsx` (233 lines) | Client Component — multi-step flow |

The signup, login, email verification prompt, role selection, and completion screens are **all in a single file** (`src/app/welcome/page.tsx`) using a step-based state machine (`type Step = "welcome" | "signup" | "login" | "verify" | "role" | "done"`).

### 1.2 API routes

| Endpoint | File | Method | Purpose |
|----------|------|--------|---------|
| `/api/auth/signup` | `src/app/api/auth/signup/route.ts` | POST | Create user, hash password, set session cookie |
| `/api/auth/login` | `src/app/api/auth/login/route.ts` | POST | Verify password, set session cookie |
| `/api/auth/role` | `src/app/api/auth/role/route.ts` | POST | Update user role (requires session) |
| `/api/auth/session` | `src/app/api/auth/session/route.ts` | GET / DELETE | Read current session / logout |
| `/api` | `src/app/api/route.ts` | GET | Placeholder (`{ message: "Hello, world!" }`) |

### 1.3 Step flow

```
welcome → signup → verify → role → done
                ↘ login → done
```

- **welcome:** Landing screen with "Create an account" and "Log in" buttons
- **signup:** Name, Email, Password form (3 fields)
- **verify:** Email verification prompt (non-functional — both "Verify email" and "Skip for now" go to `role`)
- **role:** 5 selectable role cards (the existing role selection UI)
- **done:** Success screen with "Enter KYP" button → redirects to `/`

---

## 2. AUTHENTICATION PROVIDER

### 2.1 Stack

| Component | Technology | Status |
|-----------|------------|--------|
| Database | SQLite via Prisma (`db/custom.db`) | ✅ Active |
| Password hashing | `bcryptjs` (12 rounds) | ✅ Active |
| Session management | Custom cookie-based (`kyp-session`) | ✅ Active |
| `next-auth` | Installed in `package.json` (^4.24.11) | ⚠️ **NOT used** — dependency exists but no `NextAuth`, `getServerSession`, or `useSession` calls anywhere in `src/` |
| Middleware | None | ❌ No `middleware.ts` exists — no route protection |

### 2.2 Session mechanism

The session is a **base64-encoded JSON string** stored in an httpOnly cookie:
```json
{ "id": "user_id", "email": "...", "name": "...", "role": "..." }
```

**Security note:** This is **not a signed/encrypted JWT** — the cookie value is plain base64, meaning a user could theoretically forge a session cookie with any role value. The code comment acknowledges this: *"not JWT, but secure enough for v1"*. This is acceptable for an educational platform with no privileged clinical functionality, but should be noted.

---

## 3. CURRENT USER/PROFILE MODEL

### 3.1 Prisma schema (`prisma/schema.prisma`)

```prisma
model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  passwordHash  String
  emailVerified Boolean   @default(false)
  role          String    @default("mbbs_student") // patient | mbbs_student | exam_aspirant | psychiatry_resident | healthcare_professional
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

### 3.2 Existing role values

The `role` field is a free-form `String` (not an enum) with 5 valid values enforced by the `/api/auth/role` route:

| Role value | Label in UI | Description in UI |
|------------|-------------|-------------------|
| `patient` | Patient | Understand medications, conditions, side effects, and treatment information in plain language. |
| `mbbs_student` | MBBS Student | Learn pharmacology, pathology, physiology, anatomy, and clinical medicine. |
| `exam_aspirant` | NEET PG / INICET / FMGE Aspirant | Focus on high-yield concepts, PYQs, clinical reasoning, and exam preparation. |
| `psychiatry_resident` | Psychiatry Resident | Explore psychopharmacology, neuropsychiatry, clinical cases, and advanced clinical reasoning. |
| `healthcare_professional` | Healthcare Professional | Use KYP for clinical learning, pharmacology review, patient education, and continuing medical knowledge. |

### 3.3 Default role

New users are created with `role: "mbbs_student"` (hardcoded in `/api/auth/signup/route.ts` line 42). The role is updated when the user selects a role in the `role` step.

---

## 4. EXISTING ONBOARDING FUNCTIONALITY

### 4.1 What exists

- ✅ Multi-step signup flow with welcome screen
- ✅ Role selection step with 5 selectable cards (icons, labels, descriptions, selected state)
- ✅ Role stored in database (`User.role`) and session cookie
- ✅ `/api/auth/role` endpoint to update role post-signup
- ✅ Session check on page load (redirects to `done` if already logged in, or `role` if logged in but no role selected)

### 4.2 What does NOT exist

- ❌ No dashboard/profile/account page
- ❌ No role-based personalization (role is stored but never consumed — see §5)
- ❌ No actual email verification (the `verify` step is a non-functional placeholder)
- ❌ No password reset / forgot password flow
- ❌ No login link from the main Navbar
- ❌ No logout button in the UI (the `DELETE /api/auth/session` endpoint exists but is not wired to any UI)
- ❌ No terms/privacy policy pages
- ❌ No middleware-based route protection

### 4.3 Separate personalization system: DifficultyToggle

The codebase has a **separate, unrelated personalization system** — the `DifficultyToggle` (`src/components/kyp/ui/difficulty-toggle.tsx`):

| Difficulty level | Label | Icon |
|-----------------|-------|------|
| `patient` | Patient | User |
| `medical` | Student | GraduationCap |
| `resident` | Resident | Stethoscope |
| `clinician` | Clinician | Award |

This is stored in **localStorage** (via Zustand `persist` middleware) and is **not connected to the user's account role**. It controls which sections of drug pages are visible (e.g., exam-pearls hidden in Patient mode).

**Key observation:** The `DifficultyToggle` has 4 levels that partially overlap with the 5 account roles but are a different system. A future task should decide whether to unify these or keep them separate.

---

## 5. CURRENT SIGNUP UX

### 5.1 Form fields (signup step)

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| Name | text | required | placeholder "Your name" |
| Email | email | required | placeholder "you@example.com" |
| Password | password | required, minLength=6 | placeholder "At least 6 characters" |

### 5.2 Missing UX features

| Feature | Status |
|---------|--------|
| Confirm password field | ❌ Missing |
| Password visibility toggle | ❌ Missing |
| Password requirements display | ❌ Missing (only "At least 6 characters" placeholder) |
| Inline validation (real-time) | ❌ Missing (validation only on submit) |
| Terms/privacy links | ❌ Missing (only text "By continuing, you agree to KYP's educational use terms." — no actual link) |
| Account verification flow | ❌ Non-functional placeholder |
| Loading state | ✅ Present (Loader2 spinner on button) |
| Error state | ✅ Present (red error message box) |
| Success state | ✅ Present ("done" step with checkmark) |
| Login link | ✅ Present (toggle between signup/login) |
| Back button | ✅ Present (arrow-left back to welcome) |
| Keyboard navigation | ⚠️ Partial (form is keyboard-accessible, but role cards use `<button>` without radio-group semantics) |
| Screen-reader labels | ⚠️ Partial (basic labels exist, but role selection lacks `role="radiogroup"` / `aria-checked`) |

### 5.3 Visual design

- Premium aesthetic: full-page brain artwork background (`/artwork/hero-brain.png`) with dark overlay
- Centered card layout (max-width `md` = 448px)
- Logo at top (`/logo-navy-128.png`)
- Font: `font-serif` for headings, sans-serif for body
- Rounded corners (`rounded-xl`), brand color for selected states
- Role cards: icon + label + description + checkmark when selected

---

## 6. CURRENT LOGIN UX

### 6.1 Form fields (login step)

| Field | Type | Validation |
|-------|------|------------|
| Email | email | required |
| Password | password | required |

### 6.2 Login flow

1. User enters email + password
2. `POST /api/auth/login` verifies against `passwordHash`
3. On success: session cookie set, redirects to `done` step
4. On failure: error message ("No account found with this email" or "Incorrect password")

### 6.3 Redirect behavior

- After signup: `signup → verify → role → done → /` (homepage)
- After login: `login → done → /` (homepage)
- No role-based redirect (all users go to `/` regardless of role)

---

## 7. EXISTING REUSABLE COMPONENTS

### 7.1 shadcn/ui components (`src/components/ui/`)

47 components available, including all needed for a premium signup redesign:

| Component | File | Relevant for signup? |
|-----------|------|----------------------|
| Button | `button.tsx` | ✅ Primary action, outline, ghost variants |
| Input | `input.tsx` | ✅ Form fields |
| Label | `label.tsx` | ✅ Form labels |
| Card | `card.tsx` | ✅ Card containers |
| Badge | `badge.tsx` | ✅ Role badge on done screen |
| Dialog | `dialog.tsx` | ✅ Could be used for password requirements tooltip |
| Select | `select.tsx` | ✅ Alternative to card-based role selection |
| RadioGroup | `radio-group.tsx` | ✅ Proper semantics for role selection |
| Checkbox | `checkbox.tsx` | ✅ Terms acceptance |
| Form | `form.tsx` | ✅ Form validation (react-hook-form integration) |
| Sonner / Toast | `sonner.tsx` / `toast.tsx` | ✅ Success/error notifications |
| Skeleton | `skeleton.tsx` | ✅ Loading states |

### 7.2 KYP UI components (`src/components/kyp/ui/`)

| Component | File | Relevant? |
|-----------|------|-----------|
| Badge | `badge.tsx` | ✅ Brand-colored badges |
| Callout | `callout.tsx` | ✅ Info/warning callouts |
| Container | `container.tsx` | ✅ Layout wrapper |
| Section | `section.tsx` | ✅ Section wrapper |
| SectionHeader | `section-header.tsx` | ✅ Section headings |
| FloatingSearch | `floating-search.tsx` | ❌ Not relevant for signup |

### 7.3 Layout primitives

| Component | Available? |
|-----------|------------|
| Navbar | ✅ `src/components/kyp/sections/navbar.tsx` (but NOT shown on `/welcome`) |
| Footer | ✅ `src/components/kyp/sections/footer.tsx` (but NOT shown on `/welcome`) |
| RouteFrame | ❌ Does not exist — pages compose their own `<Navbar />` + `<main>` + `<Footer />` shell |

---

## 8. EXISTING DUPLICATE/LEGACY COMPONENTS

### 8.1 Auth-related

| Component | Status |
|-----------|--------|
| `src/app/welcome/page.tsx` | ✅ The ONLY auth UI — no duplicates |
| `src/components/kyp/footer.tsx` | ⚠️ Orphan file (0 inbound imports) — duplicate of `src/components/kyp/sections/footer.tsx` |
| `src/lib/kyp/homepage-data.ts` | ⚠️ Orphan file (0 inbound imports) — legacy data file |
| `next-auth` dependency | ⚠️ Installed but unused — legacy dependency |

### 8.2 Role/personalization systems

| System | Storage | Used for |
|--------|---------|----------|
| `User.role` (account) | Database + session cookie | ⚠️ Stored but NOT consumed |
| `DifficultyToggle` (content level) | localStorage (Zustand) | ✅ Controls drug page section visibility |

These are **two separate systems** that are not connected. A future task should decide whether to unify them.

---

## 9. RECOMMENDED ROLE-SELECTION ARCHITECTURE

### 9.1 Role mapping decision

The 5 requested roles do not exactly match the 5 existing roles. Two options:

**Option A: Reuse existing role values (recommended — minimal schema change)**

| Requested role | Existing role value | Rationale |
|----------------|---------------------|-----------|
| Patient | `patient` | Exact match |
| Student | `mbbs_student` | Closest match (MBBS = medical student) |
| Medical Resident | `psychiatry_resident` | Closest match (resident level) |
| Student Doctor / Medical Student | `mbbs_student` | Same as Student — **or see Option B** |
| Practicing Psychiatrist | `healthcare_professional` | Closest match (practicing clinician) |

**Problem with Option A:** "Student" and "Student Doctor / Medical Student" would map to the same value, which the user explicitly asked to evaluate as potentially distinct audiences.

**Option B: Add new role values (requires schema extension)**

Add `medical_student` as a distinct value from `mbbs_student`, and rename labels:

| Requested role | New role value | Label |
|----------------|---------------|-------|
| Patient | `patient` | Patient |
| Student | `student` | Student (non-medical) |
| Medical Resident | `medical_resident` | Medical Resident |
| Student Doctor / Medical Student | `medical_student` | Student Doctor / Medical Student |
| Practicing Psychiatrist | `psychiatrist` | Practicing Psychiatrist |

**Recommendation:** Use **Option B** — it preserves the distinction the user requested and avoids ambiguous mapping. The schema change is minimal (the `role` field is already a free-form `String`, not an enum — just update the valid values list in `/api/auth/role/route.ts`).

### 9.2 "Student" vs "Student Doctor / Medical Student" distinction

These are **genuinely different audiences** in the KYP product context:

| Audience | Who they are | What they need from KYP |
|----------|-------------|------------------------|
| Student (non-medical) | High school, undergraduate, or non-medical student curious about medicine | Plain-language explanations, general health awareness, no clinical detail |
| Student Doctor / Medical Student | MBBS / MD student studying pharmacology, pathology, clinical medicine | Clinical depth, mechanism details, exam preparation, diagnostic reasoning |

**Recommendation:** Do NOT merge them. Keep them as distinct roles.

### 9.3 Architecture recommendation

The existing architecture **already supports role selection**. No backend changes are needed beyond updating the valid roles list. The redesign should focus on:

1. **UX refinement** of the existing `/welcome` page (add missing features, improve visual design)
2. **Role value update** in `/api/auth/role/route.ts` (update the `validRoles` array)
3. **Role label/description update** in `welcome/page.tsx` (update the `roles` array)
4. **Optional:** Add a profile/account page where users can change their role later

---

## 10. RECOMMENDED ROLE LABELS AND DESCRIPTIONS

### 10.1 Role definitions (neutral, non-credentialed)

| Role value | Label | Short description |
|------------|-------|-------------------|
| `patient` | Patient | I want to understand my medications and conditions in plain language. |
| `student` | Student | I'm a student curious about medicine and how the brain works. |
| `medical_resident` | Medical Resident | I'm training in a medical specialty and need clinical depth. |
| `medical_student` | Student Doctor / Medical Student | I'm studying medicine and preparing for clinical practice and exams. |
| `psychiatrist` | Practicing Psychiatrist | I practice psychiatry and want a quick clinical reference. |

### 10.2 Future personalization use cases (NOT to be implemented now)

| Role | Future personalization (illustrative — do NOT implement yet) |
|------|--------------------------------------------------------------|
| Patient | Default to plain-language sections, hide exam-pearls, show patient education first |
| Student | Show foundational content, simpler explanations, hide advanced clinical detail |
| Medical Resident | Show clinical cases, exam pearls, mechanism details |
| Medical Student | Show pharmacology, mechanism flows, exam preparation content |
| Psychiatrist | Show advanced clinical reasoning, drug comparisons, evidence hierarchy |

**These are personalization preferences, NOT access controls.** All content remains accessible to all roles.

---

## 11. DATA-STORAGE RECOMMENDATION

### 11.1 Current storage

- `User.role` in Prisma SQLite database (string field)
- Session cookie (`kyp-session`) contains the role as base64 JSON

### 11.2 Recommendation

**Use the existing `User.role` field.** No new table, no new column, no schema migration needed (the field is already a free-form string).

**Update needed:**
1. `/api/auth/role/route.ts` — update the `validRoles` array to the new 5 values
2. `/api/auth/signup/route.ts` — change the default role from `"mbbs_student"` to `"student"` (or leave as-is and require selection)
3. `welcome/page.tsx` — update the `roles` array with new labels/descriptions

**Do NOT:**
- Add a separate `UserProfile` table (overkill for a single field)
- Store role in localStorage (it should be tied to the account, not the device)
- Add role to a separate metadata JSON field (the dedicated `role` column is cleaner)

---

## 12. SECURITY / PRIVACY CONSIDERATIONS

### 12.1 Critical principle: Role is a preference, NOT a credential

| Rule | Enforcement |
|------|-------------|
| Role selection must NOT become an authentication permission | ✅ The role is stored as a plain string with no authorization checks anywhere in the codebase |
| Role is NOT proof of being a doctor/psychiatrist | ✅ No verification flow exists — anyone can select any role |
| Users must NOT gain privileged clinical functionality by selecting "Practicing Psychiatrist" | ✅ No role-based feature gating exists — all content is accessible to all users |
| Sensitive information must NOT be unnecessarily collected | ✅ Only name, email, password, and role are collected — no medical license numbers, no specialty details, no patient data |

### 12.2 Session security note

The current session cookie is **unsigned base64 JSON** — a user could forge a cookie with any role. This is acceptable for the current system (since role confers no privileges), but if role-based access control is ever added in the future, the session mechanism must be upgraded to signed JWT or server-side sessions.

### 12.3 Privacy

- Email is used as the unique identifier — no third-party OAuth
- Password is hashed with bcrypt (12 rounds) — adequate
- No PII beyond name/email — good
- No analytics or tracking on the signup flow — good

---

## 13. ACCESSIBILITY CONSIDERATIONS

### 13.1 Current state

| Feature | Status |
|---------|--------|
| Form labels | ✅ Present (`<Label htmlFor="...">`) |
| Keyboard navigation (forms) | ✅ Native form inputs |
| Keyboard navigation (role cards) | ⚠️ Uses `<button>` elements (focusable) but lacks `role="radiogroup"` / `aria-checked` semantics |
| Screen-reader labels (role selection) | ⚠️ Missing `aria-label` / `aria-describedby` on role buttons |
| Focus management (step transitions) | ❌ No focus trapping or auto-focus on first field |
| Color contrast | ✅ Brand colors appear to meet WCAG AA |
| Reduced motion | ✅ Platform has `prefers-reduced-motion` support in `globals.css` |

### 13.2 Recommendations for redesign

1. Use `RadioGroup` from shadcn/ui (or add `role="radiogroup"` + `aria-checked` to custom cards) for proper semantics
2. Auto-focus the first form field on each step
3. Add `aria-live="polite"` for error messages
4. Add `aria-label` to role selection buttons (e.g., "Select Patient role")
5. Ensure focus is visible on all interactive elements

---

## 14. MOBILE CONSIDERATIONS

### 14.1 Current state

- Layout: `max-w-md` (448px) centered card — works on mobile
- Form inputs: `h-11` (44px) — meets touch target guidelines
- Role cards: full-width stacked — good for mobile
- Background image: full-page with overlay — may cause performance issues on low-end devices

### 14.2 Recommendations

- Test on 390×844 (iPhone 14) and 360×640 (small Android)
- Consider hiding the background brain artwork on mobile (performance)
- Ensure the role card grid is single-column on mobile (already is)
- Add `inputmode="email"` to email field for better mobile keyboards

---

## 15. VISUAL / DESIGN RECOMMENDATIONS

### 15.1 Current design strengths

- Premium brain artwork background
- Clean centered card layout
- Serif headings (Playfair Display) + sans-serif body (Geist)
- Brand teal accent color
- Rounded corners (`rounded-xl`)

### 15.2 Recommended improvements

1. **Add confirm password field** with inline match validation
2. **Add password visibility toggle** (Eye / EyeOff icon)
3. **Add password requirements** display (min 6 chars, etc.)
4. **Add terms/privacy links** (actual `<Link>` components, not just text)
5. **Improve role cards** — add subtle hover animation, better selected state, keyboard focus ring
6. **Add progress indicator** (Step 1 of 2, Step 2 of 2) for the signup → role flow
7. **Add "Why do we ask?" tooltip** on the role selection step (explains it's for personalization, not credentials)
8. **Add login link to Navbar** (currently no way to access `/welcome` from the main site)
9. **Add logout button** to Navbar (the API exists, no UI)

---

## 16. FILES THAT WOULD EVENTUALLY NEED MODIFICATION

### 16.1 Primary (UX redesign)

| File | Change |
|------|--------|
| `src/app/welcome/page.tsx` | Redesign signup form (add confirm password, password toggle, requirements), refine role selection cards, add progress indicator, improve accessibility |
| `src/app/api/auth/role/route.ts` | Update `validRoles` array to new 5 role values |
| `src/app/api/auth/signup/route.ts` | Change default role (or make role required at signup) |

### 16.2 Secondary (integration)

| File | Change |
|------|--------|
| `src/components/kyp/sections/navbar.tsx` | Add login/logout link, show user name/role when authenticated |
| `prisma/schema.prisma` | Optionally update the role comment to reflect new values (no schema migration needed — field is already a string) |

### 16.3 Optional (future)

| File | Change |
|------|--------|
| `src/app/profile/page.tsx` | NEW — profile/account page where users can change their role |
| `src/app/(auth)/layout.tsx` | NEW — optional auth layout group (if splitting welcome into multiple routes) |
| `middleware.ts` | NEW — if route protection is ever needed |

---

## 17. IMPLEMENTATION RISKS

| Risk | Severity | Mitigation |
|------|----------|------------|
| Breaking existing user accounts | **Medium** — existing users have roles like `mbbs_student` that may not exist in the new role list | Run a migration script to map old roles to new values, OR keep old values as valid aliases |
| `next-auth` confusion | **Low** — next-auth is installed but unused | Do not accidentally configure next-auth; the custom cookie system works fine |
| Role forging via session cookie | **Low** (no privileges conferred) — but **High** if role-based access is ever added | Do NOT add role-based access control without upgrading session security first |
| DifficultyToggle vs User.role confusion | **Medium** — two separate personalization systems could confuse users | Document clearly; future task should decide on unification |
| Orphan files (`kyp/footer.tsx`, `homepage-data.ts`) | **Low** — 0 inbound imports | Clean up in a separate pass |

---

## 18. WHAT MUST NOT BE CHANGED

| Asset | Reason |
|-------|--------|
| `src/lib/kyp/data/substances/alcohol.ts` | Phase 2 substance migration — frozen |
| `src/lib/kyp/data/substances/opioids.ts` | Phase 2 substance migration — frozen |
| `src/lib/kyp/data/substances/cannabis.ts` | Phase 2 substance migration — frozen |
| `kyp-neon/*.html` | Original neon source — frozen |
| `src/lib/kyp/data/drugs/*.ts` | Drug clinical data — frozen |
| `src/lib/kyp/data/diseases/*` | Disease data — frozen |
| `kyp-content.json`, `sertraline-extracted.json` | Clinical JSON — frozen |
| `src/app/substances/[slug]/page.tsx` | Substance route — frozen (unless adding role-based personalization, which is out of scope) |
| `src/app/drugs/[slug]/page.tsx` | Drug route — frozen |
| `src/app/diseases/[slug]/page.tsx` | Disease route — frozen |
| Phase 1D records | None exist, but the rule stands |
| Authentication backend (Prisma, bcrypt, session cookie) | Architecture is sound — only update role values, do not replace the auth system |

---

## 19. GIT BASELINE

### 19.1 Current state

```
$ git status --short
 m PROJECT-KYP    (submodule metadata only — 0 content change)
 m kyp-neon       (submodule metadata only — 0 content change)
```

Working tree is clean. No uncommitted source changes.

### 19.2 Recent commits

```
7f391e7  (latest)
e4185e1  (cannabis migration)
6734518
9c506e9  (opioids correction)
22743ba  (application blocker fix)
```

---

## 20. FINAL VERDICT

**A. READY FOR SIGNUP REDESIGN**

### Rationale

The existing architecture **fully supports** the requested role-selection signup experience:

1. ✅ A complete multi-step signup flow already exists at `/welcome` with role selection
2. ✅ The `User` model has a `role` field stored in the database
3. ✅ The `/api/auth/role` endpoint can update the role
4. ✅ The session cookie carries the role
5. ✅ Premium visual design language is already established (brain artwork, serif headings, brand colors)
6. ✅ All needed UI primitives exist (Button, Input, Label, Card, Badge, RadioGroup, etc.)
7. ✅ The role is treated as a personalization preference, NOT a credential (no access control)
8. ✅ No authentication backend changes needed — only role value updates and UX refinement

The redesign requires:
- **UX refinement:** Add confirm password, password toggle, requirements display, terms links, progress indicator, improved accessibility
- **Role value update:** Map the 5 requested roles to new or existing role values (recommend Option B — 5 new values to preserve the Student vs Student Doctor distinction)
- **Navbar integration:** Add login/logout links

No architecture changes, no schema migration, no authentication system replacement, and no backend rewrite is needed.

**No files were modified during this audit. No substance migration. No clinical content changes.**

**STOP.**

