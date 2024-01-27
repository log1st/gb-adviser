import { clsx } from "@gb-adviser/common";
import { forwardRef, MutableRefObject } from "react";
import {
  UiInputProps,
  UiInputTextareaType,
  UiInputTextType,
} from "./UiInputProps.ts";

import styles from "./UiInput.module.scss";
import { NodeOrIcon } from "../../../utils";

export const UiInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  UiInputProps
>(
  (
    { e2e, style, className, before, type, variant = "primary", ...props },
    ref,
  ) => (
    <label
      className={clsx(styles.root, className, styles[`${variant}Variant`])}
      style={style}
      data-e2e={e2e}
    >
      <NodeOrIcon className={styles.before} iconClassName={styles.icon}>
        {before}
      </NodeOrIcon>
      {type === "textarea" ? (
        <textarea
          {...(props as UiInputTextareaType)}
          className={styles.input}
          ref={ref as MutableRefObject<HTMLTextAreaElement>}
        />
      ) : (
        <input
          {...(props as UiInputTextType)}
          className={styles.input}
          type={type}
          ref={ref as MutableRefObject<HTMLInputElement>}
        />
      )}
    </label>
  ),
);
