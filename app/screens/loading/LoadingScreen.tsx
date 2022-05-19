import React from "react";
import { ActivityIndicatorProps, StyleSheet, View } from "react-native";
import { Loading } from "../../components";

type Props = {
  color?: ActivityIndicatorProps["color"];
};

const LoadingScreen = ({ color }: Props) => {
  return (
    <View style={styles.container}>
      <Loading color={color} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
