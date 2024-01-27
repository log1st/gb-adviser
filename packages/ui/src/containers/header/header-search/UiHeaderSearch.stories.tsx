import { Meta, StoryObj } from "@storybook/react";
import { UiHeaderSearch } from "./UiHeaderSearch.tsx";

const meta = {
  title: "Containers/UiHeaderSearch",
  component: UiHeaderSearch,
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
} satisfies Meta<typeof UiHeaderSearch>;

export const UiHeaderSearchStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiHeaderSearch",
} satisfies StoryObj<typeof meta>;

export default meta;
