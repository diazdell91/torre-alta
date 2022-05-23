import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  ViewStyle,
} from "react-native";
import Icon from "./Icon";
import { IconType } from "./icons";

type Props = {
  name: IconType;
  color?: string;
  size?: number;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
};

const IconButton = (props: Props) => {
  const { name, color, size, style, onPress, ...otherProps } = props;
  return (
    <Pressable onPress={onPress} style={style} {...otherProps}>
      <Icon name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;
