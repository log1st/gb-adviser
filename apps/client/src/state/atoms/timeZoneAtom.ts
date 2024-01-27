import { atomWithStorage } from "jotai/utils";
import { superStorage } from "../superStorage.ts";

export const timeZoneAtom = atomWithStorage(
  "timeZone",
  Intl.DateTimeFormat().resolvedOptions().timeZone,
  superStorage,
);
