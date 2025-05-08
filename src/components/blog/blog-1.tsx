"use client";
import React, { useMemo } from "react";
import { useGetPostsQuery } from "@/store/services/blogServices";
import { Blog } from "@/store/interfaces/blog";
import { BLOG_LOAD_IMG_URL } from "@/config";

interface NewsItem {
  source: string;
  title: string;
  timeAgo: string;
  author?: string;
  sourceIcon?: string;
}

export const BlogPage = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  const blogList = useMemo(() => {
    console.log(posts);
    return posts!;
  }, [posts]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  // Use provided items or default to sample data
  const displayItems: Blog[] = blogList.length > 0 ? blogList : [];

  // Take only the first item for the left column and up to 3 items for the right column
  const mainItem: Blog = displayItems[0];
  const sideItems: Blog[] = displayItems.slice(1, 4);

  // Dynamic grid layout based on number of side items
  const getGridLayout = (): string => {
    if (sideItems.length === 0) {
      return "grid-cols-1";
    }
    return "grid-cols-1 md:grid-cols-2";
  };

  return (
    blogList && (
      <div className="container relative mx-auto p-4 place-content-center max-h-[500px]">
        <div className={`grid ${getGridLayout()} gap-6 max-h-[400px]`}>
          {/* First column - spans all 3 rows on desktop by default */}
          {/* If there are no side items, it takes full width (col span 2) */}
          <div
            className={`${sideItems.length === 0 ? "md:col-span-2" : "md:row-span-3"} bg-white rounded-lg shadow-lg overflow-hidden max-h-[400px]`}
          >
            <div className="relative">
              <img
                src={`${BLOG_LOAD_IMG_URL!}${mainItem.heroImage.src}`}
                alt={mainItem.title}
                className="w-full h-64 md:h-full md:max-h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                <h2 className="text-white text-xl font-bold">{mainItem.title}</h2>
                <a
                  href={`/posts/${mainItem.slug}`}
                  className="text-blue-300 hover:text-blue-200 mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Second column - dynamic layout based on number of items */}
          {sideItems.length > 0 && (
            <div className="flex flex-col space-y-6 md:max-h-[400px] ">
              {/* Case 1: Single item that spans all 3 rows */}
              {sideItems.length === 1 && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="flex flex-col h-full">
                    <div className="h-1/2">
                      <img
                        src={`${BLOG_LOAD_IMG_URL!}${sideItems[0].heroImage.src}`}
                        alt={sideItems[0].title}
                        className="w-full h-full object-cover md:max-h-[400px] "
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3">{sideItems[0].title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        Detailed information about {sideItems[0].title}. This content spans the full
                        height of the right column.
                      </p>
                      <a
                        href={`/posts/${sideItems[0].slug}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Case 2: Two items - first spans 2 rows, second spans 1 row */}
              {sideItems.length === 2 && (
                <>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-grow">
                    <div className="flex h-full">
                      <div className="h-48">
                        <img
                          src={`${BLOG_LOAD_IMG_URL!}${sideItems[0].heroImage.src}`}
                          alt={sideItems[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="text-lg font-bold mb-2">{sideItems[0].title}</h3>
                        <p className="text-gray-600 mb-3">
                          This item takes up 2/3 of the right column space.
                        </p>
                        <a
                          href={`/posts/${sideItems[0].slug}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="sm:w-1/3 md:w-full">
                        <img
                          src={`${BLOG_LOAD_IMG_URL!}${sideItems[1].heroImage.src}`}
                          alt={sideItems[1].title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <div className="p-4 sm:w-2/3 md:w-full">
                        <h3 className="text-lg font-bold mb-2">{sideItems[1].title}</h3>
                        <a
                          href={`/posts/${sideItems[1].slug}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Case 3: Three items - each spans 1 row */}
              {sideItems.length === 3 && (
                <>
                  {sideItems.map((item: Blog, index: number) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="sm:w-1/3 md:w-full">
                          <img
                            src={`${BLOG_LOAD_IMG_URL!}${item.heroImage.src}`}
                            alt={item.title}
                            className="w-full h-40 object-cover"
                          />
                        </div>
                        <div className="p-4 sm:w-2/3 md:w-full">
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <a
                            href={`/posts/${item.slug}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    )
  );
};
