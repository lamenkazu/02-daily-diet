import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonVariants = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariants;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  flex-direction: row;

  gap: 12px;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  ${({ theme, variant }) =>
    variant === "primary"
      ? css`
          background-color: ${theme.colors.gray_200};
        `
      : css`
          background-color: ${theme.colors.white};
          border: 2px solid ${theme.colors.gray_100};
        `}
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, variant }) =>
    variant === "primary"
      ? css`
          font-family: ${theme.fontFamily.bold};
          font-size: ${theme.fontSize.MD};
          color: ${theme.colors.white};
        `
      : css`
          font-family: ${theme.fontFamily.bold};
          font-size: ${theme.fontSize.MD};
        `}
`;
