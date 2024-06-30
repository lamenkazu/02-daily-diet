import { Text, TouchableOpacity, View } from "react-native";
import {
  BackIcon,
  Container,
  HeaderVariant,
  Logo,
  Profile,
  Title,
} from "./styles";

import logo from "@/assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
}

export const Header = ({ variant = "base", title }: HeaderProps) => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Container variant={variant}>
      {variant === "base" ? (
        <>
          <Logo source={logo} />
          <Profile src="https://github.com/lamenkazu.png" />
        </>
      ) : (
        <>
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon variant={variant} />
          </TouchableOpacity>

          <Title>{title}</Title>

          {/* Empty View para ganhar espaço na tela */}
          <View />
        </>
      )}
    </Container>
  );
};
