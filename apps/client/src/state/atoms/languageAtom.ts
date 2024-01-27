import { atomWithStorage } from "jotai/utils";
import { superStorage } from "../superStorage.ts";

export const languageAtom = atomWithStorage("language", "en", superStorage);
