import { arrayFrom, clsx } from "@gb-adviser/common";
import { UiArticleContentProps } from "./UiArticleContentProps.ts";

import styles from "./UiArticleContent.module.scss";

export function UiArticleContent({
  e2e,
  style,
  className,
  children,
}: UiArticleContentProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      {arrayFrom(children).map((item, index) => (
        <div
          className={styles.item}
          key={
            // it's ok
            // eslint-disable-next-line react/no-array-index-key
            index
          }
        >
          {item}
        </div>
      ))}
    </div>
  );
}
