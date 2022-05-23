import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "../../components";
import { useAuth } from "../../context/auth/auth.provider";
import TasksLayout from "../../screens/tasks/TasksLayout";
import { COLORS, SIZES } from "../../theme/Theme";

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
            <IconButton
              name="Plus"
              onPress={() => {
                navigation.navigate("AddTask");
              }}
            />
          ),
          headerRight: () => (
            <IconButton name="LogOut" onPress={() => signOut()} />
          ),
        })}
      />
    </TaskStack.Navigator>
  );
}

export default TaskNavigator;
