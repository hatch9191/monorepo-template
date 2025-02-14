import { TextStyles, Theme, ThemeColours } from "@/types/theme.ts";

type TextStyleArgs = {
  theme: Theme;
  styleName: TextStyles;
  colourName?: ThemeColours;
};

export function textStyle({
  theme,
  styleName,
  colourName,
}: TextStyleArgs): string {
  return `
    color: ${theme.COLOURS[colourName ?? "BLACK"]};

    font-family: ${theme.TEXT_STYLES[styleName].FAMILY};
    font-size: ${theme.TEXT_STYLES[styleName].SIZE};
    font-weight: ${theme.TEXT_STYLES[styleName].WEIGHT};
    line-height: ${theme.TEXT_STYLES[styleName].LINE_HEIGHT};
  `;
}
