import { Meta, StoryObj } from "@storybook/react";
import { UiArticleContent } from "./UiArticleContent.tsx";

const meta = {
  title: "Containers/UiArticleContent",
  component: UiArticleContent,
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
} satisfies Meta<typeof UiArticleContent>;

export const UiArticleContentStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiArticleContent",
} satisfies StoryObj<typeof meta>;

export default meta;
