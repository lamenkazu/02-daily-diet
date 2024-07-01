import { useCallback, useEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Modal } from "react-native";

import PencilSimpleLine from "phosphor-react-native/src/icons/PencilSimpleLine";
import Trash from "phosphor-react-native/src/icons/Trash";

import {
  ButtonWrapper,
  Container,
  DateTimeInfo,
  DateTimeLabel,
  Description,
  DietStatus,
  DietTag,
  DietText,
  MealVariants,
  Title,
} from "./styles";

import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { StyledModal } from "@/components/StyledModal";
import { MealItem } from "@/storage/meals/MealStorageDTO";
import { getMealById } from "@/storage/meals/getMealById";
import { removeMealById } from "@/storage/meals/removeMealById";

interface RouteParams {
  id: string;
  variant: MealVariants;
}

export const Meal = () => {
  const [meal, setMeal] = useState<MealItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const { navigate } = useNavigation();
  const route = useRoute();
  const { id, variant } = route.params as RouteParams;

  const goToEditMeal = () => {
    navigate("edit", { id });
  };

  const handleRemove = async () => {
    await removeMealById(id);
    navigate("home");
  };

  useFocusEffect(
    useCallback(() => {
      const fetchMealData = async () => {
        const data = await getMealById(id);
        setMeal(data);
      };

      fetchMealData();
    }, [])
  );

  return (
    <>
      <Container variant={variant}>
        <Header variant={variant} title="Refeição" />

        <Card>
          <Title>{meal?.name}</Title>
          <Description>{meal?.description}</Description>

          <DateTimeLabel>Data e hora</DateTimeLabel>
          <DateTimeInfo>
            {meal?.date} às {meal?.time}
          </DateTimeInfo>

          <DietTag>
            <DietStatus variant={variant} />
            <DietText>
              {variant === "positive" ? "dentro da dieta" : "fora da dieta"}
            </DietText>
          </DietTag>

          <ButtonWrapper>
            <Button
              icon={PencilSimpleLine}
              title="Editar refeição"
              onPress={goToEditMeal}
            />
            <Button
              icon={Trash}
              title="Excluir refeição"
              variant="secondary"
              onPress={() => setModalVisible(true)}
            />
          </ButtonWrapper>
        </Card>
      </Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <StyledModal
          title="Deseja realmente excluir o registro da refeição?"
          onCancel={() => setModalVisible(false)}
          onConfirm={handleRemove}
        />
      </Modal>
    </>
  );
};
