import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import { useFormContext } from "react-hook-form";

export type RichResetProps = PropsWithChildren;

export function RichReset({ children }: RichResetProps) {
  const { formState } = useFormContext();

  const child = Children.only(children);

  if (!child || !isValidElement(child)) {
    return child;
  }

  return cloneElement(child, {
    htmlType: "reset",
    disabled: formState.isDirty,
  } as {
    htmlType: "reset";
    disabled: boolean;
  });
}
