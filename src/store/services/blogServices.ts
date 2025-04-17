import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogServices = createApi({
  reducerPath: "blogServices",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4321/api/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => "post.json"
    })
  })
});

export const { useGetPostsQuery } = blogServices;
