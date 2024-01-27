import { clsx } from "@gb-adviser/common";
import { UiSidebarProps } from "./UiSidebarProps.ts";

import styles from "./UiSidebar.module.scss";
import { UiSidebarItem, UiSidebarLabel } from "../../elements";
import { UiSidebarGroup } from "./sidebar-group";

export function UiSidebar({ e2e, style, className, children }: UiSidebarProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      {children}
    </div>
  );
}

UiSidebar.Group = UiSidebarGroup;
UiSidebar.Label = UiSidebarLabel;
UiSidebar.Item = UiSidebarItem;
