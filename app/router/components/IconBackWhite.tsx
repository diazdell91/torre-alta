import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";
import { Icon } from "../../components";

const IconBackWhite = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Icon name="flechaIzqBlanca" style={styles.icon} />
    </Pressable>
  );
};

export default IconBackWhite;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
