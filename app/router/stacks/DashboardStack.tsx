import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../../screens/dashboard/Dashboard";
import { COLORS, SIZES } from "../../theme/Theme";
import IconFilter from "../components/IconFilter";
import IconLogo from "../components/IconLogo";

const DashboardStack = createNativeStackNavigator();

function DashboardNavigator() {
  return (
    <DashboardStack.Navigator
      screenOptions={{ presentation: "card", headerShown: false }}
    >
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          headerShown: true,
          //headerTitle: "Torrealta(7)",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: COLORS.primary,
            fontFamily: "Montserrat-SemiBold",
            fontSize: SIZES.h1,
          },
          headerLeft: () => (
            <IconFilter
              onPress={() => {
                navigation.navigate("Filter");
              }}
            />
          ),
          headerRight: () => <IconLogo />,
        })}
      />
    </DashboardStack.Navigator>
  );
}

export default DashboardNavigator;
