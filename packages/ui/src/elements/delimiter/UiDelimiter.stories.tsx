import { Meta, StoryObj } from "@storybook/react";
import { UiDelimiter } from "./UiDelimiter.tsx";

const meta = {
  title: "Elements/UiDelimiter",
  component: UiDelimiter,
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
} satisfies Meta<typeof UiDelimiter>;

export const UiDelimiterStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiDelimiter",
} satisfies StoryObj<typeof meta>;

export default meta;
