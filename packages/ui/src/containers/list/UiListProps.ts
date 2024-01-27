import { ReactNode } from "react";
import { ArrayFrom } from "@gb-adviser/common";
import { UiProps } from "../../types/UiProps.ts";

export type UiListProps = UiProps<{
  items?: ArrayFrom<ReactNode>;
}>;
