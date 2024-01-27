import { Meta, StoryObj } from "@storybook/react";
import { UiFieldContainer } from "./UiFieldContainer.tsx";

const meta = {
  title: "Containers/UiFieldContainer",
  component: UiFieldContainer,
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
} satisfies Meta<typeof UiFieldContainer>;

export const UiFieldContainerStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiFieldContainer",
} satisfies StoryObj<typeof meta>;

export default meta;
