# Minimalist themes for Hermes Desktop

18 paletas minimalistas con el mismo diseño, distinto nombre. Aparecen en
**Settings → Appearance** como tarjetas junto a los temas incluidos
(Catppuccin, Everforest, Midnight…), y también en la paleta Cmd-K y `/skin`.

## Temas incluidos

| ID | Nombre |
|---|---|
| `beetroot-juice` | Beetroot Juice |
| `blackberry-juice` | Blackberry Juice |
| `coffee-with-milk` | Coffee With Milk |
| `cornmeal-porridge` | Cornmeal Porridge |
| `diana-yin` | Diana Yin |
| `grape-juice` | Grape Juice |
| `green-tea` | Green Tea |
| `hibiscus-tea` | Hibiscus Tea |
| `horchata` | Horchata |
| `mango` | Mango |
| `mint` | Mint |
| `nance-juice` | Nance Juice |
| `oceans` | Oceans |
| `orange-juice` | Orange Juice |
| `snow-water` | Snow Water |
| `turquoise` | Turquoise |
| `ultramarine` | Ultramarine |
| `yuzu` | Yuzu |

## Instalación (para ti o para quien descargue esto)

```bash
# 1. Copia el plugin al home que usa tu app
#    (Settings → Plugins muestra la ruta exacta; normalmente ~/.hermes)
mkdir -p "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins"
cp -r desktop-plugins/minimalist-themes "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins/"
```

2. En Hermes Desktop: **Cmd-K → Reload desktop plugins**.
3. Abre **Settings → Appearance**: las 18 tarjetas minimalist aparecen en la cuadrícula.
4. El toggle **Light / Dark / System** no invierte el diseño: cada paleta es de un solo modo y se pinta igual en los tres.

## Extras en esta carpeta

- `skins/*.yaml`: las mismas 18 paletas como skins del backend (CLI/TUI). Solo la
  skin **activa** llega al panel vía `hermes config set display.skin <id>`; el plugin
  de arriba es lo que muestra las 18 a la vez.
- `palettes.json`: paleta fuente.
