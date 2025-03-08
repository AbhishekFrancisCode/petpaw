export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  name?: string;
  price?: string;
  tag?: string;
  totalWeight: string;
  baseProtein: string;
  nutritionData?: NutritionDaum[];
  macroPercentages?: MacroPercentages;
  ingredients?: Ingredient[];
  image: string;
  imageBanner?: string;
  imageProduct?: string;
  route_link?: string;
}

export interface NutritionDaum {
  name: string;
  valuesPer100g: string;
  valuesPerServing: string;
  subItems?: SubItem[];
  highlighted?: boolean;
}

export interface SubItem {
  name: string;
  valuesPer100g: string;
  valuesPerServing: string;
}

export interface MacroPercentages {
  protein: string;
  fats: string;
  carbs: string;
}

export interface Ingredient {
  name: string;
  amount?: string;
  cookedAmount?: string;
  image?: string;
}
