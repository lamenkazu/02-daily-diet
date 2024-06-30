import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DietChoice } from "../DietChoice";
import { DietChoiceVariant } from "../DietChoice/styles";
import {
  Container,
  DateInputView,
  HorizontalInputView,
  Input,
  InputView,
  Label,
  TextArea,
} from "./styles";

export interface MealForm {
  name: string;
  description: string;
  date: string;
  time: string;
  inDiet: boolean;
}

interface FormProps {
  setMealForm: Dispatch<SetStateAction<MealForm>>;
}

export const Form = ({ setMealForm }: FormProps) => {
  const [selectedDiet, setSelectedDiet] = useState<DietChoiceVariant | null>(
    null
  );

  const handleSelectedDiet = (choice: DietChoiceVariant) => {
    setSelectedDiet(choice);

    setMealForm((prevState) => ({
      ...prevState,
      inDiet: choice === "positive" ? true : false,
    }));
  };

  return (
    <Container>
      <InputView>
        <Label>Nome</Label>
        <Input
          onChangeText={(e) =>
            setMealForm((prevState) => {
              return {
                ...prevState,
                name: e,
              };
            })
          }
        />
      </InputView>

      <InputView>
        <Label>Descrição</Label>
        <TextArea
          onChangeText={(e) =>
            setMealForm((prevState) => {
              return {
                ...prevState,
                description: e,
              };
            })
          }
        />
      </InputView>

      <HorizontalInputView>
        <DateInputView>
          <Label>Data</Label>
          <Input
            onChangeText={(e) =>
              setMealForm((prevState) => {
                return {
                  ...prevState,
                  date: e,
                };
              })
            }
          />
        </DateInputView>

        <DateInputView>
          <Label>Hora</Label>
          <Input
            onChangeText={(e) =>
              setMealForm((prevState) => {
                return {
                  ...prevState,
                  time: e,
                };
              })
            }
          />
        </DateInputView>
      </HorizontalInputView>

      <InputView>
        <Label>Está dentro da dieta?</Label>

        <HorizontalInputView>
          <DietChoice
            variant="positive"
            isSelected={selectedDiet === "positive"}
            onPress={() => handleSelectedDiet("positive")}
          />
          <DietChoice
            variant="negative"
            isSelected={selectedDiet === "negative"}
            onPress={() => handleSelectedDiet("negative")}
          />
        </HorizontalInputView>
      </InputView>
    </Container>
  );
};
