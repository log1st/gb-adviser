import { clsx } from "@gb-adviser/common";
import { UiHeaderSearchProps } from "./UiHeaderSearchProps.ts";

import styles from "./UiHeaderSearch.module.scss";
import { ChildContainer } from "../../../utils";

export function UiHeaderSearch({
  className,
  children,
  ...props
}: UiHeaderSearchProps) {
  return (
    <ChildContainer className={clsx(styles.root, className)} {...props}>
      {children}
    </ChildContainer>
  );
}
