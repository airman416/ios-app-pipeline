---
name: ios-ideation-market-research
description: Use after ios-ideation selects a pain point. Runs Steps 2–3 (app research, validation frameworks, technical feasibility, code discovery). Produces comprehensive handoff for ios-ideation-offer.
---

# iOS App Ideation — Stage 1 (Market Research & Validation)

**Rule:** Never hallucinate MRR or review data. Use the research pipeline or web search; cite sources always.

---

## Step 2 — Research Existing Apps (Automated Pipeline)

Run immediately after pain point selection. No founder input needed until the report is shown.

### 2a — Derive Keywords

Generate 5–6 iTunes-style search terms from the pain point. Consumer-facing language, not clinical. Vary across: the symptom, the solution type, the tool name, the adjective.

Example: "can't sleep" → `sleep tracker`, `sleep sounds`, `insomnia relief`, `white noise sleep`, `bedtime routine`, `sleep cycle app`

### 2b–2d — Run the Research Pipeline

```bash
python3 .claude/skills/ios-ideation/scripts/research-apps.py "keyword1" "keyword2" "keyword3" "keyword4" "keyword5"
```

The script outputs:
- **2b:** Top apps (500+ ratings) for each keyword, deduped and sorted by rating count
- **2c:** SensorTower revenue estimates, downloads, rating, and app_id for top 10
- **2d:** All 1–2★ reviews for the top 5 apps by revenue (up to 10 pages each)

### 2e — Cluster & Report

Read all bad review text. Group into 3 recurring complaint themes ranked by frequency. Pick 6–8 of the most vivid raw reviews that best illustrate those themes (prioritize short, punchy ones — truncate at ~150 chars if needed). Write 2–4 GAP statements — each one a distinct differentiation opportunity.

**CRITICAL:** When writing GAP statements, translate complaints into **premium value propositions, not cheaper alternatives**:
- ❌ "Broken notifications" → "We'll offer free notifications that work"
- ✅ "Broken notifications" → "Bulletproof, AI-timed reminders that learn your schedule (premium feature)"
- ❌ "Aggressive paywalls" → "We'll be a free or cheaper alternative"
- ✅ "Aggressive paywalls" → "Viral loop (streaks, leaderboards, friend challenges) stays free. Premium: AI coaching, advanced insights" (charge MORE for MORE value)

**Remember:** Viral growth features (social competition, leaderboards, streaks) must NEVER be paywalled. Charge only for premium add-ons that don't gate the viral engine.

Present this exact format — no additional prose:

```
TOP APPS  (pain: {pain point})
─────────────────────────────────────────────────────────
App Name          MRR Est.    Rating   Reviews
{row 1}
{row 2}
{row 3}
{row 4}
{row 5}

TOP COMPLAINTS (1★–2★ across 5 apps, ~{n} reviews)
─────────────────────────────────────────────────────────
1. {complaint theme}    ({pct}%)
2. {complaint theme}    ({pct}%)
3. {complaint theme}    ({pct}%)

SAMPLE REVIEWS
─────────────────────────────────────────────────────────
[{rating}★] "{review text}"
[{rating}★] "{review text}"
... (6–8 total)

GAPS
─────────────────────────────────────────────────────────
1. {differentiation opportunity}
2. {differentiation opportunity}
3. {differentiation opportunity}
```

After the report, ask: *"Want me to adjust anything — different keywords, more apps, or dig into a specific complaint?"*

---

## Session Notes: Step 2 Guidance

After app research is complete and the founder is satisfied with the findings, write a note to the vault:

**File location:** `AppsNotes/{app-title}/02-app-research.md`

**Write:**

```markdown
# App Market Research

## Top Competing Apps
| App | Est. MRR | Rating | Reviews |
|-----|----------|--------|---------|
| {App 1} | {$X} | {rating} | {count} |
| {App 2} | {$X} | {rating} | {count} |
| ... |

## Top Complaint Themes (1★–2★ Reviews)
1. {theme} — {percentage of complaints}
2. {theme} — {percentage of complaints}
3. {theme} — {percentage of complaints}

## Differentiation Gaps (Opportunities)
1. {gap — premium value opportunity}
2. {gap — premium value opportunity}
3. {gap — premium value opportunity}

## Key Insights
- What existing apps do well: {1–2 sentences}
- What they're missing: {1–2 sentences}
```

