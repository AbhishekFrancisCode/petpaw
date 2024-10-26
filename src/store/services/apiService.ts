import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { COOKIE_AUTH, baseURL } from "../../config";

const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      const token = localStorage.getItem(COOKIE_AUTH!);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),

  endpoints: () => ({})
});

export default apiService;
