import React from "react";
import { Image, Pressable, ImageStyle } from "react-native";
import { Icons, IconType } from "../constants/Icons";

type Props = {
  name: IconType;
  style?: ImageStyle;
  onPress?: () => void;
};

const Icon = ({ name, style, onPress, ...rest }: Props) => {
  const uri = name ? Icons[`${name}`] : Icons.caballo;
  return (
    <Pressable onPress={onPress}>
      <Image source={uri} style={{ ...style }} {...rest} />
    </Pressable>
  );
};

export default Icon;
