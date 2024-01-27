import { clsx } from "@gb-adviser/common";
import { UiImageProps } from "./UiImageProps.ts";

import styles from "./UiImage.module.scss";

export function UiImage({
  e2e,
  style,
  className,
  src,
  alt,
  fit = "cover",
  width,
  height,
}: UiImageProps) {
  return (
    <img
      className={clsx(styles.root, className, styles[fit])}
      style={style}
      data-e2e={e2e}
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  );
}
