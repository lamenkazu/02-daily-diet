import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;

  margin-top: 36px;
  border-radius: 20px 20px 0 0;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.white};

  align-items: center;
`;
