import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Icon, Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  onPress: () => void;
};

const VideoButton = (props: Props) => {
  const { ...rest } = props;
  return (
    <Pressable style={styles.container} {...rest}>
      <Text>Añadir video</Text>
      <Icon name="Plus" size={32} color={COLORS.primary} />
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
