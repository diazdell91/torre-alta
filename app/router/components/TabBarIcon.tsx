import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";

type Props = {
  name?: React.ComponentProps<typeof Icon>["name"];
  focused?: boolean;
  color?: string;
};
function TabBarIcon(props: Props) {
  const { name, focused, color, ...otherProps } = props;
  return (
    <Icon
      size={24}
      name={name}
      color={color}
      style={{ marginBottom: -3 }}
      {...otherProps}
    />
  );
}

export default TabBarIcon;
