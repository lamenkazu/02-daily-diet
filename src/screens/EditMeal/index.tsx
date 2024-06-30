import { Container } from "./styles";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Form } from "@/components/Form";

export const EditMeal = () => {
  return (
    <Container>
      <Header title="Editar refeição" variant="neutral" />

      <Card>
        <Form />
      </Card>
    </Container>
  );
};
