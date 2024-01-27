import { ReactNode } from "react";
import { UiProps } from "../../types/UiProps.ts";

export type UiListProps = UiProps<{
  items?: Array<ReactNode>;
}>;
