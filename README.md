# Minimalist Themes for Hermes Desktop

Give Hermes Desktop a warmer, calmer look with 18 balanced palettes.

**Version 1.3.0 — development branch; not yet released.**

![Minimalist Themes for Hermes Desktop](images/hermes-cover.png)

## Features

- 18 palettes available in Hermes Desktop's native theme picker.
- Different palettes for different profiles through Hermes Desktop's native appearance preferences.
- Matching YAML skins for optional CLI/TUI use; Desktop installation does not activate them automatically.

## Per-profile themes

Hermes Desktop supports native per-profile theme assignment:
1. Switch to the profile you want to customize
2. Open Settings → Appearance → Theme
3. Select a Minimalist palette

The theme assignment persists per profile. The `default` profile controls the inheritance slot for profiles without explicit assignments.

## Compatibility

The manifest requires Hermes `>=0.21.3`. Per-profile assignment requires a Hermes Desktop build with native per-profile appearance support.

`desktop/plugin.js` is the Desktop entrypoint.

## Install from GitHub

These commands install the published repository version, not uncommitted changes in this development branch:

```bash
hermes plugins install mykeura/minimalist-themes-for-hermes --no-enable
hermes plugins enable minimalist-themes
```

Enable the Desktop half in Hermes' plugin controls if it is not already enabled, then choose a palette in the native theme picker or ask the agent to use the packaged skill. Use **Reload desktop plugins** from the command palette if Desktop still shows an older version.

## Update or uninstall

```bash
hermes plugins update minimalist-themes
hermes plugins remove minimalist-themes
```

Select another native Desktop theme before removing the plugin if a Minimalist palette is active. Do not delete or edit Hermes core files.

## Development and verification

The Desktop SDK loads the JavaScript entrypoint directly; no build step is required. Run these checks from the repository root:

```bash
node --check desktop/plugin.js
node --test tests/plugin.test.mjs
hermes plugins validate .
hermes plugins doctor . --ci
```

The JavaScript tests check palette registration and absence of custom UI controls. Automated checks do not replace verifying the native picker and profile-switch persistence in a compatible Desktop session.

## Support

If you find Minimalist Themes useful, you can support my work through [GitHub Sponsors](https://github.com/sponsors/mykeura).

[My Nous Portal referral link](https://portal.nousresearch.com/r/mykeura) gives new Personal subscribers **$15 off** and gives me a **$10 referral credit**. Both options are entirely optional, but appreciated.

## Theme gallery

|   |   |
| --- | --- |
| ![Beetroot Juice](images/beetroot-juice.png)<br>Beetroot Juice | ![Blackberry Juice](images/blackberry-juice.png)<br>Blackberry Juice |
| ![Coffee With Milk](images/coffee-with-milk.png)<br>Coffee With Milk | ![Cornmeal Porridge](images/cornmeal-porridge.png)<br>Cornmeal Porridge |
| ![Diana Yin](images/diana-yin.png)<br>Diana Yin | ![Grape Juice](images/grape-juice.png)<br>Grape Juice |
| ![Green Tea](images/green-tea.png)<br>Green Tea | ![Hibiscus Tea](images/hibiscus-tea.png)<br>Hibiscus Tea |
| ![Horchata](images/horchata.png)<br>Horchata | ![Mango](images/mango.png)<br>Mango |
| ![Mint](images/mint.png)<br>Mint | ![Nance Juice](images/nance-juice.png)<br>Nance Juice |
| ![Oceans](images/oceans.png)<br>Oceans | ![Orange Juice](images/orange-juice.png)<br>Orange Juice |
| ![Snow Water](images/snow-water.png)<br>Snow Water | ![Turquoise](images/turquoise.png)<br>Turquoise |
| ![Ultramarine](images/ultramarine.png)<br>Ultramarine | ![Yuzu](images/yuzu.png)<br>Yuzu |

## License

This project is licensed under the [MIT License](LICENSE).
