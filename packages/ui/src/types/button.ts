import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/button.ts";
import { ValueOf } from "@repo/utils/types";

export type ButtonVariant = ValueOf<typeof BUTTON_VARIANTS>;
export type ButtonSize = ValueOf<typeof BUTTON_SIZES>;
