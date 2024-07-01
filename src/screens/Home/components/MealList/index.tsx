import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
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
import { fetchMeals } from "@/storage/meals/fetchMeals";

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

  useFocusEffect(
    useCallback(() => {
      const fetchMealsData = async () => {
        const data = await fetchMeals();
        setMeals(data);
      };

      fetchMealsData();
    }, [])
  );

  const goToNewMealScreen = () => {
    navigate("new");
  };

  const goToMealScreen = (id: string, inDiet: boolean) => {
    navigate("meal", { id, variant: inDiet ? "positive" : "negative" });
  };

  return (
    <Container>
      <Title>Refeições</Title>
      <Button icon={Plus} title="Nova refeição" onPress={goToNewMealScreen} />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            details={item}
            onPress={() => goToMealScreen(item.id, item.inDiet)}
          />
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
