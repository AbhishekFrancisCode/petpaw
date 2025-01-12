import { ReactNode, useRef, useState, useEffect } from "react";

export interface Card {
  title: string;
  petInfo?: string;
  content: string;
  color?: string;
  height?: string;
}
const Testimonials = ({ cards }: { cards: Card[] }) => {
  const splitCards = [[], [], []] as Card[][];
  cards.forEach((card, index) => {
    splitCards[index % 3].push(card);
  });

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {splitCards.map((column, colIndex) => (
        <div key={colIndex} className="space-y-4 max-w-64">
          {column.map((card, index) => (
            <div key={index} className={`rounded-3xl p-4 text-[#999999] bg-white`}>
              <div className="flex items-start gap-3">
                {/* Circle with dog silhouette */}
                <div className="w-12 h-12 rounded-full bg-[#f8f3ef] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-[#d4b7a8]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M15 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3 6.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
                  </svg>
                </div>

                {/* Text and stars content */}
                <div className="flex flex-col">
                  <span className="font-medium text-base">{card.title}</span>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] text-gray-600">{card.petInfo}</span>
                    <div className="flex ">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-4 h-4 fill-[#d4b7a8]"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[12px] text-wrap font-extralight text[#999999] py-2">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
