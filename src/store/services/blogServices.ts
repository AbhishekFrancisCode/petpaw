import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../interfaces/blog";

export const blogServices = createApi({
  reducerPath: "blogServices",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4321/api/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Blog[], void>({
      query: () => "post.json"
    })
  })
});

export const { useGetPostsQuery } = blogServices;
