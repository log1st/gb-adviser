import { Meta, StoryObj } from "@storybook/react";
import { UiSidebarGroup } from "./UiSidebarGroup.tsx";

const meta = {
  title: "Containers/UiSidebarGroup",
  component: UiSidebarGroup,
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
} satisfies Meta<typeof UiSidebarGroup>;

export const UiSidebarGroupStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiSidebarGroup",
} satisfies StoryObj<typeof meta>;

export default meta;
