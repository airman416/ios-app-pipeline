# CLAUDE.md — iOS App Skills System

## What This Project Is
A pipeline of Claude skills that helps non-technical founders ship recurring-revenue iOS apps that grow via TikTok and Instagram. Claude builds the app in Xcode. The founder provides direction; Claude does the heavy lifting at every stage.

## Start Every Session Here
Read `AppsNotes/00-system-overview.md` before doing anything else. Then read the stage note(s) relevant to the current work. The notes are comprehensive — trust them over your training data about what was discussed.

## Working Notes Location
All session notes live in `AppsNotes/`.

### When to READ notes
- At the start of every session: read `00-system-overview.md` first, then any stage notes relevant to current work
- Before asking the founder a clarifying question: check if it's already answered in the relevant stage note
- Before moving to a new stage: read that stage's note to pick up open questions
- When the founder says something that might contradict a prior decision: re-read the relevant note and flag the conflict explicitly

### When to WRITE / UPDATE notes
- After every meaningful exchange where the founder gives input on a stage, framework, or decision
- When a new book, resource, or framework is introduced (add to `frameworks/`)
- When an open question gets answered: move it from "Open Questions" into the relevant section of the note
- When direction changes: update the existing note, add a `## Changes` entry with a one-line summary
- Do NOT wait until the end of a session — write after each exchange so nothing is lost if the session ends

### What NOT to write
- Speculation or ideas not yet validated by the founder
- Implementation details that belong in skill files
- Anything already captured (update, don't duplicate)

## Current Status
Pipeline built and portable. Every stage maps to a shipped skill in `.claude/skills/` (Stage 1 is split across `ios-ideation` → `ios-ideation-market-research` → `ios-ideation-offer`; Stages 2–11 each have a skill; Stage 9 retired — analytics instrumented in Stage 7, read in Stage 11). New users start via the `ios-setup` skill (prerequisites), then `ios-ideation` (Stage 1) — see `README.md`. Stages pass context forward through `AppsNotes/{app-title}/stageN-*-handoff.md`; the vault is the orchestrator.

**Caveat:** the pipeline has been audited for coherence but **not yet run end-to-end on a real app** — expect runtime gaps to surface on the first real build.

## Skill Files Location
Skills live in `.claude/skills/` within this repository (paths are relative to the repo root — run Claude Code from there). Each skill maps to one stage. They are version-controlled with the project and separate from the notes — notes are working memory, skills are the final deployable artifacts.

**Never create skills globally** (`~/.claude/skills/`). Always write them into the project `.claude/skills/` directory.

## After Writing or Editing a Skill
Run the skill-cleaner to check for duplicates, bloated descriptions, and budget pressure:

```bash
node --experimental-strip-types ~/.claude/skills/skill-cleaner/scripts/skill-cleaner.ts --root .claude/skills --months 3
```

Act on any suggestions before considering the skill done.

## Ground Rules

**Speed is a feature. Execution speed is THE competitive advantage for a solo founder.**
From the system overview: "Decrease time to outcome. The one skill behind every successful person is the ability to shorten the gap between idea and execution."
- Every decision at every stage must ask: does this speed up or slow down shipping?
- Cut scope aggressively. MVP means MVP — not "minimum awesome product," but the genuinely smallest shippable feature that proves the concept.
- Define the core feature early and protect it. Everything else is nice-to-have and lands post-launch.
- During ideation, flag concepts that require 6+ weeks of dev as inherently risky (founder fatigue, market drift).

**Other rules:**
- Do not write skill files until the design doc is approved
- Do not ask questions already answered in the notes
- Do not hallucinate MRR data, app review data, or App Store metrics — use web search and cite sources
- Be direct with the founder when an idea is bad — score it against frameworks, explain the gap
- The founder is non-technical — explain everything in plain English, never assume coding knowledge
- **NEVER compete on price.** Selling point is VALUE, not cost. See ideation skill for GAPS analysis guidance.
- **In validation reviews, be aggressive and critical.** Better to flag issues now than to ship a weak concept. Use frameworks ruthlessly; don't validate concepts out of politeness. If something doesn't score well, say so explicitly.
