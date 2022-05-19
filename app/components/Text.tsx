import {
  StyleProp,
  StyleSheet,
  Text as DefaultText,
  TextStyle,
} from "react-native";
import useTheme from "../hooks/useTheme";

type Props = {
  children?: React.ReactNode;
  color?: TextStyle["color"];
  size?: TextStyle["fontSize"];
  align?: TextStyle["textAlign"];
  weigth?: TextStyle["fontWeight"];
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  body?: boolean;
  caption?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text = (props: Props) => {
  const {
    //typography props,
    h1,
    h2,
    h3,
    h4,
    body,
    caption,
    //base props
    color,
    size,
    weigth,
    align,
    children,
    style,
    ...otherProps
  } = props;

  const { sizes, colors } = useTheme();
  const textStyles = StyleSheet.flatten([
    { color: colors["gray-medium"], fontFamily: "Montserrat-SemiBold" },
    h1 !== undefined && {
      fontSize: sizes.h1,
      fontFamily: "Montserrat-Medium",
    },
    h2 !== undefined && {
      fontSize: sizes.h2,
      fontFamily: "Montserrat-SemiBold",
    },
    h3 !== undefined && {
      fontSize: sizes.h3,
      fontFamily: "Montserrat-SemiBold",
    },
    h4 !== undefined && {
      fontSize: sizes.h4,
      fontFamily: "Montserrat-SemiBold",
    },
    h4 !== undefined && {
      fontSize: sizes.body,
      fontFamily: "Montserrat-SemiBold",
    },
    body !== undefined && {
      fontSize: sizes.body,
      fontFamily: "Montserrat-SemiBold",
    },
    caption !== undefined && {
      fontSize: sizes.caption,
      fontFamily: "Montserrat-SemiBold",
    },
    size !== undefined && { fontSize: size },
    color !== undefined && { color },
    weigth !== undefined && { fontWeight: weigth },
    align !== undefined && { textAlign: align },
    style,
  ]) as TextStyle;

  return (
    <DefaultText style={textStyles} {...otherProps}>
      {children}
    </DefaultText>
  );
};

export default Text;
