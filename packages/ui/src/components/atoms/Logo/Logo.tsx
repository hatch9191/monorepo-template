import { ReactElementOrNull } from "@/constants/components.ts";
import { StyledSvg } from "./Logo.styled.ts";
import { LogoProps } from "./types.ts";
import { LOGOS } from "./components/index.ts";

export function Logo({
  name,
  fill,
  width,
  alt,
}: LogoProps): ReactElementOrNull {
  const logo = LOGOS[name];

  if (!logo) {
    console.warn(`Logo "${name}" not found.`);
    return null;
  }

  const title = `${logo.title} logo`;

  return (
    <StyledSvg
      width={width}
      aria-label={alt ?? title}
      viewBox={logo.viewBox}
      fill={fill ?? logo.defaultFill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>

      {logo.svg()}
    </StyledSvg>
  );
}
