# Minimalist Themes for Hermes Desktop

Give Hermes Desktop a warmer, calmer look with 18 carefully balanced light palettes.

**Current version:** 1.2.4

![Minimalist Themes for Hermes Desktop](images/hermes-cover.png)

## What it adds

- **18 warm palettes:** Beetroot Juice, Blackberry Juice, Coffee With Milk, Cornmeal Porridge, Diana Yin, Grape Juice, Green Tea, Hibiscus Tea, Horchata, Mango, Mint, Nance Juice, Oceans, Orange Juice, Snow Water, Turquoise, Ultramarine, and Yuzu.
- **Profile-aware themes:** keep one global Minimalist theme, or give each Hermes profile its own palette.
- **Default inheritance:** each profile starts at **Default**, which follows your current global Minimalist theme. Pick a palette to save a profile-specific override; switch back to **Default** to inherit again.
- **A coherent workspace:** the selected palette carries through supported Desktop surfaces, including the Kanban background.
- **Desktop-only scope:** the plugin changes Hermes Desktop appearance without changing the CLI or TUI.

## Choose a theme for each profile

Open **Capabilities → Plugins → Minimalist Themes**, then choose **Settings**. Select a palette for each profile and Hermes will remember those choices as you switch between profiles.

![Per-profile theme colors](demo/demo-1.gif)

The **Default** option is the easiest way to keep profiles synchronized with your global theme, while individual palettes let you recognize each workspace at a glance.

![Choosing a theme for each profile](demo/demo-2.gif)

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

## Installation

### Linux and macOS

Clone the repository, then copy the Desktop plugin into Hermes' plugin directory:

```bash
git clone https://github.com/mykeura/minimalist-themes-for-hermes /tmp/minimalist-themes-for-hermes
HERMES_ROOT="${HERMES_HOME:-$HOME/.hermes}"
mkdir -p "$HERMES_ROOT/desktop-plugins/minimalist-themes"
cp /tmp/minimalist-themes-for-hermes/desktop-plugins/minimalist-themes/plugin.js \
   "$HERMES_ROOT/desktop-plugins/minimalist-themes/plugin.js"
```

The command uses `$HOME/.hermes` by default and respects `HERMES_HOME` when it is set.

### Windows

Open **Settings → Plugins** in Hermes Desktop and use the option that reveals the Desktop plugin directory. Create a `minimalist-themes` folder directly inside that revealed directory, then copy `plugin.js` from this repository into it. The directory revealed by Hermes is authoritative; with a custom `HERMES_HOME`, use `%HERMES_HOME%\desktop-plugins\minimalist-themes` as an alternative location.

Hermes normally detects the plugin automatically. If it does not appear, open the Command Palette and run **Reload desktop plugins**, then choose a palette from **Settings → Appearance**.

## Updating

Pull the latest repository version and copy `desktop-plugins/minimalist-themes/plugin.js` over the installed file using the same location above. Run **Reload desktop plugins** from the Command Palette if Hermes does not reload it automatically.

## Uninstalling

Remove the installed `minimalist-themes` folder from Hermes' Desktop plugin directory, run **Reload desktop plugins**, and select another appearance.

## A small way to support the project

If you are considering the Nous Portal Personal plan, you can use [my Nous Portal referral link](https://portal.nousresearch.com/r/mykeura). It takes **$15 off your first month** and gives me a **$10 referral credit** that helps cover the API usage behind my ongoing work on these themes. It is entirely optional, but it is a simple way for both of us to benefit.

The offer is for new customers starting a new Personal subscription. It applies to the first invoice, and each payment card can be used for only one referral; if the card has already backed another referral, the discount is reversed and no referral reward is paid.

## License

MIT — see [LICENSE](LICENSE).
