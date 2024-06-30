import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@/components/Button";

import {
  BoldContent,
  ButtonWrapper,
  Container,
  Content,
  FeedbackVariants,
  TextView,
  Title,
  Image,
} from "./styles";

import positiveFeedback from "@/assets/illustration-diet-in.png";
import negativeFeedback from "@/assets/illustration-diet-out.png";

interface RouteParams {
  variant: FeedbackVariants;
}

export const Feedback = () => {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { variant } = route.params as RouteParams;

  const handleGoToHomeScreen = () => {
    navigate("home");
  };

  return (
    <Container>
      {variant === "positive" ? (
        <>
          <Title variant={variant}>Continue assim!</Title>

          <TextView>
            <Content>
              Você continua <BoldContent>dentro da dieta</BoldContent>. Muito
              bem!
            </Content>
          </TextView>
        </>
      ) : (
        <>
          <Title variant={variant}>Que pena!</Title>

          <TextView>
            <Content>
              Você <BoldContent>saiu da dieta</BoldContent> dessa vez, mas
              continue se esforçando e não desista!
            </Content>
          </TextView>
        </>
      )}

      <Image
        source={variant === "positive" ? positiveFeedback : negativeFeedback}
      />

      <ButtonWrapper>
        <Button
          title="Ir para a página inicial"
          onPress={handleGoToHomeScreen}
        />
      </ButtonWrapper>
    </Container>
  );
};
