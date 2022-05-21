import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../components";

type Props = {
  message?: string;
};

const Error = ({ message }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Upss!!</Text>
      {message && <Text>{message}</Text>}
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
