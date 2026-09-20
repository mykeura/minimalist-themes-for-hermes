// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque
import { THEMES_AREA, host, requestTheme } from '@hermes/plugin-sdk'

const ID = 'minimalist-themes'

const THEMES = [
  {
    name: 'beetroot-juice',
    label: 'Beetroot Juice',
    description: 'Minimalist Beetroot Juice',
    colors: {
      background: '#F6E1DF',
      foreground: '#3A3E41',
      card: '#FAEFEE',
      cardForeground: '#3A3E41',
      muted: '#D8C6C5',
      mutedForeground: '#525557',
      popover: '#F8E7E6',
      popoverForeground: '#3A3E41',
      primary: '#6E6060',
      primaryForeground: '#ffffff',
      secondary: '#DCBFBD',
      secondaryForeground: '#3A3E41',
      accent: '#F6E3E1',
      accentForeground: '#3A3E41',
      input: '#FCF4F3',
      ring: '#6E6060',
      midground: '#6E6060',
      midgroundForeground: '#ffffff',
      composerRing: '#6E6060',
      border: '#B8ABAB',
      sidebarBackground: '#F4DAD8',
      sidebarBorder: '#B8ABAB',
      userBubble: '#EFCCC8',
      userBubbleBorder: '#B28E8A',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'blackberry-juice',
    label: 'Blackberry Juice',
    description: 'Minimalist Blackberry Juice',
    colors: {
      background: '#E6D7F8',
      foreground: '#3A3E41',
      card: '#F3EBFC',
      cardForeground: '#3A3E41',
      muted: '#FBF9FE',
      mutedForeground: '#666A6D',
      popover: '#ECE1FA',
      popoverForeground: '#3A3E41',
      primary: '#605972',
      primaryForeground: '#ffffff',
      secondary: '#EADDF9',
      secondaryForeground: '#3A3E41',
      accent: '#E9DCF9',
      accentForeground: '#3A3E41',
      input: '#F6F1FD',
      ring: '#605972',
      midground: '#605972',
      midgroundForeground: '#ffffff',
      composerRing: '#605972',
      border: '#D4D4D8',
      sidebarBackground: '#E1CFF7',
      sidebarBorder: '#D4D4D8',
      userBubble: '#D7BEF4',
      userBubbleBorder: '#987FBA',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'coffee-with-milk',
    label: 'Coffee With Milk',
    description: 'Minimalist Coffee With Milk',
    colors: {
      background: '#E6D7C3',
      foreground: '#3A3E41',
      card: '#FAF4EA',
      cardForeground: '#3A3E41',
      muted: '#F9F5EF',
      mutedForeground: '#666A6D',
      popover: '#F7EEDF',
      popoverForeground: '#3A3E41',
      primary: '#5C5952',
      primaryForeground: '#ffffff',
      secondary: '#F3E7D4',
      secondaryForeground: '#3A3E41',
      accent: '#F6EBDA',
      accentForeground: '#3A3E41',
      input: '#FBF7F0',
      ring: '#5C5952',
      midground: '#5C5952',
      midgroundForeground: '#ffffff',
      composerRing: '#5C5952',
      border: '#D3D0CC',
      sidebarBackground: '#E6D5BC',
      sidebarBorder: '#D3D0CC',
      userBubble: '#EEDBB9',
      userBubbleBorder: '#B29E7B',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'cornmeal-porridge',
    label: 'Cornmeal Porridge',
    description: 'Minimalist Cornmeal Porridge',
    colors: {
      background: '#F0E8DB',
      foreground: '#3A3E41',
      card: '#FFF8EB',
      cardForeground: '#3A3E41',
      muted: '#FFF8EB',
      mutedForeground: '#666A6D',
      popover: '#FFF4E1',
      popoverForeground: '#3A3E41',
      primary: '#6B6558',
      primaryForeground: '#ffffff',
      secondary: '#FFEFD3',
      secondaryForeground: '#3A3E41',
      accent: '#FFF2DC',
      accentForeground: '#3A3E41',
      input: '#FFFAF1',
      ring: '#6B6558',
      midground: '#6B6558',
      midgroundForeground: '#ffffff',
      composerRing: '#6B6558',
      border: '#D8D3C9',
      sidebarBackground: '#F2E6D2',
      sidebarBorder: '#D8D3C9',
      userBubble: '#FFE7BE',
      userBubbleBorder: '#C4AB80',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'diana-yin',
    label: 'Diana Yin',
    description: 'Minimalist Diana Yin',
    colors: {
      background: '#C8BFE7',
      foreground: '#3A3E41',
      card: '#EFEBF9',
      cardForeground: '#3A3E41',
      muted: '#EFEDFF',
      mutedForeground: '#666A6D',
      popover: '#E7E2F6',
      popoverForeground: '#3A3E41',
      primary: '#4C4C59',
      primaryForeground: '#ffffff',
      secondary: '#DCD5F6',
      secondaryForeground: '#3A3E41',
      accent: '#E3DDF4',
      accentForeground: '#3A3E41',
      input: '#F4F1FB',
      ring: '#4C4C59',
      midground: '#4C4C59',
      midgroundForeground: '#ffffff',
      composerRing: '#4C4C59',
      border: '#CBCAD9',
      sidebarBackground: '#C5BAE6',
      sidebarBorder: '#CBCAD9',
      userBubble: '#CCBFEB',
      userBubbleBorder: '#8D80B0',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'grape-juice',
    label: 'Grape Juice',
    description: 'Minimalist Grape Juice',
    colors: {
      background: '#DBD9F0',
      foreground: '#3A3E41',
      card: '#EEEDF8',
      cardForeground: '#3A3E41',
      muted: '#F8F8FC',
      mutedForeground: '#666A6D',
      popover: '#E6E4F4',
      popoverForeground: '#3A3E41',
      primary: '#5A5B6E',
      primaryForeground: '#ffffff',
      secondary: '#E1DFF2',
      secondaryForeground: '#3A3E41',
      accent: '#E2E0F3',
      accentForeground: '#3A3E41',
      input: '#F3F2FA',
      ring: '#5A5B6E',
      midground: '#5A5B6E',
      midgroundForeground: '#ffffff',
      composerRing: '#5A5B6E',
      border: '#D2D3D7',
      sidebarBackground: '#D4D2ED',
      sidebarBorder: '#D2D3D7',
      userBubble: '#C8C4E8',
      userBubbleBorder: '#8986AE',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'green-tea',
    label: 'Green Tea',
    description: 'Minimalist Green Tea',
    colors: {
      background: '#E3F5DE',
      foreground: '#3A3E41',
      card: '#EEF9EB',
      cardForeground: '#3A3E41',
      muted: '#C8D8C4',
      mutedForeground: '#575A5D',
      popover: '#E5F5E1',
      popoverForeground: '#3A3E41',
      primary: '#5B6E5C',
      primaryForeground: '#ffffff',
      secondary: '#BFDAB8',
      secondaryForeground: '#3A3E41',
      accent: '#E1F4DC',
      accentForeground: '#3A3E41',
      input: '#F3FBF1',
      ring: '#5B6E5C',
      midground: '#5B6E5C',
      midgroundForeground: '#ffffff',
      composerRing: '#5B6E5C',
      border: '#ACB9AA',
      sidebarBackground: '#DBF2D5',
      sidebarBorder: '#ACB9AA',
      userBubble: '#C7EABF',
      userBubbleBorder: '#88AF81',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'hibiscus-tea',
    label: 'Hibiscus Tea',
    description: 'Minimalist Hibiscus Tea',
    colors: {
      background: '#FADFDC',
      foreground: '#3A3E41',
      card: '#FDF1EF',
      cardForeground: '#3A3E41',
      muted: '#DBC4C2',
      mutedForeground: '#525557',
      popover: '#FCE9E8',
      popoverForeground: '#3A3E41',
      primary: '#6F6061',
      primaryForeground: '#ffffff',
      secondary: '#E3C0BD',
      secondaryForeground: '#3A3E41',
      accent: '#FCE6E4',
      accentForeground: '#3A3E41',
      input: '#FEF5F4',
      ring: '#6F6061',
      midground: '#6F6061',
      midgroundForeground: '#ffffff',
      composerRing: '#6F6061',
      border: '#BBA9A8',
      sidebarBackground: '#F9D9D6',
      sidebarBorder: '#BBA9A8',
      userBubble: '#F8D0CC',
      userBubbleBorder: '#BD938F',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'horchata',
    label: 'Horchata',
    description: 'Minimalist Horchata',
    colors: {
      background: '#FAF3EA',
      foreground: '#3A3E41',
      card: '#FCF7F2',
      cardForeground: '#3A3E41',
      muted: '#D1D0CB',
      mutedForeground: '#525557',
      popover: '#FAF3EC',
      popoverForeground: '#3A3E41',
      primary: '#706C66',
      primaryForeground: '#ffffff',
      secondary: '#DAD2C7',
      secondaryForeground: '#3A3E41',
      accent: '#F9F1E8',
      accentForeground: '#3A3E41',
      input: '#FDFAF6',
      ring: '#706C66',
      midground: '#706C66',
      midgroundForeground: '#ffffff',
      composerRing: '#706C66',
      border: '#B3B3AF',
      sidebarBackground: '#F8EFE4',
      sidebarBorder: '#B3B3AF',
      userBubble: '#F5E6D5',
      userBubbleBorder: '#B9AA98',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'mango',
    label: 'Mango',
    description: 'Minimalist Mango',
    colors: {
      background: '#FFF5DD',
      foreground: '#3A3E41',
      card: '#FFF9ED',
      cardForeground: '#3A3E41',
      muted: '#E0D8C4',
      mutedForeground: '#5C5F62',
      popover: '#FFF6E4',
      popoverForeground: '#3A3E41',
      primary: '#756F5F',
      primaryForeground: '#ffffff',
      secondary: '#E9DBBB',
      secondaryForeground: '#3A3E41',
      accent: '#FFF5E0',
      accentForeground: '#3A3E41',
      input: '#FFFBF3',
      ring: '#756F5F',
      midground: '#756F5F',
      midgroundForeground: '#ffffff',
      composerRing: '#756F5F',
      border: '#BFB9AA',
      sidebarBackground: '#FFF2D5',
      sidebarBorder: '#BFB9AA',
      userBubble: '#FFECC5',
      userBubbleBorder: '#C4B188',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'mint',
    label: 'Mint',
    description: 'Minimalist Mint',
    colors: {
      background: '#D5F5E3',
      foreground: '#3A3E41',
      card: '#F0FCF5',
      cardForeground: '#3A3E41',
      muted: '#A1D2B7',
      mutedForeground: '#4C5052',
      popover: '#E9FAF1',
      popoverForeground: '#3A3E41',
      primary: '#596A64',
      primaryForeground: '#ffffff',
      secondary: '#A7DBBE',
      secondaryForeground: '#3A3E41',
      accent: '#E5F9EE',
      accentForeground: '#3A3E41',
      input: '#F5FDF8',
      ring: '#596A64',
      midground: '#596A64',
      midgroundForeground: '#ffffff',
      composerRing: '#596A64',
      border: '#8CB49F',
      sidebarBackground: '#D1F4E0',
      sidebarBorder: '#8CB49F',
      userBubble: '#D0F5E0',
      userBubbleBorder: '#91BAA4',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'nance-juice',
    label: 'Nance Juice',
    description: 'Minimalist Nance Juice',
    colors: {
      background: '#FEFCF1',
      foreground: '#3A3E41',
      card: '#FDF8E2',
      cardForeground: '#3A3E41',
      muted: '#E0DFD6',
      mutedForeground: '#5C5F62',
      popover: '#FDF4D4',
      popoverForeground: '#3A3E41',
      primary: '#797250',
      primaryForeground: '#ffffff',
      secondary: '#E7DEB7',
      secondaryForeground: '#3A3E41',
      accent: '#FCF3CD',
      accentForeground: '#3A3E41',
      input: '#FEFAEB',
      ring: '#797250',
      midground: '#797250',
      midgroundForeground: '#ffffff',
      composerRing: '#797250',
      border: '#BFBFB8',
      sidebarBackground: '#FDF8DF',
      sidebarBorder: '#BFBFB8',
      userBubble: '#FAE8A1',
      userBubbleBorder: '#BEAD61',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'oceans',
    label: 'Oceans',
    description: 'Minimalist Oceans',
    colors: {
      background: '#B9E2FB',
      foreground: '#3A3E41',
      card: '#DFF2FD',
      cardForeground: '#3A3E41',
      muted: '#F3FAFE',
      mutedForeground: '#666A6D',
      popover: '#CFEBFC',
      popoverForeground: '#3A3E41',
      primary: '#446072',
      primaryForeground: '#ffffff',
      secondary: '#C6E8FC',
      secondaryForeground: '#3A3E41',
      accent: '#C7E8FC',
      accentForeground: '#3A3E41',
      input: '#E8F6FE',
      ring: '#446072',
      midground: '#446072',
      midgroundForeground: '#ffffff',
      composerRing: '#446072',
      border: '#CED4D8',
      sidebarBackground: '#ACDDFA',
      sidebarBorder: '#CED4D8',
      userBubble: '#96D4F9',
      userBubbleBorder: '#5397C0',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'orange-juice',
    label: 'Orange Juice',
    description: 'Minimalist Orange Juice',
    colors: {
      background: '#FCF1E8',
      foreground: '#3A3E41',
      card: '#FDF5ED',
      cardForeground: '#3A3E41',
      muted: '#DED4CD',
      mutedForeground: '#575A5D',
      popover: '#FCEFE5',
      popoverForeground: '#3A3E41',
      primary: '#726860',
      primaryForeground: '#ffffff',
      secondary: '#E5D1C2',
      secondaryForeground: '#3A3E41',
      accent: '#FCEDE0',
      accentForeground: '#3A3E41',
      input: '#FEF8F3',
      ring: '#726860',
      midground: '#726860',
      midgroundForeground: '#ffffff',
      composerRing: '#726860',
      border: '#BDB6B1',
      sidebarBackground: '#FBECDF',
      sidebarBorder: '#BDB6B1',
      userBubble: '#F8DDC6',
      userBubbleBorder: '#BDA188',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'snow-water',
    label: 'Snow Water',
    description: 'Minimalist Snow Water',
    colors: {
      background: '#E8F4FC',
      foreground: '#3A3E41',
      card: '#EFF7FC',
      cardForeground: '#3A3E41',
      muted: '#C8D8C4',
      mutedForeground: '#575A5D',
      popover: '#E7F3FB',
      popoverForeground: '#3A3E41',
      primary: '#5D6C76',
      primaryForeground: '#ffffff',
      secondary: '#C0D7D2',
      secondaryForeground: '#3A3E41',
      accent: '#E3F1FA',
      accentForeground: '#3A3E41',
      input: '#F4F9FD',
      ring: '#5D6C76',
      midground: '#5D6C76',
      midgroundForeground: '#ffffff',
      composerRing: '#5D6C76',
      border: '#ACB9AA',
      sidebarBackground: '#E0F0FA',
      sidebarBorder: '#ACB9AA',
      userBubble: '#CAE4F6',
      userBubbleBorder: '#8BA8BC',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'turquoise',
    label: 'Turquoise',
    description: 'Minimalist Turquoise',
    colors: {
      background: '#DDF2ED',
      foreground: '#3A3E41',
      card: '#ECF7F5',
      cardForeground: '#3A3E41',
      muted: '#C3D5D1',
      mutedForeground: '#575A5D',
      popover: '#E3F4F0',
      popoverForeground: '#3A3E41',
      primary: '#596C6B',
      primaryForeground: '#ffffff',
      secondary: '#B9D6D0',
      secondaryForeground: '#3A3E41',
      accent: '#DEF2EE',
      accentForeground: '#3A3E41',
      input: '#F2FAF8',
      ring: '#596C6B',
      midground: '#596C6B',
      midgroundForeground: '#ffffff',
      composerRing: '#596C6B',
      border: '#A8B7B4',
      sidebarBackground: '#D5EEE9',
      sidebarBorder: '#A8B7B4',
      userBubble: '#C3E6DF',
      userBubbleBorder: '#83AAA4',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'ultramarine',
    label: 'Ultramarine',
    description: 'Minimalist Ultramarine',
    colors: {
      background: '#D2D9F4',
      foreground: '#3A3E41',
      card: '#EBEEFB',
      cardForeground: '#3A3E41',
      muted: '#F2F4FD',
      mutedForeground: '#666A6D',
      popover: '#E1E6F9',
      popoverForeground: '#3A3E41',
      primary: '#545C6F',
      primaryForeground: '#ffffff',
      secondary: '#D8DEF8',
      secondaryForeground: '#3A3E41',
      accent: '#DCE2F8',
      accentForeground: '#3A3E41',
      input: '#F1F3FC',
      ring: '#545C6F',
      midground: '#545C6F',
      midgroundForeground: '#ffffff',
      composerRing: '#545C6F',
      border: '#CDD0D7',
      sidebarBackground: '#CAD3F3',
      sidebarBorder: '#CDD0D7',
      userBubble: '#BFC9F3',
      userBubbleBorder: '#7F8BB9',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
  {
    name: 'yuzu',
    label: 'Yuzu',
    description: 'Minimalist Yuzu',
    colors: {
      background: '#EEF6DA',
      foreground: '#3A3E41',
      card: '#F7FBEC',
      cardForeground: '#3A3E41',
      muted: '#DAE0CC',
      mutedForeground: '#5C5F62',
      popover: '#F3FAE3',
      popoverForeground: '#3A3E41',
      primary: '#616A59',
      primaryForeground: '#ffffff',
      secondary: '#D9E4BF',
      secondaryForeground: '#3A3E41',
      accent: '#F1F9DE',
      accentForeground: '#3A3E41',
      input: '#F9FCF2',
      ring: '#616A59',
      midground: '#616A59',
      midgroundForeground: '#ffffff',
      composerRing: '#616A59',
      border: '#BAC0B0',
      sidebarBackground: '#EBF5D2',
      sidebarBorder: '#BAC0B0',
      userBubble: '#E4F3C2',
      userBubbleBorder: '#A7B884',
      destructive: '#B42318',
      destructiveForeground: '#ffffff',
    },
  },
]

const THEME_NAMES = new Set(THEMES.map(t => t.name))
const GLOBAL_THEME_KEY = 'global-theme'
const PROFILE_RAIL_STYLE_ID = `${ID}-profile-rail`
const PROFILE_RAIL_CSS = `:root[data-hermes-theme="beetroot-juice"] { --minimalist-profile-rail-glyph: #303336; }
:root[data-hermes-theme="blackberry-juice"] { --minimalist-profile-rail-glyph: #2C2F31; }
:root[data-hermes-theme="coffee-with-milk"] { --minimalist-profile-rail-glyph: #2C2F31; }
:root[data-hermes-theme="cornmeal-porridge"] { --minimalist-profile-rail-glyph: #34373A; }
:root[data-hermes-theme="diana-yin"] { --minimalist-profile-rail-glyph: #232628; }
:root[data-hermes-theme="grape-juice"] { --minimalist-profile-rail-glyph: #2C2F31; }
:root[data-hermes-theme="green-tea"] { --minimalist-profile-rail-glyph: #35383B; }
:root[data-hermes-theme="hibiscus-tea"] { --minimalist-profile-rail-glyph: #303336; }
:root[data-hermes-theme="horchata"] { --minimalist-profile-rail-glyph: #373A3D; }
:root[data-hermes-theme="mango"] { --minimalist-profile-rail-glyph: #373B3E; }
:root[data-hermes-theme="mint"] { --minimalist-profile-rail-glyph: #35383B; }
:root[data-hermes-theme="nance-juice"] { --minimalist-profile-rail-glyph: #393D40; }
:root[data-hermes-theme="oceans"] { --minimalist-profile-rail-glyph: #2C2F31; }
:root[data-hermes-theme="orange-juice"] { --minimalist-profile-rail-glyph: #35393C; }
:root[data-hermes-theme="snow-water"] { --minimalist-profile-rail-glyph: #35393C; }
:root[data-hermes-theme="turquoise"] { --minimalist-profile-rail-glyph: #34373A; }
:root[data-hermes-theme="ultramarine"] { --minimalist-profile-rail-glyph: #2B2E30; }
:root[data-hermes-theme="yuzu"] { --minimalist-profile-rail-glyph: #373A3D; }

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) :is(
  button.cursor-grab.touch-none.rounded-\\[3px\\].text-\\[0\\.5625rem\\][aria-pressed],
  button.opacity-35.rounded-\\[3px\\].text-\\[0\\.5625rem\\]
) {
  color: var(--minimalist-profile-rail-glyph) !important;
  opacity: 0.85 !important;
  filter: brightness(0.95);
}

#plugin-minimalist-themes > [role="cell"] > span.flex.size-7.shrink-0 {
  display: none !important;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) {
  --minimalist-capabilities-embed-background: #0E0E0E;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) div:has(> iframe[src*="embed=picker"]) {
  background: var(--minimalist-capabilities-embed-background) !important;
  color-scheme: dark;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) iframe[src*="embed=picker"] {
  background: var(--minimalist-capabilities-embed-background) !important;
  color-scheme: dark;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-toolsets"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) {
  --minimalist-capabilities-readable-text: color-mix(in srgb, var(--ui-base) 86%, transparent);
  --ui-text-secondary: var(--minimalist-capabilities-readable-text);
  --ui-text-tertiary: var(--minimalist-capabilities-readable-text);
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-toolsets"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) :is([class~="text-muted-foreground/50"], [class~="text-muted-foreground/60"], [class~="text-muted-foreground/70"], [class~="text-muted-foreground/80"]) {
  color: var(--minimalist-capabilities-readable-text) !important;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-toolsets"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) [class~="text-foreground/85"] {
  color: var(--ui-text-primary) !important;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-toolsets"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) .cm-editor :is(.cm-content, .cm-content span) {
  color: var(--ui-text-primary) !important;
}
:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) section:has([data-tour="tab-skills"]):has([data-tour="tab-toolsets"]):has([data-tour="tab-mcp"]):has([data-tour="tab-plugins"]) .cm-editor .cm-gutters {
  color: var(--minimalist-capabilities-readable-text) !important;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) [data-overlay-surface]:has([data-panel-row="default"]) {
  --minimalist-profiles-readable-text: color-mix(in srgb, var(--ui-base) 86%, transparent);
  --ui-text-secondary: var(--minimalist-profiles-readable-text);
  --ui-text-tertiary: var(--minimalist-profiles-readable-text);
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) [data-overlay-surface]:has([data-panel-row="default"]) :is([class~="text-muted-foreground/45"], [class~="text-muted-foreground/50"], [class~="text-muted-foreground/55"], [class~="text-muted-foreground/60"], [class~="text-muted-foreground/70"], [class~="text-muted-foreground/80"]) {
  color: var(--minimalist-profiles-readable-text) !important;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) [data-overlay-surface]:has([data-panel-row="default"]) :is([class~="text-foreground/80"], [class~="text-foreground/85"], [class~="text-foreground/90"]) {
  color: var(--ui-text-primary) !important;
}

:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) [data-overlay-surface]:has([data-panel-row="default"]) .cm-editor :is(.cm-content, .cm-content span) {
  color: var(--ui-text-primary) !important;
}
:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) [data-overlay-surface]:has([data-panel-row="default"]) .cm-editor .cm-gutters {
  color: var(--minimalist-profiles-readable-text) !important;
}

/* CodeMirror draws selection separately from the native ::selection highlight. */
:root:is(
  [data-hermes-theme="beetroot-juice"],
  [data-hermes-theme="blackberry-juice"],
  [data-hermes-theme="coffee-with-milk"],
  [data-hermes-theme="cornmeal-porridge"],
  [data-hermes-theme="diana-yin"],
  [data-hermes-theme="grape-juice"],
  [data-hermes-theme="green-tea"],
  [data-hermes-theme="hibiscus-tea"],
  [data-hermes-theme="horchata"],
  [data-hermes-theme="mango"],
  [data-hermes-theme="mint"],
  [data-hermes-theme="nance-juice"],
  [data-hermes-theme="oceans"],
  [data-hermes-theme="orange-juice"],
  [data-hermes-theme="snow-water"],
  [data-hermes-theme="turquoise"],
  [data-hermes-theme="ultramarine"],
  [data-hermes-theme="yuzu"]
) [data-overlay-surface]:has([data-panel-row="default"]) .cm-editor .cm-selectionBackground {
  background-color: color-mix(in srgb, var(--ui-text-primary) 18%, transparent) !important;
}`

function installGlobalThemeLock(ctx) {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') return
  const root = document.documentElement
  const stored = ctx.storage.get('profile-themes', {})
  const overrides = Object.create(null)
  if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
    for (const [profile, theme] of Object.entries(stored)) {
      if (THEME_NAMES.has(theme)) overrides[profile] = theme
    }
  }
  let globalTheme = ctx.storage.get(GLOBAL_THEME_KEY, null)
  if (!THEME_NAMES.has(globalTheme)) globalTheme = null
  let activeProfile = 'default'
  let initialized = false
  let applying = false
  let appliedTheme = null
  let switching = false
  let frame = null
  let refresh = () => {}
  const target = () => overrides[activeProfile] || globalTheme
  const apply = () => {
    const theme = target()
    if (!theme) return
    appliedTheme = theme
    applying = true
    try { requestTheme(theme) } finally { applying = false }
  }
  const observer = new MutationObserver(() => {
    if (applying) return
    if (switching) {
      if (target() && root.dataset.hermesTheme !== target()) apply()
      return
    }
    const theme = root.dataset.hermesTheme
    if (theme === appliedTheme) return
    appliedTheme = null
    globalTheme = THEME_NAMES.has(theme) ? theme : null
    if (globalTheme) ctx.storage.set(GLOBAL_THEME_KEY, globalTheme)
    else ctx.storage.remove(GLOBAL_THEME_KEY)
  })
  observer.observe(root, { attributes: true, attributeFilter: ['data-hermes-theme'] })
  const unsubscribe = host.state.profile.subscribe(profile => {
    activeProfile = typeof profile === 'string' && profile ? profile : 'default'
    if (!initialized) {
      initialized = true
      const visible = root.dataset.hermesTheme
      if (!globalTheme && !overrides[activeProfile] && THEME_NAMES.has(visible)) {
        globalTheme = visible
        ctx.storage.set(GLOBAL_THEME_KEY, globalTheme)
      }
    }
    switching = true
    if (frame !== null) cancelAnimationFrame(frame)
    apply()
    frame = requestAnimationFrame(() => { frame = null; switching = false })
    refresh()
  })
  refresh = installProfileThemeSettings(ctx, {
    active: () => activeProfile,
    selected: profile => overrides[profile] || '',
    set(profile, theme) {
      if (THEME_NAMES.has(theme)) overrides[profile] = theme
      else delete overrides[profile]
      ctx.storage.set('profile-themes', { ...overrides })
      if (profile === activeProfile) apply()
    }
  })
  ctx.onDispose(() => {
    if (frame !== null) cancelAnimationFrame(frame)
    observer.disconnect()
    unsubscribe()
  })
}

function profileNames(inventory, active) {
  const names = new Set(['default', active])
  for (const route of inventory) {
    const name = typeof route === 'string' ? route : route?.profile
    if (typeof name === 'string' && name) names.add(name)
  }
  return [...names].sort((a, b) => a === 'default' ? -1 : b === 'default' ? 1 : a.localeCompare(b))
}

function installProfileThemeSettings(ctx, controller) {
  const badgesSelector = '[role="cell"] > div.min-w-0.flex-1 > div.flex.flex-wrap'
  const overlayId = `${ID}-profile-settings-overlay`
  let row = null
  let badges = null
  let mount = null
  let button = null
  let modal = null
  let focusFrame = null
  let disposed = false
  let inventory = []
  let loading = false
  let escapeListener = null
  let trigger = null
  const listeners = []

  const names = () => profileNames(inventory, controller.active())
  const clearControls = () => {
    for (const [select, listener] of listeners.splice(0)) select.removeEventListener('change', listener)
  }
  const close = (restoreFocus = true) => {
    if (focusFrame !== null) cancelAnimationFrame(focusFrame)
    focusFrame = null
    clearControls()
    if (escapeListener) {
      window.removeEventListener('keydown', escapeListener)
      escapeListener = null
    }
    modal?.remove()
    modal = null
    if (restoreFocus && trigger?.parentNode) trigger.focus()
    trigger = null
  }
  const unmount = () => {
    close(false)
    button?.removeEventListener('click', open)
    mount?.remove()
    row = null
    badges = null
    mount = null
    button = null
  }
  const render = () => {
    if (disposed || !modal) return
    clearControls()
    const card = document.createElement('div')
    card.id = `${overlayId}-content`
    card.setAttribute('role', 'dialog')
    card.setAttribute('aria-modal', 'true')
    card.setAttribute('aria-labelledby', `${overlayId}-title`)
    card.setAttribute('data-slot', 'dialog-content')
    card.style.cssText = 'position:fixed;left:50%;top:50%;z-index:var(--z-modal);display:flex;max-height:85vh;width:max-content;min-width:min(28rem,92vw);max-width:92vw;transform:translate(-50%,-50%);flex-direction:column;overflow:hidden;border:1px solid var(--stroke-nous);border-radius:var(--radius-xl,12px);background:var(--ui-chat-bubble-background);color:var(--ui-text-primary);box-shadow:var(--shadow-nous);'
    const header = document.createElement('header')
    header.style.cssText = 'display:flex;align-items:center;gap:8px;padding:16px;'
    const title = document.createElement('h2')
    title.id = `${overlayId}-title`
    title.textContent = 'Profile themes'
    title.style.cssText = 'margin:0;font-size:15px;font-weight:600;color:var(--ui-text-primary);'
    const closeButton = document.createElement('button')
    closeButton.type = 'button'
    closeButton.setAttribute('aria-label', 'Close')
    closeButton.textContent = '×'
    closeButton.style.cssText = 'margin-left:auto;border:0;border-radius:4px;background:transparent;color:var(--ui-text-tertiary);cursor:pointer;font-size:18px;line-height:1;padding:2px 6px;'
    closeButton.addEventListener('click', () => close())
    header.append(title, closeButton)
    const body = document.createElement('div')
    body.style.cssText = 'display:grid;gap:12px;min-height:0;max-height:calc(85vh - 5rem);overflow-y:auto;padding:16px;'
    const help = document.createElement('p')
    help.textContent = 'Default inherits your current Minimalist theme.'
    help.style.cssText = 'margin:0;font-size:12px;line-height:1.5;color:var(--ui-text-secondary);'
    body.append(help)
    for (const profile of names()) {
      const label = document.createElement('label')
      label.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:12px;color:var(--ui-text-primary);'
      const name = document.createElement('span')
      name.textContent = profile
      name.style.cssText = 'min-width:0;overflow-wrap:anywhere;'
      const select = document.createElement('select')
      select.setAttribute('aria-label', `Theme for profile ${profile}`)
      select.style.cssText = 'max-width:65%;padding:5px 8px;border:1px solid var(--ui-stroke-secondary);border-radius:6px;background:var(--ui-bg-chrome);color:var(--ui-text-primary);'
      for (const theme of [{ name: '', label: 'Default' }, ...THEMES]) {
        const option = document.createElement('option')
        option.value = theme.name
        option.textContent = theme.label
        select.append(option)
      }
      select.value = controller.selected(profile)
      const listener = () => controller.set(profile, select.value)
      select.addEventListener('change', listener)
      listeners.push([select, listener])
      label.append(name, select)
      body.append(label)
    }
    card.append(header, body)
    modal.replaceChildren(card)
  }
  const open = () => {
    if (disposed || modal || !document.body) return
    trigger = button
    modal = document.createElement('div')
    modal.id = overlayId
    modal.setAttribute('data-overlay-surface', '')
    modal.setAttribute('data-slot', 'dialog-overlay')
    modal.setAttribute('role', 'presentation')
    modal.style.cssText = 'position:fixed;inset:0;z-index:var(--z-modal-backdrop);display:flex;align-items:center;justify-content:center;background:rgb(0 0 0 / 22%);backdrop-filter:blur(0.125rem);'
    modal.addEventListener('click', event => { if (event.target === event.currentTarget) close() })
    escapeListener = event => {
      if (event.key === 'Escape' && !event.defaultPrevented) {
        event.preventDefault()
        close()
      }
    }
    window.addEventListener('keydown', escapeListener)
    document.body.append(modal)
    render()
    focusFrame = requestAnimationFrame(() => {
      focusFrame = null
      modal?.querySelector('[data-slot="dialog-content"] button')?.focus()
    })
  }
  const sync = () => {
    const nextRow = document.getElementById(`plugin-${ID}`)
    const nextBadges = nextRow?.querySelector?.(badgesSelector) ?? null
    if (!nextRow || !nextBadges) {
      unmount()
      return
    }
    if (nextBadges !== badges) {
      unmount()
      row = nextRow
      badges = nextBadges
      mount = document.createElement('span')
      mount.className = 'inline-flex shrink-0 items-center'
      mount.setAttribute('data-slot', 'profile-theme-settings')
      button = document.createElement('button')
      button.type = 'button'
      button.setAttribute('aria-label', 'Profile theme settings')
      button.className = 'inline-flex shrink-0 items-center gap-1 rounded-[4px] border border-(--ui-stroke-secondary) bg-(--ui-bg-chrome) px-2 py-0.5 text-[0.6875rem] leading-4 text-(--ui-text-primary)'
      button.style.cssText = 'cursor:pointer;'
      const icon = document.createElement('i')
      icon.className = 'codicon codicon-settings-gear'
      icon.setAttribute('aria-hidden', 'true')
      const label = document.createElement('span')
      label.textContent = 'Settings'
      button.append(icon, label)
      button.addEventListener('click', open)
      mount.append(button)
      badges.append(mount)
    }
  }
  const refresh = () => {
    sync()
    if (loading || disposed || typeof host.profileRoutes !== 'function') return
    loading = true
    Promise.resolve().then(() => host.profileRoutes()).then(routes => {
      if (!disposed && Array.isArray(routes)) inventory = routes.filter(route => typeof route === 'string' || (route && typeof route === 'object'))
    }).catch(() => {}).finally(() => { loading = false; if (modal) render() })
  }
  const observer = new MutationObserver(sync)
  observer.observe(document.documentElement, { childList: true, subtree: true })
  sync()
  refresh()
  ctx.onDispose(() => {
    disposed = true
    observer.disconnect()
    unmount()
  })
  return refresh
}

function installProfileRailStyle(ctx) {
  if (typeof document === 'undefined') return
  document.getElementById(PROFILE_RAIL_STYLE_ID)?.remove()
  const style = document.createElement('style')
  style.id = PROFILE_RAIL_STYLE_ID
  style.textContent = PROFILE_RAIL_CSS
  document.head.append(style)
  ctx.onDispose(() => style.remove())
}

export default {
  id: ID,
  name: 'Minimalist Themes',
  description: 'Minimalist Themes by @mykeura — 18 warm, readable palettes for a cleaner Hermes Desktop.',
  register(ctx) {
    for (const t of THEMES) {
      const theme = { ...t, colors: { ...t.colors }, darkColors: { ...t.colors } }
      ctx.register({ id: t.name, area: THEMES_AREA, data: theme })
    }
    installProfileRailStyle(ctx)
    installGlobalThemeLock(ctx)
  }
}
