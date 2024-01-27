import { arrayFrom, filteredArray } from "./array";

export type nullish = false | null | undefined;
export type classType = string;

export const clsx = (...classes: Array<classType | nullish>) => {
  return filteredArray(arrayFrom(classes)).join(" ");
};
