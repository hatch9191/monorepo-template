import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo.tsx";
import { pxToRem } from "@/helpers/pxToRem/pxToRem.ts";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    name: "PINTEREST",
    width: pxToRem(300),
    fill: "BLACK",
  },
};
