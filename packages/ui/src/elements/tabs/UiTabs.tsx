import { clsx, KeyedKey } from "@gb-adviser/common";
import { useCallback } from "react";
import { UiTabsProps } from "./UiTabsProps.ts";

import styles from "./UiTabs.module.scss";
import { UiButtonOrLink } from "../../utils";

export function UiTabs({
  e2e,
  style,
  className,
  tabs,
  value,
  onChange,
  whitespace,
}: UiTabsProps) {
  const handleClick = useCallback(
    (newValue: KeyedKey) => () => {
      onChange?.(newValue);
    },
    [onChange],
  );

  return (
    <div
      className={clsx(styles.root, className, whitespace && styles.whitespace)}
      style={style}
      data-e2e={e2e}
    >
      <div className={styles.list}>
        {tabs?.map((tab) => (
          <UiButtonOrLink
            onClick={handleClick(tab.key)}
            className={clsx(styles.tab, tab.key === value && styles.active)}
            key={tab.key}
          >
            {tab.label}
          </UiButtonOrLink>
        ))}
      </div>
    </div>
  );
}
