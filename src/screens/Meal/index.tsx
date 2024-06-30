import PencilSimpleLine from "phosphor-react-native/src/icons/PencilSimpleLine";
import Trash from "phosphor-react-native/src/icons/Trash";

import { useRoute } from "@react-navigation/native";
import {
  ButtonWrapper,
  Container,
  DateTimeInfo,
  DateTimeLabel,
  Description,
  DietStatus,
  DietTag,
  DietText,
  MealVariants,
  Title,
} from "./styles";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

interface RouteParams {
  id: string;
  variant: MealVariants;
}

export const Meal = () => {
  const route = useRoute();
  const { id, variant } = route.params as RouteParams;

  return (
    <Container variant={variant}>
      <Header variant={variant} title="Refeição" />

      <Card>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <DateTimeLabel>Data e hora</DateTimeLabel>
        <DateTimeInfo>12/08/2022 às 16:00</DateTimeInfo>

        <DietTag>
          <DietStatus variant={variant} />
          <DietText>
            {variant === "positive" ? "dentro da dieta" : "fora da dieta"}
          </DietText>
        </DietTag>

        <ButtonWrapper>
          <Button icon={PencilSimpleLine} title="Editar refeição" />
          <Button icon={Trash} title="Excluir refeição" variant="secondary" />
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
