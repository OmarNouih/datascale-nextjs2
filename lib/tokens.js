// ── DSB-M Design System v4 ──
export const C = {
  // ── Backgrounds ──
  bg:         "#050908",      // base black-green
  bgSurface:  "#08110f",      // section surface
  bgCard:     "#0d1513",      // card background
  bgGlass:    "rgba(13,21,19,0.78)", // glass card bg

  // ── Mint brand palette ──
  mint:       "#22f4bd",      // primary
  mint2:      "#70ebb3",      // secondary
  mint3:      "#5bcabc",      // tertiary
  mint4:      "#21f0a8",      // alt / gradient stop

  // Aliases for existing code that uses C.teal etc.
  teal:       "#22f4bd",
  tealLight:  "#70ebb3",
  tealDark:   "#5bcabc",
  tealAlt:    "#21f0a8",
  tealBg:     "rgba(34,244,189,0.06)",
  tealBorder: "rgba(34,244,189,0.15)",

  // Removed gold completely
  gold:       "#22f4bd",      // fallback — gold refs now resolve to mint
  goldLight:  "#70ebb3",

  // ── Backgrounds aliases ──
  dark:       "#050908",
  darkMid:    "#08110f",
  darkCard:   "#0d1513",

  // ── Text ──
  white:      "#0c1513",
  offWhite:   "#101917",
  text:       "#d8dfdb",
  textMuted:  "rgba(216,223,219,0.76)",
  textFaint:  "rgba(180,195,188,0.42)",

  // ── Borders ──
  border:     "rgba(112,235,179,0.12)",
  borderHover:"rgba(34,244,189,0.28)",

  // Ink aliases (components using C.ink etc. get white on dark bg)
  ink:        "#d8dfdb",
  inkMid:     "rgba(202,214,208,0.76)",
  inkLight:   "rgba(180,195,188,0.58)",
};
