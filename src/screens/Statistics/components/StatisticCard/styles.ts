import styled from "styled-components/native";
import { css } from "styled-components/native";

export type StatisticCardVariants = "base" | "positive" | "negative";

export interface StatisticCardProps {
  variant: StatisticCardVariants;
}

export const Container = styled.View<StatisticCardProps>`
  align-items: center;

  width: 100%;
  padding: 16px;
  border-radius: 8px;

  margin-bottom: 12px;

  ${({ theme, variant }) => {
    if (variant === "base") {
      return css`
        background-color: ${theme.colors.gray_600};
      `;
    }

    if (variant === "positive") {
      return css`
        background-color: ${theme.colors.green_light};
        width: 48%;
      `;
    }

    if (variant === "negative") {
      return css`
        background-color: ${theme.colors.red_light};
        width: 48%;
      `;
    }
  }};
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.XL};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.SM};
  `}

  text-align: center;
`;
