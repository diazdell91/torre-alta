import React from "react";
import {
  StyleSheet,
  View,
  TextInput as DefaultInput,
  StyleProp,
  ViewStyle,
} from "react-native";
import { COLORS, SIZES } from "../theme/Theme";
import Icon from "./Icon";
import { IconType } from "./icons";

type InputProps = {
  style?: StyleProp<ViewStyle>;
  iconRight?: IconType;
  flex?: boolean;
};
type Props = InputProps & DefaultInput["props"];

const Input = (props: Props) => {
  const { style, iconRight, flex, ...rest } = props;

  return (
    <View style={{ ...styles.container, flex: flex ? 1 : 0 }}>
      <DefaultInput
        style={[styles.inputContainer, style]}
        {...rest}
        placeholderTextColor={COLORS["gray-dark"]}
      />
      {iconRight && (
        <View style={styles.iconLeft}>
          <Icon name={iconRight} />
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
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
