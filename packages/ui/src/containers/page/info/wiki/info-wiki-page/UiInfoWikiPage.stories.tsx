import { Meta, StoryObj } from "@storybook/react";
import { UiInfoWikiPage } from "./UiInfoWikiPage.tsx";

const meta = {
  title: "Containers/Page/Info/UiInfoWikiPage",
  component: UiInfoWikiPage,
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
} satisfies Meta<typeof UiInfoWikiPage>;

export const UiInfoWikiPageStory = {
  args: {
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiInfoWikiPage",
} satisfies StoryObj<typeof meta>;

export default meta;
