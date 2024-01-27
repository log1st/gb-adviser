import { atomWithStorage } from "jotai/utils";
import { superStorage } from "../superStorage.ts";

export const sidebarExpandedAtom = atomWithStorage(
  "sidebarCollapsed",
  false,
  superStorage,
);
