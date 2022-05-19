import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";

const IconAdd = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Image
        source={require("../../../assets/icons/plus.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default IconAdd;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
