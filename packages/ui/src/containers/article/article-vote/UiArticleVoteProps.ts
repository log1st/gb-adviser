import { ReactNode } from "react";
import { UiProps } from "../../../types/UiProps.ts";

export type UiArticleVoteProps = UiProps<{
  yes?: ReactNode;
  no?: ReactNode;
  value?: boolean;
  onVote?(value: boolean): void;
  summary?: ReactNode;
}>;
