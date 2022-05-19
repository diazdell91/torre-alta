import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Input } from "../../components";
import Layout from "../../theme/Layout";
import { COLORS, SIZES } from "../../theme/Theme";

type Props = any;

const ForgotPass = ({ navigation }: Props) => {
  const { top: paddingTop } = useSafeAreaInsets();

  const handdleLogin = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={require("../../../assets/img/background.jpg")}
        style={{ ...StyleSheet.absoluteFillObject }}
        resizeMode="cover"
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
        }}
      >
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
            style={styles.input}
            placeholderTextColor={COLORS.white}
          />
          <Button title="Recibir clave" />
          <Button
            title="Volver a iniciar sesión"
            onPress={handdleLogin}
            style={{ backgroundColor: "transparent" }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Layout.window.width,
    backgroundColor: "#fff",
    justifyContent: "center",
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
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
