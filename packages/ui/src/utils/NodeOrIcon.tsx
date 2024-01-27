import { CSSProperties, isValidElement, ReactNode } from "react";
import { clsx } from "@gb-adviser/common";
import { IconName, iconNames, UiIcon, UiIconProps } from "../elements";

export type NodeOrIconProps = {
  e2e?: string | boolean;
  className?: string;
  style?: CSSProperties;
  iconClassName?: string;
  noIconClassName?: string;
  children?: ReactNode | IconName;
} & Partial<UiIconProps>;

export function NodeOrIcon({
  e2e,
  className,
  iconClassName,
  noIconClassName,
  style,
  children: c,
  icon,
  spin,
}: NodeOrIconProps) {
  const children = (icon ?? c) as IconName;

  const isIcon =
    !children || isValidElement(children)
      ? false
      : typeof children === "string"
        ? iconNames.includes(children)
        : false;

  return children ? (
    <div
      data-e2e={e2e}
      className={clsx(className, !isIcon && noIconClassName)}
      style={style}
    >
      {isIcon ? (
        <UiIcon spin={spin} className={iconClassName} icon={children} />
      ) : (
        (children as ReactNode)
      )}
    </div>
  ) : null;
}
