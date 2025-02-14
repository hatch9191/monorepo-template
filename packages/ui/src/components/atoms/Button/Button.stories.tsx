import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button.tsx";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/button.ts";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary button",
    variant: BUTTON_VARIANTS.SECONDARY,
  },
};

export const Tertiary: Story = {
  args: {
    text: "Tertiary button",
    variant: BUTTON_VARIANTS.TERTIARY,
  },
};

export const Small: Story = {
  args: {
    text: "Small button",
    variant: BUTTON_VARIANTS.PRIMARY,
    size: BUTTON_SIZES.SMALL,
  },
};
