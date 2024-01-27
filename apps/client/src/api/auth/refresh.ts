import { addSeconds } from "date-fns";
import { api, ApiTag } from "../index.ts";
import { useAuthorizedUntilHook } from "../../state/atoms/authorizedUntilAtom.ts";

export type AuthRefreshOutput = {
  expiresAt: Date;
};
export type AuthRefreshInput = void;

export const authRefreshEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    authRefresh: build.mutation<AuthRefreshOutput, AuthRefreshInput>({
      queryFn: () => ({
        data: {
          expiresAt: addSeconds(new Date(), 900),
        },
      }),
      invalidatesTags: [ApiTag.auth],
    }),
  }),
});

export const useAuthRefresh = () => {
  const mutation = authRefreshEndpoint.endpoints.authRefresh.useMutation();

  useAuthorizedUntilHook(mutation[1].data);

  return mutation;
};
