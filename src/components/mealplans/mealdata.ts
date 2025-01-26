export interface Mealdata {
  id: string;
  name: string;
  imageUrl: string;
}

export type FoodType = "Vegetarian" | "Non-Vegetarian" | "";
export type FoodOption = "Beef" | "Chicken" | "Turkey" | "Lamb" | "Pork" | "Veg" | "Treat";

export type FoodOptions = {
  [key: string]: {
    [key: string]: string; // Key-value pairs for food type and image URL
  };
};

export const mealdatas: Mealdata[] = [
  {
    id: "0",
    name: "Empty",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/empty-bowl-1300.webp?updatedAt=1737923515178?tr=w-600,h-600"
  },
  {
    id: "1",
    name: "Chicken",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-chicken-1400.webp?updatedAt=1737923514978?tr=w-600,h-600"
  },
  {
    id: "2",
    name: "Lamb",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600"
  },
  {
    id: "3",
    name: "Pork",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-pork-1400.webp?updatedAt=1737923514862?tr=w-600,h-600"
  },
  {
    id: "4",
    name: "Beef",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-beef-1400.webp?updatedAt=1737923514937?tr=w-600,h-600"
  },
  {
    id: "5",
    name: "Veg",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-veg-1100.webp?updatedAt=1737923515191?tr=w-600,h-600"
  },
  {
    id: "6",
    name: "Treat",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-treat-1400.webp?updatedAt=1737923514901?tr=w-600,h-600"
  }
];
