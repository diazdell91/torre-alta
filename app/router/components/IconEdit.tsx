import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";
import { Icon } from "../../components";

const IconEdit = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Icon name="editWhite" style={styles.icon} />
    </Pressable>
  );
};

export default IconEdit;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
