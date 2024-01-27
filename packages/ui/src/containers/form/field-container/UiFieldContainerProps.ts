import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../../types/UiProps.ts";

export type UiFieldContainerProps = UiProps<
  PropsWithChildren<{
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    required?: boolean;
  }>
>;
