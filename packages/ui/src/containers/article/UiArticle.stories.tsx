import { Meta, StoryObj } from "@storybook/react";
import { UiArticle } from "./UiArticle.tsx";

const meta = {
  title: "Containers/UiArticle",
  component: UiArticle,
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
} satisfies Meta<typeof UiArticle>;

export const UiArticleStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiArticle",
} satisfies StoryObj<typeof meta>;

export default meta;
