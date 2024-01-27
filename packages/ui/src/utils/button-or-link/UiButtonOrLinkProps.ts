import { FocusEventHandler, MouseEventHandler, PropsWithChildren } from "react";
import { UiProps } from "../../types/UiProps.ts";
import { UiLinkProp } from "../../providers";

export type UiButtonOrLinkCommonProps<T extends Record<string, unknown>> = T &
  Omit<
    UiProps<{
      htmlType?: "button" | "submit" | "reset";
      to?: string | Record<string, unknown>;
      target?: string;

      disabled?: boolean;

      tabIndex?: number;

      prevent?: boolean;
      stop?: boolean;
      readOnly?: boolean;

      span?: boolean;

      onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
      onMouseEnter?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
      onMouseLeave?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
      onFocus?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
      onBlur?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    }>,
    "className"
  > & {
    className?: UiLinkProp<string> | string;
  };

export type UiButtonOrLinkProps = UiButtonOrLinkCommonProps<PropsWithChildren>;
