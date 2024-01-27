import { clsx } from "@gb-adviser/common";
import { UiMainLayoutProps } from "./UiMainLayoutProps.ts";

import styles from "./UiMainLayout.module.scss";

export function UiMainLayout({
  e2e,
  style,
  className,
  sidebar,
  header,
  children,
}: UiMainLayoutProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.header}>{header}</div>
      <div className={styles.content}>
        <div className={styles.sidebar}>{sidebar}</div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
