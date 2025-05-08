import MealPlan from "./mealplan";

export interface Mealdata {
  id: string;
  name: string;
  value: string;
  imageUrl: string;
  meal_info?: {};
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
    value: "empty",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/empty-bowl-1300.webp?updatedAt=1737923515178?tr=w-600,h-600"
  },
  {
    id: "1",
    name: "Chicken",
    value: "chicken",
    imageUrl:
      "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/chicken%20bowl_1.png?updatedAt=1744913914651"
  },
  {
    id: "2",
    name: "Mutton",
    value: "mutton",
    imageUrl:
      "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/mutton%20bowl_1.png?updatedAt=1744913914655"
  },
  {
    id: "3",
    name: "Fish",
    value: "fish",
    imageUrl:
      "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/fish%20bowl_1.png?updatedAt=1744913914541"
  },
  // {
  //   id: "4",
  //   name: "Beef",
  //   imageUrl:
  //     "https://ik.imagekit.io/funlogic/meal/bowl-beef-1400.webp?updatedAt=1737923514937?tr=w-600,h-600"
  // },
  {
    id: "4",
    name: "Veg",
    value: "veg",
    imageUrl:
      "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/veg%20bowl_1.png?updatedAt=1744913914683"
  },
  {
    id: "5",
    name: "Treat",
    value: "treat",
    imageUrl:
      "https://ik.imagekit.io/funlogic/meal/bowl-treat-1400.webp?updatedAt=1737923514901?tr=w-600,h-600"
  }
];

export interface NutritionValue {
  name: string;
  valuesPer100g: string;
  valuesPerServing: string;
  subItems?: NutritionValue[];
  highlighted?: boolean;
}

export interface DogMeal {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  totalWeight: string;
  baseProtin: string;
  image?: string;
  image1?: string;
  nutritionData: NutritionValue[];
  allergies: string[];
  macroPercentages: {
    protein: string;
    fats: string;
    carbs: string;
  };
  ingredients: {
    image: string;
    name: string;
    amount: string;
    cookedAmount?: string;
  }[];
}

export interface DogNutritionLabelProps {
  meals: DogMeal[];
}

