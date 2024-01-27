import { Tuple } from "@gb-adviser/common";
import { UiProps } from "../../types/UiProps.ts";

export const uiImageFits = [
  "cover",
  "contain",
  "scale-down",
  "fill",
  "none",
] as const;

export type UiImageFit = Tuple<typeof uiImageFits>;

export type UiImageProps = UiProps<{
  src?: string;
  alt?: string;
  fit?: UiImageFit;
  width?: string | number;
  height?: string | number;
}>;
