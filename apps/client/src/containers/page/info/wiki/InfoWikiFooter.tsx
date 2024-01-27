import { UiButton, UiCard } from "@gb-adviser/ui";
import { useTranslation } from "react-i18next";
import { getIndexRoute } from "../../../../providers/routes.ts";

export function InfoWikiFooter() {
  const { t } = useTranslation("pages", {
    keyPrefix: "info.wiki.footer",
  });

  return (
    <>
      <UiCard
        title={t("community.title")}
        description={t("community.description")}
        action={
          <UiButton variant="link" to={getIndexRoute()}>
            {t("community.action")}
          </UiButton>
        }
      />

      <UiCard
        title={t("connect.title")}
        description={t("connect.description")}
        action={
          <UiButton variant="link" to={getIndexRoute()}>
            {t("connect.action")}
          </UiButton>
        }
      />
    </>
  );
}
