import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type MealVariants = "positive" | "negative";

interface MealProps {
  variant: MealVariants;
}

export const Container = styled(SafeAreaView)<MealProps>`
  flex: 1;

  background-color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_light : theme.colors.red_light};
`;

export const Title = styled.Text`
  margin-top: 46px;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.LG2};
  `}
`;
export const Description = styled.Text`
  margin: 18px 0 34px;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.MD};
  `}
`;
export const DateTimeLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.SM};
  `}
`;
export const DateTimeInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.MD};
  `}

  margin: 16px 0 28px;
`;

export const DietTag = styled.View`
  flex-direction: row;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.gray_600};

  width: 159px;

  border-radius: 1000px;

  padding: 12px 16px;

  align-items: center;
  justify-content: center;
`;

export const DietStatus = styled.View<MealProps>`
  height: 8px;
  width: 8px;

  border-radius: 999px;

  background-color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_dark : theme.colors.red_dark};
`;
export const DietText = styled.Text``;
