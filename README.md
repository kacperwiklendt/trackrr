# Trackrr

A calm, touch-first weekly planner and goal tracker. Built with vanilla JavaScript, CSS and browser APIs, with no frontend runtime dependencies.

> This repository includes a working **GitHub Pages portfolio edition**. It runs without sign-in and keeps each visitor's data in their own browser. The separately hosted private edition adds authenticated cloud backup. GitHub Pages does not run that backend.

## Experience

- Four calendar layouts: day, weekly agenda, week board and month.
- Quick task capture: name, optional date and time; advanced fields progressively disclosed.
- Different workspaces for Calendar, My day, Goals and Progress.
- Left-side settings drawer, light/dark/system themes, seven UI languages.
- Checkbox, numeric and percentage goals; daily, weekday, alternate-day and weekly-count schedules.
- Milestones, notes, progress photos, 8-week charts, 12-week consistency heatmap and rest days.
- Local persistence and offline app shell after the first successful online load.
- CSV export, JSON backup/restore and calendar reminder export.
- Optional synthesised tap sounds and feature-detected vibration.
- Keyboard controls, native form semantics, focus outlines and reduced-motion support.

## Run locally

Requires Node.js 22 or newer. No npm install is needed.

```sh
npm test
npm run build
npm run dev
```

Open the address printed by the development server (normally `http://localhost:4173`). `npm run build` produces `pages/`, which can be hosted as static files under a domain root or repository subpath.

## Publish on GitHub Pages

1. Create an empty **public** GitHub repository named `trackrr` (do not initialise it with another README).
2. Extract this project, open a terminal inside it, and run:

```sh
git init
git add .
git commit -m "Build Trackrr planner and portfolio demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trackrr.git
git push -u origin main
```

3. In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open **Actions → Test and publish Trackrr → Run workflow** if the first push ran before Pages was enabled.
5. The successful deployment exposes the real demo URL. Put it in the repository's **About → Website**, pin the repository on your profile and link it in your CV.

The supplied workflow tests the model and backend contract, checks an asset-size budget, builds the static edition and deploys it. It does not require cloud credentials. See [GitHub's publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Architecture

| Layer | Responsibility |
| --- | --- |
| `public/model.js` | Date arithmetic, recurrence, completion, weekly aggregation, streaks and backup validation |
| `public/app.js` | Rendering, delegated events, capture/edit flows, local persistence and sync coordination |
| `public/i18n.js` | Polish, English, Spanish, German, Simplified Chinese, Italian and French UI dictionaries |
| `public/style.css` | Responsive layouts, design themes, progressive disclosure and reduced-motion variants |
| `public/sw.js` | Versioned, same-origin app-shell cache; API requests are never cached |
| `worker/api.mjs` | Private hosted edition: user-scoped R2 state, optimistic concurrency and previous snapshot |
| `scripts/build-pages.mjs` | Static edition, relative service-worker URLs and explicit local-only mode |
| `.github/workflows/pages.yml` | Tests and automatic static deployment |

Local storage keys intentionally retain the former Goal TrackR namespace, so renaming the app does not erase existing data. The model migrates the old checkbox-only task collection. Default demo goals are created only for a new browser in the portfolio edition.

### Cloud backend boundary

The private hosted edition is deployed on an authenticated Sites gateway. The gateway supplies the trusted `oai-authenticated-user-id` header. The Worker isolates records by user ID, rejects cross-origin writes, uses R2 conditional ETags to detect concurrent writes and retains the previous snapshot. The client queues local changes offline and requires an explicit choice on conflicts.

**Do not deploy this Worker as a public standalone endpoint with caller-controlled identity headers.** A different host needs real server-side authentication, a verified identity adapter, an R2 binding named `BUCKET`, and deployment configuration. The GitHub Pages edition deliberately disables this API; uploading the repository does not create Google OAuth or cloud sync.

## Performance and verification

- Zero frontend framework/runtime packages; no third-party analytics, remote fonts or image requests.
- One local variable font. Hero backgrounds are CSS, not downloaded photographs.
- Synthesised feedback uses one lazily created audio context and short, disconnected oscillator nodes.
- Delegated interaction handling; monthly cells limit visible previews to three goals.
- CI enforces a 250,000-byte initial asset budget (gzipped HTML/CSS/JS plus raw font/icon). The current build measures approximately **136 KiB** by this method.
- Model tests exercise recurrence, weekly caps, rest-protected streaks, legacy completion and backup validation.
- Backend contract tests exercise missing identity, user isolation, malformed data, stale revision conflicts and previous-snapshot retention using an in-memory R2 substitute.

These checks are not a Lighthouse score or a physical-device benchmark. Browser preview infrastructure was unavailable during this update. Visual QA, VoiceOver, Safari offline launch, sound, drag/drop and real-device haptics still need the checks below before claiming production-level device coverage.

## Manual release checklist

- [ ] iPhone Safari: create a task with only a name; expand details and save a recurring numeric goal.
- [ ] Switch among four calendar views; navigate months across December/January.
- [ ] Swipe between Calendar and My day; scroll the weekly board without changing workspace.
- [ ] Verify left drawer, Escape dismissal and keyboard focus return.
- [ ] Long-press UI text: no selection; editing and selecting text still work inside inputs.
- [ ] Verify all themes, language switching, reduced motion and 320px viewport.
- [ ] Check CSV/JSON export and restore with personal data excluded from the repository.
- [ ] Load once online, add to Home Screen, then test launch and edits in airplane mode.
- [ ] Test tap sound only after a gesture; vibration is best-effort and not guaranteed on iOS.
- [ ] Run Lighthouse on the deployed Pages URL and record the actual report, device preset and date.

## Scope and tradeoffs

Browser storage can be cleared and has a quota; export a backup periodically, especially when attaching photos. Portfolio data does not sync between devices. Native iOS widgets, background push and automatic geofencing are not implemented. Calendar reminders require importing the exported `.ics` file. The app intentionally suppresses selection in the interface but preserves text selection in editable controls.

## Portfolio presentation

Explain your own contribution and the assistance used honestly. A useful case study covers the user problem, progressive disclosure, offline/cloud boundaries, conflict handling, accessibility tradeoffs and measured performance. Be prepared to explain recurrence and ETag conflict tests rather than claim unmeasured "100/100" scores. Add your own screenshots, a short demo video and real device results after testing.

## Fonts and licensing

Public Sans is bundled under the SIL Open Font License; see `public/Public-Sans-OFL.txt`. Choose an appropriate license for your own application code before inviting reuse; no additional application license is implied by publishing the repository.
