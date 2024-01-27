import { Meta, StoryObj } from "@storybook/react";
import { UiSidebarLabel } from "./UiSidebarLabel.tsx";

const meta = {
  title: "Elements/UiSidebarLabel",
  component: UiSidebarLabel,
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
} satisfies Meta<typeof UiSidebarLabel>;

export const UiSidebarLabelStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiSidebarLabel",
} satisfies StoryObj<typeof meta>;

export default meta;
