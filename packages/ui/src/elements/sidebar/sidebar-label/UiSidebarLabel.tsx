import { clsx } from "@gb-adviser/common";
import { UiSidebarLabelProps } from "./UiSidebarLabelProps.ts";

import styles from "./UiSidebarLabel.module.scss";

export function UiSidebarLabel({
  e2e,
  style,
  className,
  label,
  children,
}: UiSidebarLabelProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      {label ?? children}
    </div>
  );
}
