import { useNavigation } from "@react-navigation/native";

import { Container, ButtonWrapper } from "./styles";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";

export const NewMeal = () => {
  const { navigate } = useNavigation();

  const handleSubmit = () => {
    navigate("feedback", { variant: "positive" });
  };
  return (
    <Container>
      <Header variant="neutral" title="Nova refeição" />

      <Card>
        <Form />

        <ButtonWrapper>
          <Button title="Cadastrar refeição" onPress={handleSubmit} />
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
