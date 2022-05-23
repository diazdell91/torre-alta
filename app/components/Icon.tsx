import React from "react";
import { View, ViewStyle } from "react-native";
import { COLORS } from "../theme/Theme";
import {
  Calendar,
  Check,
  Cow,
  Down,
  Edit,
  Female,
  Filter,
  Horse,
  Info,
  Left,
  LogOut,
  Male,
  Muleta,
  Pause,
  Pdf,
  Plus,
  Start,
  Task,
  Xls,
  IconType,
} from "./icons";

type Props = {
  name: IconType;
  color?: string;
  size?: number;
  style?: ViewStyle;
};

const Icon = ({
  name,
  color = COLORS.primary,
  size = 24,
  style,
  ...rest
}: Props) => {
  return (
    <View style={style} {...rest}>
      {name === "Calendar" && (
        <Calendar color={color} width={size} height={size} />
      )}
      {name === "Check" && <Check color={color} width={size} height={size} />}
      {name === "Cow" && <Cow color={color} width={size} height={size} />}
      {name === "Down" && <Down color={color} width={size} height={size} />}
      {name === "Edit" && <Edit color={color} width={size} height={size} />}
      {name === "Female" && <Female color={color} width={size} height={size} />}
      {name === "Filter" && <Filter color={color} width={size} height={size} />}
      {name === "Horse" && <Horse color={color} width={size} height={size} />}
      {name === "Info" && <Info color={color} width={size} height={size} />}
      {name === "Left" && <Left color={color} width={size} height={size} />}
      {name === "LogOut" && <LogOut color={color} width={size} height={size} />}
      {name === "Male" && <Male color={color} width={size} height={size} />}
      {name === "Muleta" && <Muleta color={color} width={size} height={size} />}
      {name === "Pause" && <Pause color={color} width={size} height={size} />}
      {name === "Pdf" && <Pdf color={color} width={size} height={size} />}
      {name === "Plus" && <Plus color={color} width={size} height={size} />}
      {name === "Start" && <Start color={color} width={size} height={size} />}
      {name === "Task" && <Task color={color} width={size} height={size} />}
      {name === "Xls" && <Xls color={color} width={size} height={size} />}
    </View>
  );
};

export default Icon;
