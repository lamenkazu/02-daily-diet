import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Meal } from "@/screens/Meal";
import { Home } from "@/screens/Home";
import { NewMeal } from "@/screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
};
