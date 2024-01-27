import {
  createContext,
  CSSProperties,
  FC,
  FocusEventHandler,
  ForwardedRef,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
} from "react";

import "../assets/drop.scss";
import enUS from "date-fns/locale/en-US";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Locale } from "date-fns/locale/types";
import * as React from "react";

export type UiLinkProp<Return> =
  | Return
  | ((props: {
      isActive: boolean;
      isPending: boolean;
      isTransitioning: boolean;
    }) => Return);

export type UiLinkProps = {
  ref?: ForwardedRef<HTMLAnchorElement>;
  "data-e2e"?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to: any;
  target?: string;
  className?: UiLinkProp<string | undefined>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  onFocus?: FocusEventHandler<HTMLAnchorElement>;
  onBlur?: FocusEventHandler<HTMLAnchorElement>;
  style?: UiLinkProp<CSSProperties | undefined>;
  tabIndex?: number;
  children?: UiLinkProp<ReactNode>;
  end?: boolean;
};

export type UiTranslationOptions = {
  values?: Record<string, unknown>;
  components?: Record<string, ReactNode>;
};

export type UiContextValue = {
  Link: FC<UiLinkProps>;
  timeZone?: string;
  dateFnsLocale?: Locale;
  locale?: string;
  translate?(
    key: string,
    params?: {
      values?: Record<string, unknown>;
      components?:
        | readonly React.ReactElement[]
        | { readonly [tagName: string]: React.ReactElement };
    },
    string?: boolean,
  ): ReactNode;
  portalTarget?: HTMLElement | null;
};

const UiContext = createContext<UiContextValue>({
  Link: "a" as unknown as FC<UiLinkProps>,
  locale: "en-US",
  dateFnsLocale: enUS,
  timeZone: "UTC",
  translate: (key) => key as unknown as string,
  portalTarget: null,
});

export const useUiContext = () => useContext(UiContext);

export type UiProviderProps = PropsWithChildren<UiContextValue>;

export function UiProvider({
  children,
  Link,
  dateFnsLocale = enUS,
  timeZone = "UTC",
  locale = "en-US",
  translate = (key) => key,
  portalTarget = null,
}: UiProviderProps) {
  const value = useMemo<UiContextValue>(
    () => ({
      Link,
      dateFnsLocale,
      timeZone,
      locale,
      translate,
      portalTarget,
    }),
    [Link, dateFnsLocale, timeZone, locale, translate, portalTarget],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
