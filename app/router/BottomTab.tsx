import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../theme/Theme";
import TabBarIcon from "./components/TabBarIcon";
import DashboardNavigator from "./stacks/DashboardStack";
import TaskNavigator from "./stacks/TaskStack";

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
      })}
    >
      <BottomTab.Screen
        name="DashboardStack"
        component={DashboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cow" color={color} />,
          tabBarLabel: "Ganadería",
        }}
      />
      <BottomTab.Screen
        name="TaskStack"
        component={TaskNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="format-list-bulleted" color={color} />
          ),
          tabBarLabel: "Tareas",
        }}
      />
    </BottomTab.Navigator>
  );
}
