import { Meta, StoryObj } from "@storybook/react";
import { UiImage } from "./UiImage.tsx";
import { getRandomImage } from "../../utils";
import { uiImageFits } from "./UiImageProps.ts";

const meta = {
  title: "Elements/UiImage",
  component: UiImage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      type: "string",
    },
    alt: {
      type: "string",
    },
    fit: {
      options: uiImageFits,
    },

    className: {
      type: "string",
    },
    e2e: {
      type: "string",
    },
  },
} satisfies Meta<typeof UiImage>;

export const UiImageStory = {
  args: {
    fit: "cover",
    src: getRandomImage(),
    alt: "Alt",
    height: 300,
    width: 500,
    // generated
    className: "className",
    e2e: "e2e",
    style: {},
  },
  name: "UiImage",
} satisfies StoryObj<typeof meta>;

export default meta;
