import { PropsWithChildren, ReactNode } from "react";
import { UiProps } from "../../../types/UiProps.ts";
import { IconName } from "../../icon";

export type UiDropdownTriggerProps = UiProps<
  PropsWithChildren<{
    before?: IconName | ReactNode;
    label?: ReactNode;
    after?: IconName;
  }>
>;
