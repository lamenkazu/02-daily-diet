import { fetchMeals } from "./fetchMeals";
import { MealItem } from "./MealStorageDTO";

export const getMealById = async (id: string): Promise<MealItem | null> => {
  try {
    const storedMeals = await fetchMeals();

    for (const mealGroup of storedMeals) {
      for (const meal of mealGroup.data) {
        if (meal.id === id) {
          return meal;
        }
      }
    }

    return null; // Retorna null se a refeição não for encontrada
  } catch (error) {
    throw error;
  }
};
