import { useRoute } from "@react-navigation/native";
import { Container } from "./styles";
import { Header } from "@/components/Header";

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
    </Container>
  );
};
