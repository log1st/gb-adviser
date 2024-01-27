import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../../types/UiProps.ts";

export type UiArticleBlockProps = UiProps<
  PropsWithChildren<{
    title?: ReactNode;
  }>
>;
