import { Meta, StoryObj } from "@storybook/react";
import { UiInput } from "./UiInput.tsx";

const meta = {
  title: "Elements/UiInput",
  component: UiInput,
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
} satisfies Meta<typeof UiInput>;

export const UiInputStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiInput",
} satisfies StoryObj<typeof meta>;

export default meta;
