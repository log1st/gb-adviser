import { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/types";
import { UiButtonOrLink } from "./UiButtonOrLink.tsx";
import { UiButtonOrLinkProps } from "./UiButtonOrLinkProps.ts";

export const commonButtonOrLinkArgs: UiButtonOrLinkProps = {
  htmlType: "button",
  tabIndex: 0,
  stop: false,
  disabled: false,
  target: "_blank",
  prevent: false,
  to: "#href",
  children: "Children",
  readOnly: false,

  // generated
  className: "className",
  e2e: "e2e",
  style: {},
};

export const commonButtonOrLinkArgTypes: Partial<
  ArgTypes<UiButtonOrLinkProps>
> = {
  className: {
    type: "string",
  },
  e2e: {
    type: "string",
  },
  htmlType: {
    options: ["button", "submit", "reset"],
  },
  disabled: {
    type: "boolean",
  },
  target: {
    type: "string",
  },
  tabIndex: {
    type: "number",
  },
  stop: {
    type: "boolean",
  },
  prevent: {
    type: "boolean",
  },
  readOnly: {
    type: "boolean",
  },
  to: {
    type: "string",
  },
};

const meta = {
  title: "Utils/UiButtonOrLink",
  component: UiButtonOrLink,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...commonButtonOrLinkArgTypes,
    children: {
      type: "string",
    },
  },
  excludeStories: ["commonButtonOrLinkArgTypes", "commonButtonOrLinkArgs"],
} satisfies Meta<typeof UiButtonOrLink>;

export const UiButtonOrLinkStory = {
  args: {
    ...commonButtonOrLinkArgs,
    children: "Children",
  },
  name: "UiButtonOrLink",
} satisfies StoryObj<typeof meta>;

export default meta;
