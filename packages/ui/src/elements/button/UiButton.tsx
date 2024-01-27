import { UiButtonProps } from "./UiButtonProps.ts";

import styles from "./UiButton.module.scss";
import {
  computeButtonOrLinkClass,
  NodeOrIcon,
  UiButtonOrLink,
} from "../../utils";

export function UiButton({
  className,
  children,
  label,
  before,
  variant = "primary",
  size = "default",
  ...buttonOrLinkProps
}: UiButtonProps) {
  return (
    <UiButtonOrLink
      className={computeButtonOrLinkClass(
        className,
        styles.root,
        styles[`${variant}Variant`],
        styles[`${size}Size`],
        buttonOrLinkProps.disabled && styles.disabled,
      )}
      {...buttonOrLinkProps}
    >
      <NodeOrIcon className={styles.before} iconClassName={styles.icon}>
        {before}
      </NodeOrIcon>
      <NodeOrIcon className={styles.label} iconClassName={styles.icon}>
        {label ?? children}
      </NodeOrIcon>
    </UiButtonOrLink>
  );
}
