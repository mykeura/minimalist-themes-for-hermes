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

Necesitas `git` y Hermes Desktop. Mientras el repositorio sea privado, tu cuenta
GitHub debe tener acceso de lectura.

```bash
git clone https://github.com/mykeura/minimalist-themes-for-hermes /tmp/minimalist-themes-for-hermes
mkdir -p "$HOME/.hermes/desktop-plugins"
cp -r /tmp/minimalist-themes-for-hermes/desktop-plugins/minimalist-themes \
      "$HOME/.hermes/desktop-plugins/"
```

Los plugins de Hermes Desktop son de ámbito **app-level**: se instalan una sola
vez en `~/.hermes/desktop-plugins/` y permanecen disponibles al cambiar de
perfil. No los copies a `~/.hermes/profiles/<nombre>/desktop-plugins/`.

El Desktop detecta el archivo automáticamente en unos segundos. Si no aparece,
en Hermes Desktop usa **Cmd-K → Reload desktop plugins**. Después abre
**Settings → Appearance** y elige uno de los 18 temas.

> Si tu instalación de Hermes usa una raíz distinta de `~/.hermes`, abre
> **Settings → Plugins**: esa pantalla muestra la carpeta local de plugins de
> esta aplicación.

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

## Legibilidad y compatibilidad

El plugin registra cada paleta mediante `THEMES_AREA` como un `DesktopTheme`
completo de la API de Hermes Desktop. La auditoría estática del artefacto actual
verificó 180 combinaciones declaradas de texto y superficie: ninguna baja de
**4.5:1** de contraste WCAG AA para texto normal (mínimo: **4.525:1**).

También reproduce las superficies que Hermes Desktop pinta realmente mediante
`color-mix()`: las 108 comprobaciones de texto primario y las 36 de texto de
acento en sidebar/editor superan **4.5:1** (mínimos: **5.252:1** y
**4.502:1**, respectivamente).

Esa comprobación cubre los tokens declarados del tema; tras actualizar Hermes
Desktop, comprueba visualmente Settings, Sessions, Bots, el compositor y los
popovers antes de distribuir una nueva versión.

## Paletas claras y fuente privada

Estas son paletas claras y cálidas; no incluyen una variante oscura diseñada por
separado. `darkColors` conserva los mismos valores para mantener la identidad
de cada paleta en vez de convertirla en un tema oscuro.

`desktop-plugins/minimalist-themes/plugin.js` es el artefacto distribuible y
versionado. La fuente de paletas y la herramienta de generación permanecen
privadas deliberadamente: no son necesarias para instalar ni usar los 18 temas,
pero tampoco se incluyen en un clon público para regenerarlos.
