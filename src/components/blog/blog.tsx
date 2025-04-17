"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetPostsQuery } from "@/store/services/blogServices";

const BlogPosts = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <h1>Recent Blog Posts</h1>
      {posts!.map((post: any) => (
        <div key={post.slug} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <small>{new Date(post.date).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
