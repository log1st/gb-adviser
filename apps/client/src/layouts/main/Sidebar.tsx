import { UiSidebar, UiSidebarItemProps } from "@gb-adviser/ui";
import { useTranslation } from "react-i18next";
import { Keyed } from "@gb-adviser/common";
import { ReactNode, useMemo } from "react";
import { getIndexRoute, getInfoWikiRoute } from "../../providers/routes.ts";

type MenuType = {
  label?: ReactNode;
  items: Array<Keyed<UiSidebarItemProps>>;
};

export function Sidebar() {
  const { t } = useTranslation("sidebar");

  const menus = useMemo<Array<Keyed<MenuType>>>(
    () => [
      {
        key: "menu",
        items: [
          {
            key: "dashboard",
            label: t("menu.dashboard"),
            icon: "home",
            to: getIndexRoute(),
          },
          {
            key: "requests",
            label: t("menu.requests"),
            badge: 16,
            icon: "bars-list",
          },
          {
            key: "notes",
            label: t("menu.notes"),
            icon: "tag",
          },
          {
            key: "categories",
            label: t("menu.categories"),
            icon: "folder",
          },
          {
            key: "users",
            label: t("menu.users"),
            icon: "users",
          },
          {
            key: "stats",
            label: t("menu.stats"),
            icon: "chart",
          },
          {
            key: "favorites",
            label: t("menu.favorites"),
            icon: "star",
          },
          {
            key: "support",
            label: t("menu.support"),
            icon: "comment",
          },
        ],
      },
      {
        key: "info",
        label: t("info.label"),
        items: [
          {
            key: "wiki",
            label: t("info.wiki"),
            icon: "question",
            to: getInfoWikiRoute(),
          },
          {
            key: "updates",
            label: t("info.updates"),
            icon: "medal",
          },
        ],
      },
      {
        key: "settings",
        label: t("settings.label"),
        items: [
          {
            key: "profile",
            label: t("settings.profile"),
            icon: "user",
          },
          {
            key: "settings",
            label: t("settings.settings"),
            icon: "cog",
          },
        ],
      },
    ],
    [t],
  );

  return (
    <UiSidebar>
      {menus.map((menu) => (
        <UiSidebar.Group key={menu.key}>
          {menu.label && (
            <UiSidebar.Label key="__label">{menu.label}</UiSidebar.Label>
          )}
          {menu.items.map((item) => (
            <UiSidebar.Item {...item} key={item.key} />
          ))}
        </UiSidebar.Group>
      ))}
    </UiSidebar>
  );
}
