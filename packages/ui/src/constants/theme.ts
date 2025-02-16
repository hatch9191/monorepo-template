import { pxToRem } from "@/helpers/pxToRem/pxToRem.ts";

export const COLOURS = {
  BLACK: "#222222",
  WHITE: "#FFFFFF",
} as const;

export const SPACING = {
  2: pxToRem(2),
  4: pxToRem(4),
  8: pxToRem(8),
  12: pxToRem(12),
  16: pxToRem(16),
  20: pxToRem(20),
  24: pxToRem(24),
  28: pxToRem(28),
  32: pxToRem(32),
  36: pxToRem(36),
  40: pxToRem(40),
  44: pxToRem(44),
  48: pxToRem(48),
  52: pxToRem(52),
  56: pxToRem(56),
  60: pxToRem(60),
  64: pxToRem(64),
} as const;

export const FONT_FAMILY = {
  PLEX: "var(--font-plex, 'IBM Plex Sans'), sans-serif",
} as const;

export const TEXT_STYLES = {
  BODY_SMALL: {
    FAMILY: FONT_FAMILY.PLEX,
    SIZE: pxToRem(12),
    WEIGHT: 500,
    LINE_HEIGHT: pxToRem(16),
  },
  BODY_SMALL_BOLD: {
    FAMILY: FONT_FAMILY.PLEX,
    SIZE: pxToRem(12),
    WEIGHT: 600,
    LINE_HEIGHT: pxToRem(16),
  },
  BODY_MEDIUM: {
    FAMILY: FONT_FAMILY.PLEX,
    SIZE: pxToRem(14),
    WEIGHT: 500,
    LINE_HEIGHT: pxToRem(20),
  },
  BODY_MEDIUM_BOLD: {
    FAMILY: FONT_FAMILY.PLEX,
    SIZE: pxToRem(14),
    WEIGHT: 600,
    LINE_HEIGHT: pxToRem(20),
  },
} as const;

export const STANDARD_THEME = {
  COLOURS,
  SPACING,
  TEXT_STYLES,
} as const;
