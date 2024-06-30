import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type DietChoiceVariant = "positive" | "negative";

interface DietChoiceProps {
  variant?: DietChoiceVariant;
  isSelected?: boolean;
}

export const Container = styled(TouchableOpacity)<DietChoiceProps>`
  flex-direction: row;
  gap: 10px;
  border-radius: 6px;

  width: 48%;
  height: 50px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_600};

  ${({ theme, isSelected, variant }) => {
    if (variant === "positive" && isSelected) {
      return css`
        background-color: ${theme.colors.green_light};
        border: 1px solid ${theme.colors.green_dark};
      `;
    }

    if (variant === "negative" && isSelected) {
      return css`
        background-color: ${theme.colors.red_light};
        border: 1px solid ${theme.colors.red_dark};
      `;
    }
  }}
`;

export const DietColor = styled.View<DietChoiceProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;

  background-color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.SM};
  `}
`;
