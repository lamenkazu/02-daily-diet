import { Text, View } from "react-native";
import {
  BackIcon,
  Container,
  HeaderVariant,
  Logo,
  Profile,
  Title,
} from "./styles";

import logo from "@/assets/logo.png";

interface HeaderProps {
  variant?: HeaderVariant;
}

export const Header = ({ variant = "base" }: HeaderProps) => {
  return (
    <Container variant={variant}>
      {variant === "base" ? (
        <>
          <Logo source={logo} />
          <Profile src="https://github.com/lamenkazu.png" />
        </>
      ) : (
        <>
          <BackIcon />
          <Title>Nova refeição</Title>
          <View />
        </>
      )}
    </Container>
  );
};
