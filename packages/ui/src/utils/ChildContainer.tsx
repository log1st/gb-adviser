import { Children, cloneElement, isValidElement, ReactElement } from "react";
import { UiNativeProps, UiProps } from "../types/UiProps.ts";

export type ChildContainerProps = UiProps<{
  children: ReactElement<UiNativeProps> | string;
}>;

export function ChildContainer({
  e2e,
  children,
  style,
  className,
}: ChildContainerProps) {
  const child = Children.only(children);

  if (isValidElement(child)) {
    return cloneElement(child, {
      className,
      style,
      "data-e2e": e2e,
    });
  }

  return child;
}
