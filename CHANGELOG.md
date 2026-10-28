# Changelog

All notable, versioned changes to Minimalist Themes for Hermes Desktop are documented here. Entries are grouped from the repository's Git history; the source commit is included for traceability.

## [1.5.1] — 2026-10-28

### Fixed

- Hermes Agent no longer reports the package as a failed plugin. Every startup path that enumerates plugins logged `Failed to load plugin 'minimalist-themes': No __init__.py`, and `hermes plugins doctor` showed `ERROR: Plugin registration failed`, even though a Desktop-only pack has nothing to register. The package now ships an inert `__init__.py` whose `register()` does nothing, so the loader imports it successfully and records zero capabilities. `hermes plugins doctor` reports OK.

### Changed

- `.gitignore` keeps ignoring the private `*.py` tooling but no longer hides the package entrypoint.

## [1.5.0] — 2026-10-28

### Added

- The CLI banner is themed. Each skin carries its own `banner_logo` (the HERMES AGENT wordmark) and `banner_hero` (the emblem beside the panel), painted in that palette's accent family instead of the gold and bronze Hermes hardcodes. Desktop never reads either field, so its appearance is unchanged.
- The banner hero is the project's monochrome emblem, rendered once as braille at the caduceus footprint (30 columns, 13 rows) and reused by every palette.

### Changed

- The wordmark keeps Hermes' own geometry and only changes colour; the guidance below 95 terminal columns that skips the wordmark still applies.

### Known limitation

- Hermes paints deferred tools (`a2a`, `homeassistant`, `discord`, `feishu`, …) with the fixed ANSI `yellow` and disabled ones with `red` in `hermes_cli/banner.py`; a skin cannot override ANSI names, so those two lines keep the app's amber in every theme. The fix is a small upstream change, proposed separately.


## [1.4.0] — 2026-10-28

### Added

- One type system for all eighteen palettes: Figtree for the interface and Geist Mono for code and the terminal, embedded as latin-subset variable WOFF2 and declared once in a shared stylesheet. No network requests; the plugin still works offline.
- Per-palette terminal ANSI colors for the Desktop terminal pane (foreground, cursor, selection and the sixteen ANSI entries), each validated against its own canvas.
- CLI/TUI skin bridge: activating a `minimalist-*` skin also switches Desktop to that palette's full theme, typography and terminal colors included.
- `LICENSES/` with the two SIL Open Font License texts, and `assets/fonts/` with the unmodified sources the plugin embeds.

### Changed

- CLI skins renamed to `minimalist-<palette>`. A skin whose name matched a Desktop theme shadowed it in the picker (skins resolve before contributed themes), replacing the palette with the app's flat conversion of the YAML.
- Compatibility rules now match by prefix (`[data-hermes-theme^="<palette>"]`) instead of exact name.
- The shared stylesheet (fonts plus compatibility rules) is installed once per plugin load; per-theme `customCSS` is deliberately unused, since eighteen copies of the embedded fonts would cost about 1.5 MB of renderer memory for no visual gain.
- `scripts/build-plugin.py` generates the skins as well as `desktop/plugin.js`, reads the version from `VERSION` and keeps `plugin.yaml` in sync. Dead profile-lock code from 1.2.x is gone.

### Fixed

- Readability fixes for the profile rail, Capabilities, the MCP JSON editor and Manage Profiles stopped applying as soon as a custom accent was saved, because the app renames the active theme to `<palette>-accent-<hex>`.


## [1.3.0] — 2026-10-06

### Changed

- Delegate all per-profile appearance management to Hermes Desktop's native theme picker.
- Simplified plugin to a pure theme catalog; removed Agent skill and custom UI controls.
- Updated documentation to reflect native per-profile theme assignment workflow.

### Removed

- Agent entrypoint (`__init__.py`) and packaged skill (`skills/profile-themes/`).
- Legacy migration logic for removed custom profile selectors.
- Standalone desktop-plugins copy (now unified under `desktop/plugin.js`).
- README sections documenting the removed agent workflow and custom selector.
- JavaScript test suite from version control; tests are maintainer-local development checks, not part of the installed plugin.

