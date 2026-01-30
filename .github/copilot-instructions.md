# Copilot / AI Agent Instructions 🔧

Brief: concise, code-aware guidance to make an AI coding agent productive in this repo.

## Quick repo overview ✅
- This repo contains 4 main parts: **leerprogramma**, **testsoftware** (Playwright + TypeScript), **testwebsite** (static HTML/CSS under `testwebsite/html-css`) and **typescript-workbench** (ad-hoc TS experiments).
- Tests are local-file driven: tests open `file://` URLs (see `testsoftware/pages/localIndexFile()`), not a running HTTP server.

## Important files to read first 📚
- `LEES MIJ - over deze repo.txt` — high-level intent and components
- `LEES MIJ - installatie-instructies.txt` — install hints (Windows PowerShell: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`)
- `testsoftware/playwright.config.ts` — configuration for Playwright (reporter, workers, trace)
- `testsoftware/pages/index.ts` — Page Object (Index class) and `localIndexFile()` helper
- `testsoftware/tests/**` — example tests and progressive refactor patterns (e.g. `tests/opdrachten/index.spec.ts`)

## How to run / developer workflows ▶️
- Install dependencies and Playwright browsers:
  - cd into `testsoftware` and run: `npm install` and then `npx playwright install`
- Run tests:
  - Run whole suite: `cd testsoftware && npx playwright test`
  - Run one file: `npx playwright test tests/development/a-leerbedrijf/about-us.spec.ts`
  - Headed debugging: `npx playwright test --headed` (works well with `page.highlight()` + `page.waitForTimeout()` used in tests)
- View report: `playwright-results/index.html` (config opens it automatically by default) or run `npx playwright show-report`.
- TypeScript experiments: use root npm scripts or `tsx`:
  - `npm run probeersels` or `npx tsx ./typescript-workbench/probeersels.ts`

## Project-specific conventions & patterns 🧭
- Tests are written incrementally; many examples show progressive refactors (0.0.0 -> 0.0.8 pattern in `tests/opdrachten/index.spec.ts`). Follow those examples when adding exercises.
- Use Playwright locators such as `page.getByRole('link', { name: '...', exact: true })` for accessibility-friendly selection.
- Prefer Page Object usage from `testsoftware/pages/index.ts` for link lists and routines (`Index.verifyLinkRoutine`, `verifyTaggedLinks`, `navigateToTextLink`).
- Tests validate navigation via URL checks: `expect(page.url()).toContain(<htmlFileName>)` (because tests open local HTML files).
- Debugging helpers: many tests use `highlight()` and a `timeout` variable; use these when you want visible browser feedback during development.

## Integration points & dependencies 🔗
- Playwright is the test runner (dev dependency in `testsoftware/package.json`).
- Tests rely on the static site under `testwebsite/html-css/` — file names must match expectations in tests and `pages/index.ts` `Links` array.
- Root uses `tsx` for quick TypeScript script runs (see root `package.json` scripts).

## Suggestions for AI agents 🤖 (how to act in this repo)
- When modifying tests, run them locally in headed mode to confirm behavior (`--headed` and pauses/`highlight()` help).
- Use and extend `pages/index.ts` for new link-based tests instead of duplicating selectors across tests.
- Keep changes discoverable and minimal: prefer adding small helper functions or Page Object methods that follow patterns already present.
- Do not assume a webserver — keep `file://` semantics unless explicitly adding an HTTP server and updating config/tests accordingly.

## Examples (copy/paste) ✂️
- Run a single test file in headed mode:
  cd testsoftware && npx playwright test tests/development/a-leerbedrijf/about-us.spec.ts --headed
- Run TypeScript probe:
  npm run probeersels

---
If anything is unclear or you want more detail for CI integration, test naming rules, or preferred commit conventions, tell me which area to expand and I will iterate. ✅