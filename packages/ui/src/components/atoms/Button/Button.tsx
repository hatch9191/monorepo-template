import { ReactElement } from "react";

import { StyledButton } from "./Button.styled.ts";
import { ButtonSize, ButtonVariant } from "@/types/button.ts";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/button.ts";

type ButtonProps = {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  text,
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
}: ButtonProps): ReactElement {
  return (
    <StyledButton variant={variant} size={size}>
      {text}
    </StyledButton>
  );
}
