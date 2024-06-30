import { useState } from "react";
import { DietChoice } from "../DietChoice";
import { DietChoiceVariant } from "../DietChoice/styles";
import {
  ButtonWrapper,
  Container,
  DateInputView,
  HorizontalInputView,
  Input,
  InputView,
  Label,
  TextArea,
} from "./styles";
import { Button } from "../Button";
import { useNavigation } from "@react-navigation/native";

export const Form = () => {
  const [selectedDiet, setSelectedDiet] = useState<DietChoiceVariant | null>(
    null
  );

  const { navigate } = useNavigation();

  const handleSubmit = () => {
    navigate("feedback", { variant: "positive" });
  };

  return (
    <Container>
      <InputView>
        <Label>Nome</Label>
        <Input />
      </InputView>

      <InputView>
        <Label>Descrição</Label>
        <TextArea />
      </InputView>

      <HorizontalInputView>
        <DateInputView>
          <Label>Data</Label>
          <Input />
        </DateInputView>

        <DateInputView>
          <Label>Hora</Label>
          <Input />
        </DateInputView>
      </HorizontalInputView>

      <InputView>
        <Label>Está dentro da dieta?</Label>

        <HorizontalInputView>
          <DietChoice
            variant="positive"
            isSelected={selectedDiet === "positive"}
            onPress={() => setSelectedDiet("positive")}
          />
          <DietChoice
            variant="negative"
            isSelected={selectedDiet === "negative"}
            onPress={() => setSelectedDiet("negative")}
          />
        </HorizontalInputView>
      </InputView>

      <ButtonWrapper>
        <Button title="Cadastrar refeição" onPress={handleSubmit} />
      </ButtonWrapper>
    </Container>
  );
};
