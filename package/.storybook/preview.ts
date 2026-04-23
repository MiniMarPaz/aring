import type { Preview } from "@storybook/react";
import "../src/tokens/_tokens.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1f24" },
      ],
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Light / dark tokens",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "light";
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", theme);
        document.body.style.background =
          theme === "dark" ? "#1a1f24" : "#ffffff";
      }
      return Story();
    },
  ],
};

export default preview;
