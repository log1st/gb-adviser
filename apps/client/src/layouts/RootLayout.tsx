import { PropsWithChildren } from "react";
import { UiProvider, UiProviderProps } from "@gb-adviser/ui";
import { NavLink } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import en from "date-fns/locale/en-US";
import ru from "date-fns/locale/ru";
import { timeZoneAtom } from "../state/atoms/timeZoneAtom.ts";

export function RootLayout({ children }: PropsWithChildren) {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [timeZone] = useAtom(timeZoneAtom);

  const translate: UiProviderProps["translate"] = (
    i18nKey,
    { values, components } = {},
    string = false,
  ) => {
    if (string) {
      return t(i18nKey, values);
    }

    return (
      <Trans t={t} i18nKey={i18nKey} components={components} values={values} />
    );
  };

  return (
    <UiProvider
      Link={NavLink}
      portalTarget={document.body}
      translate={translate}
      dateFnsLocale={
        {
          en,
          ru,
        }[language] ?? en
      }
      timeZone={timeZone}
      locale={language}
    >
      {children}
    </UiProvider>
  );
}