Map founder nudges to parameter changes and rerun only the affected steps:

| Founder says | Change | Rerun from |
|---|---|---|
| "More niche" / "different angle" | Revise keywords | Step 2b–2d |
| "More apps" | Add `--limit 15` flag | Step 2b–2d |
| "Dig into complaint #N" | Re-cluster reviews focused on that theme | Step 2e only |
| "Try [specific app name]" | Look up trackId via iTunes Search, add to IDS manually | Step 2c |

---

## Step 3 — 7-Step Validation Framework

Score the concept 0–7. **Fewer than 4/7 = reject the concept.** Tell the founder directly, explain why, and suggest alternatives. Do not rationalize weak concepts or ideas that sound good on paper but won't work in practice.

| # | Criterion | Passes if... | Reality Check |
|---|-----------|-------------|-------------|
| 1 | Existing behavior | People already do this naturally (no app required) | Would a real person do this without the app? Not "could," would. (Streak apps fail here — most users quit before day 7.) |
| 2 | Existing question | People already wonder about this | Is this top-of-mind anxiety, or nice-to-know? Would someone actually PAY to answer it? |
| 3 | AI interprets the signal | App turns raw input into meaningful insight | Does AI add real, irreplaceable value? Would users notice if the AI left? |
| 4 | Immediate result | User gets value the first session | Not "eventually feels good." Literally the first use. Can they see the benefit in 60 seconds? |
| 5 | Shareable output | Result fits in a 5–15 second video | Visual, clear, and competitive enough to stand out on TikTok. Not text-heavy, not confusing, not boring. |
| 6 | Narrow scope | One problem done well — not a platform | Could a 19-year-old build this in 2 weeks? If no, it sprawls. If it requires multiple features to work, it fails. |
| 7 | Charges for clarity/peace of mind | Emotional resolution, not features | Would you actually KEEP paying in month 3? Not "I might," would you genuinely re-subscribe? |

**Reference:** Snoring recorder ($60K+ MRR): sleeping (behavior), "do I snore?" (question), AI flags events (interprets), morning result (immediate), short clip (shareable), just snoring (narrow), peace of mind for couples (charges for resolution).

**Scoring discipline — be ruthless:**
- A criterion passes ONLY if you'd bet money on it in real life, not just on paper
- "Gamified streaks"? Most users forget the app in 48 hours and never come back. That's a FAIL on criterion 1 (the behavior doesn't stick)
- "People like competition"? Would YOU keep paying for a leaderboard if it resets monthly? Honest answer = your true score for criterion 7
- Borderline = fail. Good-on-paper concepts are cheap. Only advance things that feel bulletproof after aggressive scrutiny

**If score < 4/7:**  
Kill it. Explain why each failing criterion is a real blocker. Suggest pivoting to a stronger pain point from the original list. Do not offer a path to "make it work with changes."

**If score ≥ 4/7:**  
Proceed to Step 3.5.

---

## Session Notes: Step 3 Guidance

After the 7-Step Validation Framework is scored, write to the vault:

**File location:** `AppsNotes/{app-title}/03-validation.md`

**Write:**

```markdown
# 7-Step Validation Framework

## Concept Score: {X}/7

| Criterion | Score | Notes |
|-----------|-------|-------|
| 1. Existing behavior | ✓/✗ | {why it passes or fails} |
| 2. Existing question | ✓/✗ | {why it passes or fails} |
| 3. AI interprets signal | ✓/✗ | {why it passes or fails} |
| 4. Immediate result | ✓/✗ | {why it passes or fails} |
| 5. Shareable output | ✓/✗ | {why it passes or fails} |
| 6. Narrow scope | ✓/✗ | {why it passes or fails} |
| 7. Charges for peace of mind | ✓/✗ | {why it passes or fails} |

## Verdict
{Pass (proceed to 3.5) or Fail (concept rejected, reason)}
```

---

## Step 3.5 — Monetization Viability Check

