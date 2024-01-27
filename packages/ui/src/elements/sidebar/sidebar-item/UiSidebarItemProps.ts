import { PropsWithChildren, ReactNode } from "react";
import { UiButtonOrLinkCommonProps } from "../../../utils";
import { IconName } from "../../icon";

export type UiSidebarItemProps = UiButtonOrLinkCommonProps<
  PropsWithChildren<{
    label?: ReactNode;
    icon?: IconName;
    badge?: ReactNode;

    active?: boolean;
  }>
>;
