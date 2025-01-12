import { ReactNode, useRef, useState, useEffect } from "react";

export interface Card {
  title: string;
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
        <div key={colIndex} className="space-y-4">
          {column.map((card, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 text-[#999999] bg-[#f1e8dc] ${card.height}`}
            >
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