Before advancing to offer development, validate that a recurring revenue model exists using **gamification as the default monetization lever**. Gamification (streaks, XP, competition, identity) is the highest-probability path to recurring revenue on subscription apps.

**Quick check** (3 questions):

1. **Do users need this repeatedly?** Not one-time. Daily, weekly, or monthly engagement is required for subscription. (This usually aligns with the Habit Potential test.)

2. **Is there proven recurring revenue in this category?** Look at the top 5 apps from Step 2 research. Do they have subscription models (gamified or otherwise)? If no app in the category charges recurring fees, the market may not support it.

3. **Can this be gamified to create identity/habit?** The core behavior must be something users can build a streak around, earn progress on, or compete in. Examples: "track your water" ✓ (daily habit, visible progress), "remember your dreams" ✗ (passive, no feedback loop).

**If all 3 are YES:**  
Proceed to Step 3.6.

**If any are NO:**  
Circle back. Either:
- Reframe the pain point to make it gamifiable (daily habit, visible feedback, competition/progress)
- Pivot to a different pain point from the original list
- Abandon the concept and choose a different direction

---

## Step 3.6 — MVP Technical Feasibility & Core Feature Definition

**Goal:** Validate that an MVP can ship in ~2–3 weeks during Stage 7 (SwiftUI Development). Focus on the smallest, shippable version — not the full-featured product vision.

**Quick check** (4 questions):

1. **What is the absolute core feature?** Strip away everything except the one thing that solves the pain. If the user can only do ONE action in the app, what is it? (Examples: "record a snore clip," "log a single glass of water," "tap to log a mood.")

2. **Can it be built without complex external dependencies?** No real-time multiplayer, no complex computer vision, no custom hardware integrations. Does it depend only on standard iOS APIs (camera, microphone, notifications, HealthKit)?

3. **Does the core feature work standalone in the first session?** A user opens the app, performs the core action once, and gets immediate feedback. No onboarding, no setup, no "come back tomorrow to see results."

4. **Is the MVP achievable in 2–3 weeks of solo SwiftUI development?** Rough mental model: 5–10 screens, 1–2 core API calls, no backend required (or minimal backend). If the answer is "probably 6+ weeks even with everything going smoothly," the scope is too large.

**Output:**
- Core feature name (one line)
- Which of the 4 checks pass ✓ / fail ✗
- If any fail: identify what to cut from the MVP scope OR whether the concept needs rethinking

**If all 4 pass:**  
Proceed to Step 3.7.

**If any fail:**  
Most common fix: cut scope. Defer gamification (streaks, leaderboards, XP) to post-launch. Defer social features. Defer analytics. Build the bare minimum that proves the pain point is real, then add polish and engagement mechanics later.

---

## Step 3.7 — Competitive Feature Deep-Dive & Existing Code Discovery

**Goal:** Before development, find the closest existing app and any open-source implementations of the core feature. Learn from what already works. Accelerate development by standing on existing shoulders.

**Research pipeline:**

1. **Identify the template app:** From Step 2 research (top 5 apps by revenue), pick the ONE that is closest to your MVP concept. This is the "template" — the app where your core feature either exists or could exist most naturally.

2. **Ask the founder to test it themselves:**
   - "Download [App Name] and spend 5 minutes using the [core feature]. What does it do well? What's clunky? What would you change?"
   - This is not research — this is the founder getting hands-on with the competitor's implementation so they have opinions, not abstractions.

3. **Search GitHub for the exact feature:**
   - Search for 3–5 variations of keywords around the core feature. Examples:
     - "snoring detection" OR "audio classification" OR "sleep tracking"
     - "habit tracker streak" OR "streak counter" OR "daily habit logic"
     - "meditation timer" OR "timer app" OR "background audio iOS"
   - Filter by: **Stars > 50** (quality threshold), **Language: Swift** (iOS-relevant)
   - Keep list to top 10 repos max.

4. **Report findings:**

