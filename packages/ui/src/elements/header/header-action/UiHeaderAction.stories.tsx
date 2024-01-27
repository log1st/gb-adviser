import { Meta, StoryObj } from "@storybook/react";
import { UiHeaderAction } from "./UiHeaderAction.tsx";

const meta = {
  title: "Elements/UiHeaderAction",
  component: UiHeaderAction,
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
} satisfies Meta<typeof UiHeaderAction>;

export const UiHeaderActionStory = {
  args: {
    icon: "magnifier",
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiHeaderAction",
} satisfies StoryObj<typeof meta>;

export default meta;
