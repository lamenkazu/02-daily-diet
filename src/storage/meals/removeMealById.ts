import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMeals } from "./fetchMeals";
import { MEAL_COLLECTION } from "../storageConfig";
import { updateStatistics } from "./updateStatistics";

export const removeMealById = async (id: string) => {
  try {
    const storedMeals = await fetchMeals();

    // Percorre os grupos de refeições e remove a refeição pelo id
    const updatedMeals = storedMeals
      .map((mealGroup) => {
        const filteredMeals = mealGroup.data.filter((meal) => meal.id !== id);

        return {
          ...mealGroup,
          data: filteredMeals,
        };
      })
      .filter((mealGroup) => mealGroup.data.length > 0); // Remove grupos de datas vazios

    const mealList = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, mealList);
    await updateStatistics();
  } catch (error) {
    throw error;
  }
};
