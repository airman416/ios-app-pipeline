---
name: ios-ideation
description: Use when starting Stage 1 of the iOS app pipeline — pain point selection, research, and validation. Guides founder through pain selection and hands off to ios-ideation-market-research.
---

# iOS App Ideation — Stage 1 (Pain Point Selection)

**Rule:** Never hallucinate MRR or review data. Use the research pipeline; cite sources.

---

## Step 1 — Pick the Pain Point

**What makes a good pain — screen every candidate (from the list or the founder's own) against this:**
- **Frequent** (daily/weekly, not occasional) — frequency is the multiplier: the more often it's felt, the more people search for, pay for, and build a habit around a fix. Procrastinating daily ≫ forgetting a password monthly.
- **Emotionally irritating** — deeply frustrating, not a mild annoyance.
- **Felt by a large group** — big addressable audience.
- **Behavioral truth, not stated desire** — pick what people actually *do* ("scrolls till 2am"), not what they *say* they want ("wants to read more").
- **Bonus: a pain the founder feels themselves** — they become their own ideal customer.

Present this list. Ask which resonates, or invite the founder's own idea.

**Sleep & Health:** Can't sleep, always tired/no energy, can't lose weight, binge eating guilt, random anger outbursts, can't quit porn

**Mental/Emotional:** Anxiety through the roof, healing from a breakup, overthink everything, feel behind in life, don't know what to do with their life, lonely but hate dating apps, burnt out from hustle culture

**Focus & Productivity:** ADHD chaos, can't focus while studying, zero gym consistency, habit reset needed, journaling never sticks, want to meditate but never start, struggle with self-discipline

**Screen & Tech:** Addicted to their phone, too much screen time, can't stop comparing on social media

**Financial:** Crushed by debt, hate their 9-5 but stuck, wake up late every damn day

For each shortlisted pain point, suggest the "Duolingo for X" mental model to help the founder visualize.

After the founder picks one (or proposes their own), confirm:
- *"Got it — [pain point]. Let me research existing apps in this space and validate the concept. I'll run Steps 2–3 and come back with findings."*

---

## Session Notes: Step 1 Guidance

After this step completes, write a note to the AppsNotes vault so the founder can review their progress anytime.

**File location:** `AppsNotes/{app-title}/01-pain-selection.md`

**Create the app folder if it doesn't exist, then write** (`{app-title}` = a short kebab-case slug of the app name, e.g. `sleep-coach`; paths are relative to the repo root — run Claude Code from the cloned repo so `AppsNotes/` resolves):

```markdown
# {App Title} — Pain Selection

## Selected Pain Point
{the exact pain point from the list or founder's own idea}

## Why This Resonates
{founder's explanation — what about this pain point appealed to them}

## Duolingo for X Model
{the suggested positioning, e.g., "Duolingo for sleep," "Duolingo for anxiety management"}

## Next: Market Research
Moving to Step 2 — researching existing apps in this space and validating the concept against the 7-Step Framework.
```

---

## End of ios-ideation

✅ **Step 1 complete.** Pain point selected and documented in the vault.

**Your progress is saved here:**
- `AppsNotes/{app-title}/01-pain-selection.md`

**Next session:**
1. Open your vault and read `01-pain-selection.md` to catch up
2. Invoke the **ios-ideation-market-research** skill to begin Steps 2–3

You can close this session. The vault is your source of truth.

---

## Guardrails

- **Be direct if the idea is bad.** If the founder proposes something, you'll validate it in Step 3 (market research + frameworks). If it fails validation, tell them clearly and suggest alternatives from the pain list.
- **Steer away from completely novel concepts.** Validated markets beat untested ones. The risk of building for an audience that doesn't exist yet is too high.
- **Don't skip to offer development.** The offer must be shaped by market research and validation before moving to ios-ideation-offer.
- **If the product isn't remarkable, the marketing must be.** Flag this early — it carries into Stage 2. Founder's own data: an unoriginal clone got 1.5M views → $15; a genuinely distinct app got 1M views → $17K. Meaning beats reach — prefer a remarkable product.

---

## Handoff to ios-ideation-market-research

After Step 1 completes, invoke the **ios-ideation-market-research** skill with the pain point the founder selected. That skill will run Steps 2–3 (automated app research + validation frameworks) and deliver comprehensive findings.
