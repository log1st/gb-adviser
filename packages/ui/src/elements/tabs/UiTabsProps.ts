import { ReactNode } from "react";
import { Keyed, KeyedKey } from "@gb-adviser/common";
import { UiProps } from "../../types/UiProps.ts";

export type UiTabItem = {
  label?: ReactNode;
};

export type UiTabsProps = UiProps<{
  tabs?: Array<Keyed<UiTabItem>>;
  value?: KeyedKey;
  onChange?(value: KeyedKey): void;
  whitespace?: boolean;
}>;
