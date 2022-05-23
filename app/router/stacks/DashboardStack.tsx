import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon, IconButton } from "../../components";
import { Logo } from "../../components/icons";
import Dashboard from "../../screens/dashboard/Dashboard";
import { COLORS, SIZES } from "../../theme/Theme";

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
          headerRight: () => <Logo />,
        })}
      />
    </DashboardStack.Navigator>
  );
}

export default DashboardNavigator;
