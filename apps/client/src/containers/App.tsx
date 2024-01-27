import { AppStoreProvider } from "../providers/store.tsx";
import { AppI18nProvider } from "../providers/i18n.tsx";
import { AppRouterProvider } from "../providers/router.tsx";

export function App() {
  return (
    <AppStoreProvider>
      <AppI18nProvider>
        <AppRouterProvider />
      </AppI18nProvider>
    </AppStoreProvider>
  );
}
