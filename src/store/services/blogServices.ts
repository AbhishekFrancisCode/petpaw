import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../interfaces/blog";
import { BLOG_LOAD_URL } from "@/config";

export const blogServices = createApi({
  reducerPath: "blogServices",
  baseQuery: fetchBaseQuery({ baseUrl: BLOG_LOAD_URL! }),
  endpoints: (builder) => ({
    getPosts: builder.query<Blog[], void>({
      query: () => "post.json"
    })
  })
});

export const { useGetPostsQuery } = blogServices;
