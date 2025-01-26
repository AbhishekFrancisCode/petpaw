import Image from "next/image";
import image from "../../../public/images/img/dog-doodle.png";
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
                <div className="w-16 h-16 rounded-full bg-[#f8f3ef] flex items-center justify-center">
                  <Image src={image} alt="" width={40} height={40} className="" />
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
