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

## Instalación (recomendada): con tu Hermes

Pásale a tu agente Hermes la URL de este repositorio y este prompt:

```text
Clona https://github.com/TU-USUARIO/minimalist-hermes-themes a un directorio
temporal e instala el plugin de temas "minimalist-themes" en mi Hermes:
1. Averigua mi Hermes home ACTIVO (pregunta qué perfil uso; por defecto
   ~/.hermes; en Settings → Plugins se ve la ruta exacta). No lo adivines.
2. Copia desktop-plugins/minimalist-themes/ del repo a
   <hermes-home>/desktop-plugins/minimalist-themes/ (la carpeta debe llamarse
   igual que el id del plugin).
3. No modifiques config.yaml ni ningún otro archivo de mi Hermes.
4. Verifica la sintaxis con `node --check` antes de copiar.
5. Avísame para que yo haga Cmd-K → Reload desktop plugins y compruebe que
   los 18 temas aparecen en Settings → Appearance.
```

## Instalación manual

```bash
git clone https://github.com/TU-USUARIO/minimalist-hermes-themes /tmp/minimalist-hermes-themes
mkdir -p "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins"
cp -r /tmp/minimalist-hermes-themes/desktop-plugins/minimalist-themes \
      "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins/"
```

Luego en Hermes Desktop: **Cmd-K → Reload desktop plugins** → **Settings → Appearance**.

> Si usas perfiles (`hermes -p <nombre>`), sustituye la ruta por
> `~/.hermes/profiles/<nombre>/desktop-plugins/`. La ruta exacta la muestra
> Settings → Plugins.

## Desinstalar

Borra la carpeta `minimalist-themes` de `desktop-plugins`, recarga plugins y
elige otro tema en Appearance. No queda ningún rastro: el plugin no toca tu
configuración.

## Seguridad: qué hace (y qué no hace) este plugin

- **Hace**: registrar 18 paletas de colores (`THEMES_AREA`). Un solo archivo,
  `desktop-plugins/minimalist-themes/plugin.js`, sin dependencias.
- **No hace**: no lee ni escribe archivos, no toca la red, no trae backend
  Python, no modifica `config.yaml`. Puedes auditarlo en un minuto: es una
  lista de colores y un `ctx.register` por tema.

## Contenido del repo

- `desktop-plugins/minimalist-themes/plugin.js` — el plugin (generado, no editar a mano).
- `scripts/build-plugin.py` — generador: deriva los 18 temas desde la paleta
  fuente con mezclas y umbrales de contraste documentados en el propio script.
- `skins/*.yaml` — las mismas paletas como skins del backend (CLI/TUI).
  Solo la skin activa llega al Desktop; el plugin es lo que muestra las 18.
