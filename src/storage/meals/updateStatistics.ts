import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMeals } from "./fetchMeals";
import { STATISTIC_COLLECTION } from "../storageConfig";
import { StatisticsProps } from "./MealStorageDTO";

export const updateStatistics = async () => {
  try {
    const storedMeals = await fetchMeals();

    let totalMeals = 0;
    let mealsInDiet = 0;
    let mealsOutDiet = 0;
    let currentSequence = 0;
    let bestSequence = 0;

    storedMeals.forEach((mealGroup) => {
      mealGroup.data.forEach((meal) => {
        totalMeals++;
        if (meal.inDiet) {
          mealsInDiet++;
          currentSequence++;
          if (currentSequence > bestSequence) {
            bestSequence = currentSequence;
          }
        } else {
          mealsOutDiet++;
          currentSequence = 0;
        }
      });
    });

    const dietPercentage =
      totalMeals > 0
        ? parseFloat(((mealsInDiet / totalMeals) * 100).toFixed(2))
        : 0;

    const statistics: StatisticsProps = {
      dietPercentage,
      currentSequence,
      bestSequence,
      totalMeals,
      mealsInDiet,
      mealsOutDiet,
    };

    await AsyncStorage.setItem(
      STATISTIC_COLLECTION,
      JSON.stringify(statistics)
    );
  } catch (error) {
    throw error;
  }
};
