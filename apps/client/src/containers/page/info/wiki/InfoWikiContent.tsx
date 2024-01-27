import {
  UiArticle,
  UiDelimiter,
  UiList,
  UiTabs,
  UiTabsProps,
} from "@gb-adviser/ui";
import { useTranslation } from "react-i18next";
import { randomNumber } from "@gb-adviser/common";
import { useMemo, useState } from "react";

export function InfoWikiContent() {
  const { t } = useTranslation("pages", {
    keyPrefix: "info.wiki.article",
  });

  const [votedCount] = useState(randomNumber(0, 50));

  const [voted, setVoted] = useState<boolean | null>(null);

  const [additionalTab, setAdditionalTab] = useState(11);

  const additionalTabs = useMemo<UiTabsProps["tabs"]>(
    () =>
      [11, 10, 9].map((key) => ({
        key,
        label: t(`additional.tab.${key}`),
      })),
    [t],
  );

  return (
    <UiArticle
      footer={
        <UiArticle.Block title={t("footer.title")}>
          <UiArticle.Vote
            yes={t("footer.yes")}
            no={t("footer.no")}
            summary={t("footer.summary", {
              count: votedCount,
            })}
            onVote={setVoted}
            value={voted}
          />
        </UiArticle.Block>
      }
    >
      <UiArticle.Block title={t("onboarding.title")}>
        <UiArticle.Content>{t("onboarding.description")}</UiArticle.Content>
        <UiArticle.Quote title={t("onboarding.recommendations.title")}>
          {t("onboarding.recommendations.content")}
        </UiArticle.Quote>
      </UiArticle.Block>
      <UiDelimiter />
      <UiArticle.Block title={t("beginning.title")}>
        <UiArticle.Content>{t("beginning.description")}</UiArticle.Content>
        <UiList items={t("beginning.list")} />
      </UiArticle.Block>
      <UiDelimiter />
      <UiArticle.Block title={t("additional.title")}>
        <UiTabs
          tabs={additionalTabs}
          value={additionalTab}
          onChange={setAdditionalTab}
        />
        <UiArticle.Content>{t("additional.description")}</UiArticle.Content>
      </UiArticle.Block>
    </UiArticle>
  );
}
