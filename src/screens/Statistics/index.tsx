import { useFocusEffect, useRoute } from "@react-navigation/native";

import { Header } from "@/components/Header";

import {
  Container,
  Title,
  Percentage,
  Subtitle,
  StatisticsHeading,
  DietType,
} from "./styles";
import { Card } from "@/components/Card";
import { StatisticCard } from "./components/StatisticCard";
import { useCallback, useState } from "react";
import { getStatistics } from "@/storage/meals/getStatistics";
import { StatisticsProps } from "@/storage/meals/MealStorageDTO";

export type StatisticsVariant = "positive" | "negative";

interface RouteParams {
  variant: StatisticsVariant;
}

export const Statistics = () => {
  const [statistics, setStatistics] = useState<StatisticsProps>(
    {} as StatisticsProps
  );

  const route = useRoute();
  const { variant } = route.params as RouteParams;

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
    <Container variant={variant}>
      <Header variant={variant} />

      <Title>
        <Percentage>{statistics.dietPercentage}%</Percentage>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Title>

      <Card>
        <StatisticsHeading>Estatísticas gerais</StatisticsHeading>

        <StatisticCard
          label="melhor sequência de pratos dentro da dieta"
          info={statistics.bestSequence}
        />

        <StatisticCard
          label="refeições registradas"
          info={statistics.totalMeals}
        />

        <DietType>
          <StatisticCard
            variant="positive"
            label="refeições dentro da dieta"
            info={statistics.mealsInDiet}
          />
          <StatisticCard
            variant="negative"
            label="refeições fora da dieta"
            info={statistics.mealsOutDiet}
          />
        </DietType>
      </Card>
    </Container>
  );
};
