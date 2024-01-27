import { clsx } from "@gb-adviser/common";
import { UiArticleQuoteProps } from "./UiArticleQuoteProps.ts";

import styles from "./UiArticleQuote.module.scss";

export function UiArticleQuote({
  e2e,
  style,
  className,
  title,
  children,
}: UiArticleQuoteProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
