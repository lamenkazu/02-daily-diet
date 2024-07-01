import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

import { Container, ButtonWrapper } from "./styles";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Form, MealForm } from "@/components/Form";
import { Button } from "@/components/Button";
import { addMeal } from "@/storage/meals/addMeal";

export const NewMeal = () => {
  const { navigate } = useNavigation();

  const [mealForm, setMealForm] = useState<MealForm>({} as MealForm);

  const handleSubmit = async () => {
    const { name, description, inDiet, date, time } = mealForm;

    //Verifica se os campos são ou vazios ou nulos
    const validateFields = [name, description, date, time];
    const isEmptyOrUndefined = (field: string | undefined) =>
      field === undefined || field.length === 0;

    if (validateFields.some(isEmptyOrUndefined) || inDiet === undefined) {
      return Alert.alert(
        "Nova Refeição",
        "Preencha todos os campos para cadastrar a refeição!"
      );
    }

    // Cria um novo MealItem com um ID único
    const newMeal = {
      id: String(uuid.v4()),
      name,
      description,
      date,
      time,
      inDiet,
    };

    try {
      await addMeal(newMeal);
      navigate("feedback", { variant: "positive" });
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível cadastrar a refeição. Tente novamente."
      );
    }
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