export const MealPlanData: DogNutritionLabelProps = {
  meals: [
    {
      id: 1,
      name: "Chicken & Pumpkin",
      totalWeight: "100g",
      baseProtin: "chicken",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-chicken-1400.webp?updatedAt=1737923514978?tr=w-600,h-600",
      title: "Chicken & Pumpkin Bowl",
      subtitle: "Balanced Protein Nutrition",
      description:
        "A carefully crafted meal featuring boneless, skinless chicken breast and chicken liver, complemented by nutrient-rich pumpkin. This recipe includes brown rice for sustained energy, chopped mint for added freshness, and coconut oil for healthy fats. Carrots provide additional vitamins, while eggshell powder ensures optimal calcium intake. Designed to support overall canine health with a balanced blend of proteins, complex carbohydrates, and essential micronutrients.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/chicken%20and%20pumpkin.JPG?updatedAt=1744916572853",
      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "111kcal",
          valuesPerServing: "68kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "3.6g",
          valuesPerServing: "2.2g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "7.1g",
          valuesPerServing: "4.3g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "11.7g",
          valuesPerServing: "7.1g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "43%",
        fats: "30%",
        carbs: "27%"
      },
      ingredients: [
        { image: "", name: "Chicken Liver", amount: "5g" },
        { image: "", name: "Brown rice, medium/long grain", amount: "6g", cookedAmount: "40g" },
        { image: "", name: "Chicken breast, boneless, skinless", amount: "45g" },
        { image: "", name: "Mint, chopped", amount: "1/4 Tsp" },
        { image: "", name: "Coconut oil", amount: "2ml" },
        { image: "", name: "Pumpkin", amount: "25g" },
        { image: "", name: "Carrots", amount: "10g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" }
      ],
      allergies: ["chicken", "rice", "egg"]
    },
    {
      id: 2,
      name: "Chicken & Sweet Potato",
      totalWeight: "99g",
      baseProtin: "chicken",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Chicken & Sweet Potato Bowl",
      subtitle: "Grain-Friendly Nutrition",
      description:
        "A wholesome meal combining boneless, skinless chicken breast and chicken liver with foxtail millet. Enhanced with chopped mint and coriander, this recipe includes sweet potato for complex carbohydrates and spinach for additional nutrients. Coconut oil provides healthy fats, while eggshell and flaxseed powders contribute essential minerals and omega-3 fatty acids. Perfectly balanced for dogs seeking a nutrient-dense, grain-inclusive diet.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/chicken%20and%20sweet%20potato.JPG?updatedAt=1744914958396",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "109kcal",
          valuesPerServing: "66kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "3.6g",
          valuesPerServing: "2.2g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "6g",
          valuesPerServing: "3.7g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "11.8g",
          valuesPerServing: "7.2g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "46%",
        fats: "31%",
        carbs: "23%"
      },
      ingredients: [
        { image: "", name: "Chicken breast, boneless, skinless", amount: "45g" },
        { image: "", name: "Chicken Liver", amount: "5g" },
        { image: "", name: "Foxtail Millet", amount: "6g", cookedAmount: "20g" },
        { image: "", name: "Mint/Coriander, chopped", amount: "1/4 Tsp" },
        { image: "", name: "Coconut oil", amount: "2g/ml" },
        { image: "", name: "Sweet Potatoes", amount: "10g" },
        { image: "", name: "Spinach", amount: "3g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" },
        { image: "", name: "Flaxseed powder", amount: "0.1g" }
      ],
      allergies: ["chicken", "rice", "egg", "seeds"]
    },
    {
      id: 3,
      name: "Grain Free Chicken",
      totalWeight: "96g",
      baseProtin: "chicken",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Grain Free Chicken Bowl",
      subtitle: "Protein-Packed Grain-Free Option",
      description:
        "A grain-free alternative featuring boneless, skinless chicken breast and chicken liver. Packed with nutrient-rich ingredients like chopped mint, coriander, coconut oil, pumpkin, and beetroot. Supplemented with eggshell and flaxseed powders for comprehensive nutritional support. Ideal for dogs with grain sensitivities or those preferring a lower-carbohydrate diet while maintaining optimal protein intake.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/chicken%20and%20pumpkin%20meal%20with%20ingredients.png?updatedAt=1744558667018",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "107kcal",
          valuesPerServing: "65kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "4.3g",
          valuesPerServing: "2.6g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "1.5g",
          valuesPerServing: "0.9g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "14.5g",
          valuesPerServing: "8.8g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "56%",
        fats: "38%",
        carbs: "6%"
      },
      ingredients: [
        { image: "", name: "Chicken breast, boneless, skinless", amount: "60g" },
        { image: "", name: "Chicken Liver", amount: "5g" },
        { image: "", name: "Mint/coriander, chopped", amount: "1/4 Tsp" },
        { image: "", name: "Coconut oil", amount: "2.5g/ml" },
        { image: "", name: "Pumpkin", amount: "25g" },
        { image: "", name: "Beetroot", amount: "3g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" }
      ],
      allergies: ["chicken", "rice", "egg"]
    },
    {
      id: 4,
      name: "Fish and Bottle Gourd",
      totalWeight: "97g",
      baseProtin: "fish",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Fish & Bottle Gourd Bowl",
      subtitle: "Gentle Aquatic Protein Blend",
      description:
        "A delicate meal featuring boneless white fish paired with little/foxtail millet and white rice. Enriched with coconut oil and bottle gourd, this recipe provides a mild, easily digestible protein source. Eggshell powder ensures calcium supplementation. Perfect for dogs with sensitive stomachs or those requiring a lighter protein option.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/fish%20and%20bottle%20gaurd%20meal.png?updatedAt=1744562305357",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "115kcal",
          valuesPerServing: "70kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "3.3g",
          valuesPerServing: "2g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "12g",
          valuesPerServing: "7.3g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "7.7g",
          valuesPerServing: "4.7g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "26%",
        fats: "26%",
        carbs: "48%"
      },
      ingredients: [
        { image: "", name: "White fish, boneless", amount: "25g", cookedAmount: "25g" },
        { image: "", name: "Little/Foxtail Millet", amount: "6g", cookedAmount: "25g" },
        { image: "", name: "Rice", amount: "6g", cookedAmount: "20g" },
        { image: "", name: "Coconut oil", amount: "2g/ml" },
        { image: "", name: "Bottlegourd", amount: "25g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" }
      ],
      allergies: ["fish", "rice", "egg"]
    },
    {
      id: 5,
      name: "Fish and Brocolli",
      totalWeight: "77g",
      baseProtin: "fish",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Fish & Broccoli Bowl",
      subtitle: "Nutrient-Dense Seafood Meal",
      description:
        "A nutritionally complete dish combining boneless white fish with little/foxtail millet and white rice. Enhanced with coconut oil, fresh broccoli, and a whole boiled egg. Eggshell powder and chia seeds provide additional minerals and omega-3 fatty acids. An excellent choice for dogs seeking a varied, nutrient-rich protein source with added green vegetables.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/fish%20and%20broccolie.png?updatedAt=1744560337427",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "111kcal",
          valuesPerServing: "68kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "4.4g",
          valuesPerServing: "2.7g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "8.8g",
          valuesPerServing: "5.4g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "8.6g",
          valuesPerServing: "5.2g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "32%",
        fats: "36%",
        carbs: "32%"
      },
      ingredients: [
        { image: "", name: "White fish", amount: "25g" },
        { image: "", name: "Little/Foxtail Millet", amount: "6g", cookedAmount: "20g" },
        { image: "", name: "Rice", amount: "4.5g", cookedAmount: "15g" },
        { image: "", name: "Coconut oil", amount: "2g/ml" },
        { image: "", name: "Broccoli", amount: "5g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" },
        { image: "", name: "Egg, whole, boiled", amount: "", cookedAmount: "10g" },
        { image: "", name: "Chia seeds", amount: "0.1g" }
      ],
      allergies: ["fish", "rice", "egg", "seeds"]
    },
    {
      id: 6,
      name: "Grain Free Fish Meal",
      totalWeight: "80g",
      baseProtin: "fish",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Grain Free Fish Bowl",
      subtitle: "Lean Seafood Alternative",
      description:
        "A grain-free fish meal featuring boneless white fish with coconut oil. Complemented by sweet potatoes or white potatoes and carrots, this recipe provides a nutrient-dense, low-grain option. Eggshell powder and a whole boiled egg ensure calcium and protein supplementation. Ideal for dogs with grain sensitivities or those preferring a lighter, vegetable-enhanced diet.",

      image1:
        "https://ik.imagekit.io/funlogic/pawfull/Grain%20Free%20Fish%20Bowl.JPG?updatedAt=1744915199219",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "102kcal",
          valuesPerServing: "62kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "5g",
          valuesPerServing: "3g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "4.4g",
          valuesPerServing: "2.7g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "9.3g",
          valuesPerServing: "5.7g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "38%",
        fats: "44%",
        carbs: "18%"
      },
      ingredients: [
        { image: "", name: "White fish, boneless", amount: "38g" },
        { image: "", name: "Coconut oil", amount: "2g/ml" },
        { image: "", name: "Sweet Potatoes/Potatoes", amount: "20g" },
        { image: "", name: "Carrots", amount: "10g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" },
        { image: "", name: "Egg, whole, boiled", amount: "", cookedAmount: "10g" }
      ],
      allergies: ["fish", "rice", "egg"]
    },
    {
      id: 7,
      name: "Mutton and Sweet Potato",
      totalWeight: "98g",
      baseProtin: "mutton",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Mutton & Sweet Potato Bowl",
      subtitle: "Rich Protein Traditional Blend",
      description:
        "A hearty meal featuring lean, boneless mutton and mutton liver with brown rice. Enhanced with chopped coriander, coconut oil, sweet potatoes, and French green beans. Eggshell powder provides essential calcium. This recipe offers a traditional protein source with complex carbohydrates and varied vegetable nutrition, suitable for dogs seeking a robust, nutrient-rich meal.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/mutton%20and%20sweet%20potato.png?updatedAt=1744919898013",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "110kcal",
          valuesPerServing: "67kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "3.6g",
          valuesPerServing: "2.2g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "7.9g",
          valuesPerServing: "4.8g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "7.7g",
          valuesPerServing: "4.7g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "43%",
        fats: "29%",
        carbs: "28%"
      },
      ingredients: [
        { image: "", name: "Mutton, boneless, lean", amount: "50g" },
        { image: "", name: "Mutton Liver", amount: "5g" },
        { image: "", name: "Brown rice (medium/long grain)", amount: "4.5g", cookedAmount: "15g" },
        { image: "", name: "Coriander, chopped", amount: "1/4 Tsp" },
        { image: "", name: "Coconut oil", amount: "2ml" },
        { image: "", name: "Sweet Potatoes/White Potatoes", amount: "20g" },
        { image: "", name: "French/Green beans", amount: "6g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" }
      ],
      allergies: ["Mutton", "rice", "egg"]
    },
    {
      id: 8,
      name: "Mutton and Pumpkin",
      totalWeight: "101g",
      baseProtin: "mutton",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Mutton & Pumpkin Bowl",
      subtitle: "Seasonal Protein Comfort",
      description:
        "A nourishing combination of lean, boneless mutton and mutton liver with brown rice. Flavored with chopped coriander and coconut oil, this recipe includes nutrient-rich pumpkin and spinach. Eggshell powder ensures balanced mineral intake. A perfect blend of protein, complex carbohydrates, and seasonal vegetables for optimal canine nutrition.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/mutton%20and%20pumpkin%20with%20ingredients.png?updatedAt=1744558666954",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "114kcal",
          valuesPerServing: "70kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "3.6g",
          valuesPerServing: "2.2g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "7.4g",
          valuesPerServing: "4.5g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "12.2g",
          valuesPerServing: "7.4g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "44%",
        fats: "30%",
        carbs: "26%"
      },
      ingredients: [
        { image: "", name: "Mutton, boneless, lean", amount: "50g" },
        { image: "", name: "Mutton Liver", amount: "5g" },
        { image: "", name: "Brown rice, medium/long grain", amount: "7.5g", cookedAmount: "25g" },
        { image: "", name: "Coriander, chopped", amount: "1/4 Tsp" },
        { image: "", name: "Coconut oil", amount: "2g/ml" },
        { image: "", name: "Pumpkin", amount: "15g" },
        { image: "", name: "Spinach", amount: "4g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" }
      ],
      allergies: ["Mutton", "rice", "egg"]
    },
    {
      id: 9,
      name: "Grain Free Mutton Meal",
      totalWeight: "87g",
      baseProtin: "mutton",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Grain Free Mutton Bowl",
      subtitle: "Pure Protein Grain-Free Option",
      description:
        "A grain-free mutton meal featuring lean, boneless mutton and mutton liver. Enhanced with chopped coriander and mint, coconut oil, sweet potatoes, and French green beans. Eggshell powder provides essential minerals. Designed for dogs requiring a high-protein, grain-free diet with diverse vegetable nutrition.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/mutton%20and%20sweet%20potato%20meal%20with%20ingredients.png?updatedAt=1744558667143",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "113kcal",
          valuesPerServing: "69kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "4.7g",
          valuesPerServing: "2.9g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "2.1g",
          valuesPerServing: "1.3g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "14.6g",
          valuesPerServing: "8.9g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "53%",
        fats: "39%",
        carbs: "8%"
      },
      ingredients: [
        { image: "", name: "Mutton, boneless, lean", amount: "65g" },
        { image: "", name: "Mutton Liver", amount: "5g" },
        { image: "", name: "Coriander/Mint, chopped", amount: "1/4 Tsp" },
        { image: "", name: "Coconut oil", amount: "3g/ml" },
        { image: "", name: "Sweet potatoes", amount: "10g" },
        { image: "", name: "French/Cluster/Green beans", amount: "4g" },
        { image: "", name: "Eggshell powder", amount: "1/8 Tsp" }
      ],
      allergies: ["Mutton", "rice", "egg"]
    },
    {
      id: 10,
      name: "Soya and Rice",
      totalWeight: "69g",
      baseProtin: "veg",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Soya & Rice Bowl",
      subtitle: "Plant-Powered Vegetarian Option",
      description:
        "A vegetarian meal combining soya chunks and white rice. Enriched with coriander, green peas, mint, and coconut oil. Includes sweet potatoes, white potatoes, and pumpkin for varied nutrition. Flaxseed powder adds omega-3 fatty acids. An excellent option for dogs requiring a plant-based protein source with comprehensive nutritional profile.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/soya%20pumpkin%20veg%20meal%20with%20ingredients.png?updatedAt=1744558667123",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "119kcal",
          valuesPerServing: "73kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "4.1g",
          valuesPerServing: "2.5g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "14.4g",
          valuesPerServing: "8.8g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "6.1g",
          valuesPerServing: "3.7g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "21%",
        fats: "31%",
        carbs: "48%"
      },
      ingredients: [
        { image: "", name: "Soya chunks", amount: "10g" },
        { image: "", name: "White rice, medium/long grain", amount: "7.5g", cookedAmount: "25g" },
        { image: "", name: "Coriander/Green Peas/Mint", amount: "for garnishing" },
        { image: "", name: "Coconut oil", amount: "4g/ml" },
        { image: "", name: "Sweet Potatoes/White Potatoes", amount: "20g" },
        { image: "", name: "Pumpkin", amount: "6g" },
        { image: "", name: "Flaxseed Powder", amount: "1/8 Tsp" }
      ],
      allergies: ["Soya", "rice", "egg"]
    },
    {
      id: 11,
      name: "Paneer and Brown Rice",
      totalWeight: "81g",
      baseProtin: "veg",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
      title: "Paneer & Brown Rice Bowl",
      subtitle: "Vegetarian Protein Blend",
      description:
        "A vegetarian meal featuring paneer with white or brown rice. Enhanced with coriander and mint, coconut oil, bottle gourd, and carrots. Flaxseed powder provides additional nutritional benefits. A lighter protein option for dogs seeking a vegetarian diet with varied vegetable nutrition.",
      image1:
        "https://ik.imagekit.io/funlogic/pawfull/paneer%20meal%20with%20paneer.png?updatedAt=1744919710603",

      nutritionData: [
        {
          name: "Energy",
          valuesPer100g: "116kcal",
          valuesPerServing: "71kcal"
        },
        {
          name: "Total Fat",
          valuesPer100g: "5.3g",
          valuesPerServing: "3.2g"
        },
        {
          name: "Total Carbohydrates",
          valuesPer100g: "14.4g",
          valuesPerServing: "8.8g",
          subItems: [
            {
              name: "Fibre",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            },
            {
              name: "Total Sugars",
              valuesPer100g: "0g",
              valuesPerServing: "0g"
            }
          ]
        },
        {
          name: "Protein",
          valuesPer100g: "4.2g",
          valuesPerServing: "2.6g",
          highlighted: true
        }
      ],
      macroPercentages: {
        protein: "14%",
        fats: "39%",
        carbs: "47%"
      },
      ingredients: [
        { image: "", name: "Paneer", amount: "15g" },
        {
          image: "",
          name: "White/Brown rice, medium/long grain",
          amount: "14g",
          cookedAmount: "45g"
        },
        { image: "", name: "Coriander/Mint", amount: "for garnishing" },
        { image: "", name: "Coconut oil", amount: "2g/ml" },
        { image: "", name: "Bottlegourd", amount: "15g" },
        { image: "", name: "Carrots", amount: "4g" },
        { image: "", name: "Flaxseed Powder", amount: "1/8 Tsp" }
      ],
      allergies: ["dairy", "seeds", "rice"]
    }
  ]
};
