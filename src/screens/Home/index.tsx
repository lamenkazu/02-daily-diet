import { MealList } from "./components/MealList";
import {
  Container,
  Statistic,
  StatisticIcon,
  StatisticSubtitle,
  StatisticTitle,
} from "./styles";

import { Header } from "@/components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Statistic>
        <StatisticIcon />
        <StatisticTitle>90,86%</StatisticTitle>
        <StatisticSubtitle>das refeições dentro da dieta</StatisticSubtitle>
      </Statistic>

      <MealList />
    </Container>
  );
};
