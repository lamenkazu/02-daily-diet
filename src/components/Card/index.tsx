import { PropsWithChildren } from "react";
import { Container } from "./styles";

export const Card = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
