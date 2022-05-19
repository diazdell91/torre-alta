import React from "react";
import {
  StyleSheet,
  TextStyle,
  ActivityIndicator,
  TouchableOpacity as DefaultTouchableOpacity,
} from "react-native";
import useTheme from "../hooks/useTheme";
import Layout from "../theme/Layout";
import { SIZES } from "../theme/Theme";
import Text from "./Text";

type ButtonPropsParams = {
  title?: string;
  loading?: boolean;
  fontStyle?: TextStyle;
};

export type ButtonProps = ButtonPropsParams & DefaultTouchableOpacity["props"];

export function Button(props: ButtonProps) {
  const { style, title, loading, disabled, fontStyle, ...otherProps } = props;

  const { colors } = useTheme();

  const color = disabled ? colors?.["gray-medium"] : colors?.white;
  const backgroundColor = disabled ? colors["gray-light"] : colors.primary;

  return (
    <DefaultTouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      style={[styles.button, { backgroundColor }, style]}
      {...otherProps}
    >
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <Text style={[{ color }, fontStyle]}>{title}</Text>
      )}
    </DefaultTouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    width: Layout.window.width * 0.95,
    height: SIZES.buttonHeight,
    marginVertical: SIZES.xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: SIZES.buttonRadius,
  },
});
