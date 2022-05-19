import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Text } from "../../../components";
import Layout from "../../../theme/Layout";

type Props = {};

const TaskPanel = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginStart: SIZES.xs }}>
        <Text>Reparar tractor</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable>
          <Image
            source={require("../../../../assets/icons/pausa.png")}
            style={styles.icon}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../../../../assets/icons/check.png")}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskPanel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Layout.window.width * 0.95,
    backgroundColor: COLORS.secundary,
    height: SIZES.buttonHeight,
    borderRadius: SIZES.buttonRadius,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: SIZES.xs,
    marginVertical: SIZES.xs,
  },
  icon: {
    height: 32,
    width: 32,
  },
});
