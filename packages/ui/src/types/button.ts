import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/button.ts";
import { ValueOf } from "@/utils/type.ts";

export type ButtonVariant = ValueOf<typeof BUTTON_VARIANTS>;
export type ButtonSize = ValueOf<typeof BUTTON_SIZES>;
