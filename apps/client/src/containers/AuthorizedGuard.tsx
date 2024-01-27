import { Navigate, To } from "react-router-dom";
import { PropsWithChildren, useEffect } from "react";
import { useAtom } from "jotai";
import { addSeconds, differenceInMilliseconds } from "date-fns";
import { authorizedUntilAtom } from "../state/atoms/authorizedUntilAtom.ts";
import { getAuthRoute, getIndexRoute } from "../providers/routes.ts";
import { useAuthRefresh } from "../api/auth/refresh.ts";

export type AuthorizedGuardProps = PropsWithChildren<{
  guest?: boolean;
  auth?: boolean;
  to?: To;
}>;

export function AuthorizedGuard({
  to,
  auth,
  guest,
  children,
}: AuthorizedGuardProps) {
  const [authorizedUntil] = useAtom(authorizedUntilAtom);

  const [refresh] = useAuthRefresh();

  useEffect(() => {
    if (!authorizedUntil) {
      return () => {};
    }

    const delay = differenceInMilliseconds(
      addSeconds(authorizedUntil, -180),
      new Date(),
    );

    const timeout = setTimeout(refresh, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [authorizedUntil, refresh]);

  if (auth && !authorizedUntil) {
    return <Navigate to={to ?? getAuthRoute()} />;
  }

  if (guest && authorizedUntil) {
    return <Navigate to={to ?? getIndexRoute()} />;
  }

  return children;
}
