export enum Category {
  MAIN_COURSE = "main_course",
  SOUP = "soup",
  SIDE_DISH = "side_dish",
  SALAD = "salad",
  DESSERT = "dessert"
}

export interface Dish {
  id: number;
  name: string;
  category: Category;
  description?: string;
  cooking_time?: string;
  difficulty?: string;
  ingredients?: string[];
}

export interface DinnerSuggestion {
  main_course: Dish;
  soup?: Dish;
  side_dish?: Dish;
  salad?: Dish;
  dessert?: Dish;
}

export interface CategoryResponse {
  category: Category;
  dishes: Dish[];
}

export interface RandomDishResponse {
  dish: Dish;
  category: Category;
}

export interface CategoryOption {
  value: Category;
  label: string;
  color: string;
  icon: string;
}
