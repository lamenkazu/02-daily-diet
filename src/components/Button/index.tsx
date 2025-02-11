import { useTheme } from "styled-components/native";
import { ButtonVariants, Container, Title } from "./styles";
import { Icon } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  icon?: Icon;
  title: string;
  variant?: ButtonVariants;
}

export const Button = ({
  icon: Icon,
  title,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <Container variant={variant} {...props}>
      {Icon && (
        <Icon color={variant === "primary" ? colors.white : colors.gray_100} />
      )}
      <Title variant={variant}>{title}</Title>
    </Container>
  );
};
