import { Meta, StoryObj } from "@storybook/react";
import { UiArticleVote } from "./UiArticleVote.tsx";

const meta = {
  title: "Containers/UiArticleVote",
  component: UiArticleVote,
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
} satisfies Meta<typeof UiArticleVote>;

export const UiArticleVoteStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiArticleVote",
} satisfies StoryObj<typeof meta>;

export default meta;
