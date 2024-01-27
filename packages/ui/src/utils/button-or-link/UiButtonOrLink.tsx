import {
  EventHandler,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  MouseEventHandler,
  SyntheticEvent,
} from "react";
import { classType, clsx, nullish } from "@gb-adviser/common";
import { UiButtonOrLinkProps } from "./UiButtonOrLinkProps.ts";
import { UiLinkProp, useUiContext } from "../../providers";

const stub = {
  isPending: false,
  isActive: false,
  isTransitioning: false,
};

function ButtonOrLink(
  {
    e2e,
    style,
    className,
    onFocus,
    onMouseLeave,
    onMouseEnter,
    onClick,
    to,
    onBlur,
    htmlType = "button",
    stop,
    prevent,
    target,
    tabIndex,
    disabled,
    children,
    readOnly,
    span,
  }: UiButtonOrLinkProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
) {
  const onEvent =
    <Event extends SyntheticEvent<HTMLAnchorElement | HTMLButtonElement>>(
      handler?: EventHandler<Event>,
    ) =>
    (event: Event) => {
      if (stop) {
        event.stopPropagation();
      }
      if (prevent) {
        event.preventDefault();
      }
      if (disabled || readOnly) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      handler?.(event);
    };

  const { Link } = useUiContext();

  if (span) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        ref={ref as ForwardedRef<HTMLDivElement>}
        style={style}
        data-e2e={e2e}
        onFocus={onEvent(onFocus) as FocusEventHandler}
        onClick={onEvent(onClick) as MouseEventHandler}
        onMouseEnter={onEvent(onMouseEnter) as MouseEventHandler}
        onMouseLeave={onEvent(onMouseLeave) as MouseEventHandler}
        onBlur={onEvent(onBlur) as FocusEventHandler}
        tabIndex={disabled ? -1 : tabIndex}
        className={className instanceof Function ? className(stub) : className}
      >
        {children}
      </div>
    );
  }

  if (to) {
    return (
      <Link
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        style={style}
        data-e2e={e2e}
        onFocus={onEvent(onFocus)}
        onClick={onEvent(onClick)}
        onMouseEnter={onEvent(onMouseEnter)}
        onMouseLeave={onEvent(onMouseLeave)}
        onBlur={onEvent(onBlur)}
        className={className}
        tabIndex={disabled ? -1 : tabIndex}
        to={to}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      style={style}
      data-e2e={e2e}
      onFocus={onEvent(onFocus)}
      onClick={onEvent(onClick)}
      onMouseEnter={onEvent(onMouseEnter)}
      onMouseLeave={onEvent(onMouseLeave)}
      onBlur={onEvent(onBlur)}
      className={className instanceof Function ? className(stub) : className}
      tabIndex={disabled || readOnly ? -1 : tabIndex}
      disabled={disabled || readOnly}
      type={
        // eslint-disable-next-line react/button-has-type
        htmlType
      }
    >
      {children}
    </button>
  );
}

export const computeButtonOrLinkClass =
  (
    ...classes: (classType | nullish | UiLinkProp<string | false>)[]
  ): UiLinkProp<string> =>
  (args) => {
    return clsx(
      ...classes.map((className) =>
        className instanceof Function ? className(args) : className,
      ),
    );
  };

export const UiButtonOrLink = forwardRef(ButtonOrLink);
