#!/usr/bin/env node
// Scaffold a fresh iOS-app-pipeline project, or update an existing one.
//   npx github:airman416/ios-app-pipeline my-app   → scaffold a new project
//   npx github:airman416/ios-app-pipeline update    → refresh skills/template in place
import { existsSync, readdirSync, mkdirSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { scaffold, update } from './payload.mjs';

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const arg = process.argv[2];

// --- update mode: run from inside an existing scaffolded project ---
if (arg === 'update') {
  const cwd = process.cwd();
  if (!existsSync(join(cwd, '.claude/skills'))) {
    console.error('✗ Run `update` from inside a scaffolded project (no .claude/skills/ found here).');
    process.exit(1);
  }
  update(pkgRoot, cwd);
  console.log('✓ Updated skills + starter template + system overview from upstream.\n  Your AppsNotes/<app-title> work, docs, and git history were left untouched.');
  process.exit(0);
}

// --- scaffold mode: create a new project directory ---
const name = arg || 'ios-app-pipeline';
const target = resolve(process.cwd(), name);

if (existsSync(target) && readdirSync(target).length > 0) {
  console.error(`✗ ${target} already exists and is not empty. Pick a fresh directory:\n    npx github:airman416/ios-app-pipeline my-app`);
  process.exit(1);
}

mkdirSync(target, { recursive: true });
scaffold(pkgRoot, target);

console.log(`
✓ iOS app pipeline (free ideation tier) scaffolded into ${target}

Next:
  1. cd ${name}
  2. Open Claude Code here (run from this folder — paths are root-relative)
  3. Ask Claude: "set up the iOS pipeline"   → ios-setup
  4. Then:       "start ideation"            → ios-ideation (Stage 1)

Stage 1 (ideation) is free. When you finish it, Claude points you to the full
pipeline — Stages 2–11 + the buildable Xcode app.
Update later:  npx github:airman416/ios-app-pipeline update
`);
