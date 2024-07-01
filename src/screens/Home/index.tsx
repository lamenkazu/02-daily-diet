import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MealList } from "./components/MealList";
import {
  Container,
  Statistic,
  StatisticIcon,
  StatisticSubtitle,
  StatisticTitle,
} from "./styles";

import { Header } from "@/components/Header";
import { useCallback, useState } from "react";
import { getStatistics } from "@/storage/meals/getStatistics";
import { StatisticsProps } from "@/storage/meals/MealStorageDTO";

export const Home = () => {
  const [statistics, setStatistics] = useState<StatisticsProps>(
    {} as StatisticsProps
  );
  const { navigate } = useNavigation();

  const colorVariant = statistics.dietPercentage < 50 ? "negative" : "positive";

  const goToStatisticsScreen = () => {
    navigate("statistics", {
      variant: colorVariant,
    });
  };

  useFocusEffect(
    useCallback(() => {
      const fetchStatisticsData = async () => {
        const data = await getStatistics();
        setStatistics(data);
      };

      fetchStatisticsData();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Statistic variant={colorVariant} onPress={goToStatisticsScreen}>
        <StatisticIcon variant={colorVariant} />
        <StatisticTitle>{statistics.dietPercentage}%</StatisticTitle>
        <StatisticSubtitle>das refeições dentro da dieta</StatisticSubtitle>
      </Statistic>

      <MealList />
    </Container>
  );
};
