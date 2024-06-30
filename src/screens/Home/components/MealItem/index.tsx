import { TouchableOpacityProps } from "react-native";
import {
  Container,
  DietIndicator,
  MealName,
  Time,
  TextView,
  Slash,
} from "./styles";

interface MealItemProps extends TouchableOpacityProps {
  details: {
    id: string;
    time: string;
    inDiet: boolean;
    name: string;
  };
}

export const MealItem = ({
  details: { inDiet, name, time },
  ...props
}: MealItemProps) => {
  return (
    <Container {...props}>
      <TextView>
        <Time>{time}</Time>

        <Slash />

        <MealName>{name}</MealName>
      </TextView>

      <DietIndicator inDiet={inDiet} />
    </Container>
  );
};
