import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";

const IconBack = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Image
        source={require("../../../assets/icons/left-arrow.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default IconBack;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
