import { getRandomImage } from "@gb-adviser/ui";
import { api, ApiTag } from "../index.ts";

export type AuthProfileOutput = {
  name: string;
  avatar: string;
};
export type AuthProfileInput = void;

export const authProfileEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    authProfile: build.query<AuthProfileOutput, AuthProfileInput>({
      queryFn: () => ({
        data: {
          name: "Саша Смелая",
          avatar: getRandomImage(),
        },
      }),
      providesTags: [ApiTag.auth],
    }),
  }),
});

export const useAuthProfile = () =>
  authProfileEndpoint.endpoints.authProfile.useQuery();
