import { ThemeColours } from "@/types/theme.ts";
import { LOGOS } from "./components/index.ts";

type Logos = keyof typeof LOGOS;

export type LogoProps = {
  name: Logos;
  width?: number | string;
  fill?: ThemeColours;
  alt?: string;
};
