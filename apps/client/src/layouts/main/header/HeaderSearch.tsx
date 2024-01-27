import { UiClassName, UiHeaderSearch, UiInput } from "@gb-adviser/ui";
import { useTranslation } from "react-i18next";
import { RichField, RichForm } from "@gb-adviser/form";

export function HeaderSearch({ className }: UiClassName) {
  const { t } = useTranslation("header", {
    keyPrefix: "search",
  });

  const onSubmit = (e: unknown) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(e, null, 2));
  };

  return (
    <UiHeaderSearch className={className}>
      <RichForm
        defaultValues={{
          search: "",
        }}
        mutate={onSubmit}
      >
        <RichField name="search">
          <UiInput
            before="magnifier"
            type="search"
            placeholder={t("placeholder")}
            variant="headerSearch"
          />
        </RichField>
      </RichForm>
    </UiHeaderSearch>
  );
}
