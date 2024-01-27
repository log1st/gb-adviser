import { Meta, StoryObj } from "@storybook/react";
import { UiButton } from "./UiButton.tsx";
import {
  commonButtonOrLinkArgs,
  commonButtonOrLinkArgTypes,
} from "../../utils";
import { uiButtonVariants } from "./UiButtonProps.ts";

const meta = {
  title: "Elements/UiButton",
  component: UiButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      type: "string",
    },
    variant: {
      options: uiButtonVariants,
    },
    children: {
      type: "string",
    },
    ...commonButtonOrLinkArgTypes,
  },
} satisfies Meta<typeof UiButton>;

export const UiButtonStory = {
  args: {
    label: "Label",
    ...commonButtonOrLinkArgs,
  },
  name: "UiButton",
} satisfies StoryObj<typeof meta>;

export default meta;
