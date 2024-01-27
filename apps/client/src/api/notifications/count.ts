import { api } from "../index.ts";

export type NotificationsCountOutput = number;
export type NotificationsCountInput = void;

export const notificationsCountEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    notificationsCount: build.query<
      NotificationsCountOutput,
      NotificationsCountInput
    >({
      queryFn: () => ({
        data: 5,
      }),
    }),
  }),
});

export const useNotificationsCount = () =>
  notificationsCountEndpoint.endpoints.notificationsCount.useQuery();
