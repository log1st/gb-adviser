import { ReactNode } from "react";
import { UiButtonOrLinkCommonProps } from "../../../utils";
import { IconName } from "../../icon";

export type UiHeaderActionProps = UiButtonOrLinkCommonProps<{
  icon: IconName;
  badge?: ReactNode;
}>;
