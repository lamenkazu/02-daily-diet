import { ButtonWrapper, Container, ModalCard, Title } from "./styles";
import { Button } from "../Button";

interface ModalProps {
  title: string;
  onCancel: () => void;
}

export const StyledModal = ({ title, onCancel }: ModalProps) => {
  return (
    <Container>
      <ModalCard>
        <Title> {title} </Title>

        <ButtonWrapper>
          <Button variant="secondary" title="Cancelar" onPress={onCancel} />
          <Button title="Sim, excluir" />
        </ButtonWrapper>
      </ModalCard>
    </Container>
  );
};
