import { ReactNode } from "react";
import { UiProps } from "../../types/UiProps.ts";

export type UiCardProps = UiProps<{
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}>;
