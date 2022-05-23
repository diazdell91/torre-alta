import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPass from "../../screens/auth/ForgotPass";
import Login from "../../screens/auth/Login";

const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        presentation: "card",
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgotPass" component={ForgotPass} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
