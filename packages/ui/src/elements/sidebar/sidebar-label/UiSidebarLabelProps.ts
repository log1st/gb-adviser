import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../../types/UiProps.ts";

export type UiSidebarLabelProps = UiProps<
  PropsWithChildren<{
    label?: ReactNode;
  }>
>;
