# System Overview

## Purpose
A predictable pipeline of Claude skills that helps non-technical founders ship recurring-revenue iOS apps that grow virally on TikTok and Instagram.

## Target User
Non-technical founder. No coding knowledge assumed. No marketing expertise assumed. Claude does the heavy lifting at every stage — the founder provides opinions and preferences, not expertise.

## Core Philosophy

**Decrease time to outcome.** The one skill behind every successful person is the ability to shorten the gap between idea and execution.

- Decrease time from idea → shipped app
- Decrease time from install → first value moment
- Decrease time from failure → lesson

**Copy + differentiate, don't invent.** It is better to copy a successful app and change one or two things than to build something completely unique. Validated demand is more valuable than originality.

**Pain is the pitch.** If you can articulate the pain a user feels accurately, they will almost always subscribe. Every feature, every screen, every piece of copy targets a specific pain.

**Get the bottom to zero.** From Hormozi's Value Equation: don't just make bigger promises. Minimize time-to-value and perceived effort. A user should open the app and get something valuable immediately.

## Revenue Model
Recurring subscription (weekly, monthly, annual). Not one-time purchase. The entire pipeline is optimized for subscription conversion and retention.

## Growth Channel
TikTok and Instagram organic/viral. The app must be demonstrable in 15–30 seconds of video. Features and design decisions are evaluated partly on their shareability.

## Who Builds the App
Claude Code in Xcode. The founder is present but does not write code. Claude handles all SwiftUI development.

## Pipeline Stages

| # | Stage | Type | Description |
|---|-------|------|-------------|
| 1 | Ideation | Elicitation | Pick pain, find market, validate concept, develop offer |
| 2 | Viral Growth Strategy | Elicitation | TikTok/Instagram content strategy, shareable features |
| 3 | Monetization Strategy | Elicitation | Pricing, paywall positioning, subscription structure |
| 4 | UI/UX Design | Execution | Design system, screens, flows |
| 5 | Onboarding Design | Elicitation + Execution | First-run experience, cold-install conversion |
| 6 | Retention Loops | Elicitation | Habits, referrals, engagement mechanics |
| 7 | SwiftUI Development | Execution | Architecture, libraries, coding standards; analytics instrumentation (PostHog facade + full event taxonomy shipped in the starter template) |
| 8 | Paywall Implementation | Execution | RevenueCat integration, A/B testing |
| ~~9~~ | ~~Analytics Instrumentation~~ | ~~Execution~~ | **Retired — absorbed into Stage 7 (instrument) + Stage 11 (read).** |
| 10 | App Store Submission | Execution | Metadata, screenshots, guidelines |
| 11 | Analytics → Optimization | Elicitation + Execution | Reading data, making decisions; reads the analytics instrumented in Stage 7 |

**Execution order ≠ stage number for Stages 4 and 5.** Stage 5 (Onboarding) is authored *before* Stage 4 (UI/UX Design): UI design lays out the onboarding funnel screens, so the funnel content + per-screen copy must exist first. **Actual run order: 1 → 2 → 3 → 5 → 4 → 6 → 7 → 8 → 10 → 11.** The numbers are stable identifiers used throughout the skills — don't renumber.

## Reference Framework: Complete App Dev Process

See `frameworks/app-dev-guide-process.md` for the full visual blueprint of how to ship a $100K MRR app. This framework spans all 11 stages and includes:
- Market validation channels (Reddit, Ideabrowser, TikTok)
- The habit funnel and retention milestones
- Onboarding flow (60% value-first principle)
- Pricing tier blueprint
- Growth distribution channels (owned + organic + referral)
- Weekly feature prioritization (ICE framework)

## Skill Types
- **Elicitation skills**: Claude asks questions, presents options with examples, does research. Founder chooses. Skill should not depend on founder's prior knowledge.
- **Execution skills**: Claude does the technical work directly. Founder approves.

## Entry Point
Every **new app** starts at Stage 1 — there is no shortcut into the middle of the pipeline for a fresh concept.

**Resuming an in-progress app (across sessions):** each stage saves its handoff to the app's vault (`AppsNotes/{app-title}/`) — `01-…` through `05-stage1-handoff.md` for Stage 1, then `stage2-…` through `stage10-…-handoff.md` for the rest. To resume, read the vault, find the latest `stageN-*-handoff.md`, and invoke the next skill (each skill's closeout names its successor). **The vault is the orchestrator — there is no separate orchestrator skill.**

