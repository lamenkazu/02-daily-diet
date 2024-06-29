import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/screens/Home";
import { Meal } from "@/screens/Meal";
import { NewMeal } from "@/screens/NewMeal";
import { Statistics } from "@/screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
};
