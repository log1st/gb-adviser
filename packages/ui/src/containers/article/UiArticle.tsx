import { clsx } from "@gb-adviser/common";
import { UiArticleProps } from "./UiArticleProps.ts";

import styles from "./UiArticle.module.scss";
import { UiArticleBlock } from "./article-block";
import { UiArticleContent } from "./article-content";
import { UiArticleQuote } from "./article-quote";
import { UiDelimiter } from "../../elements";
import { UiArticleVote } from "./article-vote";

export function UiArticle({
  e2e,
  style,
  className,
  children,
  footer,
}: UiArticleProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.content}>{children}</div>
      <UiDelimiter className={styles.delimiter} />
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}

UiArticle.Block = UiArticleBlock;
UiArticle.Content = UiArticleContent;
UiArticle.Quote = UiArticleQuote;
UiArticle.Vote = UiArticleVote;
