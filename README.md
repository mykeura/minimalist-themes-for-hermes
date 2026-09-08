# Minimalist Themes para Hermes Desktop

18 paletas minimalistas (mismo diseño, distinto color) para Hermes Desktop.
Aparecen en **Settings → Appearance** junto a los temas incluidos.

| | | |
|---|---|---|
| Beetroot Juice | Blackberry Juice | Coffee With Milk |
| Cornmeal Porridge | Diana Yin | Grape Juice |
| Green Tea | Hibiscus Tea | Horchata |
| Mango | Mint | Nance Juice |
| Oceans | Orange Juice | Snow Water |
| Turquoise | Ultramarine | Yuzu |

## Instalación

Necesitas `git` y Hermes Desktop.

```bash
git clone https://github.com/mykeura/minimalist-hermes-themes /tmp/minimalist-hermes-themes
mkdir -p "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins"
cp -r /tmp/minimalist-hermes-themes/desktop-plugins/minimalist-themes \
      "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins/"
```

Luego en Hermes Desktop:

1. **Cmd-K → Reload desktop plugins**.
2. **Settings → Appearance**: elige uno de los 18.

> Si usas perfiles (`hermes -p <nombre>`), la carpeta es
> `~/.hermes/profiles/<nombre>/desktop-plugins/`. La ruta exacta la muestra
> **Settings → Plugins**.

## Desinstalar

Borra la carpeta `minimalist-themes` de `desktop-plugins`, recarga los plugins
y elige otro tema. No queda ningún rastro.

## Contenido

- `desktop-plugins/minimalist-themes/plugin.js` — el plugin: 18 temas,
  un solo archivo, sin dependencias ni red. **Solo aplica a la app Hermes
  Desktop** (panel Appearance); no afecta a la CLI ni a la TUI.
- `skins/*.yaml` — las mismas paletas como skins del backend para **CLI/TUI**
  (`hermes skin use <nombre>`; verificado que activan). No es necesario para
  usar los temas en el Desktop.
