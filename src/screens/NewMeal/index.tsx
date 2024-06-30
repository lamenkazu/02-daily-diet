import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonWrapper } from "./styles";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Form, MealForm } from "@/components/Form";
import { Button } from "@/components/Button";
import { Alert } from "react-native";

export const NewMeal = () => {
  const { navigate } = useNavigation();

  const [mealForm, setMealForm] = useState<MealForm>({} as MealForm);

  const handleSubmit = () => {
    const { name, description, inDiet, date, time } = mealForm;

    if (
      name.length === 0 ||
      description.length === 0 ||
      !inDiet ||
      date.length === 0 ||
      time.length === 0
    ) {
      return Alert.alert(
        "Nova Refeição",
        "Preencha todos os campos para cadastrar a refeição!"
      );
    }

    //TODO cadastrar refeição no storage.

    navigate("feedback", { variant: "positive" });
  };
  return (
    <Container>
      <Header variant="neutral" title="Nova refeição" />

      <Card>
        <Form setMealForm={setMealForm} />

        <ButtonWrapper>
          <Button title="Cadastrar refeição" onPress={handleSubmit} />
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
