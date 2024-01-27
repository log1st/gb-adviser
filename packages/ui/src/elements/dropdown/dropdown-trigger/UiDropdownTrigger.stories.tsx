import { Meta, StoryObj } from "@storybook/react";
import { UiDropdownTrigger } from "./UiDropdownTrigger.tsx";

const meta = {
  title: "Elements/UiDropdownTrigger",
  component: UiDropdownTrigger,
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
} satisfies Meta<typeof UiDropdownTrigger>;

export const UiDropdownTriggerStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiDropdownTrigger",
} satisfies StoryObj<typeof meta>;

export default meta;
