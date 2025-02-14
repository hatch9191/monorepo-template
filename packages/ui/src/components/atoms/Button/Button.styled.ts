import { css, styled } from "styled-components";

import { unstyledButtonStyles } from "@/styles/buttonStyles.ts";
import { ButtonSize, ButtonVariant } from "@/types/button.ts";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/button.ts";
import { STANDARD_THEME } from "@/constants/theme.ts";
import { textStyle } from "@/helpers/textStyle/textStyle.ts";
import { Theme } from "@/types/theme.ts";

function buttonVariantStyles(theme: Theme, variant: ButtonVariant): string {
  const BUTTON_VARIANT_STYLES = {
    [BUTTON_VARIANTS.PRIMARY]: `
      color: ${theme.COLOURS.WHITE};
      background: ${theme.COLOURS.BLACK};
      border: ${theme.SPACING[2]} solid ${theme.COLOURS.BLACK};
    `,
    [BUTTON_VARIANTS.SECONDARY]: `
      color: ${theme.COLOURS.BLACK};
      background: transparent;
      border: ${theme.SPACING[2]} solid ${theme.COLOURS.BLACK};
    `,
    [BUTTON_VARIANTS.TERTIARY]: `
      color: ${theme.COLOURS.BLACK};
      background: ${theme.COLOURS.WHITE};
      border: ${theme.SPACING[2]} solid ${theme.COLOURS.WHITE};
    `,
  };

  return BUTTON_VARIANT_STYLES[variant];
}

function buttonSizeStyles(theme: Theme, size: ButtonSize): string {
  const BUTTON_SIZE_STYLES = {
    [BUTTON_SIZES.SMALL]: `
      padding: ${theme.SPACING[4]} ${STANDARD_THEME.SPACING[12]};
  
      ${textStyle({ theme, styleName: "BODY_SMALL_BOLD" })}
    `,
    [BUTTON_SIZES.MEDIUM]: `
      padding: ${STANDARD_THEME.SPACING[8]} ${STANDARD_THEME.SPACING[16]};
      
      ${textStyle({ theme, styleName: "BODY_MEDIUM_BOLD" })}
    `,
  };

  return BUTTON_SIZE_STYLES[size];
}

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
}>(
  ({ variant, size }) => css`
    ${unstyledButtonStyles}

    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50px;

    ${buttonSizeStyles(STANDARD_THEME, size)}

    ${buttonVariantStyles(STANDARD_THEME, variant)}
    
    &:hover {
      background: rgba(34, 34, 34, 0.15);
    }
  `
);
