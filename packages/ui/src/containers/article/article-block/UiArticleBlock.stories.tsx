import { Meta, StoryObj } from "@storybook/react";
import { UiArticleBlock } from "./UiArticleBlock.tsx";

const meta = {
  title: "Containers/UiArticleBlock",
  component: UiArticleBlock,
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
} satisfies Meta<typeof UiArticleBlock>;

export const UiArticleBlockStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiArticleBlock",
} satisfies StoryObj<typeof meta>;

export default meta;
