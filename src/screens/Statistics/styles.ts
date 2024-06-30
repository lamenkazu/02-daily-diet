import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

interface ContainerProps {
  variant: "positive" | "negative";
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_light : theme.colors.red_light};
`;

export const Title = styled.View`
  align-items: center;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.XXL};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.SM};
  `}
`;

export const StatisticsHeading = styled.Text`
  text-align: center;
  padding: 36px 0 24px;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.SM};
  `}
`;

export const DietType = styled.View`
  flex-direction: row;

  gap: 12px;
`;
