import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";

const IconLogOut = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Image
        source={require("../../../assets/icons/logout.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default IconLogOut;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
