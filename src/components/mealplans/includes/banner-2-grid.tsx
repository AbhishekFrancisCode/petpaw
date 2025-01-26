import React from "react";

interface MealOption {
  name: string;
  price: string;
  description: string;
  tag: string;
  recipes: string[];
}

const DogMealPlan: React.FC = () => {
  const mealOption: MealOption = {
    name: "Fresh",
    price: "Starting at $1.57 a meal",
    description:
      "The pinnacle of quality and nutrition, Ollie's Fresh recipes are made from real meat, fruits, veggies, and grains, so you can give your pup the best of the best each and every day.",
    tag: "PREMIUM",
    recipes: [
      "Chicken Dish with Carrots",
      "Lamb Dish with Cranberries",
      "Pork Dish with Apples",
      "Beef Dish with Sweet Potatoes",
      "Turkey Dish with Blueberries"
    ]
  };

  return (
    <div className="min-h-screen bg-stone-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Dog Meal Plans & Food Delivery</h1>
          <p className="mt-2">
            Our recipes are 100% human-grade and expertly balanced for complete nutrition.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 bg-stone-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold">{mealOption.name}</h2>
              <span className="bg-black text-white text-xs px-2 py-1 rounded">
                {mealOption.tag}
              </span>
            </div>

            <p className="text-lg font-medium">{mealOption.price}</p>
            <p className="mt-2 mb-6">{mealOption.description}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {mealOption.recipes.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded shadow-sm transform -rotate-3 hover:rotate-0 transition-transform"
                >
                  <div className="text-blue-600 font-bold">Ollie</div>
                  <div className="text-sm">{recipe}</div>
                </div>
              ))}
            </div>

            <button className="w-full bg-rose-700 text-white py-3 px-6 rounded-full hover:bg-rose-800 transition-colors">
              Create a Full Fresh Plan
            </button>
          </div>

          <div className="md:w-1/2 bg-stone-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/800/600"
              alt="Dog eating from bowl"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogMealPlan;
