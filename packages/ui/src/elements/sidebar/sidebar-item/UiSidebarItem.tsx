import { UiSidebarItemProps } from "./UiSidebarItemProps.ts";

import styles from "./UiSidebarItem.module.scss";
import {
  computeButtonOrLinkClass,
  NodeOrIcon,
  UiButtonOrLink,
} from "../../../utils";

export function UiSidebarItem({
  className,
  label,
  icon,
  badge,
  children,
  active,
  ...buttonOrLinkProps
}: UiSidebarItemProps) {
  return (
    <UiButtonOrLink
      className={computeButtonOrLinkClass(
        className,
        ({ isActive }) => isActive && styles.active,
        styles.root,
        active && styles.active,
      )}
      {...buttonOrLinkProps}
    >
      <NodeOrIcon className={styles.before} iconClassName={styles.icon}>
        {icon}
      </NodeOrIcon>
      <div className={styles.label}>{label ?? children}</div>
      <div className={styles.badge}>{badge}</div>
    </UiButtonOrLink>
  );
}
