import { Meta, StoryObj } from "@storybook/react";
import { UiTabs } from "./UiTabs.tsx";

const meta = {
  title: "Elements/UiTabs",
  component: UiTabs,
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
} satisfies Meta<typeof UiTabs>;

export const UiTabsStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiTabs",
} satisfies StoryObj<typeof meta>;

export default meta;
