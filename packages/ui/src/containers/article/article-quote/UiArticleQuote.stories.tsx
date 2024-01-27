import { Meta, StoryObj } from "@storybook/react";
import { UiArticleQuote } from "./UiArticleQuote.tsx";

const meta = {
  title: "Containers/UiArticleQuote",
  component: UiArticleQuote,
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
} satisfies Meta<typeof UiArticleQuote>;

export const UiArticleQuoteStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiArticleQuote",
} satisfies StoryObj<typeof meta>;

export default meta;
