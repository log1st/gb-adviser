import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../../../../types/UiProps.ts";

export type UiInfoWikiPageProps = UiProps<
  PropsWithChildren<{
    back?: ReactNode;
    title?: ReactNode;
    menu?: ReactNode;
    search?: ReactNode;
    footer?: ReactNode;
  }>
>;
