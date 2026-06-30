# Prerequisites — detailed setup

Per-tool install/account steps for the iOS app pipeline. Staged by the stage that first needs each tool, so nothing is set up before it's useful. Most are free; the Apple Developer Program is the only paid requirement.

## At a glance

| Tool | What it's for | First needed by | Cost | How the agent checks |
|---|---|---|---|---|
| Claude Code | Runs the skills | now | free/paid plan | you're in it |
| Git + this repo (cloned) | The pipeline + your work vault | now | free | `git remote -v`; `AppsNotes/` + `.claude/skills/` present |
| Web search | Stage 1 research | now | built-in | `WebSearch` tool available |
| Firecrawl API key *(optional)* | Richer Stage 1 scraping | Stage 1 | free tier | `FIRECRAWL_API_KEY` set |
| Xcode + Command Line Tools | Build the app | Stage 7 | free | `xcodebuild -version` |
| iOS Simulator | Run + smoke-test | Stage 7 | free | `xcrun simctl list devices available` |
| XcodeBuildMCP | Agent-driven build/test/screenshot | Stage 7 | free | `mcp__XcodeBuildMCP__*` tools present |
| context7 + GitHits MCP *(optional)* | Current SDK docs during build | Stage 7 | free | MCP tools present |
| RevenueCat + AI Toolkit plugin | Paywall / subscriptions | Stage 8 | free | `claude plugins` lists RevenueCat |
| Apple Developer Program | IAP products + submission | Stage 8 / 10 | $99/yr | account at App Store Connect |
| PostHog | Analytics (instrument + read) | Stage 7 / 11 | free tier | project API key in hand |

---

## now — to start ideation

### Claude Code + repo
- Install Claude Code, clone this repo, and **run Claude Code from the repo root**. The skills write to `AppsNotes/<app-title>/` with root-relative paths, so the working directory must be the repo root.
- Confirm: the cwd contains `AppsNotes/` and `.claude/skills/`.

### Web search
- Built into Claude Code (`WebSearch`). Stage 1 market research uses it. Nothing to install.

### Firecrawl API key *(optional)*
- Only if you want richer competitor scraping in Stage 1. Sign up at https://firecrawl.dev, create an API key, and set `FIRECRAWL_API_KEY` in your Claude Code settings `env`. Skip otherwise — `WebSearch` is enough to start.

---

## Stage 7 — before building (ios-swiftui-development)

### Xcode + Command Line Tools
- Install **Xcode** from the Mac App Store (large download — do this ahead of Stage 7).
- `xcode-select --install` for command-line tools.
- `sudo xcodebuild -license accept` to accept the license.
- Verify: `xcodebuild -version`.
- **Version:** the starter template pins a specific Xcode / iOS floor. The authoritative version is in [ios-swiftui-development/references/docs-and-prerequisites.md](../../ios-swiftui-development/references/docs-and-prerequisites.md) — match that, don't guess.

### iOS Simulator
- `xcrun simctl list devices available` to see installed simulators.
- You need a simulator matching the template's iOS floor (see the reference above). Add missing ones via Xcode → Settings → Components.

### XcodeBuildMCP
- The build stage builds, runs, tests, and screenshots through the **XcodeBuildMCP** server (preferred over raw `xcodebuild`/`simctl`).
- Add it to your Claude Code MCP config (see https://github.com/cameroncooke/XcodeBuildMCP or the XcodeBuildMCP docs). Only the simulator workflow is needed by default.
- Verify: the `mcp__XcodeBuildMCP__*` tools are available; `session_show_defaults` runs.
- Fallback: if XcodeBuildMCP can't be configured, Stage 7 falls back to native `xcodebuild` + `xcrun simctl`.

### context7 + GitHits MCP *(optional, recommended)*
- Stage 7's anti-hallucination protocol pulls current SDK docs rather than trusting training memory. `context7` (library docs) and `GitHits` (verified code examples) MCP servers enable this. Add via your Claude Code MCP/plugin config. Optional but recommended for clean builds.

---

## Stage 8 — before the paywall (ios-paywall)

### RevenueCat + AI Toolkit plugin
- Create a free account at https://www.revenuecat.com.
- Install the toolkit (Stage 8 drives it instead of hand-rolling the SDK):
  ```
  claude plugins marketplace add RevenueCat/ai-toolkit
  claude plugins install RevenueCat
  ```
- First use opens a browser OAuth to connect your RevenueCat account. The toolkit authenticates to **RevenueCat only** — it never touches App Store Connect.

### Apple Developer Program + App Store Connect
- Enroll at https://developer.apple.com/programs (**$99/yr** — the only paid prerequisite). Needed to create in-app-purchase products (Stage 8) and to submit the app (Stage 10).
- Apple-side steps (agreements/banking/tax, subscription group, products, intro offers, in-app-purchase `.p8` key, sandbox tester) are done by the founder in the browser — Stage 8 walks through each, because the toolkit can't reach App Store Connect.

---

## Stage 7 instrument / Stage 11 read — analytics (PostHog)

- Create a free project at https://posthog.com. Copy the **project API key**.
- The starter template ships a PostHog `Analytics` facade (swappable in one file). The key is pasted in during Stage 7; until then events log to console.
- Reading the data is Stage 11 — no API key or MCP needed there; the founder pastes numbers from the PostHog UI and RevenueCat Charts.

---

## Notes

- **Everything is path-relative to the repo root.** No tool or skill should reference an absolute user path. If you find one, it's a bug — fix it to be relative.
- **Defer aggressively.** A founder validating an idea in Stage 1 should not be blocked on Xcode, RevenueCat, or an Apple Developer account. Set those up when the relevant stage arrives.
