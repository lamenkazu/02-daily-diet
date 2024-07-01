import { ButtonWrapper, Container, ModalCard, Title } from "./styles";
import { Button } from "../Button";

interface ModalProps {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const StyledModal = ({ title, onCancel, onConfirm }: ModalProps) => {
  return (
    <Container>
      <ModalCard>
        <Title> {title} </Title>

        <ButtonWrapper>
          <Button variant="secondary" title="Cancelar" onPress={onCancel} />
          <Button title="Sim, excluir" onPress={onConfirm} />
        </ButtonWrapper>
      </ModalCard>
    </Container>
  );
};
