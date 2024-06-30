import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;

  padding-top: 44px;

  gap: 24px;
`;

export const InputView = styled.View`
  gap: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.SM};
  `}
`;

export const TextArea = styled.TextInput.attrs(() => ({
  multiline: true,
  textAlignVertical: "top",
}))`
  width: 100%;
  min-height: 120px;
  max-height: 120px;

  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray_500};
  `}
`;

export const DateInputView = styled.View`
  gap: 8px;
  width: 48%;
`;

export const HorizontalInputView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  width: 100%;
  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray_500};
  `}
`;

export const ButtonWrapper = styled.View`
  margin-top: 40%;
`;
