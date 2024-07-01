import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";

export type StatisticsVariant = "positive" | "negative";

interface StatisticProps {
  variant: StatisticsVariant;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 0 24px;
`;

export const Statistic = styled(TouchableOpacity)<StatisticProps>`
  width: 100%;
  height: 120px;

  border-radius: 8px;
  margin: 36px 0 44px;

  background-color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_light : theme.colors.red_light};

  align-items: center;
  justify-content: center;
`;

export const StatisticIcon = styled(ArrowUpRight).attrs<StatisticProps>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === "positive" ? theme.colors.green_dark : theme.colors.red_dark,
  })
)`
  position: absolute;
  top: 0;
  right: 0;

  margin: 14px;
`;

export const StatisticTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.XXL};
  `}
`;

export const StatisticSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.SM};
  `}
`;
