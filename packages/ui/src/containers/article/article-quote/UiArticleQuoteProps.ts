import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../../types/UiProps.ts";

export type UiArticleQuoteProps = UiProps<
  PropsWithChildren<{
    title?: ReactNode;
  }>
>;
