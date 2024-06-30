import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";

import styled, { css } from "styled-components/native";

export type HeaderVariant = "base" | "positive" | "negative" | "neutral";

interface ButtonStyleProps {
  variant: HeaderVariant;
}

export const Container = styled.View<ButtonStyleProps>`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 33px 0 0;

  padding: 33px 24px 0;

  ${({ theme, variant }) => {
    switch (variant) {
      case "base":
        return css``;
      case "neutral":
        return css`
          background-color: ${theme.colors.gray_500};
        `;
      case "positive":
        return css`
          background-color: ${theme.colors.green_light};
        `;
      case "negative":
        return css`
          background-color: ${theme.colors.red_light};
        `;
    }
  }}
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.colors.gray_200};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.LG};
  `}
`;

export const BackIcon = styled(ArrowLeft).attrs<ButtonStyleProps>(
  ({ theme, variant }) => {
    let color = theme.colors.gray_200;

    if (variant === "positive") {
      color = theme.colors.green_dark;
    }

    if (variant === "negative") {
      color = theme.colors.red_dark;
    }

    return {
      color,
      size: 24,
    };
  }
)``;
