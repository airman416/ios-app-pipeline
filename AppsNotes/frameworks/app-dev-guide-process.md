# App Dev Guide: $100K MRR Mobile App Process

## Overview
A complete visual process map for building a $100K MRR recurring-revenue habit-tracking iOS app. The pipeline emphasizes speed, value delivery, and viral distribution. Source: App Dev Guide screenshots.

---

## Stage 1: Market Entry & Validation

### The Core Journey (Linear Pipeline)
```
Pick a daily habit to serve 
  → Find a narrow vertical 
  → Prototype in 1-2 weeks 
  → Distribution test: 1 week beta w/ 3-20 users 
  → Onboard 500 free users 
  → Monetize: $4-15/mo core 
  → Retention loop + referrals 
  → Scale w/ ASO, affiliates
```

### Ways to Find Demand
The three primary channels for validating demand before building:
1. **Reddit** — subreddits in the pain category; look for threads asking for solutions
2. **Ideabrowser.com** — emerging app ideas and interest signals
3. **TikTok** — search for creators already talking about the pain problem

### The Three "Bets"
Organize your vertical selection around one of these proven categories:
- **Wellness** (sleep, meditation, stress, movement)
- **Money** (budgeting, investing, tracking)
- **Learning** (skills, language, certifications, knowledge)
- **Fitness** (workouts, nutrition, progress tracking)

Each category has its own demand curves and creator ecosystems.

---

## Stage 2: User Experience & Onboarding

### Core User Flow (System Diagram)

**User → App Store → (App) → Server**

1. **Search/Discover** — User finds app in App Store
2. **Listing view** — App Store listing (screenshots, reviews, blurb)
3. **Install + Open** — User installs app
4. **60% Onboarding (Value-First)** — User sees core feature and gets immediate value BEFORE signup
   - No account required upfront
   - User experiences the aha moment
   - Trust is built through demonstration, not promises
5. **Create Account** — Only after user sees value
6. **Starter Plan + First Success** — Free trial triggers conversion signals
7. **Daily Check-in** — App initiates habit loop
8. **Streak/Nudge + Progress** — Retention mechanics kick in

**Critical Design Rule:** 60% onboarding = the user gets 60% of the core value before entering their email. This is the difference between a concept and a product.

---

## Stage 3: Monetization Structure

### Pricing Tiers (Standard Blueprint)

**Entry Point: Free Trial (7–14 days)**
- User experiences full value for 7–14 days with no friction
- Objective: prove the product works before conversion ask
- During trial: track completion of "first success" milestone

**Conversion Point: After First Success (Habit Win)**

Two branching paths:

**Path A: Annual Anchor** 
- $49/year (psychological anchor price)
- High commitment, lower monthly cost
- Best for users showing strong habit commitment

**Path B: Monthly with Paywall**
- $7–$15/month core (base habit tracking)
- Paywall appears after first successful habit completion
- Psychological win → conversion moment (user has already invested)

**Add-On Monetization:**
- **Pro Pack** — $5/mo (advanced analytics, export, sharing)
- **Group/Team Plan** — $10/seat/month (family or team sharing)

### Key Principles
- **Never lead with price.** Lead with value. The free trial proves the app works.
- **Price anchoring matters.** A $49/year annual plan makes $9.99/month feel cheap by comparison.
- **Paywall timing is everything.** Show paywall after user has invested (created a streak, completed a goal, personalized their data). Investment triggers the IKEA effect — they value what they've built.

---

## Stage 4: Engagement & Retention Loops

### The Habit Funnel (Critical Milestones)

```
Onboarded
  ↓
[CRITICAL: First success within 24h]
  ↓
FirstWin
  ↓
[GOAL: 3 sessions in 7 days]
  ↓
Routine
  ↓
[BRANCH: 7+ day streak OR 3 days idle]
  ├→ Streak (7+ consecutive days)
  │   ↓
  │   Shares/Referrals
  │   ↓
  │   Advocate (high LTV)
  │
  └→ ChurnRisk (3+ days idle)
      ↓
      [NUDGE: Send benefit reminder]
      ↓
      (Re-engage or lose user)
```

### Retention Mechanics
1. **Onboarded**: User has signed up and completed initial setup
2. **First Success (24h window)**: User completes one successful habit check-in
   - This is the make-or-break moment
   - If user doesn't experience value within 24h, churn is nearly guaranteed
3. **FirstWin → Routine**: User achieves 3 sessions in 7 days (behavior = routine forming)
4. **Streak**: 7+ consecutive days of completion triggers identity shift
   - Users start to see themselves as "someone who does this"
   - Streak becomes a variable reward (social currency — they want to show it)
5. **Churn Prevention**: 3+ days idle triggers nudge/benefit reminder
   - Not a guilt-based message, but a reminder of the original pain/promise
6. **Advocate**: Users who share/refer become advocates (and have highest LTV)

### Design Takeaway
- **Every single day matters in the first week.** Onboarding is not a one-time event; it's the first 7 days.
- **Streaks are the primary retention lever.** Streaks trigger identity, competition, and sharing.
- **Referral is built-in, not bolted-on.** Structure rewards around "share your progress and get 3 months free."

