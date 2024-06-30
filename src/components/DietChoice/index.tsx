import { TouchableOpacityProps } from "react-native";
import { Container, DietChoiceVariant, DietColor, Title } from "./styles";

interface DietChoiceProps extends TouchableOpacityProps {
  variant?: DietChoiceVariant;
  isSelected: boolean;
}

export const DietChoice = ({
  variant = "positive",
  isSelected,
  ...props
}: DietChoiceProps) => {
  return (
    <Container isSelected={isSelected} {...props} variant={variant}>
      <DietColor variant={variant} />
      <Title>{variant === "positive" ? "Sim" : "Não"}</Title>
    </Container>
  );
};
