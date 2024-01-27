import { clsx } from "@gb-adviser/common";
import { UiSidebarGroupProps } from "./UiSidebarGroupProps.ts";

import styles from "./UiSidebarGroup.module.scss";

export function UiSidebarGroup({
  e2e,
  style,
  className,
  children,
}: UiSidebarGroupProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      {children}
    </div>
  );
}
