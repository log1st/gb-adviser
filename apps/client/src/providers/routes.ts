import { Path } from "react-router-dom";

export type TypedRoute = (
  route?: Omit<Partial<Path>, "pathname">,
) => Partial<Path>;

const getRoute =
  (pathname: Omit<Partial<Path>, "pathname"> | string): TypedRoute =>
  (route) => ({
    ...(typeof pathname === "string" ? { pathname } : pathname),
    ...route,
  });

export const getIndexRoute = getRoute("/");
export const getAuthRoute = getRoute("/auth");
export const getInfoWikiRoute = getRoute("/info/wiki");
