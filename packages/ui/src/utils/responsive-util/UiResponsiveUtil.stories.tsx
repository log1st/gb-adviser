import { Meta, StoryObj } from "@storybook/react";
import { UiResponsiveUtil } from "./UiResponsiveUtil.tsx";

const meta = {
  title: "Utils/UiResponsiveUtil",
  component: UiResponsiveUtil,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      type: "string",
    },
    e2e: {
      type: "string",
    },
  },
} satisfies Meta<typeof UiResponsiveUtil>;

export const UiResponsiveUtilStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiResponsiveUtil",
} satisfies StoryObj<typeof meta>;

export default meta;
