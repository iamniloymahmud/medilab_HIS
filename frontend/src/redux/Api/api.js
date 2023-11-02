import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const hospitalApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_base_url,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.global?.token;
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  reducerPath: "hospital",
  endpoints: (builder) => ({}),
});

export default hospitalApi;
