import { UiHeaderActionProps } from "./UiHeaderActionProps.ts";

import styles from "./UiHeaderAction.module.scss";
import { computeButtonOrLinkClass, UiButtonOrLink } from "../../../utils";
import { UiIcon } from "../../icon";

export function UiHeaderAction({
  className,
  icon,
  badge,
}: UiHeaderActionProps) {
  return (
    <UiButtonOrLink
      className={computeButtonOrLinkClass(className, styles.root)}
    >
      <UiIcon icon={icon} className={styles.icon} />
      <div className={styles.badge}>{badge}</div>
    </UiButtonOrLink>
  );
}
