import { useNavigation } from "@react-navigation/native";

import { Container, ButtonWrapper } from "./styles";

import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Form } from "@/components/Form";
import { Button } from "@/components/Button";

export const EditMeal = () => {
  const { goBack } = useNavigation();

  const handleSubmit = () => {
    goBack();
  };
  return (
    <Container>
      <Header title="Editar refeição" variant="neutral" />

      <Card>
        <Form />

        <ButtonWrapper>
          <Button title="Salvar alterações" onPress={handleSubmit} />
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
