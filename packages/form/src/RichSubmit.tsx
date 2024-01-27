import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRichForm } from "./RichForm.tsx";

export type RichSubmitProps = PropsWithChildren;

export function RichSubmit({ children, ...props }: RichSubmitProps) {
  const { formState } = useFormContext();

  const child = Children.only(children);

  const { namespace, keyPrefix, disabled } = useRichForm();

  const { t } = useTranslation(namespace, {
    keyPrefix,
  });

  if (!child || !isValidElement(child)) {
    return child;
  }

  return cloneElement(child, {
    ...props,
    loading: formState.isSubmitting,
    htmlType: "submit",
    label: t("submit"),
    disabled: (props as { disabled: boolean }).disabled ?? disabled,
  } as {
    loading: boolean;
    disabled: boolean;
    htmlType: "submit";
    label: ReactNode;
  });
}
