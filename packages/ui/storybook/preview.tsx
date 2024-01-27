import type { Preview } from "@storybook/react";

import { ReactNode, useState } from "react";
import enUS from "date-fns/locale/en-US";
import { get } from "lodash-es";
import {
  UiLinkProp,
  UiLinkProps,
  UiProvider,
  UiProviderProps,
  UiTranslationOptions,
} from "../src";

const translations: Record<
  string,
  ReactNode | ((options?: UiTranslationOptions) => ReactNode)
> = {};

function Link({ to, children, className, style, ...e }: UiLinkProps) {
  const opts = <S = unknown,>(i: UiLinkProp<S>): S =>
    i instanceof Function
      ? i({
          isActive: false,
          isPending: false,
          isTransitioning: false,
        })
      : i;

  return (
    <a {...e} href={to} className={opts(className)} style={opts(style)}>
      {opts(children)}
    </a>
  );
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const translate: UiProviderProps["translate"] = (
        key: string,
        options,
      ) => {
        if (!(key in translations)) {
          return key;
        }

        const tr = get(translations, key);

        if (typeof tr === "string") {
          return Object.entries(options?.values || {}).reduce(
            (a, [k, v]) => a.replaceAll(`{${k}}`, v as string),
            tr,
          );
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (tr as any)(options);
      };

      const [portalTarget] = useState<HTMLElement | null>(null);

      return (
        <UiProvider
          Link={Link}
          locale="en-US"
          dateFnsLocale={enUS}
          timeZone="UTC"
          translate={translate}
          portalTarget={portalTarget}
        >
          <Story />
        </UiProvider>
      );
    },
  ],
};

export default preview;
