---
name: profile-themes
description: Assign Minimalist Desktop themes to Hermes profiles.
version: 0.1.0
author: Miguel Euraque (mykeura), Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [Hermes, Desktop, Themes, Profiles]
    related_skills: []
---

# Minimalist Profile Themes

Assign a different Minimalist palette to each requested Hermes Desktop profile using the host's native appearance controls. This changes Desktop preferences, not a profile's skills, model, tools, or CLI/TUI configuration.

## When to Use

- The user asks to distinguish Hermes profiles visually with different palettes.
- The user asks to change or restore a specific profile's Desktop theme.
- Do not use for editing palette colors, native window opacity, or installing skills into unrelated profiles.

## Prerequisites

- Minimalist Themes is installed and its Desktop half is enabled in the running Hermes Desktop app.
- Hermes Desktop supports native per-profile appearance preferences. Confirm this in the running host; do not fall back to the removed plugin Settings dialog.
- `computer_use` is available for interacting with the native Hermes window. Load its tool schema before acting; use `capture` in `ax` or `som` mode and fresh element indices. If desktop automation is unavailable, report that blocker rather than claiming a theme was applied.
- The user has authorized changes to the named profiles. Switching Desktop profiles can change the active gateway; do not interrupt an active turn, reconnect a remote backend, or change unrelated settings without authorization.

## Procedure

1. **Resolve the assignment.** Use `terminal(command="hermes profile list")` for local profile IDs and inspect the Desktop profile rail for remote routes. Preserve exact IDs, distinguish display labels from IDs, and record a profile-to-theme checklist. Ask only when the requested mapping is ambiguous. If the user authorizes your choice, choose distinct available palettes. Completion: every target profile has a specific theme and no extra profile is in scope.
2. **Inspect the running app.** Use `computer_use(action="capture", mode="ax", app="<observed Hermes app name>")`; discover the app with `list_apps` if needed. Record the original active profile, each target's current committed theme, and brightness mode so the change can be undone. Completion: the target window and current profile are identified, not assumed from this agent's `$HERMES_HOME`.
3. **Apply one profile at a time.** Switch to the target through Hermes' native profile controls and recapture to confirm its identity. Open the native theme picker (Appearance or the command palette's theme control, whichever the observed host exposes), choose the requested palette, and commit it. A hovered preview is not a saved selection. Use current element indices with `computer_use(action="click", element=N, capture_after=True)`; do not guess coordinates, selectors, or shortcut keys. Keep light/dark/system mode unchanged. Completion: the committed picker selection matches the requested palette while the intended profile is active.
4. **Verify persistence.** Switch to another profile and back. Reopen the picker and confirm the saved theme rather than only comparing canvas colors. Repeat for every target and verify an untouched profile retains its earlier selection when one is available. If a switch interrupts ongoing work, defer it and report persistence as unverified. Completion: every assignment is verified after a round trip, or explicitly reported as blocked/unverified.
5. **Restore context and report.** Return to the original active profile and close any picker you opened. Report the applied profile-to-theme mapping, any failures, and the previous theme for rollback. To revert, select the recorded previous theme through the same native picker. Completion: the requested assignments are accounted for and the user's original working profile is restored.

## Available Palettes

| Theme ID | Picker label |
| --- | --- |
| beetroot-juice | Beetroot Juice |
| blackberry-juice | Blackberry Juice |
| coffee-with-milk | Coffee With Milk |
| cornmeal-porridge | Cornmeal Porridge |
| diana-yin | Diana Yin |
| grape-juice | Grape Juice |
| green-tea | Green Tea |
| hibiscus-tea | Hibiscus Tea |
| horchata | Horchata |
| mango | Mango |
| mint | Mint |
| nance-juice | Nance Juice |
| oceans | Oceans |
| orange-juice | Orange Juice |
| snow-water | Snow Water |
| turquoise | Turquoise |
| ultramarine | Ultramarine |
| yuzu | Yuzu |

## CLI/TUI Is a Separate Request

Do not substitute a CLI configuration write for a verified Desktop assignment. Desktop saves native per-profile picks locally; `display.skin` belongs to the profile's backend configuration. A disconnected profile or an existing Desktop pick may not repaint on a CLI write.

Only when the user also requests CLI/TUI theming, resolve the target home with `terminal(command="hermes -p <profile> config path")`, locate the matching YAML under this package's `skins/`, and copy it into that home's `skins/` after checking for an existing file. Do not overwrite a customized skin without confirmation. Then apply through `terminal(command="hermes -p <profile> config set display.skin <theme-id>")` and read back through `terminal(command="hermes -p <profile> config get display.skin")`. Always target the profile explicitly, including `default`; never use `hermes profile use` or hand-edit `config.yaml`. Treat Desktop verification as separate even if a connected gateway repaints.

## Pitfalls

- A Desktop theme is not a Hermes skill. Do not copy this skill into every target profile just to assign a palette.
- The plugin's old Settings button and profile modal no longer exist. The native theme picker remains available; the agent uses it instead of introducing another selector.
- Native `default` is the Desktop inheritance/global slot. Changing it may affect profiles without explicit picks; explain that consequence before changing it unless already within the user's scope.
- Existing plugin assignments are imported once into missing native entries. Native entries win; legacy storage stays for rollback and is not consulted for ongoing theme changes.
- Desktop preferences are local to that Desktop installation, not a portable remote profile distribution.
- Do not write Electron's LevelDB files, edit Hermes core, hardcode native storage keys in an agent command, or relaunch the user's app to obtain a debugging port.
- If automation is blocked, stop and report the exact limitation. Do not silently create a profile, install a new automation backend, or claim that reading `display.skin` proves Desktop persistence.

## Verification

- Every requested profile has the intended committed picker selection after switching away and back.
- Brightness mode and unrelated profiles remain unchanged, subject to the explicitly explained `default` inheritance behavior.
- The original active profile is restored.
- The final result includes the complete mapping and rollback selections, and distinguishes verified assignments from blocked ones.
