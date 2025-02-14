import { describe, expect, it } from "vitest";

import { pxToRem, pxToRemUnitless } from "./pxToRem.ts";
import { REM_BASE } from "@/constants/units.ts";

describe(pxToRem.name, () => {
  it("should convert pixels to rem with rem unit", () => {
    expect(pxToRem(16)).toBe(`${16 / REM_BASE}rem`);
    expect(pxToRem(32)).toBe(`${32 / REM_BASE}rem`);
    expect(pxToRem(0)).toBe("0rem");
  });

  it("should handle negative pixel values", () => {
    expect(pxToRem(-16)).toBe(`${-16 / REM_BASE}rem`);
  });
});

describe(pxToRemUnitless.name, () => {
  it("should convert pixels to rem without rem unit", () => {
    expect(pxToRemUnitless(16)).toBe(`${16 / REM_BASE}`);
    expect(pxToRemUnitless(32)).toBe(`${32 / REM_BASE}`);
    expect(pxToRemUnitless(0)).toBe("0");
  });

  it("should handle negative pixel values", () => {
    expect(pxToRemUnitless(-16)).toBe(`${-16 / REM_BASE}`);
  });
});
