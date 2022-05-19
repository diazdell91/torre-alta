import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Icon, Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {};

const VideoButton = (props: Props) => {
  return (
    <Pressable style={styles.container}>
      <Text>Añadir video</Text>
      <Icon name="plus" />
    </Pressable>
  );
};

export default VideoButton;

const styles = StyleSheet.create({
  container: {
    margin: SIZES.m,
    borderRadius: SIZES.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.m,
    backgroundColor: COLORS.white2,
  },
});
