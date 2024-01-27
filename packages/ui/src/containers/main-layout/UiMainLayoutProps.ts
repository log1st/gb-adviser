import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../types/UiProps.ts";

export type UiMainLayoutProps = PropsWithChildren<
  UiProps<{
    header?: ReactNode;
    sidebar?: ReactNode;
  }>
>;
