import { ReactNode } from "react";
import { UiProps } from "../../types/UiProps.ts";

export type UiHeaderContainerProps = UiProps<{
  logo?: ReactNode;
  search?: ReactNode;
  actions?: ReactNode;
  side?: ReactNode;
}>;
