import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface ContainerProps {
  variant: "positive" | "negative";
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_light : theme.colors.red_light};

  padding: 0 24px;
`;
