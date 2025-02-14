import {
  COLOURS,
  SPACING,
  STANDARD_THEME,
  TEXT_STYLES,
} from "@/constants/theme.ts";

export type ThemeColours = keyof typeof COLOURS;
export type ThemeSpacing = keyof typeof SPACING;
export type TextStyles = keyof typeof TEXT_STYLES;
export type Theme = typeof STANDARD_THEME;
