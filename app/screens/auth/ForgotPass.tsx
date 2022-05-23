import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Input, Notifications } from "../../components";
import { COLORS, SIZES } from "../../theme/Theme";
import { authServices, forgotPass, VALID_EMAIL } from "../../apis/auth";

type Props = any;

const ForgotPass = ({ navigation }: Props) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });

  //regex email
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleForgot = async () => {
    setIsLoading(true);

    authServices
      .get(`${VALID_EMAIL}${email}`)
      .then((res) => {
        if (res.data.result === false) {
          setIsVisible(true);
          setNotification({
            title: "Correo inválido",
            message: res.data.message,
          });
          return;
        }
        forgotPass(email)
          .then((res) => {
            if (res.data.message === "Correo enviado") {
              setEmail("");
              setIsVisible(true);
              setNotification({
                title: "Whala!",
                message: "Su correo de recuperación se ha enviado con éxito",
              });
              return;
            }
          })
          .catch((err) => {
            setIsVisible(true);
            setNotification({
              title: "Error",
              message: err.message,
            });
          });
      })
      .catch((err) => {
        setIsVisible(true);
        setNotification({
          title: "Error",
          message: err.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleBack = () => {
    navigation.navigate("Login");
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
        <Button
          disabled={email === "" || !regexEmail.test(email)}
          loading={isLoading}
          title="Recibir clave"
          onPress={handleForgot}
        />
        <Button
          title="Volver a iniciar sesión"
          onPress={handleBack}
          style={{ backgroundColor: "transparent" }}
        />
      </View>

      <Notifications
        isVisible={isVisible}
        handleVisible={() => setIsVisible(false)}
        notification={notification}
      />
    </KeyboardAvoidingView>
  );
};

export default ForgotPass;

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
    width: "80%",
    flex: 1,
    justifyContent: "center",
  },
});