```
TEMPLATE APP
─────────────────────────────────────────────────────────
App:     [Name]
Feature: [description of the core feature as implemented]
What works: [1–2 sentences]
What's weak: [1–2 sentences based on reviews or interaction]

GITHUB IMPLEMENTATIONS (top by stars, language=Swift)
─────────────────────────────────────────────────────────
1. [Repo name] — [stars] ⭐ — [one-line: what it does]
2. [Repo name] — [stars] ⭐ — [one-line: what it does]
... (up to 10)

ACTIONABLE NEXT STEPS
─────────────────────────────────────────────────────────
- [Founder feedback from testing the template app]
- [Code reuse opportunity, if any: "Repo #2 implements X exactly; Stage 7 can study this"]
- [Risks or blockers found in existing code]
```

5. **Optional deep-dive:** If a repo looks particularly relevant, ask: *"Want me to review the core logic in [Repo Name] and draft pseudo-code for our version before Stage 7 development starts?"* This can save 2–3 days of dev work.

**Outcome:** The founder has hands-on knowledge of the closest competitor, and the development stage has a reference implementation to learn from (or adapt).

---

## Guardrails

- **Reject weak ideas aggressively.** Fewer than 4/7 = kill it. Explain why. Do not offer a path to "make it work with changes" — if it doesn't pass validation as proposed, it's not worth salvaging. Suggest pivoting to a stronger pain point instead.
- **Never hallucinate MRR or review data.** Use the pipeline or web search. If reporting pipeline figures, note source as iTunes Search API / SensorTower.
- **Steer away from completely novel concepts.** Validated markets beat untested ones. If no existing app does this, there's usually a reason.
- **Flag TikTok shareability early.** If the concept passes validation but the output isn't visual/shareable, raise it now.
- **Think like a real user, not an optimist.** Users forget apps. Streaks break. People quit. Score based on actual human behavior, not what the CEO hopes happens.
- **NEVER compete on price.** When translating complaint data into gaps: build premium value that justifies HIGHER pricing, not cheaper alternatives. Viral loops stay free. Premium add-ons charge for genuine value.

---

## Handoff to ios-ideation-offer

After Steps 2–3 complete successfully (score ≥ 4/7, monetization check passes, technical feasibility confirmed, code discovery done), prepare a summary for the founder including:

1. Pain point (one sentence)
2. Top 5 apps with MRR / review data
3. 7-Step Validation score and per-criterion notes
4. Monetization viability check results
5. MVP core feature name + feasibility assessment
6. Template app + GitHub findings

Then confirm: *"The concept passes validation. Ready to develop the offer? Let's move to ios-ideation-offer to shape the positioning, value, and handoff for Stage 2."*

---

## End of ios-ideation-market-research

✅ **Steps 2–3 complete.** Market research, validation, and feasibility checks documented in the vault.

**Your progress is saved here:**
- `AppsNotes/{app-title}/02-app-research.md`
- `AppsNotes/{app-title}/03-validation.md`
- `AppsNotes/{app-title}/04-validation-summary.md`

**Next session:**
1. Open your vault and read all notes to catch up (especially `04-validation-summary.md`)
2. Invoke the **ios-ideation-offer** skill to begin Steps 4–13

You can close this session. The vault is your source of truth.

---

## Session Notes: Steps 3.5–3.7 & Handoff Guidance

After all validation steps complete (monetization check ✓, technical feasibility ✓, code discovery ✓), write a comprehensive summary:

**File location:** `AppsNotes/{app-title}/04-validation-summary.md`

**Write:**

```markdown
# Validation Summary & Handoff

## Monetization Viability
- Recurring engagement: ✓ / ✗ — {explanation}
- Market precedent: ✓ / ✗ — {explanation}
- Gamifiability: ✓ / ✗ — {explanation}
- **Verdict:** {Proceed / Pivot / Abandon}

## MVP Technical Feasibility
- Core feature: {name}
- Can build without complex dependencies: ✓ / ✗
- Works standalone in first session: ✓ / ✗
- Achievable in 2–3 weeks: ✓ / ✗
- **Verdict:** {Proceed / Cut scope / Rethink}

## Competitive Landscape
- Template app: {name}
- Founder's hands-on feedback: {1–2 sentences}
- GitHub implementations found: {number}
- Code reuse opportunities: {yes/no — which repos}

## Ready for Offer Development
This concept has passed all validation gates. Next: develop the positioning, value proposition, and offer through ios-ideation-offer.
```
