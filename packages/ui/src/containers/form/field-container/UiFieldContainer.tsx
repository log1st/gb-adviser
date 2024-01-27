import { clsx } from "@gb-adviser/common";
import { UiFieldContainerProps } from "./UiFieldContainerProps.ts";

import styles from "./UiFieldContainer.module.scss";

export function UiFieldContainer({
  e2e,
  style,
  className,
  children,
  error,
  label,
  hint,
}: UiFieldContainerProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.label}>{label}</div>
      <div className={styles.field}>{children}</div>
      <div className={styles.hint}>{hint}</div>
      <div className={styles.error}>{error}</div>
    </div>
  );
}
