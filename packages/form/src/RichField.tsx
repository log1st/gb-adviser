import {
  FieldPath,
  FieldValues,
  Controller,
  useFormContext,
} from "react-hook-form";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { arrayFrom } from "@gb-adviser/common";
import { UiFieldContainer } from "@gb-adviser/ui";
import { useRichForm } from "./RichForm.tsx";

export type RichFieldProps<Payload extends FieldValues> = PropsWithChildren<{
  name: FieldPath<Payload> | string[];
  label?: ReactNode;
  required?: boolean;
  valuePropName?: string;
  hint?: ReactNode;
}>;

export { useFormContext };

export function RichField<Payload extends FieldValues>({
  name,
  label,
  children,
  required,
  valuePropName = "value",
  hint,
}: RichFieldProps<Payload>) {
  const { control } = useFormContext();

  const realName = arrayFrom(name).join(".");

  const { namespace, keyPrefix, disabled } = useRichForm();

  const { t } = useTranslation(namespace, {
    keyPrefix,
  });

  if (!children) {
    return children;
  }

  return (
    <Controller
      render={(field) => (
        <UiFieldContainer
          label={label}
          hint={hint}
          error={
            (field.fieldState.error
              ? t(...(JSON.parse(field.fieldState.error.message!) as [string]))
              : undefined) as unknown as ReactNode
          }
          required={required}
        >
          {Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, {
                  ...field.field,
                  [valuePropName]: field.field.value,
                  disabled:
                    field.field.disabled ?? child.props.disabled ?? disabled,
                } as typeof field.field)
              : child,
          )}
        </UiFieldContainer>
      )}
      control={control}
      name={realName}
    />
  );
}
