"use client";
import Button from "@/sb-ui/button/button";
import Image from "next/image";
import bowlImage from "../../../../public/images/img/food_bowl.png";

import ginger from "../../../../public/images/img/ginger.png";
import parsley from "../../../../public/images/img/parsley.png";
import protien from "../../../../public/images/img/protien.png";
import amla from "../../../../public/images/img/amla.png";
import ashwagandha from "../../../../public/images/img/ashwagandha.png";
import veggies from "../../../../public/images/img/veggies.png";
import basil from "../../../../public/images/img/basil.png";
import tumaric from "../../../../public/images/img/tumaric.png";

export interface Item {
  id: string;
  image: any;
  title: string;
  subtitle: string;
}

interface ItemCardProps {
  item: Item;
}

interface ItemGridProps {
  items: Item[];
  items1: Item[];
  items2: Item[];
}

const items: Item[] = [
  { id: "1", image: ginger, title: "Ginger", subtitle: "For Gut Detox" },
  { id: "2", image: parsley, title: "Parsley", subtitle: "Rich in Folic acids & Antioxidants" }
];
const items1: Item[] = [
  { id: "3", image: protien, title: "Chicken ", subtitle: "High Quality Protein" },
  { id: "4", image: amla, title: "Amla", subtitle: "Soothe Skin Irritations & Allergies" },
  {
    id: "5",
    image: ashwagandha,
    title: "Ashwagandha",
    subtitle: "Regulatges Immune System & Blood Sugar"
  }
];
const items2: Item[] = [
  { id: "6", image: veggies, title: "Pumkin", subtitle: "Helps Skin & Coat Health" },
  { id: "7", image: basil, title: "Basil", subtitle: "Vitamins K, A, and C" },
  { id: "8", image: tumaric, title: "Tumaric", subtitle: "Anti-Inflammatory Properties" }
];

export default function IngredientsUsed() {
  const url = "/images/img/background-wood.jpg";
  return (
    <section
      className="place-content-center max-h-[900px]"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="mx-auto min-h-[900px] grid grid-rows-10 grid-cols-1 lg:grid-rows-1 lg:grid-cols-10 bg-[#ffffff] bg-opacity-50">
        <div className="order-2 lg:order-2 flex flex-col row-span-3 lg:col-span-3  min-w-full ">
          <div className="flex w-full h-full relative overflow-hidden">
            <Image
              key={0}
              src={bowlImage}
              alt={""}
              //   objectPosition="right"
              className="object-cover object-top lg:object-left "
              fill={true}
              onError={(e) => {
                console.error("Image load failed:", e);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col order-1 lg:order-1 lg:pl-36  row-span-7 lg:col-span-7 place-items-center">
          <text className="py-6 text-5xl font-bold *:">Only real ingredients</text>
          <ItemGrid items={items} items1={items1} items2={items2} />
        </div>
      </div>
    </section>
  );
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-transparent">
      <Image
        src={item.image}
        alt={item.title}
        className="size-32 object-cover mb-2 bg-transparent max-w-32"
      />
      <h3 className="text-lg font-bold text-gray-800 ">{item.title}</h3>
      <p className="text-sm text-gray-600 max-w-60 text-center">{item.subtitle}</p>
    </div>
  );
};

const ItemGrid: React.FC<ItemGridProps> = ({ items, items1, items2 }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-3">
        {items1.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3">
        {items2.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
