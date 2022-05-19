import React from "react";
import { Pressable, PressableProps, Image, StyleSheet } from "react-native";

const IconLogo = (props: PressableProps) => {
  const { ...otherProps } = props;
  return (
    <Pressable {...otherProps}>
      <Image
        source={require("../../../assets/icons/logoRojo.png")}
        style={styles.icon}
        height={24}
        width={24}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default IconLogo;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
