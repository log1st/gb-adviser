import { clsx } from "@gb-adviser/common";
import { UiArticleBlockProps } from "./UiArticleBlockProps.ts";

import styles from "./UiArticleBlock.module.scss";

export function UiArticleBlock({
  e2e,
  style,
  className,
  children,
  title,
}: UiArticleBlockProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
