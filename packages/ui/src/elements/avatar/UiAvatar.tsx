import { clsx } from "@gb-adviser/common";
import { UiAvatarProps } from "./UiAvatarProps.ts";

import styles from "./UiAvatar.module.scss";
import { UiImage } from "../image";

export function UiAvatar({ className, name, src }: UiAvatarProps) {
  return (
    <UiImage
      src={src}
      alt={name}
      fit="cover"
      className={clsx(styles.root, className)}
    />
  );
}
