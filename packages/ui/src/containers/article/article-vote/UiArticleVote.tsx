import { clsx } from "@gb-adviser/common";
import { useCallback } from "react";
import { UiArticleVoteProps } from "./UiArticleVoteProps.ts";

import styles from "./UiArticleVote.module.scss";
import { UiButton } from "../../../elements";

export function UiArticleVote({
  e2e,
  style,
  className,
  onVote,
  yes,
  no,
  value,
  summary,
}: UiArticleVoteProps) {
  const vote = useCallback(
    (value: boolean) => () => {
      onVote?.(value);
    },
    [onVote],
  );

  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.actions}>
        <UiButton
          size="small"
          variant={value === true ? "primary" : "default"}
          label={yes}
          onClick={vote(true)}
        />
        <UiButton
          size="small"
          variant={value === false ? "primary" : "default"}
          label={no}
          onClick={vote(false)}
        />
      </div>
      <div className={styles.summary}>{summary}</div>
    </div>
  );
}
