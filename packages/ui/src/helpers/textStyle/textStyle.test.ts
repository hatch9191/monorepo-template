import { COLOURS, STANDARD_THEME, TEXT_STYLES } from "@/constants/theme.ts";
import { textStyle } from "./textStyle.ts";

describe(textStyle.name, () => {
  it("should return the correct styles for a given text style", () => {
    const style = textStyle({
      theme: STANDARD_THEME,
      styleName: "BODY_SMALL",
    });
    expect(style).toContain(`color: ${COLOURS.BLACK};`);
    expect(style).toContain(`font-family: ${TEXT_STYLES.BODY_SMALL.FAMILY};`);
    expect(style).toContain(`font-size: ${TEXT_STYLES.BODY_SMALL.SIZE};`);
    expect(style).toContain(`font-weight: ${TEXT_STYLES.BODY_SMALL.WEIGHT};`);
    expect(style).toContain(
      `line-height: ${TEXT_STYLES.BODY_SMALL.LINE_HEIGHT};`
    );
  });

  it("should return the correct color when a colourName is provided", () => {
    const style = textStyle({
      theme: STANDARD_THEME,
      styleName: "BODY_MEDIUM",
      colourName: "WHITE",
    });
    expect(style).toContain(`color: ${COLOURS.WHITE};`);
    expect(style).toContain(`font-family: ${TEXT_STYLES.BODY_MEDIUM.FAMILY};`);
    expect(style).toContain(`font-size: ${TEXT_STYLES.BODY_MEDIUM.SIZE};`);
    expect(style).toContain(`font-weight: ${TEXT_STYLES.BODY_MEDIUM.WEIGHT};`);
    expect(style).toContain(
      `line-height: ${TEXT_STYLES.BODY_MEDIUM.LINE_HEIGHT};`
    );
  });
});
