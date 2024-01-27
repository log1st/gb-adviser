import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export enum ApiTag {
  auth = "auth",
}

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
  tagTypes: Object.values(ApiTag),
  reducerPath: "api",
});
