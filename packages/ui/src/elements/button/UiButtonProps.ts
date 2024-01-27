import { Tuple } from "@gb-adviser/common";
import { PropsWithChildren, ReactNode } from "react";
import { NodeOrIconProps, UiButtonOrLinkCommonProps } from "../../utils";
import { IconName } from "../icon";

export const uiButtonVariants = [
  "primary",
  "secondary",
  "default",
  "pageBack",
  "link",
] as const;

export type UiButtonVariant = Tuple<typeof uiButtonVariants>;

export const uiButtonSizes = ["small", "default"] as const;

export type UiButtonSize = Tuple<typeof uiButtonSizes>;

export type UiButtonProps = PropsWithChildren<
  UiButtonOrLinkCommonProps<{
    size?: UiButtonSize;
    variant?: UiButtonVariant;
    before?: IconName | ReactNode;
    label?: NodeOrIconProps["children"];
  }>
>;
