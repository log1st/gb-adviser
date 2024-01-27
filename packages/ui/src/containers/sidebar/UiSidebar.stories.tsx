import { Meta, StoryObj } from "@storybook/react";
import { UiSidebar } from "./UiSidebar.tsx";

const meta = {
  title: "Containers/UiSidebar",
  component: UiSidebar,
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
} satisfies Meta<typeof UiSidebar>;

export const UiSidebarStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiSidebar",
} satisfies StoryObj<typeof meta>;

export default meta;
