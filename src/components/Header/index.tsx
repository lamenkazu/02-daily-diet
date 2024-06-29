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
  title?: string;
}

export const Header = ({ variant = "base", title }: HeaderProps) => {
  return (
    <Container variant={variant}>
      {variant === "base" ? (
        <>
          <Logo source={logo} />
          <Profile src="https://github.com/lamenkazu.png" />
        </>
      ) : (
        <>
          <BackIcon variant={variant} />
          <Title>{title}</Title>
          <View />
        </>
      )}
    </Container>
  );
};
