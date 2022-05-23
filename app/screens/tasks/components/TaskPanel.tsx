import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../theme/Theme";
import { IconButton, Text } from "../../../components";
import Layout from "../../../theme/Layout";

type Props = {};

const TaskPanel = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginStart: SIZES.xs }}>
        <Text>Reparar tractor</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="Pause" />
        <IconButton name="Check" />
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
});
