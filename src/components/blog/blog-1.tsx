"use client";
import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useGetPostsQuery } from "@/store/services/blogServices";
import dis from "../../../public/images/bg/bg-image.png";

interface NewsItem {
  source: string;
  title: string;
  timeAgo: string;
  author?: string;
  sourceIcon?: string;
}

const NewsPage: React.FC = () => {
  // const { data: posts, error, isLoading } = useGetPostsQuery();

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Something went wrong</p>;
  const newsItems: NewsItem[] = [
    {
      source: "The Guardian",
      sourceIcon: "/guardian-icon.png",
      title: "At least 28 tourists killed by suspected militants in Kashmir attack",
      timeAgo: "1 hour ago",
      author: "Aakash Hassan and Peter Beaumont"
    },
    {
      source: "The Hindu",
      sourceIcon: "/hindu-icon.png",
      title: "Asaduddin Owaisi condemns Pahalgam terror attack, expresses solidarity with victims",
      timeAgo: "29 minutes ago"
    },
    {
      source: "Reuters",
      sourceIcon: "/reuters-icon.png",
      title:
        "At least 20 feared killed in militant attack on tourists in Indian Kashmir, security officials say",
      timeAgo: "2 hours ago",
      author: "Fayaz Bukhari"
    },
    {
      source: "The Indian Express",
      sourceIcon: "/indian-express-icon.png",
      title:
        '"My husband was suddenly hit by a bullet": Odisha man on vacation with wife, son among Pahalgam attack victims',
      timeAgo: "1 hour ago",
      author: "Sujit Bisoyi"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex">
            <div className="flex flex-col w-1/2 pr-1">
              <Image
                src={dis}
                alt="Security personnel near car in Kashmir"
                width={400}
                height={320}
                className="rounded-md object-cover w-full h-full"
              />
              <div className="bg-gray-900 rounded-md px-3">
                <div className="flex items-center mb-1">
                  {newsItems[3].sourceIcon && (
                    <div className="w-6 h-6 mr-2">
                      <Image
                        src={newsItems[3].sourceIcon}
                        alt={newsItems[3].source}
                        width={24}
                        height={24}
                      />
                    </div>
                  )}
                  <span className="text-gray-400 text-sm">{newsItems[3].source}</span>
                </div>
                <h2 className="font-bold mb-1">{newsItems[3].title}</h2>
                <div className="flex items-center text-xs text-gray-400">
                  <span>{newsItems[3].timeAgo}</span>
                  {newsItems[3].author && (
                    <>
                      <span className="mx-1">•</span>
                      <span>By {newsItems[3].author}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-1 flex flex-col gap-2">
              {newsItems.slice(0, 3).map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-md p-3">
                  <div className="flex items-center mb-1">
                    {item.sourceIcon && (
                      <div className="w-6 h-6 mr-2">
                        <Image src={item.sourceIcon} alt={item.source} width={24} height={24} />
                      </div>
                    )}
                    <span className="text-gray-400 text-sm">{item.source}</span>
                  </div>
                  <h2 className="font-bold mb-1">{item.title}</h2>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>{item.timeAgo}</span>
                    {item.author && (
                      <>
                        <span className="mx-1">•</span>
                        <span>By {item.author}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center bg-gray-800 text-blue-400 py-2 px-4 rounded-md">
              <span className="mr-2">Full coverage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
