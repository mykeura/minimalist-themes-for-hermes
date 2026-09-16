# Minimalist Themes for Hermes Desktop

Minimalist Themes provides eighteen warm, light color palettes for Hermes Desktop. Every palette shares the same interface language while giving the application a distinct character, and each theme appears alongside Hermes’ built-in options in **Settings → Appearance**. The available palettes are Beetroot Juice, Blackberry Juice, Coffee With Milk, Cornmeal Porridge, Diana Yin, Grape Juice, Green Tea, Hibiscus Tea, Horchata, Mango, Mint, Nance Juice, Oceans, Orange Juice, Snow Water, Turquoise, Ultramarine, and Yuzu.

## Installation

Hermes Desktop and `git` are required. While this repository is private, the GitHub account used to clone it must have read access. Clone the repository, create the application-level desktop plugin directory if needed, and copy the distributable plugin folder into it.

```bash
git clone https://github.com/mykeura/minimalist-themes-for-hermes /tmp/minimalist-themes-for-hermes
mkdir -p "$HOME/.hermes/desktop-plugins"
cp -r /tmp/minimalist-themes-for-hermes/desktop-plugins/minimalist-themes \
      "$HOME/.hermes/desktop-plugins/"
```

Hermes Desktop plugins are application-level extensions. Install this plugin once in `~/.hermes/desktop-plugins/` so that it remains available when changing profiles; do not copy it into `~/.hermes/profiles/<name>/desktop-plugins/`. Hermes Desktop usually detects the file within a few seconds. If it does not appear, run **Cmd-K → Reload desktop plugins**, then open **Settings → Appearance** and select one of the eighteen themes. If Hermes uses a home directory other than `~/.hermes`, open **Settings → Plugins** to reveal the plugin directory used by that installation.

## Uninstalling

Remove the `minimalist-themes` directory from the Desktop plugins directory, reload desktop plugins, and choose another appearance. The plugin has no network dependency and leaves no persistent application state behind when removed.

## Scope and contents

`desktop-plugins/minimalist-themes/plugin.js` is the complete distributable Desktop plugin. It registers all eighteen themes through `THEMES_AREA` as full `DesktopTheme` values, so it affects only the Hermes Desktop appearance picker and does not change the CLI or TUI. The repository also includes corresponding `skins/*.yaml` files for CLI and TUI use through `hermes skin use <name>`; installing those skins is optional and is not required to use the Desktop themes.

## Readability and compatibility

The generated plugin has been statically audited against the Desktop theme contract. Its 180 declared text-and-surface combinations meet WCAG AA contrast for normal text, with a lowest measured ratio of 4.525:1. The audit also models the composed `color-mix()` surfaces that Hermes Desktop paints in the sidebar and editor. All 108 primary-text checks and all 36 accent-text checks exceed 4.5:1, with respective minimum ratios of 5.252:1 and 4.502:1.

The plugin also improves the horizontal profile rail while one of its eighteen themes is selected. It keeps the profile color identity, uses a palette-specific softened glyph ink, retains five percent transparency, and darkens the square very slightly. The check covers every one of Hermes’ 360 deterministic profile hues in both active and inactive profile-tint states. All 12,960 composed cases meet 4.5:1, with a lowest measured ratio of 4.511:1.

This profile-rail improvement is deliberately scoped to the plugin’s own `data-hermes-theme` names, so built-in and other third-party themes keep their default appearance. Hermes Desktop does not currently expose profile-rail colors as public `DesktopTheme` tokens, so the enhancement is installed and removed with the plugin lifecycle as a compatibility layer. If a future Hermes release changes the profile-rail markup, the themes will continue to work, but this targeted enhancement should be checked visually after the update. Before distributing a new plugin version, review Settings, Sessions, Bots, the composer, popovers, and the profile rail in the current Desktop release.

## Light palettes and private source

These palettes are intentionally warm and light. They do not include separately designed dark variants; `darkColors` keeps the same values to preserve each palette’s identity rather than converting it into a dark theme. The versioned `plugin.js` file is the public, installable artifact. The palette source data and generation tool remain private by design because they are not needed to install or use the established palettes, and are not included in a public clone for regeneration.