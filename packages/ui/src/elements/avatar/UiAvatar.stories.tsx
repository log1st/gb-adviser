import { Meta, StoryObj } from "@storybook/react";
import { UiAvatar } from "./UiAvatar.tsx";
import { getRandomImage, loremIpsum } from "../../utils";

const meta = {
  title: "Elements/UiAvatar",
  component: UiAvatar,
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
} satisfies Meta<typeof UiAvatar>;

export const UiAvatarStory = {
  args: {
    src: getRandomImage(),
    name: loremIpsum([5]),
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiAvatar",
} satisfies StoryObj<typeof meta>;

export default meta;
