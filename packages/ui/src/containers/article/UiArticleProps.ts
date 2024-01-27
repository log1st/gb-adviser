import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../types/UiProps.ts";

export type UiArticleProps = UiProps<
  PropsWithChildren<{
    footer?: ReactNode;
  }>
>;
