import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "../../components";
import Dashboard from "../../screens/dashboard/Dashboard";
import { COLORS, SIZES } from "../../theme/Theme";
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
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: COLORS.primary,
            fontFamily: "Montserrat-SemiBold",
            fontSize: SIZES.h1,
          },
          headerLeft: () => (
            <IconButton
              name="Filter"
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
