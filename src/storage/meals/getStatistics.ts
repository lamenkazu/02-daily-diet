import AsyncStorage from "@react-native-async-storage/async-storage";
import { STATISTIC_COLLECTION } from "../storageConfig";
import { StatisticsProps } from "./MealStorageDTO";

export const getStatistics = async () => {
  try {
    const storage = await AsyncStorage.getItem(`${STATISTIC_COLLECTION}`);

    const statistics: StatisticsProps = storage ? JSON.parse(storage) : {};

    return statistics;
  } catch (error) {
    throw error;
  }
};
