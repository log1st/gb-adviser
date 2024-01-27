import { clsx } from "@gb-adviser/common";
import { UiResponsiveUtilProps } from "./UiResponsiveUtilProps.ts";

import styles from "./UiResponsiveUtil.module.scss";
import { ChildContainer } from "../ChildContainer.tsx";

export function UiResponsiveUtil({
  className,
  tighter,
  desktop,
  mobile,
  tablet,
  wider,
  small,
  children,
  hide,
  show,
  ...props
}: UiResponsiveUtilProps) {
  return (
    <ChildContainer
      className={clsx(
        styles.root,
        className,

        ...Object.entries({
          tighter,
          desktop,
          mobile,
          tablet,
          wider,
          small,
          hide,
          show,
        })
          .filter(([, v]) => v)
          .map(([k]) => styles[k]),
      )}
      {...props}
    >
      {children}
    </ChildContainer>
  );
}
