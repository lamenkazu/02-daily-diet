import { Container, Info, Label, StatisticCardVariants } from "./styles";

interface StatisticCardProps {
  variant?: StatisticCardVariants;
  info: number;
  label: string;
}

export const StatisticCard = ({
  variant = "base",
  info,
  label,
}: StatisticCardProps) => {
  return (
    <Container variant={variant}>
      <Info>{info}</Info>
      <Label>{label}</Label>
    </Container>
  );
};
