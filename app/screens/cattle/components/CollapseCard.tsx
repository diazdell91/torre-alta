import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  title: string;
  children: React.ReactNode;
};

const CollapseCard = ({ title, children }: Props) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const color = isCollapsed ? COLORS.white2 : COLORS.primary;
  const header = isCollapsed
    ? {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: COLORS.primary,
      }
    : {
        borderBottomRightRadius: SIZES.s,
        borderBottomLeftRadius: SIZES.s,
        backgroundColor: COLORS.white2,
      };

  return (
    <View style={{ margin: SIZES.xs, borderRadius: SIZES.s }}>
      <Collapse
        isCollapsed={isCollapsed}
        touchableOpacityProps={{ opacity: 1 }}
        onToggle={() => setCollapsed(!isCollapsed)}
      >
        <CollapseHeader>
          <View style={{ ...styles.containerHeader, ...header }}>
            <Text h1 color={color}>
              {title}
            </Text>
            <Icon
              name={isCollapsed ? "chevron-up" : "chevron-down"}
              size={32}
              color={color}
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.containerBody}>{children}</View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default CollapseCard;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.m,
    borderTopLeftRadius: SIZES.s,
    borderTopRightRadius: SIZES.s,
  },
  containerBody: {
    padding: SIZES.m,
    backgroundColor: COLORS.white2,
    borderBottomLeftRadius: SIZES.s,
    borderBottomRightRadius: SIZES.s,
  },
});
