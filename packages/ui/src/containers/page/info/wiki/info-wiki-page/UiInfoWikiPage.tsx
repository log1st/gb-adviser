import { clsx } from "@gb-adviser/common";
import { UiInfoWikiPageProps } from "./UiInfoWikiPageProps.ts";

import styles from "./UiInfoWikiPage.module.scss";

export function UiInfoWikiPage({
  e2e,
  style,
  className,
  children,
  menu,
  title,
  search,
  footer,
  back,
}: UiInfoWikiPageProps) {
  return (
    <div className={clsx(styles.root, className)} style={style} data-e2e={e2e}>
      <div className={styles.back}>{back}</div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title}>{title}</div>
          <div className={styles.menu}>{menu}</div>
        </div>
        <div className={styles.body}>
          <div className={styles.search}>{search}</div>
          <div className={styles.inner}>{children}</div>
          <div className={styles.footer}>{footer}</div>
        </div>
      </div>
    </div>
  );
}
