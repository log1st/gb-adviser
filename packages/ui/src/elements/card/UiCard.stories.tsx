import { Meta, StoryObj } from "@storybook/react";
import { UiCard } from "./UiCard.tsx";

const meta = {
  title: "Elements/UiCard",
  component: UiCard,
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
} satisfies Meta<typeof UiCard>;

export const UiCardStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiCard",
} satisfies StoryObj<typeof meta>;

export default meta;
