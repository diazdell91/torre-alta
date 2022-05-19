import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Input, Notifications } from "../../components";
import { useAuth } from "../../context/auth/auth.provider";
import { COLORS, SIZES } from "../../theme/Theme";
import { signIn } from "../../apis/auth";

type Props = any;

const Login = ({ navigation }: Props) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const { login } = useAuth();

  const handdleLogin = async () => {
    setIsLoading(true);
    if (email === "" || pass === "") {
      setIsVisible(true);
      setError("Todos los campos son obligatorios");
      setIsLoading(false);
      return;
    }

    const resp = await signIn({ email, pass });
    if (resp.data) {
      const user = {
        uid: resp.data.uid,
        email: email,
      };
      login(user);
    }
    if (resp.error) {
      setIsVisible(true);
      setError("Las credenciales son incorrectas");
      setIsLoading(false);
    }
  };
  const handdleForgotPass = () => {
    navigation.navigate("ForgotPass");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={require("../../../assets/img/background.jpg")}
        style={{ ...StyleSheet.absoluteFillObject, position: "absolute" }}
      />

      <View style={{ ...styles.logoContainer, paddingTop }}>
        <Image
          source={require("../../../assets/img/logoBlanco.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor={COLORS.white}
          textContentType="emailAddress"
        />
        <Input
          placeholder="Contraseña"
          value={pass}
          onChangeText={setPass}
          style={styles.input}
          placeholderTextColor={COLORS.white}
          secureTextEntry
        />
        <Button
          loading={isLoading}
          title="Iniciar Sesión"
          onPress={handdleLogin}
        />
        <Button
          title="Olvidé la contraseña"
          onPress={handdleForgotPass}
          style={{ backgroundColor: "transparent" }}
        />
      </View>

      <Notifications
        isVisible={isVisible}
        handleVisible={() => setIsVisible(false)}
        notification={{
          title: "Error",
          message: error,
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    paddingTop: SIZES.xl * 2,
    marginTop: SIZES.xl,
  },
  logo: {
    width: 123,
    height: 123,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.14)",
    color: COLORS.white,
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
});
