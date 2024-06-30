import { View, Text } from "react-native";
import { Container } from "./styles";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";

export const NewMeal = () => {
  return (
    <Container>
      <Header variant="neutral" title="Nova refeição" />

      <Card>
        <Form />
      </Card>
    </Container>
  );
};
