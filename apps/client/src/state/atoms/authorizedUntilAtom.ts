import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { superStorage } from "../superStorage.ts";

export const authorizedUntilAtom = atomWithStorage<false | Date>(
  "authorizedUntil",
  false,
  superStorage,
);

export const useAuthorizedUntilHook = (data?: { expiresAt: Date }) => {
  const [authorizedUntil, setAuthorizedUntil] = useAtom(authorizedUntilAtom);

  useEffect(() => {
    if (!data) {
      return;
    }
    setAuthorizedUntil(data.expiresAt);
  }, [data, setAuthorizedUntil]);

  return [authorizedUntil, setAuthorizedUntil] as const;
};
