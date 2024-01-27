import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FC, PropsWithChildren } from "react";

export type RichErrorProps = {
  render: FC<PropsWithChildren>;
};

export function RichError({ render: Render }: RichErrorProps) {
  const { formState } = useFormContext();

  const { t } = useTranslation();

  if (!formState.errors.root?.message) {
    return null;
  }

  return <Render>{t(formState.errors.root.message)}</Render>;
}
