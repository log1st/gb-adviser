import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import superjson from "superjson";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const superStorage: SyncStorage<any> = {
  getItem: (key, initialValue) => {
    const value = localStorage.getItem(key);

    if (value === null) {
      return initialValue;
    }

    return superjson.parse(value);
  },
  setItem: (key, value) => {
    localStorage.setItem(key, superjson.stringify(value));
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  },
  subscribe(key, callback, initialValue) {
    const go = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        if (!e.newValue) {
          return;
        }
        callback(superjson.parse(e.newValue) ?? initialValue);
      }
    };
    window.addEventListener("storage", go);

    return () => {
      window.removeEventListener("storage", go);
    };
  },
};
