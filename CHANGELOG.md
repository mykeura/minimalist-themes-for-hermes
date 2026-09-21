# Changelog

All notable, versioned changes to Minimalist Themes for Hermes Desktop are documented here. Entries are grouped from the repository's Git history; the source commit is included for traceability.

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
