# Minimalist Themes for Hermes Desktop

Give Hermes Desktop a warmer, calmer look with 18 balanced palettes.

**Version 1.3.0 — development branch; not yet released.**

![Minimalist Themes for Hermes Desktop](images/hermes-cover.png)

## Features

- 18 palettes available in Hermes Desktop's native theme picker.
- Different palettes for different profiles through Hermes Desktop's native appearance preferences.
- A packaged Agent skill for assigning and verifying profile themes.
- Matching YAML skins for optional CLI/TUI use; Desktop installation does not activate them automatically.

The plugin no longer adds a Settings button or a profile-theme selection dialog. It also leaves the plugin information icon and Agent switch visible, as provided by Hermes.

## Per-profile themes with the agent

Ask the agent to load `minimalist-themes:profile-themes` and assign the palettes you want, for example:

> Load the Minimalist profile-themes skill. Set Mint for my coder profile and Yuzu for my writer profile, verify both assignments, and return to my original profile.

The skill uses Hermes Desktop's native theme picker and verifies that selections persist after switching profiles. It requires working Desktop automation through Hermes' `computer_use` tool. If automation is unavailable, the agent must report that limitation rather than claim success. You can still select a palette manually in the native theme picker.

The Agent half must be enabled in the profile running the agent to expose the namespaced skill. It registers one read-only skill, no tools or hooks, and does not change any profile merely by loading. You do not need to install the skill into every profile whose appearance you want to change.

### Upgrading from the plugin's old selector

On first load, the Desktop half imports valid saved plugin assignments into missing native Desktop preferences. Existing native assignments take priority. Legacy plugin values remain stored for rollback, but no longer control ongoing appearance changes. This one-time migration does not alter profile configuration files.

Profiles without a native assignment follow the native default appearance. The `default` profile controls that inheritance slot, so changing its theme can also affect unassigned profiles. Desktop preferences belong to the local Desktop installation; they are not synchronized into a remote profile's configuration.

## Compatibility

The manifest requires Hermes `>=0.21.3`. Per-profile assignment additionally requires a Hermes Desktop build with native per-profile appearance support. The Agent workflow requires `computer_use`; it does not install or enable that tool automatically.

`desktop/plugin.js` is the unified package's Desktop entrypoint. `__init__.py` registers the Agent skill from `skills/profile-themes/SKILL.md`. The standalone entrypoint under `desktop-plugins/minimalist-themes/` contains the same Desktop behavior, but a standalone Desktop installation alone does not register the Agent skill.

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

The Desktop SDK loads the JavaScript entrypoints directly; no build step is required. Run these checks from the repository root:

```bash
node --check desktop/plugin.js
node --check desktop-plugins/minimalist-themes/plugin.js
node --test tests/plugin.test.mjs
hermes --run-module unittest discover -s tests -p 'test_*.py' -v
hermes plugins validate .
hermes plugins doctor . --ci
```

The Python tests use Hermes' runtime and its YAML parser. They check the Agent skill registration and frontmatter; the JavaScript tests check palette registration, removal of the custom controls, and migration of legacy assignments. Automated checks do not replace verifying the native picker and profile-switch persistence in a compatible Desktop session.

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
