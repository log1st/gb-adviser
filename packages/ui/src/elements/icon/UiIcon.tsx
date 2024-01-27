import { clsx } from "@gb-adviser/common";
import { UiIconProps } from "./UiIconProps.ts";

import styles from "./UiIcon.module.scss";
import { iconsMap } from "./iconNames.ts";

export function UiIcon({
  e2e,
  style,
  className,
  icon,
  spin = false,
}: UiIconProps) {
  return (
    <div
      className={clsx(styles.icon, className, spin && styles.spin)}
      style={style}
      data-e2e={e2e}
    >
      {String.fromCharCode(iconsMap[icon])}
    </div>
  );
}
