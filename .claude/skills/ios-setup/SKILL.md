---
name: ios-setup
description: Use FIRST when setting up the iOS app pipeline in a fresh clone, or when the user says "set up the pipeline", "get started", "check prerequisites", or "set up the environment". The agent verifies and installs prerequisites — staged by when each is needed (Claude Code + repo to start; Xcode + simulator + XcodeBuildMCP for Stage 7; RevenueCat + Apple Developer for Stage 8; PostHog for analytics) — then hands off to ios-ideation. App-agnostic.
---

# iOS Pipeline Setup

## The one rule

**Set up only what the next stage needs, when it needs it.** Ideation needs almost nothing. Do not make the user create a RevenueCat account or install Xcode before they've validated an idea — that's friction that kills momentum. Get them into Stage 1 fast; gate the heavier tools at their stages.

You (the agent) do the work: run the check commands, read the output, install what's missing or hand the user the exact account/link steps you can't do for them, and confirm each piece works before moving on.

## How to use this skill

Walk the steps in order. Stop after Step 2 and start Stage 1 unless the user explicitly wants to set everything up now. The detailed per-tool install/account steps + links live in [references/prerequisites.md](references/prerequisites.md) — read it before guiding any install you're unsure about.

---

## Step 1 — Confirm location

The pipeline writes work to `AppsNotes/<app-title>/` using paths **relative to the repo root**, so Claude Code must run from the cloned repo root.

- Verify the working directory has both `AppsNotes/` and `.claude/skills/`. If not, tell the user to `cd` into the cloned repo and restart Claude Code there.
- Confirm `git` is present and the repo is a clone (`git remote -v`).

## Step 2 — Core (needed to start Stage 1)

This is all that's required to begin ideation:

- **Claude Code** — already running if you're reading this.
- **This repo, cloned, opened from the root** — confirmed in Step 1.
- **Web search** — built into Claude Code (`WebSearch`); Stage 1 research uses it.

**Optional research booster:** a **Firecrawl** API key gives richer scraping for Stage 1 competitor research. Skip unless the user wants it — set `FIRECRAWL_API_KEY` in Claude settings if so (see reference).

→ **At this point the user can start.** Tell them: *"Core setup is done — you can begin Stage 1 now with `ios-ideation`. The rest (build, paywall, analytics tools) we'll set up when you reach those stages."* Only continue below if they want to set everything up upfront.

## Step 3 — Build prerequisites (needed by Stage 7: ios-swiftui-development)

Check each and install/guide what's missing:

- **Xcode** — run `xcodebuild -version`. The starter template targets a specific Xcode/iOS floor; confirm against [ios-swiftui-development/references/docs-and-prerequisites.md](../ios-swiftui-development/references/docs-and-prerequisites.md) (don't hardcode a version here — that reference is the source of truth). Install from the App Store; then `xcode-select --install` for command-line tools and accept the license (`sudo xcodebuild -license accept`).
- **iOS Simulator** — run `xcrun simctl list devices available`. Confirm a simulator matching the template's iOS floor exists (per the same reference). If not, add it in Xcode → Settings → Components.
- **XcodeBuildMCP** — the agent builds/tests/screenshots through this MCP server. Confirm its tools are available (the `mcp__XcodeBuildMCP__*` tools); if not, the user must add the server to their Claude config — see reference. Verify with `session_show_defaults` or `discover_projs`.

## Step 4 — Monetization prerequisites (needed by Stage 8: ios-paywall)

- **RevenueCat account** (free) + **AI Toolkit plugin** — Stage 8 drives the toolkit, not the raw SDK. Install: `claude plugins marketplace add RevenueCat/ai-toolkit` then `claude plugins install RevenueCat`. The plugin authenticates to RevenueCat via browser OAuth at first use.
- **Apple Developer Program** ($99/yr) + **App Store Connect** — required to create in-app-purchase products (Stage 8) and submit (Stage 10). This is the one paid prerequisite. The toolkit can't reach App Store Connect — the founder does those browser steps; Stage 8 walks them through it.

## Step 5 — Analytics (needed by Stage 7 to instrument, Stage 11 to read)

- **PostHog** (free tier) — the starter template ships a PostHog `Analytics` facade. Create a project, copy the project API key; it gets pasted in during Stage 7. Reading the numbers is Stage 11. No MCP/API key for reading — the founder pastes numbers from the PostHog UI + RevenueCat Charts.

## Step 6 — Optional doc-lookup MCPs (recommended for Stage 7)

- **context7** and **GitHits** MCP servers let the build stage pull current SDK docs instead of trusting training memory (the anti-hallucination protocol in Stage 7). Optional but recommended. See reference for config.

## Step 7 — Verify + readiness report

Run the checks for whatever's been set up and report a table: tool · needed-by-stage · status (✅ ready / ⚠️ missing / ⏭️ deferred). Be honest — don't mark something ready you didn't verify.

## Handoff

Once core (Step 2) is confirmed:

→ **Invoke `ios-ideation`** to start Stage 1. Tell the user which later-stage prerequisites are still deferred so there are no surprises when they reach Stage 7/8/11.

## Guardrails

- **Don't over-set-up.** Core first, ship them into Stage 1, defer the rest. Friction before value is the enemy.
- **Verify, don't assume.** Run the command and read the output before claiming a tool is ready.
- **You can't create third-party accounts for the user.** For RevenueCat / Apple Developer / PostHog, hand them the exact steps + links and confirm once they're done.
- **App-agnostic, path-relative.** Everything resolves from the repo root; never hardcode an absolute user path.
