import { Meta, StoryObj } from "@storybook/react";
import { UiHeaderContainer } from "./UiHeaderContainer.tsx";

const meta = {
  title: "Containers/UiHeaderContainer",
  component: UiHeaderContainer,
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
} satisfies Meta<typeof UiHeaderContainer>;

export const UiHeaderContainerStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiHeaderContainer",
} satisfies StoryObj<typeof meta>;

export default meta;
