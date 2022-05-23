import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filter from "../screens/dashboard/Filter";
import AddTask from "../screens/tasks/AddTask";
import { COLORS, SIZES } from "../theme/Theme";
import TabNavigator from "./BottomTab";
import CattleLayout from "../screens/cattle/CattleLayout";
import CattleEdit from "../screens/cattle/CattleEdit";
import IconButton from "../components/IconButton";

const Main = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={TabNavigator} />

      <Main.Group
        screenOptions={({ navigation }) => ({
          presentation: "card",
          headerBackTitleVisible: false,
          headerBackStyle: { color: COLORS.white },
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: COLORS.primary,
            fontFamily: "Montserrat-Medium",
            fontSize: SIZES.h1,
          },
        })}
      >
        <Main.Screen
          name="Filter"
          component={Filter}
          options={({ navigation }) => ({
            headerTitle: "Filtros",
            headerLeft: () => (
              <IconButton name="Left" onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <Main.Screen
          name="AddTask"
          component={AddTask}
          options={({ navigation }) => ({
            headerTitle: "Crear Tarea",
            headerLeft: () => (
              <IconButton name="Left" onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <Main.Screen
          name="CattleLayout"
          component={CattleLayout}
          options={({ navigation, route }: any) => ({
            headerLeft: () => (
              <IconButton
                name="Left"
                color={COLORS.white2}
                onPress={() => navigation.goBack()}
              />
            ),

            headerRight: () => (
              <IconButton
                name="Edit"
                color={COLORS.white2}
                onPress={() =>
                  navigation.navigate("CattleEdit", {
                    id: route.params.id,
                    name: route.params.name,
                  })
                }
              />
            ),
            headerTitle: route.params?.name || "",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTitleStyle: {
              color: COLORS.white,
              fontFamily: "Montserrat-Medium",
              fontSize: SIZES.h1,
            },
          })}
        />
        <Main.Screen
          name="CattleEdit"
          component={CattleEdit}
          options={({ navigation, route }: any) => ({
            headerLeft: () => (
              <IconButton
                name="Left"
                color={COLORS.white2}
                onPress={() => navigation.goBack()}
              />
            ),
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTitle: route.params?.name || "",
            headerTitleStyle: {
              color: COLORS.white,
              fontFamily: "Montserrat-Medium",
              fontSize: SIZES.h1,
            },
          })}
        />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainNavigator;
