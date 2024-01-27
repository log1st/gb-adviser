import { UiButton, UiInput, UiInfoWikiPage } from "@gb-adviser/ui";
import { useTranslation } from "react-i18next";
import { RichField, RichForm } from "@gb-adviser/form";
import { getIndexRoute } from "../../providers/routes.ts";
import { InfoWikiSidebar } from "../../containers/page/info/wiki/InfoWikiSidebar.tsx";
import { InfoWikiFooter } from "../../containers/page/info/wiki/InfoWikiFooter.tsx";
import { InfoWikiContent } from "../../containers/page/info/wiki/InfoWikiContent.tsx";

export default function InfoWikiPage() {
  const { t } = useTranslation("pages", {
    keyPrefix: "info.wiki",
  });

  const onSearch = (e: unknown) => {
    alert(JSON.stringify(e, null, 2));
  };

  return (
    <UiInfoWikiPage
      back={
        <UiButton
          variant="pageBack"
          before="arrow-left-bold"
          label={t("back")}
          to={getIndexRoute()}
        />
      }
      search={
        <RichForm defaultValues={{ search: "" }} mutate={onSearch}>
          <RichField name="search">
            <UiInput
              type="search"
              before="magnifier"
              placeholder={t("search.placeholder")}
            />
          </RichField>
        </RichForm>
      }
      title={t("title")}
      menu={<InfoWikiSidebar />}
      footer={<InfoWikiFooter />}
    >
      <InfoWikiContent />
    </UiInfoWikiPage>
  );
}
