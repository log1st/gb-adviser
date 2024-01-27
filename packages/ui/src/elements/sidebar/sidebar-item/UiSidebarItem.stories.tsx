import { Meta, StoryObj } from "@storybook/react";
import { UiSidebarItem } from "./UiSidebarItem.tsx";

const meta = {
  title: "Elements/UiSidebarItem",
  component: UiSidebarItem,
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
} satisfies Meta<typeof UiSidebarItem>;

export const UiSidebarItemStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiSidebarItem",
} satisfies StoryObj<typeof meta>;

export default meta;
