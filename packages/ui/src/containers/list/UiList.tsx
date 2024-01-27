// it's ok if array won't be sorted in runtime
/* eslint-disable react/no-array-index-key */
import { arrayFrom, clsx } from "@gb-adviser/common";
import { UiListProps } from "./UiListProps.ts";

import styles from "./UiList.module.scss";

export function UiList({ e2e, style, className, items }: UiListProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      {arrayFrom(items)?.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.badge}>{index + 1}</div>
          <div className={styles.content}>{item}</div>
        </div>
      ))}
    </div>
  );
}
