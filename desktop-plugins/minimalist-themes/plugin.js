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
}`

function installGlobalThemeLock(ctx) {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') return
  const root = document.documentElement
  const visibleTheme = () => THEME_NAMES.has(root.dataset.hermesTheme) ? root.dataset.hermesTheme : null
  let lockedTheme = ctx.storage.get(GLOBAL_THEME_KEY, null)
  if (!THEME_NAMES.has(lockedTheme)) lockedTheme = null
  if (!lockedTheme && visibleTheme()) {
    lockedTheme = visibleTheme()
    ctx.storage.set(GLOBAL_THEME_KEY, lockedTheme)
  }
  let switchingProfile = false
  let frame = null
  const restoreTheme = () => {
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        frame = null
        if (lockedTheme) requestTheme(lockedTheme)
        switchingProfile = false
      })
    })
  }
  const observer = new MutationObserver(() => {
    if (switchingProfile) return
    const theme = visibleTheme()
    if (theme) {
      lockedTheme = theme
      ctx.storage.set(GLOBAL_THEME_KEY, theme)
    } else {
      lockedTheme = null
      ctx.storage.remove(GLOBAL_THEME_KEY)
    }
  })
  observer.observe(root, { attributes: true, attributeFilter: ['data-hermes-theme'] })
  let initialProfile = true
  const unsubscribe = host.state.profile.subscribe(() => {
    if (initialProfile) {
      initialProfile = false
      if (lockedTheme && visibleTheme() !== lockedTheme) {
        switchingProfile = true
        restoreTheme()
      }
      return
    }
    if (!lockedTheme) return
    switchingProfile = true
    if (frame !== null) cancelAnimationFrame(frame)
    restoreTheme()
  })
  ctx.onDispose(() => {
    if (frame !== null) cancelAnimationFrame(frame)
    observer.disconnect()
    unsubscribe()
  })
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
  register(ctx) {
    installGlobalThemeLock(ctx)
    installProfileRailStyle(ctx)
    for (const t of THEMES) {
      const theme = { ...t, colors: { ...t.colors }, darkColors: { ...t.colors } }
      ctx.register({ id: t.name, area: THEMES_AREA, data: theme })
    }
  }
}

