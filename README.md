# Minimalist Themes for Hermes Desktop

Minimalist Themes provides eighteen warm, light color palettes for Hermes Desktop. Each palette appears in **Settings → Appearance** alongside Hermes’ built-in themes. When you choose a Minimalist theme, the plugin keeps it selected as you switch Desktop profiles; choosing a non-Minimalist theme returns control to Hermes’ normal profile-specific behavior.

**Current version:** 1.2.4 — theme-matched Kanban root background with compact modal spacing.

Open **Capabilities → Plugins → Minimalist Themes** to choose a theme for each profile. Each selector offers **Default** plus all eighteen palettes. Default inherits your current global Minimalist theme; an explicit selection is saved and applied whenever you enter that profile. Choosing a Minimalist theme in Appearance updates the global choice. Choosing a non-Minimalist theme releases the global lock.

Theme restoration starts immediately after registration. Hermes loads disk plugins asynchronously, so the plugin cannot prevent a brief appearance of the initial theme before its loader runs. The profile controls use a narrowly scoped compatibility integration with the plugin detail row because Hermes does not currently expose custom plugin settings.

![Minimalist Themes for Hermes Desktop](images/hermes-cover.png)

## Installation

On Linux and macOS, clone the repository and copy the installable Desktop plugin into Hermes’ application-level plugin directory:

```bash
git clone https://github.com/mykeura/minimalist-themes-for-hermes /tmp/minimalist-themes-for-hermes
mkdir -p "$HOME/.hermes/desktop-plugins/minimalist-themes"
cp /tmp/minimalist-themes-for-hermes/desktop-plugins/minimalist-themes/plugin.js \
   "$HOME/.hermes/desktop-plugins/minimalist-themes/plugin.js"
```

Hermes Desktop watches this directory and normally loads the plugin within a few seconds. If the themes do not appear, open the Command Palette, run **Reload desktop plugins**, and then choose a theme from **Settings → Appearance**.

The default Desktop plugin directory is `~/.hermes/desktop-plugins/`. If your Desktop installation uses a custom `HERMES_HOME`, use its `desktop-plugins/minimalist-themes/plugin.js` path instead. On Windows, open **Settings → Plugins** to reveal the Desktop plugin directory, create a `minimalist-themes` folder there, and copy `plugin.js` into it.

## A small way to support the project

If you are considering the Nous Portal Personal plan, you can use [my Nous Portal referral link](https://portal.nousresearch.com/r/mykeura). It takes **$15 off your first month** and gives me a **$10 referral credit** that helps cover the API usage behind my ongoing work on these themes. It is entirely optional, but it is a simple way for both of us to benefit.

The offer is for new customers starting a new Personal subscription. It applies to the first invoice, and each payment card can be used for only one referral; if the card has already backed another referral, the discount is reversed and no referral reward is paid.

## Themes

The following screenshots show the eighteen palettes available after installation.

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

## Updating

Pull the latest repository version, copy `desktop-plugins/minimalist-themes/plugin.js` to the same installed location, and run **Reload desktop plugins** from the Command Palette if Hermes does not reload it automatically.

## Uninstalling

Remove the `minimalist-themes` folder from the Desktop plugin directory, reload Desktop plugins from the Command Palette, and select another appearance.

## About the palettes

These are intentionally warm, light palettes. They use the same palette when Hermes Desktop is in dark mode rather than offering separately designed dark variants. The plugin affects Hermes Desktop only and does not change the CLI or TUI.

## License

MIT — see [LICENSE](LICENSE).
