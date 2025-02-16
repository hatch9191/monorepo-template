import "@fontsource/ibm-plex-sans";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "lightGrey",
      values: [
        { name: "lightGrey", value: "#f5f5f5" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
