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
  totalWeight: string;
  baseProtin: string;
  image?: string;
  nutritionData: NutritionValue[];
  macroPercentages: {
    protein: string;
    fats: string;
    carbs: string;
  };
  ingredients: {
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
        { name: "Chicken breast, boneless, skinless", amount: "45g" },
        { name: "Chicken Liver", amount: "5g" },
        { name: "Brown rice, medium/long grain", amount: "6g", cookedAmount: "40g" },
        { name: "Mint, chopped", amount: "1/4 Tsp" },
        { name: "Coconut oil", amount: "2ml" },
        { name: "Pumpkin", amount: "25g" },
        { name: "Carrots", amount: "10g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 2,
      name: "Chicken & Sweet Potato",
      totalWeight: "99g",
      baseProtin: "chicken",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Chicken breast, boneless, skinless", amount: "45g" },
        { name: "Chicken Liver", amount: "5g" },
        { name: "Foxtail Millet", amount: "6g", cookedAmount: "20g" },
        { name: "Mint/Coriander, chopped", amount: "1/4 Tsp" },
        { name: "Coconut oil", amount: "2g/ml" },
        { name: "Sweet Potatoes", amount: "10g" },
        { name: "Spinach", amount: "3g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" },
        { name: "Flaxseed powder", amount: "0.1g" }
      ]
    },
    {
      id: 3,
      name: "Grain Free Chicken",
      totalWeight: "96g",
      baseProtin: "chicken",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Chicken breast, boneless, skinless", amount: "60g" },
        { name: "Chicken Liver", amount: "5g" },
        { name: "Mint/coriander, chopped", amount: "1/4 Tsp" },
        { name: "Coconut oil", amount: "2.5g/ml" },
        { name: "Pumpkin", amount: "25g" },
        { name: "Beetroot", amount: "3g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 4,
      name: "Fish and Bottle Gourd",
      totalWeight: "97g",
      baseProtin: "fish",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "White fish, boneless", amount: "25g", cookedAmount: "25g" },
        { name: "Little/Foxtail Millet", amount: "6g", cookedAmount: "25g" },
        { name: "White rice, medium", amount: "6g", cookedAmount: "20g" },
        { name: "Coconut oil", amount: "2g/ml" },
        { name: "Bottlegourd", amount: "25g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 5,
      name: "Fish and Brocolli",
      totalWeight: "77g",
      baseProtin: "fish",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "White fish, boneless", amount: "25g" },
        { name: "Little/Foxtail Millet", amount: "6g", cookedAmount: "20g" },
        { name: "White rice, medium", amount: "4.5g", cookedAmount: "15g" },
        { name: "Coconut oil", amount: "2g/ml" },
        { name: "Broccoli", amount: "5g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" },
        { name: "Egg, whole, boiled", amount: "", cookedAmount: "10g" },
        { name: "Chia seeds", amount: "0.1g" }
      ]
    },
    {
      id: 6,
      name: "Grain Free Fish Meal",
      totalWeight: "80g",
      baseProtin: "fish",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "White fish, boneless", amount: "38g" },
        { name: "Coconut oil", amount: "2g/ml" },
        { name: "Sweet Potatoes/Potatoes", amount: "20g" },
        { name: "Carrots", amount: "10g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" },
        { name: "Egg, whole, boiled", amount: "", cookedAmount: "10g" }
      ]
    },
    {
      id: 7,
      name: "Mutton and Sweet Potatoe",
      totalWeight: "98g",
      baseProtin: "mutton",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Mutton, boneless, lean", amount: "50g" },
        { name: "Mutton Liver", amount: "5g" },
        { name: "Brown rice (medium/long grain)", amount: "4.5g", cookedAmount: "15g" },
        { name: "Coriander, chopped", amount: "1/4 Tsp" },
        { name: "Coconut oil", amount: "2ml" },
        { name: "Sweet Potatoes/White Potatoes", amount: "20g" },
        { name: "French/Green beans", amount: "6g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 8,
      name: "Mutton and Pumpkin",
      totalWeight: "101g",
      baseProtin: "mutton",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Mutton, boneless, lean", amount: "50g" },
        { name: "Mutton Liver", amount: "5g" },
        { name: "Brown rice, medium/long grain", amount: "7.5g", cookedAmount: "25g" },
        { name: "Coriander, chopped", amount: "1/4 Tsp" },
        { name: "Coconut oil", amount: "2g/ml" },
        { name: "Pumpkin", amount: "15g" },
        { name: "Spinach", amount: "4g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 9,
      name: "Grain Free Mutton Meal",
      totalWeight: "87g",
      baseProtin: "mutton",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Mutton, boneless, lean", amount: "65g" },
        { name: "Mutton Liver", amount: "5g" },
        { name: "Coriander/Mint, chopped", amount: "1/4 Tsp" },
        { name: "Coconut oil", amount: "3g/ml" },
        { name: "Sweet potatoes", amount: "10g" },
        { name: "French/Cluster/Green beans", amount: "4g" },
        { name: "Eggshell powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 10,
      name: "Soya and Rice",
      totalWeight: "69g",
      baseProtin: "veg",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Soya chunks", amount: "10g" },
        { name: "White rice, medium/long grain", amount: "7.5g", cookedAmount: "25g" },
        { name: "Coriander/Green Peas/Mint", amount: "for garnishing" },
        { name: "Coconut oil", amount: "4g/ml" },
        { name: "Sweet Potatoes/White Potatoes", amount: "20g" },
        { name: "Pumpkin", amount: "6g" },
        { name: "Flaxseed Powder", amount: "1/8 Tsp" }
      ]
    },
    {
      id: 11,
      name: "Paneer and Brown Rice",
      totalWeight: "81g",
      baseProtin: "veg",
      image:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600",
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
        { name: "Paneer", amount: "15g" },
        { name: "White/Brown rice, medium/long grain", amount: "14g", cookedAmount: "45g" },
        { name: "Coriander/Mint", amount: "for garnishing" },
        { name: "Coconut oil", amount: "2g/ml" },
        { name: "Bottlegourd", amount: "15g" },
        { name: "Carrots", amount: "4g" },
        { name: "Flaxseed Powder", amount: "1/8 Tsp" }
      ]
    }
  ]
};
