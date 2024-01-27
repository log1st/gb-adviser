import { clsx } from "@gb-adviser/common";
import { UiDelimiterProps } from "./UiDelimiterProps.ts";

import styles from "./UiDelimiter.module.scss";

export function UiDelimiter({ e2e, style, className }: UiDelimiterProps) {
  return (
    <div
      className={clsx(styles.root, className)}
      style={style}
      data-e2e={e2e}
    />
  );
}
