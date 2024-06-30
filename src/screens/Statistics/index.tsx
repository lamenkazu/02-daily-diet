import { useRoute } from "@react-navigation/native";

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

export type StatisticsVariant = "positive" | "negative";

interface RouteParams {
  variant: StatisticsVariant;
}

export const Statistics = () => {
  const route = useRoute();

  const { variant } = route.params as RouteParams;

  return (
    <Container variant={variant}>
      <Header variant={variant} />

      <Title>
        <Percentage>90,86%</Percentage>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Title>

      <Card>
        <StatisticsHeading>Estatísticas gerais</StatisticsHeading>

        <StatisticCard
          label="melhor sequência de pratos dentro da dieta"
          info={4}
        />

        <StatisticCard label="refeições registradas" info={109} />

        <DietType>
          <StatisticCard
            variant="positive"
            label="refeições dentro da dieta"
            info={99}
          />
          <StatisticCard
            variant="negative"
            label="refeições fora da dieta"
            info={10}
          />
        </DietType>
      </Card>
    </Container>
  );
};
