import { clsx } from "@gb-adviser/common";
import { UiHeaderContainerProps } from "./UiHeaderContainerProps.ts";

import styles from "./UiHeaderContainer.module.scss";

export function UiHeaderContainer({
  e2e,
  style,
  className,
  logo,
  side,
  search,
  actions,
}: UiHeaderContainerProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.logo}>{logo}</div>
      <div className={styles.search}>{search}</div>
      <div className={styles.actions}>{actions}</div>
      <div className={styles.side}>{side}</div>
    </div>
  );
}
