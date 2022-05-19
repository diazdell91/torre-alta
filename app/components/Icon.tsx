import React from "react";
import { StyleSheet, Image, View, ImageStyle } from "react-native";
import { Icons, IconType } from "../constants/Icons";

type Props = {
  name: IconType;
  style?: ImageStyle;
};

const Icon = ({ name, style, ...rest }: Props) => {
  const uri = name ? Icons[`${name}`] : Icons.caballo;
  return <Image source={uri} style={{ ...style }} {...rest} />;
};

export default Icon;
