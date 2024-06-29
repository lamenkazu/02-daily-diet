import Plus from "phosphor-react-native/src/icons/Plus";
import { SectionList, Text, View } from "react-native";

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
    {
      title: "28/06/2024",
      data: [
        { id: "7", time: "20:00", inDiet: true, name: "x-tudo" },
        { id: "8", time: "20:00", inDiet: false, name: "x-tudo" },
        { id: "9", time: "20:00", inDiet: false, name: "x-tudo" },
      ],
    },
  ];

  return (
    <Container>
      <Title>Refeições</Title>
      <Button icon={Plus} title="Nova refeição" />

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem details={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <DayList>{title}</DayList>
        )}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
