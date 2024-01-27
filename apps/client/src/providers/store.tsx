import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { useEffect, useState, PropsWithChildren } from "react";
import { api } from "../api";
import { useAuthorizedUntilHook } from "../state/atoms/authorizedUntilAtom.ts";

export function AppStoreProvider({ children }: PropsWithChildren) {
  const [, setAuthorized] = useAuthorizedUntilHook();

  const [store] = useState(
    configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          thunk: {
            extraArgument: {
              setAuthorized,
            },
          },
        }).concat(api.middleware),
    }),
  );

  useEffect(() => {
    setupListeners(store.dispatch);
  }, [store.dispatch]);

  return <Provider store={store}>{children}</Provider>;
}