---

## Stage 5: Growth & Distribution

### Owned Channel Strategy

**Three Content Pillars Feed One Owned Channel:**

```
TikTok/Longform content  ├─→ Owned Channel ─→ Share Prompts
SEO/SED optimization     ┤
Personal Newsletter       └─→ In-App Sharing

                              ↓
                          Referral 3 for free Pro
                          FB/IG Crossover API
                          Capping + Distribution
```

### Execution Details
1. **TikTok/Longform**: Create 3–5 TikToks per week showing user transformations, habit wins, and relatable moments
2. **SEO/SED**: Write blog posts about the pain (e.g., "Why you can't build a meditation habit in 30 days" → app solves it)
3. **Personal Newsletter**: Curate wins from your users; write about the habit category (not the app)
   - Newsletter is the bridge between organic content and owned audience
4. **In-App Share Prompts**: When a user completes a milestone (7-day streak, 30-day goal), show a share prompt
   - "Tap to share your 7-day streak on Instagram"
   - Referral incentive: "Share → 3 free months of Premium for you and a friend"
5. **Integrations**: 
   - FB/IG native sharing (pre-composed posts)
   - API for cross-posting (automate multi-platform shares)
6. **Capping**: Prevent over-sharing (max 1 share prompt per session, no spammy loops)

### Growth Math
- **Direct**: TikTok organic views → tap link → install
- **Organic Social**: Shared streak screenshots → friends see it → install
- **Referral**: User invites friend → friend signs up → both get premium time
- **SEO**: "Best meditation apps 2026" → blog post ranks → clicks → app link

---

## Stage 6: Feature Prioritization & Weekly Shipping

### Backlog Framework

```
Backlog
  ├─ Feature (Impact × Confidence / Effort = Score)
  │  └─ Candidates: High impact / High ICE score
  │
  ├─ Feature (Impact × Confidence / Effort = Score)
  │  └─ Candidates: High impact / High ICE score
  │
  └─ Feature (Impact × Confidence / Effort = Score)
     └─ Candidates: High impact / High ICE score

         ↓
    
    Top 3 Ship This Week
    
    Remaining: Kill / Defer
```

### Scoring System: ICE (Intercom Framework)
- **Impact**: How much does this improve retention, conversion, or revenue? (1–10 scale)
- **Confidence**: How sure are you this will deliver the impact? (% scale)
- **Effort**: How many person-days to build? (scale: 1=trivial, 10=months)

**Formula**: (Impact × Confidence) / Effort = Score

### Weekly Execution
1. **Monday**: Score all backlog items (list grows weekly from user feedback, data signals, founder ideas)
2. **Tuesday–Thursday**: Ship the top 3
3. **Friday**: Review, validate in-app, prepare for next week
4. **Decision Rule**: Only ship features with ICE score > 2.0. Everything else is deferred or killed.

### Philosophy
- **Ruthless prioritization beats perfect execution.** Shipping 3 good features per week > waiting to ship 10 perfect features in a month.
- **Data + founder judgment.** If data says "users want X" but founder says "that violates the core idea," founder wins. But this should be rare.
- **Kill features as much as ship them.** If a deferred feature is still on the backlog after 4 weeks, kill it. It probably doesn't matter.

---

## Integration with Pipeline Stages

### Maps to Each Stage
- **Stage 1 (Ideation)**: Use the "Ways to Find Demand" section and the three Bets
- **Stage 2 (Viral Growth)**: Use the Content Pillars and Growth Channel section
- **Stage 3 (Monetization)**: Use the Pricing Tiers and Paywall Timing
- **Stage 4 (Onboarding)**: Use the 60% Value-First and First Success metrics
- **Stage 5 (UI/UX)**: Design every screen with the Habit Funnel in mind
- **Stage 6 (Retention)**: Use the Habit Funnel milestones as KPIs
- **Stage 7 (Development)**: Organize code around the habit loop states
- **Stage 11 (Optimization)**: Use the ICE framework and weekly prioritization

---

## Key Metrics to Track

1. **Day 1 Success Rate**: % of onboarded users who complete their first check-in within 24h
2. **FirstWin → Routine Conversion**: % of Day-1-successful users who hit 3 sessions in 7 days
3. **7-Day Retention**: % of users still opening app on Day 7
4. **Free Trial → Paid**: Conversion rate at paywall
5. **CAC vs. LTV**: Cost Per Acquisition (total marketing spend / installs) vs. Lifetime Value (subscription revenue per user)
6. **Referral Coefficient**: How many new users come from each referring user (>1.0 = viral loop)

---

## Speed Principles

The entire process is designed around **decreasing time to outcome**:

1. **Prototype in 1–2 weeks** — don't over-design before validation
2. **Get to first success in 24h** — everything in onboarding is in service of this
3. **Ship top 3 features weekly** — no multi-month dev cycles
4. **Use trials to validate before monetization** — free trial is your A/B test
5. **Seed organically before paid ads** — organic is faster and builds credibility first

This blueprint assumes you're building a new app from scratch and shipping within 4–6 weeks to your first paying users.
