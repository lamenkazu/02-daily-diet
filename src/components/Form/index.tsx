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
  mealForm?: MealForm;
  isEdit?: boolean;
  setMealForm: Dispatch<SetStateAction<MealForm>>;
}

export const Form = ({ setMealForm, isEdit, mealForm }: FormProps) => {
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

  useEffect(() => {
    if (mealForm && isEdit !== undefined) {
      setSelectedDiet(mealForm.inDiet ? "positive" : "negative");
    }
  }, [mealForm, isEdit]);

  return (
    <Container>
      <InputView>
        <Label>Nome</Label>
        <Input
          value={mealForm?.name}
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
          value={mealForm?.description}
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
            value={mealForm?.date}
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
            value={mealForm?.time}
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
