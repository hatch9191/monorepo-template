import { REM_BASE } from "@/constants/units.ts";

export const pxToRem = (pixelValue: number): string => {
  return `${pixelValue / REM_BASE}rem`;
};

export const pxToRemUnitless = (pixelValue: number): string => {
  return `${pixelValue / REM_BASE}`;
};
