import { UiProps } from "../../types/UiProps.ts";
import { IconName, iconNames } from "./iconNames.ts";

export { iconNames };

export type UiIconProps = UiProps<{
  icon: IconName;
  spin?: boolean;
}>;
