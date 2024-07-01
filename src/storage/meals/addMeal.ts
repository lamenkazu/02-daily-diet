import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMeals } from "./fetchMeals";
import { MealItem, MealStorageDTO } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "../storageConfig";

export const addMeal = async (newMeal: MealItem) => {
  try {
    const storedMeals = await fetchMeals();
    const mealDate = newMeal.date;

    let updatedMeals: MealStorageDTO[] = storedMeals.map((mealGroup) => {
      if (mealGroup.title === mealDate) {
        return {
          ...mealGroup,
          data: [...mealGroup.data, newMeal],
        };
      }
      return mealGroup;
    });

    const dateExists = storedMeals.some(
      (mealGroup) => mealGroup.title === mealDate
    );

    if (!dateExists) {
      updatedMeals.push({ title: mealDate, data: [newMeal] });
    }

    const mealList = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, mealList);
  } catch (error) {
    throw error;
  }
};
