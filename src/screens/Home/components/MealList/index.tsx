import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SectionList, Text } from "react-native";

import { Button } from "@/components/Button";
import { MealItem } from "../MealItem";

import {
  Container,
  Title,
  DayList,
  EmptyComponent,
  EmptyLabel,
} from "./styles";

import Plus from "phosphor-react-native/src/icons/Plus";
/**
 * {
      title: "30/06/2024",
      data: [
        { id: "1", time: "20:00", inDiet: false, name: "x-tudo" },
        { id: "2", time: "20:00", inDiet: false, name: "x-tudo" },
        { id: "3", time: "20:00", inDiet: true, name: "x-tudo" },
      ],
    },
 */

interface MealItem {
  id: string;
  name: string;
  time: string;
  inDiet: boolean;
}

interface MealSection {
  title: string;
  data: MealItem[];
}

export const MealList = () => {
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<MealSection[]>([]);

  // const addMeals = (item: MealItem) => {
  //   setMeals([...meals, { title: "30/06/2024", data: [item] }]);
  // };

  const goToNewMealScreen = () => {
    navigate("new");
  };

  const goToMealScreen = (id: string) => {
    navigate("meal", { id, variant: "positive" });
  };

  return (
    <Container>
      <Title>Refeições</Title>
      <Button icon={Plus} title="Nova refeição" onPress={goToNewMealScreen} />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem details={item} onPress={() => goToMealScreen(item.id)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DayList>{title}</DayList>
        )}
        ListEmptyComponent={() => (
          <EmptyComponent>
            <EmptyLabel>Comece adicionando uma nova refeição!</EmptyLabel>
          </EmptyComponent>
        )}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
