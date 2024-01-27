import { ChangeEventHandler, ReactNode } from "react";
import { Tuple } from "@gb-adviser/common";
import { UiProps } from "../../../types/UiProps.ts";
import { IconName } from "../../icon";

export type UiInputTextType = {
  type: "text" | "password" | "search";
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export type UiInputNumberType = {
  type: "number";
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export type UiInputTextareaType = {
  type: "textarea";
  rows?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

type UiInputType = UiInputTextType | UiInputTextareaType | UiInputNumberType;

export const uiInputVariants = ["headerSearch", "primary"] as const;

export type UiInputVariant = Tuple<typeof uiInputVariants>;

export type UiInputProps = UiProps<
  {
    before?: IconName | ReactNode;
    placeholder?: string;
    variant?: UiInputVariant;
  } & UiInputType
>;
