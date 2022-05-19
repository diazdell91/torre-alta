import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";

const IconFilter = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Image
        source={require("../../../assets/icons/filter.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default IconFilter;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
