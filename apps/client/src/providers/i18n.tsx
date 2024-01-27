import { I18nextProvider, initReactI18next } from "react-i18next";
import { createInstance, i18n } from "i18next";
import ICU from "i18next-icu";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { useEffect, useState, Suspense, PropsWithChildren } from "react";
import { useAtom } from "jotai";
import { set } from "lodash-es";
import { languageAtom } from "../state/atoms/languageAtom.ts";

const fallbackLng = "ru";
export const supportedLngs = [fallbackLng, "ru"].filter(
  (c, i, s) => s.indexOf(c) === i,
);

const resources = Object.entries(
  import.meta.glob("../locales/**/*", { eager: true }),
)
  .map(
    ([k, module]) =>
      [
        k
          .replace("../locales/", "")
          .replace(/\.\w+$/, "")
          .replace(/\/index$/, ""),
        (module as { default: Record<string, unknown> })?.default,
      ] as const,
  )
  .toSorted(([a], [b]) => (a.split("/").length > b.split("/").length ? 1 : -1))
  .reduce((resources, [key, value]) => {
    set(resources, key.split("/").join("."), value);

    return resources;
  }, {});

export function AppI18nProvider({ children }: PropsWithChildren) {
  const [lng, setLanguage] = useAtom(languageAtom);

  const [instance] = useState(
    createInstance({
      lng,
      fallbackLng,
      supportedLngs,
      initImmediate: true,
      interpolation: {
        escapeValue: false,
      },
      resources,
    }),
  );

  useEffect(() => {
    if (instance.isInitialized) {
      return;
    }
    instance
      .use(ICU)
      .use(I18nextBrowserLanguageDetector)
      .use(initReactI18next)
      .init();
  }, [instance]);

  useEffect(() => {
    instance.changeLanguage(lng);
  }, [lng, instance]);

  useEffect(() => {
    setLanguage(instance.language);
  }, [instance.language, setLanguage]);

  return (
    <I18nextProvider i18n={instance as i18n}>
      <Suspense>{children}</Suspense>
    </I18nextProvider>
  );
}
