import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface InDiet {
  inDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  padding: 20px 12px;
  border-radius: 6px;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const TextView = styled.View`
  flex: 1;
  flex-direction: row;

  gap: 12px;

  align-items: center;
`;

export const Slash = styled.View`
  height: 14px;
  width: 1px;

  background-color: ${({ theme }) => theme.colors.gray_400};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.XS};
  `}
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.MD};
  `}
`;

export const DietIndicator = styled.View<InDiet>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.colors.green_mid : theme.colors.red_mid};
`;
