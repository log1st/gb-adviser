import { clsx } from "@gb-adviser/common";
import { UiDropdownTriggerProps } from "./UiDropdownTriggerProps.ts";

import styles from "./UiDropdownTrigger.module.scss";
import { NodeOrIcon } from "../../../utils";

export function UiDropdownTrigger({
  e2e,
  style,
  className,
  children,
  label,
  before,
  after,
}: UiDropdownTriggerProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <NodeOrIcon className={styles.before} iconClassName={styles.icon}>
        {before}
      </NodeOrIcon>
      <div className={styles.label}>{label ?? children}</div>
      <NodeOrIcon className={styles.after} iconClassName={styles.icon}>
        {after}
      </NodeOrIcon>
    </div>
  );
}
