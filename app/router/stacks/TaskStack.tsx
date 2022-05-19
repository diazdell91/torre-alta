import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../context/auth/auth.provider";
import TasksLayout from "../../screens/tasks/TasksLayout";
import { COLORS, SIZES } from "../../theme/Theme";
import IconAdd from "../components/IconAdd";
import IconLogOut from "../components/IconLogOut";

const TaskStack = createNativeStackNavigator();

function TaskNavigator() {
  const { signOut } = useAuth();
  return (
    <TaskStack.Navigator
      screenOptions={{ presentation: "card", headerShown: false }}
    >
      <TaskStack.Screen
        name="Tasks"
        component={TasksLayout}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Tareas",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: COLORS.primary,
            fontFamily: "Montserrat-SemiBold",
            fontSize: SIZES.h1,
          },
          headerLeft: () => (
            <IconAdd
              onPress={() => {
                navigation.navigate("AddTask");
              }}
            />
          ),
          headerRight: () => <IconLogOut onPress={() => signOut()} />,
        })}
      />
    </TaskStack.Navigator>
  );
}

export default TaskNavigator;
