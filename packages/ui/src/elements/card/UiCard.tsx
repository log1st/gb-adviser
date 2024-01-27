import { clsx } from "@gb-adviser/common";
import { UiCardProps } from "./UiCardProps.ts";

import styles from "./UiCard.module.scss";

export function UiCard({
  e2e,
  style,
  className,
  description,
  title,
  action,
}: UiCardProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.action}>{action}</div>
    </div>
  );
}
