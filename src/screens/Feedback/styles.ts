import styled from "styled-components/native";
import { css } from "styled-components/native";

export type FeedbackVariants = "positive" | "negative";

interface FeedbackProps {
  variant: FeedbackVariants;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const TextView = styled.View`
  flex-direction: row;

  max-width: 100%;
`;

export const Title = styled.Text<FeedbackProps>`
  margin-bottom: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.XL};
  `}

  color: ${({ theme, variant }) =>
    variant === "positive" ? theme.colors.green_dark : theme.colors.red_dark}
`;

export const Content = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.MD};
  `}

  text-align: center;
`;

export const BoldContent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.MD};
  `}
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;

  margin: 44px 0 32px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
`;
