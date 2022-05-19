import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filter from "../screens/dashboard/Filter";
import AddTask from "../screens/tasks/AddTask";
import { COLORS, SIZES } from "../theme/Theme";
import TabNavigator from "./BottomTab";
import IconBack from "./components/IconBack";
import CattleLayout from "../screens/cattle/CattleLayout";
import CattleEdit from "../screens/cattle/CattleEdit";
import IconBackWhite from "./components/IconBackWhite";
import IconEdit from "./components/IconEdit";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  SelectHair,
  SelectSex,
  SelectBullFighter,
  SelectPlace,
} from "../screens/selects";

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
            headerLeft: () => <IconBack onPress={() => navigation.goBack()} />,
          })}
        />
        <Main.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerTitle: "Crear Tarea",
          }}
        />
        <Main.Screen
          name="CattleLayout"
          component={CattleLayout}
          options={({ navigation, route }: any) => ({
            headerLeft: () => (
              <IconBackWhite onPress={() => navigation.goBack()} />
            ),

            headerRight: () => (
              <IconEdit
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
              <IconBackWhite onPress={() => navigation.goBack()} />
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
      <Main.Group
        screenOptions={({ navigation }) => ({
          presentation: "modal",
          headerShown: false,
          headerRight: () => (
            <Icon name="close" size={24} onPress={() => navigation.goBack()} />
          ),
        })}
      >
        <Main.Screen name="SelectHair" component={SelectHair} />
        <Main.Screen name="SelectSex" component={SelectSex} />
        <Main.Screen name="SelectBullFighter" component={SelectBullFighter} />
        <Main.Screen name="SelectPlace" component={SelectPlace} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainNavigator;
