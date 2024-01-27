import { Meta, StoryObj } from "@storybook/react";
import { UiList } from "./UiList.tsx";

const meta = {
  title: "Containers/UiList",
  component: UiList,
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
} satisfies Meta<typeof UiList>;

export const UiListStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiList",
} satisfies StoryObj<typeof meta>;

export default meta;