## Stage Notes Summary
- **Stage 1 (01-ideation)**: Pain selection, market research, validation frameworks, offer development
- **Stage 2 (02-viral-growth)**: TikTok/Instagram strategy, SUCCESs framework, owned channels, referral loops
- **Stage 3 (03-monetization)**: Hard paywall after onboarding (no free tier); weekly ($4.99–$9.99) + annual ($29.99–$39.99), 3-day trial on both, annual pre-selected. (The old "$7–15/mo · $49/yr" blueprint is **superseded** — see 03-monetization.md.)
- **Stage 4 (04-ui-design)**: Design system, screens, flows, clean design principles — *authored after Stage 5* (it lays out the onboarding funnel screens; see execution-order note)
- **Stage 5 (05-onboarding)**: quiz funnel → hard paywall (Quiz → Results → Symptoms → How-Helps → Reviews → Features → Custom Plan → Paywall)
- **Stage 6 (06-retention-loops)**: Habit funnel, streak mechanics (guilt-free reset), minimal gamification, churn nudges, shareable artifacts (no referral program); owns post-subscribe first-success-in-24h
- **Stage 7 (07-swiftui-development)**: SKILL WRITTEN (`ios-swiftui-development`). Execution skill: forks a checked-in starter template (Swift 6 / SwiftUI / iOS 26 floor / SwiftData / MVVM-lite `@Observable`), builds all screens from Stage 4/5/6 specs, ships the full analytics event taxonomy via a PostHog facade (instrument here; read in Stage 11), leaves two clean Stage-8 seams (`DebugSubscriptionGate` stub + `PaywallPlaceholderView`), builds/smoke-tests via XcodeBuildMCP. **No auth / on-device-first**: landing continues straight into onboarding, data on-device (SwiftData), subscription via RevenueCat + Apple ID. New Step 1.5 gate judges whether two **optional** adjunct skills are needed — `ios-database-setup` (Supabase default, only when data must leave the device) and `ios-backend-setup` (Fly.io minimal proxy, Edge-AI-first, only when a secret key/webhook/job needs a server). **Stage 9 retired — analytics instrumentation absorbed here.**
- **Stage 8 (08-paywall)**: SKILL WRITTEN (`ios-paywall`). Execution skill that **wraps the RevenueCat AI Toolkit** (don't hand-roll the SDK) + adds the pipeline's offering/entitlement/3-day-trial/downsell structure, the Apple-side founder checklist (toolkit can't reach App Store Connect), the 2026 hidden-trial compliance gate, and ship-one-then-test A/B (Paywalls v2 remote; Experiments later)
- **Stage 9 (09-analytics)**: **RETIRED.** Analytics instrumentation absorbed into Stage 7 (PostHog facade ships in the starter template); reading analytics is Stage 11.
- **Stage 10 (10-app-store)**: SKILL WRITTEN (`ios-app-store`, SKILL.md + 3 references). Execution skill: ASO = ranking (indexed text: name/subtitle/keyword field; description NOT indexed on iOS) + conversion (icon + first 2 screenshots; 2025 caption OCR feeds ranking). Manual keyword research (no paid tools — mine competitors+reviews+autocomplete), Claude drafts all metadata + screenshot captions + **designs the icon** (Stage 10 owns the icon; Stage 4 owns the rest of the visual system) → founder approves → founder pastes into App Store Connect (Claude can't reach it). **Lean launch decided**: metadata + icon + screenshots (iPhone 6.9″), English-only, single page, no preview video. Deferred to Stage 11: Custom Product Pages, In-App Events, localization, PPO/A-B, optional Apple Search Ads.
- **Stage 11 (11-optimization)**: SKILL WRITTEN (`ios-optimization`). Elicitation+execution weekly-ritual runner: founder pastes PostHog + RevenueCat Charts numbers (no MCP/API key) → diagnose the single weakest funnel link → ICE-score backlog → ship top 3 via `ios-swiftui-development` → Friday review. `backlog.md` persists in the app repo. A/B deferred (Stage 8 ship-one-then-test). Last stage; loop repeats weekly.
