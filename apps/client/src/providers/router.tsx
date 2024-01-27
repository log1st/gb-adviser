import { lazy, Suspense, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { getAuthRoute, getIndexRoute, getInfoWikiRoute } from "./routes.ts";
import { AuthorizedGuard } from "../containers/AuthorizedGuard.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import { RootLayout } from "../layouts/RootLayout.tsx";

const InfoWikiPage = lazy(() => import("../pages/info/wiki.tsx"));
const AuthPage = lazy(() => import("../pages/auth.tsx"));

export function AppRouterProvider() {
  const [router] = useState(
    createBrowserRouter([
      {
        path: getIndexRoute().pathname,
        element: (
          <Suspense>
            <RootLayout>
              <Outlet />
            </RootLayout>
          </Suspense>
        ),
        children: [
          {
            path: getIndexRoute().pathname,
            element: (
              <AuthorizedGuard auth>
                <MainLayout />
              </AuthorizedGuard>
            ),
            children: [
              {
                path: getIndexRoute().pathname,
                element: <div>Index page for example</div>,
              },
              {
                path: getInfoWikiRoute().pathname,
                element: <InfoWikiPage />,
              },
            ],
          },
          {
            path: getAuthRoute().pathname,
            element: (
              <AuthorizedGuard guest>
                <AuthPage />
              </AuthorizedGuard>
            ),
          },
        ],
      },
    ]),
  );

  return <RouterProvider router={router} />;
}
