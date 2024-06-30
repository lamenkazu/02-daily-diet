import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;

  padding: 0 24px;

  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalCard = styled.View`
  align-items: center;
  justify-content: center;

  padding: 40px 24px 24px;

  border-radius: 8px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.LG};
  `}

  text-align: center;
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;
