import { styled, css } from "styled-components";

import { pxToRem } from "@/helpers/pxToRem/pxToRem.ts";

export const StyledSvg = styled.svg<{ width?: number | string; fill: string }>(
  ({ width, fill }) => css`
    width: ${typeof width === "number" ? pxToRem(width) : (width ?? "auto")};
    height: auto;
    color: ${fill};
    fill: ${fill};
  `
);
