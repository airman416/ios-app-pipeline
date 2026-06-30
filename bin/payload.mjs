// Single source of truth for WHAT ships, and in which tier.
// Used by bin/create.mjs (free installer) and scripts/publish-dist.mjs
// (free public mirror + paid zip) so they can never disagree.
import { cpSync, mkdirSync, existsSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

// ponytail: one regex — never copy VCS/build junk, local tooling, or the installer itself.
export const EXCLUDE =
  /(^|[/\\])(\.git|\.superpowers|node_modules|DerivedData|build|xcuserdata|\.DS_Store|package\.json|package-lock\.json|bin)([/\\]|$)/;

// FREE tier = Stage 1 ideation (the lead magnet) + setup. Everything else is paid.
export const FREE_SKILLS = new Set([
  'ios-setup',
  'ios-ideation',
  'ios-ideation-market-research',
  'ios-ideation-offer',
]);

function copier(srcRoot, target) {
  const filter = (src) => !EXCLUDE.test(src.slice(srcRoot.length));
  return (rel) => {
    const from = join(srcRoot, rel);
    if (!existsSync(from)) return;
    const to = join(target, rel);
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to, { recursive: true, filter });
  };
}

// Upstream-owned engine. `full` = paid pack (all skills + the Xcode template);
// otherwise = free tier (ideation skills only, no template).
function copyEngine(copy, srcRoot, full) {
  for (const d of readdirSync(join(srcRoot, '.claude/skills')))
    if (d.startsWith('ios-') && (full || FREE_SKILLS.has(d))) copy(`.claude/skills/${d}`);
  if (full) copy('templates/ios-starter'); // the buildable Xcode app is paid
  copy('AppsNotes/00-system-overview.md');
  copy('AppsNotes/frameworks');
}

// Scaffold a project. Default = free tier; {full:true} = the complete paid pipeline.
export function scaffold(srcRoot, target, { full = false } = {}) {
  const copy = copier(srcRoot, target);
  copyEngine(copy, srcRoot, full);
  copy('AppsNotes/CLAUDE.md');
  copy('README.md');
  copy('banner.png');
  copy('CLAUDE.md');
  writeFileSync(
    join(target, '.gitignore'),
    '.superpowers/\n.DS_Store\nnode_modules/\nDerivedData/\ntemplates/ios-starter/build/\n**/xcuserdata/\n'
  );
}

// In-place refresh of the engine. The public installer only carries the free
// tier, so this refreshes the free skills; paid users re-download the pack.
export function update(srcRoot, target, { full = false } = {}) {
  copyEngine(copier(srcRoot, target), srcRoot, full);
}
