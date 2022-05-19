import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/auth/auth.provider";
import LoadingScreen from "../screens/loading/LoadingScreen";
import { COLORS } from "../theme/Theme";
import MainNavigator from "./Main";
import AuthNavigator from "./stacks/AuthStack";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000",
    background: COLORS.white,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const RootStack = createNativeStackNavigator();

function RootNavigator() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading && (
        <RootStack.Screen name="SplashScreen" component={LoadingScreen} />
      )}

      {!isAuthenticated ? (
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            presentation: "card",
          }}
        />
      ) : (
        <RootStack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            presentation: "card",
          }}
        />
      )}
    </RootStack.Navigator>
  );
}
