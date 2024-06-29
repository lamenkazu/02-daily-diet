import { useNavigation } from "@react-navigation/native";
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
  const { navigate } = useNavigation();

  const goToStatisticsScreen = () => {
    navigate("statistics", { variant: "negative" });
  };

  return (
    <Container>
      <Header />
      <Statistic onPress={goToStatisticsScreen}>
        <StatisticIcon />
        <StatisticTitle>90,86%</StatisticTitle>
        <StatisticSubtitle>das refeições dentro da dieta</StatisticSubtitle>
      </Statistic>

      <MealList />
    </Container>
  );
};
