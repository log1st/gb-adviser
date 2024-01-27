import { Meta, StoryObj } from "@storybook/react";
import { UiMainLayout } from "./UiMainLayout.tsx";

const meta = {
  title: "Containers/UiMainLayout",
  component: UiMainLayout,
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
} satisfies Meta<typeof UiMainLayout>;

export const UiMainLayoutStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiMainLayout",
} satisfies StoryObj<typeof meta>;

export default meta;
