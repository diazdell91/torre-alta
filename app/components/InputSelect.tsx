import {
  StyleSheet,
  View,
  TextInput as DefaultInput,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../theme/Theme";
import Icon from "./Icon";
import { IconType } from "../constants/Icons";

type InputProps = {
  style?: StyleProp<ViewStyle>;
  iconRight?: IconType;
  onRightPress?: () => void;
};
type Props = InputProps & DefaultInput["props"];

const Input = (props: Props) => {
  const { style, iconRight, onRightPress, ...rest } = props;
  return (
    <View style={styles.container}>
      <DefaultInput
        style={[styles.inputContainer, style]}
        placeholderTextColor={COLORS["gray-dark"]}
        editable={false}
        {...rest}
      />
      {iconRight && (
        <Pressable onPress={onRightPress} style={styles.iconLeft}>
          <Icon name={iconRight} />
        </Pressable>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    margin: SIZES.xs,
  },
  inputContainer: {
    height: SIZES.inputHeight,
    width: "100%",
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.inputRadius,
    paddingLeft: SIZES.m,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: COLORS["gray-medium"],
  },
  iconLeft: {
    position: "absolute",
    right: SIZES.s,
    backgroundColor: COLORS.white2,
  },
});