## [1.2.6] — 2026-09-21

### Fixed

- Hid the decorative Agent-half switch behind the app's dash while the Desktop half runs (manifest-only plugin, nothing to enable); restored on dispose.
- Matched the injected Settings button metrics and height to the app badge pills.
- Strengthened the Agent+Desktop kind badge border while mounted; restored on dispose.

Source commits: `6956246`, `5f9326b`, `35f5b6b`, `70d2b31` (plus revert `727acb3` of the pinned-pill move experiment).

## [1.2.5] — 2026-09-21

### Prepared for release review

- Prepared the versioned manifest v2 and unified the Desktop entrypoint at `desktop/plugin.js`.
- Versioned the plugin descriptor and aligned installation metadata with `mykeura/minimalist-themes-for-hermes`.
- No visual changes; the existing palettes and Desktop behavior remain unchanged.

This documents preparation only; publication, tag, and final public SHA remain pending.

## [1.2.4] — 2026-09-20

### Fixed

- Restored the exact Minimalist theme canvas background for the Kanban root only, scoped to the surface utility with an organization icon in its header. Other surfaces and the global token remain untouched.

Source commit: `1c7eee1` (`fix(kanban): use theme canvas background`)

## [1.2.3] — 2026-09-20

### Fixed

- Matched the Profile themes modal card and selects to the warm theme colors, including dark select controls with readable text.
- Reduced excess vertical spacing around the modal title while preserving the profile-row gap.

Source commit: `cc87be6` (`fix(profiles): refine modal colors and spacing`)

## [1.2.1] — 2026-09-20

### Added

- Replaced the inline Profile themes section with an accessible `Settings` chip and modal, retaining per-profile selectors, persistence, refresh behavior, and lifecycle cleanup.

Source commit: `b2ebb82` (`feat(profiles): move theme settings into modal`)

## [1.2.0] — 2026-09-18

### Added

- Added per-profile theme overrides with a `Default` inheritance option and immediate restoration when switching profiles.
- Documented the Profile themes controls and their scoped Desktop compatibility integration.

Source commit: `8ac2dee` (`feat(profiles): add per-profile theme selectors`)

## [1.0.1] — 2026-09-18

### Changed

- Kept GitNexus local artifacts out of the repository.

### Fixed

- Preserved the selected Minimalist theme across Desktop profile switches.
- Increased the transparency of the profile-rail switch.
- Kept editor text and selections readable across Minimalist themes.

Source commits: `911760d` (`fix(themes): preserve selection across profiles`), `b4fdf3a` (`chore(git): ignore GitNexus local artifacts`), `6bc74f9` (`fix(profile-rail): increase switch transparency`), and `3da5dee` (`fix(profiles): keep editor text and selection readable`).

## [1.0.0] — 2026-09-16

### Added

- Established the first stable release and introduced the version manifest.
- Added 18 Desktop themes and 18 matching skin YAML files, backed by a versioned generator and contrast/relief algorithm.
- Added the MIT license and SPDX/authorship metadata to the plugin, generator, and skins.
- Added the Desktop installation and compatibility documentation, including the plugin's Desktop-only scope and CLI/TUI skin guidance.
- Added accent-contrast safeguards for Desktop surfaces.
- Added the profile rail and its plugin integration.
- Added embedded catalog compatibility for Capabilities and MCP, with readability improvements for those surfaces.
- Added theme screenshots and user-focused documentation, including the Nous Portal reference.

Source range: `e66d5c4^..4b85fa7`, ending with `4b85fa7` (`docs(release): establish version 1.0.0`).

## Historical notes

The current Git history moves from version 1.2.1 to 1.2.3; it contains no tag or commit that independently identifies a 1.2.2 release. No separate 1.2.2 entry is inferred.
