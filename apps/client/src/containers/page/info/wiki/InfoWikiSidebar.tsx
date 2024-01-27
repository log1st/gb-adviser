import { UiSidebar, UiSidebarItemProps } from "@gb-adviser/ui";
import { useTranslation } from "react-i18next";
import { Keyed } from "@gb-adviser/common";
import { useMemo } from "react";
import { getInfoWikiRoute } from "../../../../providers/routes.ts";

export function InfoWikiSidebar() {
  const { t } = useTranslation("pages", {
    keyPrefix: "info.wiki.menu",
  });

  const items = useMemo<Array<Keyed<UiSidebarItemProps>>>(
    () => [
      {
        key: "onboarding",
        label: t("onboarding"),
        to: getInfoWikiRoute(),
      },
      {
        key: "profile",
        label: t("profile"),
      },
      {
        key: "common",
        label: t("common"),
      },
      {
        key: "additional",
        label: t("additional"),
      },
      {
        key: "requests",
        label: t("requests"),
      },
      {
        key: "stats",
        label: t("stats"),
      },
    ],
    [t],
  );

  return (
    <UiSidebar.Group>
      {items.map((item) => (
        <UiSidebar.Item {...item} key={item.key} />
      ))}
    </UiSidebar.Group>
  );
}
