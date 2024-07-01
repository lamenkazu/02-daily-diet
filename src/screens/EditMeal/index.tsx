import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, ButtonWrapper } from "./styles";

import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Form, MealForm } from "@/components/Form";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { getMealById } from "@/storage/meals/getMealById";
import { editMeal } from "@/storage/meals/editMeal";

interface RouteParams {
  id: string;
}

export const EditMeal = () => {
  const [mealForm, setMealForm] = useState<MealForm>({} as MealForm);

  const { navigate } = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const handleSubmit = async () => {
    const updatedMeal = {
      id,
      name: mealForm.name,
      description: mealForm.description,
      date: mealForm.date,
      time: mealForm.time,
      inDiet: mealForm.inDiet,
    };

    await editMeal(updatedMeal);

    navigate("meal", {
      id,
      variant: mealForm.inDiet ? "positive" : "negative",
    });
  };

  useEffect(() => {
    const fetchMealData = async () => {
      const data = await getMealById(id);

      const { name, description, date, inDiet, time } = data!;

      if (data) {
        setMealForm({
          name,
          description,
          date,
          time,
          inDiet,
        });
      }
    };

    fetchMealData();
  }, []);

  return (
    <Container>
      <Header title="Editar refeição" variant="neutral" />

      <Card>
        <Form setMealForm={setMealForm} mealForm={mealForm} isEdit />

        <ButtonWrapper>
          <Button title="Salvar alterações" onPress={handleSubmit} />
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
