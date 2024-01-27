import { CSSProperties } from "react";

export type UiProps<T extends Record<string, unknown>> = T & {
  className?: string;
  style?: CSSProperties;
  e2e?: string;
};

export type UiNativeProps = Omit<UiProps<Record<string, unknown>>, "e2e"> & {
  "data-e2e"?: string;
};

export type UiClassName = {
  className?: string;
};
