import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";

import Plus from "phosphor-react-native/src/icons/Plus";
import { Button } from "@/components/Button";

import { Container, Title, DayList } from "./styles";
import { MealItem } from "../MealItem";

export const MealList = () => {
  const DATA = [
    {
      title: "30/06/2024",
      data: [
        { id: "1", time: "20:00", inDiet: false, name: "x-tudo" },
        { id: "2", time: "20:00", inDiet: false, name: "x-tudo" },
        { id: "3", time: "20:00", inDiet: true, name: "x-tudo" },
      ],
    },
    {
      title: "29/06/2024",
      data: [
        { id: "4", time: "20:00", inDiet: false, name: "x-tudo" },
        { id: "5", time: "20:00", inDiet: true, name: "x-tudo" },
        { id: "6", time: "20:00", inDiet: true, name: "x-tudo" },
      ],
    },
  ];

  const { navigate } = useNavigation();

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
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem details={item} onPress={() => goToMealScreen(item.id)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DayList>{title}</DayList>
        )}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
