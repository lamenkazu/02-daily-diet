export interface MealItem {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  inDiet: boolean;
}

export interface MealStorageDTO {
  title: string;
  data: MealItem[];
}
