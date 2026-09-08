#!/usr/bin/env python3
"""Genera desktop-plugins/minimalist-themes/plugin.js desde palettes.json.

Algoritmo (documentado, sin valores hardcodeados por tema):
  - Identidad: background=canvas, foreground=ink, superficies mezcladas
    hacia accent (card 20%, popover 30%, sidebar 14%, input 14%,
    secondary 30%, soft 35%, bubble 35%).
  - Contraste: primary/ring/midground = accent endurecido hacia ink hasta
    4.5:1 (text-primary se usa como color de texto en la app); el pastel
    original vive en secondary/soft/bubble. mutedForeground verificado a 4.5.
  - Bordes: mezcla hacia ink hasta lograr arista visible (delta L >= 0.04).
  - Nota de diseno: Sessions y Bots usan seeds distintos (sidebar vs
    elevated/popover) POR DISENO de la app; no se fuerza su igualdad.
Uso: python3 scripts/build-plugin.py
"""
import json
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
CARD_MIX, POP_MIX, SIDE_MIX, INPUT_MIX = 0.20, 0.30, 0.14, 0.14
SEC_MIX, SOFT_MIX, BUB_MIX = 0.30, 0.35, 0.35
TEXT_TARGET, STROKE_TARGET, EDGE_MIN = 4.5, 4.5, 0.04
DESTRUCTIVE, DESTRUCTIVE_FG = "#B42318", "#ffffff"


def hx(h): return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


def tohx(rgb): return "#%02X%02X%02X" % tuple(max(0, min(255, round(v))) for v in rgb)


def mix(a, b, t):
    A, B = hx(a), hx(b)
    return tohx((A[i] + (B[i] - A[i]) * t for i in range(3)))


def lum(h):
    r, g, b = [v / 255 for v in hx(h)]
    f = lambda c: c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def ratio(a, b):
    l1, l2 = lum(a), lum(b)
    if l1 < l2: l1, l2 = l2, l1
    return (l1 + 0.05) / (l2 + 0.05)


def ensure(fg, bg, target, ink):
    for i in range(21):
        cand = mix(fg, ink, i / 20)
        if ratio(cand, bg) >= target:
            return cand
    return mix(fg, ink, 1.0)


def build(c):
    accent, canvas, field = c["accent"], c["canvas"], c["field"]
    ink, inkSoft, paper = c["ink"], c["inkSoft"], c["paper"]
    card, sidebar = mix(paper, accent, CARD_MIX), mix(canvas, accent, SIDE_MIX)
    primary = ensure(accent, canvas, STROKE_TARGET, ink)
    if min(ratio(primary, s) for s in (sidebar, card)) < 3.0:
        primary = ensure(accent, sidebar, STROKE_TARGET, ink)
    primary_fg = ink if ratio(ink, primary) >= TEXT_TARGET else "#ffffff"
    border = mix(field, ink, 0.20)
    if abs(lum(border) - lum(canvas)) < EDGE_MIN:
        border = mix(field, ink, 0.38)
    bubble = mix(accent, paper, BUB_MIX)
    muted_fg = inkSoft if ratio(inkSoft, field) >= TEXT_TARGET else ensure(inkSoft, field, TEXT_TARGET, "#000000")
    return dict(
        background=canvas, foreground=ink,
        card=card, cardForeground=ink,
        muted=field, mutedForeground=muted_fg,
        popover=mix(paper, accent, POP_MIX), popoverForeground=ink,
        primary=primary, primaryForeground=primary_fg,
        secondary=mix(field, accent, SEC_MIX), secondaryForeground=ink,
        accent=mix(paper, accent, SOFT_MIX), accentForeground=ink,
        input=mix(paper, accent, INPUT_MIX),
        ring=primary, midground=primary, midgroundForeground=primary_fg, composerRing=primary,
        border=border, sidebarBackground=sidebar, sidebarBorder=border,
        userBubble=bubble, userBubbleBorder=mix(accent, ink, 0.30),
        destructive=DESTRUCTIVE, destructiveForeground=DESTRUCTIVE_FG)


def main():
    data = json.loads((BASE / "palettes.json").read_text())
    entries = []
    for t in data["themes"]:
        c = {k: v["hex"] for k, v in t["colors"].items()}
        label = t["title"].replace("Minimalist ", "")
        lines = [f"    name: '{t['id']}',", f"    label: '{label}',",
                 f"    description: '{t['title']}',", "    colors: {"]
        lines += [f"      {k}: '{v}'," for k, v in build(c).items()]
        lines.append("    },")
        entries.append("  {\n" + "\n".join(lines) + "\n  },")
    plugin = "\n".join([
        "/**", " * Minimalist themes for Hermes Desktop — 18 palettes.",
        " * Generado por scripts/build-plugin.py (no editar a mano).",
        " * Sessions/Bots difieren por diseno de la app; no se fuerza igualdad.",
        " */", "import { THEMES_AREA } from '@hermes/plugin-sdk'", "",
        "const ID = 'minimalist-themes'", "", "const THEMES = [",
        "\n".join(entries), "]", "", "export default {",
        "  id: ID,", "  name: 'Minimalist Themes',", "  register(ctx) {",
        "    for (const t of THEMES) {",
        "      const theme = { ...t, colors: { ...t.colors }, darkColors: { ...t.colors } }",
        "      ctx.register({ id: t.name, area: THEMES_AREA, data: theme })",
        "    }", "  }", "}", ""])
    out = BASE / "desktop-plugins" / "minimalist-themes" / "plugin.js"
    out.write_text(plugin + "\n")
    print(f"OK: {len(entries)} temas -> {out}")


if __name__ == "__main__":
    main()
