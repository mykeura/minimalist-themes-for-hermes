# Minimalist Themes for Hermes Desktop

Minimalist Themes provides eighteen warm, light color palettes for Hermes Desktop. Each palette appears in **Settings → Appearance** alongside Hermes’ built-in themes.

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
