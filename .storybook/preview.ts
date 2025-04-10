import "../src/assets/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        state: "open",
        language: "tsx",
        code: "your default code here",
        dark: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
