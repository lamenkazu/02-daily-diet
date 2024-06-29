import {
  Container,
  DietIndicator,
  MealName,
  Time,
  TextView,
  Slash,
} from "./styles";

interface MealItemProps {
  details: {
    id: string;
    time: string;
    inDiet: boolean;
    name: string;
  };
}

export const MealItem = ({
  details: { inDiet, name, time },
}: MealItemProps) => {
  return (
    <Container>
      <TextView>
        <Time>{time}</Time>

        <Slash />

        <MealName>{name}</MealName>
      </TextView>

      <DietIndicator inDiet={inDiet} />
    </Container>
  );
};
