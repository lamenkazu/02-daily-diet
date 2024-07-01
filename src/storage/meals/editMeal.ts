import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMeals } from "./fetchMeals";
import { MealItem } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "../storageConfig";

export const editMeal = async (updatedMeal: MealItem) => {
  try {
    const storedMeals = await fetchMeals();

    // Encontrar o grupo de refeições pela data
    const updatedMeals = storedMeals.map((mealGroup) => {
      if (mealGroup.title === updatedMeal.date) {
        // Atualizar a refeição no grupo
        const updatedData = mealGroup.data.map((meal) =>
          meal.id === updatedMeal.id ? updatedMeal : meal
        );

        return {
          ...mealGroup,
          data: updatedData,
        };
      }

      return mealGroup;
    });

    // Converter a lista atualizada para JSON e armazenar no Async Storage
    const mealList = JSON.stringify(updatedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, mealList);
  } catch (error) {
    throw error;
  }
};
