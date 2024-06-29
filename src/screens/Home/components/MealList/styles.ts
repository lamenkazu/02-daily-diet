import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.MD};
  `}

  margin-bottom: 10px;
`;

export const DayList = styled.Text`
  margin: 36px 0 12px;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.LG};
  `}
`;
