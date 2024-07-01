export interface MealItem {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  inDiet: boolean;
}

export interface StatisticsProps {
  dietPercentage: number;
  currentSequence: number;
  bestSequence: number;
  totalMeals: number;
  mealsInDiet: number;
  mealsOutDiet: number;
}

export interface MealStorageDTO {
  title: string;
  data: MealItem[];
}
