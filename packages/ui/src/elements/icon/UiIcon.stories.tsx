import { Meta, StoryObj } from "@storybook/react";
import { UiIcon } from "./UiIcon.tsx";
import { iconNames } from "./UiIconProps.ts";

const meta = {
  title: "Elements/UiIcon",
  component: UiIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      options: iconNames,
    },
    spin: {
      type: "boolean",
    },

    className: {
      type: "string",
    },
    e2e: {
      type: "string",
    },
  },
} satisfies Meta<typeof UiIcon>;

export const UiIconStory = {
  args: {
    icon: "euro",

    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiIcon",
} satisfies StoryObj<typeof meta>;

export default meta;
